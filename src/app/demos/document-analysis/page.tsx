'use client'

import { useState } from 'react'
import { FileText, Upload, Sparkles, CheckCircle, Loader2 } from 'lucide-react'
import Link from 'next/link'

interface AnalysisResult {
  summary: string
  keyPoints: string[]
  sentiment: string
  wordCount: number
}

export default function DocumentAnalysisDemoPage() {
  const [text, setText] = useState('')
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [result, setResult] = useState<AnalysisResult | null>(null)

  const handleAnalyze = async () => {
    if (!text.trim()) return
    setIsAnalyzing(true)
    setResult(null)

    // Simulate analysis (replace with actual AI API call)
    setTimeout(() => {
      const words = text.trim().split(/\s+/)
      const sentences = text.split(/[.!?]+/).filter((s) => s.trim())

      setResult({
        summary:
          sentences.length > 2
            ? `This document discusses ${sentences.length} key topics across ${words.length} words. The main themes appear to relate to ${words.slice(0, 3).join(', ')} and related subjects.`
            : 'Please provide more text for a comprehensive summary. Aim for at least a few paragraphs for best results.',
        keyPoints: [
          `Document contains ${words.length} words and ${sentences.length} sentences`,
          `Average sentence length: ${Math.round(words.length / Math.max(sentences.length, 1))} words`,
          `Most common words identified and categorized`,
          `Document structure and readability analyzed`,
        ],
        sentiment:
          words.length > 20 ? 'Neutral / Informational' : 'Insufficient text for analysis',
        wordCount: words.length,
      })
      setIsAnalyzing(false)
    }, 2000)
  }

  const sampleText = `Artificial Intelligence is transforming how businesses operate across every industry. From automating routine tasks to generating insights from complex data, AI enables companies to work smarter and faster.

Key benefits of AI adoption include: improved operational efficiency through automation of repetitive processes, enhanced customer experiences through personalized interactions, better decision-making through data-driven insights, and cost reduction through optimized resource allocation.

However, successful AI implementation requires careful planning, quality data, and the right technology partners. Companies that approach AI strategically — starting with clear business objectives and measuring ROI — see the greatest returns on their investment.

The future belongs to businesses that embrace AI as a core part of their strategy, not just a technology experiment.`

  return (
    <div className="pt-24 pb-16">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-sm mb-4">
            <span className="h-2 w-2 rounded-full bg-accent-emerald animate-pulse" />
            <span className="text-gray-300">Live Demo</span>
          </div>
          <h1 className="font-display text-3xl font-bold text-white">
            Document Analysis Demo
          </h1>
          <p className="mt-2 text-gray-400">
            Paste any text and watch AI analyze it instantly.
          </p>
        </div>

        {/* Input area */}
        <div className="glass rounded-2xl p-6">
          <div className="flex items-center justify-between mb-4">
            <label className="text-sm font-medium text-white">
              Paste your document text
            </label>
            <button
              onClick={() => setText(sampleText)}
              className="text-xs text-brand-400 hover:text-brand-300"
            >
              Use sample text
            </button>
          </div>
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Paste your text here... (contracts, reports, articles, emails, etc.)"
            className="w-full h-48 rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-500/50 resize-none"
          />
          <div className="mt-4 flex items-center justify-between">
            <span className="text-xs text-gray-500">
              {text.trim().split(/\s+/).filter(Boolean).length} words
            </span>
            <button
              onClick={handleAnalyze}
              disabled={!text.trim() || isAnalyzing}
              className="inline-flex items-center gap-2 rounded-full bg-brand-500 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-brand-600 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              {isAnalyzing ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Analyzing...
                </>
              ) : (
                <>
                  <Sparkles className="h-4 w-4" />
                  Analyze Document
                </>
              )}
            </button>
          </div>
        </div>

        {/* Results */}
        {result && (
          <div className="mt-8 space-y-6 animate-fade-in">
            {/* Summary */}
            <div className="glass rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                <FileText className="h-5 w-5 text-brand-400" />
                Summary
              </h3>
              <p className="mt-3 text-gray-300 leading-relaxed">
                {result.summary}
              </p>
            </div>

            {/* Key points */}
            <div className="glass rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-accent-emerald" />
                Key Insights
              </h3>
              <ul className="mt-3 space-y-2">
                {result.keyPoints.map((point, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-sm text-gray-300"
                  >
                    <span className="text-brand-400 mt-0.5">-</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            {/* Metadata */}
            <div className="grid grid-cols-2 gap-4">
              <div className="glass rounded-xl p-4 text-center">
                <p className="text-2xl font-bold text-white">
                  {result.wordCount}
                </p>
                <p className="text-xs text-gray-400">Words</p>
              </div>
              <div className="glass rounded-xl p-4 text-center">
                <p className="text-lg font-bold text-white">
                  {result.sentiment}
                </p>
                <p className="text-xs text-gray-400">Sentiment</p>
              </div>
            </div>
          </div>
        )}

        {/* Note */}
        <div className="mt-8 text-center">
          <p className="text-xs text-gray-500">
            This demo uses simplified analysis. A production system would use
            advanced AI for deep semantic analysis, entity extraction, and more.
          </p>
          <Link
            href="/contact"
            className="mt-3 inline-flex items-center gap-1 text-sm text-brand-400 hover:text-brand-300"
          >
            <Sparkles className="h-3 w-3" />
            Need custom document AI? Let&apos;s build it together.
          </Link>
        </div>
      </div>
    </div>
  )
}
