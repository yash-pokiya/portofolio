import React, { useState } from 'react'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import ScrollRuler from './ScrollRuler'
import { useActiveSection } from '../hooks/useActiveSection'

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

  // Get active item index & display name
  const activeIndex = navItems.findIndex((item) => item.path === activeSection)
  const currentNavItem = navItems[activeIndex !== -1 ? activeIndex : 0]
  const formattedCode = `§${(activeIndex !== -1 ? activeIndex + 1 : 1).toString().padStart(2, '0')}`

  return (
    <div className="min-h-screen relative font-body bg-[var(--paper)] text-[var(--ink)]">
      {/* SCROLL RULER GAUGE */}
      <ScrollRuler activeSection={activeSection} scrollToSection={scrollToSection} />

      {/* TIMELESS EDITORIAL ARCHITECTURAL HEADER */}
      <header
        className={`fixed top-0 left-0 right-0 z-[100] bg-[var(--paper)]/95 backdrop-blur-md border-b border-[var(--line)] transition-all duration-300 ${
          scrolledPastHeader ? 'py-3' : 'py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          
          {/* LEFT: LOGO & RESTORED EDITORIAL SECTION READOUT */}
          <div className="flex items-center">
            <button 
              onClick={() => handleNavClick('home')} 
              className="font-display font-black text-2xl tracking-tighter text-[var(--ink)] leading-none text-left hover:opacity-80 transition-opacity"
              aria-label="Navigate to top"
            >
              YP<span className="text-[var(--signal)]">.</span>
            </button>

            {/* VERTICAL DIVIDER */}
            <span className="w-[1px] h-4 bg-[var(--line)] mx-3.5 md:mx-5 shrink-0" />

            {/* RESTORED EDITORIAL ACTIVE SECTION READOUT */}
            <div className="relative h-6 flex items-center overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentNavItem.path}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-[var(--signal)] flex items-center gap-1.5 whitespace-nowrap"
                >
                  <span className="text-[var(--ink-soft)] font-normal text-[11px]">{formattedCode} —</span>
                  <span>{currentNavItem.name}</span>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* CENTER: CENTERED NAV LINKS WITH GENEROUS SPACING (>=1024px) */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 select-none">
            {navItems.map((item) => {
              const isActive = activeSection === item.path
              return (
                <button
                  key={item.path}
                  onClick={() => handleNavClick(item.path)}
                  className={`relative font-mono text-[11px] font-semibold uppercase tracking-[0.14em] transition-colors py-1 ${
                    isActive ? 'text-[var(--signal)] font-bold' : 'text-[var(--ink-soft)] hover:text-[var(--ink)]'
                  }`}
                >
                  <span>{item.name}</span>
                  {isActive && (
                    <motion.div
                      layoutId="editorial-active-underline"
                      className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[var(--signal)]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              )
            })}
          </nav>

          {/* RIGHT: ISOLATED CONTACT CTA */}
          <div className="hidden lg:flex items-center">
            <motion.button
              whileTap={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              onClick={() => handleNavClick('contact')}
              className="group px-5 py-2 rounded-[12px] bg-[var(--ink)] text-[var(--paper-raised)] font-mono text-[11px] font-bold uppercase tracking-wider hover:bg-[var(--signal)] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.15)] transition-all flex items-center gap-1.5 shadow-xs"
            >
              Contact <ArrowUpRight size={13} className="transition-transform group-hover:translate-x-[2px] group-hover:-translate-y-[2px]" />
            </motion.button>
          </div>

          {/* MOBILE MENU TRIGGER (<1024px) */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-[var(--ink)] hover:text-[var(--signal)] transition-colors p-1"
            aria-label="Toggle Navigation Menu"
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* MAIN CONTENT AREA */}
      <main className="relative z-10 pt-24 min-h-[calc(100vh-100px)]">
        {children}
      </main>

      {/* REFINED MOBILE MENU DRAWER (<1024px) */}
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
              transition={{ type: 'spring', damping: 26, stiffness: 220 }}
              className="fixed right-0 top-0 h-full w-[85%] max-w-[360px] bg-[var(--paper-raised)] z-[1001] border-l border-[var(--line)] p-6 flex flex-col justify-between"
            >
              <div>
                {/* DRAWER HEADER */}
                <div className="flex justify-between items-center pb-5 mb-4 border-b border-[var(--line)]">
                  <span className="font-display font-black text-xl text-[var(--ink)]">
                    YP<span className="text-[var(--signal)]">.</span> DOSSIER
                  </span>
                  <button 
                    onClick={() => setIsMenuOpen(false)}
                    className="p-1 text-[var(--ink-soft)] hover:text-[var(--ink)]"
                  >
                    <X size={20} />
                  </button>
                </div>

                {/* NAV LINKS STACK */}
                <nav className="space-y-0 divide-y divide-[var(--line)] border-y border-[var(--line)]">
                  {navItems.map((item) => {
                    const isActive = activeSection === item.path
                    return (
                      <button
                        key={item.path}
                        onClick={() => handleNavClick(item.path)}
                        className={`w-full text-left py-3.5 px-2 flex items-center justify-between transition-colors ${
                          isActive 
                            ? 'text-[var(--signal)] font-bold' 
                            : 'text-[var(--ink)] hover:text-[var(--signal)]'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <span className="font-mono text-xs text-[var(--ink-soft)]">{item.code}</span>
                          <span className="font-mono text-xs uppercase tracking-wider font-semibold">{item.name}</span>
                        </div>
                        {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[var(--signal)]" />}
                      </button>
                    )
                  })}
                </nav>
              </div>

              {/* DRAWER BOTTOM ACTION PINNED */}
              <div className="pt-6 border-t border-[var(--line)]">
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