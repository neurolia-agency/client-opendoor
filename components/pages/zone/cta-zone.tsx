'use client'

import { motion } from 'motion/react'
import Link from 'next/link'
import { Phone, ArrowRight } from 'lucide-react'

export default function CtaZone() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Warm gradient background */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(160deg,
              oklch(0.68 0.16 58) 0%,
              oklch(0.58 0.17 52) 40%,
              oklch(0.48 0.14 45) 100%
            )
          `,
        }}
      />

      {/* Soft radial accent */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 60% 50% at 50% 30%,
              oklch(0.82 0.14 60 / 0.20) 0%,
              transparent 60%
            )
          `,
        }}
      />

      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Heading */}
          <motion.h2
            className="text-balance mb-4"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.75rem, 4vw + 0.5rem, 2.75rem)',
              color: 'white',
              fontWeight: 700,
              lineHeight: 1.15,
              textTransform: 'uppercase',
              letterSpacing: '-0.02em',
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          >
            Vous êtes dans notre zone ?
          </motion.h2>

          {/* Subheading */}
          <motion.p
            className="mb-10"
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'clamp(1.0625rem, 1.5vw + 0.5rem, 1.25rem)',
              color: 'rgba(255, 255, 255, 0.75)',
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
          >
            Nous intervenons en moins de 30 minutes, 24h/24
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {/* Primary CTA — Phone */}
            <motion.a
              href="tel:0789081857"
              className="group relative flex items-center gap-3.5 px-8 py-4 lg:px-10 lg:py-5 w-full sm:w-auto justify-center"
              style={{
                fontFamily: 'var(--font-body)',
                fontWeight: 700,
                fontSize: '1.1875rem',
                backgroundColor: 'rgba(255, 251, 240, 0.95)',
                color: 'oklch(0.35 0.08 45)',
                borderRadius: 'var(--radius-md)',
                boxShadow: '0 4px 24px rgba(0, 0, 0, 0.18), 0 0 40px rgba(217, 119, 6, 0.15)',
              }}
              whileHover={{
                scale: 1.03,
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.22), 0 0 50px rgba(217, 119, 6, 0.2)',
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.3 }}
            >
              <span
                className="flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 group-hover:rotate-12 group-hover:scale-110"
                style={{ background: 'oklch(0.70 0.16 60)' }}
              >
                <Phone className="w-5 h-5 text-white" strokeWidth={2.5} />
              </span>
              <span>07 89 08 18 57</span>
            </motion.a>

            {/* Secondary CTA */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.3 }}
            >
              <Link
                href="/contact"
                className="group flex items-center gap-3 px-8 py-4 lg:px-10 lg:py-5 w-full sm:w-auto justify-center"
                style={{
                  fontFamily: 'var(--font-body)',
                  fontWeight: 500,
                  fontSize: '1.0625rem',
                  color: 'white',
                  borderRadius: 'var(--radius-md)',
                  border: '2px solid rgba(255, 255, 255, 0.3)',
                  transition: 'all 300ms ease-out',
                }}
              >
                <span>Demander un devis</span>
                <ArrowRight
                  className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                  strokeWidth={2}
                />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
