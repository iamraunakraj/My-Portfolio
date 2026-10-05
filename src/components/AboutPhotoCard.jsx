import React, { useRef, useState } from 'react';
import { motion } from 'motion/react';
import {
  GraduationCap,
  MapPin,
  Camera,
  CheckCircle2,
  Code2,
  Mail,
  Github,
  Linkedin,
} from 'lucide-react';
import { useAvatar } from '../context/AvatarContext';

export default function AboutPhotoCard() {
  const { avatarUrl, setAvatarUrl } = useAvatar();
  const fileInputRef = useRef(null);

  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotX = -((y - centerY) / centerY) * 8;
    const rotY = ((x - centerX) / centerX) * 8;

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

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const result = event.target?.result;
      if (result) {
        setAvatarUrl(result);
      }
    };
    reader.readAsDataURL(file);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-md mx-auto perspective-[1200px] select-none"
    >
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="hidden"
      />

      <motion.div
        animate={{
          rotateX,
          rotateY,
          scale: isHovered ? 1.02 : 1,
        }}
        transition={{ type: 'spring', stiffness: 260, damping: 22 }}
        style={{ transformStyle: 'preserve-3d' }}
        className="relative rounded-3xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 p-6 sm:p-7 shadow-2xl dark:shadow-cyan-950/20 backdrop-blur-xl overflow-hidden flex flex-col items-center text-center transition-colors duration-250"
      >
        {/* Ambient Glows */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Top Header Tag */}
        <div
          style={{ transform: 'translateZ(30px)' }}
          className="w-full flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800/80 text-xs font-mono"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-50 dark:bg-cyan-950/60 border border-cyan-200 dark:border-cyan-800/60 text-cyan-700 dark:text-cyan-300">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Developer Profile</span>
          </div>

          <button
            onClick={() => fileInputRef.current?.click()}
            className="flex items-center gap-1.5 text-xs text-slate-500 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors cursor-pointer"
            title="Click to select profile picture"
          >
            <Camera className="w-3.5 h-3.5" />
            <span>Change Photo</span>
          </button>
        </div>

        {/* Portrait Photo Container with 3D Depth */}
        <div
          style={{ transform: 'translateZ(50px)' }}
          className="relative my-6 group cursor-pointer"
          onClick={() => fileInputRef.current?.click()}
        >
          {/* Neon Ring Glow */}
          <div className="w-52 h-52 sm:w-60 sm:h-60 rounded-3xl p-1 bg-gradient-to-tr from-cyan-500 via-sky-400 to-indigo-500 shadow-2xl shadow-cyan-950/40 flex items-center justify-center transition-transform group-hover:scale-105 duration-300">
            <div className="w-full h-full rounded-[22px] bg-[#090d16] p-1 flex items-center justify-center overflow-hidden relative">
              <img
                src={avatarUrl}
                alt="Raunak Raj- Full Stack Developer"
                className="w-full h-full object-cover rounded-[18px] shadow-inner"
              />

              {/* Hover overlay to change photo */}
              <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white p-3 text-center">
                <Camera className="w-7 h-7 text-cyan-400 mb-1" />
                <span className="text-xs font-medium">Click to upload your photo</span>
              </div>
            </div>
          </div>

          {/* Floating Verified Badge */}
          <div
            style={{ transform: 'translateZ(70px)' }}
            className="absolute -bottom-2 -right-2 px-3 py-1.5 rounded-full bg-white dark:bg-slate-900 text-cyan-600 dark:text-cyan-300 border border-slate-200 dark:border-cyan-500/40 text-xs font-mono shadow-xl flex items-center gap-1.5"
          >
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
            <span>Available for Hire</span>
          </div>
        </div>

        {/* Name & Academic Credentials */}
        <div style={{ transform: 'translateZ(35px)' }} className="w-full space-y-2">
          <h3 className="text-2xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight">
            Raunak Raj
          </h3>
          <p className="text-sm font-semibold text-cyan-600 dark:text-cyan-400 font-mono">
            Full Stack Developer (MERN Stack)
          </p>

          <div className="pt-2 flex flex-col items-center gap-1.5 text-xs text-slate-600 dark:text-slate-400">
            <div className="flex items-center gap-1.5">
              <GraduationCap className="w-4 h-4 text-indigo-500 shrink-0" />
              <span>B.Tech CSE · Roorkee Institute of Technology</span>
            </div>
            <div className="flex items-center gap-1.5 text-[11px] font-mono text-slate-500">
              <MapPin className="w-3.5 h-3.5 text-rose-500 shrink-0" />
              <span>2023 – 2027 · Uttarakhand, India</span>
            </div>
          </div>
        </div>

        {/* Skills & Direct Connect Footer */}
        <div
          style={{ transform: 'translateZ(25px)' }}
          className="w-full mt-6 pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs"
        >
          <div className="flex items-center gap-1.5 text-slate-600 dark:text-slate-400 font-mono text-[11px]">
            <Code2 className="w-3.5 h-3.5 text-emerald-500" />
            <span>React · Node · Mongo</span>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="mailto:rajraunak720@gmail.com"
              className="p-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-cyan-500 transition-colors"
              title="rajraunak720@gmail.com"
            >
              <Mail className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://github.com/iamraunakraj"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-cyan-500 transition-colors"
              title="GitHub"
            >
              <Github className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-cyan-500 transition-colors"
              title="LinkedIn"
            >
              <Linkedin className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
