import type { Metadata } from 'next'
import Link from 'next/link'
import { MessageSquare, FileText, Workflow, Mic, ArrowRight, Play } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Live AI Demos',
  description:
    'Try our interactive AI demos. Chat with our AI, analyze documents, see workflow automation, and experience voice AI — all in your browser.',
}

const demos = [
  {
    icon: MessageSquare,
    title: 'AI Chatbot',
    description:
      'Have a conversation with our AI assistant. Ask questions about AI services, technology, or anything else. See how natural and helpful conversational AI can be.',
    href: '/demos/chatbot',
    status: 'live' as const,
    gradient: 'from-brand-500 to-brand-700',
    features: ['Natural language understanding', 'Context awareness', 'Multi-turn conversations'],
  },
  {
    icon: FileText,
    title: 'Document Analysis',
    description:
      'Upload a PDF, contract, report, or any text document. Our AI will extract key insights, generate summaries, and answer questions about the content.',
    href: '/demos/document-analysis',
    status: 'live' as const,
    gradient: 'from-accent-cyan to-blue-700',
    features: ['PDF & text support', 'Key insight extraction', 'Q&A about content'],
  },
  {
    icon: Workflow,
    title: 'Workflow Automation',
    description:
      'Watch AI orchestrate a multi-step business process in real-time. See how tasks are analyzed, routed, and completed automatically.',
    href: '/demos/workflow',
    status: 'live' as const,
    gradient: 'from-accent-emerald to-green-700',
    features: ['Visual workflow builder', 'Real-time execution', 'Decision logic'],
  },
  {
    icon: Mic,
    title: 'Voice AI',
    description:
      'Speak to our AI and get real-time transcription and intelligent responses. Experience the future of voice-first interfaces.',
    href: '/demos/voice',
    status: 'coming-soon' as const,
    gradient: 'from-accent-amber to-orange-700',
    features: ['Real-time transcription', 'Voice commands', 'Natural responses'],
  },
]

export default function DemosPage() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="relative py-16 sm:py-24">
        <div className="absolute top-0 right-1/3 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-white">
              Experience AI <span className="text-gradient">Firsthand</span>
            </h1>
            <p className="mt-6 text-lg text-gray-400">
              No signup required. Try our interactive demos and see exactly what
              AI can do for your business.
            </p>
          </div>
        </div>
      </section>

      {/* Demos grid */}
      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 space-y-8">
          {demos.map((demo) => (
            <Link
              key={demo.title}
              href={demo.href}
              className="group block glass rounded-2xl p-8 sm:p-10 transition-all hover:border-white/20 hover:bg-white/5"
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
                <div className="lg:col-span-2">
                  <div className="flex items-center gap-4">
                    <div
                      className={`rounded-xl bg-gradient-to-br ${demo.gradient} p-3`}
                    >
                      <demo.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex items-center gap-3">
                      <h2 className="text-2xl font-bold text-white">
                        {demo.title}
                      </h2>
                      {demo.status === 'live' ? (
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-accent-emerald/10 px-3 py-1 text-xs font-medium text-accent-emerald">
                          <span className="h-1.5 w-1.5 rounded-full bg-accent-emerald animate-pulse" />
                          Live
                        </span>
                      ) : (
                        <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-gray-400">
                          Coming Soon
                        </span>
                      )}
                    </div>
                  </div>
                  <p className="mt-4 text-gray-400">{demo.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {demo.features.map((feature) => (
                      <span
                        key={feature}
                        className="rounded-full bg-white/5 px-3 py-1 text-xs text-gray-300"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex justify-start lg:justify-end">
                  <span className="inline-flex items-center gap-2 rounded-full bg-brand-500 px-6 py-3 text-sm font-semibold text-white transition-all group-hover:bg-brand-600 group-hover:scale-105">
                    <Play className="h-4 w-4" />
                    Try Demo
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
