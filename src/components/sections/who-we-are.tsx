import { Atom, TrendingUp, Code2, Cpu, FlaskConical, Infinity } from 'lucide-react'

const expertise = [
  {
    icon: Atom,
    title: 'First-Principles Thinking',
    description:
      'We don\'t just use AI tools — we understand the mathematics beneath them. From Bayesian inference to gradient optimization, we build from the ground up.',
  },
  {
    icon: TrendingUp,
    title: 'Statistical & Probabilistic AI',
    description:
      'Stochastic processes, Markov chains, Monte Carlo methods, and probabilistic graphical models — we speak the language of uncertainty.',
  },
  {
    icon: Code2,
    title: 'Production-Grade Engineering',
    description:
      'Research-level thinking with production-level execution. We ship robust, scalable systems — not just notebooks and prototypes.',
  },
  {
    icon: Cpu,
    title: 'Custom Model Development',
    description:
      'Fine-tuning, custom architectures, domain-specific training. We build models tailored to your problem, not off-the-shelf solutions.',
  },
  {
    icon: FlaskConical,
    title: 'Research to Deployment',
    description:
      'We bridge the gap between cutting-edge research papers and working production systems. From arxiv to API.',
  },
  {
    icon: Infinity,
    title: 'End-to-End Systems',
    description:
      'Data pipelines, model serving, monitoring, feedback loops. Complete AI systems designed for continuous improvement.',
  },
]

export function WhoWeAreSection() {
  return (
    <section className="relative py-24 sm:py-32 border-t border-white/5" id="who-we-are">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white">
            Who <span className="text-gradient">We Are</span>
          </h2>
          <p className="mt-6 text-lg text-gray-400 leading-relaxed">
            We&apos;re a team of engineers and researchers who live at the intersection of
            <span className="text-white font-medium"> mathematics</span>,
            <span className="text-white font-medium"> statistics</span>, and
            <span className="text-white font-medium"> computer science</span>.
            We believe the best AI isn&apos;t built by prompting — it&apos;s built by understanding
            the deep structures that make intelligence possible.
          </p>
          <p className="mt-4 text-base text-gray-500">
            We work with companies that need more than surface-level AI. If your problem
            requires genuine mathematical rigor, custom model development, or novel
            algorithmic approaches — that&apos;s where we thrive.
          </p>
        </div>

        {/* Expertise grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {expertise.map((item) => (
            <div
              key={item.title}
              className="glass rounded-2xl p-8 transition-all hover:bg-white/10 hover:border-white/20"
            >
              <item.icon className="h-8 w-8 text-brand-400" />
              <h3 className="mt-4 text-lg font-semibold text-white">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-gray-400 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Philosophy statement */}
        <div className="mt-16 mx-auto max-w-3xl glass rounded-2xl p-8 sm:p-10 text-center">
          <p className="text-lg text-gray-300 leading-relaxed italic">
            &ldquo;The unreasonable effectiveness of mathematics in AI isn&apos;t
            magic — it&apos;s engineering. We take the deepest ideas in probability,
            optimization, and information theory and turn them into systems that
            solve real problems.&rdquo;
          </p>
          <p className="mt-4 text-sm text-brand-400 font-medium">
            — The orquestraAI Team
          </p>
        </div>
      </div>
    </section>
  )
}
