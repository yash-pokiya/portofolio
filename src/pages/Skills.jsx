import React from 'react'
import { motion } from 'framer-motion'
import { skillsData } from '../data/portfolioData'
import TerminalWindow from '../components/TerminalWindow'

// Helper function to build 10-character ASCII block bars
const generateAsciiBar = (percentage) => {
  const totalBlocks = 10
  const filledBlocks = Math.round((percentage / 100) * totalBlocks)
  const emptyBlocks = totalBlocks - filledBlocks
  return '█'.repeat(filledBlocks) + '░'.repeat(emptyBlocks)
}

const Skills = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 space-y-20">
      {/* HEADER */}
      <section className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-8 border-b border-[var(--line)]">
        <div className="space-y-4 max-w-2xl">
          <span className="mono-label text-[var(--signal)]">§04 // TECHNICAL MODULES</span>
          <h1 className="font-display text-4xl md:text-6xl font-black uppercase text-[var(--ink)] tracking-tight">
            Competency Matrix
          </h1>
          <p className="text-sm font-medium text-[var(--ink-soft)] uppercase tracking-wider">
            SY BCA Tech Stack across 5 specialized CLI category modules.
          </p>
        </div>
      </section>

      {/* SKILLS CLI TERMINALS GRID (5 CATEGORIES) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skillsData.map((category, idx) => {
          const categorySlug = category.title.toLowerCase().replace(/[^a-z0-9]/g, '-')
          const terminalTitle = `skills --category=${categorySlug}`

          // Build lines for terminal window
          const lines = [
            { type: 'cmd', text: `node skills.js --${categorySlug}` },
            { type: 'muted', text: '' }
          ]

          category.skills.forEach(skill => {
            const bar = generateAsciiBar(skill.level)
            const paddedName = skill.name.padEnd(20, ' ')
            lines.push({
              type: 'text',
              text: `${paddedName} ${bar}  ${skill.level}%`
            })
          })

          lines.push({ type: 'muted', text: '' })
          lines.push({ type: 'success', text: '✓ done in 0.4s' })

          const ariaSummary = `${category.title} competencies: ` + category.skills.map(s => `${s.name} ${s.level}%`).join(', ')

          return (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex flex-col"
            >
              <TerminalWindow
                title={terminalTitle}
                variant="data"
                staggerDelay={idx * 0.1}
                lines={lines}
                ariaLabel={ariaSummary}
              />
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}

export default Skills
