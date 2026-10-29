import { useEffect, useRef } from "react";
import { m, useReducedMotion } from "motion/react";
import { usePrefs } from "../lib/prefs.jsx";
import { archFr, projects, ui } from "../content.js";
import { IconArrow, IconArrowLeft, IconClose, IconExternal } from "./Icons.jsx";

const ease = [0.22, 1, 0.36, 1];

function Column({ title, items, tone }) {
  const { lang } = usePrefs();
  return (
    <div className={`arch__col arch__col--${tone}`}>
      <p className="arch__label">{title}</p>
      <ul>
        {items.map((it) => (
          <li key={it}>{(lang === "fr" && archFr[it]) || it}</li>
        ))}
      </ul>
    </div>
  );
}

export default function ProjectModal({ id, onClose, onNavigate }) {
  const { t } = usePrefs();
  const reduce = useReducedMotion();
  const idx = projects.findIndex((p) => p.id === id);
  const p = projects[idx];
  const next = projects[(idx + 1) % projects.length];
  const prev = projects[(idx - 1 + projects.length) % projects.length];
  const panelRef = useRef(null);
  const closeRef = useRef(null);

  // Lock page scroll, focus the dialog, close on Escape, arrow keys switch project.
  useEffect(() => {
    const prevFocus = document.activeElement;
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus({ preventScroll: true });
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "Tab" && panelRef.current) {
        const f = panelRef.current.querySelectorAll(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
        );
        if (!f.length) return;
        const first = f[0];
        const last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = overflow;
      document.removeEventListener("keydown", onKey);
      if (prevFocus && prevFocus.focus) prevFocus.focus({ preventScroll: true });
    };
  }, [onClose]);

  // Scroll back to the top when switching between projects.
  useEffect(() => {
    panelRef.current?.scrollTo({ top: 0 });
  }, [id]);

  if (!p) return null;

  return (
    <m.div
      className="modal"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      onClick={onClose}
    >
      <m.div
        ref={panelRef}
        className="modal__panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        onClick={(e) => e.stopPropagation()}
        initial={reduce ? false : { y: 60, opacity: 0, scale: 0.98 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        exit={reduce ? { opacity: 0 } : { y: 40, opacity: 0, scale: 0.98 }}
        transition={{ duration: 0.5, ease }}
      >
        <div className="modal__top">
          <p className="meta">
            <span>{t(p.kind)}</span>
            <span className="meta__sep" aria-hidden />
            <span>{t(p.period)}</span>
          </p>
          <button ref={closeRef} type="button" className="icon-btn" onClick={onClose} aria-label={t(ui.modal.close)}>
            <IconClose />
          </button>
        </div>

        <m.div
          key={p.id}
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease }}
        >
          <header className="modal__head">
            <h2 id="modal-title" className="modal__name">
              {t(p.name)}
            </h2>
            <p className="modal__title">{t(p.title)}</p>
          </header>

          <m.figure
            className="modal__cover"
            initial={reduce ? false : { clipPath: "inset(0 0 100% 0 round 16px)" }}
            animate={{ clipPath: "inset(0 0 0% 0 round 16px)" }}
            transition={{ duration: 0.9, ease, delay: 0.1 }}
          >
            <img src={p.cover} alt="" width="1600" height="1000" />
          </m.figure>

          <div className="modal__grid">
            <div className="modal__main">
              <section>
                <h3 className="modal__h">{t(ui.modal.overview)}</h3>
                <p>{t(p.overview)}</p>
              </section>

              <section>
                <h3 className="modal__h">{t(ui.modal.built)}</h3>
                {p.built.map((group, gi) => (
                  <div className="built" key={gi}>
                    {group.label && <p className="built__label">{t(group.label)}</p>}
                    <ul className="built__list">
                      {t(group.items).map((it, i) => (
                        <li key={i}>{it}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </section>

              <section className="challenge">
                <h3 className="modal__h">{t(ui.modal.challenge)}</h3>
                <p>{t(p.challenge)}</p>
              </section>
            </div>

            <aside className="modal__side">
              <dl className="side-list">
                <div>
                  <dt>{t(ui.modal.role)}</dt>
                  <dd>{t(p.role)}</dd>
                </div>
                <div>
                  <dt>{t(ui.modal.period)}</dt>
                  <dd>{t(p.period)}</dd>
                </div>
                {p.live && (
                  <div>
                    <dt>{t(ui.modal.live)}</dt>
                    <dd>
                      <a className="live-link" href={p.live} target="_blank" rel="noreferrer">
                        <span className="live-link__dot" aria-hidden />
                        {p.live.replace(/^https?:\/\//, "").replace(/\/$/, "")}
                        <IconExternal />
                      </a>
                    </dd>
                  </div>
                )}
              </dl>
              <dl className="facts facts--stacked">
                {p.facts.map((f, i) => (
                  <div key={i} className="facts__item">
                    <dt>{f.value}</dt>
                    <dd>{t(f.label)}</dd>
                  </div>
                ))}
              </dl>
              <div>
                <p className="side-list__dt">{t(ui.modal.stack)}</p>
                <ul className="chips">
                  {p.stack.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>

          <section className="arch">
            <h3 className="modal__h">{t(ui.modal.architecture)}</h3>
            <div className="arch__flow">
              <Column title={t(ui.modal.clients)} items={p.architecture.clients} tone="a" />
              <span className="arch__link" aria-hidden />
              <Column title={t(ui.modal.core)} items={p.architecture.core} tone="b" />
              <span className="arch__link" aria-hidden />
              <Column title={t(ui.modal.services)} items={p.architecture.services} tone="c" />
            </div>
          </section>
        </m.div>

        <nav className="modal__nav" aria-label="Projects">
          <button type="button" className="modal__navbtn" onClick={() => onNavigate(prev.id)}>
            <IconArrowLeft />
            <span>
              <small>{t(ui.modal.prev)}</small>
              {t(prev.name)}
            </span>
          </button>
          <button type="button" className="modal__navbtn modal__navbtn--next" onClick={() => onNavigate(next.id)}>
            <span>
              <small>{t(ui.modal.next)}</small>
              {t(next.name)}
            </span>
            <IconArrow />
          </button>
        </nav>
      </m.div>
    </m.div>
  );
}
