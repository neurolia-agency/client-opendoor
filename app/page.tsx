import Hero from '@/components/sections/hero'
import Reassurance from '@/components/sections/reassurance'
import ServicesPreview from '@/components/sections/services-preview'
import ApprochePreview from '@/components/sections/approche-preview'
import ZonePreview from '@/components/sections/zone-preview'
import CtaFinal from '@/components/sections/cta-final'

export default function HomePage() {
  return (
    <>
      <Hero />
      <Reassurance />
      <ServicesPreview />
      <ApprochePreview />
      <ZonePreview />
      <CtaFinal />
    </>
  )
}
