import { useState } from "react";
import { AnimatePresence, m } from "motion/react";
import { usePrefs } from "../lib/prefs.jsx";
import { site, ui } from "../content.js";
import { Heading, Reveal } from "./Reveal.jsx";
import CvMenu from "./CvMenu.jsx";
import {
  IconArrowUp,
  IconCheck,
  IconCopy,
  IconGithub,
  IconLinkedin,
  IconPhone,
  IconWhatsapp,
} from "./Icons.jsx";

export default function Contact() {
  const { t } = usePrefs();
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(site.email);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = site.email;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      ta.remove();
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const [user, domain] = site.email.split("@");

  return (
    <>
      <section className="section contact" id="contact" aria-labelledby="contact-title">
        <div className="container">
          <Heading id="contact-title">{t(ui.contact.title)}</Heading>
          <Reveal as="p" className="section__intro" delay={0.05}>
            {t(ui.contact.line)}
          </Reveal>

          <Reveal delay={0.1} className="contact__mail-row">
            <a className="contact__mail" href={`mailto:${site.email}`}>
              <span>{user}</span>
              <span className="contact__at">@{domain}</span>
            </a>
          </Reveal>

          <Reveal delay={0.15} className="contact__actions">
            <button type="button" className="btn btn--primary" onClick={copy}>
              <AnimatePresence mode="wait" initial={false}>
                <m.span
                  key={copied ? "y" : "n"}
                  className="btn__swap"
                  initial={{ y: 8, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -8, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  {copied ? <IconCheck /> : <IconCopy />}
                  {copied ? t(ui.contact.copied) : t(ui.contact.copy)}
                </m.span>
              </AnimatePresence>
            </button>
            <CvMenu variant="ghost" />
          </Reveal>

          <Reveal delay={0.2} as="ul" className="contact__links">
            <li>
              <a href={site.linkedin} target="_blank" rel="noreferrer">
                <IconLinkedin />
                LinkedIn
              </a>
            </li>
            <li>
              <a href={site.github} target="_blank" rel="noreferrer">
                <IconGithub />
                GitHub
              </a>
            </li>
            <li>
              <a href={site.phoneHref}>
                <IconPhone />
                {site.phone}
              </a>
            </li>
            <li>
              <a href={site.whatsapp} target="_blank" rel="noreferrer">
                <IconWhatsapp />
                WhatsApp
              </a>
            </li>
          </Reveal>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer__inner">
          <p>© {new Date().getFullYear()} Hamza Ben Aicha</p>
          <p className="footer__built">{t(ui.footer.built)}</p>
          <a href="#top" className="link-btn">
            {t(ui.footer.top)}
            <IconArrowUp />
          </a>
        </div>
      </footer>
    </>
  );
}
