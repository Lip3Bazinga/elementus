"use client"

import { motion } from "framer-motion"

const testimonials = [
  {
    name: "Ana Beatriz Santos",
    role: "Fundadora, Studio Beatriz Design",
    text: "A Elementus transformou minha preocupação em tranquilidade. O processo foi rápido, transparente e o acompanhamento foi impecável do começo ao fim.",
    rating: 5,
  },
  {
    name: "Rafael Mendes",
    role: "CEO, TechFlow Soluções",
    text: "Registrar nossa marca parecia complexo demais, mas a equipe da Elementus tornou tudo simples. Hoje temos segurança jurídica completa para escalar.",
    rating: 5,
  },
  {
    name: "Carla Oliveira",
    role: "Proprietária, Espaço Carla Oliveira",
    text: "Profissionalismo e agilidade em cada etapa. A análise de viabilidade gratuita me deu clareza e confiança para seguir em frente com o registro.",
    rating: 5,
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
}

export function TestimonialsSection() {
  return (
    <section className="py-24" style={{ background: "#F8F7F4" }}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-xs tracking-[0.25em] font-semibold uppercase mb-3"
            style={{ color: "#C9A84C" }}
          >
            Depoimentos
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-3xl sm:text-4xl font-bold text-balance"
            style={{ color: "#0A1628" }}
          >
            O Que Nossos Clientes Dizem
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 60 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-0.5 mx-auto mt-4"
            style={{ background: "linear-gradient(135deg, #C9A84C, #E8C96A, #A87C2A)" }}
          />
        </div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              className="flex flex-col gap-5 rounded-2xl p-8"
              style={{
                background: "rgba(10,22,40,0.03)",
                border: "1px solid rgba(201,168,76,0.25)",
                backdropFilter: "blur(12px)",
              }}
            >
              {/* Stars */}
              <div className="flex gap-1">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <StarIcon key={j} className="w-4 h-4" style={{ color: "#C9A84C" }} />
                ))}
              </div>

              <p className="text-sm leading-relaxed flex-1" style={{ color: "#0A1628" }}>
                &ldquo;{t.text}&rdquo;
              </p>

              <div className="flex items-center gap-3 pt-2 border-t" style={{ borderColor: "rgba(201,168,76,0.2)" }}>
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white flex-shrink-0"
                  style={{ background: "linear-gradient(135deg, #C9A84C, #A87C2A)" }}
                >
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-semibold" style={{ color: "#0A1628" }}>{t.name}</p>
                  <p className="text-xs" style={{ color: "#8A9BB0" }}>{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function StarIcon({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg className={className} style={style} viewBox="0 0 20 20" fill="currentColor">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  )
}
