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
          <section id="home" className="pb-16 md:pb-24">
            <Home />
          </section>
          <section id="about" className="py-16 md:py-24">
            <About />
          </section>
          <section id="projects" className="py-16 md:py-24">
            <Projects />
          </section>
          <section id="skills" className="py-16 md:py-24">
            <Skills />
          </section>
          <section id="experience" className="py-16 md:py-24">
            <Experience />
          </section>
          <section id="education" className="py-16 md:py-24">
            <Education />
          </section>
          <section id="blog" className="py-16 md:py-24">
            <Blog />
          </section>
          <section id="contact" className="py-16 md:py-24">
            <Contact />
          </section>
        </div>
      </Layout>
    </Router>
  )
}

export default App
