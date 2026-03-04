'use client'

import { motion } from 'motion/react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

const valeurs = [
  {
    nom: 'Empathie Active',
    description: 'Reconnaître immédiatement l\'état émotionnel de la personne.',
  },
  {
    nom: 'Transparence Radicale',
    description: 'Les tarifs sont annoncés clairement, les limites posées sans détour.',
  },
  {
    nom: 'Bienveillance Exigeante',
    description: 'Qualité du geste, durabilité de la solution, rigueur technique.',
  },
  {
    nom: 'Santé Relationnelle',
    description: 'Échanges directs, sans tension artificielle.',
  },
]

export default function ApprochePreview() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden" style={{ backgroundColor: 'var(--background-alt)' }}>
      <div className="container-custom relative">
        {/* Split layout: image left, content right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Image placeholder */}
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div
              className="relative aspect-[4/5] overflow-hidden"
              style={{
                borderRadius: 'var(--radius-xl)',
                background: 'linear-gradient(160deg, oklch(0.92 0.06 60) 0%, oklch(0.85 0.08 65) 100%)',
                boxShadow: 'var(--shadow-float)',
              }}
            >
              <Image
                src="/images/serrurier.webp"
                alt="Serrurier professionnel OPENDOOR"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                quality={90}
                unoptimized
              />

              {/* Decorative badge overlay */}
              <div
                className="absolute bottom-6 left-6 right-6 p-4"
                style={{
                  background: 'rgba(255, 255, 255, 0.9)',
                  backdropFilter: 'blur(12px)',
                  borderRadius: 'var(--radius-lg)',
                  boxShadow: 'var(--shadow-whisper)',
                }}
              >
                <p
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.125rem',
                    fontWeight: 500,
                    fontStyle: 'italic',
                    color: 'var(--foreground)',
                    lineHeight: 1.4,
                  }}
                >
                  &ldquo;Derrière chaque porte, il y a une personne qui compte.&rdquo;
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <div className="lg:col-span-7">
            <motion.h2
              className="mb-6"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2rem, 4vw + 0.5rem, 3rem)',
                fontWeight: 700,
                lineHeight: 1.1,
                letterSpacing: '-0.02em',
                color: 'var(--foreground)',
                textTransform: 'uppercase',
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              Notre façon
              <br />
              de travailler
            </motion.h2>

            <motion.p
              className="mb-10"
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'clamp(1rem, 1.2vw + 0.5rem, 1.125rem)',
                lineHeight: 1.7,
                color: 'var(--muted-foreground)',
                maxWidth: '32rem',
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              Empathie, transparence et rigueur. Parce que derrière chaque porte, il y a une personne qui compte.
            </motion.p>

            {/* Values list — numbered, clean */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 mb-10">
              {valeurs.map((valeur, index) => (
                <motion.div
                  key={valeur.nom}
                  className="relative"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{
                    duration: 0.6,
                    delay: 0.2 + index * 0.08,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  {/* Number */}
                  <span
                    className="block mb-2"
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      letterSpacing: '0.1em',
                      color: 'var(--primary)',
                    }}
                  >
                    {String(index + 1).padStart(2, '0')}
                  </span>

                  {/* Title */}
                  <h3
                    className="mb-1.5"
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '1.125rem',
                      fontWeight: 600,
                      color: 'var(--foreground)',
                      lineHeight: 1.3,
                    }}
                  >
                    {valeur.nom}
                  </h3>

                  {/* Description */}
                  <p
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.875rem',
                      lineHeight: 1.6,
                      color: 'var(--muted-foreground)',
                    }}
                  >
                    {valeur.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Link
                href="/approche"
                className="inline-flex items-center gap-3 group btn-primary-light px-6 py-3"
              >
                <span>En savoir plus sur notre approche</span>
                <ArrowRight
                  className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2"
                  strokeWidth={2}
                />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
