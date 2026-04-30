'use client'

import Link from 'next/link'
import { ArrowRight, Bot, Cpu, Zap } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-dark" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-500/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-accent-cyan/10 rounded-full blur-3xl animate-float [animation-delay:3s]" />
      
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(124,58,237,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(124,58,237,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32">
        <div className="mx-auto max-w-3xl text-center">
          {/* Badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-sm">
            <Zap className="h-4 w-4 text-brand-400" />
            <span className="text-gray-300">AI-powered transformation for your business</span>
          </div>

          {/* Heading */}
          <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
            <span className="text-white">We Orchestrate</span>
            <br />
            <span className="text-gradient">Intelligent AI</span>
            <br />
            <span className="text-white">Solutions</span>
          </h1>

          {/* Subheading */}
          <p className="mt-6 text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            From custom AI agents to intelligent chatbots and automated workflows,
            we build AI systems that deliver measurable ROI for growing businesses.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-brand-500 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-brand-500/25 transition-all hover:bg-brand-600 hover:shadow-brand-500/40 hover:scale-105"
            >
              Book a Free Discovery Call
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/demos"
              className="inline-flex items-center gap-2 rounded-full glass px-8 py-4 text-base font-semibold text-white transition-all hover:bg-white/10"
            >
              Try Live Demos
            </Link>
          </div>

          {/* Trust indicators */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-3 glass rounded-xl p-4">
              <Bot className="h-6 w-6 text-brand-400 flex-shrink-0" />
              <span className="text-sm text-gray-300">Custom AI Agents</span>
            </div>
            <div className="flex items-center justify-center gap-3 glass rounded-xl p-4">
              <Cpu className="h-6 w-6 text-accent-cyan flex-shrink-0" />
              <span className="text-sm text-gray-300">Smart Integrations</span>
            </div>
            <div className="flex items-center justify-center gap-3 glass rounded-xl p-4">
              <Zap className="h-6 w-6 text-accent-emerald flex-shrink-0" />
              <span className="text-sm text-gray-300">Rapid Deployment</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
