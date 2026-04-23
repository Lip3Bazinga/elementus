"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useInView, useMotionValue, useSpring } from "framer-motion"

const stats = [
  { value: 500, suffix: "+", label: "Marcas registradas" },
  { value: 98, suffix: "%", label: "Taxa de aprovação" },
  { value: 5, suffix: "", label: "Anos de experiência" },
]

function AnimatedCounter({
  value,
  suffix,
  inView,
}: {
  value: number
  suffix: string
  inView: boolean
}) {
  const motionVal = useMotionValue(0)
  const spring = useSpring(motionVal, { stiffness: 60, damping: 20 })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (inView) motionVal.set(value)
  }, [inView, value, motionVal])

  useEffect(() => {
    const unsub = spring.on("change", (v) => setDisplay(Math.round(v)))
    return unsub
  }, [spring])

  return (
    <span className="font-serif text-5xl lg:text-6xl font-bold" style={{ color: "#C9A84C" }}>
      {display}
      {suffix}
    </span>
  )
}

export function StatsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section
      ref={ref}
      className="py-20"
      style={{ background: "#0A1628" }}
    >
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center text-center relative">
              <AnimatedCounter value={stat.value} suffix={stat.suffix} inView={inView} />
              <span className="text-[#8A9BB0] text-base mt-2 tracking-wide">{stat.label}</span>

              {/* Gold vertical divider — not after last */}
              {i < stats.length - 1 && (
                <div
                  className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-12"
                  style={{ background: "rgba(201,168,76,0.3)" }}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
