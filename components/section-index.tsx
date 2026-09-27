'use client'

import { useEffect, useState } from 'react'
import { useTranslations } from 'next-intl'

const sectionIds = [
  { id: 'top', key: 'intro' },
  { id: 'projects', key: 'projects.title' },
  { id: 'about', key: 'about.title' },
  { id: 'work', key: 'work.title' },
  { id: 'skills', key: 'skills.title' },
  { id: 'education', key: 'education.title' },
  { id: 'certifications', key: 'certifications.title' },
  { id: 'languages', key: 'languages.title' },
  { id: 'contact', key: 'contact.title' },
] as const

export function SectionIndex() {
  const t = useTranslations('sections')
  const [active, setActive] = useState(0)

  useEffect(() => {
    const observers: IntersectionObserver[] = []
    const map = new Map<string, number>()
    sectionIds.forEach((s, i) => map.set(s.id, i))

    sectionIds.forEach(s => {
      const el = document.getElementById(s.id)
      if (!el) return
      const obs = new IntersectionObserver(
        entries => {
          for (const e of entries) {
            if (e.isIntersecting) {
              const idx = map.get(e.target.id)
              if (idx !== undefined) setActive(idx)
            }
          }
        },
        { rootMargin: '-40% 0px -55% 0px', threshold: 0 },
      )
      obs.observe(el)
      observers.push(obs)
    })
    return () => observers.forEach(o => o.disconnect())
  }, [])

  const total = String(sectionIds.length).padStart(2, '0')
  const current = String(active + 1).padStart(2, '0')

  return (
    <aside
      aria-hidden
      className="pointer-events-none fixed bottom-6 right-6 z-40 hidden flex-col items-end gap-1 lg:flex"
    >
      <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-faint tabular">
        {current} <span className="text-ink-faint/60">/</span> {total}
      </div>
      <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent-soft">
        {t(sectionIds[active].key)}
      </div>
    </aside>
  )
}
