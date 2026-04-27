import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Sparkles, Code2, ArrowUpRight, Terminal, MapPin, Cpu, Target, Download } from 'lucide-react'

const USER_PHOTO = "https://res.cloudinary.com/dsncsvgfm/image/upload/v1777291481/WhatsApp_Image_2026-04-27_at_5.34.22_PM_rq7rwn.jpg";

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto px-8 space-y-24 pb-24">
      {/* HERO */}
      <section className="space-y-12">
        <div className="flex flex-col gap-4">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="flex items-center gap-3 text-[var(--accent)] font-bold tracking-[0.2em] uppercase text-sm">
            <Sparkles size={16} /> SY BCA Student & Logic Builder
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 40 }} 
            animate={{ opacity: 1, y: 0 }} 
            className="text-6xl md:text-[120px] font-black uppercase tracking-tighter leading-[0.8] mb-8 text-[var(--text-main)]"
          >
            Turning Code <br /> Into <span className="text-[var(--accent)] italic">Experience.</span>
          </motion.h1>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-stretch">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ delay: 0.2 }} 
            className="flex-1 bento-card p-12 flex flex-col justify-between min-h-[500px] group"
          >
            <div className="bento-grid-bg" />
            
            <div className="relative z-10 flex justify-between items-start">
              <div className="flex flex-col gap-3">
                <span className="glass-tag w-fit text-[var(--accent)]">v2.0 // Core System</span>
                <div className="flex items-center gap-2 opacity-40">
                  <div className="w-10 h-px bg-current" />
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[var(--text-main)]">Architectural Logic</span>
                </div>
              </div>
              <div className="text-right flex flex-col items-end">
                <p className="text-[10px] font-black uppercase tracking-[0.3em] opacity-40 mb-2 text-[var(--text-main)]">Build Status</p>
                <div className="flex gap-1.5 p-1.5 bg-black/5 dark:bg-white/5 rounded-full">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <div className="w-2 h-2 rounded-full bg-teal-500 animate-pulse delay-75" />
                  <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse delay-150" />
                </div>
              </div>
            </div>

            <div className="relative z-10 space-y-12">
              <div className="absolute -top-12 -right-8 text-[var(--accent)]/5 group-hover:text-[var(--accent)]/10 transition-all duration-1000 -rotate-12 scale-75">
                <Code2 size={240} strokeWidth={0.5} />
              </div>
              
              <div className="flex flex-col lg:flex-row lg:items-end gap-12">
                <h2 className="text-2xl md:text-4xl font-black max-w-xl leading-tight tracking-tight text-[var(--text-main)] shrink-0">
                  I build digital products <br /> that prioritize <br />
                  <span className="text-transparent bg-clip-text bg-linear-to-r from-violet-600 via-purple-500 to-indigo-600 italic underline decoration-violet-500/20 bg-[length:200%_auto] animate-[shimmer_4s_linear_infinite]">performance</span>, 
                  <span className="text-[var(--accent)]"> elegance</span>, <br /> and 
                  <span className="text-[var(--accent)]"> logical integrity</span>.
                </h2>

                <div className="hidden xl:flex flex-col gap-4 border-l border-black/5 dark:border-white/5 pl-8 opacity-40">
                  <p className="text-[9px] font-black uppercase tracking-[0.3em] mb-2 text-[var(--text-main)]">Core Modules</p>
                  <ul className="space-y-2 text-[10px] font-bold uppercase tracking-widest text-[var(--text-main)]">
                    <li className="flex items-center gap-2"><span className="w-1 h-1 bg-[var(--accent)] rounded-full" /> Responsive Design</li>
                    <li className="flex items-center gap-2"><span className="w-1 h-1 bg-[var(--accent)] rounded-full" /> API Integration</li>
                    <li className="flex items-center gap-2"><span className="w-1 h-1 bg-[var(--accent)] rounded-full" /> Logic Building</li>
                  </ul>
                </div>
              </div>
              
              <div className="flex flex-wrap items-center gap-10 pt-4">
                <Link to="/projects" className="btn-neo px-8 py-3">Initialize Exploration</Link>
                <div className="flex items-center gap-8">
                  <div className="flex flex-col border-l border-black/10 dark:border-white/10 pl-6 text-[var(--text-main)]">
                    <span className="text-[10px] font-black uppercase tracking-widest opacity-40">Internship</span>
                    <span className="text-xs font-bold">READY 2026</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ delay: 0.3 }} 
            className="w-full lg:w-[400px] aspect-[3/4] bento-card p-0 overflow-hidden relative group shrink-0"
          >
            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <img src={USER_PHOTO} alt="Yash Pokiya" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105" />
            <div className="absolute bottom-10 left-10 z-20 translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 delay-100">
              <p className="text-white/60 text-[10px] font-black uppercase tracking-[0.4em] mb-2">Developer // Lead</p>
              <h4 className="text-white text-2xl font-black uppercase tracking-tighter">Yash Pokiya</h4>
              <div className="mt-4 h-1 w-12 bg-[var(--accent)] transition-all duration-700 group-hover:w-full" />
            </div>
          </motion.div>
        </div>

        {/* METADATA STRIP */}
        <div className="flex flex-wrap gap-8 py-6 border-y border-black/5 dark:border-white/5 overflow-hidden">
          {['Logic Architecture', 'Full-Stack MERN', 'System Optimization', 'Cloud Deployment'].map((label, i) => (
            <div key={label} className="flex items-center gap-4 shrink-0">
              <span className="text-[9px] font-black uppercase tracking-[0.4em] text-zinc-600 dark:text-zinc-400">0{i+1}</span>
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[var(--text-main)]">{label}</span>
              <div className="w-1 h-1 bg-indigo-500 rounded-full opacity-20" />
            </div>
          ))}
        </div>
      </section>

      {/* QUICK HIGHLIGHTS */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }}
          className="md:col-span-4 bento-card p-8 group overflow-hidden"
        >
          <div className="bento-grid-bg" />
          <div className="relative z-10 flex flex-col h-full justify-between">
            <div className="flex justify-between items-start">
              <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-500 group-hover:bg-indigo-500 group-hover:text-white transition-all duration-500">
                <Terminal size={24} />
              </div>
              <span className="text-[9px] font-black uppercase tracking-[0.3em] opacity-40 text-[var(--text-main)]">Module // 01</span>
            </div>
            <div className="mt-8">
              <p className="text-[10px] font-black uppercase tracking-[0.4em] text-indigo-500 mb-2">Current Focus</p>
              <h4 className="text-2xl font-black uppercase leading-tight text-[var(--text-main)]">MERN Stack <br /> Mastery</h4>
            </div>
            <div className="mt-6 flex items-center gap-2">
              <div className="h-1 flex-1 bg-black/5 dark:bg-white/5 rounded-full overflow-hidden">
                <motion.div initial={{ width: 0 }} whileInView={{ width: '85%' }} transition={{ duration: 2 }} className="h-full bg-indigo-500" />
              </div>
              <span className="text-[9px] font-black opacity-40 text-[var(--text-main)]">85%</span>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="md:col-span-8 bento-card p-8 bg-indigo-500 text-white group overflow-hidden border-none"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent" />
          <div className="bento-grid-bg opacity-20" />
          
          <div className="relative z-10 flex flex-col h-full justify-between text-white">
            <div className="flex justify-between items-start">
              <div className="flex flex-col gap-1 text-white">
                <span className="text-[10px] font-black uppercase tracking-[0.4em] opacity-80">Opportunity Seeking</span>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                  <span className="text-xs font-bold uppercase tracking-widest">Active Search</span>
                </div>
              </div>
              <ArrowUpRight size={48} className="opacity-40 group-hover:opacity-100 group-hover:translate-x-2 group-hover:-translate-y-2 transition-all duration-500" />
            </div>

            <div className="mt-12 flex flex-col md:flex-row md:items-end justify-between gap-6 text-white">
              <h3 className="text-3xl md:text-5xl font-black uppercase leading-none tracking-tighter">
                Practical <br /> Internship 2026
              </h3>
              <div className="flex flex-col text-right">
                <span className="text-[10px] font-black uppercase tracking-[0.3em] mb-2 text-white/60">Location Strategy</span>
                <span className="text-lg font-black uppercase italic">Remote // Surat, IN</span>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  )
}

export default Home
