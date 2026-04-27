import React, { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Sun, Moon, Github, Linkedin, Search, Menu, X, Cpu } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const Layout = ({ children, isDark, setIsDark }) => {
  const [scrolled, setScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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
    <div className="min-h-screen relative font-primary">
      {/* NOISE & GRID */}
      <div className="fixed inset-0 pointer-events-none opacity-[var(--noise-opacity)] mix-blend-overlay z-[10]" />
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(circle_at_2px_2px,_var(--accent)_1px,_transparent_0)] bg-[size:40px_40px] opacity-[var(--grid-opacity)] z-0" />

      {/* UNIFIED HEADER */}
      <header
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 border-b ${
          scrolled ? 'py-4 shadow-lg shadow-black/5' : 'py-6 border-transparent'
        }`}
        style={{
          backgroundColor: scrolled ? 'var(--nav-bg)' : 'transparent',
          borderColor: scrolled ? 'var(--nav-border)' : 'transparent',
          backdropFilter: 'blur(16px)',
        }}
      >
        <div className="max-w-7xl mx-auto px-8 flex items-center justify-between">
          {/* LOGO */}
          <Link to="/" className="group flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[var(--accent)] flex items-center justify-center text-white shadow-xl shadow-purple-500/20 group-hover:rotate-12 transition-transform duration-500">
              <Cpu size={20} />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-black uppercase tracking-[0.3em] text-[var(--text-main)]">Yash <span className="text-[var(--accent)]">Pokiya</span></span>
              <span className="text-[8px] font-black uppercase tracking-[0.4em] opacity-40">Web Developer</span>
            </div>
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `relative text-[10px] font-black uppercase tracking-[0.3em] transition-all hover:text-[var(--accent)] ${
                    isActive ? 'text-[var(--accent)]' : 'text-[var(--text-main)]'
                  }`
                }
              >
                {item.name}
                {location.pathname === item.path && (
                  <motion.div
                    layoutId="active-nav"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[var(--accent)]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </NavLink>
            ))}
          </nav>

          {/* ACTIONS */}
          <div className="hidden lg:flex items-center gap-6">
            <div className="flex items-center gap-4 border-r border-black/10 dark:border-white/10 pr-6">
              <a href="https://github.com/yash-pokiya" target="_blank" rel="noreferrer" className="text-[var(--text-main)] hover:text-[var(--accent)] transition-colors">
                <Github size={18} />
              </a>
              <a href="https://www.linkedin.com/in/yash-pokiyaone8/" target="_blank" rel="noreferrer" className="text-[var(--text-main)] hover:text-[var(--accent)] transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
            <button
              onClick={() => setIsDark(!isDark)}
              className="w-10 h-10 rounded-xl bg-black/5 dark:bg-white/5 flex items-center justify-center text-[var(--text-main)] hover:bg-[var(--accent)] hover:text-white transition-all shadow-lg shadow-purple-500/10"
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>

          {/* MOBILE TRIGGER */}
          <button
            onClick={() => setIsMenuOpen(true)}
            className="lg:hidden w-10 h-10 rounded-xl bg-black/5 dark:bg-white/5 flex items-center justify-center text-[var(--text-main)]"
          >
            <Menu size={20} />
          </button>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className={`transition-all duration-500 pt-32 pb-24 relative z-10`}>
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
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[1000]"
            />

            <motion.aside
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              className="fixed right-0 top-0 h-full w-[85%] max-w-sm bg-white dark:bg-zinc-900 z-[1001] p-8 shadow-2xl"
            >
              <div className="flex justify-between items-center mb-12">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-[var(--accent)] flex items-center justify-center text-white">
                    <Cpu size={16} />
                  </div>
                  <span className="text-xs font-black uppercase tracking-[0.3em] text-[var(--text-main)]">System</span>
                </div>
                <button onClick={() => setIsMenuOpen(false)} className="p-2 rounded-lg bg-black/5 dark:bg-white/5 text-[var(--text-main)]">
                  <X size={20} />
                </button>
              </div>

              <nav className="space-y-4">
                {navItems.map((item) => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={({ isActive }) =>
                      `block p-4 rounded-xl transition-all font-black uppercase tracking-widest text-[11px] ${
                        isActive 
                        ? 'bg-[var(--accent)] text-white shadow-xl shadow-purple-500/20' 
                        : 'bg-black/5 dark:bg-white/5 text-[var(--text-main)] hover:bg-black/10 dark:hover:bg-white/10'
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                ))}
              </nav>

              <div className="mt-auto pt-12 space-y-6">
                <button
                  onClick={() => {
                    setIsDark(!isDark)
                    setIsMenuOpen(false)
                  }}
                  className="w-full p-4 rounded-xl bg-black/5 dark:bg-white/5 flex items-center justify-between text-[var(--text-main)] font-black uppercase tracking-widest text-[10px]"
                >
                  {isDark ? 'Light Protocol' : 'Dark Protocol'}
                  {isDark ? <Sun size={18} /> : <Moon size={18} />}
                </button>

                <div className="pt-8 border-t border-black/5 dark:border-white/10 flex gap-4">
                  <a href="https://github.com/yash-pokiya" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-xl bg-black/5 dark:bg-white/5 flex items-center justify-center text-[var(--text-main)]">
                    <Github size={20} />
                  </a>
                  <a href="https://www.linkedin.com/in/yash-pokiyaone8/" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-xl bg-black/5 dark:bg-white/5 flex items-center justify-center text-[var(--text-main)]">
                    <Linkedin size={18} />
                  </a>
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      <footer className="max-w-7xl mx-auto px-8 py-12 text-center border-t border-black/5 dark:border-white/5 opacity-40">
        <p className="text-[9px] font-black uppercase tracking-[0.4em] text-[var(--text-main)]">© 2026 Yash Pokiya // Systems Architecture</p>
      </footer>
    </div>
  )
}

export default Layout