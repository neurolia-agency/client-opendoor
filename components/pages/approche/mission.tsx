'use client'

import { motion } from 'motion/react'
import Image from 'next/image'
import { Phone, Check, Heart } from 'lucide-react'

const inclus = [
  'Écoute attentive de votre situation',
  'Prise en charge émotionnelle du stress',
  'Explication claire des options disponibles',
  'Accompagnement du début à la fin',
  'Suivi après intervention',
  'Disponibilité sans condition',
]

export default function Mission() {
  return (
    <section id="mission" className="relative overflow-hidden" style={{ backgroundColor: 'var(--background-alt)' }}>

      <div className="container-custom relative z-10 section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left column - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 px-4 py-2 mb-6"
              style={{
                background: 'linear-gradient(135deg, oklch(0.70 0.16 60) 0%, oklch(0.65 0.17 55) 100%)',
                color: 'white',
                borderRadius: 'var(--radius-pill)',
                fontFamily: 'var(--font-body)',
                fontWeight: 600,
                fontSize: '0.875rem',
                boxShadow: '0 4px 12px rgba(217, 119, 6, 0.25)',
              }}
            >
              <Heart className="w-4 h-4" strokeWidth={2.5} />
              <span>Empathie active</span>
            </div>

            {/* Title */}
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
              Notre<br />
              <span style={{ color: 'oklch(0.78 0.14 60)', fontStyle: 'italic' }}>mission</span>
            </h2>

            {/* Tagline */}
            <p
              className="mb-4"
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'var(--font-size-body-lg)',
                color: 'var(--primary-dark)',
                fontWeight: 500,
              }}
            >
              Transformer le stress en sérénité
            </p>

            {/* Description */}
            <p
              className="mb-8"
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'var(--font-size-body)',
                color: 'var(--muted-foreground)',
                lineHeight: 1.7,
              }}
            >
              Transformer une situation de stress aigu en un parcours clair, respectueux et humain, pour rétablir un sentiment de sécurité là où il a été brutalement retiré.
            </p>

            {/* Trust signals */}
            <div className="flex flex-wrap gap-2.5 mb-8">
              <span
                className="inline-flex items-center px-4 py-2"
                style={{
                  fontFamily: 'var(--font-body)',
                  fontWeight: 500,
                  fontSize: '0.875rem',
                  color: 'oklch(0.58 0.16 55)',
                  border: '1.5px solid oklch(0.70 0.16 60 / 0.35)',
                  borderRadius: 'var(--radius-pill)',
                }}
              >
                Écoute avant tout
              </span>
              <span
                className="inline-flex items-center px-4 py-2"
                style={{
                  fontFamily: 'var(--font-body)',
                  fontWeight: 500,
                  fontSize: '0.875rem',
                  color: 'oklch(0.58 0.16 55)',
                  border: '1.5px solid oklch(0.70 0.16 60 / 0.35)',
                  borderRadius: 'var(--radius-pill)',
                }}
              >
                Zéro jugement
              </span>
            </div>

            {/* CTA */}
            <motion.a
              href="tel:+33789081857"
              className="group inline-flex items-center gap-3 px-8 py-4"
              style={{
                fontFamily: 'var(--font-body)',
                fontWeight: 600,
                fontSize: '1.125rem',
                background: 'linear-gradient(135deg, oklch(0.70 0.16 60) 0%, oklch(0.65 0.17 55) 100%)',
                color: 'var(--primary-foreground)',
                borderRadius: 'var(--radius-md)',
                boxShadow: '0 8px 32px rgba(217, 119, 6, 0.30)',
                transition: 'all 300ms ease-out',
              }}
              whileHover={{ scale: 1.02, boxShadow: '0 12px 40px rgba(217, 119, 6, 0.40)' }}
              whileTap={{ scale: 0.98 }}
            >
              <Phone className="w-5 h-5" strokeWidth={2} />
              <span>Appelez-nous maintenant</span>
            </motion.a>
          </motion.div>

          {/* Right column - Image + Included list */}
          <motion.div
            className="lg:pt-8 space-y-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1], delay: 0.15 }}
          >
            {/* Image */}
            <div
              className="relative aspect-[16/10] overflow-hidden"
              style={{
                borderRadius: 'var(--radius-xl)',
              }}
            >
              <Image
                src="/images/serrurier.webp"
                alt="Serrurier OPENDOOR à l'écoute du client"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Included list */}
            <div
              className="p-6 lg:p-8"
              style={{
                backgroundColor: 'var(--card)',
                borderRadius: 'var(--radius-xl)',
                border: '1px solid oklch(0.88 0.025 70 / 0.6)',
                boxShadow: 'var(--shadow-card-hover)',
              }}
            >
              <h3
                className="mb-6"
                style={{ fontFamily: 'var(--font-heading)', fontSize: 'var(--font-size-h4)', color: 'var(--foreground)' }}
              >
                Notre engagement au quotidien
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
