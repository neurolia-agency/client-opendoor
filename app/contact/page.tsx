import { Metadata } from 'next'
import ContactHero from '@/components/pages/contact/contact-hero'
import ContactDual from '@/components/pages/contact/contact-dual'
import Coordonnees from '@/components/pages/contact/coordonnees'

export const metadata: Metadata = {
  title: 'Contact | OPENDOOR - Serrurier Narbonne',
  description: 'Contactez OPENDOOR, serrurier à Narbonne. Urgence 24h/24 : 07 89 08 18 57. Formulaire de contact pour devis gratuit.',
  openGraph: {
    title: 'Contact | OPENDOOR - Serrurier Narbonne',
    description: 'Contactez OPENDOOR, serrurier à Narbonne. Urgence 24h/24 : 07 89 08 18 57.',
  },
}

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactDual />
      <Coordonnees />
    </>
  )
}
