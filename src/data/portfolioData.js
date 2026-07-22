// Helper function to calculate duration dynamically from a start date
export const getDuration = (startDateStr) => {
  const start = new Date(startDateStr)
  const now = new Date()
  const diffMonths = (now.getFullYear() - start.getFullYear()) * 12 + (now.getMonth() - start.getMonth()) + 1
  const months = Math.max(1, diffMonths)
  return `${months} mo${months > 1 ? 's' : ''}`
}

export const personalInfo = {
  name: "Yash Pokiya",
  wordmark: "YP.",
  title: "Full Stack MERN & Database Engineering Intern",
  subtitle: "Full Stack MERN Developer from Surat, India | React, Node.js, Express, MongoDB, MySQL, PostgreSQL",
  email: "yashpokiya44@gmail.com",
  location: "Surat, Gujarat, India",
  status: "Intern at Settings Infotech",
  statusLabel: "Intern at Settings Infotech",
  photoUrl: "https://res.cloudinary.com/dsncsvgfm/image/upload/v1777291481/WhatsApp_Image_2026-04-27_at_5.34.22_PM_rq7rwn.jpg",
  resumeUrl: "https://res.cloudinary.com/dsncsvgfm/image/upload/v1777291664/Yash_Pokiya_-_Resume_xu6swi.pdf",
  githubUrl: "https://github.com/yash-pokiya",
  linkedinUrl: "https://www.linkedin.com/in/yash-pokiyaone8/",
  web3FormsKey: "57db2962-2d44-406f-9dac-b6f6023ccf8f"
}

export const heroData = {
  roleTag: "YASH POKIYA // FULL STACK MERN & DATABASE INTERN",
  titleLine1: "TURNING CODE",
  titleLine2: "INTO EXPERIENCE.",
  statement: "I build digital products prioritizing performance, elegance, and logical integrity.",
  version: "v2.0 // SPEC SHEET",
  systemStatus: "ONLINE // ACTIVE",
  focus: "MERN & Relational DBs",
  focusProgress: 85,
  targetPosition: "Intern at Settings Infotech",
  targetLocation: "SURAT, IN // REMOTE",
  highlights: [
    { id: "01", title: "Logic Architecture" },
    { id: "02", title: "Full-Stack MERN" },
    { id: "03", title: "Relational DBs (MySQL/Postgres)" },
    { id: "04", title: "System Optimization" }
  ]
}

export const aboutData = {
  headerTag: "§02 // IDENTITY SPEC",
  title: "About Yash Pokiya",
  subTitle: "Yash Pokiya is a Full Stack MERN & Database Intern based in Surat, Gujarat, India. Bridging practical client specs with structured logic.",
  dossier: "I am Yash Pokiya, a motivated SY BCA student and MERN, MySQL & PostgreSQL Databases Intern at Settings Infotech in Surat, India. I specialize in building responsive React applications, robust Node.js/Express APIs, and scalable MongoDB, MySQL, and PostgreSQL database architectures.",
  traits: ["Quick Learner", "Team Player", "Logic Builder", "Problem Solver"],
  currentFocus: "Backend Logic & Database Architectures",
  currentFocusSub: "Node.js, Express, MongoDB, MySQL & PostgreSQL",
  focusDesc: "Strengthening API structures, REST principles, database models, and relational data querying.",
  metadata: [
    { label: "PHILOSOPHY", val: "Clean Architecture" },
    { label: "ROUTINE", val: "Continuous Logic" },
    { label: "DEPLOYMENT", val: "Surat // Global" },
    { label: "STATUS", val: "Intern at Settings Infotech" }
  ]
}

export const servicesData = [
  {
    id: "01",
    title: "Responsive Web Design",
    description: "Building mobile-first, high-performance UI components using modern HTML5, CSS3, Tailwind CSS, Bootstrap 5, and React."
  },
  {
    id: "02",
    title: "Full-Stack Application Development",
    description: "End-to-end MERN (MongoDB, Express.js, React.js, Node.js) web applications with secure client-server architectures."
  },
  {
    id: "03",
    title: "API Integration & Relational Databases",
    description: "Building secure REST APIs, authentication flows (JWT, RBAC), and schemas in MongoDB, MySQL, and PostgreSQL."
  },
  {
    id: "04",
    title: "Website Optimization & Debugging",
    description: "Performance tuning, code refactoring, logic troubleshooting, and cross-browser compatibility."
  }
]

