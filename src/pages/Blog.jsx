import React from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, Clock, Zap } from 'lucide-react'

const posts = [
  {
    title: "The Future of Web Performance in 2026",
    excerpt: "Exploring the intersection of modern design and efficient engineering in the ever-evolving web landscape.",
    date: "Apr 25, 2026",
    readTime: "5 min read",
    tag: "TECH",
    featured: true
  },
  {
    title: "Why I Switched to Tailwind 4 for Everything",
    excerpt: "The power of zero-runtime CSS and the new architectural freedom in component styling.",
    date: "Apr 18, 2026",
    readTime: "8 min read",
    tag: "DEV"
  },
  {
    title: "Transitioning from Frontend to Full Stack",
    excerpt: "The logical challenges and architectural shifts when moving into the MERN ecosystem.",
    date: "Apr 10, 2026",
    readTime: "4 min read",
    tag: "GROWTH"
  }
]

const Blog = () => {
  const featuredPost = posts.find(p => p.featured)
  const otherPosts = posts.filter(p => !p.featured)

  return (
    <div className="max-w-7xl mx-auto px-8 py-12 space-y-16">
      {/* HEADER */}
      <section className="flex flex-col md:flex-row md:items-end justify-between gap-12">
        <div className="space-y-6 max-w-2xl">
          <span className="glass-tag text-indigo-500">System // Intel</span>
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none">
            Insights & <br /> <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-500 to-purple-500 font-black">Thoughts</span>
          </h1>
          <p className="text-zinc-600 dark:text-zinc-400 font-bold uppercase tracking-widest text-[10px] leading-relaxed">
            Deployment Log: Documenting the journey of system logic and <br /> architectural evolution in real-time.
          </p>
        </div>
      </section>

      {/* FEATURED POST */}
      {featuredPost && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bento-card p-0 overflow-hidden group cursor-pointer"
        >
          <div className="bento-grid-bg" />
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-1/2 p-12 bg-indigo-500 text-white flex flex-col justify-between relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent" />
              <div className="relative z-10 flex flex-col gap-12">
                <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform duration-500">
                  <Zap size={32} />
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] opacity-60">Featured Log</span>
                    <div className="h-px w-12 bg-white/20" />
                  </div>
                  <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-tight text-white">
                    {featuredPost.title}
                  </h2>
                </div>
              </div>
              <div className="relative z-10 flex items-center gap-6 mt-12">
                <div className="flex items-center gap-2">
                  <Clock size={14} className="opacity-60" />
                  <span className="text-[10px] font-black uppercase tracking-widest opacity-80">{featuredPost.readTime}</span>
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest opacity-40 italic">{featuredPost.date}</span>
              </div>
            </div>
            <div className="lg:w-1/2 p-12 flex flex-col justify-center bg-white/40 dark:bg-black/40 backdrop-blur-sm">
              <div className="space-y-8">
                <span className="px-4 py-1 bg-indigo-500/10 text-indigo-500 text-[9px] font-black uppercase tracking-[0.4em] rounded-full border border-indigo-500/20">
                  Protocol // {featuredPost.tag}
                </span>
                <p className="text-zinc-700 dark:text-zinc-300 text-xl font-bold leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center gap-4 text-black dark:text-white text-[11px] font-black uppercase tracking-[0.3em] group-hover:gap-6 transition-all">
                  Read Analysis <ArrowUpRight size={18} />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* BLOG GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {otherPosts.map((post, idx) => (
          <motion.div
            key={post.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="bento-card p-8 group cursor-pointer hover:border-indigo-500/30 transition-all overflow-hidden"
          >
            <div className="bento-grid-bg" />
            <div className="relative z-10 flex flex-col h-full justify-between gap-12">
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <span className="text-[9px] font-black uppercase tracking-[0.4em] text-indigo-500">{post.tag}</span>
                  <div className="flex items-center gap-2 text-[9px] font-black uppercase tracking-widest opacity-40 text-black dark:text-white">
                    <Clock size={12} /> {post.readTime}
                  </div>
                </div>
                <h3 className="text-2xl font-black uppercase tracking-tighter leading-tight group-hover:text-indigo-500 transition-colors text-black dark:text-white">
                  {post.title}
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 text-sm font-bold leading-relaxed">
                  {post.excerpt}
                </p>
              </div>
              <div className="flex justify-between items-center pt-8 border-t border-black/5 dark:border-white/5">
                <span className="text-[9px] font-black uppercase tracking-widest opacity-40 text-black dark:text-white">{post.date}</span>
                <ArrowUpRight size={20} className="opacity-20 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Blog
