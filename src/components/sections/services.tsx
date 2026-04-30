import Link from 'next/link'
import {
  Bot,
  BrainCircuit,
  MessageSquare,
  Plug,
  BarChart3,
  ArrowRight,
} from 'lucide-react'

const services = [
  {
    icon: Bot,
    title: 'Custom AI Agents',
    description:
      'Purpose-built AI agents that automate complex workflows, make decisions, and interact with your systems autonomously.',
    href: '/services/ai-agents',
    color: 'text-brand-400',
    bgColor: 'bg-brand-500/10',
  },
  {
    icon: BrainCircuit,
    title: 'AI Consulting & Strategy',
    description:
      'Expert guidance on where AI fits in your business, ROI analysis, and a clear roadmap to implementation.',
    href: '/services/consulting',
    color: 'text-accent-cyan',
    bgColor: 'bg-accent-cyan/10',
  },
  {
    icon: MessageSquare,
    title: 'Conversational AI',
    description:
      'Intelligent chatbots and virtual assistants that handle customer support, sales, and internal operations.',
    href: '/services/chatbots',
    color: 'text-accent-emerald',
    bgColor: 'bg-accent-emerald/10',
  },
  {
    icon: Plug,
    title: 'AI Integration',
    description:
      'Seamlessly connect AI and LLM capabilities into your existing tech stack without disrupting operations.',
    href: '/services/integrations',
    color: 'text-accent-amber',
    bgColor: 'bg-accent-amber/10',
  },
  {
    icon: BarChart3,
    title: 'Data & ML Pipelines',
    description:
      'Build robust data infrastructure and machine learning pipelines that turn your data into actionable intelligence.',
    href: '/services/data',
    color: 'text-brand-300',
    bgColor: 'bg-brand-300/10',
  },
]

export function ServicesSection() {
  return (
    <section className="relative py-24 sm:py-32" id="services">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white">
            AI Services That <span className="text-gradient">Deliver Results</span>
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            End-to-end AI solutions tailored to your business needs, from strategy
            to deployment and ongoing optimization.
          </p>
        </div>

        {/* Services grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="group relative glass rounded-2xl p-8 transition-all hover:bg-white/10 hover:border-white/20 hover:scale-[1.02]"
            >
              <div
                className={`inline-flex items-center justify-center rounded-xl ${service.bgColor} p-3`}
              >
                <service.icon className={`h-6 w-6 ${service.color}`} />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-white">
                {service.title}
              </h3>
              <p className="mt-2 text-sm text-gray-400 leading-relaxed">
                {service.description}
              </p>
              <div className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-brand-400 opacity-0 transition-opacity group-hover:opacity-100">
                Learn more
                <ArrowRight className="h-3 w-3" />
              </div>
            </Link>
          ))}

          {/* CTA card */}
          <div className="relative rounded-2xl bg-gradient-brand p-8 flex flex-col justify-center items-center text-center">
            <h3 className="text-xl font-semibold text-white">
              Not sure where to start?
            </h3>
            <p className="mt-2 text-sm text-white/80">
              Book a free AI readiness assessment and we&apos;ll help you identify
              the highest-impact opportunities.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-700 transition-all hover:scale-105"
            >
              Get Started
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
