'use client'

import { useTranslations } from 'next-intl'
import { SectionHeading } from '../section-heading'
import { Spotlight } from '../spotlight'
import { Stagger, StaggerItem } from '../reveal'
import { skillGroups } from '@/lib/data'

export function Skills() {
  const tSection = useTranslations('sections.skills')
  const tSkills = useTranslations('skills')

  return (
    <section id="skills" className="scroll-mt-20 pt-12 sm:pt-16">
      <div className="container-x">
        <SectionHeading title={tSection('title')} accent={tSection('accent')} />
        <Spotlight className="card p-6 sm:p-8">
          <Stagger staggerChildren={0.05} className="divide-y divide-line">
            {skillGroups.map(group => (
              <StaggerItem
                key={group.id}
                className="grid gap-3 py-4 first:pt-0 last:pb-0 sm:grid-cols-[11rem_1fr] sm:gap-6"
              >
                <div className="flex flex-wrap items-center gap-2 sm:flex-col sm:items-start sm:gap-2">
                  <h3
                    className={`font-mono text-[11px] uppercase tracking-[0.14em] sm:leading-[26px] ${
                      group.focus ? 'text-accent-soft' : 'text-ink-subtle'
                    }`}
                  >
                    {tSkills(group.id)}
                  </h3>
                  {group.focus && (
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/30 bg-accent/10 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.14em] text-accent-soft">
                      <span className="relative grid h-1 w-1 place-items-center">
                        <span className="absolute inline-flex h-full w-full animate-pulse-slow rounded-full bg-accent/60" />
                        <span className="relative inline-flex h-1 w-1 rounded-full bg-accent" />
                      </span>
                      {tSkills('focus')}
                    </span>
                  )}
                </div>
                <ul className="flex flex-wrap gap-1.5">
                  {group.items.map(item => (
                    <li
                      key={item}
                      className={`rounded border px-2 py-1 font-mono text-xs ${
                        group.focus
                          ? 'border-accent/30 bg-accent/10 text-ink'
                          : 'border-line bg-bg-elevated/70 text-ink-muted'
                      }`}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </StaggerItem>
            ))}
          </Stagger>
        </Spotlight>
      </div>
    </section>
  )
}
