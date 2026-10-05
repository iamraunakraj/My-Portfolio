import React, { useRef, useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, Terminal } from 'lucide-react';
import { useAvatar } from '../context/AvatarContext';

export default function DeveloperAvatarCard() {
  const { avatarUrl, active3DMode, setActive3DMode } = useAvatar();

  // 3D Parallax Tilt state
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

    const rotX = -((y - centerY) / centerY) * 12;
    const rotY = ((x - centerX) / centerX) * 12;

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
      className="relative w-full h-[420px] sm:h-[480px] lg:h-[580px] perspective-[1200px] flex items-center justify-center select-none"
    >
      {/* 3D Tilted Card Container */}
      <motion.div
        animate={{
          rotateX,
          rotateY,
          scale: isHovered ? 1.02 : 1,
        }}
        transition={{ type: 'spring', stiffness: 220, damping: 20 }}
        style={{ transformStyle: 'preserve-3d' }}
        className="relative w-full max-w-md rounded-3xl bg-gradient-to-br from-white via-slate-50 to-slate-100 dark:from-slate-900/90 dark:via-[#0a0f1d] dark:to-slate-950 border border-slate-200 dark:border-slate-800/80 p-6 sm:p-8 flex flex-col items-center justify-between shadow-2xl overflow-hidden backdrop-blur-xl"
      >
        {/* Ambient Glows */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -top-10 -right-10 w-48 h-48 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none" />

        {/* Top 3D Mode Selector Header */}
        <div
          style={{ transform: 'translateZ(30px)' }}
          className="w-full flex items-center justify-between z-10 pb-2 border-b border-slate-200 dark:border-slate-800/60 text-xs"
        >
          <div className="flex items-center gap-1.5 p-1 rounded-lg bg-slate-100 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800">
            <button
              onClick={() => setActive3DMode('photo')}
              className={`px-3 py-1 rounded-md text-[11px] font-mono transition-colors cursor-pointer ${
                active3DMode === 'photo'
                  ? 'bg-cyan-500/20 text-cyan-700 dark:text-cyan-300 border border-cyan-500/40 font-semibold'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
              }`}
            >
              3D Photo
            </button>
            <button
              onClick={() => setActive3DMode('workspace')}
              className={`px-3 py-1 rounded-md text-[11px] font-mono transition-colors cursor-pointer ${
                active3DMode === 'workspace'
                  ? 'bg-cyan-500/20 text-cyan-700 dark:text-cyan-300 border border-cyan-500/40 font-semibold'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
              }`}
            >
              3D Workspace
            </button>
          </div>

          <div className="flex items-center gap-1.5 text-[11px] font-mono text-cyan-700 dark:text-cyan-400">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Interactive 3D</span>
          </div>
        </div>

        {/* Middle: 3D Holographic Photo Portrait */}
        <div
          style={{ transform: 'translateZ(45px)' }}
          className="relative my-4 flex flex-col items-center text-center z-10"
        >
          {/* Avatar frame with multi-layered 3D depth */}
          <div className="relative group">
            {/* Glowing neon ring */}
            <div className="w-44 h-44 sm:w-52 sm:h-52 rounded-2xl p-1 bg-gradient-to-tr from-cyan-500 via-sky-400 to-indigo-500 shadow-2xl shadow-cyan-950/50 flex items-center justify-center transition-transform group-hover:scale-105 duration-300">
              <div className="w-full h-full rounded-[14px] bg-[#090d16] p-1.5 flex items-center justify-center overflow-hidden relative">
                {avatarUrl ? (
                  <img
                    src={avatarUrl}
                    alt="Raunak - Full Stack Developer"
                    className="w-full h-full object-cover rounded-[10px] shadow-inner"
                  />
                ) : (
                  /* Stylized Vector Portrait matching Raunak's real appearance from uploaded photo */
                  <svg
                    viewBox="0 0 140 140"
                    className="w-full h-full rounded-[10px]"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* Background slate texture */}
                    <rect width="140" height="140" fill="#3b444b" />

                    {/* White Shirt Collar & Body */}
                    <path
                      d="M20 140C20 115 36 98 56 94L70 102L84 94C104 98 120 115 120 140H20Z"
                      fill="#f8fafc"
                    />
                    {/* Shirt Buttons & Placket */}
                    <line x1="70" y1="102" x2="70" y2="140" stroke="#cbd5e1" strokeWidth="2" />
                    <circle cx="70" cy="112" r="1.5" fill="#94a3b8" />
                    <circle cx="70" cy="124" r="1.5" fill="#94a3b8" />
                    <circle cx="70" cy="136" r="1.5" fill="#94a3b8" />
                    {/* Shirt Collar flaps */}
                    <path d="M54 94L66 106L70 94" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="1" />
                    <path d="M86 94L74 106L70 94" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="1" />

                    {/* Neck */}
                    <rect x="61" y="80" width="18" height="18" rx="4" fill="#c68642" />

                    {/* Head / Face */}
                    <ellipse cx="70" cy="62" rx="22" ry="24" fill="#d49a6a" />

                    {/* Natural Wavy Hair (parted like photo) */}
                    <path
                      d="M45 56C44 38 52 26 70 26C88 26 96 38 95 56C89 48 80 46 72 47C62 48 56 44 48 51C46 53 45 55 45 56Z"
                      fill="#1e1e24"
                    />
                    <path
                      d="M48 36C56 28 84 28 92 37C86 32 74 31 68 33C60 34 54 31 48 36Z"
                      fill="#2b2d35"
                    />

                    {/* Clean Beard & Mustache matching photo */}
                    <path
                      d="M58 73C63 71 77 71 82 73C80 75 75 76 70 76C65 76 60 75 58 73Z"
                      fill="#26262b"
                    />
                    <path
                      d="M54 68C54 82 62 88 70 88C78 88 86 82 86 68C85 78 78 84 70 84C62 84 55 78 54 68Z"
                      fill="#26262b"
                      opacity="0.85"
                    />

                    {/* Eyes & Eyebrows */}
                    <path d="M54 53C58 51 63 52 65 54" stroke="#1f242d" strokeWidth="2" strokeLinecap="round" />
                    <path d="M75 54C77 52 82 51 86 53" stroke="#1f242d" strokeWidth="2" strokeLinecap="round" />
                    <ellipse cx="60" cy="58" rx="2.5" ry="3" fill="#1e1e24" />
                    <ellipse cx="80" cy="58" rx="2.5" ry="3" fill="#1e1e24" />
                    <circle cx="61" cy="57" r="1" fill="#ffffff" />
                    <circle cx="81" cy="57" r="1" fill="#ffffff" />

                    {/* Nose & Smile */}
                    <path d="M70 60V67L73 68" stroke="#a16207" strokeWidth="1.5" strokeLinecap="round" />
                    <path d="M64 77C66 79 74 79 76 77" stroke="#78350f" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                )}

                {/* Glass reflection sheen */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none" />
              </div>
            </div>

            {/* Floating 3D Badge */}
            <div
              style={{ transform: 'translateZ(60px)' }}
              className="absolute -bottom-2 -right-2 px-3 py-1 rounded-full bg-slate-900/90 text-cyan-300 border border-cyan-500/40 text-[11px] font-mono shadow-xl flex items-center gap-1.5 stay-white"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Raunak · Full Stack</span>
            </div>
          </div>

          <h3 className="text-lg sm:text-xl font-display font-bold text-slate-900 dark:text-white mt-4 tracking-tight">
            Raunak
          </h3>
          <p className="text-xs text-slate-600 dark:text-slate-400 font-mono mt-0.5">
            Full Stack Developer · B.Tech CSE
          </p>
        </div>

        {/* Bottom Interactive Terminal Controls */}
        <div
          style={{ transform: 'translateZ(25px)' }}
          className="w-full flex items-center justify-between pt-2 border-t border-slate-200 dark:border-slate-800/80 text-[11px] font-mono text-slate-600 dark:text-slate-400 z-10"
        >
          <div className="flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
            <span>Interactive 3D Avatar</span>
          </div>
          <div className="flex items-center gap-1 text-slate-600 dark:text-slate-400">
            <Terminal className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            <span>React · Node · Mongo</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
