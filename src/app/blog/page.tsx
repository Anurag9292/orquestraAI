import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Calendar, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Insights, guides, and case studies on AI adoption, automation, and intelligent systems for businesses.',
}

const posts = [
  {
    slug: 'when-to-hire-ai-consultancy',
    title: 'When Should You Hire an AI Consultancy? 5 Signs You\'re Ready',
    excerpt:
      'Not every business needs AI today, but the signs that you\'re ready are often clearer than you think. Here are the top indicators.',
    date: '2024-12-15',
    readTime: '5 min read',
    category: 'Strategy',
  },
  {
    slug: 'ai-agents-vs-chatbots',
    title: 'AI Agents vs. Chatbots: What\'s the Difference and Which Do You Need?',
    excerpt:
      'While chatbots handle conversations, AI agents can take actions. Understanding the difference is key to choosing the right solution.',
    date: '2024-12-10',
    readTime: '7 min read',
    category: 'Technology',
  },
  {
    slug: 'roi-of-ai-automation',
    title: 'The Real ROI of AI Automation: What to Expect in Year One',
    excerpt:
      'We break down realistic ROI expectations for AI automation projects, based on real data from dozens of implementations.',
    date: '2024-12-05',
    readTime: '6 min read',
    category: 'Business',
  },
  {
    slug: 'choosing-right-llm',
    title: 'GPT-4 vs. Claude vs. Open Source: Choosing the Right LLM for Your Business',
    excerpt:
      'A practical comparison of the leading LLMs, with guidance on when to use each and how to avoid vendor lock-in.',
    date: '2024-11-28',
    readTime: '8 min read',
    category: 'Technology',
  },
  {
    slug: 'ai-readiness-checklist',
    title: 'The AI Readiness Checklist: Is Your Data Ready for AI?',
    excerpt:
      'Before investing in AI, make sure your data foundation is solid. Here\'s a practical checklist to assess your readiness.',
    date: '2024-11-20',
    readTime: '5 min read',
    category: 'Strategy',
  },
]

export default function BlogPage() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="relative py-16 sm:py-24">
        <div className="absolute top-0 left-1/2 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-white">
              AI Insights & <span className="text-gradient">Guides</span>
            </h1>
            <p className="mt-6 text-lg text-gray-400">
              Practical advice on AI adoption, implementation, and strategy for
              growing businesses.
            </p>
          </div>
        </div>
      </section>

      {/* Posts */}
      <section className="pb-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 space-y-6">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block glass rounded-2xl p-6 sm:p-8 transition-all hover:border-white/20 hover:bg-white/5"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="rounded-full bg-brand-500/10 px-3 py-1 text-xs font-medium text-brand-400">
                  {post.category}
                </span>
                <div className="flex items-center gap-1 text-xs text-gray-500">
                  <Calendar className="h-3 w-3" />
                  {new Date(post.date).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </div>
                <div className="flex items-center gap-1 text-xs text-gray-500">
                  <Clock className="h-3 w-3" />
                  {post.readTime}
                </div>
              </div>
              <h2 className="text-xl font-bold text-white group-hover:text-brand-300 transition-colors">
                {post.title}
              </h2>
              <p className="mt-2 text-sm text-gray-400">{post.excerpt}</p>
              <div className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-brand-400 opacity-0 transition-all group-hover:opacity-100">
                Read article
                <ArrowRight className="h-3 w-3" />
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
