"use client"

import { motion } from "framer-motion"

const headline = "Sua marca merece proteção jurídica".split(" ")

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.3 },
  },
}

const wordVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
}

const particles = [
  { top: "18%", left: "8%", size: 6, delay: 0 },
  { top: "32%", left: "92%", size: 4, delay: 0.4 },
  { top: "65%", left: "5%", size: 5, delay: 0.8 },
  { top: "72%", left: "88%", size: 7, delay: 0.2 },
  { top: "45%", left: "96%", size: 3, delay: 1.1 },
  { top: "12%", left: "70%", size: 5, delay: 0.6 },
  { top: "55%", left: "14%", size: 4, delay: 1.4 },
  { top: "80%", left: "55%", size: 6, delay: 0.9 },
]

const trustBadges = [
  { text: "Registro no INPI" },
  { text: "Processo 100% digital" },
  { text: "Atendimento especializado" },
]

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ background: "#0A1628" }}
    >
      {/* Noise texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundSize: "256px 256px",
        }}
      />

      {/* Radial gold glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center bottom, rgba(201,168,76,0.12) 0%, transparent 70%)",
        }}
      />

      {/* Floating gold particles */}
      {particles.map((p, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full pointer-events-none"
          style={{
            top: p.top,
            left: p.left,
            width: p.size,
            height: p.size,
            background: "linear-gradient(135deg, #C9A84C, #E8C96A)",
            opacity: 0.5,
          }}
          animate={{ y: [-10, 10] }}
          transition={{
            duration: 3 + i * 0.3,
            repeat: Infinity,
            repeatType: "reverse",
            delay: p.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center">
        {/* Pre-label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex items-center gap-2 mb-8"
        >
          <div className="h-px w-8" style={{ background: "linear-gradient(135deg, #C9A84C, #E8C96A)" }} />
          <span className="text-[#C9A84C] text-xs tracking-[0.25em] font-semibold uppercase">
            Propriedade intelectual
          </span>
          <div className="h-px w-8" style={{ background: "linear-gradient(135deg, #C9A84C, #E8C96A)" }} />
        </motion.div>

        {/* Headline — word-by-word stagger */}
        <motion.h1
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="font-serif text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight text-balance mb-6 flex flex-wrap justify-center gap-x-4 gap-y-1"
        >
          {headline.map((word, i) => (
            <motion.span key={i} variants={wordVariants}>
              {word === "Proteção" ? (
                <span style={{ color: "#C9A84C" }}>{word}</span>
              ) : (
                word
              )}
            </motion.span>
          ))}
        </motion.h1>

        {/* Animated gold line */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 60 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="h-0.5 mb-8"
          style={{ background: "linear-gradient(135deg, #C9A84C, #E8C96A, #A87C2A)" }}
        />

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9 }}
          className="text-[#8A9BB0] text-lg sm:text-xl max-w-2xl leading-relaxed mb-10 text-balance"
        >
          Registro de marcas, patentes e propriedade intelectual com agilidade,
          transparência e sem burocracia.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="flex flex-col sm:flex-row items-center gap-4 mb-12"
        >
          <motion.a
            href="#contato"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="gold-shimmer-btn px-8 py-4 rounded-full font-semibold text-[#0A1628] text-base tracking-wide"
            style={{
              background: "linear-gradient(135deg, #C9A84C, #E8C96A, #A87C2A)",
            }}
          >
            Iniciar registro
          </motion.a>
          <motion.a
            href="#servicos"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="px-8 py-4 rounded-full font-semibold text-white text-base tracking-wide border transition-colors duration-200 hover:bg-white/5"
            style={{ borderColor: "rgba(201,168,76,0.5)" }}
          >
            Saiba mais
          </motion.a>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.3 }}
          className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8"
        >
          {trustBadges.map((badge, i) => (
            <div key={i} className="flex items-center gap-2">
              <CheckIcon className="w-4 h-4 flex-shrink-0" style={{ color: "#C9A84C" }} />
              <span className="text-sm text-[#8A9BB0]">{badge.text}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom diagonal divider */}
      <div
        className="absolute bottom-0 left-0 right-0 h-20 pointer-events-none"
        style={{
          clipPath: "polygon(0 100%, 100% 100%, 100% 0)",
          background: "#F8F7F4",
        }}
      />

      {/* Animated gold divider line above clip */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.2, delay: 1.5 }}
        className="absolute bottom-20 left-0 right-0 h-px origin-left"
        style={{ background: "linear-gradient(90deg, transparent, #C9A84C 20%, #C9A84C 80%, transparent)" }}
      />
    </section>
  )
}

function CheckIcon({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg className={className} style={style} viewBox="0 0 20 20" fill="currentColor">
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
        clipRule="evenodd"
      />
    </svg>
  )
}
