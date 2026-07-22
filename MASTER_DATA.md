# MASTER DATA — Portfolio Single Source of Truth

> **IMPORTANT:** Every component in this portfolio reads data directly from `src/data/portfolioData.js`, which mirrors this file. Never hardcode or invent placeholder strings in components.

---

## 1. DESIGN SYSTEM & TOKENS (Instrument Protocol)

- **Canvas & Surface:**
  - `--paper`: `#FAFAF8` (Base drafting canvas)
  - `--paper-raised`: `#FFFFFF` (Card and navigation surfaces)
  - `--ink`: `#101012` (Primary near-black typography and hairline accents)
  - `--ink-soft`: `#55565C` (Secondary text and sub-labels)
  - `--line`: `#DDDCD6` (1px hairlines, card borders, and ruler ticks)
  - `--signal`: `#2B5CFF` (Electric Cobalt — reserved for active states, status dots, active nav line)
  - `--signal-soft`: `#E8EDFF` (Soft background tint for active badges)
- **Typography Engine:**
  - Display: `Fraunces` serif (headlines & `YP.` wordmark)
  - Body: `Inter` sans-serif (copy & descriptions)
  - Utility / Monospace: `IBM Plex Mono` (labels, dates, percentages, ruler ticks, terminal text)
- **Animation Framework:**
  - `framer-motion` (v12) only. No GSAP, Three.js, or additional motion libraries.

---

## 2. PERSONAL & BRAND INFORMATION

