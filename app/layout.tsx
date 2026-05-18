import type { Metadata, Viewport } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Fraunces } from 'next/font/google'
import { SectionIndex } from '@/components/section-index'
import { LanguageSwitcher } from '@/components/language-switcher'
import { LocaleProvider } from './providers'
import './globals.css'

const fraunces = Fraunces({
  subsets: ['latin'],
  axes: ['opsz', 'SOFT'],
  variable: '--font-fraunces',
  display: 'swap',
})

const siteUrl = 'https://danielneris.com'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Daniel Neris · Senior Software Architect',
    template: '%s · Daniel Neris',
  },
  description:
    'Senior Software Architect designing cloud-native architectures on AWS for fintech, Web3 and regulated platforms. 8+ years across Node.js, TypeScript, distributed systems and cloud infrastructure.',
  keywords: [
    'Daniel Neris',
    'Senior Software Architect',
    'Cloud Native',
    'AWS',
    'Backend Architect',
    'Fintech',
    'Web3',
    'Node.js',
    'TypeScript',
    'Distributed Systems',
    'KYC',
    'Tokenization',
    'Solidity',
    'Dubai',
  ],
  authors: [{ name: 'Daniel Neris', url: siteUrl }],
  creator: 'Daniel Neris',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'Daniel Neris',
    title: 'Daniel Neris · Senior Software Architect',
    description:
      'Cloud-native architect building privacy-first fintech, Web3 and KYC platforms. Based in Dubai, UAE.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Daniel Neris · Senior Software Architect',
    description:
      'Cloud-native architect building privacy-first fintech, Web3 and KYC platforms.',
    creator: '@danielneris',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  alternates: { canonical: siteUrl },
}

export const viewport: Viewport = {
  themeColor: '#0a0a0a',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable} ${fraunces.variable}`}
      suppressHydrationWarning
    >
      <body className="relative min-h-screen bg-bg-base text-ink antialiased selection:bg-accent/30 selection:text-white">
        <div
          aria-hidden
          className="pointer-events-none fixed inset-0 -z-10 grid-fade opacity-90"
        />
        <div
          aria-hidden
          className="pointer-events-none fixed inset-x-0 top-0 -z-10 h-[600px] bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(145,94,255,0.12),transparent_70%)]"
        />
        <div
          aria-hidden
          className="pointer-events-none fixed inset-0 -z-10 grain"
        />
        <LocaleProvider>
          <LanguageSwitcher />
          <SectionIndex />
          {children}
        </LocaleProvider>
      </body>
    </html>
  )
}
