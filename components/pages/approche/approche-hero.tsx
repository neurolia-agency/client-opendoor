'use client'

import { motion } from 'motion/react'
import Image from 'next/image'
import { Heart, Eye, Shield } from 'lucide-react'

const anchors = [
  { icon: Heart, label: 'Empathie', href: '#mission', stat: 'Écoute active', num: '01' },
  { icon: Eye, label: 'Transparence', href: '#vision', stat: 'Tarifs clairs', num: '02' },
  { icon: Shield, label: 'Rigueur', href: '#valeurs', stat: 'Zéro compromis', num: '03' },
]

export default function ApprocheHero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/approche-hero.webp"
          alt="Portrait serrurier OPENDOOR, approche humaine"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </div>

      {/* Gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(150deg,
              oklch(0.18 0.05 35 / 0.92) 0%,
              oklch(0.28 0.08 42 / 0.85) 35%,
              oklch(0.38 0.12 50 / 0.75) 65%,
              oklch(0.45 0.13 55 / 0.70) 100%
            )
          `,
        }}
      />

      {/* Subtle radial glow */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 60% 70% at 75% 30%,
              oklch(0.65 0.14 60 / 0.12) 0%,
              transparent 60%
            )
          `,
        }}
      />

      {/* Ghosted vertical brand name */}
      <motion.div
        className="absolute right-6 lg:right-12 top-1/2 -translate-y-1/2 pointer-events-none select-none hidden lg:block"
        style={{
          fontFamily: 'var(--font-heading)',
          fontSize: 'clamp(5rem, 8vw, 8rem)',
          fontWeight: 600,
          lineHeight: 1,
          color: 'rgba(255, 255, 255, 0.02)',
          letterSpacing: '0.05em',
          writingMode: 'vertical-rl',
          textTransform: 'uppercase',
        }}
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
      >
        Opendoor
      </motion.div>

      {/* Content — asymmetric two-zone layout */}
      <div className="container-custom relative z-10 min-h-screen flex flex-col">

        {/* Top zone — title area with asymmetric split */}
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 items-end pt-32 lg:pt-40 pb-12 lg:pb-20 gap-6 lg:gap-0">

          {/* Left: Title block — spans 7 cols, bottom-aligned */}
          <div className="lg:col-span-7">
            {/* Decorative accent line */}
            <motion.div
              className="mb-6"
              style={{
                width: '3rem',
                height: '3px',
                background: 'linear-gradient(90deg, oklch(0.70 0.16 60), oklch(0.78 0.14 60))',
                borderRadius: '2px',
              }}
              initial={{ scaleX: 0, originX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            />

            <motion.span
              className="block mb-2"
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.8125rem',
                fontWeight: 500,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: 'oklch(0.70 0.16 60)',
              }}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            >
              Notre façon de travailler
            </motion.span>

            <motion.h1
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(3rem, 7vw + 0.5rem, 5.5rem)',
                fontWeight: 600,
                lineHeight: 1.0,
                letterSpacing: '-0.01em',
                color: 'white',
              }}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              Notre<br />
              <span style={{ color: 'oklch(0.78 0.14 60)', fontStyle: 'italic' }}>approche</span>
            </motion.h1>
          </div>

          {/* Right: Subtitle block — spans 4 cols, offset start, bottom-aligned */}
          <motion.div
            className="lg:col-span-4 lg:col-start-9 flex flex-col justify-end"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          >
            <p
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(1.125rem, 1.5vw + 0.5rem, 1.375rem)',
                lineHeight: 1.55,
                color: 'rgba(255, 255, 255, 0.85)',
                fontStyle: 'italic',
              }}
            >
              Empathie, transparence et rigueur. Parce que derrière chaque porte, il y a une personne qui compte.
            </p>
            {/* Horizontal accent on desktop */}
            <div
              className="hidden lg:block mt-5 ml-auto"
              style={{
                width: '3rem',
                height: '1px',
                background: 'linear-gradient(to right, transparent, oklch(0.70 0.16 60 / 0.6))',
              }}
            />
          </motion.div>
        </div>

        {/* Bottom zone — anchor cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-5 pb-8 lg:pb-10">
          {anchors.map((anchor, index) => (
            <motion.div
              key={anchor.label}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ y: -6 }}
              transition={{
                duration: 0.5,
                delay: 0.35 + index * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <div
                style={{
                  background: 'rgba(255, 251, 240, 0.045)',
                  backdropFilter: 'blur(12px)',
                  WebkitBackdropFilter: 'blur(12px)',
                  border: '1px solid rgba(255, 251, 240, 0.10)',
                  borderRadius: 'var(--radius-xl)',
                  padding: '1.25rem 1.5rem',
                  boxShadow: '0 4px 24px rgba(20, 12, 4, 0.25), inset 0 1px 0 rgba(255, 251, 240, 0.06)',
                  transition: 'transform var(--transition-standard), box-shadow var(--transition-standard), border-color var(--transition-standard)',
                }}
              >
                <div className="flex items-center gap-4">
                  {/* Number accent */}
                  <span
                    className="shrink-0"
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '0.6875rem',
                      fontWeight: 700,
                      color: 'oklch(0.70 0.16 60 / 0.4)',
                      letterSpacing: '0.05em',
                      marginRight: '-0.25rem',
                    }}
                  >
                    {anchor.num}
                  </span>

                  <span
                    className="flex items-center justify-center w-10 h-10 shrink-0"
                    style={{
                      background: 'linear-gradient(135deg, oklch(0.70 0.16 60) 0%, oklch(0.62 0.17 55) 100%)',
                      borderRadius: 'var(--radius-md)',
                      boxShadow: '0 4px 16px rgba(217, 119, 6, 0.3)',
                    }}
                  >
                    <anchor.icon className="w-4 h-4 text-white" strokeWidth={2.5} />
                  </span>

                  <div className="flex-1">
                    <span
                      className="block"
                      style={{
                        fontFamily: 'var(--font-body)',
                        fontWeight: 600,
                        fontSize: '0.9375rem',
                        color: 'rgba(255, 255, 255, 0.9)',
                        letterSpacing: '0.01em',
                      }}
                    >
                      {anchor.label}
                    </span>
                    <span
                      className="block"
                      style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.75rem',
                        color: 'oklch(0.70 0.16 60 / 0.7)',
                        fontWeight: 500,
                      }}
                    >
                      {anchor.stat}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
