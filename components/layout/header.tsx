'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { Phone } from 'lucide-react'
import MobileMenu from './mobile-menu'

// Pages with light hero backgrounds — navbar must use dark text from the start
const LIGHT_HERO_PAGES = ['/contact']

const navLinks = [
  { href: '/', label: 'Accueil' },
  { href: '/services', label: 'Services' },
  { href: '/approche', label: 'Approche' },
  { href: '/zone', label: 'Zone' },
  { href: '/contact', label: 'Contact' },
]

const TRANSITION = '600ms cubic-bezier(0.16, 1, 0.3, 1)'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const isLightHero = LIGHT_HERO_PAGES.includes(pathname)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // On light-hero pages, always use dark text (same as scrolled state)
  const useDarkText = scrolled || isLightHero
  const textColor = useDarkText ? 'var(--foreground)' : 'white'
  const navColor = useDarkText ? 'var(--muted-foreground)' : 'rgba(255, 255, 255, 0.9)'
  const svgWhiteFill = useDarkText ? 'var(--foreground)' : 'white'

  return (
    <header className={`liquid-glass-nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="liquid-glass-nav-inner px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 md:h-16">
          {/* Logo */}
          <Link
            href="/"
            className="group relative z-10 flex items-center gap-2.5"
            aria-label="OPENDOOR - Retour à l'accueil"
          >
            <svg
              viewBox="0 0 93.89 90.66"
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8 md:w-9 md:h-9"
              aria-hidden="true"
            >
              {/* Serrure */}
              <path d="M25.6,61.51c-.32-.14-.67-.23-1.04-.23-.47,0-.9.14-1.28.36-.75.44-1.26,1.25-1.26,2.18,0,.7.29,1.34.75,1.8l-.46,3.59h4.5l-.55-3.51c.51-.46.84-1.13.84-1.88,0-1.03-.62-1.91-1.5-2.31Z" fill={svgWhiteFill} style={{ transition: `fill ${TRANSITION}` }} />
              {/* Main (orange) */}
              <path d="M37.43,77.77c-3.42,3.31-8.21,5.22-13.48,4.75-7.88-.69-14.37-6.9-15.42-14.74-.09-.65-.14-1.29-.15-1.92-.03-1.27.08-2.51.31-3.71,1.51-7.74,8.24-13.66,16.44-13.84,2.23-.05,4.56.51,4.56.51,3.71.94,6.28,2.95,7.72,4.32.79.75,1.81,1.27,2.9,1.27,1.09,0,2.15-.43,2.89-1.22,1.45-1.54,1.43-4.14-.21-5.76-1.83-1.73-5.53-4.74-11.04-6.26,0,0-1.67-.44-3.85-.71V4.35c0-2.4-1.95-4.35-4.35-4.35s-4.35,1.95-4.35,4.35v36.61c-.33.08-.67.16-1,.25V10.47c0-2.4-1.95-4.35-4.35-4.35s-4.35,1.95-4.35,4.35v35.14c-.34.27-.69.53-1.02.81v-24.39c0-2.4-1.95-4.35-4.35-4.35h0c-2.4,0-4.35,1.95-4.35,4.35v43.84h0c0,.58.03,1.17.08,1.76,1.06,12.53,11.5,22.51,24.06,23.01,7.34.29,13.97-2.55,18.73-7.26,1.88-1.78,1.7-4.72,0-6.11-1.48-1.21-3.91-1.09-5.45.51Z" fill="#D97706" />
              {/* Clé + cadenas */}
              <path d="M67.44,73.94v-5.89h1.51c1.6,0,2.9-1.3,2.9-2.9s-1.3-2.9-2.9-2.9h-30.5c-1.45-6.02-6.86-10.5-13.33-10.5-7.58,0-13.72,6.14-13.72,13.72s6.14,13.72,13.72,13.72c6.69,0,12.26-4.79,13.47-11.13h12.48v3.52h6.95v-3.52h2.29v5.89h7.12ZM24.56,73.77c-4.59,0-8.31-3.72-8.31-8.31s3.72-8.31,8.31-8.31,8.31,3.72,8.31,8.31-3.72,8.31-8.31,8.31Z" fill={svgWhiteFill} style={{ transition: `fill ${TRANSITION}` }} />
              {/* Maison */}
              <path d="M92.02,46.66l-1.98-1.23-18.37-11.43c-1.28-.8-2.9-.8-4.18,0l-18.31,11.39-2.04,1.27c-1.16.72-1.87,1.99-1.87,3.36v10.38h3.96v-7.85c0-1.37.71-2.64,1.87-3.36l16.39-10.2c1.28-.8,2.9-.8,4.18,0l16.39,10.2c1.16.72,1.87,1.99,1.87,3.36v24.98c0,2.19-1.77,3.96-3.96,3.96h-32.78c-2.19,0-3.96-1.77-3.96-3.96v-7.62h-3.96v13.62c0,1.09.88,1.98,1.98,1.98,7.86,0,36.85-.05,44.68-.06,1.09,0,1.96-.88,1.96-1.97v-33.46c0-1.37-.71-2.64-1.87-3.36Z" fill={svgWhiteFill} style={{ transition: `fill ${TRANSITION}` }} />
            </svg>
            <span
              className="text-lg md:text-xl font-semibold tracking-tight"
              style={{
                fontFamily: 'var(--font-heading)',
                color: textColor,
                transition: `color ${TRANSITION}`,
              }}
            >
              OPENDOOR
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav
            className="hidden lg:flex items-center gap-6"
            aria-label="Navigation principale"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative py-1.5 text-sm font-medium group"
                style={{
                  fontFamily: 'var(--font-body)',
                  color: navColor,
                  transition: `color ${TRANSITION}`,
                }}
              >
                <span className="relative z-10">{link.label}</span>
                <span
                  className="absolute left-1/2 -translate-x-1/2 -bottom-0.5 w-1 h-1 rounded-full opacity-0 group-hover:opacity-100 scale-0 group-hover:scale-100"
                  style={{
                    backgroundColor: 'oklch(0.78 0.14 60)',
                    transition: 'all var(--transition-standard)',
                  }}
                />
              </Link>
            ))}
          </nav>

          {/* CTA Phone - Desktop */}
          <div className="hidden lg:flex items-center">
            <a
              href="tel:0789081857"
              className="inline-flex items-center gap-2.5 px-5 py-2 text-sm font-semibold rounded-full"
              style={{
                color: 'white',
                backgroundColor: useDarkText
                  ? 'oklch(0.70 0.16 60)'
                  : 'rgba(217, 119, 6, 0.25)',
                border: useDarkText
                  ? '1px solid oklch(0.70 0.16 60)'
                  : '1px solid rgba(255, 255, 255, 0.2)',
                boxShadow: useDarkText
                  ? '0 2px 12px rgba(217, 119, 6, 0.3)'
                  : '0 2px 12px rgba(0, 0, 0, 0.1)',
                transition: `all ${TRANSITION}`,
              }}
              onMouseEnter={(e) => {
                const t = e.currentTarget
                t.style.backgroundColor = 'oklch(0.78 0.14 60)'
                t.style.boxShadow = '0 4px 20px rgba(217, 119, 6, 0.4)'
                t.style.transform = 'translateY(-1px)'
              }}
              onMouseLeave={(e) => {
                const t = e.currentTarget
                t.style.backgroundColor = useDarkText
                  ? 'oklch(0.70 0.16 60)'
                  : 'rgba(217, 119, 6, 0.25)'
                t.style.boxShadow = useDarkText
                  ? '0 2px 12px rgba(217, 119, 6, 0.3)'
                  : '0 2px 12px rgba(0, 0, 0, 0.1)'
                t.style.transform = 'translateY(0)'
              }}
            >
              <Phone className="w-4 h-4" strokeWidth={2.5} />
              <span>07 89 08 18 57</span>
            </a>
          </div>

          {/* Mobile: Phone icon + Hamburger */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href="tel:0789081857"
              className="flex items-center justify-center w-10 h-10 rounded-full"
              style={{
                color: 'white',
                backgroundColor: useDarkText
                  ? 'oklch(0.70 0.16 60)'
                  : 'rgba(217, 119, 6, 0.25)',
                border: useDarkText
                  ? '1px solid oklch(0.70 0.16 60)'
                  : '1px solid rgba(255, 255, 255, 0.2)',
                transition: `all ${TRANSITION}`,
              }}
              aria-label="Appelez-nous au 07 89 08 18 57"
            >
              <Phone className="w-4 h-4" strokeWidth={2.5} />
            </a>

            <MobileMenu navLinks={navLinks} scrolled={useDarkText} />
          </div>
        </div>
      </div>
    </header>
  )
}
