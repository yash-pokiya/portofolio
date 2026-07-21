import React from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, Code2 } from 'lucide-react'
import { heroData, personalInfo } from '../data/portfolioData'
import TerminalWindow from '../components/TerminalWindow'

const heroTerminalLines = [
  { type: 'cmd', text: 'whoami' },
  { type: 'text', text: `${personalInfo.name.toLowerCase().replace(/\s+/g, '-')} — full stack mern developer` },
  { type: 'cmd', text: 'cat status.json' },
  { 
    type: 'json', 
    text: `{\n  "name": "${personalInfo.name}",\n  "role": "Full Stack MERN Developer",\n  "location": "${personalInfo.location}",\n  "availability": "✓ ${personalInfo.statusLabel}",\n  "focus": ["React", "Node.js", "Express", "MongoDB", "REST APIs"]\n}` 
  }
]

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
            {personalInfo.name} // FULL STACK MERN DEVELOPER
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.1 }}
            className="font-display text-5xl md:text-8xl font-black tracking-tight leading-[0.95] uppercase text-[var(--ink)]"
          >
            Yash Pokiya <br />
            <span className="italic font-normal text-3xl md:text-6xl block mt-2 text-[var(--ink-soft)]">
              Full Stack MERN Developer
            </span>
          </motion.h1>
        </div>

        {/* HERO TERMINAL & PROFILE GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* BOOT TERMINAL WINDOW */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.2 }} 
            className="lg:col-span-8 flex flex-col justify-between"
          >
            <TerminalWindow
              title="yash@systems:~"
              variant="boot"
              lines={heroTerminalLines}
              ariaLabel="System Boot Status: Yash Pokiya Full Stack MERN Developer based in Surat, Gujarat, India specializing in React, Node.js, Express, and MongoDB."
            />

            <div className="pt-6 border-t border-[var(--line)] mt-6 flex flex-wrap items-center justify-between gap-6">
              <a 
                href="#projects" 
                className="px-6 py-3 bg-[var(--ink)] text-[var(--paper-raised)] font-mono text-xs font-bold uppercase tracking-[0.12em] rounded-md hover:bg-[var(--signal)] transition-colors flex items-center gap-2"
              >
                EXPLORE PROJECTS <ArrowUpRight size={14} />
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
                alt="Yash Pokiya - Full Stack MERN Developer from Surat India" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" 
              />
              <div className="absolute top-3 left-3 bg-[var(--paper-raised)]/90 border border-[var(--line)] px-2.5 py-1 rounded-sm">
                <span className="font-mono text-[9px] font-bold uppercase tracking-widest text-[var(--ink)]">
                  FIG 1.0 // YASH POKIYA
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
    </div>
  )
}

export default Home
