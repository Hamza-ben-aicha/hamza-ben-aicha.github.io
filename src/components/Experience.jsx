import { useRef } from "react";
import { m, useReducedMotion, useScroll, useSpring } from "motion/react";
import { usePrefs } from "../lib/prefs.jsx";
import { experience, ui } from "../content.js";
import { Heading } from "./Reveal.jsx";
import { IconArrow } from "./Icons.jsx";

const ease = [0.22, 1, 0.36, 1];

export default function Experience({ onOpen }) {
  const { t } = usePrefs();
  const reduce = useReducedMotion();
  const listRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: listRef, offset: ["start 75%", "end 55%"] });
  const fill = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

  return (
    <section className="section" id="experience" aria-labelledby="exp-title">
      <div className="container">
        <header className="section__head">
          <Heading id="exp-title">{t(ui.experience.title)}</Heading>
        </header>

        <ol className="timeline" ref={listRef}>
          <li className="timeline__rail" aria-hidden>
            <m.span className="timeline__fill" style={{ scaleY: reduce ? 1 : fill }} />
          </li>
          {experience.map((e, i) => (
            <m.li
              key={i}
              className="timeline__item"
              initial={reduce ? false : { opacity: 0, x: -14 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "0px 0px -20% 0px" }}
              transition={{ duration: 0.6, ease }}
            >
              <span className="timeline__node" aria-hidden />
              <p className="timeline__date">{t(e.period)}</p>
              <div className="timeline__body">
                <h3 className="timeline__role">
                  {t(e.role)}
                  <span className="timeline__org">{e.org}</span>
                </h3>
                <p className="timeline__mode">{t(e.mode)}</p>
                <p className="timeline__text">{t(e.text)}</p>
                {e.project && (
                  <button type="button" className="link-btn" onClick={() => onOpen(e.project)}>
                    {t(ui.experience.caseStudy)}
                    <IconArrow />
                  </button>
                )}
              </div>
            </m.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
