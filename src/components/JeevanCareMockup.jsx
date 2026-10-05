import { Search, MapPin, Calendar, Clock, Plus } from 'lucide-react';

export default function JeevanCareMockup({ compact = false }) {
  const specializations = [
    'Cardiologist',
    'Dentist',
    'Dermatologist',
    'Orthopedic',
    'ENT',
    'Neurologist',
    'Gynecologist',
    'General Physician',
    'Pediatrician',
  ];

  return (
    <div className="w-full rounded-xl bg-white text-slate-800 overflow-hidden shadow-xl border border-slate-200/80 font-sans select-none">
      {/* Top Navbar */}
      <div className="flex items-center justify-between px-4 sm:px-6 py-2.5 bg-white border-b border-slate-100 text-xs">
        {/* Logo */}
        <div className="flex items-center gap-1.5">
          <div className="w-5 h-5 rounded bg-emerald-700 flex items-center justify-center text-white">
            <Plus className="w-3.5 h-3.5 stroke-[3]" />
          </div>
          <span className="font-bold text-sm tracking-tight text-emerald-950 font-display">
            JeevanCare
          </span>
        </div>

        {/* Center Nav */}
        <div className="hidden sm:block text-slate-600 font-medium text-xs hover:text-emerald-700 cursor-pointer">
          Find Doctors
        </div>

        {/* Right Auth */}
        <div className="flex items-center gap-3">
          <span className="text-slate-600 hover:text-slate-900 font-medium text-xs cursor-pointer">
            Login
          </span>
          <span className="px-3 py-1 rounded-md bg-emerald-800 hover:bg-emerald-900 text-white font-medium text-xs shadow-xs cursor-pointer stay-white">
            Sign Up
          </span>
        </div>
      </div>

      {/* Hero Banner with Teal Gradient */}
      <div className="bg-gradient-to-br from-[#064e3b] via-[#044e42] to-[#065f46] px-4 sm:px-8 py-6 sm:py-9 text-center text-white relative overflow-hidden stay-white">
        {/* Serving Ara badge */}
        <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-white/20 backdrop-blur-md text-[11px] font-medium text-white mb-3 shadow-xs">
          <MapPin className="w-3 h-3 text-white" />
          <span>Serving Ara</span>
        </div>

        {/* Headline */}
        <h3 className="text-xl sm:text-2xl md:text-3xl font-display font-extrabold tracking-tight text-white leading-tight">
          Find the Right Doctor, <br className="hidden sm:inline" />Skip the Wait
        </h3>

        {/* Subtitle */}
        <p className="text-xs sm:text-sm text-emerald-100 max-w-md mx-auto mt-2 leading-relaxed">
          Book appointments and get digital tokens — track your queue in real time from home.
        </p>

        {/* White Search Pill Input */}
        <div className="mt-4 sm:mt-5 max-w-lg mx-auto">
          <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-white text-slate-800 shadow-lg">
            <Search className="w-4 h-4 text-slate-400 shrink-0" />
            <span className="text-xs sm:text-sm text-slate-400 font-normal truncate text-left">
              Search doctor, specialization, clinic or area
            </span>
          </div>
        </div>

        {/* Specialization Tags Pill Grid */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 mt-4 max-w-xl mx-auto">
          {specializations.slice(0, compact ? 6 : 9).map((spec, i) => (
            <span
              key={i}
              className="px-2.5 py-1 rounded-full bg-white/15 hover:bg-white/25 backdrop-blur-sm text-[10px] sm:text-xs text-white font-normal transition-colors cursor-pointer"
            >
              {spec}
            </span>
          ))}
        </div>
      </div>

      {/* How JeevanCare Works Section */}
      {!compact && (
        <div className="bg-slate-50 px-4 sm:px-6 py-6 text-center border-t border-slate-100">
          <h4 className="text-sm sm:text-base font-display font-bold text-slate-900 tracking-tight mb-5">
            How JeevanCare Works
          </h4>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto text-center">
            {/* Step 1 */}
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center mb-2 shadow-xs">
                <Search className="w-5 h-5 text-emerald-700" />
              </div>
              <h5 className="text-xs font-bold text-slate-900">1. Find a Doctor</h5>
              <p className="text-[11px] text-slate-500 mt-1 max-w-[170px] leading-tight">
                Search by name, specialization, or area near you.
              </p>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center mb-2 shadow-xs">
                <Calendar className="w-5 h-5 text-emerald-700" />
              </div>
              <h5 className="text-xs font-bold text-slate-900">2. Book Instantly</h5>
              <p className="text-[11px] text-slate-500 mt-1 max-w-[170px] leading-tight">
                Pick a slot or grab a digital token in seconds.
              </p>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center mb-2 shadow-xs">
                <Clock className="w-5 h-5 text-emerald-700" />
              </div>
              <h5 className="text-xs font-bold text-slate-900">3. Track Live Queue</h5>
              <p className="text-[11px] text-slate-500 mt-1 max-w-[170px] leading-tight">
                Know exactly when to reach — no more waiting rooms.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
