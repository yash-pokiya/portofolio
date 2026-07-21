# Yash Pokiya - Portfolio Architecture & UI Reference

This document provides a comprehensive blueprint of the portfolio UI, styling protocols, component hierarchies, and interactive elements. It is designed to help LLMs (like GPT) understand the entire user interface and structure of the portfolio codebase.

---

## 1. Project Meta & Tech Stack

- **Developer:** Yash Pokiya (BCA Student, Logic Builder, System Architect)
- **Base Architecture:** Single-page scroll-based application (Vite + React 19)
- **Routing & State:** `react-router-dom` (v7) for base configuration, `useState` for UI state toggles (themes, modals, mobile menus)
- **Styling Engine:** Tailwind CSS v4 (Zero-runtime CSS config)
- **Icons:** `lucide-react`
- **Animations:** `framer-motion` (v12) for smooth transitions, spring-based headers, and entrance animations

---

## 2. Design System & CSS Variables (`src/index.css`)

The UI is built on a **Neo-brutalist / Bento-grid hybrid** layout utilizing a dark-mode-first aesthetic (referred to as "Dark Protocol" and "Light Protocol").

### Typography
- **Primary Font:** `Outfit`, sans-serif (Google Font, loaded in weights 100 to 900)

### CSS Variables & Themes
- **Light Protocol (:root):**
  - Background: `#ffffff`
  - Main Text: `#0a0a0a`
  - Secondary Text: `#475569`
  - Accent: `#8b5cf6` (Purple/Indigo)
  - Card & Navigation BG: `rgba(255, 255, 255, 0.8)` with blur
- **Dark Protocol (.dark):**
  - Background: `#050505` (Deep Black)
  - Main Text: `#ffffff`
  - Secondary Text: `#94a3b8`
  - Accent: `#a78bfa` (Light Purple/Violet)
  - Card BG: `rgba(15, 15, 15, 0.8)`
  - Navigation BG: `rgba(5, 5, 5, 0.9)`

### Global UI Elements & Textures
- **Background Noise:** A fixed overlay SVG noise texture (`opacity: 0.05` for light theme, higher contrast for dark) mimicking analogue grid paper.
- **Background Grid Pattern:** A radial gradient-based dot grid pattern (`background-size: 40px 40px`) aligned across the viewport bounds.
- **Bento Card (`.bento-card`):** A custom component class featuring:
  - Responsive rounded corners (`rounded-[2.5rem]` / `40px`)
  - Accent color borders (`border-black/5` or `border-white/10`)
  - Background blur (`backdrop-blur-xl`)
  - Smooth scale transitions and shadow translations on hover (`translate-y-[-4px]`)
- **Bento Grid Background (`.bento-grid-bg`):** Absolute-positioned sub-grid dots (`32px` spacing) applied internally to card backgrounds.
- **Neo-brutalist Buttons (`.btn-neo`):** Full-pill styling with a sliding shimmer animation, expanding on active presses.
- **Glass Tags (`.glass-tag`):** Subtle status chips with custom tracking, background blurs, and border layouts.

---

## 3. Global Layout & Shell (`src/components/Layout.jsx`)

The wrapper component controls global page state, navigation scrolls, responsive media, and header/footer configurations.

- **Smart Scroll Detection:** Tracks scroll coordinates to trigger header compression (`py-6` down to `py-4`) and updates navigation highlights when sections cross a `150px` offset boundary.
- **Desktop Navigation:** Lists 8 main links with an active spring indicator (`layoutId="active-nav"` from Framer Motion) moving beneath the active link.
- **Social Action Links:** Contains inline links for GitHub and LinkedIn next to the Sun/Moon theme toggler.
- **Mobile Menu Sidebar:** Slides in from the right edge (`width: 85%`, max `sm`) with spring transitions, dark overlay backdrop, and vertically stacked layout links.

---

## 4. Section & Page Breakdowns

The main page layout (configured in `src/App.jsx`) sections are stacked vertically and navigate via smooth programmatic scrolling:

