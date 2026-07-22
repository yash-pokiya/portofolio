import React from 'react'
import { motion } from 'framer-motion'
import { User, MapPin, Code2, Brain, Terminal, Coffee, Globe, Award, Linkedin, Github } from 'lucide-react'
import { aboutData, personalInfo, servicesData } from '../data/portfolioData'

const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-16 md:space-y-20">
      {/* HEADER */}
      <section className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-8 border-b border-[var(--line)]">
        <div className="space-y-4 max-w-2xl">
          <span className="mono-label text-[var(--signal)]">{aboutData.headerTag}</span>
          <h1 className="font-display text-4xl md:text-6xl font-black uppercase text-[var(--ink)] tracking-tight">
            About | Yash Pokiya
          </h1>
          <p className="text-sm font-medium text-[var(--ink-soft)] uppercase tracking-wider">
            Yash Pokiya is a Full Stack MERN Developer based in Surat, Gujarat, India. Bridging practical client specs with structured logic.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <a 
            href={personalInfo.linkedinUrl} 
            target="_blank" 
            rel="noreferrer" 
            className="tag-notched flex items-center gap-2"
          >
            <Linkedin size={13} /> LINKEDIN
          </a>
          <a 
            href={personalInfo.githubUrl} 
            target="_blank" 
            rel="noreferrer" 
            className="tag-notched flex items-center gap-2"
          >
            <Github size={13} /> GITHUB
          </a>
        </div>
      </section>

      {/* DOSSIER & FOCUS GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* MAIN BIO CARD */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-8 instrument-card p-8 md:p-12 space-y-8"
        >
          <div className="flex justify-between items-start pb-6 border-b border-[var(--line)]">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-md border border-[var(--line)] flex items-center justify-center text-[var(--ink)]">
                <User size={18} />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold uppercase text-[var(--ink)]">Professional Dossier</h3>
                <div className="flex items-center gap-1.5 font-mono text-[10px] text-[var(--ink-soft)]">
                  <MapPin size={11} className="text-[var(--signal)]" /> {personalInfo.location.toUpperCase()}
                </div>
              </div>
            </div>
            <span className="mono-label text-[var(--ink-soft)]">UNIT // 01</span>
          </div>

          <p className="text-lg text-[var(--ink)] font-normal leading-relaxed max-w-[65ch]">
            {aboutData.dossier}
          </p>

          <div className="pt-4 border-t border-[var(--line)] flex flex-wrap gap-2">
            {aboutData.traits.map(tag => (
              <span key={tag} className="tag-notched">
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        {/* CURRENT FOCUS CARD */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="lg:col-span-4 instrument-card p-8 flex flex-col justify-between"
        >
          <div className="flex justify-between items-start pb-6 border-b border-[var(--line)]">
            <div className="w-10 h-10 rounded-md border border-[var(--line)] flex items-center justify-center text-[var(--ink)]">
              <Brain size={18} />
            </div>
            <span className="mono-label text-[var(--signal)]">CURRENT EXECUTION</span>
          </div>

          <div className="my-8 space-y-2">
            <span className="mono-label text-[var(--ink-soft)]">CORE DIRECTIVE</span>
            <h4 className="font-display text-2xl font-bold uppercase text-[var(--ink)] leading-tight">
              {aboutData.currentFocus}
            </h4>
            <p className="text-xs text-[var(--ink-soft)] pt-2">
              {aboutData.focusDesc}
            </p>
          </div>

          <div className="p-4 rounded-md border border-[var(--line)] bg-[var(--paper)]">
            <div className="flex items-center gap-2 font-mono text-xs font-semibold text-[var(--ink)]">
              <Terminal size={14} className="text-[var(--signal)]" /> {aboutData.currentFocusSub.toUpperCase()}
            </div>
          </div>
        </motion.div>
      </div>

      {/* SERVICES OFFERED (PLAIN MONO-LABELED LIST) */}
      <section className="instrument-card p-8 md:p-12 space-y-8">
        <div className="flex justify-between items-center pb-6 border-b border-[var(--line)]">
          <div className="space-y-1">
            <span className="mono-label text-[var(--signal)]">TECHNICAL CAPABILITIES</span>
            <h3 className="font-display text-2xl font-bold uppercase text-[var(--ink)]">Services Specification</h3>
          </div>
          <span className="mono-label text-[var(--ink-soft)]">04 SERVICES ACTIVE</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 divide-y md:divide-y-0 md:divide-x divide-[var(--line)]">
          {servicesData.map((service, idx) => (
            <div key={service.id} className={`space-y-3 ${idx > 0 && idx % 2 !== 0 ? 'md:pl-8' : ''} ${idx > 0 ? 'pt-6 md:pt-0' : ''}`}>
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs font-bold text-[var(--signal)]">{service.id}</span>
                <h4 className="font-display text-lg font-bold uppercase text-[var(--ink)]">{service.title}</h4>
              </div>
              <p className="font-mono text-xs text-[var(--ink-soft)] leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* METADATA STRIP (4-STAT CARDS REDESIGN) */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {aboutData.metadata.map((item, i) => {
          const isStatus = item.label === 'STATUS'
          return (
            <div 
              key={i} 
              className="instrument-card p-6 flex flex-col justify-between space-y-4 group bg-[var(--paper-raised)] border border-[var(--line)] rounded-[12px] shadow-none hover:border-[var(--ink)] transition-colors"
            >
              <div className="flex items-center justify-between w-full">
                <div className={`w-10 h-10 rounded-md border border-[var(--line)] flex items-center justify-center transition-colors ${
                  isStatus ? 'text-[var(--signal)] border-[var(--signal)]/40' : 'text-[var(--ink)] group-hover:border-[var(--signal)] group-hover:text-[var(--signal)]'
                }`}>
                  {i === 0 ? <Code2 size={18} /> : i === 1 ? <Coffee size={18} /> : i === 2 ? <Globe size={18} /> : <Award size={18} />}
                </div>
                {isStatus && (
                  <span className="w-2 h-2 rounded-full bg-[var(--signal)] animate-[pulse_2s_cubic-bezier(0.4,0,0.6,1)_infinite]" />
                )}
              </div>
              <div>
                <span className="mono-label text-[var(--ink-soft)] block">{item.label}</span>
                <p className="font-display text-sm md:text-base font-bold uppercase text-[var(--ink)] mt-1 leading-snug">{item.val}</p>
              </div>
            </div>
          )
        })}
      </section>
    </div>
  )
}

export default About
