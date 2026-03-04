'use client'

import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import Link from 'next/link'
import { Menu, X, Phone } from 'lucide-react'

interface NavLink {
  href: string
  label: string
}

interface MobileMenuProps {
  navLinks: NavLink[]
  scrolled?: boolean
}

export default function MobileMenu({ navLinks, scrolled = false }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  // Wait for client-side mount for portal
  useEffect(() => {
    setMounted(true)
  }, [])

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false)
    }
    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [])

  const menuOverlay = isOpen ? (
    <div
      id="mobile-menu"
      className="lg:hidden"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 60,
        backgroundColor: '#1a1008',
      }}
    >
      {/* Close button */}
      <button
        onClick={() => setIsOpen(false)}
        className="absolute top-4 right-4 flex items-center justify-center w-12 h-12"
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          color: 'white',
          borderRadius: 'var(--radius-md)',
          border: 'none',
        }}
        aria-label="Fermer le menu"
      >
        <X className="w-5 h-5" strokeWidth={2} />
      </button>

      {/* Menu Content */}
      <div className="flex flex-col h-full pt-24 pb-8 px-6">
        {/* Navigation Links */}
        <nav className="flex-1" aria-label="Menu mobile">
          <ul className="space-y-2">
            {navLinks.map((link, index) => (
              <li
                key={link.href}
                style={{
                  animation: `menuSlideIn 400ms ease-out ${index * 75}ms both`,
                }}
              >
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block py-4 text-2xl font-medium"
                  style={{
                    fontFamily: 'var(--font-heading)',
                    color: 'rgba(255, 255, 255, 0.9)',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.12)',
                  }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* CTA Section */}
        <div
          className="mt-auto pt-8"
          style={{
            animation: 'menuSlideIn 400ms ease-out 400ms both',
          }}
        >
          <p
            className="text-sm mb-4"
            style={{
              fontFamily: 'var(--font-body)',
              color: 'rgba(255, 255, 255, 0.5)',
            }}
          >
            Une urgence ? Appelez-nous 24h/24
          </p>
          <a
            href="tel:0789081857"
            className="flex items-center justify-center gap-3 w-full py-4 text-lg font-medium"
            style={{
              fontFamily: 'var(--font-body)',
              backgroundColor: 'var(--accent)',
              color: 'var(--accent-foreground)',
              borderRadius: 'var(--radius-lg)',
            }}
            onClick={() => setIsOpen(false)}
          >
            <Phone className="w-5 h-5" strokeWidth={2} />
            <span>07 89 08 18 57</span>
          </a>

          {/* Tagline */}
          <p
            className="text-center mt-6 text-sm italic"
            style={{
              fontFamily: 'var(--font-heading)',
              color: 'rgba(255, 255, 255, 0.4)',
            }}
          >
            On s&apos;occupe de tout.
          </p>
        </div>
      </div>
    </div>
  ) : null

  return (
    <>
      {/* Hamburger / Close Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative z-[70] flex items-center justify-center w-12 h-12"
        style={{
          backgroundColor: isOpen ? 'rgba(255, 255, 255, 0.15)' : 'transparent',
          color: isOpen ? 'white' : scrolled ? 'var(--foreground)' : 'white',
          borderRadius: 'var(--radius-md)',
          border: isOpen ? 'none' : scrolled ? '2px solid var(--border)' : '2px solid rgba(255, 255, 255, 0.3)',
          transition: 'all 500ms cubic-bezier(0.16, 1, 0.3, 1)',
        }}
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
        aria-label={isOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
      >
        {isOpen ? (
          <X className="w-5 h-5" strokeWidth={2} />
        ) : (
          <Menu className="w-5 h-5" strokeWidth={2} />
        )}
      </button>

      {/* Portal: render menu overlay at document.body level to escape backdrop-filter containment */}
      {mounted && menuOverlay && createPortal(menuOverlay, document.body)}
    </>
  )
}
