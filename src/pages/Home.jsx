import React from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, Terminal, Code2 } from 'lucide-react'
import { heroData, personalInfo } from '../data/portfolioData'

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-24 pb-20">
      {/* HERO SECTION */}
      <section className="space-y-12">
        <div className="space-y-4 max-w-4xl pt-8">
          <motion.div 
            initial={{ opacity: 0, y: 10 }} 
            animate={{ opacity: 1, y: 0 }} 
            className="flex items-center gap-2 text-[var(--signal)] font-mono text-xs font-semibold uppercase tracking-[0.15em]"
          >
            <span className="w-2 h-2 rounded-full bg-[var(--signal)]" />
            {heroData.roleTag}
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.1 }}
            className="font-display text-5xl md:text-8xl font-black tracking-tight leading-[0.95] uppercase text-[var(--ink)]"
          >
            {heroData.titleLine1} <br /> <span className="italic font-normal">{heroData.titleLine2}</span>
          </motion.h1>
        </div>

        {/* HERO INSTRUMENT READOUT & PROFILE GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* INSTRUMENT READOUT CARD */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.2 }} 
            className="lg:col-span-8 instrument-card p-8 md:p-12 flex flex-col justify-between min-h-[440px] relative overflow-hidden"
          >
            <div className="flex justify-between items-start pb-6 border-b border-[var(--line)]">
              <div className="space-y-1">
                <span className="tag-outline">{heroData.version}</span>
                <p className="mono-label text-[var(--ink-soft)] mt-2">ARCHITECTURAL LOGIC PROTOCOL</p>
              </div>

              <div className="text-right">
                <p className="mono-label text-[var(--ink-soft)] mb-1">SYSTEM STATUS</p>
                <div className="flex items-center justify-end gap-2">
                  <span className="w-2 h-2 rounded-full bg-[var(--signal)] animate-pulse" />
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-[var(--ink)]">
                    {heroData.systemStatus}
                  </span>
                </div>
              </div>
            </div>

            <div className="py-8 space-y-6">
              <h2 className="font-display text-2xl md:text-4xl font-extrabold text-[var(--ink)] leading-snug tracking-tight">
                {heroData.statement}
              </h2>

              <p className="text-sm text-[var(--ink-soft)] max-w-xl">
                {personalInfo.subtitle}. Seeking practical web engineering internships for 2026.
              </p>
            </div>

            <div className="pt-6 border-t border-[var(--line)] flex flex-wrap items-center justify-between gap-6">
              <a 
                href="#projects" 
                className="px-6 py-3 bg-[var(--ink)] text-[var(--paper-raised)] font-mono text-xs font-bold uppercase tracking-[0.12em] rounded-md hover:bg-[var(--signal)] transition-colors flex items-center gap-2"
              >
                INITIALIZE EXPLORATION <ArrowUpRight size={14} />
              </a>

              <div className="flex items-center gap-6 font-mono text-xs text-[var(--ink-soft)]">
                <div>
                  <span className="block text-[9px] uppercase tracking-widest opacity-60">LOCATION</span>
                  <span className="font-bold text-[var(--ink)]">{heroData.targetLocation}</span>
                </div>
                <div className="h-6 w-[1px] bg-[var(--line)]" />
                <div>
                  <span className="block text-[9px] uppercase tracking-widest opacity-60">AVAILABILITY</span>
                  <span className="font-bold text-[var(--signal)]">{personalInfo.status} 2026</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* PROFILE PHOTO FRAME */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.3 }} 
            className="lg:col-span-4 instrument-card p-3 flex flex-col justify-between group"
          >
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-md border border-[var(--line)] bg-[var(--paper)]">
              <img 
                src={personalInfo.photoUrl} 
                alt={personalInfo.name} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" 
              />
              <div className="absolute top-3 left-3 bg-[var(--paper-raised)]/90 border border-[var(--line)] px-2.5 py-1 rounded-sm">
                <span className="font-mono text-[9px] font-bold uppercase tracking-widest text-[var(--ink)]">
                  FIG 1.0 // DEVELOPER
                </span>
              </div>
            </div>
            
            <div className="p-3 pt-4 flex justify-between items-center">
              <div>
                <h4 className="font-display font-bold text-lg uppercase text-[var(--ink)]">{personalInfo.name}</h4>
                <p className="mono-label text-[var(--ink-soft)]">{personalInfo.title}</p>
              </div>
              <div className="w-8 h-8 rounded-full border border-[var(--line)] flex items-center justify-center text-[var(--ink-soft)] group-hover:border-[var(--signal)] group-hover:text-[var(--signal)] transition-colors">
                <Code2 size={16} />
              </div>
            </div>
          </motion.div>
        </div>

        {/* METADATA STRIP */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-y border-[var(--line)] py-6">
          {heroData.highlights.map((item) => (
            <div key={item.id} className="flex items-center gap-3">
              <span className="font-mono text-xs font-bold text-[var(--signal)]">{item.id}</span>
              <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[var(--ink)]">
                {item.title}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* QUICK HIGHLIGHT READOUTS */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }}
          className="md:col-span-5 instrument-card p-8 flex flex-col justify-between"
        >
          <div className="flex justify-between items-start">
            <div className="p-2.5 rounded-md border border-[var(--line)] text-[var(--ink)]">
              <Terminal size={20} />
            </div>
            <span className="mono-label text-[var(--ink-soft)]">READOUT // 01</span>
          </div>

          <div className="my-6">
            <span className="mono-label text-[var(--signal)]">CURRENT FOCUS</span>
            <h4 className="font-display text-2xl font-bold uppercase text-[var(--ink)] mt-1">
              {heroData.focus}
            </h4>
          </div>

          {/* INSTRUMENT PROGRESS BAR */}
          <div className="space-y-2">
            <div className="flex justify-between items-center font-mono text-xs">
              <span className="text-[var(--ink-soft)]">PROGRESS LOG</span>
              <span className="font-bold text-[var(--ink)]">{heroData.focusProgress}%</span>
            </div>
            <div className="h-1.5 w-full bg-[var(--line)] rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: 0 }} 
                whileInView={{ width: `${heroData.focusProgress}%` }} 
                transition={{ duration: 1.2, ease: 'easeOut' }} 
                className="h-full bg-[var(--ink)]" 
              />
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="md:col-span-7 instrument-card p-8 flex flex-col justify-between bg-[var(--paper-raised)]"
        >
          <div className="flex justify-between items-start">
            <div className="space-y-1">
              <span className="tag-outline border-[var(--signal)] text-[var(--signal)] bg-[var(--signal-soft)]">
                OPPORTUNITY SEEKING
              </span>
              <p className="mono-label text-[var(--ink-soft)] mt-2">STRATEGY 2026</p>
            </div>
            <ArrowUpRight size={24} className="text-[var(--ink-soft)]" />
          </div>

          <div className="my-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h3 className="font-display text-3xl md:text-4xl font-extrabold uppercase text-[var(--ink)]">
                {heroData.targetPosition}
              </h3>
              <p className="text-xs text-[var(--ink-soft)] mt-1">
                Seeking entry-level Web Developer / Full Stack MERN role.
              </p>
            </div>

            <div className="text-left md:text-right font-mono text-xs">
              <span className="block text-[9px] uppercase tracking-widest text-[var(--ink-soft)]">LOCATION PREFERENCE</span>
              <span className="font-bold uppercase text-[var(--ink)]">{heroData.targetLocation}</span>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  )
}

export default Home
