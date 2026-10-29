import { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, m } from "motion/react";
import { usePrefs } from "../lib/prefs.jsx";
import { cvFiles, ui } from "../content.js";
import { IconDownload } from "./Icons.jsx";

// "Download CV" button with a small menu of the available CV versions.
export default function CvMenu({ variant = "ghost", align = "right", placement = "below" }) {
  const { t } = usePrefs();
  const [open, setOpen] = useState(false);
  const wrap = useRef(null);
  const id = useId();

  useEffect(() => {
    if (!open) return;
    const onDown = (e) => {
      if (wrap.current && !wrap.current.contains(e.target)) setOpen(false);
    };
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("pointerdown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div className={`cv-menu cv-menu--${align} cv-menu--${placement}`} ref={wrap}>
      <button
        type="button"
        className={`btn btn--${variant}`}
        aria-expanded={open}
        aria-controls={id}
        onClick={() => setOpen((o) => !o)}
      >
        <IconDownload />
        {t(ui.cv)}
      </button>
      <AnimatePresence>
        {open && (
          <m.ul
            id={id}
            className="cv-menu__list"
            initial={{ opacity: 0, y: placement === "above" ? 6 : -6, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: placement === "above" ? 6 : -6, scale: 0.98 }}
            transition={{ duration: 0.16, ease: "easeOut" }}
          >
            {cvFiles.map((f) => (
              <li key={f.href}>
                <a href={f.href} download onClick={() => setOpen(false)}>
                  <span>{t(f.label)}</span>
                  <span className="cv-menu__ext">PDF</span>
                </a>
              </li>
            ))}
          </m.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
