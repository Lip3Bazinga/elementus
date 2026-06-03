"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"

const REDIRECT_DELAY = 10

export default function ObrigadoPage() {
  const router = useRouter()
  const [countdown, setCountdown] = useState(REDIRECT_DELAY)

  useEffect(() => {
    if (countdown <= 0) {
      router.push("/")
      return
    }
    const timer = setInterval(() => setCountdown((prev) => prev - 1), 1000)
    return () => clearInterval(timer)
  }, [countdown, router])

  return (
    <main
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 py-16"
      style={{ background: "#0A1628" }}
    >
      {/* Radial gold glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse at center, rgba(201,168,76,0.08) 0%, transparent 65%)" }}
      />

      {/* Background glow effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-1/4 left-1/4 w-48 h-48 rounded-full blur-3xl animate-pulse"
          style={{ background: "rgba(201,168,76,0.15)" }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full blur-3xl animate-pulse"
          style={{ background: "rgba(201,168,76,0.1)", animationDelay: "0.5s" }}
        />
      </div>

      <div className="relative z-10 text-center max-w-lg mx-auto">
        {/* Success Icon with rings */}
        <div className="relative mb-8">
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className="w-28 h-28 rounded-full animate-ping"
              style={{ background: "rgba(201,168,76,0.2)", animationDuration: "2s" }}
            />
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className="w-28 h-28 rounded-full animate-ping"
              style={{ background: "rgba(201,168,76,0.1)", animationDuration: "2s", animationDelay: "0.3s" }}
            />
          </div>

          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="relative w-24 h-24 mx-auto rounded-full flex items-center justify-center"
            style={{
              background: "linear-gradient(135deg, #C9A84C, #E8C96A)",
              boxShadow: "0 8px 32px rgba(201,168,76,0.4)",
            }}
          >
            <motion.svg
              className="w-12 h-12 text-[#0A1628]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <motion.path
                d="M5 13l4 4L19 7"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              />
            </motion.svg>
          </motion.div>
        </div>

        {/* Text */}
        <motion.div
          className="space-y-3 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-white">Obrigado!</h1>
          <p className="text-[#E8C96A] text-lg">Sua mensagem foi enviada com sucesso.</p>
          <p className="text-[#8A9BB0]">Entrarei em contato em breve.</p>
        </motion.div>

        {/* Countdown */}
        <motion.div
          className="mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <div
            className="inline-flex items-center gap-2 rounded-full px-5 py-2.5"
            style={{ background: "rgba(201,168,76,0.1)", border: "1px solid rgba(201,168,76,0.2)" }}
          >
            <HomeIcon className="w-4 h-4 text-[#C9A84C]" />
            <span className="text-[#8A9BB0] text-sm">Voltando ao início em</span>
            <span className="text-2xl font-bold text-[#C9A84C] tabular-nums min-w-[2ch]">{countdown}</span>
            <span className="text-[#8A9BB0] text-sm">s</span>
          </div>
        </motion.div>

        {/* Progress Bar */}
        <motion.div
          className="w-full max-w-xs mx-auto mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div className="h-1 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.1)" }}>
            <div
              className="h-full rounded-full transition-all duration-1000 ease-linear"
              style={{
                background: "linear-gradient(90deg, #C9A84C, #E8C96A)",
                width: `${((REDIRECT_DELAY - countdown) / REDIRECT_DELAY) * 100}%`,
              }}
            />
          </div>
        </motion.div>

        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          onClick={() => router.push("/")}
          className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-[#0A1628] text-sm transition-all hover:scale-105"
          style={{ background: "linear-gradient(135deg, #C9A84C, #E8C96A)" }}
        >
          <ArrowLeftIcon className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          Voltar para o início
        </motion.button>
      </div>
    </main>
  )
}

function HomeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  )
}

function ArrowLeftIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="19" y1="12" x2="5" y2="12" />
      <polyline points="12 19 5 12 12 5" />
    </svg>
  )
}
