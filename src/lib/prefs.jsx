import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";

const PrefsContext = createContext(null);

function read(key) {
  try {
    return window.localStorage.getItem(key);
  } catch {
    return null;
  }
}
function write(key, value) {
  try {
    window.localStorage.setItem(key, value);
  } catch {
    /* storage unavailable: preference just won't persist */
  }
}

function initialLang() {
  const saved = read("hba-lang");
  if (saved === "en" || saved === "fr") return saved;
  const nav = (navigator.language || "en").toLowerCase();
  return nav.startsWith("fr") ? "fr" : "en";
}

function initialTheme() {
  const saved = read("hba-theme");
  if (saved === "dark" || saved === "light") return saved;
  return "dark";
}

export function PrefsProvider({ children }) {
  const [lang, setLang] = useState(initialLang);
  const [theme, setTheme] = useState(initialTheme);

  useEffect(() => {
    document.documentElement.lang = lang;
    write("hba-lang", lang);
  }, [lang]);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    write("hba-theme", theme);
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute("content", theme === "dark" ? "#0E1626" : "#F2F4F7");
  }, [theme]);

  // Pick the current language from {en, fr} objects; pass anything else through.
  const t = useCallback(
    (v) => {
      if (v && typeof v === "object" && !Array.isArray(v) && ("en" in v || "fr" in v)) {
        return v[lang] ?? v.en;
      }
      return v;
    },
    [lang],
  );

  const value = useMemo(
    () => ({
      lang,
      theme,
      t,
      toggleLang: () => setLang((l) => (l === "en" ? "fr" : "en")),
      toggleTheme: () => setTheme((x) => (x === "dark" ? "light" : "dark")),
    }),
    [lang, theme, t],
  );

  return <PrefsContext.Provider value={value}>{children}</PrefsContext.Provider>;
}

// eslint-disable-next-line react-refresh/only-export-components
export function usePrefs() {
  return useContext(PrefsContext);
}
