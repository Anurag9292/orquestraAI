import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, TrendingUp, Clock, DollarSign } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Case Studies',
  description:
    'See how orquestraAI has helped businesses transform their operations with custom AI solutions. Real results, real ROI.',
}

const caseStudies = [
  {
    slug: 'techflow-support-agent',
    company: 'TechFlow Solutions',
    industry: 'SaaS',
    title: 'Reducing Customer Support Response Time by 80%',
    description:
      'We built a custom AI agent that handles Tier 1 support tickets, reducing average response time from 4 hours to 45 minutes.',
    metrics: [
      { icon: Clock, label: 'Response Time', value: '-80%' },
      { icon: TrendingUp, label: 'CSAT Score', value: '+35%' },
      { icon: DollarSign, label: 'Annual Savings', value: '$120K' },
    ],
    tags: ['AI Agent', 'Customer Support', 'Automation'],
  },
  {
    slug: 'scaleup-operations',
    company: 'ScaleUp Inc.',
    industry: 'Operations',
    title: 'Identifying $200K in Annual Savings Through AI Automation',
    description:
      'Our AI audit uncovered automation opportunities across 5 departments, leading to a phased implementation that paid for itself in 3 months.',
    metrics: [
      { icon: DollarSign, label: 'Annual Savings', value: '$200K' },
      { icon: Clock, label: 'Time Saved', value: '40hrs/week' },
      { icon: TrendingUp, label: 'ROI', value: '450%' },
    ],
    tags: ['AI Consulting', 'Automation', 'ROI'],
  },
  {
    slug: 'growthmetrics-chatbot',
    company: 'GrowthMetrics',
    industry: 'MarTech',
    title: 'AI Chatbot Handling 70% of Inbound Queries',
    description:
      'A conversational AI system that understands complex product questions and guides prospects through the sales funnel autonomously.',
    metrics: [
      { icon: TrendingUp, label: 'Queries Automated', value: '70%' },
      { icon: Clock, label: 'Avg. Resolution', value: '2 min' },
      { icon: DollarSign, label: 'Lead Conv. Increase', value: '+25%' },
    ],
    tags: ['Chatbot', 'Sales', 'Lead Generation'],
  },
]

export default function CaseStudiesPage() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="relative py-16 sm:py-24">
        <div className="absolute top-0 right-1/3 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-white">
              Real Results, <span className="text-gradient">Real ROI</span>
            </h1>
            <p className="mt-6 text-lg text-gray-400">
              See how we&apos;ve helped businesses transform their operations with
              intelligent AI solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Case studies */}
      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 space-y-8">
          {caseStudies.map((study) => (
            <div
              key={study.slug}
              className="glass rounded-2xl p-8 sm:p-10"
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-sm font-medium text-brand-400">
                      {study.company}
                    </span>
                    <span className="text-xs text-gray-500">
                      {study.industry}
                    </span>
                  </div>
                  <h2 className="text-2xl font-bold text-white">
                    {study.title}
                  </h2>
                  <p className="mt-3 text-gray-400">{study.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {study.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-white/5 px-3 py-1 text-xs text-gray-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Metrics */}
                <div className="space-y-4">
                  {study.metrics.map((metric) => (
                    <div
                      key={metric.label}
                      className="flex items-center gap-3 bg-white/5 rounded-xl p-3"
                    >
                      <metric.icon className="h-5 w-5 text-brand-400 flex-shrink-0" />
                      <div>
                        <p className="text-lg font-bold text-white">
                          {metric.value}
                        </p>
                        <p className="text-xs text-gray-400">{metric.label}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 border-t border-white/5">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="font-display text-2xl font-bold text-white">
            Want results like these?
          </h2>
          <p className="mt-4 text-gray-400">
            Let&apos;s discuss how AI can drive similar outcomes for your business.
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
