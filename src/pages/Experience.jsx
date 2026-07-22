import React from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { experienceData, personalInfo } from '../data/portfolioData'

const Experience = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-16 md:space-y-20">
      {/* HEADER */}
      <section className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-8 border-b border-[var(--line)]">
        <div className="space-y-4 max-w-2xl">
          <span className="mono-label text-[var(--signal)]">§05 // HISTORY & OBJECTIVE</span>
          <h1 className="font-display text-4xl md:text-6xl font-black uppercase text-[var(--ink)] tracking-tight">
            Professional History
          </h1>
          <p className="text-sm font-medium text-[var(--ink-soft)] uppercase tracking-wider">
            Deployment logs: 02 Technical Deployments Logged. Full-Stack Web Development and Production Application Logic.
          </p>
        </div>
      </section>

      {/* CHRONOLOGICAL TIMELINE (2 ENTRIES) */}
      <div className="relative pl-6 md:pl-8 border-l border-[var(--line)] space-y-12 my-8">
        {experienceData.entries.map((entry, idx) => {
          const isCurrent = idx === 0
          return (
            <motion.div 
              key={entry.id}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative group"
            >
              {/* TIMELINE NODE DOT */}
              <div 
                className={`absolute -left-[31px] md:-left-[39px] top-1.5 w-3 h-3 rounded-full border-2 border-[var(--paper)] ${
                  isCurrent ? 'bg-[var(--signal)]' : 'bg-[var(--ink)]'
                }`} 
              />

              <div className="instrument-card p-8 md:p-10 space-y-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-[var(--line)]">
                  <div>
                    <span className="mono-label text-[var(--signal)]">{entry.status}</span>
                    <h3 className="font-display text-2xl font-bold uppercase text-[var(--ink)] mt-0.5">
                      {entry.role}
                    </h3>
                    <p className="font-mono text-xs font-semibold text-[var(--ink-soft)]">
                      {entry.company} // {entry.location}
                    </p>
                  </div>

                  <div className="font-mono text-xs text-left md:text-right">
                    <span className="block text-[9px] uppercase tracking-widest text-[var(--ink-soft)]">TIMELINE</span>
                    <span className="font-bold text-[var(--ink)] uppercase">{entry.period}</span>
                  </div>
                </div>

                <p className="text-sm text-[var(--ink-soft)] leading-relaxed max-w-3xl">
                  {entry.description}
                </p>

                <div className="pt-4 border-t border-[var(--line)] flex flex-wrap gap-2">
                  {entry.tech.map(t => (
                    <span key={t} className="tag-notched">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>

      {/* ACTIVE OBJECTIVE STRIP */}
      <section className="instrument-card p-8 md:p-10 space-y-6">
        <div className="flex justify-between items-center pb-4 border-b border-[var(--line)]">
          <span className="mono-label text-[var(--signal)]">STRATEGY 2026 // GOALS</span>
          <span className="mono-label text-[var(--ink-soft)]">SURAT, IN // REMOTE</span>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {experienceData.goals.map((goal, i) => (
            <div key={i} className="p-4 rounded-md border border-[var(--line)] bg-[var(--paper)] space-y-1">
              <span className="mono-label text-[var(--signal)] block">{goal.label}</span>
              <p className="font-mono text-xs font-semibold uppercase text-[var(--ink)]">{goal.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CV MANIFESTO DOWNLOAD LINK */}
      <section className="instrument-card p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-1">
          <span className="mono-label text-[var(--signal)]">TECHNICAL PROFILE</span>
          <h2 className="font-display text-2xl font-bold uppercase text-[var(--ink)]">
            Request Technical Manifesto
          </h2>
          <p className="text-xs text-[var(--ink-soft)] font-mono uppercase">
            PDF Curriculum Vitae containing transcripts and project history.
          </p>
        </div>

        <motion.a 
          whileTap={{ scale: 0.97 }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
          href={personalInfo.resumeUrl} 
          target="_blank" 
          rel="noreferrer"
          className="group px-6 py-3 bg-[var(--ink)] text-[var(--paper-raised)] font-mono text-xs font-bold uppercase tracking-[0.12em] rounded-[12px] hover:bg-[var(--signal)] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.15)] transition-all flex items-center gap-2"
        >
          DOWNLOAD CV MANIFESTO <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-[2px] group-hover:-translate-y-[2px]" />
        </motion.a>
      </section>
    </div>
  )
}

export default Experience
