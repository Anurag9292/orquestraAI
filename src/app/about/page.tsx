import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Target, Heart, Zap, Users } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About',
  description:
    'orquestraAI is an AI technology services company helping SMBs and mid-market companies unlock the power of artificial intelligence.',
}

const values = [
  {
    icon: Target,
    title: 'Results-Driven',
    description:
      'We measure success by the impact AI has on your business, not by the complexity of the solution.',
  },
  {
    icon: Heart,
    title: 'Honest Partnership',
    description:
      "We'll tell you if AI isn't the right solution. Our reputation is built on trust, not sales.",
  },
  {
    icon: Zap,
    title: 'Speed to Value',
    description:
      'We move fast with proven frameworks. See results in weeks, not months.',
  },
  {
    icon: Users,
    title: 'Collaborative',
    description:
      'We work alongside your team, transferring knowledge and building internal AI capability.',
  },
]

export default function AboutPage() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="relative py-16 sm:py-24">
        <div className="absolute top-0 left-1/2 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-white">
              We Believe Every Business Deserves{' '}
              <span className="text-gradient">Intelligent AI</span>
            </h1>
            <p className="mt-6 text-lg text-gray-400 leading-relaxed">
              orquestraAI was founded on a simple idea: AI shouldn&apos;t be
              exclusive to tech giants. We make cutting-edge AI accessible,
              practical, and profitable for growing businesses.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="glass rounded-2xl p-8 sm:p-12">
              <h2 className="font-display text-2xl font-bold text-white">
                Our Story
              </h2>
              <div className="mt-6 space-y-4 text-gray-400 leading-relaxed">
                <p>
                  We&apos;ve seen firsthand how AI can transform operations,
                  unlock revenue, and give businesses a competitive edge. But
                  we&apos;ve also seen how confusing the landscape can be —
                  especially for companies without dedicated AI teams.
                </p>
                <p>
                  That&apos;s why we built orquestraAI. We act as your AI
                  partner: part strategist, part engineer, part ongoing advisor.
                  We cut through the hype to deliver AI solutions that actually
                  work and deliver measurable ROI.
                </p>
                <p>
                  Like a conductor orchestrating a symphony, we bring together
                  the right AI technologies, integrate them seamlessly into your
                  workflow, and ensure everything works in harmony.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 border-t border-white/5">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-display text-3xl font-bold text-white">
              Our Values
            </h2>
          </div>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {values.map((value) => (
              <div key={value.title} className="glass rounded-2xl p-6">
                <value.icon className="h-8 w-8 text-brand-400" />
                <h3 className="mt-4 text-lg font-semibold text-white">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm text-gray-400">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="font-display text-2xl font-bold text-white">
            Ready to work together?
          </h2>
          <p className="mt-4 text-gray-400">
            Let&apos;s explore how AI can accelerate your business.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand-500 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-brand-500/25 transition-all hover:bg-brand-600 hover:scale-105"
          >
            Book a Free Call
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}
