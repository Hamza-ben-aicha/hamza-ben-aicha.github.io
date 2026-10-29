import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, LazyMotion, domAnimation } from "motion/react";
import { PrefsProvider, usePrefs } from "./lib/prefs.jsx";
import { projects, ui } from "./content.js";
import Nav from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";
import Projects from "./components/Projects.jsx";
import Experience from "./components/Experience.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import ProjectModal from "./components/ProjectModal.jsx";

const ids = new Set(projects.map((p) => p.id));
const fromHash = () => {
  const m = window.location.hash.match(/^#work\/([\w-]+)$/);
  return m && ids.has(m[1]) ? m[1] : null;
};

function Page() {
  const { t } = usePrefs();
  // A case study can be linked directly: /#work/vclub
  const [openId, setOpenId] = useState(fromHash);

  const open = useCallback((id) => {
    setOpenId(id);
    history.replaceState(null, "", `#work/${id}`);
  }, []);

  const close = useCallback(() => {
    setOpenId(null);
    history.replaceState(null, "", "#work");
  }, []);

  useEffect(() => {
    const onHash = () => setOpenId(fromHash());
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  return (
    <>
      <a href="#main" className="skip">
        {t(ui.skip)}
      </a>
      <Nav />
      <main id="main">
        <Hero />
        <Projects onOpen={open} />
        <Experience onOpen={open} />
        <About />
        <Contact />
      </main>
      <AnimatePresence>
        {openId && <ProjectModal key="modal" id={openId} onClose={close} onNavigate={open} />}
      </AnimatePresence>
    </>
  );
}

export default function App() {
  return (
    <PrefsProvider>
      <LazyMotion features={domAnimation} strict>
        <Page />
      </LazyMotion>
    </PrefsProvider>
  );
}
