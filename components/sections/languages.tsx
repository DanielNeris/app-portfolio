'use client'

import { useTranslations } from 'next-intl'
import { SectionHeading } from '../section-heading'
import { Spotlight } from '../spotlight'
import { Stagger, StaggerItem } from '../reveal'
import { languages } from '@/lib/data'

export function Languages() {
  const tSection = useTranslations('sections.languages')
  const tLang = useTranslations('languages')

  return (
    <section id="languages" className="scroll-mt-20 pt-12 sm:pt-16">
      <div className="container-x">
        <SectionHeading title={tSection('title')} accent={tSection('accent')} />
        <Spotlight className="card p-6 sm:p-8">
          <Stagger staggerChildren={0.05}>
            <ul className="divide-y divide-line">
              {languages.map(item => (
                <StaggerItem
                  key={item.id}
                  className="py-4 first:pt-0 last:pb-0"
                >
                  <li className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <h3 className="text-sm font-semibold tracking-tight text-ink">
                      {tLang(`${item.id}.name`)}
                    </h3>
                    <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-accent-soft/80 tabular">
                      {tLang(`${item.id}.level`)}
                    </span>
                  </li>
                </StaggerItem>
              ))}
            </ul>
          </Stagger>
        </Spotlight>
      </div>
    </section>
  )
}
