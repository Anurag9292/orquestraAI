import type { Metadata } from 'next'
import Link from 'next/link'
import { MessageSquare, CheckCircle, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Conversational AI & Chatbots',
  description:
    'Intelligent chatbots and virtual assistants that handle customer support, sales conversations, and internal operations with natural language.',
}

export default function ChatbotsPage() {
  return (
    <div className="pt-24">
      <section className="relative py-16 sm:py-24">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-accent-emerald/10 rounded-full blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <MessageSquare className="h-10 w-10 text-accent-emerald" />
            </div>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-white">
              Conversational AI & <span className="text-gradient">Chatbots</span>
            </h1>
            <p className="mt-6 text-lg text-gray-400 leading-relaxed">
              Modern AI chatbots that actually understand context, handle complex
              queries, and provide genuinely helpful responses — available 24/7
              across all your channels.
            </p>

            <div className="mt-10 glass rounded-2xl p-8">
              <h2 className="text-xl font-bold text-white">Use Cases</h2>
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  'Customer support & FAQ handling',
                  'Lead qualification & sales assist',
                  'Internal knowledge base assistant',
                  'Appointment scheduling',
                  'Order tracking & updates',
                  'Product recommendations',
                  'Onboarding & training',
                  'Multi-language support',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-accent-emerald flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 glass rounded-2xl p-8">
              <h2 className="text-xl font-bold text-white">Deployment Options</h2>
              <p className="mt-2 text-gray-400 text-sm">
                We deploy chatbots wherever your customers are:
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {['Website widget', 'Slack', 'WhatsApp', 'Discord', 'SMS', 'Email', 'Custom apps'].map((channel) => (
                  <span key={channel} className="rounded-full bg-white/10 px-3 py-1.5 text-xs text-gray-300">
                    {channel}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-10 text-center">
              <Link
                href="/demos/chatbot"
                className="inline-flex items-center gap-2 rounded-full glass px-8 py-4 text-base font-semibold text-white transition-all hover:bg-white/10 mr-4"
              >
                Try Our Demo
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-brand-500 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-brand-500/25 transition-all hover:bg-brand-600 hover:scale-105"
              >
                Build Your Chatbot
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
