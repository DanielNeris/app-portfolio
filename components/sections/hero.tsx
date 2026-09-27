'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  BadgeCheck,
  ArrowUpRight,
  Download,
} from 'lucide-react'
import { Spotlight } from '../spotlight'
import { LocalTime } from '../local-time'
import { profile } from '@/lib/data'

const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: 0.06 * i, ease: [0.2, 0.7, 0.2, 1] },
  }),
}

export function Hero() {
  const tUi = useTranslations('ui')
  const tHero = useTranslations('hero')
  const tSocial = useTranslations('ui.social')

  const socialItems = [
    {
      id: 'github',
      label: tSocial('github'),
      href: 'https://github.com/DanielNeris',
      Icon: Github,
    },
    {
      id: 'linkedin',
      label: tSocial('linkedin'),
      href: 'https://www.linkedin.com/in/danielneris',
      Icon: Linkedin,
    },
    {
      id: 'email',
      label: tSocial('email'),
      href: `mailto:${profile.email}`,
      Icon: Mail,
    },
    {
      id: 'cv',
      label: tUi('cvResume'),
      href: '/daniel-neris-cv.pdf',
      Icon: Download,
      isCV: true,
    },
  ]

  return (
    <section id="top" className="pt-20 sm:pt-24">
      <div className="container-x">
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="show"
        >
          <Spotlight className="card p-6 sm:p-8">
            <div className="flex items-start gap-5 sm:gap-7">
              <div className="relative shrink-0">
                <div className="relative h-20 w-20 overflow-hidden rounded-full border border-line bg-bg-elevated sm:h-24 sm:w-24">
                  <Image
                    src="/avatar.jpg"
                    alt={profile.name}
                    width={96}
                    height={96}
                    priority
                    className="h-full w-full object-cover"
                  />
                </div>
                <span
                  aria-hidden
                  className="absolute -inset-1 -z-10 rounded-full bg-accent/20 blur-xl"
                />
                <span
                  aria-hidden
                  className="absolute inset-0 rounded-full ring-1 ring-accent/50"
                />
              </div>

              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                  <h1 className="text-2xl font-semibold tracking-tight text-ink sm:text-[1.8rem]">
                    {profile.name}
                  </h1>
                  <BadgeCheck
                    className="h-5 w-5 shrink-0 text-accent"
                    strokeWidth={2.2}
                    aria-label="Verified"
                  />
                </div>
                <p className="mt-1.5 font-mono text-sm text-ink-muted">
                  <span className="text-ink">{tHero('title')}</span>
                  <span aria-hidden className="mx-1.5 text-ink-faint">
                    ·
                  </span>
                  <span className="text-accent-soft tabular">
                    {tUi('experienceYears')}
                  </span>
                </p>
                <p className="mt-1 font-mono text-sm text-ink-subtle">
                  @danielneris
                </p>

                <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-xs sm:text-[13px]">
                  <span className="inline-flex items-center gap-1.5 whitespace-nowrap text-ink-muted">
                    <MapPin
                      className="h-3.5 w-3.5 shrink-0 text-accent"
                      aria-hidden
                      strokeWidth={2.2}
                    />
                    {tHero('location')}
                  </span>
                  <LocalTime />
                </div>
                <a
                  href={`mailto:${profile.email}`}
                  className="mt-2 inline-flex max-w-full items-center gap-1.5 break-all font-mono text-xs text-ink-muted transition-colors hover:text-accent-soft sm:text-[13px]"
                >
                  <Mail
                    className="h-3.5 w-3.5 shrink-0 text-ink-subtle"
                    aria-hidden
                  />
                  <span className="break-all">{profile.email}</span>
                </a>
              </div>
            </div>

            <p className="mt-7 text-pretty leading-relaxed text-ink-muted sm:text-[15px]">
              {tHero.rich('description', {
                accent: chunks => (
                  <span className="whitespace-nowrap text-accent-soft">{chunks}</span>
                ),
                ink: chunks => <span className="text-ink">{chunks}</span>,
              })}
            </p>
          </Spotlight>
        </motion.div>

        <motion.div
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-4"
        >
          {socialItems.map(({ id, label, href, Icon, isCV }) => {
            const isHttp = href.startsWith('http')
            return (
              <Spotlight
                key={id}
                as="a"
                href={href}
                target={isHttp || isCV ? '_blank' : undefined}
                rel={isHttp ? 'noopener noreferrer' : undefined}
                className={`card card-hover group flex items-center justify-between gap-3 px-4 py-3.5 ${
                  isCV
                    ? 'border-accent/30 bg-accent/5 hover:border-accent/60 hover:bg-accent/10'
                    : ''
                }`}
              >
                <span className="flex items-center gap-2.5">
                  <Icon
                    className={`h-4 w-4 transition-colors ${
                      isCV
                        ? 'text-accent-soft'
                        : 'text-ink-muted group-hover:text-accent-soft'
                    }`}
                    aria-hidden
                  />
                  <span
                    className={`text-sm ${isCV ? 'text-accent-soft' : 'text-ink'}`}
                  >
                    {label}
                  </span>
                </span>
                <ArrowUpRight
                  className={`h-4 w-4 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${
                    isCV
                      ? 'text-accent-soft'
                      : 'text-ink-faint group-hover:text-accent-soft'
                  }`}
                  aria-hidden
                />
              </Spotlight>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
