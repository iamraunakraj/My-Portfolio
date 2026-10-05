import { motion } from 'motion/react';
import { ArrowDown, Github, Linkedin, Mail, FileText, Terminal, CheckCircle2, Code2, Sparkles } from 'lucide-react';

export default function Hero() {
  const handleScrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden"
    >
      {/* Background ambient lighting accents */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[480px] bg-cyan-600/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 translate-x-1/3 w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Semantic Information & Recruiter Anchors */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 space-y-6 text-left"
          >
            {/* Small Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-100/70 dark:bg-cyan-950/40 border border-cyan-300/80 dark:border-cyan-800/50 text-cyan-800 dark:text-cyan-300 text-xs font-mono tracking-wider">
              <span className="w-2 h-2 rounded-full bg-cyan-500 dark:bg-cyan-400 animate-ping" />
              <span>AVAILABLE FOR INTERNSHIPS & PLACEMENT</span>
            </div>

            {/* Headings */}
            <div className="space-y-1.5">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold tracking-tight text-slate-900 dark:text-white">
                Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-sky-500 to-indigo-600 dark:from-cyan-400 dark:via-sky-300 dark:to-indigo-400">Raunak</span>.
              </h1>
              <p className="text-2xl sm:text-3xl font-display font-semibold text-slate-800 dark:text-slate-200 tracking-tight">
                Full Stack Developer
              </p>
            </div>

            {/* Short Description */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-xl">
              I build modern, scalable and user-focused web applications using JavaScript, React, Node.js and MongoDB.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={handleScrollToProjects}
                className="px-6 py-3 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white stay-white font-medium text-sm transition-all duration-200 shadow-lg shadow-cyan-900/20 flex items-center gap-2 group cursor-pointer"
              >
                <span>View My Work</span>
                <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              </button>

              <a
                href={`${import.meta.env.BASE_URL}resume.pdf`}
                download="Raunak_FullStack_Developer_Resume.pdf"
                className="px-6 py-3 rounded-xl bg-white dark:bg-slate-900/80 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-300 dark:border-slate-700/80 hover:border-slate-400 dark:hover:border-slate-500 text-slate-800 dark:text-slate-200 font-medium text-sm transition-all duration-200 flex items-center gap-2 cursor-pointer shadow-xs"
              >
                <FileText className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                <span>Download Resume</span>
              </a>
            </div>

            {/* Social Icons & Status */}
            <div className="pt-4 border-t border-slate-200 dark:border-slate-800/80 flex items-center gap-5 text-slate-600 dark:text-slate-400">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Connect:
              </span>
              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/iamraunakraj"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="p-2 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 hover:border-cyan-400/40 transition-colors shadow-xs"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href="https://www.linkedin.com/in/raunak-raj-aab2072a0/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="p-2 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 hover:border-cyan-400/40 transition-colors shadow-xs"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="mailto:rajraunak720@gmail.com"
                  aria-label="Email Raunak"
                  className="p-2 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 hover:border-cyan-400/40 transition-colors shadow-xs"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Clean, Elegant Developer Code Terminal (Replaced unusual 3D desk) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative w-full max-w-lg mx-auto"
          >
            {/* Ambient terminal glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 to-indigo-500/20 rounded-3xl blur-xl opacity-75 pointer-events-none" />

            <div className="relative rounded-2xl bg-white dark:bg-[#0c1220] border border-slate-200 dark:border-slate-800/90 shadow-2xl overflow-hidden font-mono text-xs select-none">
              {/* Terminal Window Header Bar */}
              <div className="flex items-center justify-between px-4 py-3 bg-slate-100/80 dark:bg-slate-900/90 border-b border-slate-200 dark:border-slate-800/80">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500/90" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/90" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/90" />
                  <span className="ml-2 text-slate-500 dark:text-slate-400 text-[11px] font-mono">
                    developer.config.js
                  </span>
                </div>

                <div className="flex items-center gap-1.5 text-[11px] text-cyan-600 dark:text-cyan-400">
                  <Terminal className="w-3.5 h-3.5" />
                  <span>Node.js v20</span>
                </div>
              </div>

              {/* Code Editor Body */}
              <div className="p-5 sm:p-6 space-y-2 leading-relaxed overflow-x-auto text-[12px] sm:text-[13px]">
                <p>
                  <span className="text-purple-600 dark:text-purple-400 font-semibold">const</span>{' '}
                  <span className="text-cyan-600 dark:text-cyan-300 font-semibold">softwareEngineer</span>{' '}
                  <span className="text-slate-500">=</span> <span className="text-amber-500">{'{'}</span>
                </p>

                <p className="pl-4">
                  <span className="text-slate-600 dark:text-slate-300">name:</span>{' '}
                  <span className="text-emerald-600 dark:text-emerald-400">'Raunak'</span>,
                </p>

                <p className="pl-4">
                  <span className="text-slate-600 dark:text-slate-300">role:</span>{' '}
                  <span className="text-emerald-600 dark:text-emerald-400">'Full Stack Developer'</span>,
                </p>

                <p className="pl-4">
                  <span className="text-slate-600 dark:text-slate-300">education:</span>{' '}
                  <span className="text-emerald-600 dark:text-emerald-400">'B.Tech CSE (2023 - 2027)'</span>,
                </p>

                <p className="pl-4">
                  <span className="text-slate-600 dark:text-slate-300">college:</span>{' '}
                  <span className="text-emerald-600 dark:text-emerald-400">'Roorkee Institute of Technology'</span>,
                </p>

                <p className="pl-4">
                  <span className="text-slate-600 dark:text-slate-300">coreStack:</span>{' '}
                  <span className="text-sky-500">[</span>
                  <span className="text-emerald-600 dark:text-emerald-400">'React'</span>,{' '}
                  <span className="text-emerald-600 dark:text-emerald-400">'Node.js'</span>,{' '}
                  <span className="text-emerald-600 dark:text-emerald-400">'Express'</span>,{' '}
                  <span className="text-emerald-600 dark:text-emerald-400">'MongoDB'</span>
                  <span className="text-sky-500">]</span>,
                </p>

                <p className="pl-4">
                  <span className="text-slate-600 dark:text-slate-300">featuredBuild:</span>{' '}
                  <span className="text-emerald-600 dark:text-emerald-400">'JeevanCare (Real-Time OPD Token System)'</span>,
                </p>

                <p className="pl-4">
                  <span className="text-slate-600 dark:text-slate-300">status:</span>{' '}
                  <span className="text-emerald-600 dark:text-emerald-400">'Ready to contribute & build'</span>,
                </p>

                <p className="pl-4">
                  <span className="text-slate-600 dark:text-slate-300">hireable:</span>{' '}
                  <span className="text-amber-600 dark:text-amber-400 font-semibold">true</span>
                </p>

                <p>
                  <span className="text-amber-500">{'}'}</span>;
                </p>

                {/* Simulated Terminal Output */}
                <div className="mt-4 pt-3 border-t border-slate-200 dark:border-slate-800 text-[11px] text-slate-500 dark:text-slate-400 flex items-center justify-between">
                  <span className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span>Compiled successfully</span>
                  </span>
                  <span className="font-mono text-cyan-600 dark:text-cyan-400">0 errors · ready</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
