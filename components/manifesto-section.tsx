"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const pillars = [
  {
    keyword: "Inovadora",
    description:
      "Usamos tecnologia e processos modernos para tornar o registro da sua marca rápido, transparente e sem complicação.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M12 2a7 7 0 017 7c0 3.5-2.5 5.5-3 7H8c-.5-1.5-3-3.5-3-7a7 7 0 017-7z" />
        <path d="M9 21h6M12 21v-5" />
      </svg>
    ),
  },
  {
    keyword: "Direta",
    description:
      "Sem linguagem jurídica desnecessária. Comunicação clara do início ao fim, para você entender cada etapa do processo.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M5 12h14M13 6l6 6-6 6" />
      </svg>
    ),
  },
  {
    keyword: "Dinâmica",
    description:
      "Agilidade é parte da nossa identidade. Respondemos rápido, agimos rápido e entregamos resultados sem burocracia.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
  },
]

export function ManifestoSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section
      ref={ref}
      className="relative overflow-hidden py-28"
      style={{ background: "#0A1628" }}
    >
      {/* Noise texture overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundSize: "256px 256px",
        }}
      />

      {/* Large faint "E" watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none" aria-hidden="true">
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5-vSSguVgVSlnxXXO6iXXQOUhQ2Y07vg.png"
          alt=""
          className="w-96 h-96 object-contain opacity-[0.04]"
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">

        {/* Top label */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center text-xs tracking-[0.28em] font-semibold uppercase mb-5"
          style={{ color: "#C9A84C" }}
        >
          Nossa essência
        </motion.p>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center text-white leading-tight text-balance mb-6"
        >
          Uma firma diferente.{" "}
          <span style={{ color: "#C9A84C" }}>De verdade.</span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center text-[#8A9BB0] max-w-2xl mx-auto leading-relaxed mb-20"
        >
          Nascemos para romper com o modelo jurídico tradicional. Trazemos agilidade e simplicidade no processo, sem renunciar à excelência técnica, profissionalismo e autoridade no assunto. 
        </motion.p>

        {/* Three pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.keyword}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: 0.3 + i * 0.13, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6 }}
              className="relative flex flex-col gap-4 sm:gap-5 rounded-2xl p-6 sm:p-8 border"
              style={{
                background: "rgba(255,255,255,0.03)",
                borderColor: "rgba(201,168,76,0.15)",
                boxShadow: "0 4px 30px rgba(0,0,0,0.25)",
              }}
            >
              {/* Step number */}
              <span
                className="absolute top-6 right-7 font-serif text-6xl font-bold leading-none select-none pointer-events-none"
                style={{ color: "rgba(201,168,76,0.07)" }}
              >
                0{i + 1}
              </span>

              {/* Icon circle */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{
                  background: "rgba(201,168,76,0.12)",
                  color: "#C9A84C",
                }}
              >
                {pillar.icon}
              </div>

              {/* Keyword */}
              <h3 className="font-serif text-2xl font-bold text-white">
                {pillar.keyword}
              </h3>

              {/* Gold rule */}
              <div className="w-10 h-0.5" style={{ background: "linear-gradient(90deg, #C9A84C, transparent)" }} />

              {/* Description */}
              <p className="text-[#8A9BB0] text-base leading-relaxed">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <p className="text-[#8A9BB0] text-sm text-center">
            Pronto para trabalhar com quem pensa diferente?
          </p>
          <a
            href="#contato"
            className="gold-shimmer-btn px-6 py-2.5 rounded-full text-sm font-semibold text-[#0A1628] tracking-wide whitespace-nowrap"
            style={{ background: "linear-gradient(135deg, #C9A84C, #E8C96A, #A87C2A)" }}
          >
            Fale com a gente
          </a>
        </motion.div>

      </div>
    </section>
  )
}
