import { Quote } from 'lucide-react'

const testimonials = [
  {
    quote:
      'orquestraAI built us a custom AI agent that reduced our customer support response time by 80%. The ROI was visible within the first month.',
    author: 'Sarah Chen',
    role: 'CTO',
    company: 'TechFlow Solutions',
  },
  {
    quote:
      'Their consulting helped us identify $200K in annual savings through AI automation. The implementation was smooth and the team was incredibly responsive.',
    author: 'Marcus Johnson',
    role: 'VP of Operations',
    company: 'ScaleUp Inc.',
  },
  {
    quote:
      'The chatbot they built for us handles 70% of our inbound queries without human intervention. Our team can now focus on high-value work.',
    author: 'Elena Rodriguez',
    role: 'Head of Customer Success',
    company: 'GrowthMetrics',
  },
]

export function TestimonialsSection() {
  return (
    <section className="relative py-24 sm:py-32 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white">
            Trusted by <span className="text-gradient">Growing Companies</span>
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            See what our clients say about working with orquestraAI.
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.author}
              className="glass rounded-2xl p-8 flex flex-col"
            >
              <Quote className="h-8 w-8 text-brand-500/50" />
              <p className="mt-4 text-sm text-gray-300 leading-relaxed flex-1">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div className="mt-6 pt-6 border-t border-white/10">
                <p className="text-sm font-semibold text-white">
                  {testimonial.author}
                </p>
                <p className="text-xs text-gray-400">
                  {testimonial.role}, {testimonial.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
