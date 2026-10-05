import { useState, Suspense } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { skillsData, skillsCategories } from '../data/skills';
import SkillScene from './3d/SkillScene';
import { useWebGLAvailable } from '../hooks/useWebGLAvailable';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const isWebGLAvailable = useWebGLAvailable();

  const filteredSkills =
    activeCategory === 'All'
      ? skillsData
      : skillsData.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="py-24 relative border-t border-slate-900 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              <span>Technical Arsenal</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
              Skills & Technologies
            </h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-xl">
              Languages, libraries, databases, and development tooling I utilize to engineer reliable end-to-end applications.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 rounded-xl bg-slate-900/90 border border-slate-800">
            {skillsCategories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer whitespace-nowrap ${
                  activeCategory === category
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Central 3D Visualizer & Skills Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-8">
          {/* 3D Central Hologram */}
          <div className="lg:col-span-4 flex flex-col items-center">
            {isWebGLAvailable ? (
              <Suspense
                fallback={
                  <div className="w-full h-[240px] rounded-2xl bg-slate-900/40 border border-slate-800 flex items-center justify-center">
                    <span className="text-xs font-mono text-slate-500">Loading Hologram...</span>
                  </div>
                }
              >
                <SkillScene activeCategory={activeCategory} />
              </Suspense>
            ) : null}
            <div className="text-center mt-[-10px]">
              <p className="text-xs font-mono text-slate-400">
                Interactive Stack Matrix
              </p>
              <p className="text-[11px] text-slate-500">
                Hover card to inspect engineering scope
              </p>
            </div>
          </div>

          {/* Skills Grid */}
          <div className="lg:col-span-8">
            <motion.div
              layout
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5"
            >
              <AnimatePresence>
                {filteredSkills.map((skill) => {
                  const isHovered = hoveredSkill === skill.name;
                  return (
                    <motion.div
                      layout
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      onMouseEnter={() => setHoveredSkill(skill.name)}
                      onMouseLeave={() => setHoveredSkill(null)}
                      className={`relative p-4 rounded-xl border transition-all duration-300 cursor-default select-none ${
                        isHovered
                          ? 'bg-slate-900/90 border-cyan-500/50 -translate-y-1 shadow-lg shadow-cyan-950/40'
                          : 'bg-slate-900/50 border-slate-800/80 hover:border-slate-700'
                      }`}
                      style={{
                        boxShadow: isHovered
                          ? `0 10px 25px -5px ${skill.color}25`
                          : undefined,
                      }}
                    >
                      {/* Top Row: Symbol & Category */}
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <span
                            className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold font-mono bg-slate-800 border border-slate-700"
                            style={{ color: skill.color }}
                          >
                            {skill.symbol}
                          </span>
                          <div>
                            <h3 className="text-sm font-semibold text-white tracking-tight">
                              {skill.name}
                            </h3>
                            <span className="text-[10px] uppercase font-mono text-slate-400">
                              {skill.category}
                            </span>
                          </div>
                        </div>

                        {/* Proficiency Metric */}
                        <span className="text-xs font-mono font-medium text-slate-400">
                          {skill.proficiency}%
                        </span>
                      </div>

                      {/* Description */}
                      <p className="text-xs text-slate-400 leading-relaxed min-h-[34px]">
                        {skill.description}
                      </p>

                      {/* Subtle Proficiency Bar */}
                      <div className="w-full h-1 bg-slate-800 rounded-full mt-3 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.proficiency}%` }}
                          transition={{ duration: 0.8, ease: 'easeOut' }}
                          className="h-full rounded-full"
                          style={{
                            backgroundColor: skill.color,
                          }}
                        />
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
