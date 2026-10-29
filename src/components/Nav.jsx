import { useEffect, useState } from "react";
import { AnimatePresence, m, useScroll, useSpring } from "motion/react";
import { usePrefs } from "../lib/prefs.jsx";
import { ui } from "../content.js";
import CvMenu from "./CvMenu.jsx";
import { IconClose, IconMenu, IconMoon, IconSun } from "./Icons.jsx";

const links = ["work", "experience", "about", "contact"];

export default function Nav() {
  const { t, lang, theme, toggleLang, toggleTheme } = usePrefs();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 200, damping: 40, restDelta: 0.001 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight the section currently in view.
  useEffect(() => {
    const els = links.map((id) => document.getElementById(id)).filter(Boolean);
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  const ThemeIcon = theme === "dark" ? IconSun : IconMoon;

  return (
    <header className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
      <m.div className="nav__progress" style={{ scaleX: progress }} aria-hidden />
      <div className="nav__inner container">
        <a href="#top" className="nav__brand" onClick={() => setOpen(false)}>
          <span className="nav__mark" aria-hidden>
            H
          </span>
          <span>Hamza Ben Aicha</span>
        </a>

        <nav className="nav__links" aria-label="Main">
          {links.map((id) => (
            <a key={id} href={`#${id}`} className={active === id ? "is-active" : ""}>
              {t(ui.nav[id])}
            </a>
          ))}
        </nav>

        <div className="nav__tools">
          <button
            type="button"
            className="icon-btn icon-btn--text"
            onClick={toggleLang}
            aria-label={t(ui.langSwitch)}
            title={t(ui.langSwitch)}
          >
            {lang === "en" ? "FR" : "EN"}
          </button>
          <button
            type="button"
            className="icon-btn"
            onClick={toggleTheme}
            aria-label={t(theme === "dark" ? ui.themeToLight : ui.themeToDark)}
            title={t(theme === "dark" ? ui.themeToLight : ui.themeToDark)}
          >
            <AnimatePresence mode="wait" initial={false}>
              <m.span
                key={theme}
                className="icon-btn__glyph"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <ThemeIcon />
              </m.span>
            </AnimatePresence>
          </button>
          <div className="nav__cv">
            <CvMenu variant="small" />
          </div>
          <button
            type="button"
            className="icon-btn nav__burger"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={t(ui.menu)}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <IconClose /> : <IconMenu />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <m.div
            id="mobile-menu"
            className="nav__sheet"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            <nav className="container" aria-label="Mobile">
              {links.map((id, i) => (
                <m.a
                  key={id}
                  href={`#${id}`}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.04 * i + 0.05 }}
                >
                  {t(ui.nav[id])}
                </m.a>
              ))}
              <div className="nav__sheet-cv">
                <CvMenu variant="primary" />
              </div>
            </nav>
          </m.div>
        )}
      </AnimatePresence>
    </header>
  );
}
