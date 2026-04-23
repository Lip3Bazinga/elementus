"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const steps = [
  {
    number: "01",
    title: "Análise de Viabilidade",
    description:
      "Verificamos se sua marca está disponível para registro junto ao INPI.",
    icon: SearchIcon,
  },
  {
    number: "02",
    title: "Elaboração do Pedido",
    description:
      "Preparamos toda a documentação necessária para o depósito.",
    icon: FileIcon,
  },
  {
    number: "03",
    title: "Depósito no INPI",
    description:
      "Realizamos o depósito oficial junto ao Instituto Nacional da Propriedade Industrial.",
    icon: SendIcon,
  },
  {
    number: "04",
    title: "Acompanhamento",
    description:
      "Monitoramos todo o processo até a emissão do certificado de registro.",
    icon: ShieldCheckIcon,
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
}

const stepVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
}

export function ProcessSection() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="como-funciona" className="relative pb-0 pt-24" style={{ background: "#0A1628" }}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-xs tracking-[0.25em] font-semibold uppercase mb-3"
            style={{ color: "#C9A84C" }}
          >
            Passo a passo
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-balance"
          >
            Como funciona
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

        {/* Steps */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-4 gap-8 relative"
        >
          {/* Connecting dashed line (desktop) */}
          <div className="hidden md:block absolute top-10 left-[12.5%] right-[12.5%] h-px" style={{ zIndex: 0 }}>
            <svg width="100%" height="2" className="overflow-visible">
              <motion.line
                x1="0"
                y1="1"
                x2="100%"
                y2="1"
                stroke="#C9A84C"
                strokeOpacity="0.4"
                strokeWidth="1.5"
                strokeDasharray="6 4"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={inView ? { pathLength: 1, opacity: 1 } : {}}
                transition={{ duration: 1.2, delay: 0.4, ease: "easeInOut" }}
              />
            </svg>
          </div>

          {steps.map((step, i) => {
            const Icon = step.icon
            return (
              <motion.div
                key={i}
                variants={stepVariants}
                className="relative flex flex-col items-center text-center z-10"
              >
                {/* Number circle */}
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center mb-5 relative"
                  style={{
                    background: "linear-gradient(135deg, #C9A84C, #E8C96A)",
                    boxShadow: "0 0 30px rgba(201,168,76,0.25)",
                  }}
                >
                  <Icon className="w-8 h-8 text-[#0A1628]" />
                  <span
                    className="absolute -top-1 -right-1 w-6 h-6 rounded-full text-xs font-bold flex items-center justify-center text-[#0A1628]"
                    style={{ background: "#E8C96A" }}
                  >
                    {i + 1}
                  </span>
                </div>
                <h3 className="font-serif text-lg font-bold text-white mb-2">{step.title}</h3>
                <p className="text-[#8A9BB0] text-sm leading-relaxed">{step.description}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>

      {/* Diagonal divider: navy → off-white (mirrors the testimonials→team divider) */}
      <div className="relative h-20 w-full overflow-hidden mt-16" aria-hidden="true">
        <svg
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          className="absolute inset-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <polygon points="0,0 1440,0 1440,80" fill="#F8F7F4" />
        </svg>
      </div>
    </section>
  )
}

function SearchIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  )
}

function FileIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <polyline points="10 9 9 9 8 9" />
    </svg>
  )
}

function SendIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="22" y1="2" x2="11" y2="13" />
      <polygon points="22 2 15 22 11 13 2 9 22 2" />
    </svg>
  )
}

function ShieldCheckIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2L3 7v5c0 5.25 3.75 10.15 9 11.25C17.25 22.15 21 17.25 21 12V7L12 2z" />
      <polyline points="9 12 11 14 15 10" />
    </svg>
  )
}
