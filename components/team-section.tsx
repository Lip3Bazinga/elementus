"use client"

import { motion } from "framer-motion"
import { LinkedinIcon } from "lucide-react"

const specialties = [
  "Registro de marcas",
  "Patentes",
  "Desenho industrial",
  "Programa de computador",
]

export function TeamSection() {
  return (
    <section
      id="time"
      className="relative py-24 bg-[#F8F7F4] overflow-hidden"
    >
      <div className="relative max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="inline-block text-xs font-semibold tracking-[0.2em] text-[#C9A84C] uppercase mb-4">
            Quem está por trás
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A1628] text-balance">
            Um especialista dedicado{" "}
            <span className="text-[#C9A84C]">exclusivamente</span> a você
          </h2>
        </motion.div>

        {/* Profile card — horizontal */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="bg-white rounded-3xl overflow-hidden shadow-lg border border-[#E8E4DC]"
        >
          {/* Content */}
          <div className="flex flex-col justify-center px-6 py-8 sm:px-8 sm:py-10 lg:px-12 lg:py-12">
            {/* Name + OAB */}
            <div className="flex flex-wrap items-start justify-between gap-4 mb-2">
              <div>
                <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0A1628] leading-tight">
                  Bruno Henrique
                </h3>
                <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0A1628] leading-tight">
                  Alves de Sousa
                </h3>
              </div>
              <a
                href="#"
                aria-label="LinkedIn de Bruno Henrique"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-[#F0EDE8] hover:bg-[#C9A84C] transition-colors duration-200 shrink-0 mt-1"
              >
                <LinkedinIcon className="w-5 h-5 text-[#0A1628]" />
              </a>
            </div>

            <p className="text-xs font-semibold text-[#C9A84C] tracking-[0.2em] uppercase mb-1">
              Advogado — OAB/SP 297.087
            </p>

            {/* Gold line */}
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 56 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="h-0.5 mb-6 mt-4"
              style={{ background: "linear-gradient(90deg, #C9A84C, #E8C96A)" }}
            />

            <p className="text-[#4A5568] leading-relaxed mb-8 max-w-xl">
              Advogado com mais de 15 anos de experiência em propriedade intelectual, atuando de forma sólida junto ao INPI. Especialista em registro de marcas, patentes, desenho industrial e programa de computador.
            </p>

            {/* Specialties */}
            <div>
              <p className="text-xs font-semibold text-[#0A1628] tracking-widest uppercase mb-3">
                Especialidades
              </p>
              <ul className="flex flex-wrap gap-2">
                {specialties.map((s) => (
                  <li
                    key={s}
                    className="text-xs font-medium px-3 py-1.5 rounded-full border border-[#C9A84C]/40 text-[#0A1628] bg-[#C9A84C]/08"
                    style={{ background: "rgba(201,168,76,0.08)" }}
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
