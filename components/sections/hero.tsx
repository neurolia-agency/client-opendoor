'use client'

import { motion } from 'motion/react'
import Image from 'next/image'
import { Phone } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] max-h-[1200px] overflow-hidden">
      {/* Background — warm gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(170deg,
              oklch(0.25 0.06 35) 0%,
              oklch(0.42 0.12 42) 15%,
              oklch(0.62 0.18 55) 45%,
              oklch(0.72 0.17 65) 75%,
              oklch(0.78 0.15 60) 100%
            )
          `,
        }}
      />

      {/* Subtle radial glow */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 80% 70% at 55% 40%,
              oklch(0.82 0.14 60 / 0.30) 0%,
              transparent 60%
            )
          `,
        }}
      />

      {/* Cutout image — serrurier silhouette */}
      <motion.div
        className="absolute inset-0 flex items-end justify-center pointer-events-none z-[1]"
        initial={{ opacity: 0, scale: 1.04 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      >
        <Image
          src="/images/hero-cutout.webp"
          alt="Serrurier professionnel OPENDOOR"
          width={1200}
          height={1500}
          className="object-contain max-h-[98vh] w-auto"
          priority
        />
      </motion.div>

      {/* Content — bottom-aligned flex layout */}
      <div className="container-custom relative z-10 h-full flex flex-col justify-end pb-[4.5rem] lg:pb-[5.5rem]">
        <div className="flex flex-col items-center text-center lg:text-left lg:flex-row lg:items-end lg:justify-between gap-8 lg:gap-0">
          {/* Left: tagline */}
          <div className="flex-1 relative z-10 lg:max-w-[60%]">
            <h1
              style={{
                textTransform: 'uppercase',
                maxWidth: '680px',
              }}
              className="text-center lg:text-left mx-auto lg:mx-0"
            >
              {/* 24/7 */}
              <motion.span
                className="hero-tagline-247"
                style={{
                  display: 'block',
                  fontFamily: 'var(--font-body)',
                  fontWeight: 900,
                  fontSize: 'clamp(40px, 5vw, 72px)',
                  lineHeight: 1,
                  letterSpacing: '-0.02em',
                  color: '#FFFFFF',
                  textShadow: '3px 3px 6px rgba(107, 58, 10, 0.7)',
                }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              >
                24/7
              </motion.span>
              {/* INTERVENTION EXPRESS. */}
              <motion.span
                className="hero-tagline-main"
                style={{
                  display: 'block',
                  fontFamily: 'var(--font-body)',
                  fontWeight: 900,
                  fontSize: 'clamp(56px, 7.2vw, 120px)',
                  color: '#FFFFFF',
                  textShadow: '3px 3px 6px rgba(107, 58, 10, 0.7)',
                }}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <span className="inline-block scale-x-[0.85] origin-center lg:origin-left">INTERVENTION</span>
                <br />
                <span className="inline-block scale-x-[0.85] origin-center lg:origin-left">EXPRESS.</span>
              </motion.span>
            </h1>
          </div>

          {/* Right: descriptor + CTA — pushed far right to clear the character */}
          <div className="shrink-0 text-center lg:text-right hero-right-col">

            <motion.p
              className="mb-6 mx-auto lg:ml-auto lg:mr-0"
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'clamp(0.875rem, 1vw + 0.25rem, 1.0625rem)',
                lineHeight: 1.65,
                color: 'rgba(255, 255, 255, 0.65)',
                maxWidth: '20rem',
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              Serrurier à Narbonne et ses environs.
              <br />
              Intervention rapide, tarifs transparents.
            </motion.p>

            {/* CTA — high-contrast white on warm gradient */}
            <motion.a
              href="tel:0789081857"
              className="group inline-flex items-center gap-3.5 transition-all duration-300 hover:scale-[1.04]"
              style={{
                background: 'rgba(255, 251, 240, 0.95)',
                color: 'oklch(0.25 0.06 35)',
                padding: '1rem 2rem',
                borderRadius: 'var(--radius-md)',
                boxShadow: '0 4px 24px rgba(0, 0, 0, 0.20), 0 0 40px rgba(217, 119, 6, 0.18)',
              }}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0, ease: [0.16, 1, 0.3, 1] }}
            >
              <span
                className="flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 group-hover:rotate-12 group-hover:scale-110"
                style={{
                  background: 'oklch(0.70 0.16 60)',
                }}
              >
                <Phone className="w-5 h-5 text-white" strokeWidth={2.5} />
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-body)',
                  fontWeight: 700,
                  fontSize: 'clamp(1.0625rem, 1.2vw + 0.25rem, 1.3125rem)',
                  letterSpacing: '0.04em',
                }}
              >
                07 89 08 18 57
              </span>
            </motion.a>
          </div>
        </div>
      </div>

      {/* Scroll line */}
      <motion.div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div
          className="w-px bg-white/40"
          initial={{ height: 0 }}
          animate={{ height: 48 }}
          transition={{
            duration: 1.5,
            delay: 1.8,
            ease: [0.16, 1, 0.3, 1],
          }}
        />
      </motion.div>
    </section>
  )
}
