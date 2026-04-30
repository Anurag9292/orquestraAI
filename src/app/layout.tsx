import type { Metadata } from 'next'
import { Inter, Space_Grotesk, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://orquestra.ai'),
  title: {
    default: 'orquestraAI | AI Technology Services',
    template: '%s | orquestraAI',
  },
  description:
    'We build custom AI agents, chatbots, and intelligent systems that transform how businesses operate. From strategy to deployment, we orchestrate AI solutions that deliver real ROI.',
  keywords: [
    'AI services',
    'custom AI agents',
    'AI consulting',
    'chatbot development',
    'AI integration',
    'machine learning',
    'AI automation',
    'AI strategy',
    'artificial intelligence company',
  ],
  authors: [{ name: 'orquestraAI' }],
  creator: 'orquestraAI',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://orquestra.ai',
    siteName: 'orquestraAI',
    title: 'orquestraAI | AI Technology Services',
    description:
      'We build custom AI agents, chatbots, and intelligent systems that transform how businesses operate.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'orquestraAI - AI Technology Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'orquestraAI | AI Technology Services',
    description:
      'We build custom AI agents, chatbots, and intelligent systems that transform how businesses operate.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`dark ${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
    >
      <body className="min-h-screen bg-navy-950 font-sans">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
