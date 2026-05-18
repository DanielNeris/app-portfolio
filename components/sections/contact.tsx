'use client'

import { useTranslations } from 'next-intl'
import { Github, Linkedin, Mail, ArrowUpRight } from 'lucide-react'
import { SectionHeading } from '../section-heading'
import { Spotlight } from '../spotlight'
import { Stagger, StaggerItem } from '../reveal'
import { profile } from '@/lib/data'

const channelDefs = [
  {
    id: 'email',
    value: profile.email,
    href: `mailto:${profile.email}`,
    Icon: Mail,
  },
  {
    id: 'linkedin',
    value: 'danielneris',
    href: 'https://www.linkedin.com/in/danielneris',
    Icon: Linkedin,
  },
  {
    id: 'github',
    value: 'DanielNeris',
    href: 'https://github.com/DanielNeris',
    Icon: Github,
  },
] as const

export function Contact() {
  const tSection = useTranslations('sections.contact')
  const tSocial = useTranslations('ui.social')

  return (
    <section id="contact" className="scroll-mt-20 pt-12 sm:pt-16">
      <div className="container-x">
        <SectionHeading title={tSection('title')} accent={tSection('accent')} />
        <Stagger staggerChildren={0.06}>
          <div className="grid gap-3 sm:grid-cols-3">
            {channelDefs.map(({ id, value, href, Icon }) => (
              <StaggerItem key={id}>
                <Spotlight
                  as="a"
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={
                    href.startsWith('http') ? 'noopener noreferrer' : undefined
                  }
                  className="card card-hover group flex h-full items-start justify-between gap-3 p-5 hover:border-accent/40"
                >
                  <span>
                    <Icon
                      className="h-4 w-4 text-ink-muted transition-colors group-hover:text-accent"
                      aria-hidden
                    />
                    <span className="mt-3 block font-mono text-[10px] uppercase tracking-[0.16em] text-accent-soft/80">
                      {tSocial(id)}
                    </span>
                    <span className="mt-1 block text-sm text-ink">{value}</span>
                  </span>
                  <ArrowUpRight
                    className="h-4 w-4 shrink-0 text-ink-faint transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent"
                    aria-hidden
                  />
                </Spotlight>
              </StaggerItem>
            ))}
          </div>
        </Stagger>
      </div>
    </section>
  )
}
