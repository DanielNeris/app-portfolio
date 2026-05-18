'use client'

import { useTranslations } from 'next-intl'
import { SectionHeading } from '../section-heading'
import { Spotlight } from '../spotlight'
import { Stagger, StaggerItem } from '../reveal'
import { certifications } from '@/lib/data'

export function Certifications() {
  const tSection = useTranslations('sections.certifications')
  const tCert = useTranslations('certifications')

  return (
    <section id="certifications" className="scroll-mt-20 pt-12 sm:pt-16">
      <div className="container-x">
        <SectionHeading title={tSection('title')} accent={tSection('accent')} />
        <Spotlight className="card p-6 sm:p-8">
          <Stagger staggerChildren={0.05}>
            <ul className="divide-y divide-line">
              {certifications.map((item, i) => (
                <StaggerItem key={item.id}>
                  <li
                    className={`flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 ${i === 0 ? 'pb-4' : 'py-4'} last:pb-0`}
                  >
                    <div>
                      <h3 className="text-sm font-semibold tracking-tight text-ink">
                        {tCert(`${item.id}.degree`)}
                      </h3>
                      <p className="mt-0.5 font-mono text-xs text-ink-muted">
                        {tCert(`${item.id}.institution`)}
                      </p>
                    </div>
                    <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-accent-soft/80 tabular">
                      {item.period}
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
