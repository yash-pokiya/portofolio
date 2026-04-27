import React from 'react'
import { MapPin, BookOpen, Terminal } from 'lucide-react'

const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-8 py-24 space-y-12">
      <div className="flex items-center gap-4">
        <h2 className="text-4xl font-black uppercase tracking-tighter">About Me</h2>
        <div className="h-px flex-1 bg-black/10 dark:bg-white/10" />
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2 bento-card space-y-6">
          <h3 className="text-2xl font-bold flex items-center gap-2">
            <MapPin size={24} className="text-indigo-500" /> Based in Surat, India
          </h3>
          <p className="text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed">
            I am a motivated SY BCA student and aspiring Web Developer seeking a practical internship at a local company to apply and strengthen my skills in HTML, CSS, Bootstrap, and JavaScript. I'm eager to learn backend technologies and databases while contributing to real-world web development projects.
          </p>
          <div className="flex flex-wrap gap-3">
            {['Quick Learner', 'Team Player', 'Logic Builder', 'Problem Solver'].map(tag => (
              <span key={tag} className="px-4 py-2 rounded-full bg-zinc-100 dark:bg-zinc-800 text-[10px] font-bold uppercase tracking-wider text-zinc-600 dark:text-zinc-300 transition-colors">{tag}</span>
            ))}
          </div>
        </div>

        <div className="bento-card flex flex-col justify-center items-center text-center space-y-4">
          <div className="w-16 h-16 rounded-2xl bg-indigo-500 flex items-center justify-center text-white">
            <Terminal size={32} />
          </div>
          <div>
            <h4 className="font-black uppercase tracking-widest text-[10px] text-zinc-600 dark:text-zinc-400 mb-1">Current Focus</h4>
            <p className="text-xl font-bold">Node.js & Express.js</p>
          </div>
        </div>

        <div className="bento-card flex items-center gap-6 group hover:bg-indigo-500 transition-colors duration-500">
          <div className="text-5xl font-black group-hover:text-white transition-colors">SY</div>
          <div className="group-hover:text-white/80 transition-colors">
            <p className="font-bold">BCA Student</p>
            <p className="text-sm opacity-60 uppercase tracking-widest">Sutex Bank College</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
