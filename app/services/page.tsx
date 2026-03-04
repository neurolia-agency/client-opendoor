import { Metadata } from 'next'
import ServicesHero from '@/components/pages/services/services-hero'
import ServiceUrgences from '@/components/pages/services/service-urgences'
import ServiceInstallation from '@/components/pages/services/service-installation'
import ServiceEntretien from '@/components/pages/services/service-entretien'
import CtaFinal from '@/components/sections/cta-final'

export const metadata: Metadata = {
  title: 'Nos Services | OPENDOOR - Serrurier Narbonne',
  description: 'Urgences 24h/24, installation et sécurisation, entretien de serrures. Intervention rapide à Narbonne et environs. Devis gratuit.',
  openGraph: {
    title: 'Nos Services | OPENDOOR - Serrurier Narbonne',
    description: 'Urgences 24h/24, installation et sécurisation, entretien de serrures. Intervention rapide à Narbonne et environs.',
  },
}

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServiceUrgences />
      <ServiceInstallation />
      <ServiceEntretien />
      <CtaFinal />
    </>
  )
}
