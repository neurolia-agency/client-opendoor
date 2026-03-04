'use client'

import { motion } from 'motion/react'
import { Phone, MapPin, Clock } from 'lucide-react'

const infos = [
  {
    icon: Phone,
    label: 'Téléphone',
    value: '07 89 08 18 57',
    detail: 'Appel gratuit, réponse immédiate',
    href: 'tel:0789081857',
  },
  {
    icon: MapPin,
    label: 'Zone',
    value: 'Narbonne + 50 km',
    detail: 'Béziers, Lézignan-Corbières, Sigean...',
    href: null,
  },
  {
    icon: Clock,
    label: 'Disponibilité',
    value: '24h/24, 7j/7',
    detail: 'Week-ends et jours fériés inclus',
    href: null,
  },
]

export default function Coordonnees() {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden" style={{ backgroundColor: 'var(--background-alt)' }}>
      {/* Subtle radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 60% 40% at 50% 0%,
              oklch(0.92 0.06 60 / 0.4) 0%,
              transparent 70%
            )
          `,
        }}
      />

      <div className="container-custom relative z-10">
        {/* Section header */}
        <motion.div
          className="mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <span className="overline block mb-4">Informations</span>
          <h2
            className="text-balance"
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(1.75rem, 3vw + 0.5rem, 2.5rem)',
              fontWeight: 500,
              lineHeight: 1.15,
              color: 'var(--foreground)',
            }}
          >
            Nos coordonnées
          </h2>
        </motion.div>

        {/* Info grid — horizontal cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
          {infos.map((info, index) => {
            const Card = (
              <motion.div
                className="group relative"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{
                  y: -4,
                }}
                style={{ borderRadius: 'var(--radius-lg)' }}
              >
                <div
                  className="p-7 lg:p-8 h-full"
                  style={{
                    backgroundColor: 'var(--card)',
                    borderRadius: 'var(--radius-lg)',
                    boxShadow: 'var(--shadow-subtle)',
                    transition: 'box-shadow 300ms ease-out',
                  }}
                >
                  {/* Icon */}
                  <div
                    className="w-11 h-11 flex items-center justify-center rounded-full mb-5"
                    style={{
                      background: 'linear-gradient(140deg, oklch(0.75 0.16 65), oklch(0.65 0.18 55))',
                      boxShadow: '0 4px 16px oklch(0.70 0.16 60 / 0.25)',
                    }}
                  >
                    <info.icon className="w-5 h-5 text-white" strokeWidth={2} />
                  </div>

                  {/* Label */}
                  <span
                    className="block mb-1"
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      color: 'var(--muted-foreground)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                    }}
                  >
                    {info.label}
                  </span>

                  {/* Value */}
                  <span
                    className="block mb-2"
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '1.25rem',
                      fontWeight: 600,
                      color: 'var(--foreground)',
                      lineHeight: 1.3,
                    }}
                  >
                    {info.value}
                  </span>

                  {/* Detail */}
                  <span
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.8125rem',
                      color: 'var(--muted-foreground)',
                      lineHeight: 1.5,
                    }}
                  >
                    {info.detail}
                  </span>
                </div>
              </motion.div>
            )

            return info.href ? (
              <a key={info.label} href={info.href} className="block">
                {Card}
              </a>
            ) : (
              <div key={info.label}>{Card}</div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
