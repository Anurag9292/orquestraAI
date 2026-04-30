import { Search, Lightbulb, Hammer, Rocket } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: Search,
    title: 'Discovery',
    description:
      'We deep-dive into your business processes, identify high-impact AI opportunities, and assess technical readiness.',
  },
  {
    number: '02',
    icon: Lightbulb,
    title: 'Strategy',
    description:
      'We design a tailored AI solution architecture with clear milestones, success metrics, and ROI projections.',
  },
  {
    number: '03',
    icon: Hammer,
    title: 'Build',
    description:
      'Our team develops, tests, and iterates on your AI solution with regular check-ins and transparent progress.',
  },
  {
    number: '04',
    icon: Rocket,
    title: 'Deploy & Grow',
    description:
      'We deploy to production, monitor performance, and continuously optimize. Your AI gets smarter over time.',
  },
]

export function ProcessSection() {
  return (
    <section className="relative py-24 sm:py-32 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white">
            How We <span className="text-gradient">Work</span>
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            A proven process that takes you from idea to production AI in weeks,
            not months.
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
