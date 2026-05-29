'use client'

import { motion } from 'motion/react'
import Link from 'next/link'
import { Check, ArrowRight, CalendarClock } from 'lucide-react'

const inclus = [
  'Réparation de cylindres',
  'Entretien général de serrurerie',
  'Diagnostic de l\'état des serrures',
  'Lubrification et ajustements',
]

export default function ServiceEntretien() {
  return (
    <section id="entretien" className="relative overflow-hidden" style={{ backgroundColor: 'var(--background)' }}>

      <div className="container-custom relative z-10 section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left column - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
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
                fontWeight: 600,
                lineHeight: 1.1,
                letterSpacing: '-0.01em',
                color: 'var(--foreground)',
              }}
            >
              Entretien
            </h2>

            <p
              className="mb-4"
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'var(--font-size-body-lg)',
                color: 'var(--primary-dark)',
                fontWeight: 500,
              }}
            >
              Prévenez les problèmes avant qu'ils n'arrivent
            </p>

            <p
              className="mb-8"
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'var(--font-size-body)',
                color: 'var(--muted-foreground)',
                lineHeight: 1.7,
              }}
            >
              Maintenance préventive et réparation de vos équipements de serrurerie. Un entretien régulier prolonge la durée de vie de vos serrures et évite les blocages inattendus.
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              <div
                className="flex items-center gap-2 px-4 py-2"
                style={{
                  backgroundColor: 'var(--card)',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid oklch(0.88 0.025 70 / 0.6)',
                  boxShadow: 'var(--shadow-card)',
                }}
              >
                <CalendarClock className="w-4 h-4" style={{ color: 'var(--primary-dark)' }} strokeWidth={2} />
                <span className="text-sm font-medium" style={{ color: 'var(--primary-dark)', fontFamily: 'var(--font-body)' }}>
                  Rendez-vous selon disponibilités
                </span>
              </div>
              <div
                className="flex items-center gap-2 px-4 py-2"
                style={{
                  backgroundColor: 'var(--card)',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid oklch(0.88 0.025 70 / 0.6)',
                  boxShadow: 'var(--shadow-card)',
                }}
              >
                <span className="text-sm font-medium" style={{ color: 'var(--foreground)', fontFamily: 'var(--font-body)' }}>
                  Sur devis gratuit
                </span>
              </div>
            </div>

            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} transition={{ duration: 0.3 }}>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 btn-primary-light px-8 py-4"
                style={{ fontSize: '1.0625rem' }}
              >
                <span>Demander un devis gratuit</span>
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={2} />
              </Link>
            </motion.div>
          </motion.div>

          {/* Right column - Included list */}
          <motion.div
            className="lg:pt-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1], delay: 0.15 }}
          >
            <div
              className="p-6 lg:p-8"
              style={{
                backgroundColor: 'var(--card)',
                borderRadius: 'var(--radius-xl)',
                border: '1px solid oklch(0.88 0.025 70 / 0.6)',
                boxShadow: 'var(--shadow-card)',
              }}
            >
              <h3
                className="mb-6"
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'var(--font-size-h4)',
                  color: 'var(--foreground)',
                }}
              >
                Ce que nous proposons
              </h3>

              <ul className="space-y-4">
                {inclus.map((item, index) => (
                  <motion.li
                    key={item}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.06, ease: [0.25, 0.1, 0.25, 1] }}
                  >
                    <span
                      className="flex-shrink-0 w-6 h-6 flex items-center justify-center mt-0.5"
                      style={{
                        background: 'linear-gradient(135deg, oklch(0.70 0.16 60) 0%, oklch(0.78 0.14 60) 100%)',
                        borderRadius: 'var(--radius-sm)',
                      }}
                    >
                      <Check className="w-4 h-4 text-white" strokeWidth={2.5} />
                    </span>
                    <span className="pt-0.5" style={{ fontFamily: 'var(--font-body)', color: 'var(--foreground)', lineHeight: 1.5 }}>
                      {item}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
