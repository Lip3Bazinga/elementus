"use client"

import { motion } from "framer-motion"

interface SectionDividerProps {
  /** Background color of the strip itself */
  bg?: string
  /** Color of the lines and diamond */
  color?: string
}

export function SectionDivider({
  bg = "#0A1628",
  color = "#C9A84C",
}: SectionDividerProps) {
  return (
    <div
      className="w-full flex items-center justify-center py-10"
      style={{ background: bg }}
      aria-hidden="true"
    >
      <div className="flex items-center gap-0 w-full max-w-2xl px-8">
        {/* Left line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="h-px flex-1 origin-right"
          style={{ background: `linear-gradient(to left, ${color}, transparent)` }}
        />

        {/* Ornament: outer diamond + inner dot */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.5, delay: 0.4, ease: "backOut" }}
          className="flex items-center justify-center mx-3 flex-shrink-0"
        >
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Outer diamond (rotated square) */}
            <rect
              x="11"
              y="1.5"
              width="13.4"
              height="13.4"
              rx="0"
              transform="rotate(45 11 11)"
              stroke={color}
              strokeWidth="1.2"
              fill="none"
            />
            {/* Inner filled diamond */}
            <rect
              x="11"
              y="7"
              width="5.66"
              height="5.66"
              rx="0"
              transform="rotate(45 11 11)"
              fill={color}
            />
          </svg>
        </motion.div>

        {/* Right line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="h-px flex-1 origin-left"
          style={{ background: `linear-gradient(to right, ${color}, transparent)` }}
        />
      </div>
    </div>
  )
}
