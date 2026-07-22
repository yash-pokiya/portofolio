import React, { useState } from 'react'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import ScrollRuler from './ScrollRuler'
import { useActiveSection } from '../hooks/useActiveSection'
import { personalInfo } from '../data/portfolioData'

const navItems = [
  { name: 'Home', path: 'home', code: '01' },
  { name: 'About', path: 'about', code: '02' },
  { name: 'Projects', path: 'projects', code: '03' },
  { name: 'Skills', path: 'skills', code: '04' },
  { name: 'Experience', path: 'experience', code: '05' },
  { name: 'Education', path: 'education', code: '06' },
  { name: 'Blog', path: 'blog', code: '07' },
  { name: 'Contact', path: 'contact', code: '08' },
]

const Layout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { activeSection, scrolledPastHeader, scrollToSection } = useActiveSection()

  const handleNavClick = (path) => {
    scrollToSection(path)
    setIsMenuOpen(false)
  }

  return (
    <div className="min-h-screen relative font-body bg-[var(--paper)] text-[var(--ink)]">
      {/* SCROLL RULER GAUGE */}
      <ScrollRuler activeSection={activeSection} scrollToSection={scrollToSection} />

      {/* FIXED TOP NAVBAR */}
      <header
        className={`fixed top-0 left-0 right-0 z-[100] bg-[var(--paper)] border-b border-[var(--line)] transition-all duration-200 ${scrolledPastHeader ? 'py-3' : 'py-5'
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">

          {/* LEFT: YP. WORDMARK */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => handleNavClick('home')}
              className="font-display font-black text-2xl tracking-tighter text-[var(--ink)] hover:opacity-80 transition-opacity"
            >
              YP<span className="text-[var(--signal)]">.</span>
            </button>

            {/* MOBILE INLINE AVAILABILITY DOT */}
            <div className="lg:hidden flex items-center gap-1.5 px-2 py-0.5 rounded-full border border-[var(--line)] bg-[var(--paper-raised)]">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--signal)] animate-[pulse_2s_cubic-bezier(0.4,0,0.6,1)_infinite]" />
              <span className="font-mono text-[9px] font-bold text-[var(--ink)] uppercase">OPEN</span>
            </div>
          </div>

          {/* CENTER-RIGHT: DESKTOP COMMAND BAR NAV (>=1024px) */}
          <nav className="hidden lg:flex items-center gap-1.5 font-mono text-xs select-none">
            <span className="text-[var(--ink-soft)] opacity-70 mr-1 font-semibold">~/yash $ goto</span>
            {navItems.map((item) => {
              const isActive = activeSection === item.path
              return (
                <button
                  key={item.path}
                  onClick={() => handleNavClick(item.path)}
                  className={`inline-flex items-center transition-colors px-1 py-0.5 rounded-sm ${isActive
                      ? 'text-[var(--signal)] font-bold'
                      : 'text-[var(--ink-soft)] hover:text-[var(--ink)] font-semibold'
                    }`}
                >
                  <span>[{item.name.toLowerCase()}]</span>
                  {isActive && (
                    <motion.span
                      layoutId="active-cursor"
                      className="inline-block w-2 h-3.5 bg-[var(--signal)] ml-1 animate-pulse align-middle"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                </button>
              )
            })}
          </nav>

          {/* FAR RIGHT: AVAILABILITY PILL & CONTACT CTA */}
          <div className="hidden lg:flex items-center gap-5">
            {/* AVAILABILITY PILL */}
            <div
              className="flex items-center gap-2 px-3 py-1 rounded-full border border-[var(--line)] bg-[var(--paper-raised)]"
              title={personalInfo.statusLabel}
            >
              <span className="w-2 h-2 rounded-full bg-[var(--signal)] animate-[pulse_2s_cubic-bezier(0.4,0,0.6,1)_infinite]" />
              <span className="font-mono text-[10px] font-bold text-[var(--ink)] uppercase tracking-wider">
                {personalInfo.status}
              </span>
            </div>

            {/* CONTACT CTA BUTTON */}
            <motion.button
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              onClick={() => handleNavClick('contact')}
              className="group px-5 py-2 rounded-[12px] bg-[var(--ink)] text-[var(--paper-raised)] font-mono text-[11px] font-bold uppercase tracking-wider hover:bg-[var(--signal)] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.15)] transition-all flex items-center gap-1.5 shadow-xs"
            >
              Contact <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-[2px] group-hover:-translate-y-[2px]" />
            </motion.button>
          </div>

          {/* MOBILE COMMAND MENU TRIGGER (<1024px) */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden font-mono text-xs font-bold text-[var(--ink)] hover:text-[var(--signal)] transition-colors px-2.5 py-1 border border-[var(--line)] rounded-md flex items-center gap-1.5 bg-[var(--paper-raised)]"
            aria-label="Toggle Navigation Menu"
          >
            <span>~/yash $ menu</span>
            <span className="inline-block w-1.5 h-3 bg-[var(--signal)] animate-pulse" />
          </button>
        </div>
      </header>

      {/* MAIN CONTENT AREA */}
      <main className="relative z-10 pt-24 min-h-[calc(100vh-100px)]">
        {children}
      </main>

      {/* MOBILE MENU DRAWER (<1024px) */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* OVERLAY */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-[#101012]/40 z-[1000]"
            />

            {/* DRAWER PANEL */}
            <motion.aside
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 h-full w-[85%] max-w-[360px] bg-[var(--paper-raised)] z-[1001] border-l border-[var(--line)] p-6 flex flex-col justify-between"
            >
              <div>
                {/* DRAWER HEADER */}
                <div className="flex justify-between items-center pb-5 mb-4 border-b border-[var(--line)]">
                  <span className="font-mono font-bold text-sm text-[var(--ink)]">
                    ~/yash $ goto <span className="text-[var(--signal)]">index</span>
                  </span>
                  <button
                    onClick={() => setIsMenuOpen(false)}
                    className="p-1 text-[var(--ink)] hover:text-[var(--signal)]"
                  >
                    <X size={20} />
                  </button>
                </div>

                {/* NAV LINKS STACK (COMMAND LIST STYLE) */}
                <nav className="space-y-1 divide-y divide-[var(--line)] border-y border-[var(--line)] py-2">
                  {navItems.map((item) => {
                    const isActive = activeSection === item.path
                    return (
                      <button
                        key={item.path}
                        onClick={() => handleNavClick(item.path)}
                        className={`w-full text-left py-3 px-2 flex items-center justify-between font-mono text-xs uppercase tracking-wider transition-colors rounded-sm ${isActive
                            ? 'text-[var(--signal)] font-bold bg-[var(--signal-soft)]/40'
                            : 'text-[var(--ink)] hover:text-[var(--signal)]'
                          }`}
                      >
                        <div className="flex items-center gap-2">
                          <span className={isActive ? 'text-[var(--signal)] font-bold' : 'text-[var(--ink-soft)]'}>&gt;</span>
                          <span>{item.name.toLowerCase()}</span>
                        </div>
                        {isActive ? (
                          <span className="inline-block w-2 h-3.5 bg-[var(--signal)] animate-pulse" />
                        ) : (
                          <span className="font-mono text-[10px] text-[var(--ink-soft)]">{item.code}</span>
                        )}
                      </button>
                    )
                  })}
                </nav>
              </div>

              {/* DRAWER BOTTOM ACTION PINNED */}
              <div className="pt-6 border-t border-[var(--line)] space-y-4">
                <div className="flex items-center justify-between px-3 py-2 rounded-md border border-[var(--line)] bg-[var(--paper)]">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[var(--signal)] animate-[pulse_2s_cubic-bezier(0.4,0,0.6,1)_infinite]" />
                    <span className="font-mono text-[10px] font-bold text-[var(--ink)] uppercase truncate max-w-[200px]">
                      {personalInfo.status}
                    </span>
                  </div>
                  <span className="font-mono text-[9px] text-[var(--ink-soft)] shrink-0">2026</span>
                </div>

                <motion.button
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  onClick={() => handleNavClick('contact')}
                  className="group w-full py-3 rounded-[12px] bg-[var(--ink)] text-[var(--paper-raised)] font-mono text-xs font-bold uppercase tracking-wider hover:bg-[var(--signal)] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.15)] transition-all flex items-center justify-center gap-2"
                >
                  Contact <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-[2px] group-hover:-translate-y-[2px]" />
                </motion.button>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* FOOTER */}
      <footer className="max-w-7xl mx-auto px-6 md:px-12 py-12 text-center border-t border-[var(--line)] mt-24">
        <p className="font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-[var(--ink-soft)]">
          © 2026 YASH POKIYA // INSTRUMENT PROTOCOL v2.0
        </p>
      </footer>
    </div>
  )
}

export default Layout