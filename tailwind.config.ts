import type { Config } from 'tailwindcss'
import plugin from 'tailwindcss/plugin'

// Colors are RGB channels set per theme in globals.css, so opacity
// modifiers like bg-accent/10 keep working in both themes.
const channel = (name: string) => `rgb(var(${name}) / <alpha-value>)`

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: {
          base: channel('--bg-base'),
          raised: channel('--bg-raised'),
          elevated: channel('--bg-elevated'),
        },
        ink: {
          DEFAULT: channel('--ink'),
          muted: channel('--ink-muted'),
          subtle: channel('--ink-subtle'),
          faint: channel('--ink-faint'),
        },
        line: {
          DEFAULT: 'var(--line)',
          strong: 'var(--line-strong)',
        },
        accent: {
          DEFAULT: channel('--accent'),
          soft: channel('--accent-soft'),
          glow: 'rgb(var(--accent) / 0.35)',
        },
        status: {
          live: channel('--status-live'),
          beta: channel('--status-beta'),
        },
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'ui-sans-serif', 'system-ui'],
        mono: ['var(--font-geist-mono)', 'ui-monospace', 'monospace'],
      },
      letterSpacing: {
        tightest: '-0.04em',
      },
      maxWidth: {
        container: '1200px',
        prose: '64ch',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: '0', transform: 'translateY(8px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [
    plugin(({ addVariant }) => addVariant('light', '[data-theme="light"] &')),
  ],
}

export default config
