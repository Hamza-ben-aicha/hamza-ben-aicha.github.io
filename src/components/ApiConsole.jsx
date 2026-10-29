import { useCallback, useEffect, useRef, useState } from "react";
import { useReducedMotion } from "motion/react";
import { usePrefs } from "../lib/prefs.jsx";
import { apiResponses, ui } from "../content.js";

const ENDPOINTS = Object.keys(apiResponses);

// Pretty-print JSON, keeping short arrays of primitives on one line.
function format(value, indent = 0) {
  const pad = "  ".repeat(indent);
  const inner = "  ".repeat(indent + 1);
  if (Array.isArray(value)) {
    const prim = value.every((v) => v === null || typeof v !== "object");
    const inline = "[" + value.map((v) => JSON.stringify(v)).join(", ") + "]";
    if (prim && inline.length <= 44) return inline;
    return "[\n" + value.map((v) => inner + format(v, indent + 1)).join(",\n") + "\n" + pad + "]";
  }
  if (value && typeof value === "object") {
    const entries = Object.entries(value);
    return (
      "{\n" +
      entries.map(([k, v]) => `${inner}${JSON.stringify(k)}: ${format(v, indent + 1)}`).join(",\n") +
      "\n" +
      pad +
      "}"
    );
  }
  return JSON.stringify(value);
}

// Split one line of JSON into coloured tokens.
const TOKEN = /("(?:\\.|[^"\\])*")(\s*:)?|(-?\d+(?:\.\d+)?)|(true|false|null)|([{}[\],:])/g;
function tokenize(line) {
  const out = [];
  let last = 0;
  let m;
  TOKEN.lastIndex = 0;
  while ((m = TOKEN.exec(line))) {
    if (m.index > last) out.push({ c: "", s: line.slice(last, m.index) });
    if (m[1] && m[2]) {
      out.push({ c: "k", s: m[1] });
      out.push({ c: "p", s: m[2] });
    } else if (m[1]) out.push({ c: "s", s: m[1] });
    else if (m[3]) out.push({ c: "n", s: m[3] });
    else if (m[4]) out.push({ c: "b", s: m[4] });
    else out.push({ c: "p", s: m[5] });
    last = TOKEN.lastIndex;
  }
  if (last < line.length) out.push({ c: "", s: line.slice(last) });
  return out;
}

const wait = (ms) => new Promise((r) => setTimeout(r, ms));

export default function ApiConsole({ startDelay = 1100 }) {
  const { t } = usePrefs();
  const reduce = useReducedMotion();
  const [endpoint, setEndpoint] = useState("/me");
  const [typed, setTyped] = useState("");
  const [phase, setPhase] = useState("idle"); // idle | typing | loading | streaming | done
  const [lines, setLines] = useState([]);
  const [shown, setShown] = useState(0);
  const [ms, setMs] = useState(0);
  const runId = useRef(0);
  const bodyRef = useRef(null);

  const run = useCallback(
    async (ep) => {
      const id = ++runId.current;
      const alive = () => id === runId.current;
      const all = format(apiResponses[ep]).split("\n");
      setEndpoint(ep);
      setLines(all);

      if (reduce) {
        setTyped(ep);
        setMs(24 + Math.round(Math.random() * 30));
        setShown(all.length);
        setPhase("done");
        return;
      }

      setShown(0);
      setPhase("typing");
      for (let i = 1; i <= ep.length; i++) {
        if (!alive()) return;
        setTyped(ep.slice(0, i));
        await wait(55);
      }
      if (!alive()) return;
      setPhase("loading");
      await wait(380);
      if (!alive()) return;
      setMs(24 + Math.round(Math.random() * 30));
      setPhase("streaming");
      for (let i = 1; i <= all.length; i++) {
        if (!alive()) return;
        setShown(i);
        await wait(42);
      }
      if (alive()) setPhase("done");
    },
    [reduce],
  );

  useEffect(() => {
    const timer = setTimeout(() => run("/me"), reduce ? 0 : startDelay);
    return () => {
      clearTimeout(timer);
      // Bump the run id so any in-flight animation stops.
      // eslint-disable-next-line react-hooks/exhaustive-deps
      runId.current++;
    };
  }, [run, startDelay, reduce]);

  const busy = phase === "typing" || phase === "loading";
  const hasStatus = phase === "streaming" || phase === "done";

  return (
    <section className="console" aria-label={t(ui.console.label)}>
      <div className="console__bar">
        <span className="console__title">{t(ui.console.label)}</span>
        <div className="console__tabs" role="group" aria-label={t(ui.console.hint)}>
          {ENDPOINTS.map((ep) => (
            <button
              key={ep}
              type="button"
              className={`console__tab ${endpoint === ep ? "is-active" : ""}`}
              aria-pressed={endpoint === ep}
              onClick={() => run(ep)}
            >
              {ep}
            </button>
          ))}
        </div>
      </div>

      <div className="console__request">
        <span className="console__method">GET</span>
        <span className="console__url">
          <span className="console__host">api</span>
          {typed}
          {phase === "typing" && <span className="console__caret" aria-hidden />}
        </span>
        <button
          type="button"
          className="console__send"
          onClick={() => run(endpoint)}
          disabled={busy}
        >
          {phase === "loading" ? t(ui.console.sending) : t(ui.console.send)}
        </button>
      </div>

      <div className="console__status" aria-live="polite">
        {phase === "loading" && <span className="console__spinner" aria-hidden />}
        {hasStatus && (
          <>
            <span className="console__ok">200 OK</span>
            <span>{ms} ms</span>
            <span>application/json</span>
          </>
        )}
      </div>

      <pre className="console__body" ref={bodyRef} tabIndex={0}>
        <code>
          {lines.slice(0, shown).map((line, i) => (
            <span className="console__line" key={`${endpoint}-${i}`}>
              <span className="console__ln" aria-hidden>
                {i + 1}
              </span>
              <span>
                {tokenize(line).map((tok, j) =>
                  tok.c ? (
                    <span key={j} className={`tk-${tok.c}`}>
                      {tok.s}
                    </span>
                  ) : (
                    tok.s
                  ),
                )}
              </span>
            </span>
          ))}
          {phase === "streaming" && <span className="console__cursor" aria-hidden />}
        </code>
      </pre>
    </section>
  );
}