export const projectsData = [
  {
    id: "01",
    title: "NestlyLiving",
    category: "REAL ESTATE ECOSYSTEM",
    description: "A comprehensive platform for renting and buying properties with advanced filtering and seamless property management.",
    link: "https://nestlyliving.vercel.app/",
    github: "https://github.com/yash-pokiya",
    image: "https://res.cloudinary.com/dsncsvgfm/image/upload/v1777294104/Screenshot_2026-04-27_181734_lqfk3t.png",
    imageAlt: "NestlyLiving Real Estate Platform by Yash Pokiya - Full Stack MERN Developer using React, Node.js, Express, and MongoDB",
    tech: ["React", "Node.js", "Express.js", "MongoDB"],
    caseStudy: {
      challenge: "Managing complex property filtering and search operations efficiently.",
      logic: "Optimized MERN architecture with MongoDB indexed queries and Express controllers.",
      results: "Sub-500ms search query response and 100% mobile responsiveness."
    }
  },
  {
    id: "02",
    title: "Caratior",
    category: "LUXURY JEWELLERY STORE",
    description: "Premium jewellery storefront featuring multi-currency support (USD, GBP, AUD, CAD) and high-end product visualization.",
    link: "https://www.caratior.com/",
    github: "https://github.com/yash-pokiya",
    image: "https://res.cloudinary.com/dsncsvgfm/image/upload/v1777294180/Screenshot_2026-04-27_181920_cjwkae.png",
    imageAlt: "Caratior Luxury Jewellery E-commerce by Yash Pokiya - React and Node.js Developer featuring multi-currency sync",
    tech: ["MERN Stack", "Redux Toolkit", "JWT"],
    caseStudy: {
      challenge: "Implementing accurate multi-currency price conversion for 24k gold items.",
      logic: "Redux-controlled currency store syncing with real-time conversion APIs.",
      results: "Automated price updates every 12 hours with zero discrepancy."
    }
  },
  {
    id: "03",
    title: "CYPHER",
    category: "ZERO-KNOWLEDGE PHOTO STORAGE",
    description: "A privacy-first encrypted photo vault where images are encrypted client-side before upload — the server only ever stores ciphertext, never plaintext photos or passwords.",
    link: "https://cyphervault.vercel.app/",
    github: "https://github.com/yash-pokiya",
    image: "https://res.cloudinary.com/dsncsvgfm/image/upload/v1784731266/Screenshot_2026-07-22_200949_pqzibn.png",
    imageAlt: "CYPHER Zero-Knowledge Encrypted Photo Vault by Yash Pokiya",
    tech: ["React", "Node.js", "Express", "MongoDB", "Cloudinary"],
    caseStudy: {
      challenge: "Preventing server-side access or data leaks for sensitive personal media.",
      logic: "Client-side AES-256-GCM encryption with per-file unique 256-bit keys derived via PBKDF2 (310,000 iterations, SHA-256). Cloudinary stores ciphertext blobs while MongoDB stores wrapped keys; master key exists only in browser memory.",
      results: "Zero-knowledge security architecture ensuring total client-side privacy."
    }
  }
]

