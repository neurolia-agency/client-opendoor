'use client'

import { motion } from 'motion/react'
import Link from 'next/link'
import { AlertCircle, ShieldCheck, Wrench, ArrowRight } from 'lucide-react'

const services = [
  {
    icon: AlertCircle,
    color: 'oklch(0.70 0.16 60)',
    title: 'Urgences',
    description: 'Intervention rapide 24h/24 pour porte claquée, verrouillée ou effraction.',
    stat: '<30 min',
    href: '/services#urgences',
  },
  {
    icon: ShieldCheck,
    color: 'oklch(0.78 0.14 60)',
    title: 'Installation',
    description: 'Changement de serrure, blindage de porte, installation multipoints.',
    stat: 'Devis gratuit',
    href: '/services#installation',
  },
  {
    icon: Wrench,
    color: 'oklch(0.62 0.18 55)',
    title: 'Entretien',
    description: 'Maintenance préventive, réparation de cylindres, diagnostic complet.',
    stat: 'Sur mesure',
    href: '/services#entretien',
  },
]

function LogoWatermark() {
  return (
    <svg
      viewBox="0 0 93.89 90.66"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute pointer-events-none select-none hidden lg:block"
      style={{
        width: 'clamp(800px, 95vw, 1500px)',
        height: 'auto',
        right: '-18%',
        top: '50%',
        transform: 'translateY(-50%)',
        opacity: 0.025,
      }}
      aria-hidden="true"
    >
      <path
        d="M25.6,61.51c-.32-.14-.67-.23-1.04-.23-.47,0-.9.14-1.28.36-.75.44-1.26,1.25-1.26,2.18,0,.7.29,1.34.75,1.8l-.46,3.59h4.5l-.55-3.51c.51-.46.84-1.13.84-1.88,0-1.03-.62-1.91-1.5-2.31Z"
        fill="oklch(0.78 0.14 60)"
      />
      <path
        d="M37.43,77.77c-3.42,3.31-8.21,5.22-13.48,4.75-7.88-.69-14.37-6.9-15.42-14.74-.09-.65-.14-1.29-.15-1.92-.03-1.27.08-2.51.31-3.71,1.51-7.74,8.24-13.66,16.44-13.84,2.23-.05,4.56.51,4.56.51,3.71.94,6.28,2.95,7.72,4.32.79.75,1.81,1.27,2.9,1.27,1.09,0,2.15-.43,2.89-1.22,1.45-1.54,1.43-4.14-.21-5.76-1.83-1.73-5.53-4.74-11.04-6.26,0,0-1.67-.44-3.85-.71V4.35c0-2.4-1.95-4.35-4.35-4.35s-4.35,1.95-4.35,4.35v36.61c-.33.08-.67.16-1,.25V10.47c0-2.4-1.95-4.35-4.35-4.35s-4.35,1.95-4.35,4.35v35.14c-.34.27-.69.53-1.02.81v-24.39c0-2.4-1.95-4.35-4.35-4.35h0c-2.4,0-4.35,1.95-4.35,4.35v43.84h0c0,.58.03,1.17.08,1.76,1.06,12.53,11.5,22.51,24.06,23.01,7.34.29,13.97-2.55,18.73-7.26,1.88-1.78,1.7-4.72,0-6.11-1.48-1.21-3.91-1.09-5.45.51Z"
        fill="oklch(0.78 0.14 60)"
      />
      <path
        d="M67.44,73.94v-5.89h1.51c1.6,0,2.9-1.3,2.9-2.9s-1.3-2.9-2.9-2.9h-30.5c-1.45-6.02-6.86-10.5-13.33-10.5-7.58,0-13.72,6.14-13.72,13.72s6.14,13.72,13.72,13.72c6.69,0,12.26-4.79,13.47-11.13h12.48v3.52h6.95v-3.52h2.29v5.89h7.12ZM24.56,73.77c-4.59,0-8.31-3.72-8.31-8.31s3.72-8.31,8.31-8.31,8.31,3.72,8.31,8.31-3.72,8.31-8.31,8.31Z"
        fill="oklch(0.78 0.14 60)"
      />
      <path
        d="M92.02,46.66l-1.98-1.23-18.37-11.43c-1.28-.8-2.9-.8-4.18,0l-18.31,11.39-2.04,1.27c-1.16.72-1.87,1.99-1.87,3.36v10.38h3.96v-7.85c0-1.37.71-2.64,1.87-3.36l16.39-10.2c1.28-.8,2.9-.8,4.18,0l16.39,10.2c1.16.72,1.87,1.99,1.87,3.36v24.98c0,2.19-1.77,3.96-3.96,3.96h-32.78c-2.19,0-3.96-1.77-3.96-3.96v-7.62h-3.96v13.62c0,1.09.88,1.98,1.98,1.98,7.86,0,36.85-.05,44.68-.06,1.09,0,1.96-.88,1.96-1.97v-33.46c0-1.37-.71-2.64-1.87-3.36Z"
        fill="oklch(0.78 0.14 60)"
      />
    </svg>
  )
}

