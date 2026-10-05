export const projectsData = [
  {
    id: 'jeevancare',
    title: 'JeevanCare',
    subtitle: 'Doctor Appointment & Token Booking Platform',
    tagline: 'Healthcare OPD queue reduction & token management system',
    description:
      'A healthcare appointment and token management platform designed to reduce waiting time and simplify doctor-patient appointment management.',
    overview:
      'JeevanCare is a comprehensive digital clinic and OPD queue platform that bridges patients and healthcare providers. It provides automated appointment slot allocation, live token updates via WebSockets, and streamlined doctor consultations.',
    problem:
      'Physical OPD waiting rooms frequently experience overcrowding, unpredictability in consultation timings, and manual paper-based token queues that frustrate patients and overwhelm clinic receptionists.',
    solution:
      'Engineered a centralized MERN-stack platform providing real-time digital token generation, live waiting queue tracker, authenticated doctor/patient portals, and payment gateway integration with Razorpay.',
    tech: [
      'React',
      'Node.js',
      'Express',
      'MongoDB',
      'Mongoose',
      'JWT',
      'zod',
      'Socket.io',
      'Tailwind CSS',
      'Razorpay',
      'Nodemailer',
      'Cloudinary'
    ],
    features: [
      'Patient authentication & profile management',
      'Doctor directory with specialty & availability',
      'Automated token generation & queue tracking',
      'Real-time queue progression via WebSockets',
      'Dedicated Doctor Consultation Dashboard',
      'Patient appointment booking & history',
      'Razorpay payment checkout integration',
      'Admin monitoring & token status override',
      'SMS & in-app status notification triggers',
      'Responsive interface for mobile patients',
    ],
    githubUrl: 'https://github.com/iamraunakraj/JeevanCare',
    demoUrl: 'http://jeevan-care-neon.vercel.app/',
    status: 'Flagship Project',
    featured: true,
    accentColor: '#06b6d4',
    mockupType: 'health',
  },
  {
    id: 'tic-tac-toe',
    title: 'Tic-Tac-Toe Full Stack',
    subtitle: 'Multiplayer Strategy Game & Leaderboard',
    tagline: 'Authenticated turn-based gameplay with player statistics',
    description:
      'A full-stack multiplayer-style Tic-Tac-Toe application with authentication, game history and leaderboard functionality.',
    overview:
      'A full-stack competitive web game featuring persistent user profiles, complete match replay histories, dynamic win-rate analytics, and a global leaderboard.',
    problem:
      'Most web game implementations are ephemeral single-session client scripts with no session tracking, player progression, or competitive records.',
    solution:
      'Built a full-stack system with JWT session security, MongoDB match archives, deterministic win/loss validation on the backend, and dynamic ranking updates.',
    tech: [
      'React',
      'Node.js',
      'Express',
      'MongoDB',
      'JWT',
      'Tailwind CSS',
      'Git',
      'Vercel',
      'Hoppscotch',
       'Render'

    ],
    features: [
      'User registration & secure JWT login',
      'Protected routes for gaming sessions',
      'Interactive animated game grid with win-line detection',
      'Detailed match history & timestamps',
      'Global leaderboard ranking players by win streaks',
      'Player statistics (total games, wins, draws, win rate)',
      'Responsive touch-optimized game controls',
    ],
    githubUrl: 'https://github.com/iamraunakraj/tic-tac-toe-fullstack',
    demoUrl: 'https://tic-tac-toe-fullstack-weld.vercel.app',
    status: 'Full Stack App',
    featured: true,
    accentColor: '#38bdf8',
    mockupType: 'game',
  },

];
