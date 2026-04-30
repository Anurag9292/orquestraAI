import type { Metadata } from 'next'
import Link from 'next/link'
import {
  Bot,
  BrainCircuit,
  MessageSquare,
  Plug,
  BarChart3,
  ArrowRight,
  CheckCircle,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'AI Services',
  description:
    'Comprehensive AI services including custom AI agents, consulting, chatbots, integrations, and data analytics. From strategy to deployment.',
}

const services = [
  {
    icon: Bot,
    title: 'Custom AI Agents',
    description:
      'Purpose-built AI agents that automate complex workflows, make decisions, and interact with your systems autonomously.',
    href: '/services/ai-agents',
    features: [
      'Multi-step task automation',
      'Tool-use and API integration',
      'Human-in-the-loop oversight',
      'Continuous learning & improvement',
    ],
    pricing: 'Starting at $10,000',
  },
  {
    icon: BrainCircuit,
    title: 'AI Consulting & Strategy',
    description:
      'Expert guidance on where AI fits in your business, ROI analysis, and a clear roadmap to implementation.',
    href: '/services/consulting',
    features: [
      'AI readiness assessment',
      'Opportunity identification',
      'ROI modeling & projections',
      'Technology stack recommendations',
    ],
    pricing: 'Starting at $2,500',
  },
  {
    icon: MessageSquare,
    title: 'Conversational AI & Chatbots',
    description:
      'Intelligent chatbots and virtual assistants that handle customer support, sales, and internal operations.',
    href: '/services/chatbots',
    features: [
      'Natural language understanding',
      'Multi-channel deployment',
      'Knowledge base integration',
      'Handoff to human agents',
    ],
    pricing: 'Starting at $5,000',
  },
  {
    icon: Plug,
    title: 'AI Integration',
    description:
      'Seamlessly connect AI and LLM capabilities into your existing tech stack without disrupting operations.',
    href: '/services/integrations',
    features: [
      'API & webhook integrations',
      'CRM & ERP connectivity',
      'Legacy system compatibility',
      'Real-time data sync',
    ],
    pricing: 'Starting at $7,500',
  },
  {
    icon: BarChart3,
    title: 'Data & ML Pipelines',
    description:
      'Build robust data infrastructure and machine learning pipelines that turn your data into actionable intelligence.',
    href: '/services/data',
    features: [
      'Data pipeline architecture',
      'Model training & fine-tuning',
      'Real-time analytics dashboards',
      'Predictive modeling',
    ],
    pricing: 'Starting at $15,000',
  },
]

export default function ServicesPage() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="relative py-16 sm:py-24">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-white">
              AI Services for <span className="text-gradient">Every Stage</span>
            </h1>
            <p className="mt-6 text-lg text-gray-400">
              Whether you&apos;re just exploring AI or ready to scale, we have the
              expertise and proven processes to deliver results.
            </p>
          </div>
        </div>
      </section>

      {/* Services list */}
      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 space-y-12">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="glass rounded-2xl p-8 sm:p-10 grid grid-cols-1 lg:grid-cols-3 gap-8"
            >
              <div className="lg:col-span-2">
                <div className="flex items-center gap-3">
                  <service.icon className="h-8 w-8 text-brand-400" />
                  <h2 className="text-2xl font-bold text-white">
                    {service.title}
                  </h2>
                </div>
                <p className="mt-4 text-gray-400 leading-relaxed">
                  {service.description}
                </p>
                <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-sm text-gray-300"
                    >
                      <CheckCircle className="h-4 w-4 text-accent-emerald flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col justify-between items-start lg:items-end">
                <p className="text-sm text-gray-400">
                  <span className="block text-lg font-semibold text-white">
                    {service.pricing}
                  </span>
                  per project
                </p>
                <Link
                  href={service.href}
                  className="mt-4 inline-flex items-center gap-2 rounded-full bg-brand-500 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-brand-600 hover:scale-105"
                >
                  Learn More
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Engagement models */}
      <section className="py-24 border-t border-white/5">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-bold text-white">
              Flexible Engagement Models
            </h2>
            <p className="mt-4 text-gray-400">
              Choose the model that works best for your needs and budget.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass rounded-2xl p-8 text-center">
              <h3 className="text-xl font-semibold text-white">Project-Based</h3>
              <p className="mt-2 text-sm text-gray-400">
                Fixed scope, fixed price. Perfect for well-defined AI projects
                with clear deliverables.
              </p>
            </div>
            <div className="glass rounded-2xl p-8 text-center border-brand-500/50">
              <h3 className="text-xl font-semibold text-white">
                Hybrid (Recommended)
              </h3>
              <p className="mt-2 text-sm text-gray-400">
                Initial project build, then ongoing retainer for optimization,
                support, and new features.
              </p>
            </div>
            <div className="glass rounded-2xl p-8 text-center">
              <h3 className="text-xl font-semibold text-white">Retainer</h3>
              <p className="mt-2 text-sm text-gray-400">
                Dedicated AI support on a monthly basis. Ideal for continuous
                improvement and scaling.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
