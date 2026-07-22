import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Github, Linkedin, Send, Check, Copy, Loader2, ArrowUpRight } from 'lucide-react'
import { personalInfo } from '../data/portfolioData'

const Contact = () => {
  const [status, setStatus] = useState("idle") // idle, sending, success, error
  const [copied, setCopied] = useState(false)

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus("sending")
    
    const formData = new FormData(e.target)
    formData.append("access_key", personalInfo.web3FormsKey)

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
    <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-16 md:space-y-20">
      {/* HEADER */}
      <section className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-8 border-b border-[var(--line)]">
        <div className="space-y-4 max-w-2xl">
          <span className="mono-label text-[var(--signal)]">§08 // SIGNAL & TRANSMISSION</span>
          <h1 className="font-display text-4xl md:text-6xl font-black uppercase text-[var(--ink)] tracking-tight">
            Establish Connection
          </h1>
          <p className="text-sm font-medium text-[var(--ink-soft)] uppercase tracking-wider">
            Secure line active. Available for software engineering roles, internships, and technical inquiries.
          </p>
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* INFO SIDE */}
        <motion.div 
          initial={{ opacity: 0, x: -15 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-5 space-y-8"
        >
          <div className="instrument-card p-8 md:p-10 space-y-8">
            <div className="flex justify-between items-center pb-4 border-b border-[var(--line)]">
              <span className="mono-label text-[var(--signal)]">DIRECT CHANNEL</span>
              <span className="mono-label text-[var(--ink-soft)]">LINE // ACTIVE</span>
            </div>

            <div className="space-y-4">
              <h3 className="font-display text-3xl font-bold uppercase text-[var(--ink)]">
                Let's Build <br /> Together.
              </h3>
              <p className="text-sm text-[var(--ink-soft)] leading-relaxed">
                Send a direct transmission for full-time opportunities, internship roles, or technical inquiries.
              </p>
            </div>

            <div className="pt-6 border-t border-[var(--line)] space-y-6">
              {/* COPY EMAIL ROW */}
              <div className="space-y-2">
                <span className="mono-label text-[var(--ink-soft)]">ELECTRONIC MAIL</span>
                <div className="flex items-center justify-between p-3 rounded-md border border-[var(--line)] bg-[var(--paper)]">
                  <span className="font-mono text-xs font-bold text-[var(--ink)] uppercase truncate mr-2">
                    {personalInfo.email}
                  </span>
                  <button 
                    onClick={handleCopyEmail}
                    className="tag-notched text-xs font-mono font-bold uppercase text-[var(--ink)] hover:border-[var(--signal)] hover:text-[var(--signal)] transition-colors flex items-center gap-1.5 shrink-0"
                  >
                    {copied ? <><Check size={12} /> COPIED</> : <><Copy size={12} /> COPY</>}
                  </button>
                </div>
              </div>

              {/* LOCATION & RESUME */}
              <div className="space-y-2">
                <span className="mono-label text-[var(--ink-soft)]">PRIMARY LOCATION</span>
                <div className="p-3 rounded-md border border-[var(--line)] bg-[var(--paper)] font-mono text-xs font-bold uppercase text-[var(--ink)]">
                  {personalInfo.location}
                </div>
              </div>

              {/* SOCIAL & CV LINKS */}
              <div className="space-y-2">
                <span className="mono-label text-[var(--ink-soft)]">DIRECT REGISTRIES</span>
                <div className="flex flex-col gap-2">
                  <a 
                    href={personalInfo.githubUrl} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="group p-3 rounded-md border border-[var(--line)] flex items-center justify-between font-mono text-xs font-bold uppercase text-[var(--ink)] hover:border-[var(--ink)] hover:bg-[var(--paper)] transition-colors"
                  >
                    <span className="flex items-center gap-2"><Github size={15} /> GITHUB</span>
                    <ArrowUpRight size={14} className="text-[var(--ink-soft)] transition-transform group-hover:translate-x-[2px] group-hover:-translate-y-[2px]" />
                  </a>
                  <a 
                    href={personalInfo.linkedinUrl} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="group p-3 rounded-md border border-[var(--line)] flex items-center justify-between font-mono text-xs font-bold uppercase text-[var(--ink)] hover:border-[var(--ink)] hover:bg-[var(--paper)] transition-colors"
                  >
                    <span className="flex items-center gap-2"><Linkedin size={15} /> LINKEDIN</span>
                    <ArrowUpRight size={14} className="text-[var(--ink-soft)] transition-transform group-hover:translate-x-[2px] group-hover:-translate-y-[2px]" />
                  </a>
                  <a 
                    href={personalInfo.resumeUrl} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="group p-3 rounded-md border border-[var(--line)] flex items-center justify-between font-mono text-xs font-bold uppercase text-[var(--ink)] hover:border-[var(--ink)] hover:bg-[var(--paper)] transition-colors"
                  >
                    <span>RESUME // CV PDF</span>
                    <ArrowUpRight size={14} className="text-[var(--ink-soft)] transition-transform group-hover:translate-x-[2px] group-hover:-translate-y-[2px]" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* FORM SIDE (UNDERLINE ONLY INPUTS) */}
        <motion.div 
          initial={{ opacity: 0, x: 15 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-7 instrument-card p-8 md:p-12 space-y-8"
        >
          <div className="flex justify-between items-center pb-4 border-b border-[var(--line)]">
            <span className="mono-label text-[var(--signal)]">TRANSMISSION MODULE</span>
            <span className="mono-label text-[var(--ink-soft)]">FORM // WEB3FORMS</span>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              {/* UNDERLINE ONLY NAME INPUT */}
              <div className="space-y-2">
                <label className="mono-label text-[var(--ink-soft)] block">IDENTITY // FULL NAME</label>
                <input 
                  name="name"
                  type="text" 
                  placeholder={`EX. ${personalInfo.name.toUpperCase()}`}
                  required
                  className="w-full bg-transparent border-b border-[var(--line)] py-3 font-mono text-xs font-bold uppercase text-[var(--ink)] focus:outline-none focus:border-[var(--signal)] transition-colors placeholder:text-[var(--line)]"
                />
              </div>

              {/* UNDERLINE ONLY EMAIL INPUT */}
              <div className="space-y-2">
                <label className="mono-label text-[var(--ink-soft)] block">REGISTRY // EMAIL ADDRESS</label>
                <input 
                  name="email"
                  type="email" 
                  placeholder={`EX. ${personalInfo.email.toUpperCase()}`}
                  required
                  className="w-full bg-transparent border-b border-[var(--line)] py-3 font-mono text-xs font-bold uppercase text-[var(--ink)] focus:outline-none focus:border-[var(--signal)] transition-colors placeholder:text-[var(--line)]"
                />
              </div>
            </div>

            {/* UNDERLINE ONLY MESSAGE INPUT */}
            <div className="space-y-2">
              <label className="mono-label text-[var(--ink-soft)] block">INTEL // MESSAGE CONTENT</label>
              <textarea 
                name="message"
                rows="4" 
                placeholder="TELL ME ABOUT YOUR PROJECT OR INTERNSHIP ROLE..."
                required
                className="w-full bg-transparent border-b border-[var(--line)] py-3 font-mono text-xs font-bold uppercase text-[var(--ink)] focus:outline-none focus:border-[var(--signal)] transition-colors resize-none placeholder:text-[var(--line)]"
              />
            </div>

            {/* SUBMIT BUTTON */}
            <motion.button 
              type="submit" 
              disabled={status === "sending" || status === "success"}
              whileTap={status === "idle" ? { scale: 0.97 } : {}}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className={`group w-full py-4 rounded-[12px] font-mono text-xs font-bold uppercase tracking-[0.15em] transition-all flex items-center justify-center gap-2 ${
                status === "success" 
                  ? "bg-[var(--signal-soft)] text-[var(--ink)] border border-[var(--signal)] cursor-default"
                  : status === "sending"
                  ? "bg-[var(--ink)]/40 text-[var(--paper-raised)] cursor-not-allowed opacity-40"
                  : "bg-[var(--ink)] text-[var(--paper-raised)] hover:bg-[var(--signal)] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.15)]"
              }`}
            >
              {status === "sending" ? (
                <><Loader2 className="animate-spin" size={16} /> TRANSMITTING SIGNAL...</>
              ) : status === "success" ? (
                <><Check size={16} className="text-[var(--signal)]" /> MESSAGE SENT — 200 OK</>
              ) : (
                <><Send size={16} className="transition-transform group-hover:translate-x-[2px] group-hover:-translate-y-[2px]" /> INITIALIZE TRANSMISSION</>
              )}
            </motion.button>

            <AnimatePresence>
              {status === "error" && (
                <motion.p 
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center font-mono text-xs font-bold uppercase text-red-600 tracking-wider"
                >
                  TRANSMISSION ERROR. PLEASE EMAIL DIRECTLY.
                </motion.p>
              )}
            </AnimatePresence>
          </form>
        </motion.div>
      </div>
    </div>
  )
}

export default Contact
