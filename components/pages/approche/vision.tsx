'use client'

import { motion } from 'motion/react'
import Image from 'next/image'
import Link from 'next/link'
import { Check, ArrowRight, Eye } from 'lucide-react'

const inclus = [
  'Tarifs annoncés avant intervention',
  'Devis détaillé et transparent',
  'Explication de chaque étape du travail',
  'Facturation conforme au devis initial',
  'Aucun frais caché ni surprise',
  'Garantie écrite sur les interventions',
]

export default function Vision() {
  return (
    <section
      id="vision"
      className="relative overflow-hidden"
      style={{ backgroundColor: 'oklch(0.22 0.05 40)' }}
    >

      <div className="container-custom relative z-10 section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left column - Image + Included list */}
          <motion.div
            className="order-2 lg:order-1 space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1], delay: 0.15 }}
          >
            {/* Image */}
            <div
              className="relative aspect-[16/10] overflow-hidden"
              style={{
                borderRadius: 'var(--radius-xl)',
                boxShadow: '0 8px 40px rgba(0, 0, 0, 0.3)',
              }}
            >
              <Image
                src="/images/serrure.webp"
                alt="Transparence des tarifs et interventions OPENDOOR"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Included list — glass card on dark */}
            <div
              className="p-6 lg:p-8"
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                borderRadius: 'var(--radius-xl)',
                border: '1px solid rgba(255, 255, 255, 0.10)',
              }}
            >
              <h3
                className="mb-6"
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'var(--font-size-h4)',
                  color: 'rgba(255, 255, 255, 0.9)',
                }}
              >
                Transparence garantie
              </h3>

              <ul className="space-y-4">
                {inclus.map((item, index) => (
                  <motion.li
                    key={item}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -20 }}
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
                    <span
                      className="pt-0.5"
                      style={{
                        fontFamily: 'var(--font-body)',
                        color: 'rgba(255, 255, 255, 0.75)',
                        lineHeight: 1.5,
                      }}
                    >
                      {item}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Right column - Text content (inverted colors for dark bg) */}
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
              Notre<br />
              <span style={{ color: 'oklch(0.78 0.14 60)' }}>Vision</span>
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
              Devenir l&apos;entreprise-refuge de la région
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
              Une structure locale, identifiable, à laquelle on fait appel sans hésitation parce que l&apos;on sait à quoi s&apos;attendre. Les explications sont données avant l&apos;action, les tarifs sont annoncés clairement, les limites sont posées sans détour.
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              <div
                className="flex items-center gap-2 px-4 py-2"
                style={{
                  background: 'rgba(217, 119, 6, 0.10)',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid oklch(0.70 0.16 60 / 0.25)',
                }}
              >
                <Eye className="w-4 h-4" style={{ color: 'oklch(0.70 0.16 60)' }} strokeWidth={2} />
                <span
                  className="text-sm font-medium"
                  style={{ color: 'oklch(0.70 0.16 60)', fontFamily: 'var(--font-body)' }}
                >
                  Tarifs clairs
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

            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} transition={{ duration: 0.3 }}>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 btn-primary px-8 py-4"
                style={{ fontSize: '1.0625rem' }}
              >
                <span>Demander un devis gratuit</span>
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={2} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
