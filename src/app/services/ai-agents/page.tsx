import type { Metadata } from 'next'
import Link from 'next/link'
import { Bot, CheckCircle, ArrowRight, Zap, Shield, RefreshCcw } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Custom AI Agents',
  description:
    'We build custom AI agents that automate complex workflows, make decisions, and interact with your systems autonomously. From support to operations.',
}

export default function AIAgentsPage() {
  return (
    <div className="pt-24">
      <section className="relative py-16 sm:py-24">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <Bot className="h-10 w-10 text-brand-400" />
              <span className="rounded-full bg-brand-500/10 px-3 py-1 text-sm text-brand-400">
                Our Most Popular Service
              </span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-white">
              Custom <span className="text-gradient">AI Agents</span>
            </h1>
            <p className="mt-6 text-lg text-gray-400 leading-relaxed">
              AI agents go beyond chatbots. They can reason, plan, use tools, and
              take actions in your systems — handling complex multi-step tasks that
              previously required human intervention.
            </p>

            <div className="mt-10 glass rounded-2xl p-8">
              <h2 className="text-xl font-bold text-white">What Our AI Agents Can Do</h2>
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  'Process and respond to customer inquiries',
                  'Research and compile reports from multiple sources',
                  'Manage and update databases/CRMs automatically',
                  'Route tasks and make decisions based on rules',
                  'Monitor systems and alert on anomalies',
                  'Generate content and documentation',
                  'Handle multi-step approval workflows',
                  'Integrate with APIs and external services',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-accent-emerald flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="glass rounded-xl p-6 text-center">
                <Zap className="h-8 w-8 text-brand-400 mx-auto" />
                <h3 className="mt-3 font-semibold text-white">Fast Deployment</h3>
                <p className="mt-1 text-xs text-gray-400">MVP in 2-4 weeks</p>
              </div>
              <div className="glass rounded-xl p-6 text-center">
                <Shield className="h-8 w-8 text-accent-emerald mx-auto" />
                <h3 className="mt-3 font-semibold text-white">Human-in-the-Loop</h3>
                <p className="mt-1 text-xs text-gray-400">Safety guardrails built-in</p>
              </div>
              <div className="glass rounded-xl p-6 text-center">
                <RefreshCcw className="h-8 w-8 text-accent-cyan mx-auto" />
                <h3 className="mt-3 font-semibold text-white">Continuous Learning</h3>
                <p className="mt-1 text-xs text-gray-400">Gets smarter over time</p>
              </div>
            </div>

            <div className="mt-10 text-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-brand-500 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-brand-500/25 transition-all hover:bg-brand-600 hover:scale-105"
              >
                Discuss Your AI Agent Project
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
