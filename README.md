# Raunak — Full Stack Developer Portfolio 🚀

> A modern, interactive 3D portfolio website built for internship and software developer placement applications.

![Portfolio Preview](https://img.shields.io/badge/Status-Placement--Ready-06b6d4?style=for-the-badge)
![Tech Stack](https://img.shields.io/badge/Stack-React%20%7C%20Three.js%20%7C%20R3F%20%7C%20Tailwind-38bdf8?style=for-the-badge)

---

## 🌟 Key Highlights

- **Interactive 3D Workstation**: Rendered using **React Three Fiber (@react-three/fiber)** & **Three.js** with a floating laptop, terminal monitor, and orbiting tech symbols with smooth mouse-tracking physics.
- **3D Rotating Glass Cube**: About section visualizer containing floating `</>`, `{ }`, `JS`, and `API` tokens with realistic transmission and clearcoat materials.
- **Floating 3D Project Browser**: Interactive macOS-style browser window with perspective tilt, live queue simulation, and tabbed case studies.
- **Recruiter-Focused Structure**: Honest student-developer timeline (*My Journey*), education credentials at Roorkee Institute of Technology, and technical competency matrix.
- **Accessible & Performant**: Includes WebGL availability detection with graceful fallback, reduced-motion compliance (`prefers-reduced-motion`), and pure mathematical primitives (zero heavy external 3D model downloads).
- **Responsive**: Fully optimized for desktop, tablet, and mobile with touch-friendly navigation.

---

## 🛠️ Tech Stack

- **Frontend Core**: React 19, Vite, TypeScript
- **Styling**: Tailwind CSS v4, Glassmorphism utilities
- **3D Graphics**: Three.js, `@react-three/fiber`, `@react-three/drei`
- **Animations**: Motion / Framer Motion
- **Icons**: Lucide React
- **Effects**: Canvas Confetti

---

## 📁 Project Architecture

```bash
src/
├── components/
│   ├── Navbar.tsx             # Floating transparent navbar with mobile menu
│   ├── Hero.tsx               # Hero banner with resume download & social anchors
│   ├── About.tsx              # Student developer narrative & core metrics
│   ├── Skills.tsx             # Interactive filterable skills grid
│   ├── Projects.tsx           # Projects showcase & card tilt triggers
│   ├── ProjectDetailModal.tsx # Full case study dialog (Problem, Solution, Tech)
│   ├── Journey.tsx            # Vertical chronological academic/developer timeline
│   ├── Education.tsx          # Roorkee Institute of Technology 3D card
│   ├── GithubActivity.tsx     # 52-week contribution heatmap snapshot
│   ├── Contact.tsx            # Form with client validation & email copy tool
│   └── Footer.tsx             # Dynamic year & back-to-top button
│
├── components/3d/
│   ├── HeroScene.tsx          # 3D laptop, monitor & orbiting tech symbols
│   ├── AboutCube.tsx          # Frosted glass 3D cube with code tokens
│   ├── SkillScene.tsx         # Central holographic energy crystal
│   ├── ProjectBrowser3D.tsx   # 3D tilted browser window with live preview tabs
│   └── BackgroundParticles.tsx# Ambient drifting particle field
│
├── data/
│   ├── projects.ts            # JeevanCare, Tic-Tac-Toe, Currency Converter data
│   ├── skills.ts              # Technical competencies & proficiencies
│   └── journey.ts             # Academic milestones & degree info
│
├── hooks/
│   ├── usePrefersReducedMotion.ts
│   └── useWebGLAvailable.ts
│
├── App.tsx                    # Main layout coordinator & scroll tracker
├── main.tsx                   # React root entry
└── index.css                  # Theme font definitions & custom scrollbars
```

---

## 🚀 Getting Started Locally

### 1. Clone the repository
```bash
git clone https://github.com/YOUR_USERNAME/portfolio-raunak.git
cd portfolio-raunak
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start the local development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) (or the port specified in terminal) in your browser.

### 4. Build for production
```bash
npm run build
```

---

## ⚙️ Customization Guide

1. **Update Social Links & Placeholders**:
   - In `src/data/projects.ts`, replace `GITHUB_URL` and `LIVE_DEMO_URL` with your actual project links.
   - In `src/components/Hero.tsx`, `src/components/Navbar.tsx`, and `src/components/Contact.tsx`, update your GitHub and LinkedIn URLs.

2. **Connect the Contact Form**:
   - In `src/components/Contact.tsx`, replace the simulated `handleSubmit` function with [Formspree](https://formspree.io/) or [EmailJS](https://www.emailjs.com/):
   ```ts
   await fetch('https://formspree.io/f/YOUR_FORM_ID', {
     method: 'POST',
     headers: { 'Content-Type': 'application/json' },
     body: JSON.stringify(formData),
   });
   ```

3. **Deploy Free on Vercel or Netlify**:
   - Push this repo to GitHub.
   - Connect your GitHub repo to [Vercel](https://vercel.com) or [Netlify](https://netlify.com).
   - Set build command to `npm run build` and output directory to `dist`.

---

## 📄 License
This project is open-source and available under the [MIT License](LICENSE).
