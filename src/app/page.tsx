import { HeroSection } from '@/components/sections/hero'
import { ServicesSection } from '@/components/sections/services'
import { DemosSection } from '@/components/sections/demos'
import { ProcessSection } from '@/components/sections/process'
import { TestimonialsSection } from '@/components/sections/testimonials'
import { CTASection } from '@/components/sections/cta'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <DemosSection />
      <ProcessSection />
      <TestimonialsSection />
      <CTASection />
    </>
  )
}
