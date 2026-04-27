import React from 'react'
import { motion } from 'framer-motion'
import { Briefcase, Target, Download } from 'lucide-react'

const Experience = () => {
  const RESUME_LINK = "https://res.cloudinary.com/dsncsvgfm/image/upload/v1777291664/Yash_Pokiya_-_Resume_xu6swi.pdf";

  return (
    <div className="max-w-7xl mx-auto px-8 py-12 space-y-24">
      {/* HEADER */}
      <section className="flex flex-col md:flex-row md:items-end justify-between gap-12">
        <div className="space-y-6 max-w-2xl">
          <span className="glass-tag text-indigo-500">System // Experience</span>
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none text-[var(--text-main)]">
            Professional <br /> <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-500 to-purple-500 font-black">History</span>
          </h1>
          <p className="text-zinc-600 dark:text-zinc-400 font-bold uppercase tracking-widest text-[10px] leading-relaxed">
            Deployment logs: 01 Industry Internship Completed. <br /> Focused on full-stack MERN architectures and real-world system logic.
          </p>
        </div>
      </section>

      {/* COMPLETED INTERNSHIP */}
      <section>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bento-card p-8 group relative overflow-hidden"
        >
          <div className="bento-grid-bg" />
          <div className="relative z-10 flex flex-col md:flex-row justify-between gap-12">
            <div className="space-y-6 md:w-2/3">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-indigo-500 flex items-center justify-center text-white">
                  <Briefcase size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-black uppercase tracking-tight text-[var(--text-main)]">MERN Stack Intern</h3>
                  <p className="text-indigo-500 text-[10px] font-black uppercase tracking-[0.3em]">LaMinds // Surat, IN</p>
                </div>
              </div>
              <p className="text-zinc-600 dark:text-zinc-300 text-sm font-bold leading-relaxed max-w-xl">
                Contributed to full-stack development using the MERN ecosystem. Developed responsive interfaces and optimized backend logic for real-world business applications.
              </p>
              <div className="flex flex-wrap gap-2">
                {["MongoDB", "Express", "React", "Node.js"].map(t => (
                  <span key={t} className="px-3 py-1 bg-black/5 dark:bg-white/5 rounded-full text-[9px] font-black uppercase tracking-widest text-[var(--text-main)]">
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div className="md:w-1/3 flex flex-col justify-between items-end border-l border-black/5 dark:border-white/5 pl-12">
              <div className="text-right text-[var(--text-main)]">
                <span className="text-[10px] font-black uppercase tracking-[0.4em] opacity-40">Deployment Period</span>
                <p className="text-lg font-black uppercase italic mt-1">3 Months</p>
              </div>
              <div className="text-right text-[var(--text-main)]">
                <span className="text-[10px] font-black uppercase tracking-[0.4em] opacity-40">Location Strategy</span>
                <p className="text-sm font-black uppercase mt-1">Sumul Dairy Rd, Surat</p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ACTIVE OBJECTIVE CARD */}
      <section>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bento-card p-0 overflow-hidden group"
        >
          <div className="bento-grid-bg" />
          <div className="flex flex-col lg:flex-row min-h-[400px]">
            {/* STATUS SIDE */}
            <div className="lg:w-1/3 p-12 bg-indigo-500 text-white flex flex-col justify-between relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent" />
              <div className="relative z-10 space-y-8">
                <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                  <Target size={32} />
                </div>
                <div>
                  <span className="text-[10px] font-black uppercase tracking-[0.4em] opacity-60">Status Code</span>
                  <h3 className="text-3xl font-black uppercase tracking-tighter leading-none mt-2 text-[var(--text-main)]">Active <br /> Pursuit</h3>
                </div>
              </div>
              <div className="relative z-10 flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                <span className="text-[10px] font-black uppercase tracking-widest opacity-80 italic">Internship // 2026</span>
              </div>
            </div>

            {/* CONTENT SIDE */}
            <div className="lg:w-2/3 p-12 flex flex-col justify-between bg-white/40 dark:bg-black/40 backdrop-blur-sm">
              <div className="space-y-8">
                <div className="flex justify-between items-start">
                  <div className="space-y-2">
                    <span className="text-indigo-500 text-[10px] font-black uppercase tracking-[0.4em]">Role Objective</span>
                    <h2 className="text-4xl font-black uppercase tracking-tighter text-[var(--text-main)]">Practical Intern</h2>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="text-[10px] font-black uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-1">Target Location</span>
                    <span className="text-xs font-black uppercase italic text-[var(--text-main)]">Surat, IN // Remote</span>
                  </div>
                </div>

                <p className="text-zinc-600 dark:text-zinc-300 text-lg font-bold leading-relaxed max-w-2xl">
                  Motivated SY BCA student looking to deploy frontend expertise and logical problem-solving in a professional ecosystem. Ready to contribute to high-performance MERN stack projects.
                </p>

                <div className="grid md:grid-cols-3 gap-6 pt-8">
                  {[
                    { label: "Goal // 01", text: "Master Next.js 14 Architectures" },
                    { label: "Goal // 02", text: "Deploy Industry-Grade APIs" },
                    { label: "Goal // 03", text: "Optimize Frontend UX Logic" }
                  ].map((goal, i) => (
                    <div key={i} className="p-6 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 space-y-3 group-hover:border-indigo-500/30 transition-all">
                      <span className="text-[9px] font-black uppercase tracking-[0.3em] text-indigo-500">{goal.label}</span>
                      <p className="text-[11px] font-black uppercase tracking-widest leading-tight text-black dark:text-white">{goal.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* RESUME DEPLOYMENT */}
      <section className="bento-card p-12 text-center relative overflow-hidden">
        <div className="bento-grid-bg opacity-30" />
        <div className="relative z-10 space-y-10">
          <div className="flex flex-col items-center gap-4">
            <div className="w-12 h-px bg-indigo-500" />
            <h2 className="text-3xl font-black uppercase tracking-tighter">Request Full <span className="text-indigo-500">Manifesto</span></h2>
            <div className="w-12 h-px bg-indigo-500" />
          </div>
          
          <p className="text-zinc-500 font-bold uppercase tracking-widest text-[10px] max-w-md mx-auto">
            Download the complete technical profile including academic transcripts and logic building achievements.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6 pt-4">
            <a 
              href={RESUME_LINK} 
              target="_blank" 
              rel="noreferrer"
              className="group relative px-12 py-5 bg-black dark:bg-white text-white dark:text-black rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-2xl"
            >
              <div className="absolute inset-0 bg-indigo-500 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              <span className="relative flex items-center gap-3 text-[11px] font-black uppercase tracking-[0.4em] group-hover:text-white transition-colors">
                <Download size={16} /> Download CV
              </span>
            </a>
            
            <div className="flex items-center gap-3 px-6 py-4 rounded-full border border-black/5 dark:border-white/10">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-[9px] font-black uppercase tracking-widest opacity-60">System Ready for Download</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Experience
