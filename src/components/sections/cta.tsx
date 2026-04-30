import Link from 'next/link'
import { ArrowRight, Calendar, Sparkles } from 'lucide-react'

export function CTASection() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-brand p-12 sm:p-16 text-center">
          {/* Background decoration */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-brand-900/50 rounded-full blur-3xl" />

          <div className="relative">
            <Sparkles className="h-12 w-12 text-white/80 mx-auto" />
            <h2 className="mt-6 font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">
              Schedule a free 30-minute discovery call. We&apos;ll discuss your
              challenges, explore AI opportunities, and outline a clear path
              forward.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-base font-semibold text-brand-700 shadow-lg transition-all hover:scale-105 hover:shadow-xl"
              >
                <Calendar className="h-5 w-5" />
                Book Your Free Call
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 rounded-full border-2 border-white/30 px-8 py-4 text-base font-semibold text-white transition-all hover:bg-white/10"
              >
                Explore Services
              </Link>
            </div>

            <p className="mt-6 text-sm text-white/60">
              No commitment required. We&apos;ll give you honest advice even if
              we&apos;re not the right fit.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
