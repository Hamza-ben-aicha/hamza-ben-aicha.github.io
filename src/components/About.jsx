import { m, useReducedMotion } from "motion/react";
import { usePrefs } from "../lib/prefs.jsx";
import { education, site, skills, ui } from "../content.js";
import { Heading, Reveal } from "./Reveal.jsx";
import { IconExternal } from "./Icons.jsx";

const ease = [0.22, 1, 0.36, 1];

export default function About() {
  const { t } = usePrefs();
  const reduce = useReducedMotion();

  return (
    <section className="section" id="about" aria-labelledby="about-title">
      <div className="container">
        <div className="about">
          <m.figure
            className="about__photo"
            initial={reduce ? false : { clipPath: "inset(100% 0 0 0 round 20px)" }}
            whileInView={{ clipPath: "inset(0% 0 0 0 round 20px)" }}
            viewport={{ once: true, margin: "0px 0px -15% 0px" }}
            transition={{ duration: 1.1, ease }}
          >
            <m.img
              src="me.webp"
              alt="Portrait of Hamza Ben Aicha"
              width="900"
              height="1200"
              loading="lazy"
              initial={reduce ? false : { scale: 1.15 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.6, ease }}
            />
          </m.figure>

          <div className="about__text">
            <Heading id="about-title">{t(ui.about.title)}</Heading>
            <Reveal className="prose" delay={0.05}>
              <p>{t(ui.about.p1)}</p>
              <p>{t(ui.about.p2)}</p>
              <p>{t(ui.about.p3)}</p>
            </Reveal>

            <div className="about__facts">
              <Reveal className="about__block" delay={0.1}>
                <h3>{t(ui.about.education)}</h3>
                <ul className="edu">
                  {education.map((e) => (
                    <li key={e.years}>
                      <span className="edu__degree">{t(e.degree)}</span>
                      <span className="edu__meta">
                        {e.school}, {e.years}
                      </span>
                    </li>
                  ))}
                </ul>
              </Reveal>
              <Reveal className="about__block" delay={0.15}>
                <h3>{t(ui.about.certification)}</h3>
                <p className="edu__degree">Microsoft Certified: Azure Fundamentals (AZ-900)</p>
                <p className="edu__meta">2024</p>
                <a className="link-btn" href={site.azureCert} target="_blank" rel="noreferrer">
                  {t(ui.about.viewCert)}
                  <IconExternal />
                </a>
                <h3 className="about__lang-title">{t(ui.about.languages)}</h3>
                <ul className="langs">
                  {t(ui.about.langList).map(([l, lvl]) => (
                    <li key={l}>
                      <span>{l}</span>
                      <span className="edu__meta">{lvl}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </div>

        <div className="skills" aria-labelledby="stack-title">
          <Heading as="h2" id="stack-title" className="heading--sm">
            {t(ui.stack.title)}
          </Heading>
          <div className="skills__grid">
            {skills.map((g, i) => (
              <Reveal key={i} className="skills__group" delay={0.05 * i}>
                <h3>{t(g.group)}</h3>
                <ul className="chips chips--loose">
                  {g.items.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
