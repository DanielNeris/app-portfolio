import type { Metadata, Viewport } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { SectionIndex } from '@/components/section-index'
import { LanguageSwitcher } from '@/components/language-switcher'
import { ThemeToggle } from '@/components/theme-toggle'
import { LocaleProvider } from './providers'
import './globals.css'

const siteUrl = 'https://danielneris.com'

// Runs before first paint so the page never flashes the wrong theme:
// a saved choice wins, then the OS preference, and dark otherwise.
const themeScript = `(function(){var t;try{t=localStorage.getItem('theme')}catch(e){}if(t!=='light'&&t!=='dark'){t=window.matchMedia&&matchMedia('(prefers-color-scheme: light)').matches?'light':'dark'}document.documentElement.dataset.theme=t})()`

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Daniel Neris · Senior Backend Engineer',
    template: '%s · Daniel Neris',
  },
  description:
    'Senior Backend Engineer with 8+ years building production systems in Node.js and TypeScript for fintech, banking and Web3. Now focused on privacy-first, decentralized, peer-to-peer software on the Holepunch/Pear stack.',
  keywords: [
    'Daniel Neris',
    'Senior Backend Engineer',
    'Software Architecture',
    'System Design',
    'Domain-Driven Design',
    'Event Sourcing',
    'Node.js',
    'TypeScript',
    'Go',
    'Distributed Systems',
    'Peer-to-Peer',
    'P2P',
    'Holepunch',
    'Pear',
    'Hypercore',
    'Privacy-First',
    'Decentralization',
    'Fintech',
    'Banking',
    'Web3',
    'Tokenization',
    'Kafka',
    'PostgreSQL',
    'AWS',
    'Serverless',
    'Dubai',
  ],
  authors: [{ name: 'Daniel Neris', url: siteUrl }],
  creator: 'Daniel Neris',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'Daniel Neris',
    title: 'Daniel Neris · Senior Backend Engineer',
    description:
      'Backend engineer for fintech, banking and Web3, building privacy-first, peer-to-peer software on Holepunch/Pear. Based in Dubai, UAE.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Daniel Neris · Senior Backend Engineer',
    description:
      'Backend engineer for fintech, banking and Web3, building privacy-first, peer-to-peer software on Holepunch/Pear.',
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
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f6f5f9' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' },
  ],
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
      className={`${GeistSans.variable} ${GeistMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* biome-ignore lint/security/noDangerouslySetInnerHtml: static inline script that sets the theme before first paint */}
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="relative min-h-screen bg-bg-base text-ink antialiased selection:bg-accent/30 selection:text-ink">
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
          <div className="fixed right-4 top-4 z-50 flex items-center gap-2">
            <ThemeToggle />
            <LanguageSwitcher />
          </div>
          <SectionIndex />
          {children}
        </LocaleProvider>
      </body>
    </html>
  )
}
