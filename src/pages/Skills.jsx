import React from 'react'
import { motion } from 'framer-motion'
import { Layout, Terminal, Database, Cpu } from 'lucide-react'

const skillCategories = [
  {
    title: "Frontend Development",
    icon: <Layout size={24} />,
    skills: [
      { name: "HTML5 / CSS3", level: 95 },
      { name: "JavaScript (ES6+)", level: 85 },
      { name: "Tailwind CSS", level: 90 },
      { name: "Bootstrap 5", level: 90 },
      { name: "React.js", level: 80 }
    ]
  },
  {
    title: "Tools & Workflow",
    icon: <Terminal size={24} />,
    skills: [
      { name: "Git & GitHub", level: 98 },
      { name: "VS Code", level: 95 },
      { name: "Postman", level: 88 },
      { name: "Vercel / Netlify", level: 85 },
      { name: "MongoDB Compass", level: 85 }
    ]
  },
  {
    title: "Logic & Backend",
    icon: <Database size={24} />,
    skills: [
      { name: "Node.js (Next.js)", level: 75 },
      { name: "Express.js", level: 70 },
      { name: "MongoDB", level: 80 },
      { name: "C (Logic Building)", level: 90 }
    ]
  }
]

const Skills = () => {
  return (
    <div className="max-w-7xl mx-auto px-8 py-12 space-y-24">
      {/* HEADER */}
      <section className="flex flex-col md:flex-row md:items-end justify-between gap-12">
        <div className="space-y-6 max-w-2xl">
          <span className="glass-tag text-indigo-500">System // Arsenal</span>
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none text-[var(--text-main)]">
            Technical <br /> <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-500 to-purple-500 font-black">Modules</span>
          </h1>
          <p className="text-zinc-600 dark:text-zinc-400 font-bold uppercase tracking-widest text-[10px] leading-relaxed">
            Deployment Log: SY BCA Tech Stack. Focused on modular architectures, <br /> performance optimization, and logic consistency.
          </p>
        </div>
      </section>

      {/* SKILLS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {skillCategories.map((category, idx) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="bento-card p-8 group relative overflow-hidden"
          >
            <div className="bento-grid-bg" />
            
            <div className="relative z-10 space-y-12">
              <div className="flex justify-between items-start">
                <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-500 group-hover:bg-indigo-500 group-hover:text-white transition-all duration-500">
                  {category.icon}
                </div>
                <span className="text-[9px] font-black uppercase tracking-[0.3em] opacity-40">Module // 0{idx + 1}</span>
              </div>

              <div>
                <h3 className="text-xl font-black uppercase tracking-tight mb-8 text-[var(--text-main)]">
                  {category.title}
                </h3>
                
                <div className="space-y-8">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="space-y-3">
                      <div className="flex justify-between items-end">
                        <span className="text-[11px] font-black uppercase tracking-widest text-[var(--text-main)]">
                          {skill.name}
                        </span>
                        <span className="text-[10px] font-black opacity-40 text-[var(--text-main)]">{skill.level}%</span>
                      </div>
                      <div className="h-1 w-full bg-black/5 dark:bg-white/5 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1.5, delay: 0.2 }}
                          className="h-full bg-indigo-500 group-hover:bg-indigo-400 transition-colors"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* INFRASTRUCTURE NOTE */}
      <div className="flex flex-col md:flex-row gap-8 items-center justify-between py-12 border-t border-black/5 dark:border-white/5">
        <div className="flex items-center gap-6">
          <div className="flex -space-x-4">
            {[1, 2, 3].map(i => (
              <div key={i} className="w-10 h-10 rounded-full bg-zinc-100 dark:bg-zinc-800 border-2 border-[var(--bg-main)] flex items-center justify-center">
                <Cpu size={16} className="opacity-40" />
              </div>
            ))}
          </div>
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500">Continuous Integration // 2026 Strategy Active</p>
        </div>
        <div className="flex gap-4">
          <span className="px-4 py-2 bg-indigo-500 text-white text-[10px] font-black uppercase tracking-widest rounded-lg">Logic Built</span>
          <span className="px-4 py-2 border border-black/5 dark:border-white/10 text-[10px] font-black uppercase tracking-widest rounded-lg">Performance Optimized</span>
        </div>
      </div>
    </div>
  )
}

export default Skills
