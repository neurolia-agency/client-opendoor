import { Metadata } from 'next'
import ApprocheHero from '@/components/pages/approche/approche-hero'
import Mission from '@/components/pages/approche/mission'
import Vision from '@/components/pages/approche/vision'
import Valeurs from '@/components/pages/approche/valeurs'
import Differenciation from '@/components/pages/approche/differenciation'
import CtaFinal from '@/components/sections/cta-final'

export const metadata: Metadata = {
  title: 'Notre Approche | OPENDOOR - Serrurier Narbonne',
  description: 'Découvrez notre approche : empathie, transparence et rigueur. Parce que derrière chaque porte, il y a une personne qui compte.',
  openGraph: {
    title: 'Notre Approche | OPENDOOR - Serrurier Narbonne',
    description: 'Découvrez notre approche : empathie, transparence et rigueur. Parce que derrière chaque porte, il y a une personne qui compte.',
  },
}

export default function ApprochePage() {
  return (
    <>
      <ApprocheHero />
      <Mission />
      <Vision />
      <Valeurs />
      <Differenciation />
      <CtaFinal />
    </>
  )
}
