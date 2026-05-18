'use client'

import { useEffect, useState } from 'react'
import { useTranslations } from 'next-intl'

const formatter = new Intl.DateTimeFormat('en-GB', {
  hour: '2-digit',
  minute: '2-digit',
  hour12: false,
  timeZone: 'Asia/Dubai',
})

export function LocalTime() {
  const [time, setTime] = useState<string | null>(null)
  const t = useTranslations('ui')

  useEffect(() => {
    const update = () => setTime(formatter.format(new Date()))
    update()
    const id = setInterval(update, 1000 * 30)
    return () => clearInterval(id)
  }, [])

  return (
    <span className="inline-flex items-center gap-1.5 font-mono text-xs text-ink-muted tabular">
      <span
        aria-hidden
        className="inline-block h-1 w-1 rounded-full bg-accent shadow-[0_0_8px_rgba(145,94,255,0.6)]"
      />
      {time ?? '··:··'} <span className="text-ink-faint">{t('localTime')}</span>
    </span>
  )
}
