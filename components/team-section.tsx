"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { LinkedinIcon, ScaleIcon, ShieldIcon, SearchIcon } from "lucide-react"

const team = [
  {
    name: "Ana Beatriz Fontes",
    role: "Sócia Fundadora",
    specialty: "Registro de Marcas & PI Estratégica",
    bio: "Advogada com mais de 12 anos de experiência em propriedade intelectual, atuando em casos nacionais e internacionais. Especialista em estratégia de portfólio de marcas.",
    photo: "/images/team-ana.jpg",
    icon: ShieldIcon,
    oab: "OAB/SP 345.678",
    linkedin: "#",
  },
  {
    name: "Carlos Eduardo Melo",
    role: "Sócio",
    specialty: "Patentes & Inovação Tecnológica",
    bio: "Engenheiro de formação e advogado por vocação. Especialista em patentes de software, biotecnologia e equipamentos industriais, com sólida atuação junto ao INPI.",
    photo: "/images/team-carlos.jpg",
    icon: ScaleIcon,
    oab: "OAB/RJ 198.432",
    linkedin: "#",
  },
  {
    name: "Paula Rodrigues",
    role: "Especialista em Marcas",
    specialty: "Busca, Análise e Oposição de Marcas",
    bio: "Responsável pela equipe de pesquisa e análise de viabilidade de registro, com expertise em processos de oposição e nulidade administrativa junto ao INPI.",
    photo: "/images/team-paula.jpg",
    icon: SearchIcon,
    oab: "OAB/MG 421.109",
    linkedin: "#",
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.18, delayChildren: 0.1 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
}

export function TeamSection() {
  return (
    <section
      id="time"
      className="relative py-28 bg-[#F8F7F4] overflow-hidden"
    >
      {/* Subtle top diagonal divider */}
      <div
        className="absolute top-0 left-0 right-0 h-20 bg-[#0A1628]"
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 0)" }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="inline-block text-xs font-semibold tracking-[0.2em] text-[#C9A84C] uppercase mb-4">
            Nosso Time
          </span>
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-[#0A1628] mb-5 text-balance">
            Especialistas que defendem{" "}
            <span className="text-[#C9A84C]">sua marca</span>
          </h2>
          <p className="text-[#4A5568] max-w-2xl mx-auto leading-relaxed">
            Uma equipe multidisciplinar com décadas de experiência combinada em propriedade intelectual, marcas, patentes e estratégia empresarial.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {team.map((member) => {
            const Icon = member.icon
            return (
              <motion.div
                key={member.name}
                variants={cardVariants}
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
                className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-400 border border-[#E8E4DC]"
              >
                {/* Photo */}
                <div className="relative h-72 overflow-hidden">
                  <Image
                    src={member.photo}
                    alt={`Foto de ${member.name}`}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  {/* Gold gradient overlay at bottom */}
                  <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0A1628]/80 to-transparent" />
                  {/* Role badge */}
                  <div className="absolute bottom-4 left-4 flex items-center gap-2">
                    <span className="flex items-center justify-center w-7 h-7 rounded-full bg-[#C9A84C]">
                      <Icon className="w-3.5 h-3.5 text-[#0A1628]" />
                    </span>
                    <span className="text-xs font-semibold text-white tracking-wide">
                      {member.role}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-1">
                    <h3 className="font-serif text-xl font-bold text-[#0A1628]">
                      {member.name}
                    </h3>
                    <a
                      href={member.linkedin}
                      aria-label={`LinkedIn de ${member.name}`}
                      className="w-8 h-8 flex items-center justify-center rounded-full bg-[#F0EDE8] hover:bg-[#C9A84C] transition-colors duration-200 shrink-0 mt-0.5"
                    >
                      <LinkedinIcon className="w-4 h-4 text-[#0A1628]" />
                    </a>
                  </div>
                  <p className="text-xs font-semibold text-[#C9A84C] tracking-wide uppercase mb-3">
                    {member.specialty}
                  </p>
                  <p className="text-sm text-[#4A5568] leading-relaxed mb-4">
                    {member.bio}
                  </p>
                  <div className="pt-4 border-t border-[#E8E4DC]">
                    <span className="text-xs text-[#8A9BB0] font-mono">{member.oab}</span>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
