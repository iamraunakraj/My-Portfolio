import { motion } from 'motion/react';
import {
  Code2,
  Server,
  GraduationCap,
  Target,
} from 'lucide-react';
import AboutPhotoCard from './AboutPhotoCard';

export default function About() {
  return (
    <section id="about" className="py-24 relative border-t border-slate-200 dark:border-slate-900 overflow-hidden transition-colors duration-250">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="space-y-2 mb-12">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-600 dark:text-cyan-400 uppercase tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 dark:bg-cyan-400" />
            <span>Profile & Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 dark:text-white tracking-tight">
            About Me
          </h2>
        </div>

        {/* Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left: Professional Story & Core Competencies */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            <p className="text-lg sm:text-xl font-medium text-slate-800 dark:text-slate-200 leading-relaxed">
              I am a <span className="text-cyan-600 dark:text-cyan-400 font-semibold">B.Tech Computer Science & Engineering student</span> at Roorkee Institute of Technology (2023–2027) and a passionate Full Stack Developer who enjoys transforming complex real-world requirements into clean, scalable software solutions.
            </p>

            <div className="space-y-4 text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
              <p>
                My journey began with strong programmatic fundamentals in Java and Object-Oriented Programming, which evolved into building full-featured web applications. I am equally comfortable designing responsive frontend interfaces in React and architecting secure RESTful backends with Node.js, Express, and MongoDB.
              </p>
              <p>
                Rather than collecting passive tutorials, I focus on solving tangible user problems — such as eliminating OPD hospital congestion with real-time token scheduling in JeevanCare, or implementing authenticated multiplayer game mechanics.
              </p>
              <p>
                I am currently sharpening my data structures and algorithmic problem-solving skills while actively preparing for <span className="text-slate-900 dark:text-slate-200 font-medium">software development internships and entry-level full-stack placement opportunities</span>.
              </p>
            </div>

            {/* Core Competencies highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="p-3.5 rounded-xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 flex items-start gap-3 shadow-xs">
                <Code2 className="w-5 h-5 text-cyan-600 dark:text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-semibold text-slate-900 dark:text-white font-mono uppercase">Frontend Craft</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">HTML5, CSS3, JavaScript (ES6+), React.js,
                     Tailwind CSS, Bootstrap, Responsive Web Design, React Hooks, REST API Integration, Git/GitHub</p>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 flex items-start gap-3 shadow-xs">
                <Server className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-semibold text-slate-900 dark:text-white font-mono uppercase">Backend Systems</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">Node.js, Express.js, REST APIs, MongoDB, Mongoose, SQL, EJS, 
                    Authentication & Authorization, Middleware, MVC Architecture, Error Handling, CRUD Operations</p>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 flex items-start gap-3 shadow-xs">
                <GraduationCap className="w-5 h-5 text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-semibold text-slate-900 dark:text-white font-mono uppercase">CS Foundations</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">Java, OOPs, Data Structures & Algorithms, DBMS, SQL, Computer Networks, Operating Systems, Problem Solving,
                     Git & GitHub</p>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 flex items-start gap-3 shadow-xs">
                <Target className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-semibold text-slate-900 dark:text-white font-mono uppercase">Career Objective</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">Software Developer & Full Stack Engineering Roles</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Dedicated Photo Profile Card */}
          <div className="lg:col-span-5 flex flex-col items-center w-full">
            <AboutPhotoCard />
          </div>
        </div>
      </div>
    </section>
  );
}
