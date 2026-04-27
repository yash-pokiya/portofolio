import React from 'react'
import { motion } from 'framer-motion'
import { GraduationCap, MapPin, Globe, Award, Database, Code2 } from 'lucide-react'

const Education = () => {
  return (
    <div className="max-w-7xl mx-auto px-8 py-12 space-y-24">
      {/* HEADER */}
      <section className="flex flex-col md:flex-row md:items-end justify-between gap-12">
        <div className="space-y-6 max-w-2xl">
          <span className="glass-tag text-[var(--accent)]">System // Foundation</span>
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none text-[var(--text-main)]">
            Academic <br /> <span className="text-transparent bg-clip-text bg-linear-to-r from-violet-600 via-purple-500 to-indigo-600 font-black">Architecture</span>
          </h1>
          <p className="text-zinc-600 dark:text-zinc-400 font-bold uppercase tracking-widest text-[10px] leading-relaxed">
            Deployment Log: SY BCA Student // Logic Builder. <br /> Focused on bridging human requirements with high-performance digital logic.
          </p>
        </div>
      </section>

      {/* PRIMARY EDUCATION CARD */}
      <section>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bento-card p-0 overflow-hidden group"
        >
          <div className="bento-grid-bg" />
          <div className="flex flex-col lg:flex-row min-h-[450px]">
            {/* INSTITUTION SIDE */}
            <div className="lg:w-1/3 p-12 bg-[var(--accent)] text-white flex flex-col justify-between relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent" />
              <div className="relative z-10 space-y-8">
                <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                  <GraduationCap size={32} />
                </div>
                <div>
                  <span className="text-[10px] font-black uppercase tracking-[0.4em] opacity-60">Deployment Timeline</span>
                  <h3 className="text-3xl font-black uppercase tracking-tighter leading-none mt-2">2024 <br /> Ongoing</h3>
                </div>
              </div>
              <div className="relative z-10">
                <span className="text-[10px] font-black uppercase tracking-widest opacity-60 block mb-2">University Affiliation</span>
                <p className="text-lg font-black uppercase italic">VNSGU // V. N. S. G. U.</p>
              </div>
            </div>

            {/* DETAILS SIDE */}
            <div className="lg:w-2/3 p-12 flex flex-col justify-between bg-white/40 dark:bg-black/40 backdrop-blur-sm">
              <div className="space-y-12">
                <div className="flex justify-between items-start">
                  <div className="space-y-2">
                    <span className="text-[var(--accent)] text-[10px] font-black uppercase tracking-[0.4em]">Primary Degree</span>
                    <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-[var(--text-main)]">BCA - SY</h2>
                    <p className="text-zinc-500 font-bold uppercase tracking-widest text-xs">Bachelor of Computer Applications</p>
                  </div>
                  <div className="flex flex-col items-end">
                    <div className="flex items-center gap-2 px-4 py-1 rounded-full bg-green-500/10 text-green-500 border border-green-500/20 mb-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                      <span className="text-[9px] font-black uppercase tracking-widest">Active System</span>
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-zinc-500 dark:text-zinc-500">Surat, India</span>
                  </div>
                </div>

                <div className="space-y-6">
                  <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[var(--accent)]">Core Curriculum Logs</span>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      { icon: <Database size={16} />, title: "Database Architectures", desc: "SQL & NoSQL Systems" },
                      { icon: <Code2 size={16} />, title: "Full-Stack Logic", desc: "MERN Frameworks" },
                      { icon: <Globe size={16} />, title: "Web Technologies", desc: "System Design" },
                      { icon: <Award size={16} />, title: "Business Applications", desc: "Enterprise Logic" }
                    ].map((item, i) => (
                      <div key={i} className="p-5 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 flex items-center gap-4 group-hover:border-indigo-500/30 transition-all">
                        <div className="text-[var(--accent)]">{item.icon}</div>
                        <div>
                          <p className="text-[11px] font-black uppercase tracking-widest text-[var(--text-main)] leading-tight">{item.title}</p>
                          <p className="text-[9px] font-bold uppercase tracking-widest text-zinc-500 mt-1">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-12 flex items-center gap-4 border-t border-black/5 dark:border-white/5">
                <span className="text-[9px] font-black uppercase tracking-[0.2em] text-zinc-500">Institutional Unit:</span>
                <span className="text-[10px] font-black uppercase tracking-widest text-[var(--text-main)]">Sutex Bank College of Computer Applications</span>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ACADEMIC METADATA STRIP */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { label: "Current Semester", val: "IV // SY" },
          { label: "Core Concentration", val: "System Architectures" },
          { label: "Logic Specialization", val: "MERN / Next.js" }
        ].map((meta, i) => (
          <div key={i} className="bento-card p-8 flex flex-col justify-center items-center text-center space-y-4">
            <span className="text-[9px] font-black uppercase tracking-[0.4em] text-[var(--accent)]">{meta.label}</span>
            <p className="text-xl font-black uppercase tracking-tighter text-[var(--text-main)]">{meta.val}</p>
          </div>
        ))}
      </section>
    </div>
  )
}

export default Education
