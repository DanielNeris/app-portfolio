'use client'

import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { ArrowUpRight } from 'lucide-react'
import { SectionHeading } from '../section-heading'
import { Spotlight } from '../spotlight'
import { projects, type Project } from '@/lib/data'

const statusKey = {
  live: 'live',
  'in-progress': 'inProgress',
  private: 'private',
} as const

const statusStyle: Record<NonNullable<Project['status']>, string> = {
  live: 'text-emerald-400',
  'in-progress': 'text-accent-soft',
  private: 'text-ink-subtle',
}

export function Projects() {
  const tSection = useTranslations('sections.projects')
  return (
    <section id="projects" className="scroll-mt-20 pt-12 sm:pt-16">
      <div className="container-x">
        <SectionHeading title={tSection('title')} accent={tSection('accent')} />
        <div className="grid gap-3 sm:grid-cols-2">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const tProj = useTranslations(`projects.${project.id}`)
  const tStatus = useTranslations('ui.status')

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{
        duration: 0.6,
        delay: 0.05 * (index % 2),
        ease: [0.2, 0.7, 0.2, 1],
      }}
    >
      <Spotlight
        as="a"
        href={project.href}
        target="_blank"
        rel="noopener noreferrer"
        className="card card-hover group relative flex h-full flex-col p-5 hover:border-accent/40 sm:p-6"
      >
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-baseline gap-x-2.5 gap-y-1">
              <h3 className="text-base font-semibold tracking-tight text-ink">
                {tProj('name')}
              </h3>
              {project.status && (
                <span
                  className={`font-mono text-[10px] uppercase tracking-[0.16em] ${statusStyle[project.status]}`}
                >
                  · {tStatus(statusKey[project.status])}
                </span>
              )}
            </div>
            <p className="mt-1.5 font-mono text-[13px] leading-relaxed text-ink-muted">
              {tProj('description')}
            </p>
          </div>
          {project.metric && (
            <div className="shrink-0 text-right">
              <div className="bg-gradient-to-br from-accent-soft to-accent bg-clip-text text-2xl font-semibold tracking-tight text-transparent tabular">
                {project.metric}
              </div>
            </div>
          )}
        </div>

        <div className="mt-5 flex flex-wrap items-center gap-1.5">
          {project.stack.map(tag => (
            <span
              key={tag}
              className="rounded border border-line bg-bg-elevated/70 px-1.5 py-0.5 font-mono text-[10.5px] text-ink-subtle transition-colors group-hover:border-accent/30 group-hover:text-ink-muted"
            >
              {tag}
            </span>
          ))}
          <ArrowUpRight
            className="ml-auto h-4 w-4 text-ink-faint transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent"
            aria-hidden
          />
        </div>
      </Spotlight>
    </motion.div>
  )
}
