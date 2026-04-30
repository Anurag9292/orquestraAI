import type { Metadata } from 'next'
import Link from 'next/link'
import { BrainCircuit, CheckCircle, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'AI Consulting & Strategy',
  description:
    'Expert AI consulting to help your business identify opportunities, build a strategy, and implement AI solutions with clear ROI.',
}

export default function ConsultingPage() {
  return (
    <div className="pt-24">
      <section className="relative py-16 sm:py-24">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-accent-cyan/10 rounded-full blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <BrainCircuit className="h-10 w-10 text-accent-cyan" />
            </div>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-white">
              AI Consulting & <span className="text-gradient">Strategy</span>
            </h1>
            <p className="mt-6 text-lg text-gray-400 leading-relaxed">
              Not sure where AI fits? We help you cut through the hype, identify
              high-impact opportunities, and build a clear roadmap to
              implementation with measurable ROI.
            </p>

            <div className="mt-10 glass rounded-2xl p-8">
              <h2 className="text-xl font-bold text-white">What&apos;s Included</h2>
              <div className="mt-6 space-y-4">
                {[
                  {
                    title: 'AI Readiness Assessment',
                    desc: 'We evaluate your data, processes, and tech stack to determine AI feasibility.',
                  },
                  {
                    title: 'Opportunity Mapping',
                    desc: 'Identify the highest-impact use cases across your organization.',
                  },
                  {
                    title: 'ROI Modeling',
                    desc: 'Detailed projections of cost savings, revenue gains, and efficiency improvements.',
                  },
                  {
                    title: 'Technology Recommendations',
                    desc: 'Which AI tools, models, and platforms are right for your specific needs.',
                  },
                  {
                    title: 'Implementation Roadmap',
                    desc: 'A phased plan with clear milestones, timelines, and resource requirements.',
                  },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-accent-emerald flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-sm font-semibold text-white">{item.title}</h3>
                      <p className="text-sm text-gray-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 glass rounded-2xl p-8">
              <h2 className="text-xl font-bold text-white">Investment</h2>
              <p className="mt-2 text-gray-400">
                AI Strategy sessions start at <span className="text-white font-semibold">$2,500</span> for
                a focused assessment, or <span className="text-white font-semibold">$5,000-$10,000</span> for
                a comprehensive organizational audit with implementation roadmap.
              </p>
            </div>

            <div className="mt-10 text-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-brand-500 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-brand-500/25 transition-all hover:bg-brand-600 hover:scale-105"
              >
                Book a Strategy Session
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
