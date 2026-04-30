import { HeroSection } from '@/components/sections/hero'
import { WhoWeAreSection } from '@/components/sections/who-we-are'
import { ServicesSection } from '@/components/sections/services'
import { ProcessSection } from '@/components/sections/process'
import { CTASection } from '@/components/sections/cta'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <WhoWeAreSection />
      <ServicesSection />
      <ProcessSection />
      <CTASection />
    </>
  )
}
