import React, { useState, useRef } from 'react';
import { motion } from 'motion/react';
import { GraduationCap, MapPin, Calendar, BookOpen, Award } from 'lucide-react';
import { educationData } from '../data/journey';

export default function Education() {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotX = -((y - centerY) / centerY) * 4;
    const rotY = ((x - centerX) / centerX) * 4;

    setRotateX(rotX);
    setRotateY(rotY);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <section className="py-16 relative border-t border-slate-900/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto space-y-1.5 mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-widest">
            <GraduationCap className="w-4 h-4 text-cyan-400" />
            <span>Academic Qualifications</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight">
            Education
          </h2>
        </div>

        {/* 3D Depth Education Card */}
        <div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="perspective-[1000px]"
        >
          <motion.div
            animate={{ rotateX, rotateY }}
            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
            style={{ transformStyle: 'preserve-3d' }}
            className="rounded-2xl bg-gradient-to-br from-slate-900/90 via-slate-900/60 to-slate-950 p-6 sm:p-8 border border-slate-800 shadow-2xl relative overflow-hidden"
          >
            {/* Ambient accent top highlight */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              {/* Institution Seal / Graphic */}
              <div className="md:col-span-4 flex flex-col items-start md:items-center text-left md:text-center p-4 rounded-xl bg-slate-950/60 border border-slate-800/80">
                <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-3 shadow-inner">
                  <GraduationCap className="w-8 h-8" />
                </div>
                <h4 className="text-sm font-display font-bold text-white">
                  {educationData.institution}
                </h4>
                <div className="flex items-center gap-1 text-[11px] text-slate-400 mt-1">
                  <MapPin className="w-3 h-3 text-cyan-400" />
                  <span>{educationData.location}</span>
                </div>
                <div className="mt-3 flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-[11px] font-mono text-cyan-300">
                  <Calendar className="w-3 h-3 text-cyan-400" />
                  <span>{educationData.duration}</span>
                </div>
              </div>

              {/* Degree & Coursework */}
              <div className="md:col-span-8 space-y-4">
                <div>
                  <div className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-400 uppercase tracking-wider mb-1">
                    <Award className="w-3.5 h-3.5" />
                    <span>Undergraduate Degree</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-display font-bold text-white">
                    {educationData.degree}
                  </h3>
                  <p className="text-sm font-medium text-slate-300">
                    {educationData.field}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  Pursuing four-year technical degree focusing on computer systems, algorithmic design, software architectures, and database management principles.
                </p>

                {/* Relevant Coursework */}
                <div className="pt-2 border-t border-slate-800/80 space-y-2">
                  <div className="flex items-center gap-1.5 text-xs font-mono text-slate-300">
                    <BookOpen className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Key Computer Science Coursework</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {educationData.coursework.map((course) => (
                      <span
                        key={course}
                        className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-950/80 border border-slate-800 text-slate-300"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
