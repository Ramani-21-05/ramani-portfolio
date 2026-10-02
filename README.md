# Ramani Portfolio: Interactive Scrollytelling Developer Showcase

[![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-5.0-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com)
[![Lucide Icons](https://img.shields.io/badge/Lucide-Icons-F56565?style=for-the-badge&logo=feather&logoColor=white)](https://lucide.dev)

A modern, high-performance personal portfolio built with React and Vite featuring fluid scrollytelling, custom micro-interactions, an interactive progress stepper, and dark-themed visual aesthetics.

---

## ✨ Features & Visual Interactions

- **Scrollytelling Progress Stepper**: Real-time visual progress bar tracking navigation across portfolio sections.
- **Custom Interactive Cursor**: Dynamic cursor state with magnetic hover feedback on interactive elements.
- **Interactive Project Showcase**: Deep dive into systems engineering, deep learning (SignMamba, ASL), and full-stack platforms.
- **Live Tech Stack Matrix**: Categorized skill taxonomy spanning AI/ML, backend engineering, and distributed cloud services.
- **Experience & Certifications Timeline**: Chronological presentation of academic milestones, industry training, and hackathons.
- **Responsive Architecture**: Engineered for seamless typography and layout scaling from mobile viewports to ultra-wide displays.

---

## 🛠️ Tech Stack

- **Core**: React 18, Vite
- **Styling**: Tailwind CSS, CSS Custom Properties
- **Icons**: Lucide React
- **Tooling**: ESLint, PostCSS, Autoprefixer

---

## 🚀 Quickstart

```bash
# 1. Clone the repository
git clone https://github.com/Ramani-21-05/ramani-portfolio.git
cd ramani-portfolio

# 2. Install dependencies
npm install

# 3. Launch local development server
npm run dev
```

Build for production:
```bash
npm run build
npm run preview
```

---

## 📁 Project Architecture

```
├── public/                 # Static assets, SVG icons, and favicons
├── src/
│   ├── assets/             # Brand logos and images
│   ├── components/
│   │   ├── Header.jsx      # Fixed blurred navigation bar
│   │   ├── HeroSection.jsx # Animated intro banner
│   │   ├── AboutSection.jsx # Engineering background & philosophy
│   │   ├── SkillsSection.jsx # Technical skill matrix
│   │   ├── ProjectsSection.jsx # Featured system builds
│   │   ├── ExperienceSection.jsx # Experience timeline
│   │   ├── CertificationsSection.jsx # Credentials & honors
│   │   ├── ContactSection.jsx # Contact form & social channels
│   │   ├── CustomCursor.jsx # Smooth spring-animated cursor
│   │   ├── ProgressStepper.jsx # Vertical scroll anchor indicator
│   │   └── Footer.jsx      # Copyright & footer links
│   ├── App.jsx             # Main layout orchestrator
│   ├── index.css           # Global typography & design system tokens
│   └── main.jsx            # React root mount
└── vite.config.js          # Vite build configuration
```

---

## 👤 Author
- **Ramani** ([@Ramani-21-05](https://github.com/Ramani-21-05))
- Final-Year Artificial Intelligence & Data Science Undergraduate
- GitHub: [https://github.com/Ramani-21-05](https://github.com/Ramani-21-05)
