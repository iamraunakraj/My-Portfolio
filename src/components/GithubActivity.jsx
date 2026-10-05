import { useMemo } from 'react';
import { Github, GitCommit, GitPullRequest, GitBranch, ArrowUpRight } from 'lucide-react';

export default function GithubActivity() {
  // Static contribution grid visualization (52 weeks x 7 days)
  // Structured cleanly so the developer can replace with real GitHub GraphQL/REST API response
  const weeks = 52;
  const daysPerWeek = 7;

  const contributionGrid = useMemo(() => {
    const grid = [];
    for (let w = 0; w < weeks; w++) {
      const weekDays = [];
      for (let d = 0; d < daysPerWeek; d++) {
        // Deterministic realistic activity intensity levels (0 = none, 1 = low, 2 = medium, 3 = high)
        // Heavier in recent weeks (2025-2026) when full-stack projects were being built
        const seed = (w * 7 + d * 13) % 100;
        let level = 0;
        if (w > 20) {
          if (seed > 75) level = 3;
          else if (seed > 45) level = 2;
          else if (seed > 20) level = 1;
        } else {
          if (seed > 80) level = 2;
          else if (seed > 50) level = 1;
        }
        weekDays.push(level);
      }
      grid.push(weekDays);
    }
    return grid;
  }, []);

  const getLevelColor = (level) => {
    switch (level) {
      case 3:
        return 'bg-emerald-400';
      case 2:
        return 'bg-emerald-600/80';
      case 1:
        return 'bg-emerald-900/60';
      default:
        return 'bg-slate-800/60';
    }
  };

  return (
    <section className="py-20 relative border-t border-slate-900 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-widest mb-1.5">
              <Github className="w-3.5 h-3.5" />
              <span>Version Control Activity</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight">
              Code. Build. Learn. Repeat.
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Consistent commit habits and modular Git workflows across academic and personal repositories.
            </p>
          </div>

          <a
            href="https://github.com/iamraunakraj"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-xs font-medium text-slate-200 hover:text-white transition-colors flex items-center gap-2 self-start sm:self-auto"
          >
            <Github className="w-4 h-4 text-cyan-400" />
            <span>Visit GitHub Profile</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-slate-500" />
          </a>
        </div>

        {/* Contribution Graph Box */}
        <div className="p-5 sm:p-6 rounded-2xl bg-slate-900/60 border border-slate-800 shadow-xl overflow-hidden">
          <div className="flex items-center justify-between text-xs text-slate-400 mb-4 pb-3 border-b border-slate-800/80">
            <span className="font-mono text-slate-300">
              Contribution Heatmap (52-Week Snapshot)
            </span>
            <div className="flex items-center gap-1.5 text-[11px] font-mono">
              <span className="text-slate-500">Less</span>
              <span className="w-2.5 h-2.5 rounded-xs bg-slate-800" />
              <span className="w-2.5 h-2.5 rounded-xs bg-emerald-900/60" />
              <span className="w-2.5 h-2.5 rounded-xs bg-emerald-600/80" />
              <span className="w-2.5 h-2.5 rounded-xs bg-emerald-400" />
              <span className="text-slate-500">More</span>
            </div>
          </div>

          {/* Heatmap Grid with horizontal scroll on small devices */}
          <div className="overflow-x-auto pb-2">
            <div className="flex gap-[3px] min-w-[700px] justify-between">
              {contributionGrid.map((week, wIdx) => (
                <div key={wIdx} className="flex flex-col gap-[3px]">
                  {week.map((dayLevel, dIdx) => (
                    <div
                      key={dIdx}
                      className={`w-[11px] h-[11px] rounded-[2px] transition-colors ${getLevelColor(
                        dayLevel
                      )} hover:scale-125 hover:z-10`}
                      title={`Activity level: ${dayLevel}`}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Quick Stats Banner */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-5 pt-4 border-t border-slate-800/80">
            <div className="flex items-center gap-3 p-3 rounded-lg bg-slate-950/60 border border-slate-800/60">
              <GitCommit className="w-4 h-4 text-emerald-400" />
              <div>
                <p className="text-[11px] uppercase font-mono text-slate-500">Daily Routine</p>
                <p className="text-xs font-semibold text-slate-200">Atomic commits & clean commit messages</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-lg bg-slate-950/60 border border-slate-800/60">
              <GitBranch className="w-4 h-4 text-cyan-400" />
              <div>
                <p className="text-[11px] uppercase font-mono text-slate-500">Branching Strategy</p>
                <p className="text-xs font-semibold text-slate-200">Feature branch workflows</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-lg bg-slate-950/60 border border-slate-800/60">
              <GitPullRequest className="w-4 h-4 text-indigo-400" />
              <div>
                <p className="text-[11px] uppercase font-mono text-slate-500">API Readiness</p>
                <p className="text-xs font-semibold text-slate-200">Ready for GitHub GraphQL / REST sync</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
