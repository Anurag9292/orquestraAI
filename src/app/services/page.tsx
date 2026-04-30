import type { Metadata } from 'next'
import Link from 'next/link'
import {
  BrainCircuit,
  Sigma,
  Cpu,
  GitBranch,
  BarChart3,
  ArrowRight,
  CheckCircle,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Deep tech AI services: custom model development, statistical modeling, ML infrastructure, research prototyping, and data science.',
}

const services = [
  {
    icon: BrainCircuit,
    title: 'Custom AI & ML Systems',
    description:
      'End-to-end design and implementation of neural architectures, reinforcement learning systems, and autonomous agents. We build models from scratch when off-the-shelf doesn\'t cut it.',
    href: '/services/ai-agents',
    features: [
      'Custom neural architecture design',
      'Model training & fine-tuning at scale',
      'Reinforcement learning systems',
      'Multi-agent orchestration',
      'Domain-specific model development',
      'Performance optimization & distillation',
    ],
  },
  {
    icon: Sigma,
    title: 'Statistical Modeling & Inference',
    description:
      'Rigorous probabilistic modeling for decision-making under uncertainty. We speak the language of Bayes, information theory, and causal reasoning.',
    href: '/services/consulting',
    features: [
      'Bayesian inference & probabilistic programming',
      'Causal modeling & counterfactual analysis',
      'Time-series forecasting',
      'A/B testing & experiment design',
      'Risk modeling & quantification',
      'Monte Carlo methods',
    ],
  },
  {
    icon: Cpu,
    title: 'AI Infrastructure & MLOps',
    description:
      'Production-grade ML systems that scale. From GPU clusters to model serving, we build the infrastructure that makes AI reliable.',
    href: '/services/integrations',
    features: [
      'ML pipeline architecture',
      'Model serving & inference optimization',
      'GPU-optimized training infrastructure',
      'Monitoring, drift detection & alerting',
      'CI/CD for ML models',
      'Cost optimization & auto-scaling',
    ],
  },
  {
    icon: GitBranch,
    title: 'Research & Prototyping',
    description:
      'Turning cutting-edge papers into working systems. We implement novel algorithms, run experiments, and validate feasibility before you commit.',
    href: '/services/consulting',
    features: [
      'Paper implementation & reproduction',
      'Novel algorithm design',
      'Feasibility analysis & benchmarking',
      'Rapid prototyping & iteration',
      'Technical due diligence',
      'State-of-the-art surveys',
    ],
  },
  {
    icon: BarChart3,
    title: 'Data Science & Optimization',
    description:
      'Advanced analytics and mathematical optimization. We turn complex data into clear decisions and build systems that optimize themselves.',
    href: '/services/data',
    features: [
      'Feature engineering & selection',
      'Mathematical optimization (LP, QP, MIP)',
      'Recommendation systems',
      'Anomaly detection',
      'NLP & information extraction',
      'Graph analytics',
    ],
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
              Deep Technical AI <span className="text-gradient">Services</span>
            </h1>
            <p className="mt-6 text-lg text-gray-400">
              We don&apos;t do surface-level AI. Every engagement is grounded in
              mathematical rigor, systems thinking, and production-grade engineering.
            </p>
          </div>
        </div>
      </section>

      {/* Services list */}
      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 space-y-12">
          {services.map((service) => (
            <div
              key={service.title}
              className="glass rounded-2xl p-8 sm:p-10"
            >
              <div className="flex items-center gap-3 mb-4">
                <service.icon className="h-8 w-8 text-brand-400" />
                <h2 className="text-2xl font-bold text-white">
                  {service.title}
                </h2>
              </div>
              <p className="text-gray-400 leading-relaxed max-w-3xl">
                {service.description}
              </p>
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {service.features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center gap-2 text-sm text-gray-300"
                  >
                    <CheckCircle className="h-4 w-4 text-accent-emerald flex-shrink-0" />
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 border-t border-white/5">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="font-display text-2xl font-bold text-white">
            Have a technical challenge?
          </h2>
          <p className="mt-4 text-gray-400">
            We love hard problems. Let&apos;s talk about yours.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand-500 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-brand-500/25 transition-all hover:bg-brand-600 hover:scale-105"
          >
            Get In Touch
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}
