"use client"

import { useState } from "react"
import { motion } from "framer-motion"

interface FormData {
  name: string
  email: string
  phone: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  phone?: string
  message?: string
}

export function ContactSection() {
  const [form, setForm] = useState<FormData>({ name: "", email: "", phone: "", message: "" })
  const [errors, setErrors] = useState<FormErrors>({})
  const [submitted, setSubmitted] = useState(false)

  function validate(): boolean {
    const e: FormErrors = {}
    if (!form.name.trim()) e.name = "Nome é obrigatório"
    if (!form.email.trim()) e.email = "E-mail é obrigatório"
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "E-mail inválido"
    if (!form.phone.trim()) e.phone = "Telefone é obrigatório"
    if (!form.message.trim()) e.message = "Mensagem é obrigatória"
    setErrors(e)
    return Object.keys(e).length === 0
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (validate()) setSubmitted(true)
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    setErrors((prev) => ({ ...prev, [e.target.name]: undefined }))
  }

  const inputClass =
    "w-full rounded-lg px-4 py-3.5 text-white text-sm outline-none transition-all duration-200 focus:outline-2 focus:outline-[#C9A84C] bg-white/5 border border-white/10 focus:border-[#C9A84C] placeholder:text-[#8A9BB0]"

  return (
    <section id="contato" className="relative py-24 overflow-hidden" style={{ background: "#0A1628" }}>
      {/* Radial gold glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, rgba(201,168,76,0.08) 0%, transparent 65%)",
        }}
      />

      <div className="relative z-10 max-w-2xl mx-auto px-6 text-center">
        {/* Header */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-xs tracking-[0.25em] font-semibold uppercase mb-3"
          style={{ color: "#C9A84C" }}
        >
          Fale conosco
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-balance mb-4"
        >
          Pronto para proteger sua marca?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-[#8A9BB0] leading-relaxed mb-10"
        >
          Entre em contato agora e receba uma análise de viabilidade gratuita.
        </motion.p>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="rounded-2xl p-10 text-center"
            style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(201,168,76,0.3)",
            }}
          >
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
              style={{ background: "linear-gradient(135deg, #C9A84C, #E8C96A)" }}
            >
              <CheckIcon className="w-8 h-8 text-[#0A1628]" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-white mb-2">Mensagem enviada!</h3>
            <p className="text-[#8A9BB0]">Nossa equipe entrará em contato em breve.</p>
          </motion.div>
        ) : (
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.3 }}
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 text-left"
            noValidate
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Seu nome"
                  value={form.name}
                  onChange={handleChange}
                  className={inputClass}
                />
                {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Seu e-mail"
                  value={form.email}
                  onChange={handleChange}
                  className={inputClass}
                />
                {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
              </div>
            </div>
            <div>
              <input
                type="tel"
                name="phone"
                placeholder="Seu telefone"
                value={form.phone}
                onChange={handleChange}
                className={inputClass}
              />
              {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone}</p>}
            </div>
            <div>
              <textarea
                name="message"
                placeholder="Conte-nos sobre sua marca..."
                rows={4}
                value={form.message}
                onChange={handleChange}
                className={inputClass + " resize-none"}
              />
              {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="gold-shimmer-btn w-full py-4 rounded-xl font-semibold text-[#0A1628] text-base tracking-wide mt-1"
              style={{ background: "linear-gradient(135deg, #C9A84C, #E8C96A, #A87C2A)" }}
            >
              Enviar mensagem
            </motion.button>
          </motion.form>
        )}

        {/* WhatsApp CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-6"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="flex-1 h-px" style={{ background: "rgba(201,168,76,0.2)" }} />
            <span className="text-[#8A9BB0] text-xs">ou</span>
            <div className="flex-1 h-px" style={{ background: "rgba(201,168,76,0.2)" }} />
          </div>
          <motion.a
            href="https://wa.me/5500000000000"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full flex items-center justify-center gap-3 py-4 rounded-xl font-semibold text-white text-base"
            style={{
              background: "#25D366",
              boxShadow: "0 4px 24px rgba(37,211,102,0.25)",
            }}
          >
            <WhatsAppIcon className="w-5 h-5" />
            Falar no WhatsApp
          </motion.a>
        </motion.div>
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

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}
