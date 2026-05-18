'use client'

import { useLocale, type Locale } from '@/app/providers'

const locales: { code: Locale; label: string }[] = [
  { code: 'en', label: 'EN' },
  { code: 'pt-br', label: 'PT' },
  { code: 'es', label: 'ES' },
  { code: 'ar', label: 'AR' },
]

export function LanguageSwitcher() {
  const { locale, setLocale } = useLocale()
  return (
    <div className="fixed right-4 top-4 z-50 flex items-center gap-0.5 rounded-full border border-line bg-bg-raised/80 p-1 backdrop-blur-md">
      {locales.map(l => (
        <button
          key={l.code}
          type="button"
          onClick={() => setLocale(l.code)}
          aria-pressed={locale === l.code}
          className={`rounded-full px-2.5 py-1 font-mono text-[10.5px] uppercase tracking-[0.14em] transition-colors ${
            locale === l.code
              ? 'bg-accent/15 text-accent-soft'
              : 'text-ink-subtle hover:text-ink'
          }`}
        >
          {l.label}
        </button>
      ))}
    </div>
  )
}
