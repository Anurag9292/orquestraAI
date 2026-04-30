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
    default: 'orquestraAI | Deep Tech AI Engineering',
    template: '%s | orquestraAI',
  },
  description:
    'We engineer mathematically rigorous AI systems from first principles. Custom models, statistical inference, deep learning architectures, and production ML — built by researchers, shipped by engineers.',
  keywords: [
    'deep tech AI',
    'machine learning engineering',
    'statistical modeling',
    'custom AI models',
    'Bayesian inference',
    'neural network architecture',
    'MLOps',
    'AI research',
    'mathematical AI',
    'production ML systems',
  ],
  authors: [{ name: 'orquestraAI' }],
  creator: 'orquestraAI',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://orquestra.ai',
    siteName: 'orquestraAI',
    title: 'orquestraAI | Deep Tech AI Engineering',
    description:
      'We engineer mathematically rigorous AI systems from first principles. Custom models, statistical inference, and production ML.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'orquestraAI - Deep Tech AI Engineering',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'orquestraAI | Deep Tech AI Engineering',
    description:
      'We engineer mathematically rigorous AI systems from first principles. Custom models, statistical inference, and production ML.',
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
