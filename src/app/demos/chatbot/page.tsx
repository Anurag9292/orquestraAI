'use client'

import { useState, useRef, useEffect } from 'react'
import { Send, Bot, User, Sparkles } from 'lucide-react'
import Link from 'next/link'

interface Message {
  id: string
  role: 'user' | 'assistant'
  content: string
}

const initialMessages: Message[] = [
  {
    id: '1',
    role: 'assistant',
    content:
      "Hi! I'm the orquestraAI assistant. I can answer questions about our AI services, discuss how AI might help your business, or demonstrate conversational AI capabilities. What would you like to explore?",
  },
]

// Simulated responses (replace with actual AI API call)
const getResponse = (input: string): string => {
  const lower = input.toLowerCase()

  if (lower.includes('pricing') || lower.includes('cost') || lower.includes('price')) {
    return "Our services are tailored to each project's scope. Generally:\n\n- **AI Consulting**: Starting at $2,500 for a strategy session\n- **Custom AI Agents**: $10,000-$50,000 depending on complexity\n- **Chatbots**: Starting at $5,000\n- **AI Integration**: Starting at $7,500\n\nWould you like to book a free discovery call to discuss your specific needs?"
  }

  if (lower.includes('service') || lower.includes('what do you do') || lower.includes('offer')) {
    return "We offer comprehensive AI services:\n\n1. **Custom AI Agents** - Autonomous agents that handle complex workflows\n2. **AI Consulting** - Strategy and roadmap development\n3. **Conversational AI** - Chatbots and virtual assistants\n4. **AI Integration** - Connecting AI to your existing systems\n5. **Data & ML Pipelines** - Analytics and predictive models\n\nWhich area interests you most?"
  }

  if (lower.includes('how long') || lower.includes('timeline') || lower.includes('time')) {
    return "Typical timelines:\n\n- **Strategy Session**: 1-2 weeks\n- **MVP/POC**: 2-4 weeks\n- **Full Solution**: 4-12 weeks\n- **Ongoing Support**: Monthly retainer\n\nWe move fast because we use proven frameworks and battle-tested architectures. Want to discuss your specific project timeline?"
  }

  if (lower.includes('hello') || lower.includes('hi') || lower.includes('hey')) {
    return "Hello! Great to connect with you. I'm here to help you explore how AI can benefit your business. You can ask me about:\n\n- Our services and capabilities\n- Pricing and timelines\n- How AI might solve specific problems\n- Our process and approach\n\nWhat's on your mind?"
  }

  return "That's a great question! While I'm a demo chatbot with pre-programmed responses, a production version would use advanced AI to provide comprehensive, contextual answers.\n\nThis demo showcases the kind of conversational AI we build for clients — intelligent, helpful, and always available.\n\nWant to see what a custom AI chatbot could do for your business? [Book a free discovery call](/contact)."
}

export default function ChatbotDemoPage() {
  const [messages, setMessages] = useState<Message[]>(initialMessages)
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim() || isTyping) return

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input.trim(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInput('')
    setIsTyping(true)

    // Simulate typing delay
    setTimeout(() => {
      const response = getResponse(userMessage.content)
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: response,
      }
      setMessages((prev) => [...prev, assistantMessage])
      setIsTyping(false)
    }, 1000 + Math.random() * 1000)
  }

  return (
    <div className="pt-24 pb-8">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-sm mb-4">
            <span className="h-2 w-2 rounded-full bg-accent-emerald animate-pulse" />
            <span className="text-gray-300">Live Demo</span>
          </div>
          <h1 className="font-display text-3xl font-bold text-white">
            AI Chatbot Demo
          </h1>
          <p className="mt-2 text-gray-400">
            Try asking about our services, pricing, timelines, or anything else.
          </p>
        </div>

        {/* Chat container */}
        <div className="glass rounded-2xl overflow-hidden flex flex-col h-[600px]">
          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex gap-3 ${
                  message.role === 'user' ? 'justify-end' : 'justify-start'
                }`}
              >
                {message.role === 'assistant' && (
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-500/20 flex items-center justify-center">
                    <Bot className="h-4 w-4 text-brand-400" />
                  </div>
                )}
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                    message.role === 'user'
                      ? 'bg-brand-500 text-white'
                      : 'bg-white/5 text-gray-200'
                  }`}
                >
                  <p className="text-sm whitespace-pre-wrap leading-relaxed">
                    {message.content}
                  </p>
                </div>
                {message.role === 'user' && (
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                    <User className="h-4 w-4 text-gray-400" />
                  </div>
                )}
              </div>
            ))}

            {isTyping && (
              <div className="flex gap-3 justify-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-500/20 flex items-center justify-center">
                  <Bot className="h-4 w-4 text-brand-400" />
                </div>
                <div className="bg-white/5 rounded-2xl px-4 py-3">
                  <div className="flex gap-1">
                    <span className="w-2 h-2 rounded-full bg-gray-400 animate-bounce [animation-delay:0ms]" />
                    <span className="w-2 h-2 rounded-full bg-gray-400 animate-bounce [animation-delay:150ms]" />
                    <span className="w-2 h-2 rounded-full bg-gray-400 animate-bounce [animation-delay:300ms]" />
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form
            onSubmit={handleSubmit}
            className="border-t border-white/10 p-4"
          >
            <div className="flex gap-3">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask me anything about AI services..."
                className="flex-1 rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-500/50 focus:border-brand-500/50"
              />
              <button
                type="submit"
                disabled={!input.trim() || isTyping}
                className="rounded-xl bg-brand-500 px-4 py-3 text-white transition-all hover:bg-brand-600 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
          </form>
        </div>

        {/* Note */}
        <div className="mt-6 text-center">
          <p className="text-xs text-gray-500">
            This is a demo with pre-programmed responses. A production chatbot
            would use advanced AI (GPT-4, Claude, etc.) for dynamic, contextual
            conversations.
          </p>
          <Link
            href="/contact"
            className="mt-3 inline-flex items-center gap-1 text-sm text-brand-400 hover:text-brand-300"
          >
            <Sparkles className="h-3 w-3" />
            Want a custom AI chatbot? Let&apos;s talk.
          </Link>
        </div>
      </div>
    </div>
  )
}
