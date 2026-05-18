'use client'

import { useTranslations } from 'next-intl'
import { SectionHeading } from '../section-heading'
import { Spotlight } from '../spotlight'
import { Stagger, StaggerItem } from '../reveal'
import { experiences, type ExperienceItem } from '@/lib/data'

export function Experience() {
  const tSection = useTranslations('sections.work')
  return (
    <section id="work" className="scroll-mt-20 pt-12 sm:pt-16">
      <div className="container-x">
        <SectionHeading title={tSection('title')} accent={tSection('accent')} />
        <Stagger staggerChildren={0.06}>
          <ul className="space-y-3">
            {experiences.map(exp => (
              <StaggerItem key={exp.id}>
                <ExperienceCard exp={exp} />
              </StaggerItem>
            ))}
          </ul>
        </Stagger>
      </div>
    </section>
  )
}

function ExperienceCard({ exp }: { exp: ExperienceItem }) {
  const tExp = useTranslations(`experience.${exp.id}`)
  const tStatus = useTranslations('ui.status')
  const points = tExp.raw('points') as string[]

  return (
    <Spotlight
      as="li"
      className="card p-5 transition-colors hover:border-accent/30 sm:p-6"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          {exp.url ? (
            <a
              href={exp.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1.5 text-base font-semibold tracking-tight text-ink transition-colors hover:text-accent-soft"
            >
              {tExp('company')}
              <span
                aria-hidden
                className="text-ink-faint transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent"
              >
                ↗
              </span>
            </a>
          ) : (
            <span className="text-base font-semibold tracking-tight text-ink">
              {tExp('company')}
            </span>
          )}
          <p className="mt-1 font-mono text-[13px] text-ink-muted">
            {tExp('role')}
          </p>
          <p className="mt-0.5 font-mono text-xs text-ink-subtle tabular">
            {tExp('period')}
            <span aria-hidden className="mx-2 text-ink-faint">
              /
            </span>
            {tExp('location')}
          </p>
        </div>
        {exp.end === 'Present' && (
          <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-accent/30 bg-accent/10 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.14em] text-accent-soft">
            <span className="relative grid h-1 w-1 place-items-center">
              <span className="absolute inline-flex h-full w-full animate-pulse-slow rounded-full bg-accent/60" />
              <span className="relative inline-flex h-1 w-1 rounded-full bg-accent" />
            </span>
            {tStatus('current')}
          </span>
        )}
      </div>

      <ul className="mt-5 space-y-2">
        {points.map(p => (
          <li
            key={p}
            className="flex gap-3 text-sm leading-relaxed text-ink-muted"
          >
            <span
              aria-hidden
              className="mt-2.5 h-px w-2 shrink-0 bg-accent/50"
            />
            <span>{p}</span>
          </li>
        ))}
      </ul>

      {exp.stack && (
        <div className="mt-5 flex flex-wrap gap-1.5">
          {exp.stack.map(tag => (
            <span
              key={tag}
              className="rounded border border-line bg-bg-elevated/70 px-1.5 py-0.5 font-mono text-[10.5px] text-ink-subtle"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </Spotlight>
  )
}
