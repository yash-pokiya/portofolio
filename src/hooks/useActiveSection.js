import { useState, useEffect } from 'react'

const SECTION_IDS = [
  'home',
  'about',
  'projects',
  'skills',
  'experience',
  'education',
  'blog',
  'contact'
]

export const useActiveSection = () => {
  const [activeSection, setActiveSection] = useState('home')
  const [scrolledPastHeader, setScrolledPastHeader] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolledPastHeader(window.scrollY > 80)

      const current = SECTION_IDS.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 200 && rect.bottom >= 200
        }
        return false
      })
      if (current) setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      const offset = 80
      const bodyRect = document.body.getBoundingClientRect().top
      const elementRect = element.getBoundingClientRect().top
      const elementPosition = elementRect - bodyRect
      const offsetPosition = elementPosition - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return { activeSection, scrolledPastHeader, scrollToSection }
}
