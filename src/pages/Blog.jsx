import React from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, Clock } from 'lucide-react'
import { blogData } from '../data/portfolioData'

const Blog = () => {
  const featuredPost = blogData.find(p => p.featured)
  const otherPosts = blogData.filter(p => !p.featured)

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-16 md:space-y-20">
      {/* HEADER */}
      <section className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-8 border-b border-[var(--line)]">
        <div className="space-y-4 max-w-2xl">
          <span className="mono-label text-[var(--signal)]">§07 // SYSTEM INTEL</span>
          <h1 className="font-display text-4xl md:text-6xl font-black uppercase text-[var(--ink)] tracking-tight">
            Technical Insights
          </h1>
          <p className="text-sm font-medium text-[var(--ink-soft)] uppercase tracking-wider">
            Deployment Log: {blogData.length < 10 ? `0${blogData.length}` : blogData.length} Technical Entries. Analyzing system logic, performance metrics, and architecture patterns.
          </p>
        </div>
      </section>

      {/* FEATURED POST CARD */}
      {featuredPost && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="instrument-card p-8 md:p-12 space-y-8 group cursor-pointer hover:border-[var(--ink)]"
        >
          <div className="flex justify-between items-center pb-6 border-b border-[var(--line)]">
            <span className="tag-notched border-[var(--signal)] text-[var(--signal)] bg-[var(--signal-soft)] font-bold">
              FEATURED // {featuredPost.tag}
            </span>
            <div className="flex items-center gap-2 font-mono text-xs text-[var(--ink-soft)]">
              <Clock size={13} /> {featuredPost.readTime}
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="font-display text-3xl md:text-4xl font-extrabold uppercase text-[var(--ink)] group-hover:text-[var(--signal)] transition-colors">
              {featuredPost.title}
            </h2>
            <p className="text-base text-[var(--ink-soft)] leading-relaxed max-w-3xl">
              {featuredPost.excerpt}
            </p>
          </div>

          <div className="pt-6 border-t border-[var(--line)] flex justify-between items-center">
            <span className="font-mono text-xs text-[var(--ink-soft)]">{featuredPost.date}</span>
            <span className="signal-underline font-mono text-xs uppercase flex items-center gap-1.5">
              READ ANALYSIS <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-[2px] group-hover:-translate-y-[2px]" />
            </span>
          </div>
        </motion.div>
      )}

      {/* SECONDARY POSTS LIST (HAIRLINE ROWS) */}
      <div className="space-y-0 border-t border-[var(--line)]">
        {otherPosts.map((post, idx) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="py-8 border-b border-[var(--line)] group cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-6"
          >
            <div className="space-y-2 max-w-3xl">
              <div className="flex items-center gap-3">
                <span className="mono-label text-[var(--signal)]">{post.tag}</span>
                <span className="font-mono text-[10px] text-[var(--ink-soft)]">• {post.date}</span>
              </div>

              <h3 className="font-display text-2xl font-bold uppercase text-[var(--ink)] group-hover:text-[var(--signal)] transition-colors">
                {post.title}
              </h3>

              <p className="text-sm text-[var(--ink-soft)]">
                {post.excerpt}
              </p>
            </div>

            <div className="flex items-center gap-4 shrink-0">
              <span className="font-mono text-xs font-semibold text-[var(--ink-soft)]">{post.readTime}</span>
              <ArrowUpRight size={18} className="text-[var(--ink-soft)] group-hover:text-[var(--signal)] transition-colors" />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Blog
