'use client'

import { motion } from 'motion/react'
import { MapPin, Phone } from 'lucide-react'

const villes = [
  { nom: 'Narbonne', siege: true },
  { nom: 'Narbonne-Plage', siege: false },
  { nom: 'Gruissan', siege: false },
  { nom: 'Port-la-Nouvelle', siege: false },
  { nom: 'Sigean', siege: false },
  { nom: 'Leucate', siege: false },
  { nom: 'Coursan', siege: false },
  { nom: 'Cuxac-d\'Aude', siege: false },
  { nom: 'Lézignan-Corbières', siege: false },
  { nom: 'Béziers', siege: false },
  { nom: 'Capestang', siege: false },
  { nom: 'Sérignan', siege: false },
]

export default function VillesCouvertes() {
  return (
    <section className="relative overflow-hidden" style={{ backgroundColor: '#f2f2f7' }}>
      <div className="container-custom relative z-10 section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Left column — Text content */}
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
              <MapPin className="w-4 h-4" strokeWidth={2.5} />
              <span>Rayon 50 km</span>
            </div>

            {/* Title */}
            <h2
              className="mb-3"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2rem, 4vw + 0.5rem, 3rem)',
                fontWeight: 700,
                lineHeight: 1.1,
                letterSpacing: '-0.02em',
                color: 'var(--foreground)',
                textTransform: 'uppercase',
              }}
            >
              Villes couvertes
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
              Toujours à proximité, partout dans l&apos;Aude
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
              Notre équipe intervient à Narbonne et dans les communes environnantes dans un rayon de 50&nbsp;km. Que vous soyez en centre-ville ou en périphérie, nous nous déplaçons rapidement pour répondre à votre besoin.
            </p>

            {/* Trust pills + CTA — left-aligned, centered among themselves */}
            <div className="flex flex-col items-center w-fit">
              <div className="flex flex-wrap gap-2.5 mb-4">
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
                  Intervention &lt; 30 min
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
                  Déplacement inclus
                </span>
              </div>

              <motion.a
                href="tel:0789081857"
                className="group inline-flex items-center gap-3 px-8 py-4"
                style={{
                  fontFamily: 'var(--font-body)',
                  fontWeight: 600,
                  fontSize: '1.125rem',
                  background: 'linear-gradient(135deg, oklch(0.70 0.16 60) 0%, oklch(0.65 0.17 55) 100%)',
                  color: 'white',
                  borderRadius: 'var(--radius-lg)',
                  boxShadow: '0 8px 32px rgba(217, 119, 6, 0.30)',
                  transition: 'all 300ms ease-out',
                }}
                whileHover={{ scale: 1.02, boxShadow: '0 12px 40px rgba(217, 119, 6, 0.40)' }}
                whileTap={{ scale: 0.98 }}
              >
                <Phone className="w-5 h-5" strokeWidth={2} />
                <span>07 89 08 18 57</span>
              </motion.a>
            </div>
          </motion.div>

          {/* Right column — Cities card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1], delay: 0.15 }}
          >
            <div
              className="p-6 lg:p-8"
              style={{
                backgroundColor: '#ffffff',
                borderRadius: 'var(--radius-xl)',
                border: '1px solid rgba(0, 0, 0, 0.15)',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.10), 0 12px 32px rgba(0, 0, 0, 0.18)',
              }}
            >
              <h3
                className="mb-6"
                style={{ fontFamily: 'var(--font-heading)', fontSize: 'var(--font-size-h4)', color: 'var(--foreground)' }}
              >
                12 villes desservies
              </h3>

              <div className="grid grid-cols-2 gap-x-6 gap-y-3">
                {villes.map((ville, index) => (
                  <motion.div
                    key={ville.nom}
                    className="flex items-center gap-2.5"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.04, ease: [0.25, 0.1, 0.25, 1] }}
                  >
                    <MapPin
                      className="w-3.5 h-3.5 flex-shrink-0"
                      style={{ color: ville.siege ? 'var(--primary-dark)' : 'var(--primary)' }}
                      strokeWidth={2}
                    />
                    <span
                      style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.9375rem',
                        fontWeight: ville.siege ? 600 : 400,
                        color: 'var(--foreground)',
                      }}
                    >
                      {ville.nom}
                    </span>
                    {ville.siege && (
                      <span
                        className="px-2 py-0.5 text-xs font-medium"
                        style={{
                          backgroundColor: 'var(--primary)',
                          color: 'var(--primary-foreground)',
                          borderRadius: 'var(--radius-pill)',
                          fontFamily: 'var(--font-body)',
                        }}
                      >
                        Siège
                      </span>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Radius note */}
              <p
                className="mt-6 pt-5"
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.8125rem',
                  color: 'var(--muted-foreground)',
                  borderTop: '1px solid rgba(0, 0, 0, 0.06)',
                }}
              >
                Votre commune n&apos;est pas listée ? Contactez-nous pour vérifier si nous intervenons chez vous.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
