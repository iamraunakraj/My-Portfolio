import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ExternalLink,
  Github,
  Globe,
  RefreshCw,
  Lock,
  ChevronRight,
  Sparkles,
  Layers,
  CheckCircle2,
  Calendar,
  Users,
  Clock,
  Trophy,
  Activity,
  ArrowUpRight,
} from 'lucide-react';
import JeevanCareMockup from '../JeevanCareMockup';

export default function ProjectBrowser3D({ project, onOpenDetails }) {
  const [activeTab, setActiveTab] = useState('preview');
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Smooth tilt angles
    const rotX = -((y - centerY) / centerY) * 5;
    const rotY = ((x - centerX) / centerX) * 5;

    setRotateX(rotX);
    setRotateY(rotY);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setIsHovered(false);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative perspective-[1200px] w-full transition-all duration-300"
    >
      {/* 3D Browser Container with transform style */}
      <motion.div
        animate={{
          rotateX,
          rotateY,
          scale: isHovered ? 1.01 : 1,
        }}
        transition={{ type: 'spring', stiffness: 260, damping: 24 }}
        style={{ transformStyle: 'preserve-3d' }}
        className="relative rounded-2xl bg-slate-900/80 border border-slate-700/60 shadow-2xl overflow-hidden backdrop-blur-xl"
      >
        {/* Ambient Top Glow */}
        <div
          className="absolute -top-32 left-1/2 -translate-x-1/2 w-3/4 h-32 blur-3xl pointer-events-none opacity-40 transition-colors duration-500"
          style={{ background: project.accentColor }}
        />

        {/* Browser Top Chrome Header */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3 border-b border-slate-800 bg-slate-950/70 select-none">
          {/* Traffic Lights */}
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block border border-rose-600/40" />
            <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block border border-amber-600/40" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block border border-emerald-600/40" />
            <div className="hidden sm:flex items-center gap-1.5 ml-4 text-xs text-slate-400">
              <span className="font-mono text-slate-300 font-medium">{project.title}</span>
              <span>·</span>
              <span className="text-slate-400">{project.status}</span>
            </div>
          </div>

          {/* Browser URL Bar */}
          <div className="flex-1 max-w-sm sm:max-w-md mx-2 sm:mx-6">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/90 border border-slate-800 text-xs text-slate-300 font-mono">
              <Lock className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span className="text-emerald-400 select-none">https://</span>
              <span className="text-slate-200 truncate select-all">
                raunak.dev/{project.id}
              </span>
              <RefreshCw className="w-3 h-3 text-slate-500 ml-auto shrink-0 hover:rotate-180 transition-transform duration-500 cursor-pointer" />
            </div>
          </div>

          {/* Quick Action Badges */}
          <div className="flex items-center gap-2 shrink-0">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              title="GitHub Repository"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-md text-cyan-400 hover:text-cyan-300 hover:bg-cyan-950/40 transition-colors"
              title="Live Demo"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Viewport Sub-header / Functional Tabs */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-2.5 bg-slate-900/50 border-b border-slate-800/80 text-xs">
          <div className="flex items-center gap-1">
            <button
              onClick={() => setActiveTab('preview')}
              className={`px-3 py-1 rounded-md transition-all font-medium ${
                activeTab === 'preview'
                  ? 'bg-cyan-500/15 text-cyan-300 border border-cyan-500/30'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Interactive Preview
            </button>
            <button
              onClick={() => setActiveTab('solution')}
              className={`px-3 py-1 rounded-md transition-all font-medium ${
                activeTab === 'solution'
                  ? 'bg-cyan-500/15 text-cyan-300 border border-cyan-500/30'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Problem & Solution
            </button>
            <button
              onClick={() => setActiveTab('features')}
              className={`px-3 py-1 rounded-md transition-all font-medium ${
                activeTab === 'features'
                  ? 'bg-cyan-500/15 text-cyan-300 border border-cyan-500/30'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Full Feature Spec ({project.features.length})
            </button>
          </div>

          <button
            onClick={() => onOpenDetails(project)}
            className="hidden sm:inline-flex items-center gap-1 text-slate-300 hover:text-cyan-300 transition-colors font-medium"
          >
            <span>Read Case Study</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Browser Content Area with AnimatePresence */}
        <div className="p-4 sm:p-7 min-h-[380px] sm:min-h-[420px] flex flex-col justify-between bg-gradient-to-b from-slate-900/40 via-slate-950/60 to-slate-950">
          <AnimatePresence mode="wait">
            {activeTab === 'preview' && (
              <motion.div
                key={`preview-${project.id}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="space-y-6"
              >
                {/* Project Header Info */}
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                  <div className="space-y-2 max-w-xl">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: project.accentColor }} />
                      <span className="text-xs uppercase tracking-wider text-slate-400 font-mono">
                        {project.subtitle}
                      </span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight">
                      {project.title}
                    </h3>
                    <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex sm:flex-col gap-2 shrink-0">
                    <button
                      onClick={() => onOpenDetails(project)}
                      className="px-4 py-2 text-xs font-semibold text-white bg-cyan-600 hover:bg-cyan-500 rounded-lg transition-colors flex items-center justify-center gap-1.5 shadow-lg shadow-cyan-950/40"
                    >
                      <span>Explore Case Study</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Simulated Interactive Mockup Window */}
                <div className="rounded-xl border border-slate-800 bg-slate-950/80 p-4 sm:p-5 relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-3 opacity-15 pointer-events-none">
                    <Sparkles className="w-32 h-32 text-cyan-400" />
                  </div>

                  {project.mockupType === 'health' && (
                    <div className="space-y-4">
                      {/* Metric Badges */}
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        <div className="p-3 rounded-lg bg-slate-900/90 border border-slate-800 flex items-center gap-3">
                          <div className="p-2 rounded-md bg-cyan-500/10 text-cyan-400">
                            <Clock className="w-4 h-4" />
                          </div>
                          <div>
                            <p className="text-[11px] text-slate-400 uppercase tracking-wider">Active Token</p>
                            <p className="text-base font-bold text-white font-mono">#B-042</p>
                          </div>
                        </div>
                        <div className="p-3 rounded-lg bg-slate-900/90 border border-slate-800 flex items-center gap-3">
                          <div className="p-2 rounded-md bg-emerald-500/10 text-emerald-400">
                            <Users className="w-4 h-4" />
                          </div>
                          <div>
                            <p className="text-[11px] text-slate-400 uppercase tracking-wider">Live Patients</p>
                            <p className="text-base font-bold text-emerald-400 font-mono">4 In Queue</p>
                          </div>
                        </div>
                        <div className="p-3 rounded-lg bg-slate-900/90 border border-slate-800 flex items-center gap-3">
                          <div className="p-2 rounded-md bg-indigo-500/10 text-indigo-400">
                            <Activity className="w-4 h-4" />
                          </div>
                          <div>
                            <p className="text-[11px] text-slate-400 uppercase tracking-wider">WebSockets</p>
                            <p className="text-base font-bold text-indigo-400 font-mono">Connected :5000</p>
                          </div>
                        </div>
                      </div>

                      {/* Real Application Viewport Replica from Screenshot */}
                      <div className="rounded-xl overflow-hidden border border-slate-800 shadow-xl">
                        <JeevanCareMockup />
                      </div>
                    </div>
                  )}

                  {project.mockupType === 'game' && (
                    <div className="space-y-4">
                      {/* Top Metric Badges */}
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        <div className="p-3 rounded-lg bg-slate-900/90 border border-slate-800 flex items-center gap-3">
                          <Trophy className="w-5 h-5 text-amber-400" />
                          <div>
                            <p className="text-[11px] text-slate-400 uppercase">Ranked Leaderboard</p>
                            <p className="text-base font-bold text-white font-mono">#1 rajraunak (Winner)</p>
                          </div>
                        </div>
                        <div className="p-3 rounded-lg bg-slate-900/90 border border-slate-800 flex items-center gap-3">
                          <Lock className="w-5 h-5 text-emerald-400" />
                          <div>
                            <p className="text-[11px] text-slate-400 uppercase">Auth Guard</p>
                            <p className="text-base font-bold text-emerald-400 font-mono">JWT Session Active</p>
                          </div>
                        </div>
                        <div className="p-3 rounded-lg bg-slate-900/90 border border-slate-800 flex items-center gap-3">
                          <Layers className="w-5 h-5 text-cyan-400" />
                          <div>
                            <p className="text-[11px] text-slate-400 uppercase">Production URL</p>
                            <p className="text-xs font-bold text-cyan-400 font-mono truncate">tic-tac-toe.vercel.app</p>
                          </div>
                        </div>
                      </div>

                      {/* Real Application Viewport Replica from Screenshot */}
                      <div className="rounded-xl bg-[#0b101b] border border-slate-800 p-4 font-mono select-none">
                        {/* Real Header */}
                        <div className="flex items-center justify-between text-xs text-slate-400 pb-2 mb-3 border-b border-slate-800/80">
                          <div className="flex items-center gap-4">
                            <span className="text-slate-300 hover:text-white cursor-pointer">History</span>
                            <span className="text-slate-300 hover:text-white cursor-pointer">Leaderboard</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <span className="text-slate-100 font-semibold">rajraunak</span>
                            <span className="px-2 py-0.5 rounded bg-rose-950/80 text-rose-300 border border-rose-900/70 text-[10px]">
                              Logout
                            </span>
                          </div>
                        </div>

                        {/* Title & Winner */}
                        <div className="text-center py-1">
                          <h4 className="text-base font-bold tracking-widest text-slate-100 uppercase">
                            TIC · TAC · TOE
                          </h4>
                          <p className="text-xs text-slate-300 mt-1">
                            Winner: <span className="text-amber-400 font-bold">X</span>
                          </p>
                        </div>

                        {/* 3x3 Real Grid with Golden Victory Ray */}
                        <div className="flex items-center justify-center py-3">
                          <div className="grid grid-cols-3 gap-2 w-44 relative">
                            {/* Golden vertical line through Col 1 */}
                            <div className="absolute left-[26px] top-0 bottom-0 w-0.5 bg-amber-400 shadow-md shadow-amber-500/80 z-10" />

                            {/* Col 1 (Winning column: X, X, X with golden highlights) */}
                            <div className="h-11 rounded-md bg-[#221c13] border border-amber-500/50 flex items-center justify-center text-amber-400 font-bold text-lg">
                              Ӿ
                            </div>
                            <div className="h-11 rounded-md bg-[#131c2b] flex items-center justify-center text-cyan-400 font-bold text-lg">
                              0
                            </div>
                            <div className="h-11 rounded-md bg-[#131c2b]" />

                            <div className="h-11 rounded-md bg-[#221c13] border border-amber-500/50 flex items-center justify-center text-amber-400 font-bold text-lg">
                              Ӿ
                            </div>
                            <div className="h-11 rounded-md bg-[#131c2b] flex items-center justify-center text-amber-400 font-bold text-lg">
                              X
                            </div>
                            <div className="h-11 rounded-md bg-[#131c2b] flex items-center justify-center text-cyan-400 font-bold text-lg">
                              0
                            </div>

                            <div className="h-11 rounded-md bg-[#221c13] border border-amber-500/50 flex items-center justify-center text-amber-400 font-bold text-lg">
                              Ӿ
                            </div>
                            <div className="h-11 rounded-md bg-[#131c2b]" />
                            <div className="h-11 rounded-md bg-[#131c2b] flex items-center justify-center text-cyan-400 font-bold text-lg">
                              0
                            </div>
                          </div>
                        </div>

                        {/* Restart Button */}
                        <div className="flex justify-center pt-1">
                          <button className="px-5 py-1.5 rounded-lg bg-[#1fd2af] hover:bg-[#1bb89a] text-[#072421] font-bold text-xs shadow-md transition-colors">
                            Restart Game
                          </button>
                        </div>
                      </div>
                    </div>
                  )}

                  {project.mockupType === 'finance' && (
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div className="p-3.5 rounded-lg bg-slate-900/90 border border-slate-800">
                          <p className="text-xs text-slate-400">Base Currency</p>
                          <p className="text-2xl font-bold font-mono text-white mt-1">1.00 USD</p>
                          <p className="text-xs text-emerald-400 mt-1">Live polling active</p>
                        </div>
                        <div className="p-3.5 rounded-lg bg-slate-900/90 border border-slate-800">
                          <p className="text-xs text-slate-400">Target Currency</p>
                          <p className="text-2xl font-bold font-mono text-emerald-400 mt-1">86.45 INR</p>
                          <p className="text-xs text-slate-400 mt-1">Instant recalculation</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Technology Badges */}
                <div className="pt-2">
                  <p className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                    Core Technologies & Architecture
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-800/80 border border-slate-700/60 text-slate-200"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'solution' && (
              <motion.div
                key={`solution-${project.id}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="space-y-6"
              >
                <div>
                  <h4 className="text-sm font-semibold text-rose-400 uppercase tracking-wider mb-2 font-mono flex items-center gap-1.5">
                    <span>Problem Statement</span>
                  </h4>
                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed p-4 rounded-xl bg-rose-950/20 border border-rose-900/30">
                    {project.problem}
                  </p>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-emerald-400 uppercase tracking-wider mb-2 font-mono flex items-center gap-1.5">
                    <span>Engineering Solution</span>
                  </h4>
                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed p-4 rounded-xl bg-emerald-950/20 border border-emerald-900/30">
                    {project.solution}
                  </p>
                </div>

                <div className="pt-2">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                    Architectural Overview
                  </h4>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {project.overview}
                  </p>
                </div>
              </motion.div>
            )}

            {activeTab === 'features' && (
              <motion.div
                key={`features-${project.id}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="space-y-4"
              >
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-display font-semibold text-white">
                    Implemented Features & Modules
                  </h4>
                  <span className="text-xs font-mono text-cyan-400">
                    {project.features.length} core features
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {project.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-lg bg-slate-900/70 border border-slate-800 flex items-start gap-2.5 text-xs sm:text-sm text-slate-300"
                    >
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Bottom Card Navigation & External Action Anchors */}
          <div className="flex flex-col sm:flex-row items-center justify-between pt-6 mt-6 border-t border-slate-800/80 gap-3 text-xs">
            <div className="flex items-center gap-4 text-slate-400">
              <span className="flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5 text-slate-500" />
                <span>Responsive Web App</span>
              </span>
              <span>·</span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-slate-500" />
                <span>Full Stack Portfolio Work</span>
              </span>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-1.5 rounded-lg border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white transition-colors flex items-center gap-1.5 font-medium"
              >
                <Github className="w-3.5 h-3.5" />
                <span>Code Repo</span>
              </a>
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-1.5 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white transition-colors flex items-center gap-1.5 font-medium shadow-sm"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Live Demo</span>
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
