import { m, useReducedMotion } from "motion/react";
import { usePrefs } from "../lib/prefs.jsx";
import { ui } from "../content.js";
import ApiConsole from "./ApiConsole.jsx";
import CvMenu from "./CvMenu.jsx";
import { IconArrow } from "./Icons.jsx";

const ease = [0.22, 1, 0.36, 1];

function Letters({ text, delay = 0 }) {
  const reduce = useReducedMotion();
  return (
    <span className="hero__line" aria-hidden>
      {[...text].map((ch, i) => (
        <m.span
          key={i}
          className="hero__char"
          initial={reduce ? false : { y: "105%" }}
          animate={{ y: "0%" }}
          transition={{ duration: 0.8, ease, delay: delay + i * 0.035 }}
        >
          {ch === " " ? " " : ch}
        </m.span>
      ))}
    </span>
  );
}

export default function Hero() {
  const { t } = usePrefs();
  const reduce = useReducedMotion();
  const rise = (delay) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 18 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7, ease, delay },
        };

  return (
    <section className="hero" id="top">
      <div className="container hero__inner">
        <div className="hero__copy">
          <m.p className="hero__status" {...rise(0.05)}>
            <img src="me-avatar.webp" alt="" width="36" height="36" className="hero__avatar" />
            <span className="hero__dot" aria-hidden />
            {t(ui.hero.status)}
          </m.p>

          <h1 className="hero__name" aria-label="Hamza Ben Aicha">
            <Letters text="Hamza" delay={0.1} />
            <Letters text="Ben Aicha" delay={0.28} />
          </h1>

          <m.p className="hero__lead" {...rise(0.55)}>
            {t(ui.hero.lead)}
          </m.p>
          <m.p className="hero__sub" {...rise(0.65)}>
            {t(ui.hero.sub)}
          </m.p>

          <m.div className="hero__ctas" {...rise(0.75)}>
            <a href="#work" className="btn btn--primary">
              {t(ui.hero.ctaWork)}
              <IconArrow />
            </a>
            <CvMenu variant="ghost" align="left" />
          </m.div>
        </div>

        <m.div
          className="hero__console"
          initial={reduce ? false : { opacity: 0, y: 24, rotateX: 8 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 0.9, ease, delay: 0.45 }}
        >
          <ApiConsole startDelay={1200} />
        </m.div>
      </div>
    </section>
  );
}
