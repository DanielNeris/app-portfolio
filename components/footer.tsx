'use client'

import { useTranslations } from 'next-intl'

export function Footer() {
  const t = useTranslations('ui')
  return (
    <footer className="pb-16 pt-16">
      <div className="container-x text-center">
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-faint">
          {t('footer', { year: new Date().getFullYear() })}
        </p>
      </div>
    </footer>
  )
}
