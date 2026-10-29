import { useRef } from "react";
import { m, useReducedMotion, useScroll, useTransform } from "motion/react";
import { usePrefs } from "../lib/prefs.jsx";
import { projects, ui } from "../content.js";
import { Heading, Reveal } from "./Reveal.jsx";
import { IconArrow, IconExternal } from "./Icons.jsx";

const host = (url) => url.replace(/^https?:\/\//, "").replace(/\/$/, "");

const ease = [0.22, 1, 0.36, 1];

function Cover({ project, onOpen, sizes }) {
  const { t } = usePrefs();
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], reduce ? ["0%", "0%"] : ["-5%", "5%"]);

  return (
    <m.button
      ref={ref}
      type="button"
      className="cover"
      onClick={onOpen}
      aria-label={`${t(ui.work.open)}: ${t(project.name)}`}
      initial={reduce ? false : { clipPath: "inset(12% 6% 12% 6% round 22px)", opacity: 0.4 }}
      whileInView={{ clipPath: "inset(0% 0% 0% 0% round 18px)", opacity: 1 }}
      viewport={{ once: true, margin: "0px 0px -12% 0px" }}
      transition={{ duration: 1.1, ease }}
    >
      <m.span className="cover__inner" style={{ y }}>
        <img
          src={project.cover}
          alt=""
          loading="lazy"
          decoding="async"
          width="1600"
          height="1000"
          sizes={sizes}
        />
      </m.span>
      <span className="cover__hint" aria-hidden>
        {t(ui.work.open)}
        <IconArrow />
      </span>
    </m.button>
  );
}

function Facts({ facts }) {
  const { t } = usePrefs();
  return (
    <dl className="facts">
      {facts.map((f, i) => (
        <div key={i} className="facts__item">
          <dt>{f.value}</dt>
          <dd>{t(f.label)}</dd>
        </div>
      ))}
    </dl>
  );
}

function Stack({ items, max = 6 }) {
  const shown = items.slice(0, max);
  const more = items.length - shown.length;
  return (
    <ul className="chips" aria-label="Stack">
      {shown.map((s) => (
        <li key={s}>{s}</li>
      ))}
      {more > 0 && <li className="chips__more">+{more}</li>}
    </ul>
  );
}

function Feature({ project, index, onOpen }) {
  const { t } = usePrefs();
  const flip = index % 2 === 1;
  return (
    <article className={`feature ${flip ? "feature--flip" : ""}`} aria-labelledby={`p-${project.id}`}>
      <Cover project={project} onOpen={onOpen} sizes="(min-width: 1000px) 680px, 100vw" />
      <Reveal className="feature__text" delay={0.1}>
        <p className="meta">
          <span>{t(project.kind)}</span>
          <span className="meta__sep" aria-hidden />
          <span>{t(project.period)}</span>
        </p>
        <h3 id={`p-${project.id}`} className="feature__name">
          {t(project.name)}
        </h3>
        <p className="feature__title">{t(project.title)}</p>
        <p className="feature__summary">{t(project.summary)}</p>
        <Facts facts={project.facts} />
        <Stack items={project.stack} />
        <div className="feature__actions">
          <button type="button" className="btn btn--line" onClick={onOpen}>
            {t(ui.work.open)}
            <IconArrow />
          </button>
          {project.live && (
            <a className="live-link" href={project.live} target="_blank" rel="noreferrer">
              <span className="live-link__dot" aria-hidden />
              {host(project.live)}
              <IconExternal />
            </a>
          )}
        </div>
      </Reveal>
    </article>
  );
}

function Small({ project, onOpen }) {
  const { t } = usePrefs();
  return (
    <article className="small" aria-labelledby={`p-${project.id}`}>
      <Cover project={project} onOpen={onOpen} sizes="(min-width: 900px) 560px, 100vw" />
      <Reveal className="small__text" delay={0.08}>
        <p className="meta">
          <span>{t(project.kind)}</span>
          <span className="meta__sep" aria-hidden />
          <span>{t(project.period)}</span>
        </p>
        <h3 id={`p-${project.id}`} className="small__name">
          {t(project.name)}
        </h3>
        <p className="feature__summary">{t(project.summary)}</p>
        <button type="button" className="btn btn--line" onClick={onOpen}>
          {t(ui.work.open)}
          <IconArrow />
        </button>
      </Reveal>
    </article>
  );
}

export default function Projects({ onOpen }) {
  const { t } = usePrefs();
  const featured = projects.slice(0, 4);
  const rest = projects.slice(4);
  return (
    <section className="section" id="work" aria-labelledby="work-title">
      <div className="container">
        <header className="section__head">
          <Heading id="work-title">{t(ui.work.title)}</Heading>
          <Reveal as="p" className="section__intro" delay={0.1}>
            {t(ui.work.intro)}
          </Reveal>
        </header>

        <div className="features">
          {featured.map((p, i) => (
            <Feature key={p.id} project={p} index={i} onOpen={() => onOpen(p.id)} />
          ))}
        </div>

        <div className="smalls">
          {rest.map((p) => (
            <Small key={p.id} project={p} onOpen={() => onOpen(p.id)} />
          ))}
        </div>

        <Reveal as="p" className="earlier">
          {t(ui.work.earlier)}
        </Reveal>
      </div>
    </section>
  );
}
