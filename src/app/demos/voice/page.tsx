import type { Metadata } from 'next'
import Link from 'next/link'
import { Mic, ArrowRight, Bell } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Voice AI Demo',
  description:
    'Experience real-time voice transcription and AI-powered voice interactions. Coming soon.',
}

export default function VoiceDemoPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-sm mb-4">
            <span className="text-gray-300">Coming Soon</span>
          </div>
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-white">
            Voice AI Demo
          </h1>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
            We&apos;re building an interactive voice AI demo featuring real-time
            transcription, voice commands, and natural AI responses.
          </p>
        </div>

        <div className="mt-12 glass rounded-2xl p-12 text-center">
          <div className="relative inline-block">
            <Mic className="h-24 w-24 text-brand-400/30" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-16 w-16 rounded-full bg-brand-500/10 animate-ping" />
            </div>
          </div>
          <h2 className="mt-8 text-xl font-semibold text-white">
            Under Development
          </h2>
          <p className="mt-2 text-sm text-gray-400 max-w-md mx-auto">
            This demo will showcase real-time speech-to-text, voice-driven AI
            interactions, and audio generation capabilities.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-brand-500 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-brand-600 hover:scale-105"
            >
              <Bell className="h-4 w-4" />
              Notify Me When Ready
            </Link>
            <Link
              href="/demos"
              className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-white/10"
            >
              Try Other Demos
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
