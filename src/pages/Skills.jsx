import React from 'react'
import { motion } from 'framer-motion'
import { Layout, Terminal, Database, Cpu, Code2 } from 'lucide-react'
import { skillsData } from '../data/portfolioData'

const categoryIcons = [
  <Layout size={18} key="0" />,
  <Terminal size={18} key="1" />,
  <Database size={18} key="2" />,
  <Code2 size={18} key="3" />,
  <Cpu size={18} key="4" />
]

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
            SY BCA Tech Stack across 5 specialized categories: Frontend, Backend, Database, Tools, and Logic Architecture.
          </p>
        </div>
      </section>

      {/* SKILLS GRID (5 CATEGORIES) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillsData.map((category, idx) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.08 }}
            className="instrument-card p-8 flex flex-col justify-between"
          >
            <div>
              <div className="flex justify-between items-center pb-6 mb-8 border-b border-[var(--line)]">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-md border border-[var(--line)] flex items-center justify-center text-[var(--ink)]">
                    {categoryIcons[idx % categoryIcons.length]}
                  </div>
                  <span className="mono-label text-[var(--ink-soft)]">MODULE // 0{idx + 1}</span>
                </div>
              </div>

              <h3 className="font-display text-xl font-bold uppercase text-[var(--ink)] mb-8">
                {category.title}
              </h3>
              
              <div className="space-y-6">
                {category.skills.map((skill, si) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center font-mono text-xs">
                      <span className="font-semibold text-[var(--ink)]">{skill.name}</span>
                      <span className="text-[var(--ink-soft)]">{skill.level}%</span>
                    </div>
                    {/* THIN INSTRUMENT PROGRESS BAR */}
                    <div className="h-1.5 w-full bg-[var(--line)] rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, delay: si * 0.05 }}
                        className="h-full bg-[var(--ink)]"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-8 mt-8 border-t border-[var(--line)] text-right">
              <span className="mono-label text-[var(--ink-soft)]">VERIFIED SPEC</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Skills
