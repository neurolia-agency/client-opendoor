import Link from 'next/link'
import Image from 'next/image'
import { Phone, MapPin, Clock } from 'lucide-react'

const navLinks = [
  { href: '/', label: 'Accueil' },
  { href: '/services', label: 'Services' },
  { href: '/approche', label: 'Approche' },
  { href: '/zone', label: 'Zone' },
  { href: '/contact', label: 'Contact' },
]

const serviceLinks = [
  { href: '/services#urgences', label: 'Urgences' },
  { href: '/services#installation', label: 'Installation' },
  { href: '/services#entretien', label: 'Entretien' },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer
      className="relative mt-auto"
      style={{
        background: 'linear-gradient(180deg, oklch(0.35 0.06 50) 0%, oklch(0.25 0.05 45) 100%)',
        borderTop: '1px solid oklch(0.45 0.06 55)',
      }}
    >
      {/* Grain texture overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`
        }}
      />

      {/* Main Footer Content */}
      <div className="container-custom relative section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

          {/* Column 1: À propos */}
          <div className="lg:col-span-1">
            <Link
              href="/"
              className="inline-flex items-center gap-3 mb-6"
              aria-label="OPENDOOR - Retour à l'accueil"
            >
              <svg
                viewBox="0 0 93.89 90.66"
                xmlns="http://www.w3.org/2000/svg"
                className="w-9 h-9"
                aria-hidden="true"
              >
                {/* Serrure (blanc) */}
                <path d="M25.6,61.51c-.32-.14-.67-.23-1.04-.23-.47,0-.9.14-1.28.36-.75.44-1.26,1.25-1.26,2.18,0,.7.29,1.34.75,1.8l-.46,3.59h4.5l-.55-3.51c.51-.46.84-1.13.84-1.88,0-1.03-.62-1.91-1.5-2.31Z" fill="white" />
                {/* Main (orange) */}
                <path d="M37.43,77.77c-3.42,3.31-8.21,5.22-13.48,4.75-7.88-.69-14.37-6.9-15.42-14.74-.09-.65-.14-1.29-.15-1.92-.03-1.27.08-2.51.31-3.71,1.51-7.74,8.24-13.66,16.44-13.84,2.23-.05,4.56.51,4.56.51,3.71.94,6.28,2.95,7.72,4.32.79.75,1.81,1.27,2.9,1.27,1.09,0,2.15-.43,2.89-1.22,1.45-1.54,1.43-4.14-.21-5.76-1.83-1.73-5.53-4.74-11.04-6.26,0,0-1.67-.44-3.85-.71V4.35c0-2.4-1.95-4.35-4.35-4.35s-4.35,1.95-4.35,4.35v36.61c-.33.08-.67.16-1,.25V10.47c0-2.4-1.95-4.35-4.35-4.35s-4.35,1.95-4.35,4.35v35.14c-.34.27-.69.53-1.02.81v-24.39c0-2.4-1.95-4.35-4.35-4.35h0c-2.4,0-4.35,1.95-4.35,4.35v43.84h0c0,.58.03,1.17.08,1.76,1.06,12.53,11.5,22.51,24.06,23.01,7.34.29,13.97-2.55,18.73-7.26,1.88-1.78,1.7-4.72,0-6.11-1.48-1.21-3.91-1.09-5.45.51Z" fill="#D97706" />
                {/* Clé + cadenas (blanc) */}
                <path d="M67.44,73.94v-5.89h1.51c1.6,0,2.9-1.3,2.9-2.9s-1.3-2.9-2.9-2.9h-30.5c-1.45-6.02-6.86-10.5-13.33-10.5-7.58,0-13.72,6.14-13.72,13.72s6.14,13.72,13.72,13.72c6.69,0,12.26-4.79,13.47-11.13h12.48v3.52h6.95v-3.52h2.29v5.89h7.12ZM24.56,73.77c-4.59,0-8.31-3.72-8.31-8.31s3.72-8.31,8.31-8.31,8.31,3.72,8.31,8.31-3.72,8.31-8.31,8.31Z" fill="white" />
                {/* Maison (blanc) */}
                <path d="M92.02,46.66l-1.98-1.23-18.37-11.43c-1.28-.8-2.9-.8-4.18,0l-18.31,11.39-2.04,1.27c-1.16.72-1.87,1.99-1.87,3.36v10.38h3.96v-7.85c0-1.37.71-2.64,1.87-3.36l16.39-10.2c1.28-.8,2.9-.8,4.18,0l16.39,10.2c1.16.72,1.87,1.99,1.87,3.36v24.98c0,2.19-1.77,3.96-3.96,3.96h-32.78c-2.19,0-3.96-1.77-3.96-3.96v-7.62h-3.96v13.62c0,1.09.88,1.98,1.98,1.98,7.86,0,36.85-.05,44.68-.06,1.09,0,1.96-.88,1.96-1.97v-33.46c0-1.37-.71-2.64-1.87-3.36Z" fill="white" />
              </svg>
              <span
                className="text-2xl font-semibold tracking-tight"
                style={{
                  fontFamily: 'var(--font-heading)',
                  color: 'white',
                }}
              >
                OPENDOOR
              </span>
            </Link>

            <p
              className="text-lg italic mb-6"
              style={{
                fontFamily: 'var(--font-heading)',
                color: 'rgba(255, 255, 255, 0.7)',
              }}
            >
              Votre serrurier à Narbonne.
            </p>

            {/* Phone CTA */}
            <a
              href="tel:0789081857"
              className="inline-flex items-center gap-3 px-5 py-3 font-semibold group"
              style={{
                fontFamily: 'var(--font-body)',
                background: 'linear-gradient(135deg, oklch(0.70 0.16 60) 0%, oklch(0.78 0.14 60) 100%)',
                color: 'white',
                borderRadius: 'var(--radius-md)',
                boxShadow: '0 4px 16px rgba(217, 119, 6, 0.3)',
                transition: 'all var(--transition-standard)',
              }}
            >
              <Phone className="w-4 h-4" strokeWidth={2} />
              <span>07 89 08 18 57</span>
            </a>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h4
              className="text-sm font-semibold uppercase tracking-wide mb-6"
              style={{
                fontFamily: 'var(--font-body)',
                color: 'oklch(0.78 0.14 60)',
                letterSpacing: '0.05em',
              }}
            >
              Navigation
            </h4>
            <nav aria-label="Footer navigation">
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="inline-block text-base hover-lift"
                      style={{
                        fontFamily: 'var(--font-body)',
                        color: 'rgba(255, 255, 255, 0.7)',
                        transition: 'color var(--transition-standard)',
                      }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4
              className="text-sm font-semibold uppercase tracking-wide mb-6"
              style={{
                fontFamily: 'var(--font-body)',
                color: 'oklch(0.78 0.14 60)',
                letterSpacing: '0.05em',
              }}
            >
              Services
            </h4>
            <nav aria-label="Footer services">
              <ul className="space-y-3">
                {serviceLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="inline-block text-base"
                      style={{
                        fontFamily: 'var(--font-body)',
                        color: 'rgba(255, 255, 255, 0.7)',
                        transition: 'color var(--transition-standard)',
                      }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4
              className="text-sm font-semibold uppercase tracking-wide mb-6"
              style={{
                fontFamily: 'var(--font-body)',
                color: 'oklch(0.78 0.14 60)',
                letterSpacing: '0.05em',
              }}
            >
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone
                  className="w-5 h-5 mt-0.5 flex-shrink-0"
                  style={{ color: 'oklch(0.70 0.16 60)' }}
                  strokeWidth={2}
                />
                <div>
                  <a
                    href="tel:0789081857"
                    className="text-base font-medium"
                    style={{
                      fontFamily: 'var(--font-body)',
                      color: 'white',
                      transition: 'color var(--transition-standard)',
                    }}
                  >
                    07 89 08 18 57
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin
                  className="w-5 h-5 mt-0.5 flex-shrink-0"
                  style={{ color: 'oklch(0.70 0.16 60)' }}
                  strokeWidth={2}
                />
                <span
                  className="text-base"
                  style={{
                    fontFamily: 'var(--font-body)',
                    color: 'rgba(255, 255, 255, 0.7)',
                  }}
                >
                  Narbonne + 50 km
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Clock
                  className="w-5 h-5 mt-0.5 flex-shrink-0"
                  style={{ color: 'oklch(0.70 0.16 60)' }}
                  strokeWidth={2}
                />
                <span
                  className="text-base"
                  style={{
                    fontFamily: 'var(--font-body)',
                    color: 'rgba(255, 255, 255, 0.7)',
                  }}
                >
                  24h/24, 7j/7
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div
        className="relative"
        style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
        }}
      >
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p
              className="text-sm"
              style={{
                fontFamily: 'var(--font-body)',
                color: 'rgba(255, 255, 255, 0.5)',
              }}
            >
              © {currentYear} OPENDOOR. Tous droits réservés.
            </p>
            <Link
              href="/mentions-legales"
              className="text-sm"
              style={{
                fontFamily: 'var(--font-body)',
                color: 'rgba(255, 255, 255, 0.5)',
                transition: 'color var(--transition-standard)',
              }}
            >
              Mentions légales
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