export default function ServicesPreview() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Richer gradient background */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(165deg,
              oklch(0.20 0.04 35) 0%,
              oklch(0.28 0.08 42) 25%,
              oklch(0.35 0.12 48) 55%,
              oklch(0.28 0.08 40) 85%,
              oklch(0.22 0.05 35) 100%
            )
          `,
        }}
      />

      {/* Radial glow — top-left warm accent */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 60% 50% at 20% 15%,
              oklch(0.55 0.14 55 / 0.15) 0%,
              transparent 60%
            ),
            radial-gradient(ellipse 40% 50% at 80% 80%,
              oklch(0.50 0.10 50 / 0.08) 0%,
              transparent 60%
            )
          `,
        }}
      />

      {/* Dot grid texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.06]"
        style={{
          backgroundImage: `radial-gradient(circle, oklch(0.78 0.14 60) 0.5px, transparent 0.5px)`,
          backgroundSize: '24px 24px',
        }}
      />

      {/* Logo watermark — filigrane géant */}
      <LogoWatermark />

      {/* Subtle horizontal line accent */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background: 'linear-gradient(90deg, transparent 5%, oklch(0.70 0.16 60 / 0.25) 50%, transparent 95%)',
        }}
      />

      <div className="container-custom relative z-10">
        {/* Section header */}
        <div className="max-w-2xl mb-16 lg:mb-20">
          <motion.h2
            className="mb-5"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2rem, 4vw + 0.5rem, 3rem)',
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              color: 'white',
              textTransform: 'uppercase',
            }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            Nous sommes là
            <br />
            <span style={{ color: 'oklch(0.78 0.14 60)' }}>pour vous</span>
          </motion.h2>

          <motion.p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'clamp(1rem, 1.2vw + 0.5rem, 1.1875rem)',
              lineHeight: 1.65,
              color: 'rgba(255, 255, 255, 0.6)',
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            Urgences, installation ou entretien : des solutions adaptées à chaque situation.
          </motion.p>
        </div>

        {/* Services cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              className="group relative overflow-hidden"
              style={{
                borderRadius: 'var(--radius-xl)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                background: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(12px)',
                transition: 'all 400ms cubic-bezier(0.16, 1, 0.3, 1)',
              }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{
                y: -8,
                borderColor: `${service.color}`,
                boxShadow: `0 20px 60px ${service.color}18, inset 0 1px 0 rgba(255,255,255,0.08)`,
              }}
            >
              {/* Image placeholder area */}
              <div
                className="relative h-48 lg:h-56 overflow-hidden"
                style={{
                  background: `linear-gradient(135deg, ${service.color}15, ${service.color}08)`,
                }}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <service.icon className="w-16 h-16 opacity-20" style={{ color: service.color }} strokeWidth={1} />
                </div>

                {/* Stat badge */}
                <div
                  className="absolute bottom-4 left-6"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.375rem',
                    padding: '0.375rem 0.875rem',
                    background: service.color,
                    borderRadius: 'var(--radius-pill)',
                    boxShadow: `0 4px 16px ${service.color}40`,
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.8125rem',
                      fontWeight: 700,
                      color: 'white',
                    }}
                  >
                    {service.stat}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 lg:p-8">
                <h3
                  className="mb-3"
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: 'clamp(1.375rem, 2vw + 0.5rem, 1.75rem)',
                    fontWeight: 600,
                    color: 'white',
                    lineHeight: 1.2,
                  }}
                >
                  {service.title}
                </h3>

                <p
                  className="mb-6"
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.9375rem',
                    lineHeight: 1.65,
                    color: 'rgba(255, 255, 255, 0.55)',
                  }}
                >
                  {service.description}
                </p>

                <Link
                  href={service.href}
                  className="inline-flex items-center gap-2 group/link"
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.875rem',
                    fontWeight: 600,
                    color: service.color,
                    transition: 'gap 300ms ease-out',
                  }}
                >
                  <span>En savoir plus</span>
                  <ArrowRight
                    className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-2"
                    strokeWidth={2}
                  />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="mt-14 lg:mt-18 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <Link
            href="/services"
            className="inline-flex items-center gap-3 px-6 py-4 lg:px-8 lg:py-4 group"
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '1rem',
              fontWeight: 500,
              color: 'white',
              border: '2px solid rgba(255, 255, 255, 0.2)',
              borderRadius: 'var(--radius-md)',
              transition: 'all 300ms ease-out',
            }}
          >
            <span>Voir tous nos services</span>
            <ArrowRight
              className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
              strokeWidth={2}
            />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
