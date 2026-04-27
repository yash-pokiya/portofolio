import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

// Components & Sections
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Skills from './pages/Skills'
import Experience from './pages/Experience'
import Education from './pages/Education'
import Blog from './pages/Blog'
import Contact from './pages/Contact'

const App = () => {
  const [isDark, setIsDark] = useState(true)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    const handleMouseMove = (e) => setMousePos({ x: e.clientX, y: e.clientY })
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [isDark])

  return (
    <Router>
      {/* Background Glow */}
      <div 
        className="fixed inset-0 pointer-events-none z-0 opacity-40 dark:opacity-20"
        style={{
          background: `radial-gradient(600px at ${mousePos.x}px ${mousePos.y}px, rgba(139, 92, 246, 0.15), transparent 80%)`
        }}
      />

      <Layout isDark={isDark} setIsDark={setIsDark}>
        <div className="flex flex-col">
          <section id="home" className="min-h-screen">
            <Home />
          </section>
          <section id="about" className="min-h-screen py-24">
            <About />
          </section>
          <section id="projects" className="min-h-screen py-24">
            <Projects />
          </section>
          <section id="skills" className="min-h-screen py-24">
            <Skills />
          </section>
          <section id="experience" className="min-h-screen py-24">
            <Experience />
          </section>
          <section id="education" className="min-h-screen py-24">
            <Education />
          </section>
          <section id="blog" className="min-h-screen py-24">
            <Blog />
          </section>
          <section id="contact" className="min-h-screen py-24">
            <Contact />
          </section>
        </div>
      </Layout>
    </Router>
  )
}

export default App
