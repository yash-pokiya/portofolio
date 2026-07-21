import React from 'react'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'

const sections = [
  { id: 'home', label: '§01 — HOME' },
  { id: 'about', label: '§02 — ABOUT' },
  { id: 'projects', label: '§03 — PROJECTS' },
  { id: 'skills', label: '§04 — SKILLS' },
  { id: 'experience', label: '§05 — EXP' },
  { id: 'education', label: '§06 — EDU' },
  { id: 'blog', label: '§07 — BLOG' },
  { id: 'contact', label: '§08 — CONTACT' },
]

const ScrollRuler = ({ activeSection, scrollToSection }) => {
  const { scrollYProgress } = useScroll()
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 200, damping: 25 })
  const needleY = useTransform(smoothProgress, [0, 1], [0, 280])

  return (
    <>
      {/* MOBILE TOP PROGRESS BAR (< md) */}
      <div className="md:hidden fixed top-0 left-0 right-0 h-[2px] bg-[var(--line)] z-[1000]">
        <motion.div 
          className="h-full bg-[var(--signal)]" 
          style={{ scaleX: scrollYProgress, transformOrigin: '0%' }} 
        />
      </div>

      {/* DESKTOP VERTICAL SCROLL RULER (>= md) */}
      <div className="hidden md:flex fixed left-6 top-1/2 -translate-y-1/2 z-[90] flex-col items-center select-none pointer-events-auto">
        <div className="mb-4 text-[9px] font-mono font-bold uppercase tracking-[0.2em] text-[var(--ink-soft)] opacity-70 flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--signal)] animate-pulse" />
          RULER
        </div>

        <div className="relative flex gap-4 items-center">
          {/* LABELS LIST */}
          <div className="flex flex-col justify-between h-[280px] py-1 text-right">
            {sections.map((sec) => {
              const isActive = activeSection === sec.id
              return (
                <button
                  key={sec.id}
                  onClick={() => scrollToSection(sec.id)}
                  className={`text-[9px] font-mono font-medium tracking-[0.12em] uppercase transition-colors duration-200 whitespace-nowrap ${
                    isActive ? 'text-[var(--signal)] font-bold' : 'text-[var(--ink-soft)] hover:text-[var(--ink)]'
                  }`}
                >
                  {sec.label}
                </button>
              )
            })}
          </div>

          {/* RULER BAR & TICKS */}
          <div className="relative w-4 h-[280px] flex justify-center">
            <div className="absolute top-0 bottom-0 w-[1px] bg-[var(--line)]" />

            <div className="absolute inset-0 flex flex-col justify-between py-1 pointer-events-none">
              {sections.map((sec) => (
                <div key={sec.id} className="relative flex items-center justify-center">
                  <div 
                    className={`h-[1px] transition-all duration-200 ${
                      activeSection === sec.id 
                        ? 'w-3 bg-[var(--signal)]' 
                        : 'w-2 bg-[var(--line)]'
                    }`} 
                  />
                </div>
              ))}
            </div>

            <motion.div
              className="absolute left-1/2 -translate-x-1/2 w-3 h-1.5 bg-[var(--signal)] rounded-[1px] shadow-xs z-10 pointer-events-none"
              style={{ y: needleY }}
            />
          </div>
        </div>

        <div className="mt-4 text-[9px] font-mono text-[var(--ink-soft)] tracking-[0.15em] uppercase">
          SYS // 2026
        </div>
      </div>
    </>
  )
}

export default ScrollRuler
