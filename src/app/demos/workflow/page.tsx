'use client'

import { useState } from 'react'
import {
  Workflow,
  Play,
  CheckCircle,
  Loader2,
  Mail,
  Database,
  BrainCircuit,
  Send,
  Sparkles,
} from 'lucide-react'
import Link from 'next/link'

interface WorkflowStep {
  id: string
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
  status: 'pending' | 'running' | 'complete'
  duration?: string
}

const initialSteps: WorkflowStep[] = [
  {
    id: '1',
    icon: Mail,
    title: 'Receive Customer Inquiry',
    description: 'New support ticket received via email',
    status: 'pending',
  },
  {
    id: '2',
    icon: BrainCircuit,
    title: 'AI Classification',
    description: 'Analyze intent, priority, and category',
    status: 'pending',
  },
  {
    id: '3',
    icon: Database,
    title: 'Knowledge Base Search',
    description: 'Find relevant documentation and past solutions',
    status: 'pending',
  },
  {
    id: '4',
    icon: BrainCircuit,
    title: 'Generate Response',
    description: 'AI drafts a personalized, contextual response',
    status: 'pending',
  },
  {
    id: '5',
    icon: Send,
    title: 'Send & Log',
    description: 'Deliver response and update CRM records',
    status: 'pending',
  },
]

export default function WorkflowDemoPage() {
  const [steps, setSteps] = useState<WorkflowStep[]>(initialSteps)
  const [isRunning, setIsRunning] = useState(false)
  const [isComplete, setIsComplete] = useState(false)

  const runWorkflow = () => {
    setIsRunning(true)
    setIsComplete(false)
    setSteps(initialSteps)

    let currentStep = 0

    const runNextStep = () => {
      if (currentStep >= initialSteps.length) {
        setIsRunning(false)
        setIsComplete(true)
        return
      }

      // Set current step to running
      setSteps((prev) =>
        prev.map((step, i) =>
          i === currentStep ? { ...step, status: 'running' } : step
        )
      )

      // Complete after random delay
      const delay = 1000 + Math.random() * 1500
      setTimeout(() => {
        setSteps((prev) =>
          prev.map((step, i) =>
            i === currentStep
              ? { ...step, status: 'complete', duration: `${(delay / 1000).toFixed(1)}s` }
              : step
          )
        )
        currentStep++
        runNextStep()
      }, delay)
    }

    runNextStep()
  }

  const reset = () => {
    setSteps(initialSteps)
    setIsRunning(false)
    setIsComplete(false)
  }

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
            AI Workflow Automation
          </h1>
          <p className="mt-2 text-gray-400">
            Watch AI orchestrate a multi-step customer support workflow in
            real-time.
          </p>
        </div>

        {/* Workflow visualization */}
        <div className="glass rounded-2xl p-8">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <Workflow className="h-6 w-6 text-brand-400" />
              <h2 className="text-lg font-semibold text-white">
                Customer Support Automation
              </h2>
            </div>
            {!isRunning && !isComplete && (
              <button
                onClick={runWorkflow}
                className="inline-flex items-center gap-2 rounded-full bg-brand-500 px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-brand-600 hover:scale-105"
              >
                <Play className="h-4 w-4" />
                Run Workflow
              </button>
            )}
            {isComplete && (
              <button
                onClick={reset}
                className="inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-white/20"
              >
                Reset
              </button>
            )}
            {isRunning && (
              <span className="inline-flex items-center gap-2 text-sm text-brand-400">
                <Loader2 className="h-4 w-4 animate-spin" />
                Processing...
              </span>
            )}
          </div>

          {/* Steps */}
          <div className="space-y-4">
            {steps.map((step, index) => (
              <div key={step.id} className="relative">
                {/* Connector */}
                {index < steps.length - 1 && (
                  <div
                    className={`absolute left-6 top-14 w-px h-4 transition-colors duration-500 ${
                      step.status === 'complete'
                        ? 'bg-accent-emerald'
                        : 'bg-white/10'
                    }`}
                  />
                )}

                <div
                  className={`flex items-center gap-4 rounded-xl p-4 transition-all duration-500 ${
                    step.status === 'running'
                      ? 'bg-brand-500/10 border border-brand-500/30'
                      : step.status === 'complete'
                      ? 'bg-accent-emerald/5 border border-accent-emerald/20'
                      : 'bg-white/5 border border-white/5'
                  }`}
                >
                  {/* Icon */}
                  <div
                    className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center transition-all ${
                      step.status === 'running'
                        ? 'bg-brand-500/20'
                        : step.status === 'complete'
                        ? 'bg-accent-emerald/20'
                        : 'bg-white/10'
                    }`}
                  >
                    {step.status === 'running' ? (
                      <Loader2 className="h-5 w-5 text-brand-400 animate-spin" />
                    ) : step.status === 'complete' ? (
                      <CheckCircle className="h-5 w-5 text-accent-emerald" />
                    ) : (
                      <step.icon className="h-5 w-5 text-gray-400" />
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3
                      className={`text-sm font-semibold transition-colors ${
                        step.status === 'complete'
                          ? 'text-accent-emerald'
                          : step.status === 'running'
                          ? 'text-brand-300'
                          : 'text-white'
                      }`}
                    >
                      {step.title}
                    </h3>
                    <p className="text-xs text-gray-400">{step.description}</p>
                  </div>

                  {/* Duration */}
                  {step.duration && (
                    <span className="text-xs text-gray-500 font-mono">
                      {step.duration}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Complete message */}
          {isComplete && (
            <div className="mt-8 rounded-xl bg-accent-emerald/10 border border-accent-emerald/20 p-4 text-center animate-fade-in">
              <CheckCircle className="h-8 w-8 text-accent-emerald mx-auto" />
              <p className="mt-2 text-sm font-semibold text-accent-emerald">
                Workflow Complete!
              </p>
              <p className="text-xs text-gray-400 mt-1">
                Customer inquiry processed and response sent in seconds — no
                human intervention required.
              </p>
            </div>
          )}
        </div>

        {/* Note */}
        <div className="mt-8 text-center">
          <p className="text-xs text-gray-500">
            This demo simulates an AI-powered workflow. Production workflows
            integrate with your actual systems (CRM, email, databases, etc.).
          </p>
          <Link
            href="/contact"
            className="mt-3 inline-flex items-center gap-1 text-sm text-brand-400 hover:text-brand-300"
          >
            <Sparkles className="h-3 w-3" />
            Want to automate your workflows with AI? Let&apos;s discuss.
          </Link>
        </div>
      </div>
    </div>
  )
}
