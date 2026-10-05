import { motion } from 'motion/react';
import { Calendar, Compass, CheckCircle2, Milestone } from 'lucide-react';
import { journeyData } from '../data/journey';

export default function Journey() {
  return (
    <section id="journey" className="py-24 relative border-t border-slate-900 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto space-y-2 mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span>Academic & Technical Milestones</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
            My Journey
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            An honest chronological evolution from foundational programming to full-stack engineering and placement readiness.
          </p>
        </div>

        {/* Vertical Animated Timeline */}
        <div className="relative">
          {/* Vertical central hairline indicator */}
          <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 -translate-x-1/2 w-0.5 bg-gradient-to-b from-cyan-500/80 via-indigo-500/50 to-slate-800" />

          <div className="space-y-12">
            {journeyData.map((step, index) => {
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={step.year}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative flex flex-col sm:flex-row items-start sm:items-center ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Central Node Icon */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 flex items-center justify-center w-8 h-8 rounded-full bg-slate-950 border-2 border-cyan-400 z-10 shadow-lg shadow-cyan-950/80">
                    <Milestone className="w-3.5 h-3.5 text-cyan-400" />
                  </div>

                  {/* Spacer for 2-column alignment */}
                  <div className="hidden sm:block sm:w-1/2" />

                  {/* Card Content */}
                  <div
                    className={`pl-12 sm:pl-0 sm:w-1/2 ${
                      isEven ? 'sm:pr-10' : 'sm:pl-10'
                    }`}
                  >
                    <div className="p-5 sm:p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 transition-colors shadow-lg">
                      {/* Year badge & Period */}
                      <div className="flex items-center justify-between text-xs font-mono mb-2">
                        <span className="px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 font-bold">
                          {step.year}
                        </span>
                        <span className="text-slate-400 flex items-center gap-1">
                          <Calendar className="w-3 h-3 text-slate-500" />
                          <span>{step.period}</span>
                        </span>
                      </div>

                      {/* Title & Subtitle */}
                      <h3 className="text-base sm:text-lg font-display font-bold text-white mt-1">
                        {step.title}
                      </h3>
                      <p className="text-xs text-slate-400 font-medium mb-3 flex items-center gap-1.5">
                        <Compass className="w-3.5 h-3.5 text-cyan-400" />
                        <span>{step.subtitle}</span>
                      </p>

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-4">
                        {step.description}
                      </p>

                      {/* Highlights */}
                      <div className="space-y-1.5 pt-3 border-t border-slate-800/60">
                        {step.highlights.map((h, i) => (
                          <div key={i} className="flex items-center gap-2 text-xs text-slate-300">
                            <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                            <span>{h}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
