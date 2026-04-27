import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Github, Code2, Globe, ShoppingBag, Home as HomeIcon, Diamond, ArrowUpRight, Terminal, X, Cpu, Database, Zap } from 'lucide-react'

const projects = [
  {
    title: "NestlyLiving",
    category: "Real Estate Ecosystem",
    description: "A comprehensive platform for renting and buying properties with advanced filtering and seamless property management.",
    link: "https://nestlyliving.vercel.app/",
    image: "https://res.cloudinary.com/dsncsvgfm/image/upload/v1777294104/Screenshot_2026-04-27_181734_lqfk3t.png",
    github: "https://github.com/yash-pokiya",
    tech: ["Next.js 14", "Tailwind CSS", "MongoDB"],
    icon: <HomeIcon size={24} />,
    color: "from-blue-500 to-indigo-600",
    size: "lg",
    caseStudy: {
      challenge: "Managing complex filtering for thousands of properties without performance lag.",
      logic: "Next.js 14 Server Components with Prisma for optimized database queries.",
      results: "Sub-500ms search results and 100% mobile responsiveness."
    }
  },
  {
    title: "Caratior",
    category: "Luxury Jewellery E-commerce",
    description: "Premium jewellery storefront featuring multi-currency support (USD, GBP, AUD, CAD) and high-end product visualization.",
    link: "https://jewellery-store-six-zeta.vercel.app/",
    image: "https://res.cloudinary.com/dsncsvgfm/image/upload/v1777294180/Screenshot_2026-04-27_181920_cjwkae.png",
    github: "https://github.com/yash-pokiya",
    tech: ["MERN", "Redux Toolkit", "JWT"],
    icon: <Diamond size={24} />,
    color: "from-purple-500 to-pink-600",
    size: "md",
    caseStudy: {
      challenge: "Implementing accurate multi-currency price conversion for 24k gold items.",
      logic: "Redux-controlled currency store syncing with real-time conversion APIs.",
      results: "Automated price updates every 12 hours with zero discrepancy."
    }
  },
  {
    title: "System E-commerce",
    category: "MERN Framework",
    description: "A logic-driven e-commerce baseline demonstrating core MERN functionalities, cart management, and order flow.",
    link: "https://ecommerce-mern-two-xi.vercel.app/",
    image: "https://res.cloudinary.com/dsncsvgfm/image/upload/v1777294226/Screenshot_2026-04-27_182006_gdlkss.png",
    github: "https://github.com/yash-pokiya",
    tech: ["MongoDB", "Express", "React", "Node.js"],
    icon: <ShoppingBag size={24} />,
    color: "from-violet-500 to-indigo-600",
    size: "md",
    caseStudy: {
      challenge: "Building a secure admin dashboard to manage inventory and user permissions.",
      logic: "JWT-based authentication with role-based access control (RBAC) in Node.js.",
      results: "Zero unauthorized access incidents and streamlined order management."
    }
  }
]

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);
  return (
    <div className="max-w-7xl mx-auto px-8 py-12 space-y-24">
      {/* HEADER */}
      <section className="flex flex-col md:flex-row md:items-end justify-between gap-12">
        <div className="space-y-6 max-w-2xl">
          <span className="glass-tag text-indigo-500">System // Deployments</span>
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none text-[var(--text-main)]">
            Selected <br /> <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-500 to-purple-500 font-black">Architectures</span>
          </h1>
          <p className="text-zinc-600 dark:text-zinc-400 font-bold uppercase tracking-widest text-[10px] leading-relaxed">
            Deployment Log: 03 Major Systems Online. <br /> Focused on full-stack MERN and Next.js infrastructures.
          </p>
        </div>
      </section>

      {/* PROJECT GRID */}
      <div className="grid grid-cols-1 gap-12">
        {projects.map((project, idx) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="bento-card group p-0 overflow-hidden relative"
          >
            <div className="bento-grid-bg" />
            
            <div className="flex flex-col lg:flex-row h-full">
              {/* IMAGE / PREVIEW SIDE */}
              <div className="relative overflow-hidden bg-zinc-100 dark:bg-zinc-900 min-h-[350px] lg:w-1/2 border-b lg:border-b-0 lg:border-r border-black/5 dark:border-white/5">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="absolute inset-0 w-full h-full object-cover object-top transition-all duration-700 group-hover:scale-105" 
                />
                
                {/* MOCKUP UI ELEMENTS */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/90 dark:bg-black/90 backdrop-blur-md border border-black/10 dark:border-white/10 rounded-xl p-3 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 shadow-2xl z-20">
                  <div className="flex justify-between items-center">
                    <div className="flex gap-1.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
                      <div className="w-1.5 h-1.5 rounded-full bg-yellow-500" />
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                    </div>
                    <span className="text-[8px] font-black uppercase tracking-widest opacity-40 text-black dark:text-white">Live Interface Preview</span>
                  </div>
                </div>
              </div>

              {/* CONTENT SIDE */}
              <div className="p-8 md:p-16 lg:w-1/2 flex flex-col justify-between relative z-10 bg-[var(--card-bg)] backdrop-blur-sm">
                <div>
                  <div className="flex justify-between items-start mb-8">
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[var(--accent)]">{project.category}</span>
                    <Code2 size={20} className="opacity-20" />
                  </div>
                  <h3 className="text-4xl font-black uppercase tracking-tighter leading-none text-[var(--text-main)] group-hover:text-[var(--accent)] transition-colors duration-500">
                    {project.title}
                  </h3>
                  <p className="text-zinc-700 dark:text-zinc-300 text-base font-bold leading-relaxed mb-10 max-w-xl">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-3 mb-12">
                    {project.tech.map(t => (
                      <span key={t} className="px-4 py-1.5 bg-black/5 dark:bg-white/5 rounded-full text-[10px] font-black uppercase tracking-widest text-zinc-800 dark:text-zinc-200">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="btn-neo px-8 py-3 text-[9px] font-black uppercase tracking-[0.3em] flex items-center gap-2"
                  >
                    Launch System <ArrowUpRight size={14} />
                  </a>
                  <button 
                    onClick={() => setActiveProject(project)}
                    className="glass-tag px-8 py-3 hover:bg-[var(--accent)] hover:text-white transition-all text-[9px] font-black uppercase tracking-[0.3em] flex items-center gap-2"
                  >
                    <Terminal size={14} /> View Case Study
                  </button>
                  <a 
                    href={project.github} 
                    target="_blank"
                    rel="noreferrer"
                    className="p-4 rounded-full bg-black/5 dark:bg-white/5 hover:bg-[var(--accent)] hover:text-white transition-all shadow-lg"
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* ARCHITECTURAL FOOTER */}
      <section className="bento-card p-12 text-center relative overflow-hidden">
        <div className="bento-grid-bg opacity-30" />
        <div className="relative z-10 space-y-6">
          <h2 className="text-2xl font-black uppercase tracking-widest">Looking for custom <span className="text-[var(--accent)]">solutions?</span></h2>
          <p className="text-zinc-600 dark:text-zinc-400 font-bold uppercase tracking-widest text-[10px]">Active for new deployments // 2026 Strategy</p>
          <button className="btn-neo px-12 py-4 text-[10px] font-black uppercase tracking-[0.4em]">Initialize Project</button>
        </div>
      </section>
      {/* FEATURED CASE STUDY SECTION */}
      <section className="space-y-12">
        <div className="flex items-center gap-4">
          <h2 className="text-2xl font-black uppercase tracking-tighter text-[var(--text-main)]">Featured Case Study</h2>
          <div className="h-px flex-1 bg-black/10 dark:bg-white/10" />
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bento-card p-12 relative overflow-hidden"
        >
          <div className="bento-grid-bg opacity-30" />
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div className="space-y-2">
                <span className="glass-tag text-[var(--accent)]">Case Study // 01</span>
                <h3 className="text-4xl font-black uppercase tracking-tighter leading-tight text-[var(--text-main)]">Caratior: <br /> Luxury Logistics</h3>
              </div>
              
              <div className="space-y-6">
                <p className="text-zinc-600 dark:text-zinc-400 text-sm font-bold leading-relaxed">
                  The primary objective was to build a high-performance MERN architecture capable of handling multi-currency real-time conversions for high-ticket luxury items.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5">
                    <p className="text-[9px] font-black uppercase tracking-[0.3em] text-[var(--accent)] mb-1">Logic Flow</p>
                    <p className="text-xs font-bold text-[var(--text-main)]">Redux State Sync</p>
                  </div>
                  <div className="p-4 rounded-xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5">
                    <p className="text-[9px] font-black uppercase tracking-[0.3em] text-[var(--accent)] mb-1">System Efficiency</p>
                    <p className="text-xs font-bold text-[var(--text-main)]">99.8% Uptime</p>
                  </div>
                </div>
              </div>

              <button className="btn-neo px-12 py-4">Download Technical Manifesto</button>
            </div>

            <div className="bg-black/5 dark:bg-white/5 rounded-[2rem] p-8 border border-black/5 dark:border-white/5 space-y-8">
              <div className="flex items-center gap-4 border-b border-black/5 dark:border-white/5 pb-6">
                <div className="w-10 h-10 rounded-full bg-[var(--accent)] flex items-center justify-center text-white">
                  <Terminal size={20} />
                </div>
                <h4 className="text-xs font-black uppercase tracking-widest text-[var(--text-main)]">Architectural Breakdown</h4>
              </div>
              
              <div className="space-y-4">
                {[
                  { label: "Frontend", val: "React / Tailwind / Framer" },
                  { label: "Backend", val: "Node.js / Express / JWT" },
                  { label: "Database", val: "MongoDB Atlas / Aggregation" },
                  { label: "Payment", val: "Stripe / Multi-Currency" }
                ].map((stat, i) => (
                  <div key={i} className="flex justify-between items-center text-[10px] font-bold uppercase tracking-widest">
                    <span className="opacity-40 text-[var(--text-main)]">{stat.label}</span>
                    <span className="text-indigo-500">{stat.val}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* CASE STUDY MODAL */}
      <AnimatePresence>
        {activeProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveProject(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-xl"
            />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-4xl bento-card bg-white dark:bg-[#0a0a0a] p-12 overflow-hidden shadow-[0_0_100px_rgba(0,0,0,0.5)]"
            >
              <div className="bento-grid-bg" />
              <button 
                onClick={() => setActiveProject(null)}
                className="absolute top-8 right-8 text-zinc-400 hover:text-[var(--accent)] transition-colors p-2"
              >
                <X size={24} />
              </button>

              <div className="relative z-10 space-y-12">
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-[var(--accent)] flex items-center justify-center text-white shadow-2xl shadow-violet-500/20">
                    {activeProject.icon}
                  </div>
                  <div>
                    <span className="text-[var(--accent)] text-[10px] font-black uppercase tracking-[0.4em]">Technical Dossier</span>
                    <h3 className="text-4xl font-black uppercase tracking-tighter text-[var(--text-main)]">{activeProject.title}</h3>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                  <div className="space-y-8">
                    <div className="space-y-3">
                      <p className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.3em] text-[var(--accent)]">
                        <Cpu size={14} /> The Challenge
                      </p>
                      <p className="text-zinc-600 dark:text-zinc-300 font-bold leading-relaxed">
                        {activeProject.caseStudy.challenge}
                      </p>
                    </div>

                    <div className="space-y-3">
                      <p className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.3em] text-[var(--accent)]">
                        <Database size={14} /> System Logic
                      </p>
                      <p className="text-zinc-600 dark:text-zinc-300 font-bold leading-relaxed italic">
                        {activeProject.caseStudy.logic}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-8">
                    <div className="p-8 rounded-3xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 space-y-6">
                      <p className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.3em] text-[var(--accent)]">
                        <Zap size={14} /> Execution Results
                      </p>
                      <p className="text-2xl font-black uppercase tracking-tight text-[var(--text-main)]">
                        {activeProject.caseStudy.results}
                      </p>
                      <div className="h-1 w-full bg-violet-500/20 rounded-full overflow-hidden">
                        <motion.div initial={{ width: 0 }} animate={{ width: '100%' }} transition={{ duration: 1 }} className="h-full bg-[var(--accent)]" />
                      </div>
                    </div>

                    <a 
                      href={activeProject.link} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="btn-neo w-full flex items-center justify-center gap-3"
                    >
                      Initialize Live System <ArrowUpRight size={18} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Projects
