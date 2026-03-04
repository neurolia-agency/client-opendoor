import type { Metadata } from 'next'
import { Cormorant_Garamond, Inter, Ubuntu } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import { SmoothScrollProvider } from '@/components/smooth-scroll-provider'
import { Toaster } from 'sonner'

const ubuntu = Ubuntu({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-ubuntu',
  display: 'swap',
})

const cormorantGaramond = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'OPENDOOR - Serrurier Narbonne 24h/24 | On s\'occupe de tout',
  description: 'Serrurier professionnel à Narbonne et environs. Intervention rapide 24h/24, 7j/7. Urgences, installation, dépannage. Devis gratuit. Appelez le 07 89 08 18 57.',
  keywords: ['serrurier', 'Narbonne', 'urgence', 'dépannage', 'serrure', '24h/24', 'Aude'],
  authors: [{ name: 'OPENDOOR' }],
  creator: 'OPENDOOR',
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://opendoor-narbonne.fr',
    siteName: 'OPENDOOR',
    title: 'OPENDOOR - Serrurier Narbonne 24h/24',
    description: 'Serrurier professionnel à Narbonne. Intervention rapide, tarifs clairs, travail soigné.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://opendoor-narbonne.fr',
  name: 'OPENDOOR',
  description: 'Serrurier professionnel à Narbonne et environs. Intervention rapide 24h/24, 7j/7. Urgences, installation, dépannage.',
  url: 'https://opendoor-narbonne.fr',
  telephone: '+33789081857',
  email: 'contact@opendoor-narbonne.fr',
  image: 'https://opendoor-narbonne.fr/logo.svg',
  priceRange: '€€',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Narbonne',
    addressRegion: 'Occitanie',
    postalCode: '11100',
    addressCountry: 'FR',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 43.1838,
    longitude: 3.0035,
  },
  areaServed: {
    '@type': 'GeoCircle',
    geoMidpoint: {
      '@type': 'GeoCoordinates',
      latitude: 43.1838,
      longitude: 3.0035,
    },
    geoRadius: '50000',
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday',
    ],
    opens: '00:00',
    closes: '23:59',
  },
  sameAs: [],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Services de serrurerie',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Urgences serrurerie',
          description: 'Intervention rapide 24h/24 pour porte claquée, verrouillée ou effraction',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Installation et sécurisation',
          description: 'Changement de serrure, blindage de porte, installation multipoints',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Entretien serrures',
          description: 'Maintenance préventive, réparation de cylindres, diagnostic complet',
        },
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" suppressHydrationWarning className={`${ubuntu.variable} ${cormorantGaramond.variable} ${inter.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="theme-color" content="#FFFBF0" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <SmoothScrollProvider>
          {/* Skip to content - Accessibility */}
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-[var(--accent)] focus:text-white focus:rounded-lg focus:outline-none"
          >
            Aller au contenu principal
          </a>
          <Header />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer />
          <Toaster
            position="top-center"
            toastOptions={{
              style: {
                background: 'var(--card)',
                color: 'var(--foreground)',
                border: '1px solid var(--border)',
                fontFamily: 'var(--font-body)',
              },
            }}
          />
        </SmoothScrollProvider>
      </body>
    </html>
  )
}
