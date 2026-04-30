import Link from 'next/link'
import {
  BrainCircuit,
  Sigma,
  Cpu,
  GitBranch,
  BarChart3,
  ArrowRight,
} from 'lucide-react'

const services = [
  {
    icon: BrainCircuit,
    title: 'Custom AI & ML Systems',
    description:
      'End-to-end design and implementation of neural architectures, reinforcement learning systems, and autonomous agents tailored to your domain.',
    href: '/services/ai-agents',
    color: 'text-brand-400',
    bgColor: 'bg-brand-500/10',
  },
  {
    icon: Sigma,
    title: 'Statistical Modeling & Inference',
    description:
      'Bayesian inference, causal modeling, time-series forecasting, and probabilistic programming for decision-making under uncertainty.',
    href: '/services/consulting',
    color: 'text-accent-cyan',
    bgColor: 'bg-accent-cyan/10',
  },
  {
    icon: Cpu,
    title: 'AI Infrastructure & MLOps',
    description:
      'Production ML pipelines, model serving at scale, GPU-optimized training infrastructure, and continuous monitoring systems.',
    href: '/services/integrations',
    color: 'text-accent-emerald',
    bgColor: 'bg-accent-emerald/10',
  },
  {
    icon: GitBranch,
    title: 'Research & Prototyping',
    description:
      'Turning cutting-edge research into working prototypes. Novel algorithm design, paper implementations, and feasibility analysis.',
    href: '/services/consulting',
    color: 'text-accent-amber',
    bgColor: 'bg-accent-amber/10',
  },
  {
    icon: BarChart3,
    title: 'Data Science & Analytics',
    description:
      'Advanced analytics, feature engineering, A/B testing frameworks, and mathematical optimization for business-critical decisions.',
    href: '/services/data',
    color: 'text-brand-300',
    bgColor: 'bg-brand-300/10',
  },
]

export function ServicesSection() {
  return (
    <section className="relative py-24 sm:py-32 border-t border-white/5" id="services">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white">
            What We <span className="text-gradient">Build</span>
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            Deep technical work at the frontier of AI. No templates, no shortcuts —
            just rigorous engineering.
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
              Have a hard problem?
            </h3>
            <p className="mt-2 text-sm text-white/80">
              We love the kind of problems that others say can&apos;t be solved.
              Let&apos;s talk about yours.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-700 transition-all hover:scale-105"
            >
              Get In Touch
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
