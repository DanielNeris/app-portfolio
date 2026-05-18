'use client'

import { useTranslations } from 'next-intl'
import { SectionHeading } from '../section-heading'
import { Spotlight } from '../spotlight'
import { Stagger, StaggerItem } from '../reveal'

const bulletIds = ['role', 'tokenization', 'kyc', 'mindset'] as const

const richTags = {
  accent: (chunks: React.ReactNode) => (
    <strong className="font-semibold text-accent-soft tabular">{chunks}</strong>
  ),
  strong: (chunks: React.ReactNode) => (
    <strong className="font-semibold text-ink tabular">{chunks}</strong>
  ),
  ink: (chunks: React.ReactNode) => (
    <span className="text-ink">{chunks}</span>
  ),
  italic: (chunks: React.ReactNode) => (
    <span className="serif-italic text-ink">{chunks}</span>
  ),
}

export function About() {
  const tSection = useTranslations('sections.about')
  const tAbout = useTranslations('about')

  return (
    <section id="about" className="scroll-mt-20 pt-12 sm:pt-16">
      <div className="container-x">
        <SectionHeading
          title={tSection('title')}
          accent={tSection('accent')}
        />
        <Spotlight className="card p-6 sm:p-8">
          <Stagger staggerChildren={0.06}>
            <ul className="space-y-5">
              {bulletIds.map(id => (
                <StaggerItem key={id}>
                  <li className="flex gap-3 font-mono text-[13px] leading-relaxed text-ink-muted sm:text-sm">
                    <span
                      aria-hidden
                      className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-accent shadow-[0_0_8px_rgba(145,94,255,0.5)]"
                    />
                    <span>{tAbout.rich(id, richTags)}</span>
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
