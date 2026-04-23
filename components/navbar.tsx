"use client"

import { useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Serviços", href: "#servicos" },
  { label: "Como Funciona", href: "#como-funciona" },
  { label: "Sobre", href: "#diferenciais" },
  { label: "Contato", href: "#contato" },
]

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { scrollY } = useScroll()

  const bgOpacity = useTransform(scrollY, [0, 80], [0, 0.95])
  const blurAmount = useTransform(scrollY, [0, 80], [0, 12])

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        backgroundColor: `rgba(10, 22, 40, ${bgOpacity.get()})`,
      }}
    >
      <motion.div
        className="absolute inset-0 border-b border-transparent"
        style={{
          backgroundColor: bgOpacity.get() > 0.1 ? `rgba(10,22,40,${bgOpacity.get()})` : "transparent",
          backdropFilter: `blur(${blurAmount.get()}px)`,
          borderBottomColor: bgOpacity.get() > 0.1 ? "rgba(201,168,76,0.15)" : "transparent",
        }}
      />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#inicio" className="flex items-center gap-3">
            <ShieldIcon className="w-8 h-8 text-[#C9A84C]" />
            <span className="font-serif text-xl font-bold tracking-wide text-white">
              ELEMENTUS
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-[#8A9BB0] hover:text-white transition-colors duration-200 tracking-wide"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center">
            <motion.a
              href="#contato"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="gold-shimmer-btn px-5 py-2.5 rounded-full text-sm font-semibold text-[#0A1628] tracking-wide"
              style={{
                background: "linear-gradient(135deg, #C9A84C, #E8C96A, #A87C2A)",
              }}
            >
              Proteja sua Marca
            </motion.a>
          </div>

          {/* Mobile hamburger */}
          <button
            aria-label="Abrir menu"
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
          >
            <motion.span
              animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              className="block w-6 h-0.5 bg-white origin-center transition-transform"
            />
            <motion.span
              animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
              className="block w-6 h-0.5 bg-white"
            />
            <motion.span
              animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              className="block w-6 h-0.5 bg-white origin-center transition-transform"
            />
          </button>
        </div>

        {/* Mobile menu */}
        <motion.div
          initial={false}
          animate={menuOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="md:hidden overflow-hidden"
        >
          <div className="flex flex-col gap-4 pb-6 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-[#8A9BB0] hover:text-white transition-colors text-base tracking-wide"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contato"
              onClick={() => setMenuOpen(false)}
              className="gold-shimmer-btn w-full text-center px-5 py-3 rounded-full text-sm font-semibold text-[#0A1628] mt-2"
              style={{
                background: "linear-gradient(135deg, #C9A84C, #E8C96A, #A87C2A)",
              }}
            >
              Proteja sua Marca
            </a>
          </div>
        </motion.div>
      </div>
    </motion.header>
  )
}

function ShieldIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 2L3 7v5c0 5.25 3.75 10.15 9 11.25C17.25 22.15 21 17.25 21 12V7L12 2z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  )
}
