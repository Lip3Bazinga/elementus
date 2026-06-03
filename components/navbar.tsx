"use client"

import { useState, useEffect } from "react"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import Image from "next/image"

const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Serviços", href: "#servicos" },
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Especialista", href: "#time" },
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

  function handleNavClick(e: React.MouseEvent<HTMLAnchorElement>, href: string) {
    e.preventDefault()
    const id = href.replace("#", "")
    const target = document.getElementById(id)
    if (!target) return

    const navHeight = 80 // h-20 fixed header
    const scrollToTarget = () => {
      // Mede o alvo só depois que o layout estabilizou, senão o `top`
      // fica errado enquanto o menu mobile ainda está colapsando.
      const top = target.getBoundingClientRect().top + window.scrollY - navHeight
      window.scrollTo({ top, behavior: "smooth" })
    }

    if (menuOpen) {
      // No Android, fechar o menu (animação de height do AnimatePresence) causa
      // um reflow que cancela um smooth scroll em andamento. Por isso fechamos
      // primeiro e só scrollamos depois que a animação de fecho (0.35s) termina.
      setMenuOpen(false)
      setTimeout(scrollToTarget, 380)
    } else {
      scrollToTarget()
    }
  }

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
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundColor: `rgba(10, 22, 40, ${bgOpacity.get()})`,
          backdropFilter: `blur(${blurAmount.get()}px)`,
          borderBottom: `1px solid rgba(201,168,76,${borderOpacity.get()})`,
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo 3 — horizontal: wordmark left, symbol right */}
          <motion.a
            href="#inicio"
            className="flex items-center"
            variants={linkVariants}
          >
            <Image
              src="/logo-3.png"
              alt="Elementus Marcas e Patentes"
              className="h-14 w-auto object-contain"
              width={308}
              height={56}
            />
          </motion.a>

          {/* Desktop Nav */}
          <motion.nav
            className="hidden lg:flex items-center gap-7"
            variants={linkContainerVariants}
            initial="hidden"
            animate="visible"
          >
            {navLinks.map((link) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                variants={linkVariants}
                className="text-sm text-[#8A9BB0] hover:text-[#C9A84C] transition-colors duration-200 tracking-wide relative group"
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[#C9A84C] group-hover:w-full transition-all duration-300" />
              </motion.a>
            ))}
          </motion.nav>

          {/* CTA */}
          <motion.div className="hidden lg:flex items-center" variants={ctaVariants} initial="hidden" animate="visible">
            <motion.a
              href="#contato"
              onClick={(e) => handleNavClick(e, "#contato")}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="gold-shimmer-btn px-5 py-2.5 rounded-full text-sm font-semibold text-[#0A1628] tracking-wide"
              style={{
                background: "linear-gradient(135deg, #C9A84C, #E8C96A, #A87C2A)",
              }}
            >
              Proteja sua marca
            </motion.a>
          </motion.div>

          {/* Mobile hamburger */}
          <motion.button
            aria-label="Abrir menu"
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden flex flex-col gap-1.5 p-2"
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
              className="lg:hidden overflow-hidden absolute left-0 right-0 top-full"
              style={{ background: "rgba(10, 22, 40, 0.98)", backdropFilter: "blur(16px)" }}
            >
              <motion.div
                className="flex flex-col gap-4 pb-6 pt-4 px-6"
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
                    onClick={(e) => handleNavClick(e, link.href)}
                    variants={{ hidden: { x: -16, opacity: 0 }, visible: { x: 0, opacity: 1 } }}
                    className="text-[#8A9BB0] hover:text-white transition-colors text-base tracking-wide"
                  >
                    {link.label}
                  </motion.a>
                ))}
                <motion.a
                  href="#contato"
                  onClick={(e) => handleNavClick(e, "#contato")}
                  variants={{ hidden: { opacity: 0, y: 8 }, visible: { opacity: 1, y: 0 } }}
                  className="gold-shimmer-btn w-full text-center px-5 py-3 rounded-full text-sm font-semibold text-[#0A1628] mt-2"
                  style={{
                    background: "linear-gradient(135deg, #C9A84C, #E8C96A, #A87C2A)",
                  }}
                >
                  Proteja sua marca
                </motion.a>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}


