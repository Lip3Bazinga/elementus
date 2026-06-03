"use client"

import { motion } from "framer-motion"

const services = [
  {
    title: "Registro de Marcas",
    description:
      "Depósito junto ao INPI com acompanhamento completo em todas as etapas do processo, fortalecendo e valorizando sua marca.",
    icon: TagIcon,
  },
  {
    title: "Patentes",
    description:
      "Proteção de invenções e modelos de utilidade, garantindo exclusividade e segurança para inovações.",
    icon: LightBulbIcon,
  },
  {
    title: "Desenho Industrial",
    description:
      "Registro da identidade visual e design de produtos para proteger a estética da sua criação.",
    icon: PaletteIcon,
  },
  {
    title: "Programas de Computador",
    description:
      "Proteção de software e aplicativos com segurança jurídica para seu patrimônio digital.",
    icon: MonitorIcon,
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
}

export function ServicesSection() {
  return (
    <section id="servicos" className="py-24" style={{ background: "#F8F7F4" }}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5 }}
            className="text-xs tracking-[0.25em] font-semibold uppercase mb-3"
            style={{ color: "#C9A84C" }}
          >
            Nossas especialidades
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-balance"
            style={{ color: "#0A1628" }}
          >
            O que fazemos
          </motion.h2>
          {/* Gold underline */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 60 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-0.5 mx-auto mt-4"
            style={{ background: "linear-gradient(135deg, #C9A84C, #E8C96A, #A87C2A)" }}
          />
        </div>

        {/* Cards grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          {services.map((service, i) => {
            const Icon = service.icon
            return (
              <motion.div
                key={i}
                variants={cardVariants}
                whileHover={{
                  y: -8,
                  boxShadow: "0 20px 40px rgba(201,168,76,0.2)",
                  transition: { type: "spring", stiffness: 300 },
                }}
                className="bg-white rounded-2xl p-8 flex flex-col gap-5 cursor-default"
                style={{ border: "1px solid rgba(201,168,76,0.25)" }}
              >
                {/* Icon circle */}
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background: "linear-gradient(135deg, #C9A84C, #E8C96A)" }}
                >
                  <Icon className="w-6 h-6 text-[#0A1628]" />
                </div>
                <div>
                  <h3
                    className="font-serif text-xl font-bold mb-2"
                    style={{ color: "#0A1628" }}
                  >
                    {service.title}
                  </h3>
                  <p className="text-[#8A9BB0] leading-relaxed text-sm">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

function TagIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z" />
      <line x1="7" y1="7" x2="7.01" y2="7" />
    </svg>
  )
}

function LightBulbIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="9" y1="18" x2="15" y2="18" />
      <line x1="10" y1="22" x2="14" y2="22" />
      <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0018 8 6 6 0 006 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 018.91 14" />
    </svg>
  )
}

function PaletteIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="13.5" cy="6.5" r=".5" fill="currentColor" />
      <circle cx="17.5" cy="10.5" r=".5" fill="currentColor" />
      <circle cx="8.5" cy="7.5" r=".5" fill="currentColor" />
      <circle cx="6.5" cy="12.5" r=".5" fill="currentColor" />
      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 011.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
    </svg>
  )
}

function MonitorIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
      <line x1="8" y1="21" x2="16" y2="21" />
      <line x1="12" y1="17" x2="12" y2="21" />
    </svg>
  )
}
