import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Sun, Moon, Github, Linkedin, Search, Menu, X, ChevronRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const Layout = ({ children, isDark, setIsDark }) => {
  const [scrolled, setScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    let ticking = false

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 40)
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const RESUME_LINK =
    "https://res.cloudinary.com/dsncsvgfm/image/upload/v1777291664/Yash_Pokiya_-_Resume_xu6swi.pdf"

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Skills', path: '/skills' },
    { name: 'Experience', path: '/experience' },
    { name: 'Education', path: '/education' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ]

  return (
    <div className="min-h-screen selection:bg-indigo-500 selection:text-white transition-colors duration-500 bg-[var(--bg-main)] text-[var(--text-main)]">

      {/* ───────── HEADER ───────── */}
      <header className="fixed top-0 left-0 w-full z-[500]">

        {/* TOP BAR */}
        <div
          className={`bg-white/95 dark:bg-black/95 border-b border-black/5 dark:border-white/5 transition-all duration-500 overflow-hidden ${
            scrolled ? 'max-h-0 opacity-0' : 'max-h-12 opacity-100'
          }`}
        >
          <div className="max-w-7xl mx-auto px-8 flex justify-between items-center h-12 text-black dark:text-white">
            <span className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-indigo-500">
              <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full animate-pulse" />
              Available for Hire
            </span>

            <div className="flex items-center gap-6">
              <a
                href={RESUME_LINK}
                target="_blank"
                rel="noreferrer"
                className="text-[10px] font-black uppercase tracking-widest hover:text-indigo-500"
              >
                Download CV
              </a>

              <button
                onClick={() => setIsDark(!isDark)}
                className="p-1.5 rounded-full hover:bg-black/5 dark:hover:bg-white/5"
              >
                {isDark ? <Sun size={14} /> : <Moon size={14} />}
              </button>
            </div>
          </div>
        </div>

        {/* MAIN NAV */}
        <div
          className={`transition-all duration-500 ${
            scrolled
              ? 'bg-white/95 dark:bg-zinc-950/95 backdrop-blur-xl py-3 shadow-lg border-b border-black/10 dark:border-white/10'
              : 'bg-white/80 dark:bg-black/80 py-6'
          }`}
        >
          <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">

            <div className="flex items-center gap-6">
              <button
                onClick={() => setIsMenuOpen(true)}
                className="lg:hidden p-2"
              >
                <Menu size={24} />
              </button>

              <Link
                to="/"
                className={`font-black uppercase transition-all text-black dark:text-white ${
                  scrolled ? 'text-lg tracking-[0.3em]' : 'text-2xl tracking-[0.4em]'
                }`}
              >
                Yash <span className="text-indigo-500">Pokiya</span>
              </Link>
            </div>

            {/* DESKTOP */}
            <div className="hidden lg:flex items-center gap-8">

              {/* SEARCH */}
              <div className="flex items-center bg-black/5 dark:bg-white/5 rounded-full px-5 py-2">
                <Search size={14} className="text-white-400" />
                <input
                  type="text"
                  placeholder="SEARCH..."
                  className="bg-transparent text-white text-[10px] font-bold uppercase tracking-widest ml-3 outline-none w-40 lg:w-56"
                />
              </div>

              {/* SOCIAL */}
              <div className="flex items-center gap-4 border-l border-black/10 dark:border-white/10 pl-6">
                <a href="https://github.com/yash-pokiya" target="_blank" rel="noreferrer">
                  <Github size={20} />
                </a>
                <a href="#">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM NAV */}
        <nav
          className={`hidden lg:block bg-white/90 dark:bg-black/90 transition-all duration-500 overflow-hidden ${
            scrolled ? 'max-h-0 opacity-0' : 'max-h-16 opacity-100 border-t'
          }`}
        >
          <div className="max-w-7xl mx-auto px-8 flex justify-center gap-12 py-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-[10px] font-black uppercase tracking-[0.3em] ${
                  location.pathname === item.path
                    ? 'text-indigo-500'
                    : 'text-zinc-600 dark:text-zinc-300 hover:text-indigo-500'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </nav>
      </header>

      {/* ✅ FIXED MAIN CONTENT (NO JUMP) */}
      <main
        className={`transition-all duration-500 min-h-screen pb-12 ${
          scrolled ? 'pt-32' : 'pt-56'
        }`}
      >
        {children}
      </main>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-black/60 z-[1000]"
            />

            <motion.aside
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              className="fixed left-0 top-0 h-full w-[85%] max-w-sm bg-white dark:bg-zinc-900 z-[1001] p-8"
            >
              <button onClick={() => setIsMenuOpen(false)}>
                <X size={20} />
              </button>

              <div className="mt-10 space-y-3">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className="block p-4 bg-zinc-100 dark:bg-zinc-800 rounded-xl"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* FOOTER */}
      <footer className="max-w-7xl mx-auto px-8 py-12 text-center border-t opacity-50">
        © 2026 Yash Pokiya
      </footer>
    </div>
  )
}

export default Layout