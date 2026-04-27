import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, Github, Linkedin, Send, MessageSquare, Globe, CheckCircle, Loader2 } from 'lucide-react'

const Contact = () => {
  const [status, setStatus] = useState("idle") // idle, sending, success, error

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus("sending")
    
    const formData = new FormData(e.target)
    formData.append("access_key", "57db2962-2d44-406f-9dac-b6f6023ccf8f")

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      })
      
      const data = await response.json()
      if (data.success) {
        setStatus("success")
        e.target.reset()
      } else {
        setStatus("error")
      }
    } catch (error) {
      setStatus("error")
    }
  }

  return (
    <div className="max-w-7xl mx-auto px-8 py-12 space-y-24">
      {/* HEADER */}
      <section className="flex flex-col md:flex-row md:items-end justify-between gap-12">
        <div className="space-y-6 max-w-2xl">
          <span className="glass-tag text-[var(--accent)]">System // Signal</span>
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none text-[var(--text-main)]">
            Establish <br /> <span className="text-transparent bg-clip-text bg-linear-to-r from-violet-600 via-purple-500 to-indigo-600 font-black">Connection</span>
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
          <div className="bento-card p-12 bg-[var(--accent)] text-white relative overflow-hidden group">
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
                    <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center group-hover/item:bg-white group-hover/item:text-[var(--accent)] transition-all duration-500">
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
                  { icon: <Linkedin size={20} />, link: "https://www.linkedin.com/in/yash-pokiyaone8/" },
                  { icon: <Github size={20} />, link: "https://github.com/yash-pokiya" }
                ].map((social, i) => (
                  <a key={i} href={social.link} target="_blank" rel="noreferrer" className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center hover:bg-white hover:text-[var(--accent)] transition-all shadow-xl">
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="bento-card p-8 flex items-center justify-between group">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-[var(--accent)] flex items-center justify-center text-white shadow-2xl shadow-violet-500/20">
                <Send size={32} />
              </div>
              <div>
                <p className="text-[var(--accent)] text-[10px] font-black uppercase tracking-[0.4em] mb-2">Direct Channel</p>
                <h3 className="text-3xl font-black uppercase tracking-tighter text-[var(--text-main)] underline decoration-[var(--accent)]/30 truncate max-w-[200px] md:max-w-md">yashpokiya44@gmail.com</h3>
              </div>
            </div>
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
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[var(--accent)]">Initiate Collaboration</span>
              <span className="text-[9px] font-black uppercase tracking-[0.3em] opacity-20">Transmission Module</span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-10">
              <div className="grid md:grid-cols-2 gap-10">
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500 block ml-1">Identity // Full Name</label>
                  <input 
                    name="name"
                    type="text" 
                    placeholder="EX. YASH POKIYA"
                    required
                    className="w-full bg-black/5 dark:bg-white/5 border border-zinc-300 dark:border-white/10 rounded-2xl px-6 py-4 text-xs font-black uppercase tracking-widest focus:outline-none focus:border-[var(--accent)]/50 transition-all placeholder:text-zinc-500 dark:placeholder:text-zinc-600 text-[var(--text-main)]"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500 block ml-1">Registry // Email Address</label>
                  <input 
                    name="email"
                    type="email" 
                    placeholder="EX. YASH@GMAIL.COM"
                    required
                    className="w-full bg-black/5 dark:bg-white/5 border border-zinc-300 dark:border-white/10 rounded-2xl px-6 py-4 text-xs font-black uppercase tracking-widest focus:outline-none focus:border-[var(--accent)]/50 transition-all placeholder:text-zinc-500 dark:placeholder:text-zinc-600 text-[var(--text-main)]"
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
                  className="w-full bg-black/5 dark:bg-white/5 border border-zinc-300 dark:border-white/10 rounded-2xl px-6 py-4 text-xs font-black uppercase tracking-widest focus:outline-none focus:border-[var(--accent)]/50 transition-all placeholder:text-zinc-500 dark:placeholder:text-zinc-600 resize-none text-[var(--text-main)]"
                />
              </div>

              <button 
                type="submit" 
                disabled={status === "sending" || status === "success"}
                className="w-full group relative py-6 bg-black dark:bg-white text-white dark:text-black rounded-2xl overflow-hidden transition-all hover:scale-[1.01] active:scale-95 shadow-2xl disabled:opacity-50 disabled:scale-100 disabled:cursor-not-allowed"
              >
                <div className="absolute inset-0 bg-[var(--accent)] translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                <span className="relative flex items-center justify-center gap-4 text-[11px] font-black uppercase tracking-[0.5em] group-hover:text-white transition-colors">
                  {status === "sending" ? (
                    <><Loader2 className="animate-spin" size={18} /> Sending Signal...</>
                  ) : status === "success" ? (
                    <><CheckCircle size={18} /> Transmission Complete</>
                  ) : (
                    <><Send size={18} /> Initialize Transmission</>
                  )}
                </span>
              </button>

              <AnimatePresence>
                {status === "success" && (
                  <motion.p 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center text-[10px] font-black uppercase tracking-[0.4em] text-[var(--accent)]"
                  >
                    Transmission received. I will respond shortly.
                  </motion.p>
                )}
                {status === "error" && (
                  <motion.p 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center text-[10px] font-black uppercase tracking-[0.4em] text-red-500"
                  >
                    Transmission failure. Please try again or email directly.
                  </motion.p>
                )}
              </AnimatePresence>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Contact
