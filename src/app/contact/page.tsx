import type { Metadata } from 'next'
import { Calendar, Mail, MessageSquare, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Book a Call',
  description:
    'Schedule a free 30-minute discovery call with orquestraAI. We\'ll discuss your AI opportunities and outline a clear path forward.',
}

export default function ContactPage() {
  return (
    <div className="pt-24">
      <section className="relative py-16 sm:py-24">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left side - Info */}
            <div>
              <h1 className="font-display text-4xl sm:text-5xl font-bold text-white">
                Let&apos;s Talk <span className="text-gradient">AI</span>
              </h1>
              <p className="mt-6 text-lg text-gray-400 leading-relaxed">
                Book a free 30-minute discovery call. We&apos;ll discuss your
                challenges, explore AI opportunities, and give you honest advice
                — even if we&apos;re not the right fit.
              </p>

              <div className="mt-10 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="rounded-xl bg-brand-500/10 p-3">
                    <Calendar className="h-6 w-6 text-brand-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">
                      Free Discovery Call
                    </h3>
                    <p className="text-sm text-gray-400">
                      30 minutes to explore how AI can transform your business.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="rounded-xl bg-accent-cyan/10 p-3">
                    <Clock className="h-6 w-6 text-accent-cyan" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Quick Response</h3>
                    <p className="text-sm text-gray-400">
                      We respond to all inquiries within 24 hours.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="rounded-xl bg-accent-emerald/10 p-3">
                    <MessageSquare className="h-6 w-6 text-accent-emerald" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">No Commitment</h3>
                    <p className="text-sm text-gray-400">
                      No pressure, no hard sells. Just honest advice and clear
                      next steps.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10 glass rounded-xl p-6">
                <h4 className="text-sm font-semibold text-white">
                  Prefer email?
                </h4>
                <a
                  href="mailto:hello@orquestra.ai"
                  className="mt-2 inline-flex items-center gap-2 text-brand-400 hover:text-brand-300"
                >
                  <Mail className="h-4 w-4" />
                  hello@orquestra.ai
                </a>
              </div>
            </div>

            {/* Right side - Cal.com embed */}
            <div className="glass rounded-2xl p-2 min-h-[600px]">
              {/* Cal.com embed placeholder - replace with actual Cal.com embed */}
              <div className="w-full h-full rounded-xl bg-navy-900 flex flex-col items-center justify-center p-8 text-center">
                <Calendar className="h-16 w-16 text-brand-400 mb-6" />
                <h3 className="text-xl font-semibold text-white">
                  Schedule Your Call
                </h3>
                <p className="mt-2 text-sm text-gray-400 max-w-sm">
                  Click below to choose a time that works for you.
                </p>
                {/* 
                  To activate Cal.com:
                  1. Create account at cal.com
                  2. Replace this div with:
                  <iframe 
                    src="https://cal.com/YOUR_USERNAME/discovery-call"
                    className="w-full h-full rounded-xl"
                    frameBorder="0"
                  />
                  
                  Or use the Cal.com React component:
                  npm install @calcom/embed-react
                */}
                <a
                  href="https://cal.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand-500 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-brand-600 hover:scale-105"
                >
                  <Calendar className="h-4 w-4" />
                  Book on Cal.com
                </a>
                <p className="mt-4 text-xs text-gray-500">
                  Set up your Cal.com account and replace this placeholder with
                  the embed code.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