export const skillsData = [
  {
    title: "Frontend Development",
    skills: [
      { name: "HTML5 / CSS3", level: 95 },
      { name: "JavaScript (ES6+)", level: 85 },
      { name: "Tailwind CSS", level: 90 },
      { name: "Bootstrap 5", level: 90 },
      { name: "React.js", level: 80 },
      { name: "Redux Toolkit", level: 80 }
    ]
  },
  {
    title: "Backend Engineering",
    skills: [
      { name: "Node.js", level: 75 },
      { name: "Express.js", level: 75 },
      { name: "RESTful APIs", level: 82 }
    ]
  },
  {
    title: "Database Systems",
    skills: [
      { name: "MongoDB", level: 80 },
      { name: "MongoDB Compass", level: 85 },
      { name: "MySQL", level: 75 },
      { name: "PostgreSQL [YASH: confirm %]", level: 70 }
    ]
  },
  {
    title: "Tools & Workflow",
    skills: [
      { name: "Git & GitHub", level: 98 },
      { name: "VS Code", level: 95 },
      { name: "Postman", level: 88 },
      { name: "Vercel / Netlify", level: 85 }
    ]
  },
  {
    title: "Logic & Architecture",
    skills: [
      { name: "C Language (Logic Building)", level: 90 },
      { name: "System Architecture", level: 90 }
    ]
  }
]

export const experienceData = {
  entries: [
    {
      id: "01",
      role: "MERN, MySQL & PostgreSQL Databases Intern",
      company: "Settings Infotech",
      location: "Surat, Gujarat, India",
      period: `June 2026 — Present · ${getDuration("2026-06-01")}`,
      status: "CURRENT INTERNSHIP",
      description: "Developing scalable MERN applications, creating REST APIs with JWT authentication, building reusable React components, and working with MySQL and PostgreSQL alongside MongoDB for relational and non-relational database needs.",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "MySQL", "PostgreSQL", "REST APIs"]
    },
    {
      id: "02",
      role: "MERN Stack Intern",
      company: "LaMinds",
      location: "Surat, Gujarat, India (Sumul Dairy Rd)",
      period: "January 2026 — May 2026",
      status: "COMPLETED INTERNSHIP",
      description: "Contributed to full-stack web application development using the MERN ecosystem. Developed responsive interfaces, integrated API endpoints, and optimized client logic for business applications.",
      tech: ["MongoDB", "Express", "React", "Node.js"]
    }
  ],
  goals: [
    { label: "GOAL 01", text: "Master Relational & NoSQL Systems" },
    { label: "GOAL 02", text: "Deploy Production REST APIs" },
    { label: "GOAL 03", text: "Optimize Client Performance" }
  ]
}

export const educationData = {
  degree: "Bachelor of Computer Applications (BCA)",
  phase: "BCA - SY",
  college: "Sutex Bank College of Computer Applications",
  university: "VNSGU (Veer Narmad South Gujarat University)",
  location: "Surat, Gujarat, India",
  timeline: "2024 — ONGOING (SY)",
  semester: "SEMESTER IV // SY",
  curriculum: [
    { title: "Database Architectures", desc: "SQL (MySQL/Postgres) & NoSQL (MongoDB)" },
    { title: "Full-Stack Logic", desc: "MERN Frameworks" },
    { title: "Web Technologies", desc: "System Design Principles" },
    { title: "Business Applications", desc: "Enterprise Client Specs" }
  ],
  metadata: [
    { label: "CURRENT SEMESTER", val: "SEMESTER IV // SY" },
    { label: "CORE CONCENTRATION", val: "Software & Web Systems" },
    { label: "LOGIC SPECIALIZATION", val: "MERN / Relational DBs" }
  ]
}

export const blogData = [
  {
    id: "01",
    title: "The Future of Web Performance in 2026",
    excerpt: "Exploring the intersection of modern design, zero-runtime CSS tools, and efficient engineering in the web landscape.",
    date: "Apr 25, 2026",
    readTime: "5 MIN READ",
    tag: "TECH",
    featured: true
  },
  {
    id: "02",
    title: "Why I Switched to Tailwind 4 for Everything",
    excerpt: "The power of zero-runtime CSS and the new architectural freedom in component styling without build configuration bloat.",
    date: "Apr 18, 2026",
    readTime: "8 MIN READ",
    tag: "DEV",
    featured: false
  },
  {
    id: "03",
    title: "Transitioning from Frontend to Full Stack",
    excerpt: "The logical challenges and architectural shifts when moving into the MERN ecosystem and managing Node.js API logic.",
    date: "Apr 10, 2026",
    readTime: "4 MIN READ",
    tag: "GROWTH",
    featured: false
  }
]
