import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Atom, Sigma, Code2, GraduationCap } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About',
  description:
    'orquestraAI is a deep tech AI company specializing in mathematically rigorous, production-grade intelligent systems built from first principles.',
}

const values = [
  {
    icon: Atom,
    title: 'First Principles',
    description:
      'We derive solutions from fundamental mathematics and physics of computation — not by stacking APIs.',
  },
  {
    icon: Sigma,
    title: 'Mathematical Rigor',
    description:
      'Every system we build has provable properties. We quantify uncertainty, bound errors, and guarantee convergence.',
  },
  {
    icon: Code2,
    title: 'Production Engineering',
    description:
      'Research-level thinking meets production-grade code. We ship systems that scale, not just proofs of concept.',
  },
  {
    icon: GraduationCap,
    title: 'Continuous Learning',
    description:
      'We stay at the frontier — reading papers, running experiments, and pushing what\'s possible for our clients.',
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
              Built by Engineers Who{' '}
              <span className="text-gradient">Think in Math</span>
            </h1>
            <p className="mt-6 text-lg text-gray-400 leading-relaxed">
              orquestraAI exists because we believe the most impactful AI isn&apos;t
              built by prompt engineering — it&apos;s built by people who understand
              why neural networks converge, how information flows through
              probabilistic systems, and what makes algorithms truly intelligent.
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
                Our Philosophy
              </h2>
              <div className="mt-6 space-y-4 text-gray-400 leading-relaxed">
                <p>
                  We come from backgrounds in mathematics, statistics, physics, and
                  computer science. We&apos;ve published research, built ML systems
                  at scale, and developed novel algorithms that push the boundaries
                  of what&apos;s possible.
                </p>
                <p>
                  We started orquestraAI because we saw a gap: companies need deep
                  technical AI work but most consultancies offer surface-level
                  implementations. We offer something different — genuine
                  mathematical depth combined with engineering excellence.
                </p>
                <p>
                  Like a conductor orchestrating a symphony of instruments, we
                  bring together probability theory, optimization, information
                  theory, and systems engineering to compose intelligent systems
                  that perform in harmony.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical DNA */}
      <section className="py-16 border-t border-white/5">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-display text-3xl font-bold text-white">
              Our Technical DNA
            </h2>
            <p className="mt-4 text-gray-400">
              What sets us apart is depth — in both thinking and execution.
            </p>
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

      {/* What we work with */}
      <section className="py-16 border-t border-white/5">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-2xl font-bold text-white">
              Our Technical Toolkit
            </h2>
            <div className="mt-8 flex flex-wrap justify-center gap-2">
              {[
                'PyTorch', 'JAX', 'TensorFlow', 'Python', 'Rust',
                'CUDA', 'Probabilistic Programming', 'Stan', 'PyMC',
                'Transformers', 'Diffusion Models', 'Reinforcement Learning',
                'Causal Inference', 'Bayesian Optimization', 'Graph Neural Networks',
                'Time Series', 'NLP/LLMs', 'Computer Vision', 'MLOps',
                'Kubernetes', 'Ray', 'Apache Spark',
              ].map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-white/5 border border-white/10 px-4 py-2 text-sm text-gray-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="font-display text-2xl font-bold text-white">
            Have a problem that needs real depth?
          </h2>
          <p className="mt-4 text-gray-400">
            Let&apos;s talk about what you&apos;re building.
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
