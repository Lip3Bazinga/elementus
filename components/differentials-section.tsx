"use client"

import { motion } from "framer-motion"

const differentials = [
  "Transparência total no processo",
  "Retorno rápido e sem burocracia",
  "Custo acessível — investimento, não despesa",
  "Segurança jurídica para o seu negócio",
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const itemVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
}

export function DifferentialsSection() {
  return (
    <section id="diferenciais" className="relative overflow-hidden" style={{ background: "#F8F7F4" }}>
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[480px] lg:min-h-[520px]">
        {/* Left: off-white — checklist */}
        <div
          className="flex flex-col justify-center px-6 py-12 sm:px-10 sm:py-16 lg:px-16 lg:py-24 order-2 lg:order-1"
          style={{ background: "#F8F7F4" }}
        >
          <motion.ul
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col gap-6"
          >
            {differentials.map((item, i) => (
              <motion.li
                key={i}
                variants={itemVariants}
                className="flex items-start gap-4"
              >
                <div
                  className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ background: "linear-gradient(135deg, #C9A84C, #E8C96A)" }}
                >
                  <CheckIcon className="w-4 h-4 text-[#0A1628]" />
                </div>
                <span className="text-base leading-relaxed" style={{ color: "#0A1628" }}>
                  {item}
                </span>
              </motion.li>
            ))}
          </motion.ul>
        </div>

        {/* Right: dark navy — headline */}
        <div
          className="relative flex flex-col justify-center px-6 py-12 sm:px-10 sm:py-16 lg:px-16 lg:py-24 order-1 lg:order-2"
          style={{ background: "#0A1628" }}
        >
          {/* Noise texture */}
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.04]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
              backgroundSize: "256px 256px",
            }}
          />
          {/* Radial glow */}
          <div
            className="absolute bottom-0 left-0 w-80 h-80 pointer-events-none"
            style={{
              background: "radial-gradient(circle at bottom left, rgba(201,168,76,0.08), transparent 70%)",
            }}
          />

          <div className="relative z-10">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="text-xs tracking-[0.25em] font-semibold uppercase mb-4"
              style={{ color: "#C9A84C" }}
            >
              Por que nos escolher
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight text-balance mb-3"
            >
              Simples.{" "}
              <span style={{ color: "#C9A84C" }}>Ágil.</span>{" "}
              Seguro.
            </motion.h2>

            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 60 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="h-0.5 mt-4 mb-6"
              style={{ background: "linear-gradient(135deg, #C9A84C, #E8C96A, #A87C2A)" }}
            />

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-[#8A9BB0] leading-relaxed text-base"
            >

              Nossa abordagem combina expertise jurídica com processos modernos para garantir a melhor experiência em proteção intelectual.
              Você e sua empresa merecem o melhor.
              Escolha a Elementus.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  )
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}
