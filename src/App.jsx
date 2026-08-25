import { useMemo } from 'react';
import Nav from './components/Nav';
import SideRails from './components/SideRails';
import BackgroundShader from './components/BackgroundShader';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useReveal, useScrollSpy, useSmoothScroll } from './hooks';

export default function App() {
  const revealRef = useReveal();
  useSmoothScroll();
  const sectionIds = useMemo(
    () => ['about', 'experience', 'projects', 'skills', 'education', 'contact'],
    []
  );
  const activeId = useScrollSpy(sectionIds);

  return (
    <>
      <a className="skip-link" href="#top">
        Skip to content
      </a>

      <div className="bg-field" aria-hidden="true">
        <div className="bg-blob blob-a" />
        <div className="bg-blob blob-b" />
        <div className="bg-blob blob-c" />
      </div>
      <BackgroundShader />
      <div className="grain" aria-hidden="true" />

      <Nav activeId={activeId} />
      <SideRails />

      <main ref={revealRef}>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
