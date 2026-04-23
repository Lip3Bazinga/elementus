"use client"

import { useState, useEffect } from "react"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"

const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Serviços", href: "#servicos" },
  { label: "Como Funciona", href: "#como-funciona" },
  { label: "Time", href: "#time" },
  { label: "Localização", href: "#localizacao" },
  { label: "Contato", href: "#contato" },
]

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { scrollY } = useScroll()

  const bgOpacity = useTransform(scrollY, [0, 80], [0, 0.97])
  const blurAmount = useTransform(scrollY, [0, 80], [0, 14])
  const borderOpacity = useTransform(scrollY, [0, 80], [0, 0.18])

  useEffect(() => {
    const unsub = scrollY.on("change", (v) => setScrolled(v > 20))
    return unsub
  }, [scrollY])

  // Entrance animation: slide down from above with stagger on links
  const headerVariants = {
    hidden: { y: -90, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  }

  const linkContainerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.07, delayChildren: 0.45 },
    },
  }

  const linkVariants = {
    hidden: { opacity: 0, y: -12 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
  }

  const ctaVariants = {
    hidden: { opacity: 0, scale: 0.85 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, delay: 0.85, ease: [0.22, 1, 0.36, 1] },
    },
  }

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50"
      variants={headerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Scrolled background layer — driven by scroll values */}
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundColor: `rgba(10, 22, 40, ${bgOpacity.get()})`,
          backdropFilter: `blur(${blurAmount.get()}px)`,
          borderBottom: `1px solid rgba(201,168,76,${borderOpacity.get()})`,
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <motion.a
            href="#inicio"
            className="flex items-center gap-3"
            variants={linkVariants}
          >
            <ShieldIcon className="w-8 h-8 text-[#C9A84C]" />
            <span className="font-serif text-xl font-bold tracking-wide text-white">
              ELEMENTUS
            </span>
          </motion.a>

          {/* Desktop Nav */}
          <motion.nav
            className="hidden md:flex items-center gap-7"
            variants={linkContainerVariants}
            initial="hidden"
            animate="visible"
          >
            {navLinks.map((link) => (
              <motion.a
                key={link.href}
                href={link.href}
                variants={linkVariants}
                className="text-sm text-[#8A9BB0] hover:text-[#C9A84C] transition-colors duration-200 tracking-wide relative group"
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[#C9A84C] group-hover:w-full transition-all duration-300" />
              </motion.a>
            ))}
          </motion.nav>

          {/* CTA */}
          <motion.div className="hidden md:flex items-center" variants={ctaVariants} initial="hidden" animate="visible">
            <motion.a
              href="#contato"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="gold-shimmer-btn px-5 py-2.5 rounded-full text-sm font-semibold text-[#0A1628] tracking-wide"
              style={{
                background: "linear-gradient(135deg, #C9A84C, #E8C96A, #A87C2A)",
              }}
            >
              Proteja sua Marca
            </motion.a>
          </motion.div>

          {/* Mobile hamburger */}
          <motion.button
            aria-label="Abrir menu"
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            variants={ctaVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.span
              animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.25 }}
              className="block w-6 h-0.5 bg-white origin-center"
            />
            <motion.span
              animate={menuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.2 }}
              className="block w-6 h-0.5 bg-white"
            />
            <motion.span
              animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.25 }}
              className="block w-6 h-0.5 bg-white origin-center"
            />
          </motion.button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              key="mobile-menu"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="md:hidden overflow-hidden"
            >
              <motion.div
                className="flex flex-col gap-4 pb-6 pt-2"
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {},
                  visible: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
                }}
              >
                {navLinks.map((link) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    variants={{ hidden: { x: -16, opacity: 0 }, visible: { x: 0, opacity: 1 } }}
                    className="text-[#8A9BB0] hover:text-white transition-colors text-base tracking-wide"
                  >
                    {link.label}
                  </motion.a>
                ))}
                <motion.a
                  href="#contato"
                  onClick={() => setMenuOpen(false)}
                  variants={{ hidden: { opacity: 0, y: 8 }, visible: { opacity: 1, y: 0 } }}
                  className="gold-shimmer-btn w-full text-center px-5 py-3 rounded-full text-sm font-semibold text-[#0A1628] mt-2"
                  style={{
                    background: "linear-gradient(135deg, #C9A84C, #E8C96A, #A87C2A)",
                  }}
                >
                  Proteja sua Marca
                </motion.a>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
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
