import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

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
  return (
    <Router>
      <Layout>
        <div className="flex flex-col">
          <section id="home" className="min-h-screen">
            <Home />
          </section>
          <section id="about" className="min-h-screen py-20">
            <About />
          </section>
          <section id="projects" className="min-h-screen py-20">
            <Projects />
          </section>
          <section id="skills" className="min-h-screen py-20">
            <Skills />
          </section>
          <section id="experience" className="min-h-screen py-20">
            <Experience />
          </section>
          <section id="education" className="min-h-screen py-20">
            <Education />
          </section>
          <section id="blog" className="min-h-screen py-20">
            <Blog />
          </section>
          <section id="contact" className="min-h-screen py-20">
            <Contact />
          </section>
        </div>
      </Layout>
    </Router>
  )
}

export default App
