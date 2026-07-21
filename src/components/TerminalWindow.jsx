import React, { useState, useEffect, useRef } from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'

/**
 * TerminalWindow Component
 * @param {string} title - Title string for top chrome bar (e.g. "yash@systems:~")
 * @param {Array} lines - Array of line objects: { text: string, type?: 'cmd' | 'text' | 'json' | 'success' | 'bar', delay?: number }
 * @param {string} variant - 'boot' | 'card' | 'data'
 * @param {number} staggerDelay - Delay before typing starts (in seconds)
 * @param {string} ariaLabel - Screen-reader accessible label text
 */
const TerminalWindow = ({
  title = "terminal@system:~",
  lines = [],
  variant = "card",
  staggerDelay = 0,
  ariaLabel
}) => {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, margin: "-50px" })
  const prefersReducedMotion = useReducedMotion()

  const [displayedLineCount, setDisplayedLineCount] = useState(prefersReducedMotion ? lines.length : 0)
  const [currentCharIndex, setCurrentCharIndex] = useState(0)
  const [isTypingComplete, setIsTypingComplete] = useState(prefersReducedMotion)

  // Accessible plain text summary
  const accessibleText = ariaLabel || lines.map(l => typeof l === 'string' ? l : l.text).join(' ')

  useEffect(() => {
    if (prefersReducedMotion) {
      setDisplayedLineCount(lines.length)
      setIsTypingComplete(true)
      return
    }

    if (!isInView) return

    let timeoutId
    const startDelay = (staggerDelay || 0) * 1000

    timeoutId = setTimeout(() => {
      let currentLine = 0
      let currentChar = 0

      const typeNextChar = () => {
        if (currentLine >= lines.length) {
          setIsTypingComplete(true)
          return
        }

        const lineObj = lines[currentLine]
        const lineText = typeof lineObj === 'string' ? lineObj : lineObj.text

        if (currentChar < lineText.length) {
          currentChar++
          setCurrentCharIndex(currentChar)
          timeoutId = setTimeout(typeNextChar, 24)
        } else {
          currentLine++
          setDisplayedLineCount(currentLine)
          currentChar = 0
          setCurrentCharIndex(0)
          timeoutId = setTimeout(typeNextChar, 80)
        }
      }

      typeNextChar()
    }, startDelay)

    return () => clearTimeout(timeoutId)
  }, [isInView, lines, staggerDelay, prefersReducedMotion])

  // Variants for float animation on 'boot' type
  const floatAnimation = variant === 'boot' && !prefersReducedMotion ? {
    y: [-3, 3, -3],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut"
    }
  } : {}

  return (
    <motion.div
      ref={containerRef}
      animate={floatAnimation}
      aria-label={accessibleText}
      role="region"
      className="w-full rounded-[12px] border border-white/10 overflow-hidden bg-[#0D0D0F] shadow-sm select-none font-mono"
    >
      {/* WINDOW CHROME TITLE BAR */}
      <div className="h-9 bg-[#1A1A1D] px-4 flex items-center justify-between border-b border-white/10 relative">
        {/* THREE TRAFFIC DOTS */}
        <div className="flex items-center gap-1.5 z-10">
          <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
        </div>

        {/* CENTERED TITLE */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <span className="text-[11px] font-mono font-medium text-[#85858C] uppercase tracking-wider truncate px-12">
            {title}
          </span>
        </div>

        {/* SYSTEM STATUS CHIP */}
        <div className="text-[9px] font-mono text-[#85858C] uppercase tracking-widest hidden sm:block">
          TTY1
        </div>
      </div>

      {/* WINDOW BODY */}
      <div className="p-5 md:p-6 text-xs text-[#E4E4E7] leading-relaxed terminal-scanlines space-y-2 overflow-x-auto min-h-[160px]">
        {lines.map((lineObj, lineIdx) => {
          const isCurrentLine = lineIdx === displayedLineCount
          const isPastLine = lineIdx < displayedLineCount

          if (!isPastLine && !isCurrentLine) return null

          const lineText = typeof lineObj === 'string' ? lineObj : lineObj.text
          const lineType = typeof lineObj === 'object' ? lineObj.type : 'text'

          // Slice character by character if currently typing line
          const visibleContent = isPastLine 
            ? lineText 
            : lineText.slice(0, currentCharIndex)

          return (
            <div key={lineIdx} className="flex items-start gap-2 whitespace-pre-wrap font-mono">
              {lineType === 'cmd' && (
                <span className="text-[var(--signal)] font-bold shrink-0">$</span>
              )}

              <span className={`flex-1 ${
                lineType === 'success' 
                  ? 'text-[#3ECF8E] font-semibold' 
                  : lineType === 'muted' 
                  ? 'text-[#85858C]' 
                  : lineType === 'json'
                  ? 'text-[#E4E4E7]'
                  : 'text-[#E4E4E7]'
              }`}>
                {visibleContent}
                
                {/* BLINKING CURSOR ON ACTIVE TYPING LINE */}
                {isCurrentLine && !isTypingComplete && (
                  <span className="inline-block w-2 h-3.5 bg-[var(--signal)] ml-0.5 animate-pulse align-middle" />
                )}
              </span>
            </div>
          )
        })}

        {/* IDLE CURSOR AFTER TYPING COMPLETE */}
        {isTypingComplete && (
          <div className="flex items-center gap-2 text-xs pt-1 font-mono">
            <span className="text-[var(--signal)] font-bold">$</span>
            <span className="inline-block w-2 h-3.5 bg-[var(--signal)] animate-[pulse_1s_infinite] align-middle" />
          </div>
        )}
      </div>
    </motion.div>
  )
}

export default TerminalWindow
