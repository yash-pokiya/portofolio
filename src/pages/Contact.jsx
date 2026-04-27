import React from 'react'
import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, Send, MessageSquare, Globe, ShieldCheck } from 'lucide-react'

const Contact = () => {
  return (
    <div className="max-w-7xl mx-auto px-8 py-12 space-y-24">
      {/* HEADER */}
      <section className="flex flex-col md:flex-row md:items-end justify-between gap-12">
        <div className="space-y-6 max-w-2xl">
          <span className="glass-tag text-indigo-500">System // Communication</span>
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none">
            Get In <br /> <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-500 to-purple-500 font-black">Touch</span>
          </h1>
          <p className="text-zinc-600 dark:text-zinc-400 font-bold uppercase tracking-widest text-[10px] leading-relaxed">
            Deployment Log: Secure line active. Focus on logic building <br /> collaborations and architectural inquiries.
          </p>
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* INFO SIDE */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-5 space-y-8"
        >
          <div className="bento-card p-12 bg-indigo-500 text-white relative overflow-hidden group">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent" />
            <div className="bento-grid-bg opacity-20" />
            
            <div className="relative z-10 space-y-12">
              <div className="flex justify-between items-start">
                <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                  <MessageSquare size={32} />
                </div>
                <span className="text-[10px] font-black uppercase tracking-[0.4em] opacity-60 italic">Direct // Link</span>
              </div>

              <div>
                <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-none mb-8">
                  Let's Build <br /> the <span className="italic">Future.</span>
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-6 group/item">
                    <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center group-hover/item:bg-white group-hover/item:text-indigo-500 transition-all duration-500">
                      <Mail size={20} />
                    </div>
                    <div>
                      <p className="text-[9px] font-black uppercase tracking-[0.3em] opacity-60 mb-1">Electronic Mail</p>
                      <p className="text-sm font-black uppercase tracking-widest">yashpokiya44@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 pt-8 border-t border-white/10">
                {[
                  { icon: <Linkedin size={20} />, link: "#" },
                  { icon: <Github size={20} />, link: "https://github.com/yash-pokiya" },
                  { icon: <Globe size={20} />, link: "#" }
                ].map((social, i) => (
                  <a key={i} href={social.link} target="_blank" rel="noreferrer" className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center hover:bg-white hover:text-indigo-500 transition-all shadow-xl">
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="bento-card p-8 flex items-center justify-between group">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center text-green-500 border border-green-500/20">
                <ShieldCheck size={20} />
              </div>
              <div>
                <p className="text-[9px] font-black uppercase tracking-[0.3em] text-green-500">System Ready</p>
                <p className="text-[11px] font-black uppercase tracking-widest text-zinc-500">Protocol Secure</p>
              </div>
            </div>
            <span className="text-[8px] font-black uppercase tracking-[0.4em] opacity-20">EST. 2026</span>
          </div>
        </motion.div>

        {/* FORM SIDE */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-7 bento-card p-12 relative overflow-hidden"
        >
          <div className="bento-grid-bg" />
          <div className="relative z-10 space-y-12">
            <div className="flex justify-between items-center">
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-indigo-500">Initiate Collaboration</span>
              <span className="text-[9px] font-black uppercase tracking-[0.3em] opacity-20">Transmission Module</span>
            </div>

            <form action="https://api.web3forms.com/submit" method="POST" className="space-y-10">
              <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" />
              
              <div className="grid md:grid-cols-2 gap-10">
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500 block ml-1">Identity // Full Name</label>
                  <input 
                    name="name"
                    type="text" 
                    placeholder="EX. YASH POKIYA"
                    required
                    className="w-full bg-black/5 dark:bg-white/5 border border-zinc-300 dark:border-white/10 rounded-2xl px-6 py-4 text-xs font-black uppercase tracking-widest focus:outline-none focus:border-indigo-500/50 transition-all placeholder:text-zinc-400 dark:placeholder:text-zinc-600 text-black dark:text-white"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500 block ml-1">Registry // Email Address</label>
                  <input 
                    name="email"
                    type="email" 
                    placeholder="EX. YASH@GMAIL.COM"
                    required
                    className="w-full bg-black/5 dark:bg-white/5 border border-zinc-300 dark:border-white/10 rounded-2xl px-6 py-4 text-xs font-black uppercase tracking-widest focus:outline-none focus:border-indigo-500/50 transition-all placeholder:text-zinc-400 dark:placeholder:text-zinc-600 text-black dark:text-white"
                  />
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500 block ml-1">Intel // Message Content</label>
                <textarea 
                  name="message"
                  rows="6" 
                  placeholder="TELL ME ABOUT YOUR PROJECT..."
                  required
                  className="w-full bg-black/5 dark:bg-white/5 border border-zinc-300 dark:border-white/10 rounded-2xl px-6 py-4 text-xs font-black uppercase tracking-widest focus:outline-none focus:border-indigo-500/50 transition-all placeholder:text-zinc-400 dark:placeholder:text-zinc-600 resize-none text-black dark:text-white"
                />
              </div>

              <button type="submit" className="w-full group relative py-6 bg-black dark:bg-white text-white dark:text-black rounded-2xl overflow-hidden transition-all hover:scale-[1.01] active:scale-95 shadow-2xl">
                <div className="absolute inset-0 bg-indigo-500 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                <span className="relative flex items-center justify-center gap-4 text-[11px] font-black uppercase tracking-[0.5em] group-hover:text-white transition-colors">
                  <Send size={18} /> Initialize Transmission
                </span>
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Contact
