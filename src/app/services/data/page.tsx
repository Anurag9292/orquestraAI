import type { Metadata } from 'next'
import Link from 'next/link'
import { BarChart3, CheckCircle, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Data & ML Pipelines',
  description:
    'Build robust data infrastructure and machine learning pipelines that turn your raw data into actionable intelligence and predictions.',
}

export default function DataPage() {
  return (
    <div className="pt-24">
      <section className="relative py-16 sm:py-24">
        <div className="absolute top-0 left-1/2 w-96 h-96 bg-brand-300/10 rounded-full blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <BarChart3 className="h-10 w-10 text-brand-300" />
            </div>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-white">
              Data & <span className="text-gradient">ML Pipelines</span>
            </h1>
            <p className="mt-6 text-lg text-gray-400 leading-relaxed">
              Your data is a goldmine — if you can process it effectively. We
              build data pipelines and ML models that turn raw information into
              predictions, insights, and automated decisions.
            </p>

            <div className="mt-10 glass rounded-2xl p-8">
              <h2 className="text-xl font-bold text-white">What We Build</h2>
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  'ETL/ELT data pipelines',
                  'Real-time streaming analytics',
                  'Predictive models & forecasting',
                  'Custom model training & fine-tuning',
                  'Data quality & governance frameworks',
                  'Dashboard & visualization layer',
                  'Feature engineering systems',
                  'Model monitoring & retraining',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-accent-emerald flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10 text-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-brand-500 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-brand-500/25 transition-all hover:bg-brand-600 hover:scale-105"
              >
                Discuss Your Data Project
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
