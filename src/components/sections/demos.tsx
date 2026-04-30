import Link from 'next/link'
import { MessageSquare, FileText, Workflow, Mic, ArrowRight, Play } from 'lucide-react'

const demos = [
  {
    icon: MessageSquare,
    title: 'AI Chatbot',
    description:
      'Chat with our AI assistant and see how conversational AI can handle complex queries.',
    href: '/demos/chatbot',
    status: 'live',
    color: 'from-brand-500 to-brand-700',
  },
  {
    icon: FileText,
    title: 'Document Analysis',
    description:
      'Upload any document and watch AI extract insights, summaries, and key data points.',
    href: '/demos/document-analysis',
    status: 'live',
    color: 'from-accent-cyan to-blue-700',
  },
  {
    icon: Workflow,
    title: 'Workflow Automation',
    description:
      'See how AI orchestrates complex multi-step business processes automatically.',
    href: '/demos/workflow',
    status: 'live',
    color: 'from-accent-emerald to-green-700',
  },
  {
    icon: Mic,
    title: 'Voice AI',
    description:
      'Experience real-time voice transcription and AI-powered voice interactions.',
    href: '/demos/voice',
    status: 'coming-soon',
    color: 'from-accent-amber to-orange-700',
  },
]

export function DemosSection() {
  return (
    <section className="relative py-24 sm:py-32 border-t border-white/5" id="demos">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white">
            See AI in <span className="text-gradient">Action</span>
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            Don&apos;t just take our word for it. Try our interactive demos and
            experience the power of AI firsthand.
          </p>
        </div>

        {/* Demos grid */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {demos.map((demo) => (
            <Link
              key={demo.title}
              href={demo.href}
              className="group relative overflow-hidden rounded-2xl glass p-8 transition-all hover:border-white/20 hover:scale-[1.01]"
            >
              {/* Background gradient on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${demo.color} opacity-0 transition-opacity group-hover:opacity-5`}
              />

              <div className="relative">
                <div className="flex items-center justify-between">
                  <demo.icon className="h-10 w-10 text-white/80" />
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

                <h3 className="mt-6 text-xl font-semibold text-white">
                  {demo.title}
                </h3>
                <p className="mt-2 text-sm text-gray-400">{demo.description}</p>

                <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-brand-400 transition-all group-hover:gap-3">
                  <Play className="h-4 w-4" />
                  Try it now
                  <ArrowRight className="h-3 w-3" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