### A. Home / Hero (`src/pages/Home.jsx`)
- **Interactive Radial Follow Glow:** Follows user mouse coordinates to render a fuzzy colored spotlight (`rgba(139, 92, 246, 0.15)`) behind UI elements.
- **Hero Title:** Large-format typography ("Turning Code Into Experience.") in bold uppercase styles.
- **Left Bento Card:** Displays core system module versioning, active status indicators (pulsing green/teal/cyan lights), and key bulleted features.
- **Right Profile Card:** Grayscale developer photograph transitioning to full-color with scale shifts on hover, showing developer tags ("Yash Pokiya // Systems Architect").
- **Target Highlights:** Displays progress tracking stats (MERN Stack Mastery at 85% with progress animations) and active search grids for the 2026 internship search.

### B. About Dossier (`src/pages/About.jsx`)
- **System Identity:** Renders the academic profiling headers, social credentials, and LinkedIn accent tiles.
- **Professional Dossier:** Focuses on the primary bio (SY BCA student, web development focus, looking for internships in Surat, India).
- **Core Specializations:** Details active focus areas (Backend logic systems, Node.js & Express.js) and philosophy tags.
- **Institutional Link:** Connects to the Academic Architecture section via smooth transitions.

### C. Selected Architectures (`src/pages/Projects.jsx`)
Features a custom card layout showcasing the primary project items:

1. **NestlyLiving (Real Estate Ecosystem)**
   - Tech: Next.js 14, Tailwind CSS, MongoDB
   - Challenges: Complex query filtering logic
   - Key results: Server components optimization, sub-500ms response.
2. **Caratior (Luxury Jewellery E-commerce)**
   - Tech: MERN Stack, Redux Toolkit, JWT
   - Challenges: Real-time price conversion & Redux store sync
   - Key results: Real-time API currency sync.
3. **System E-commerce (MERN Framework baseline)**
   - Tech: MongoDB, Express, React, Node.js
   - Challenges: Access controls and secure admin dashboard
   - Key results: RBAC setup with JWT.

- **Case Study Modal Popup:** Clicking "View Case Study" triggers an animated overlay containing technical challenge descriptions, system diagrams, and results data.

### D. Technical Modules / Skills (`src/pages/Skills.jsx`)
Divided into three structured bento blocks:
- **Frontend Development:** HTML5/CSS3 (95%), JavaScript (85%), Tailwind (90%), Bootstrap (90%), React (80%).
- **Tools & Workflow:** Git & GitHub (98%), VS Code (95%), Postman (88%), Vercel/Netlify (85%), MongoDB Compass (85%).
- **Logic & Backend:** Node.js (75%), Express (70%), MongoDB (80%), C Language Logic (90%).
- Each skill features loading bar entrance animations synced with layout displays.

### E. Professional History (`src/pages/Experience.jsx`)
- **MERN Stack Internship Card:** Details a 3-month deployment at **LaMinds (Surat, IN)** containing core stack logs, strategy parameters, and work details.
- **Manifesto Download:** Features CV download links pointing to hosted resume assets, backed by system-ready state signals.

### F. Academic Architecture (`src/pages/Education.jsx`)
- **VNSGU Affiliation:** Academic timeline focusing on VNSGU (Veer Narmad South Gujarat University) degree details.
- **Core Curriculum:** Database structures, full-stack programming, and web design grids.

### G. Technical Insights (`src/pages/Blog.jsx`)
- **Featured Log:** Showcases the prominent post ("The Future of Web Performance in 2026").
- **Secondary Grid Logs:** Renders Tailwind v4 architecture transition writeups and career-shift notes.

### H. Signal & Contact (`src/pages/Contact.jsx`)
- **Direct Link Cards:** Contains quick mail link copy endpoints and direct messaging layouts.
- **Contact Form:** Connected to Web3Forms API to process names, emails, and textual messages, displaying custom sending, success, and error states.

---

## 5. UI Class Reference for Code Editors

To match the styling protocols when building new sections:

| Target Element | Classes / Styling Details |
| :--- | :--- |
| Section Container | `max-w-7xl mx-auto px-8 py-12 space-y-24` |
| Section Subheading | `glass-tag text-[var(--accent)]` |
| Main Page Header | `text-4xl md:text-6xl font-black uppercase tracking-tighter` |
| Grid Items | `grid grid-cols-1 md:grid-cols-3 gap-8` |
| Pill Accent Tags | `px-4 py-1.5 bg-black/5 dark:bg-white/5 rounded-full text-[10px] font-black uppercase` |
