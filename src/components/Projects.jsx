import { useState } from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Github, ArrowUpRight, CheckCircle2, Star, Sparkles } from 'lucide-react';
import { projectsData } from '../data/projects';
import ProjectBrowser3D from './3d/ProjectBrowser3D';
import ProjectDetailModal from './ProjectDetailModal';

export default function Projects() {
  const [selectedProjectId, setSelectedProjectId] = useState('jeevancare');
  const [modalProject, setModalProject] = useState(null);

  const activeProject =
    projectsData.find((p) => p.id === selectedProjectId) || projectsData[0];

  return (
    <section id="projects" className="py-24 relative border-t border-slate-900 overflow-hidden">
      {/* Background glow highlights */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-cyan-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              <span>Selected Works</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
              Featured Projects
            </h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-xl">
              Production-tested full-stack web applications featuring real-time architecture, authentication, and database modeling.
            </p>
          </div>

          {/* Project Switcher Selector */}
          <div className="flex items-center gap-2 p-1.5 rounded-xl bg-slate-900/90 border border-slate-800 self-start md:self-auto overflow-x-auto max-w-full">
            {projectsData.map((proj) => {
              const isSelected = proj.id === selectedProjectId;
              return (
                <button
                  key={proj.id}
                  onClick={() => setSelectedProjectId(proj.id)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer whitespace-nowrap flex items-center gap-2 ${
                    isSelected
                      ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
                  }`}
                >
                  {proj.featured && <Star className="w-3 h-3 text-amber-400 fill-amber-400" />}
                  <span>{proj.title}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 1. Large 3D Floating Interactive Browser Window */}
        <div className="mb-14">
          <div className="text-xs font-mono text-slate-400 mb-3 flex items-center justify-between">
            <span className="flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>Interactive 3D Viewport — Hover to tilt & interact</span>
            </span>
            <span className="text-slate-500 hidden sm:inline">WebGL Perspective Simulation</span>
          </div>

          <ProjectBrowser3D
            project={activeProject}
            onOpenDetails={(p) => setModalProject(p)}
          />
        </div>

        {/* 2. Project Grid Cards with 3D Tilt & Zoom */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-display font-semibold text-white">
              All Project Architectures
            </h3>
            <span className="text-xs font-mono text-slate-400">
              Click any project to view comprehensive case study
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projectsData.map((project) => {
              const isSelected = project.id === selectedProjectId;
              return (
                <motion.div
                  key={project.id}
                  whileHover={{ y: -6, transition: { duration: 0.2 } }}
                  onClick={() => setSelectedProjectId(project.id)}
                  className={`group relative rounded-2xl border p-5 sm:p-6 transition-all duration-300 flex flex-col justify-between cursor-pointer ${
                    isSelected
                      ? 'bg-slate-900/90 border-cyan-500/60 shadow-xl shadow-cyan-950/30 ring-1 ring-cyan-500/30'
                      : 'bg-slate-900/50 border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/70'
                  }`}
                >
                  <div className="space-y-4">
                    {/* Card Header & Status */}
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono uppercase tracking-wider text-cyan-400">
                        {project.status}
                      </span>
                      {isSelected ? (
                        <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                          Active in 3D
                        </span>
                      ) : (
                        <span className="text-[11px] text-slate-400 font-mono group-hover:text-slate-300">
                          Click to Preview
                        </span>
                      )}
                    </div>

                    {/* Title & Tagline */}
                    <div>
                      <h4 className="text-xl font-display font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {project.title}
                      </h4>
                      <p className="text-xs text-slate-400 mt-1 font-medium">
                        {project.subtitle}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed line-clamp-3">
                      {project.description}
                    </p>

                    {/* Features sample */}
                    <div className="space-y-1.5 pt-1">
                      {project.features.slice(0, 3).map((f, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-slate-400">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                          <span className="truncate">{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Footer & Actions */}
                  <div className="pt-6 mt-6 border-t border-slate-800/80 space-y-3">
                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-800/90 text-slate-300 border border-slate-700/60"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.tech.length > 4 && (
                        <span className="px-1.5 py-0.5 rounded text-[10px] font-mono text-slate-400">
                          +{project.tech.length - 4}
                        </span>
                      )}
                    </div>

                    <div className="flex items-center justify-between pt-2">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setModalProject(project);
                        }}
                        className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors flex items-center gap-1 cursor-pointer"
                      >
                        <span>Case Study</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>

                      <div className="flex items-center gap-2">
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                          title="GitHub Code"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="p-1.5 rounded-lg text-cyan-400 hover:text-cyan-300 hover:bg-cyan-950/40 transition-colors"
                          title="Live Demo"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Case Study Detail Modal */}
      <ProjectDetailModal
        project={modalProject}
        onClose={() => setModalProject(null)}
      />
    </section>
  );
}
