import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Calendar, Clock, ArrowRight } from 'lucide-react'

// This would be replaced with actual MDX/content loading
const posts: Record<string, { title: string; date: string; readTime: string; category: string; content: string }> = {
  'when-to-hire-ai-consultancy': {
    title: "When Should You Hire an AI Consultancy? 5 Signs You're Ready",
    date: '2024-12-15',
    readTime: '5 min read',
    category: 'Strategy',
    content: `
## The AI Opportunity

Every business leader is asking the same question: "Should we be using AI?" The answer is almost always yes — but the timing and approach matter enormously.

Here are 5 signs your business is ready to work with an AI consultancy:

### 1. You Have Repetitive, High-Volume Processes

If your team spends significant time on repetitive tasks — data entry, customer inquiries, report generation — AI can likely automate 60-80% of that work.

### 2. You're Sitting on Valuable Data

You have customer data, operational data, or domain-specific data that could drive better decisions — but you're not leveraging it effectively.

### 3. Your Competitors Are Moving

If competitors in your space are adopting AI (and they likely are), the window to gain competitive advantage is shrinking.

### 4. You've Tried DIY and Hit a Wall

Maybe you've experimented with ChatGPT or basic automation tools, but you need something more sophisticated, reliable, and integrated.

### 5. You Can Define Success Metrics

You know what "better" looks like — whether that's faster response times, lower costs, higher conversion rates, or improved accuracy.

## What to Expect From an AI Consultancy

A good AI partner will:
- Start by understanding your business, not selling technology
- Provide honest assessments of what's feasible and what's not
- Show you quick wins while building toward bigger goals
- Transfer knowledge to your team over time

## Next Steps

If you recognized your business in 2 or more signs above, you're likely ready for an AI partnership. The best time to start was yesterday; the second best time is now.
    `,
  },
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const post = posts[params.slug]
  if (!post) {
    return { title: 'Post Not Found' }
  }
  return {
    title: post.title,
    description: post.content.slice(0, 160),
  }
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = posts[params.slug]

  if (!post) {
    return (
      <div className="pt-24 pb-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center py-24">
          <h1 className="text-2xl font-bold text-white">Post Coming Soon</h1>
          <p className="mt-4 text-gray-400">
            This article is being written and will be published shortly.
          </p>
          <Link
            href="/blog"
            className="mt-6 inline-flex items-center gap-2 text-brand-400 hover:text-brand-300"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-24 pb-16">
      <article className="mx-auto max-w-3xl px-6 lg:px-8">
        {/* Back link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Blog
        </Link>

        {/* Header */}
        <header className="mb-12">
          <span className="rounded-full bg-brand-500/10 px-3 py-1 text-xs font-medium text-brand-400">
            {post.category}
          </span>
          <h1 className="mt-4 font-display text-3xl sm:text-4xl font-bold text-white leading-tight">
            {post.title}
          </h1>
          <div className="mt-4 flex items-center gap-4 text-sm text-gray-500">
            <span className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              {new Date(post.date).toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric',
              })}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              {post.readTime}
            </span>
          </div>
        </header>

        {/* Content */}
        <div className="prose prose-invert prose-brand max-w-none">
          <div className="text-gray-300 leading-relaxed whitespace-pre-wrap text-sm">
            {post.content}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 glass rounded-2xl p-8 text-center">
          <h3 className="text-lg font-semibold text-white">
            Ready to explore AI for your business?
          </h3>
          <p className="mt-2 text-sm text-gray-400">
            Book a free discovery call and get personalized advice.
          </p>
          <Link
            href="/contact"
            className="mt-4 inline-flex items-center gap-2 rounded-full bg-brand-500 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-brand-600 hover:scale-105"
          >
            Book a Call
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </article>
    </div>
  )
}
