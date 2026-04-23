"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { MapPinIcon, ClockIcon, PhoneIcon, MailIcon } from "lucide-react"

// TODO: Substitua com o endereço real e o link do Google Maps Embed da empresa
const GOOGLE_MAPS_EMBED_SRC =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.0753569726286!2d-46.6557499!3d-23.5613765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1700000000000"

const infos = [
  {
    icon: MapPinIcon,
    label: "Endereço",
    value: "Av. Paulista, 1000 — Sala 800\nBela Vista, São Paulo — SP\nCEP 01310-100",
  },
  {
    icon: ClockIcon,
    label: "Atendimento",
    value: "Segunda a Sexta\n09h às 18h",
  },
  {
    icon: PhoneIcon,
    label: "Telefone",
    value: "+55 (11) 9 0000-0000",
  },
  {
    icon: MailIcon,
    label: "E-mail",
    value: "contato@elementus.com.br",
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
}

export function LocationSection() {
  return (
    <section id="localizacao" className="relative bg-[#0A1628] py-28 overflow-hidden">
      {/* Background grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(201,168,76,1) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,1) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
        >
          <span className="inline-block text-xs font-semibold tracking-[0.2em] text-[#C9A84C] uppercase mb-4">
            Onde Estamos
          </span>
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-white mb-5 text-balance">
            Venha nos{" "}
            <span className="text-[#C9A84C]">conhecer</span>
          </h2>
          <p className="text-[#8A9BB0] max-w-xl mx-auto leading-relaxed">
            Nosso escritório está preparado para recebê-lo com toda a estrutura necessária para uma consultoria completa em propriedade intelectual.
          </p>
        </motion.div>

        {/* Main grid: photo + info | map */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left column: office photo + info cards */}
          <div className="flex flex-col gap-6">
            {/* Office image */}
            <motion.div
              className="relative rounded-2xl overflow-hidden h-72 lg:h-80 shadow-2xl"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <Image
                src="/images/office.jpg"
                alt="Interior do escritório Elementus Marcas e Patentes"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Gold corner accent */}
              <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-[#C9A84C]/90 backdrop-blur-sm">
                <span className="text-xs font-semibold text-[#0A1628] tracking-wide">
                  Nosso Escritório
                </span>
              </div>
            </motion.div>

            {/* Info cards */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
              }}
            >
              {infos.map((item) => {
                const Icon = item.icon
                return (
                  <motion.div
                    key={item.label}
                    variants={fadeUp}
                    className="flex items-start gap-4 bg-white/5 border border-white/8 rounded-xl p-4 backdrop-blur-sm hover:border-[#C9A84C]/30 transition-colors duration-300"
                  >
                    <div className="shrink-0 w-9 h-9 flex items-center justify-center rounded-lg bg-[#C9A84C]/10 border border-[#C9A84C]/25">
                      <Icon className="w-4 h-4 text-[#C9A84C]" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-[#C9A84C] uppercase tracking-wide mb-1">
                        {item.label}
                      </p>
                      <p className="text-sm text-[#CBD5E0] leading-relaxed whitespace-pre-line">
                        {item.value}
                      </p>
                    </div>
                  </motion.div>
                )
              })}
            </motion.div>
          </div>

          {/* Right column: Google Maps embed */}
          <motion.div
            className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/8 min-h-[420px]"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Map gold overlay frame */}
            <div className="absolute inset-0 ring-1 ring-[#C9A84C]/20 rounded-2xl pointer-events-none z-10" />

            <iframe
              src={GOOGLE_MAPS_EMBED_SRC}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "420px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização do escritório Elementus Marcas e Patentes"
              className="w-full h-full"
            />

            {/* CTA over map */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20">
              <a
                href={`https://www.google.com/maps/search/?api=1&query=Av.+Paulista+1000+São+Paulo`}
                target="_blank"
                rel="noopener noreferrer"
                className="gold-shimmer-btn flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-[#0A1628] shadow-lg whitespace-nowrap"
                style={{ background: "linear-gradient(135deg, #C9A84C, #E8C96A, #A87C2A)" }}
              >
                <MapPinIcon className="w-4 h-4" />
                Abrir no Google Maps
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
