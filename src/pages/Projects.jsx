import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Github, ArrowUpRight, X } from 'lucide-react'
import { projectsData } from '../data/portfolioData'

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null)

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 space-y-20">
      {/* HEADER */}
      <section className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-8 border-b border-[var(--line)]">
        <div className="space-y-4 max-w-2xl">
          <span className="mono-label text-[var(--signal)]">§03 // ARCHITECTURES</span>
          <h1 className="font-display text-4xl md:text-6xl font-black uppercase text-[var(--ink)] tracking-tight">
            Selected Projects
          </h1>
          <p className="text-sm font-medium text-[var(--ink-soft)] uppercase tracking-wider">
            Deployment Log: 03 Major Web Systems Online. Focused on Full-Stack MERN and Next.js infrastructures.
          </p>
        </div>
      </section>

      {/* PROJECT LIST (3 CARDS ONLY) */}
      <div className="space-y-12">
        {projectsData.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="instrument-card overflow-hidden group"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
              {/* PREVIEW SIDE */}
              <div className="lg:col-span-6 relative bg-[var(--paper)] border-b lg:border-b-0 lg:border-r border-[var(--line)] min-h-[300px] overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105" 
                />
                <div className="absolute top-4 left-4 bg-[var(--paper-raised)]/95 border border-[var(--line)] px-3 py-1 rounded-sm">
                  <span className="font-mono text-[9px] font-bold uppercase tracking-widest text-[var(--ink)]">
                    FIG 3.{idx + 1} // INTERFACE
                  </span>
                </div>
              </div>

              {/* CONTENT SIDE */}
              <div className="lg:col-span-6 p-8 md:p-12 flex flex-col justify-between space-y-8">
                <div>
                  <div className="flex justify-between items-center pb-4 mb-6 border-b border-[var(--line)]">
                    <span className="mono-label text-[var(--signal)]">{project.category}</span>
                    <span className="mono-label text-[var(--ink-soft)]">PROJECT // 0{idx + 1}</span>
                  </div>

                  <h3 className="font-display text-3xl font-bold uppercase text-[var(--ink)] mb-4">
                    {project.title}
                  </h3>

                  <p className="text-sm text-[var(--ink-soft)] leading-relaxed mb-6">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tech.map(t => (
                      <span key={t} className="tag-outline">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-[var(--line)] flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-6">
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="signal-underline font-mono text-xs uppercase"
                    >
                      LAUNCH SYSTEM <ArrowUpRight size={14} />
                    </a>

                    {project.caseStudy && (
                      <button 
                        onClick={() => setActiveProject(project)}
                        className="font-mono text-xs font-semibold text-[var(--ink-soft)] hover:text-[var(--ink)] uppercase transition-colors"
                      >
                        [ VIEW SPEC ]
                      </button>
                    )}
                  </div>

                  <a 
                    href={project.github} 
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 border border-[var(--line)] rounded-md text-[var(--ink-soft)] hover:text-[var(--ink)] hover:border-[var(--ink)] transition-colors"
                    title="Source Repository"
                  >
                    <Github size={16} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CASE STUDY MODAL */}
      <AnimatePresence>
        {activeProject && activeProject.caseStudy && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveProject(null)}
              className="absolute inset-0 bg-[#101012]/40"
            />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="relative w-full max-w-3xl instrument-card bg-[var(--paper-raised)] p-8 md:p-12 z-10 space-y-8"
            >
              <div className="flex justify-between items-start pb-6 border-b border-[var(--line)]">
                <div>
                  <span className="mono-label text-[var(--signal)]">TECHNICAL DOSSIER</span>
                  <h3 className="font-display text-3xl font-bold uppercase text-[var(--ink)] mt-1">
                    {activeProject.title}
                  </h3>
                </div>
                <button 
                  onClick={() => setActiveProject(null)}
                  className="p-2 rounded-md border border-[var(--line)] text-[var(--ink)] hover:bg-[var(--paper)]"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="space-y-6">
                <div className="space-y-2">
                  <span className="mono-label text-[var(--ink-soft)]">CHALLENGE</span>
                  <p className="text-sm font-medium text-[var(--ink)] leading-relaxed">
                    {activeProject.caseStudy.challenge}
                  </p>
                </div>

                <div className="h-[1px] bg-[var(--line)]" />

                <div className="space-y-2">
                  <span className="mono-label text-[var(--ink-soft)]">SYSTEM LOGIC</span>
                  <p className="text-sm font-mono text-[var(--ink-soft)] leading-relaxed">
                    {activeProject.caseStudy.logic}
                  </p>
                </div>

                <div className="h-[1px] bg-[var(--line)]" />

                <div className="space-y-2">
                  <span className="mono-label text-[var(--signal)]">RESULT</span>
                  <p className="font-display text-xl font-bold uppercase text-[var(--ink)]">
                    {activeProject.caseStudy.results}
                  </p>
                </div>
              </div>

              <div className="pt-6 border-t border-[var(--line)] flex justify-end gap-4">
                <button 
                  onClick={() => setActiveProject(null)}
                  className="px-6 py-2.5 border border-[var(--line)] text-xs font-mono font-bold uppercase rounded-md text-[var(--ink-soft)] hover:border-[var(--ink)]"
                >
                  CLOSE SPEC
                </button>
                <a 
                  href={activeProject.link} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="px-6 py-2.5 bg-[var(--ink)] text-[var(--paper-raised)] text-xs font-mono font-bold uppercase rounded-md hover:bg-[var(--signal)] transition-colors flex items-center gap-2"
                >
                  LIVE DEMO <ArrowUpRight size={14} />
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Projects
