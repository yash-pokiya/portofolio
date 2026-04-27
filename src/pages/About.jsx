import React from 'react'
import { motion } from 'framer-motion'
import { User, MapPin, Code2, Brain, Terminal, Coffee, Globe, Award, Linkedin, Github } from 'lucide-react'

const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-8 py-12 space-y-24">
      {/* HEADER */}
      <section className="flex flex-col md:flex-row md:items-end justify-between gap-12">
        <div className="space-y-6 max-w-2xl">
          <span className="glass-tag text-indigo-500">System // Identity</span>
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none text-[var(--text-main)]">
            Architectural <br /> <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-500 to-purple-500 font-black">Profile</span>
          </h1>
          <p className="text-zinc-600 dark:text-zinc-400 font-bold uppercase tracking-widest text-[10px] leading-relaxed">
            Deployment Log: SY BCA Student // Logic Builder. <br /> Focused on bridging human requirements with high-performance digital logic.
          </p>
          <div className="flex items-center gap-4 pt-4">
            <a href="https://www.linkedin.com/in/yash-pokiyaone8/" target="_blank" rel="noreferrer" className="glass-tag text-indigo-500 flex items-center gap-2 hover:bg-indigo-500 hover:text-white transition-all text-[9px] font-black uppercase tracking-widest">
              <Linkedin size={12} /> LinkedIn Profile
            </a>
            <a href="https://github.com/yash-pokiya" target="_blank" rel="noreferrer" className="glass-tag text-zinc-500 flex items-center gap-2 hover:bg-zinc-800 hover:text-white transition-all text-[9px] font-black uppercase tracking-widest">
              <Github size={12} /> GitHub Profile
            </a>
          </div>
        </div>
        <div className="hidden md:flex flex-col items-end gap-4">
          <div className="w-24 h-24 rounded-3xl bg-indigo-500 flex items-center justify-center text-white shadow-2xl shadow-indigo-500/20">
            <Linkedin size={40} />
          </div>
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* MAIN BIO CARD */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-8 bento-card p-12 group relative overflow-hidden"
        >
          <div className="bento-grid-bg" />
          <div className="relative z-10 space-y-12">
            <div className="flex justify-between items-start">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-violet-500/10 flex items-center justify-center text-[var(--accent)]">
                  <User size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-black uppercase tracking-tight text-[var(--text-main)]">Professional Dossier</h3>
                  <div className="flex items-center gap-2 text-[var(--accent)] text-[10px] font-black uppercase tracking-[0.3em]">
                    <MapPin size={12} /> Based in Surat, India
                  </div>
                </div>
              </div>
              <span className="text-[9px] font-black uppercase tracking-[0.3em] opacity-60 text-black dark:text-white">Unit // 01</span>
            </div>

            <p className="text-zinc-700 dark:text-zinc-300 text-xl font-bold leading-relaxed max-w-3xl">
              I am a motivated SY BCA student and aspiring Web Developer seeking a practical internship at a local company to apply and strengthen my skills in HTML, CSS, Bootstrap, and JavaScript. I'm eager to learn backend technologies and databases while contributing to real-world web development projects.
            </p>

            <div className="flex flex-wrap gap-3">
              {['Quick Learner', 'Team Player', 'Logic Builder', 'Problem Solver'].map(tag => (
                <span key={tag} className="px-5 py-2 bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] text-zinc-800 dark:text-zinc-200">
                  {tag}
                </span>
              ))}
            </div>
            <div className="absolute top-12 right-12 w-16 h-16 rounded-2xl bg-[var(--accent)] flex items-center justify-center text-white rotate-12 group-hover:rotate-0 transition-transform duration-700 shadow-2xl shadow-violet-500/20">
              <Target size={32} />
            </div>
          </div>
        </motion.div>

        {/* CURRENT FOCUS CARD */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="lg:col-span-4 bento-card p-10 bg-linear-to-br from-violet-600 to-indigo-600 text-white relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent" />
          <div className="bento-grid-bg opacity-20" />
          
          <div className="relative z-10 flex flex-col h-full justify-between gap-12">
            <div className="flex justify-between items-start">
              <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                <Brain size={24} />
              </div>
              <span className="text-[9px] font-black uppercase tracking-[0.4em] opacity-60">Execution</span>
            </div>

            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.4em] text-white/60 mb-2">Current Focus</p>
              <h4 className="text-3xl font-black uppercase tracking-tighter leading-tight">
                Backend <br /> Logic Systems
              </h4>
            </div>

            <div className="p-4 rounded-xl bg-white/10 border border-white/10">
              <div className="flex items-center gap-3 text-[11px] font-black uppercase tracking-widest">
                <Terminal size={14} className="opacity-60" /> Node.js & Express.js
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* ADDITIONAL METADATA */}
      <section className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {[
          { icon: <Code2 size={20} />, label: "Philosophy", val: "Clean Architectures" },
          { icon: <Coffee size={20} />, label: "Routine", val: "Continuous Logic" },
          { icon: <Globe size={20} />, label: "Deployment", val: "Surat // Global" },
          { icon: <Award size={20} />, label: "Status", val: "Internship Search" }
        ].map((item, i) => (
          <div key={i} className="bento-card p-8 flex flex-col items-center text-center space-y-4">
            <div className="text-indigo-500">{item.icon}</div>
            <div className="space-y-1">
              <span className="text-[9px] font-black uppercase tracking-[0.4em] text-zinc-500">{item.label}</span>
              <p className="text-xs font-black uppercase tracking-widest text-[var(--text-main)]">{item.val}</p>
            </div>
          </div>
        ))}
      </section>

      {/* INSTITUTIONAL UNIT */}
      <div className="bento-card p-12 relative overflow-hidden group">
        <div className="bento-grid-bg opacity-30 group-hover:opacity-100 transition-opacity" />
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-8">
            <h2 className="text-6xl font-black text-black/5 dark:text-white/5 uppercase select-none">SY</h2>
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-indigo-500 mb-1">Academic Deployment</p>
              <h3 className="text-2xl font-black uppercase tracking-tight text-[var(--text-main)]">BCA Student</h3>
              <p className="text-xs font-bold uppercase tracking-widest text-zinc-500">Sutex Bank College of Computer Applications</p>
            </div>
          </div>
          <button className="btn-neo px-12 py-4 text-[10px] font-black uppercase tracking-[0.4em]">View Academic Path</button>
        </div>
      </div>
    </div>
  )
}

export default About
