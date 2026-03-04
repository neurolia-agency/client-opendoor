'use client'

import { motion } from 'motion/react'
import Link from 'next/link'
import { ArrowRight, Clock, Zap, Phone, ShieldCheck } from 'lucide-react'

const infos = [
  {
    icon: Clock,
    valeur: '24h/24',
    label: 'Disponibilité',
    description: 'Nous répondons à vos appels jour et nuit, week-ends et jours fériés inclus.',
    num: '01',
  },
  {
    icon: Zap,
    valeur: '< 30 min',
    label: 'Temps d\'arrivée',
    description: 'Arrivée sur place en moins de 30 minutes dans toute notre zone de couverture.',
    num: '02',
  },
  {
    icon: Phone,
    valeur: '07 89 08 18 57',
    label: 'Un seul numéro',
    description: 'Un appel suffit. Nous organisons l\'intervention immédiatement.',
    href: 'tel:0789081857',
    num: '03',
  },
]

export default function InfosPratiques() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ backgroundColor: 'oklch(0.22 0.05 40)' }}
    >
      <div className="container-custom relative z-10 section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Left column — Info cards (glass on dark) */}
          <motion.div
            className="order-2 lg:order-1 space-y-4"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1], delay: 0.15 }}
          >
            {infos.map((info, index) => {
              const CardContent = (
                <div
                  className="p-5 lg:p-6"
                  style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    backdropFilter: 'blur(12px)',
                    WebkitBackdropFilter: 'blur(12px)',
                    borderRadius: 'var(--radius-xl)',
                    border: '1px solid rgba(255, 255, 255, 0.10)',
                    transition: 'all 300ms ease-out',
                  }}
                >
                  <div className="flex items-start gap-4">
                    {/* Number accent */}
                    <span
                      className="shrink-0 mt-1"
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '0.6875rem',
                        fontWeight: 700,
                        color: 'oklch(0.70 0.16 60 / 0.4)',
                        letterSpacing: '0.05em',
                      }}
                    >
                      {info.num}
                    </span>

                    {/* Icon */}
                    <span
                      className="flex items-center justify-center w-10 h-10 shrink-0 mt-0.5"
                      style={{
                        background: 'linear-gradient(135deg, oklch(0.70 0.16 60) 0%, oklch(0.62 0.17 55) 100%)',
                        borderRadius: 'var(--radius-md)',
                        boxShadow: '0 4px 16px rgba(217, 119, 6, 0.3)',
                      }}
                    >
                      <info.icon className="w-4 h-4 text-white" strokeWidth={2.5} />
                    </span>

                    {/* Text */}
                    <div className="flex-1">
                      <span
                        className="block mb-0.5"
                        style={{
                          fontFamily: 'var(--font-display)',
                          fontSize: 'clamp(1.25rem, 2vw + 0.5rem, 1.5rem)',
                          fontWeight: 700,
                          color: 'white',
                          letterSpacing: '-0.01em',
                        }}
                      >
                        {info.valeur}
                      </span>
                      <span
                        className="block mb-2"
                        style={{
                          fontFamily: 'var(--font-body)',
                          fontSize: '0.75rem',
                          color: 'oklch(0.70 0.16 60)',
                          fontWeight: 600,
                          textTransform: 'uppercase',
                          letterSpacing: '0.08em',
                        }}
                      >
                        {info.label}
                      </span>
                      <p
                        style={{
                          fontFamily: 'var(--font-body)',
                          fontSize: '0.875rem',
                          color: 'rgba(255, 255, 255, 0.55)',
                          lineHeight: 1.6,
                        }}
                      >
                        {info.description}
                      </p>
                    </div>
                  </div>
                </div>
              )

              return (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: 0.2 + index * 0.1,
                    ease: [0.25, 0.1, 0.25, 1],
                  }}
                >
                  {info.href ? (
                    <a href={info.href} className="block">
                      {CardContent}
                    </a>
                  ) : (
                    CardContent
                  )}
                </motion.div>
              )
            })}
          </motion.div>

          {/* Right column — Text content */}
          <motion.div
            className="order-1 lg:order-2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          >
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
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            />

            <h2
              className="mb-3"
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
              Infos<br />
              <span style={{ color: 'oklch(0.78 0.14 60)' }}>Pratiques</span>
            </h2>

            <p
              className="mb-4"
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'var(--font-size-body-lg)',
                color: 'oklch(0.70 0.16 60)',
                fontWeight: 500,
              }}
            >
              Tout ce qu&apos;il faut savoir avant d&apos;appeler
            </p>

            <p
              className="mb-8"
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'var(--font-size-body)',
                color: 'rgba(255, 255, 255, 0.55)',
                lineHeight: 1.7,
              }}
            >
              Un seul appel suffit. Notre équipe évalue votre situation, vous communique un tarif clair et intervient dans les meilleurs délais. Pas de surprise, pas de frais cachés.
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-3 mb-8">
              <div
                className="flex items-center gap-2 px-4 py-2"
                style={{
                  background: 'rgba(217, 119, 6, 0.10)',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid oklch(0.70 0.16 60 / 0.25)',
                }}
              >
                <ShieldCheck className="w-4 h-4" style={{ color: 'oklch(0.70 0.16 60)' }} strokeWidth={2} />
                <span
                  className="text-sm font-medium"
                  style={{ color: 'oklch(0.70 0.16 60)', fontFamily: 'var(--font-body)' }}
                >
                  Tarifs transparents
                </span>
              </div>
              <div
                className="flex items-center gap-2 px-4 py-2"
                style={{
                  background: 'rgba(255, 255, 255, 0.06)',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                }}
              >
                <span
                  className="text-sm font-medium"
                  style={{ color: 'rgba(255, 255, 255, 0.7)', fontFamily: 'var(--font-body)' }}
                >
                  Devis gratuit
                </span>
              </div>
            </div>

            {/* CTA */}
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} transition={{ duration: 0.3 }}>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 btn-primary px-8 py-4"
                style={{ fontSize: '1.0625rem' }}
              >
                <span>Nous contacter</span>
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={2} />
              </Link>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
