'use client'

import { motion } from 'motion/react'

const stats = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    value: '<30',
    unit: 'min',
    label: 'Intervention',
    gradient: 'linear-gradient(140deg, oklch(0.75 0.16 65), oklch(0.65 0.18 55))',
    glow: 'oklch(0.70 0.16 60)',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    value: '24',
    unit: 'h/7j',
    label: 'Disponibilité',
    gradient: 'linear-gradient(140deg, oklch(0.80 0.14 60), oklch(0.70 0.16 65))',
    glow: 'oklch(0.78 0.14 60)',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
    value: '0€',
    unit: '',
    label: 'Devis gratuit',
    gradient: 'linear-gradient(140deg, oklch(0.75 0.16 65), oklch(0.65 0.18 50))',
    glow: 'oklch(0.70 0.16 60)',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    value: '50',
    unit: 'km',
    label: 'Zone couverte',
    gradient: 'linear-gradient(140deg, oklch(0.80 0.14 60), oklch(0.70 0.16 65))',
    glow: 'oklch(0.78 0.14 60)',
  },
]

export default function Reassurance() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ backgroundColor: 'var(--background)' }}
    >
      <div className="container-custom relative py-5 lg:py-6">
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-0">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="group flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              {/* Icon orb */}
              <div
                className="relative mb-2 lg:mb-3 transition-transform duration-500 group-hover:scale-110"
                style={{
                  width: 'clamp(2.25rem, 4vw + 0.75rem, 3.25rem)',
                  height: 'clamp(2.25rem, 4vw + 0.75rem, 3.25rem)',
                }}
              >
                {/* Glow behind */}
                <div
                  className="absolute inset-0 rounded-full blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"
                  style={{ background: stat.glow }}
                />
                {/* Circle */}
                <div
                  className="relative w-full h-full rounded-full flex items-center justify-center"
                  style={{
                    background: stat.gradient,
                    boxShadow: `0 4px 20px ${stat.glow}40`,
                  }}
                >
                  <div className="w-[45%] h-[45%] text-white">
                    {stat.icon}
                  </div>
                </div>
              </div>

              {/* Value */}
              <div className="flex items-baseline gap-px justify-center">
                <span
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: 'clamp(1.25rem, 2.5vw + 0.25rem, 1.875rem)',
                    fontWeight: 800,
                    lineHeight: 1.1,
                    color: 'var(--foreground)',
                    letterSpacing: '-0.03em',
                  }}
                >
                  {stat.value}
                </span>
                {stat.unit && (
                  <span
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: 'clamp(0.6875rem, 1vw + 0.125rem, 0.875rem)',
                      fontWeight: 700,
                      color: 'var(--primary)',
                    }}
                  >
                    {stat.unit}
                  </span>
                )}
              </div>

              {/* Label */}
              <span
                className="mt-1"
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 'clamp(0.625rem, 0.5vw + 0.5rem, 0.8125rem)',
                  fontWeight: 500,
                  color: 'var(--muted-foreground)',
                  letterSpacing: '0.01em',
                }}
              >
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
