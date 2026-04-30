import type { Metadata } from 'next'
import Link from 'next/link'
import { Plug, CheckCircle, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'AI Integration Services',
  description:
    'Seamlessly connect AI and LLM capabilities into your existing tech stack — CRMs, ERPs, databases, and custom applications.',
}

export default function IntegrationsPage() {
  return (
    <div className="pt-24">
      <section className="relative py-16 sm:py-24">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-accent-amber/10 rounded-full blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <Plug className="h-10 w-10 text-accent-amber" />
            </div>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-white">
              AI <span className="text-gradient">Integration</span>
            </h1>
            <p className="mt-6 text-lg text-gray-400 leading-relaxed">
              You don&apos;t need to rebuild your tech stack to use AI. We connect
              AI capabilities directly into your existing systems — seamlessly,
              securely, and without disrupting operations.
            </p>

            <div className="mt-10 glass rounded-2xl p-8">
              <h2 className="text-xl font-bold text-white">What We Integrate With</h2>
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  'CRMs (Salesforce, HubSpot, Pipedrive)',
                  'ERPs (SAP, NetSuite, custom)',
                  'Databases (PostgreSQL, MongoDB, etc.)',
                  'Communication (Slack, Teams, Email)',
                  'Cloud platforms (AWS, GCP, Azure)',
                  'Custom REST/GraphQL APIs',
                  'Legacy systems via middleware',
                  'Third-party SaaS tools',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-accent-emerald flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10 text-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-brand-500 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-brand-500/25 transition-all hover:bg-brand-600 hover:scale-105"
              >
                Discuss Your Integration Needs
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
