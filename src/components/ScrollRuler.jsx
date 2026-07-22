import React from 'react'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'

const sections = [
  { id: 'home' },
  { id: 'about' },
  { id: 'projects' },
  { id: 'skills' },
  { id: 'experience' },
  { id: 'education' },
  { id: 'blog' },
  { id: 'contact' },
]

const ScrollRuler = ({ activeSection, scrollToSection }) => {
  const { scrollYProgress } = useScroll()
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 200, damping: 25 })
  const needleY = useTransform(smoothProgress, [0, 1], [0, 240])

  return (
    <>
      {/* MOBILE TOP PROGRESS BAR (< md) */}
      <div className="md:hidden fixed top-0 left-0 right-0 h-[2px] bg-[var(--line)] z-[1000]">
        <motion.div 
          className="h-full bg-[var(--signal)]" 
          style={{ scaleX: scrollYProgress, transformOrigin: '0%' }} 
        />
      </div>

      {/* DESKTOP MINIMAL TICK RULER (>= md) */}
      <div className="hidden md:flex fixed left-5 top-1/2 -translate-y-1/2 z-[90] flex-col items-center select-none pointer-events-auto">
        <div className="relative w-3 h-[240px] flex justify-center">
          <div className="absolute top-0 bottom-0 w-[1px] bg-[var(--line)]" />

          <div className="absolute inset-0 flex flex-col justify-between py-1">
            {sections.map((sec) => {
              const isActive = activeSection === sec.id
              return (
                <button
                  key={sec.id}
                  onClick={() => scrollToSection(sec.id)}
                  title={`Jump to ${sec.id}`}
                  className="relative flex items-center justify-center py-1.5 group"
                >
                  <div 
                    className={`h-[1.5px] transition-all duration-200 ${
                      isActive 
                        ? 'w-3.5 bg-[var(--signal)]' 
                        : 'w-2 bg-[var(--line)] group-hover:w-3 group-hover:bg-[var(--ink-soft)]'
                    }`} 
                  />
                </button>
              )
            })}
          </div>

          <motion.div
            className="absolute left-1/2 -translate-x-1/2 w-3 h-1 bg-[var(--signal)] rounded-[1px] shadow-xs z-10 pointer-events-none"
            style={{ y: needleY }}
          />
        </div>
      </div>
    </>
  )
}

export default ScrollRuler