- **Full Name:** Yash Pokiya
- **Brand Wordmark:** `YP.`
- **Title / Role:** SY BCA Student // MERN, MySQL & PostgreSQL Databases Intern
- **Primary Email:** `yashpokiya44@gmail.com`
- **Location:** Surat, Gujarat, India (Available for Remote // On-Site roles)
- **Status:** Intern at Settings Infotech
- **Cloudinary Profile Photo:** `https://res.cloudinary.com/dsncsvgfm/image/upload/v1777291481/WhatsApp_Image_2026-04-27_at_5.34.22_PM_rq7rwn.jpg`
- **Cloudinary Resume PDF:** `https://res.cloudinary.com/dsncsvgfm/image/upload/v1777291664/Yash_Pokiya_-_Resume_xu6swi.pdf`
- **GitHub Profile:** `https://github.com/yash-pokiya`
- **LinkedIn Profile:** `https://www.linkedin.com/in/yash-pokiyaone8/`
- **Web3Forms Key:** `57db2962-2d44-406f-9dac-b6f6023ccf8f`

---

## 3. HERO & SYSTEM READOUT

- **Role Tag:** `SY BCA STUDENT // MERN & DATABASE INTERN`
- **Hero Title:** `TURNING CODE INTO EXPERIENCE.`
- **Hero Statement:** `I build digital products prioritizing performance, elegance, and logical integrity.`
- **System Version:** `v2.0 // SPEC SHEET`
- **System Status:** `ONLINE // ACTIVE`
- **Current Focus:** `MERN & Relational DBs Mastery` (Progress: 85%)
- **Target Position:** `Currently Interning @ Settings Infotech` (Surat, IN // Remote)
- **Metadata Highlights:**
  1. Logic Architecture
  2. Full-Stack MERN
  3. Relational DBs (MySQL/Postgres)
  4. System Optimization

---

## 4. ABOUT & SERVICES

- **Section Header:** `Architectural Profile`
- **Professional Dossier:**
  > "I am Yash Pokiya, a motivated SY BCA student and MERN, MySQL & PostgreSQL Databases Intern at Settings Infotech in Surat, India. I specialize in building responsive React applications, robust Node.js/Express APIs, and scalable MongoDB, MySQL, and PostgreSQL database architectures."
- **Core Trait Tags:**
  - Quick Learner
  - Team Player
  - Logic Builder
  - Problem Solver
- **Current Execution Focus:** `Backend Logic & Database Architectures` (Node.js, Express, MongoDB, MySQL & PostgreSQL)
- **Metadata Attributes:**
  - Philosophy: `Clean Architecture`
  - Routine: `Continuous Logic`
  - Deployment: `Surat // Global`
  - Status: `Currently Interning @ Settings Infotech`

### Services Offered (Plain Mono-Labeled List):
1. **Responsive Web Design:** Building mobile-first, high-performance UI components using modern HTML5, CSS3, Tailwind CSS, Bootstrap 5, and React.
2. **Full-Stack Application Development:** End-to-end MERN (MongoDB, Express.js, React.js, Node.js) web applications with secure client-server architectures.
3. **API Integration & Relational Databases:** Building secure REST APIs, authentication flows (JWT, RBAC), and schemas in MongoDB, MySQL, and PostgreSQL.
4. **Website Optimization & Debugging:** Performance tuning, code refactoring, logic troubleshooting, and cross-browser compatibility.

---

## 5. PROJECTS & CASE STUDIES (3 Major Systems)

### 1. NestlyLiving
- **Title:** NestlyLiving
- **Category:** REAL ESTATE ECOSYSTEM
- **Description:** A comprehensive platform for renting and buying properties with advanced filtering and seamless property management.
- **Tech Stack:** `React`, `Node.js`, `Express.js`, `MongoDB`
- **Live System Link:** `https://nestlyliving.vercel.app/`
- **GitHub Repository:** `https://github.com/yash-pokiya`
- **Image URL:** `https://res.cloudinary.com/dsncsvgfm/image/upload/v1777294104/Screenshot_2026-04-27_181734_lqfk3t.png`
- **Case Study:**
  - **Challenge:** Managing complex property filtering and search operations efficiently.
  - **Logic:** Optimized MERN architecture with MongoDB indexed queries and Express controllers.
  - **Results:** Sub-500ms search query response and 100% mobile responsiveness.

### 2. Caratior
- **Title:** Caratior
- **Category:** LUXURY JEWELLERY STORE
- **Description:** Premium jewellery storefront featuring multi-currency support (USD, GBP, AUD, CAD) and high-end product visualization.
- **Tech Stack:** `MERN Stack`, `Redux Toolkit`, `JWT`
- **Live System Link:** `https://www.caratior.com/`
- **GitHub Repository:** `https://github.com/yash-pokiya`
- **Image URL:** `https://res.cloudinary.com/dsncsvgfm/image/upload/v1777294180/Screenshot_2026-04-27_181920_cjwkae.png`
- **Case Study:**
  - **Challenge:** Implementing accurate multi-currency price conversion for 24k gold items.
  - **Logic:** Redux-controlled currency store syncing with real-time conversion APIs.
  - **Results:** Automated price updates every 12 hours with zero discrepancy.

### 3. CYPHER
- **Title:** CYPHER
- **Category:** ZERO-KNOWLEDGE PHOTO STORAGE
- **Description:** A privacy-first encrypted photo vault where images are encrypted client-side before upload — the server only ever stores ciphertext, never plaintext photos or passwords.
- **Tech Stack:** `React`, `Node.js`, `Express`, `MongoDB`, `Cloudinary`
- **Live System Link:** `https://cyphervault.vercel.app/`
- **GitHub Repository:** `https://github.com/yash-pokiya`
- **Image URL:** `https://res.cloudinary.com/dsncsvgfm/image/upload/v1784731266/Screenshot_2026-07-22_200949_pqzibn.png`
- **Case Study:**
  - **Challenge:** Preventing server-side access or data leaks for sensitive personal media.
  - **Logic:** Client-side AES-256-GCM encryption with per-file unique 256-bit keys derived via PBKDF2 (310,000 iterations, SHA-256). Cloudinary stores ciphertext blobs while MongoDB stores wrapped keys; master key exists only in browser memory.
  - **Results:** Zero-knowledge security architecture ensuring total client-side privacy.

---

## 6. SKILL MATRIX (5 Categories)

### 1. Frontend Development
- HTML5 / CSS3: **95%**
- JavaScript (ES6+): **85%**
- Tailwind CSS: **90%**
- Bootstrap 5: **90%**
- React.js: **80%**
- Redux Toolkit: **80%**

### 2. Backend Engineering
- Node.js: **75%**
- Express.js: **75%**
- RESTful APIs: **82%**

### 3. Database Systems
- MongoDB: **80%**
- MongoDB Compass: **85%**
- MySQL: **75%**
- PostgreSQL: **70%** (Note: `PostgreSQL — [YASH: confirm %]`)

### 4. Tools & Workflow
- Git & GitHub: **98%**
- VS Code: **95%**
- Postman: **88%**
- Vercel / Netlify: **85%**

### 5. Logic & Architecture
- C Language (Logic Building): **90%**
- System Architecture & Problem Solving: **90%**

---

## 7. PROFESSIONAL HISTORY (2 Timeline Entries)

### 1. Settings Infotech (Current Internship)
- **Role:** MERN, MySQL & PostgreSQL Databases Intern
- **Company:** Settings Infotech
- **Location:** Surat, Gujarat, India
- **Period:** June 2026 — Present (Dynamic: `June 2026 — Present · 2 mos`)
- **Description:** Developing scalable MERN applications, creating REST APIs with JWT authentication, building reusable React components, and working with MySQL and PostgreSQL alongside MongoDB for relational and non-relational database needs.
- **Tech Stack:** `React.js`, `Node.js`, `Express.js`, `MongoDB`, `MySQL`, `PostgreSQL`, `REST APIs`

### 2. LaMinds (Previous Internship)
- **Role:** MERN Stack Intern
- **Company:** LaMinds
- **Location:** Surat, Gujarat, India (Sumul Dairy Rd)
- **Period:** January 2026 — May 2026
- **Description:** Contributed to full-stack web application development using the MERN ecosystem. Developed responsive interfaces, integrated API endpoints, and optimized client logic for business applications.
- **Tech Stack:** `MongoDB`, `Express`, `React`, `Node.js`

---

## 8. ACADEMIC EDUCATION (Single Entry)

- **Degree:** Bachelor of Computer Applications (BCA) - Second Year (SY)
- **Current Status:** Semester IV (Ongoing)
- **College:** Sutex Bank College of Computer Applications
- **University:** Veer Narmad South Gujarat University (VNSGU)
- **Location:** Surat, Gujarat, India
- **Timeline:** 2024 — Ongoing
- **Core Curriculum:**
  1. Database Architectures (SQL & NoSQL Systems)
  2. Full-Stack Logic (MERN Frameworks)
  3. Web Technologies (System Design Principles)
  4. Business Applications (Enterprise Client Specs)

---

## 9. TECHNICAL INSIGHTS & BLOG ENTRIES

### Entry 1 (Featured)
- **Title:** The Future of Web Performance in 2026
- **Excerpt:** Exploring the intersection of modern design, zero-runtime CSS tools, and efficient engineering in the web landscape.
- **Tag:** `TECH`
- **Date:** `Apr 25, 2026`
- **Read Time:** `5 MIN READ`

### Entry 2
- **Title:** Why I Switched to Tailwind 4 for Everything
- **Excerpt:** The power of zero-runtime CSS and the new architectural freedom in component styling without build configuration bloat.
- **Tag:** `DEV`
- **Date:** `Apr 18, 2026`
- **Read Time:** `8 MIN READ`

### Entry 3
- **Title:** Transitioning from Frontend to Full Stack
- **Excerpt:** The logical challenges and architectural shifts when moving into the MERN ecosystem and managing Node.js API logic.
- **Tag:** `GROWTH`
- **Date:** `Apr 10, 2026`
- **Read Time:** `4 MIN READ`
