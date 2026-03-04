import { Metadata } from 'next'
import ZoneHero from '@/components/pages/zone/zone-hero'
import VillesCouvertes from '@/components/pages/zone/villes-couvertes'
import InfosPratiques from '@/components/pages/zone/infos-pratiques'
import CtaZone from '@/components/pages/zone/cta-zone'

export const metadata: Metadata = {
  title: 'Zone d\'Intervention | OPENDOOR - Serrurier Narbonne',
  description: 'Intervention rapide à Narbonne et 12 villes dans un rayon de 50 km. Disponible 24h/24, nous sommes toujours à proximité.',
  openGraph: {
    title: 'Zone d\'Intervention | OPENDOOR - Serrurier Narbonne',
    description: 'Intervention rapide à Narbonne et 12 villes dans un rayon de 50 km. Disponible 24h/24.',
  },
}

export default function ZonePage() {
  return (
    <>
      <ZoneHero />
      <VillesCouvertes />
      <InfosPratiques />
      <CtaZone />
    </>
  )
}
