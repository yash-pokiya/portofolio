import React from 'react'
import { motion } from 'framer-motion'
import { Database, Code2, Globe, Award } from 'lucide-react'
import { educationData } from '../data/portfolioData'

const curriculumIcons = [
  <Database size={16} key="0" />,
  <Code2 size={16} key="1" />,
  <Globe size={16} key="2" />,
  <Award size={16} key="3" />
]

const Education = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-16 md:space-y-20">
      {/* HEADER */}
      <section className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-8 border-b border-[var(--line)]">
        <div className="space-y-4 max-w-2xl">
          <span className="mono-label text-[var(--signal)]">§06 // ACADEMIC FOUNDATION</span>
          <h1 className="font-display text-4xl md:text-6xl font-black uppercase text-[var(--ink)] tracking-tight">
            Academic Architecture
          </h1>
          <p className="text-sm font-medium text-[var(--ink-soft)] uppercase tracking-wider">
            {educationData.phase} Student // Sutex Bank College of Computer Applications // VNSGU.
          </p>
        </div>
      </section>

      {/* SINGLE INSTRUMENT ACADEMIC CARD */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="instrument-card p-8 md:p-12 space-y-8"
      >
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[var(--line)]">
          <div>
            <span className="mono-label text-[var(--signal)] font-bold">PRIMARY DEGREE // ACTIVE</span>
            <h2 className="font-display text-3xl font-bold uppercase text-[var(--ink)] mt-1">
              {educationData.degree}
            </h2>
            <p className="font-mono text-xs font-semibold text-[var(--ink-soft)] uppercase">
              {educationData.college} // {educationData.university}
            </p>
          </div>

          <div className="font-mono text-xs text-left md:text-right">
            <span className="block text-[9px] uppercase tracking-widest text-[var(--ink-soft)]">TIMELINE</span>
            <span className="font-bold text-[var(--ink)] uppercase">{educationData.timeline}</span>
          </div>
        </div>

        <div className="space-y-4">
          <span className="mono-label text-[var(--ink-soft)]">CORE CURRICULUM LOGS</span>
          <div className="grid md:grid-cols-2 gap-4">
            {educationData.curriculum.map((item, i) => (
              <div key={i} className="p-4 rounded-md border border-[var(--line)] bg-[var(--paper)] flex items-center gap-4">
                <div className="text-[var(--signal)]">{curriculumIcons[i % curriculumIcons.length]}</div>
                <div>
                  <p className="font-mono text-xs font-bold uppercase text-[var(--ink)]">{item.title}</p>
                  <p className="font-mono text-[10px] text-[var(--ink-soft)] uppercase mt-0.5">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* METADATA SPECIFICATIONS */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {educationData.metadata.map((meta, i) => (
          <div key={i} className="instrument-card p-6 flex flex-col items-center text-center space-y-2">
            <span className="mono-label text-[var(--signal)]">{meta.label}</span>
            <p className="font-display text-lg font-bold uppercase text-[var(--ink)]">{meta.val}</p>
          </div>
        ))}
      </section>
    </div>
  )
}

export default Education
