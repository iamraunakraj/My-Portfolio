import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Journey from './components/Journey';
import Education from './components/Education';
import GithubActivity from './components/GithubActivity';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackgroundParticles from './components/3d/BackgroundParticles';
import { useWebGLAvailable } from './hooks/useWebGLAvailable';
import { AvatarProvider } from './context/AvatarContext';
import { ThemeProvider } from './context/ThemeContext';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const isWebGLAvailable = useWebGLAvailable();

  useEffect(() => {
    const sections = ['home', 'about', 'skills', 'projects', 'journey', 'contact'];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <ThemeProvider>
      <AvatarProvider>
        <div className="relative min-h-screen bg-slate-50 dark:bg-[#080a0f] text-slate-900 dark:text-[#e2e8f0] selection:bg-cyan-500/20 selection:text-cyan-600 dark:selection:text-cyan-300 transition-colors duration-250">
          {/* 3D Background Particles Layer */}
          {isWebGLAvailable && <BackgroundParticles />}

          {/* Persistent Floating Navbar */}
          <Navbar activeSection={activeSection} />

          {/* Main Content Sections */}
          <main className="relative z-10">
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Journey />
            <Education />
            <GithubActivity />
            <Contact />
          </main>

          {/* Minimal Dynamic Footer */}
          <Footer />
        </div>
      </AvatarProvider>
    </ThemeProvider>
  );
}
