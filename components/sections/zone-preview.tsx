'use client'

import { motion } from 'motion/react'
import Link from 'next/link'
import { MapPin, ArrowRight } from 'lucide-react'

const villes = [
  'Narbonne',
  'Béziers',
  'Gruissan',
  'Lézignan-Corbières',
  'Port-la-Nouvelle',
  'Sigean',
  'Coursan',
  'Leucate',
]

export default function ZonePreview() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Dark secondary background */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(170deg,
              oklch(0.28 0.05 45) 0%,
              oklch(0.22 0.04 40) 50%,
              oklch(0.18 0.03 35) 100%
            )
          `,
        }}
      />

      {/* Subtle radial glow top-right */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 50% 50% at 80% 20%,
              oklch(0.70 0.16 60 / 0.08) 0%,
              transparent 60%
            )
          `,
        }}
      />

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Map illustration */}
          <motion.div
            className="relative order-2 lg:order-1"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {/* Map container — glass card */}
            <div
              className="relative aspect-square max-w-md mx-auto lg:mx-0 p-8"
              style={{
                background: 'rgba(255, 255, 255, 0.04)',
                borderRadius: 'var(--radius-xl)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                backdropFilter: 'blur(8px)',
              }}
            >
              <div className="relative w-full h-full">
                {/* Background circle representing zone */}
                <div
                  className="absolute inset-4 rounded-full"
                  style={{
                    background: `radial-gradient(circle, oklch(0.70 0.16 60 / 0.15) 0%, transparent 70%)`,
                  }}
                />

                {/* Central marker - Narbonne */}
                <motion.div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center mb-2"
                    style={{
                      background: 'linear-gradient(135deg, oklch(0.70 0.16 60) 0%, oklch(0.65 0.17 55) 100%)',
                      boxShadow: '0 4px 20px rgba(217, 119, 6, 0.5)',
                    }}
                  >
                    <MapPin className="w-6 h-6 text-white" strokeWidth={2} />
                  </div>
                  <span
                    className="text-sm font-semibold px-3 py-1 rounded-full"
                    style={{
                      fontFamily: 'var(--font-body)',
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      color: 'white',
                      border: '1px solid rgba(255, 255, 255, 0.15)',
                    }}
                  >
                    Narbonne
                  </span>
                </motion.div>

                {/* Radius indicator */}
                <div
                  className="absolute inset-8 rounded-full border-2 border-dashed"
                  style={{ borderColor: 'rgba(255, 255, 255, 0.15)' }}
                />

                {/* 50km label */}
                <span
                  className="absolute bottom-8 right-8 text-sm font-medium px-3 py-1 rounded"
                  style={{
                    fontFamily: 'var(--font-body)',
                    background: 'oklch(0.70 0.16 60)',
                    color: 'white',
                    borderRadius: 'var(--radius-sm)',
                  }}
                >
                  50 km
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            className="order-1 lg:order-2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <h2
              className="text-balance mb-5"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2rem, 4vw + 0.5rem, 3rem)',
                fontWeight: 700,
                lineHeight: 1.1,
                letterSpacing: '-0.02em',
                color: 'white',
                textTransform: 'uppercase',
              }}
            >
              Nous intervenons
              <br />
              près de chez vous
            </h2>
            <p
              className="mb-8"
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'var(--font-size-body-lg)',
                color: 'rgba(255, 255, 255, 0.6)',
                lineHeight: 1.65,
              }}
            >
              Narbonne et 12 villes dans un rayon de 50 km. Toujours à proximité quand vous en avez besoin.
            </p>

            {/* Cities list */}
            <div className="flex flex-wrap gap-2 mb-10">
              {villes.map((ville, index) => (
                <motion.span
                  key={ville}
                  className="px-4 py-2 text-sm font-medium"
                  style={{
                    fontFamily: 'var(--font-body)',
                    backgroundColor: ville === 'Narbonne' ? 'oklch(0.70 0.16 60)' : 'rgba(255, 255, 255, 0.06)',
                    color: ville === 'Narbonne' ? 'white' : 'rgba(255, 255, 255, 0.7)',
                    borderRadius: 'var(--radius-pill)',
                    border: ville === 'Narbonne' ? 'none' : '1px solid rgba(255, 255, 255, 0.1)',
                  }}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.3,
                    delay: 0.3 + index * 0.05,
                  }}
                >
                  {ville}
                </motion.span>
              ))}
            </div>

            {/* CTA */}
            <Link
              href="/zone"
              className="inline-flex items-center gap-2 px-6 py-3 font-medium group"
              style={{
                fontFamily: 'var(--font-body)',
                color: 'white',
                border: '2px solid rgba(255, 255, 255, 0.2)',
                borderRadius: 'var(--radius-md)',
                transition: 'all 300ms ease-out',
              }}
            >
              <span>Voir toutes les villes couvertes</span>
              <ArrowRight
                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                strokeWidth={2}
              />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
