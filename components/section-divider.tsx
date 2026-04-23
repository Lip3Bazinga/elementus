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

        {/* Logo 5 — isolated "E" mark */}
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.5, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center justify-center mx-4 flex-shrink-0"
        >
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5-vSSguVgVSlnxXXO6iXXQOUhQ2Y07vg.png"
            alt=""
            className="w-14 h-14 object-contain"
          />
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
