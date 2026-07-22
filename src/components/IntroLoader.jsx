import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Check, ArrowUpRight } from 'lucide-react'

const loadingItems = [
  "Loading Identity",
  "Loading Experience",
  "Loading Projects",
  "Loading Skills",
  "Loading Blog",
  "Loading Contact"
]

const IntroLoader = ({ onComplete }) => {
  const [scene, setScene] = useState(1) // Scenes 1 through 5
  const [completedItems, setCompletedItems] = useState([])

  // Skip functionality (Click, Keydown, Esc)
  const handleSkip = () => {
    sessionStorage.setItem('hasSeenIntro', 'true')
    onComplete()
  }

  // Session check & Event listeners
  useEffect(() => {
    if (sessionStorage.getItem('hasSeenIntro') === 'true') {
      onComplete()
      return
    }

    const handleKeyDown = (e) => {
      handleSkip()
    }
    const handleClick = () => {
      handleSkip()
    }

    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('click', handleClick)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('click', handleClick)
    }
  }, [onComplete])

  // Timeline Sequence Timer
  useEffect(() => {
    if (sessionStorage.getItem('hasSeenIntro') === 'true') return

    // Scene 1 -> 2 (at 1.0s)
    const t1 = setTimeout(() => setScene(2), 1000)

    // Scene 2 -> 3 (at 2.2s)
    const t2 = setTimeout(() => setScene(3), 2200)

    // Scene 3 -> 4 (at 4.4s)
    const t4 = setTimeout(() => setScene(4), 4400)

    // Scene 4 -> 5 (at 5.8s)
    const t5 = setTimeout(() => setScene(5), 5800)

    // Morph finish (at 6.8s)
    const t6 = setTimeout(() => {
      sessionStorage.setItem('hasSeenIntro', 'true')
      onComplete()
    }, 6800)

    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
      clearTimeout(t4)
      clearTimeout(t5)
      clearTimeout(t6)
    }
  }, [onComplete])

  // Progressive checkmark item reveal during Scene 3
  useEffect(() => {
    if (scene === 3) {
      let idx = 0
      const interval = setInterval(() => {
        if (idx < loadingItems.length) {
          const itemToComplete = loadingItems[idx]
          setCompletedItems((prev) => [...prev, itemToComplete])
          idx++
        } else {
          clearInterval(interval)
        }
      }, 250)

      return () => clearInterval(interval)
    }
  }, [scene])

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.02, y: -15 }}
      transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 z-[9999] bg-[var(--paper)] text-[var(--ink)] font-body flex flex-col justify-between p-6 md:p-12 select-none cursor-pointer border-b border-[var(--line)] shadow-2xl overflow-hidden"
      title="Click or press Esc to skip"
    >
      {/* SUBTLE BLUEPRINT ENGINEERING GRID BACKGROUND */}
      <div 
        className="absolute inset-0 opacity-[0.04] pointer-events-none" 
        style={{
          backgroundImage: `radial-gradient(var(--ink) 1px, transparent 1px)`,
          backgroundSize: `24px 24px`
        }}
      />

      {/* TOP HEADER: BRAND SPEC & SKIP BUTTON */}
      <div className="relative z-10 flex justify-between items-center pb-4 border-b border-[var(--line)] font-mono text-xs">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[var(--signal)] animate-pulse" />
          <span className="font-bold tracking-widest text-[var(--ink)] uppercase">
            SPECIFICATION // BLUEPRINT DOSSIER
          </span>
        </div>

        {/* TOP-RIGHT SKIP BUTTON */}
        <button
          onClick={(e) => {
            e.stopPropagation()
            handleSkip()
          }}
          className="group px-3 py-1 rounded-md border border-[var(--line)] bg-[var(--paper-raised)] hover:border-[var(--signal)] hover:text-[var(--signal)] transition-colors flex items-center gap-1.5"
        >
          <span>SKIP INTRO</span>
          <ArrowUpRight size={13} className="transition-transform group-hover:translate-x-[1px] group-hover:-translate-y-[1px]" />
        </button>
      </div>

      {/* CENTER: 5-SCENE PROGRESSIVE DOSSIER CONTAINER */}
      <div className="relative z-10 my-auto max-w-2xl w-full mx-auto min-h-[340px] flex flex-col justify-center">
        
        {/* BLUEPRINT SVG BORDER REVEAL (SCENE 1+) */}
        <div className="instrument-card p-8 md:p-12 space-y-6 relative overflow-hidden bg-[var(--paper-raised)]">
          
          {/* SCENE 1: BLUEPRINT SVG LINE DRAWING */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex justify-between items-start pb-4 border-b border-[var(--line)]"
          >
            <div>
              <span className="mono-label text-[var(--signal)] font-bold">
                §00 // INITIALIZING DOSSIER
              </span>
              <h1 className="font-display font-black text-3xl md:text-5xl uppercase tracking-tight text-[var(--ink)] mt-1">
                YASH POKIYA
              </h1>
            </div>
            <span className="font-mono text-xs text-[var(--ink-soft)] font-bold">2026</span>
          </motion.div>

          {/* SCENE 2: STATUS & BORDER ANIMATION */}
          <AnimatePresence mode="wait">
            {scene >= 2 && scene < 4 && (
              <motion.div
                key="scene-2-3"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.3 }}
                className="space-y-4 font-mono text-xs"
              >
                <div className="flex items-center gap-2 text-[var(--ink-soft)]">
                  <span className="w-1.5 h-1.5 bg-[var(--signal)] animate-pulse" />
                  <span className="uppercase font-bold tracking-wider">
                    {scene === 2 ? 'INITIALIZING PROFILE...' : 'COMPILING CORE SPECIFICATIONS:'}
                  </span>
                </div>

                {/* SCENE 3: PROGRESSIVE ENTRY TYPING WITH CHECKMARKS */}
                {scene === 3 && (
                  <div className="grid grid-cols-2 gap-2.5 pt-2">
                    {loadingItems.map((item) => {
                      const isCompleted = completedItems.includes(item)
                      return (
                        <div
                          key={item}
                          className={`p-2 rounded-md border flex items-center justify-between transition-colors ${
                            isCompleted 
                              ? 'border-[var(--signal)]/40 bg-[var(--signal-soft)]/50 text-[var(--ink)]' 
                              : 'border-[var(--line)] bg-[var(--paper)] text-[var(--ink-soft)]'
                          }`}
                        >
                          <span className="uppercase text-[11px] font-semibold">{item}</span>
                          {isCompleted ? (
                            <Check size={14} className="text-[var(--signal)] shrink-0" />
                          ) : (
                            <span className="w-1.5 h-1.5 rounded-full bg-[var(--line)] animate-ping shrink-0" />
                          )}
                        </div>
                      )
                    })}
                  </div>
                )}
              </motion.div>
            )}

            {/* SCENE 4 & 5: PROFILE CARD ASSEMBLY & MANIFESTO */}
            {scene >= 4 && (
              <motion.div
                key="scene-4-5"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="space-y-6"
              >
                <div className="grid md:grid-cols-3 gap-3">
                  <div className="p-3 rounded-md border border-[var(--line)] bg-[var(--paper)]">
                    <span className="mono-label text-[var(--ink-soft)] block">ROLE</span>
                    <span className="font-mono text-xs font-bold uppercase text-[var(--ink)]">Full Stack Developer</span>
                  </div>
                  <div className="p-3 rounded-md border border-[var(--line)] bg-[var(--paper)]">
                    <span className="mono-label text-[var(--ink-soft)] block">LOCATION</span>
                    <span className="font-mono text-xs font-bold uppercase text-[var(--ink)]">Surat, India</span>
                  </div>
                  <div className="p-3 rounded-md border border-[var(--line)] bg-[var(--paper)]">
                    <span className="mono-label text-[var(--signal)] block">STATUS</span>
                    <span className="font-mono text-xs font-bold uppercase text-[var(--signal)]">System Ready</span>
                  </div>
                </div>

                <div className="pt-2 border-t border-[var(--line)] flex items-center justify-between font-mono text-xs text-[var(--ink-soft)]">
                  <span>Crafting scalable software. Building digital experiences.</span>
                  <span className="font-bold text-[var(--signal)] uppercase">PORTFOLIO READY &rarr;</span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* BOTTOM FOOTER: SPECIFICATION TAG & ESC INSTRUCTION */}
      <div className="relative z-10 flex justify-between items-center pt-4 border-t border-[var(--line)] text-[10px] text-[var(--ink-soft)] tracking-widest uppercase font-mono">
        <span>SURAT, INDIA // INSTRUMENT PROTOCOL v2.0</span>
        <span className="animate-pulse font-semibold text-[var(--ink)]">[ PRESS ESC OR CLICK TO SKIP ]</span>
      </div>
    </motion.div>
  )
}

export default IntroLoader
