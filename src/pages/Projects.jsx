import React from 'react'
import { motion } from 'framer-motion'
import { Github, Code2, Globe, ShoppingBag, Home as HomeIcon, Diamond, ArrowUpRight } from 'lucide-react'

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
    size: "lg"
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
    size: "md"
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
    color: "from-emerald-500 to-teal-600",
    size: "md"
  }
]

const Projects = () => {
  return (
    <div className="max-w-7xl mx-auto px-8 py-12 space-y-24">
      {/* HEADER */}
      <section className="flex flex-col md:flex-row md:items-end justify-between gap-12">
        <div className="space-y-6 max-w-2xl">
          <span className="glass-tag text-indigo-500">System // Deployments</span>
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none">
            Digital <br /> <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-500 to-purple-500">Architectures</span>
          </h1>
          <p className="text-zinc-600 dark:text-zinc-400 font-bold uppercase tracking-widest text-[10px] leading-relaxed">
            Deployment log: 03 Major Systems Active. Focus on performance, <br /> multi-currency logic, and real estate data structures.
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
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-indigo-500">{project.category}</span>
                    <Code2 size={20} className="opacity-20" />
                  </div>
                  <h3 className="text-4xl md:text-5xl font-black uppercase mb-6 tracking-tighter group-hover:text-indigo-500 transition-colors">
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

                <div className="flex items-center gap-8">
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex items-center gap-4 text-[11px] font-black uppercase tracking-[0.2em] group/link"
                  >
                    <span className="relative">
                      Launch System
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-500 group-hover/link:w-full transition-all" />
                    </span>
                    <ArrowUpRight size={18} className="group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                  </a>
                  <a 
                    href={project.github} 
                    target="_blank"
                    rel="noreferrer"
                    className="p-4 rounded-full bg-black/5 dark:bg-white/5 hover:bg-indigo-500 hover:text-white transition-all shadow-lg"
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
          <h2 className="text-2xl font-black uppercase tracking-widest">Looking for custom <span className="text-indigo-500">solutions?</span></h2>
          <p className="text-zinc-600 dark:text-zinc-400 font-bold uppercase tracking-widest text-[10px]">Active for new deployments // 2026 Strategy</p>
          <button className="btn-neo px-12 py-4 text-[10px] font-black uppercase tracking-[0.4em]">Initialize Project</button>
        </div>
      </section>
    </div>
  )
}

export default Projects
