'use client'

import { motion } from 'motion/react'

export default function ContactHero() {
  return (
    <section className="relative pt-40 pb-16 lg:pt-48 lg:pb-20 overflow-hidden" style={{ backgroundColor: 'var(--background)' }}>

      <div className="container-custom relative z-10">
        <div className="max-w-3xl">
          {/* Overline */}
          <motion.span
            className="overline block mb-5"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            Contact
          </motion.span>

          {/* Main heading — Cormorant Garamond for editorial warmth */}
          <motion.h1
            className="text-balance mb-6"
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(2.75rem, 6vw + 0.5rem, 4.5rem)',
              fontWeight: 500,
              lineHeight: 1.08,
              letterSpacing: '-0.02em',
              color: 'var(--foreground)',
              textTransform: 'none',
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
          >
            Parlons de votre projet.
          </motion.h1>

          {/* Baseline */}
          <motion.p
            className="text-balance"
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'clamp(1.0625rem, 1.5vw + 0.5rem, 1.25rem)',
              lineHeight: 1.65,
              color: 'var(--muted-foreground)',
              maxWidth: '34rem',
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            Urgence ou simple question, nous sommes disponibles pour vous répondre. Choisissez le moyen qui vous convient.
          </motion.p>
        </div>
      </div>

      {/* Accent line — decorative horizontal rule */}
      <motion.div
        className="container-custom relative z-10 mt-12 lg:mt-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <div
          style={{
            height: '1px',
            background: 'linear-gradient(90deg, var(--primary), oklch(0.92 0.06 60 / 0.3), transparent)',
          }}
        />
      </motion.div>
    </section>
  )
}
