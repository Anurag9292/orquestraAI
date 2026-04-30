import { Search, Lightbulb, Hammer, Rocket } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: Search,
    title: 'Understand',
    description:
      'We deeply understand your problem space, data landscape, and constraints. No solution exists without understanding the mathematics of your domain.',
  },
  {
    number: '02',
    icon: Lightbulb,
    title: 'Design',
    description:
      'We architect a solution grounded in the right mathematical framework — whether that\'s Bayesian inference, optimization theory, or deep learning.',
  },
  {
    number: '03',
    icon: Hammer,
    title: 'Build & Validate',
    description:
      'Rigorous implementation with statistical validation. Every model is tested against theoretical bounds and empirical benchmarks.',
  },
  {
    number: '04',
    icon: Rocket,
    title: 'Deploy & Evolve',
    description:
      'Production deployment with monitoring, drift detection, and continuous improvement. Your system gets stronger over time.',
  },
]

export function ProcessSection() {
  return (
    <section className="relative py-24 sm:py-32 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white">
            Our <span className="text-gradient">Process</span>
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            Rigorous methodology from problem formulation to production deployment.
          </p>
        </div>

        {/* Process steps */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-px bg-gradient-to-r from-brand-500/50 to-transparent z-0" />
              )}

              <div className="relative glass rounded-2xl p-6 h-full">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-brand-400 font-bold">
                    {step.number}
                  </span>
                  <step.icon className="h-5 w-5 text-brand-400" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-white">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-gray-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
