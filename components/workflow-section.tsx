"use client"

import { motion } from "framer-motion"
import {
  SendIcon,
  SearchIcon,
  FileTextIcon,
  PenLineIcon,
  UploadIcon,
  AwardIcon,
} from "lucide-react"

const steps = [
  {
    number: "01",
    title: "Envie sua marca",
    description:
      "Você envia o nome da marca que deseja registrar. Se já tiver um logotipo, pode enviar também — mas não é obrigatório.",
    icon: SendIcon,
  },
  {
    number: "02",
    title: "Pesquisa de viabilidade",
    description:
      "Faço a pesquisa junto ao INPI para verificar se o registro é viável. Se houver conflitos, te informo antes de prosseguir.",
    icon: SearchIcon,
  },
  {
    number: "03",
    title: "Apenas 3 documentos",
    description:
      "Sendo viável, envio somente 3 documentos: procuração, contrato de honorários e guia de custas do INPI. Simples assim.",
    icon: FileTextIcon,
  },
  {
    number: "04",
    title: "Assinatura flexível",
    description:
      "Você devolve os documentos assinados — pode ser assinatura física (foto ou digitalizado) ou digital — e o comprovante de pagamento da guia.",
    icon: PenLineIcon,
  },
  {
    number: "05",
    title: "Protocolo no INPI",
    description:
      "Protocolo o pedido no INPI e envio o comprovante com o número do processo. A partir daí, acompanho tudo por você.",
    icon: UploadIcon,
  },
  {
    number: "06",
    title: "Certificado digital",
    description:
      "Quando o INPI conceder o registro, o certificado é emitido de forma online. Faço o download e encaminho diretamente para você.",
    icon: AwardIcon,
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
}

export function WorkflowSection() {
  return (
    <section
      id="comunicacao"
      className="relative py-24 overflow-hidden"
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
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center top, rgba(201,168,76,0.08), transparent 70%)",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="inline-block text-xs font-semibold tracking-[0.2em] text-[#C9A84C] uppercase mb-4">
            Na prática
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5 text-balance">
            Simples, rápido e{" "}
            <span className="text-[#C9A84C]">100% online</span>
          </h2>
          <p className="text-[#8A9BB0] max-w-2xl mx-auto leading-relaxed">
            Do primeiro contato ao certificado de registro, todo o processo é
            feito de forma digital. Sem burocracia, sem deslocamentos.
          </p>
        </motion.div>

        {/* Steps grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {steps.map((step) => {
            const Icon = step.icon
            return (
              <motion.div
                key={step.number}
                variants={cardVariants}
                className="group relative p-6 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm hover:bg-white/[0.05] hover:border-[#C9A84C]/30 transition-all duration-300"
              >
                {/* Number watermark */}
                <span className="absolute top-4 right-4 text-5xl font-serif font-bold text-white/[0.04] select-none">
                  {step.number}
                </span>

                {/* Icon */}
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-gradient-to-br from-[#C9A84C]/20 to-[#C9A84C]/5 border border-[#C9A84C]/20 group-hover:border-[#C9A84C]/40 transition-colors">
                  <Icon className="w-5 h-5 text-[#C9A84C]" />
                </div>

                {/* Content */}
                <h3 className="font-semibold text-lg text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-[#8A9BB0] leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Bottom highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-[#C9A84C]/30 bg-[#C9A84C]/5">
            <span className="w-2 h-2 rounded-full bg-[#C9A84C] animate-pulse" />
            <span className="text-sm font-medium text-[#C9A84C]">
              Atendimento direto com o advogado responsável
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
