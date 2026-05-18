'use client'

import {
  SiNodedotjs,
  SiTypescript,
  SiJavascript,
  SiGo,
  SiSolidity,
  SiApachekafka,
  SiDocker,
  SiKubernetes,
  SiTerraform,
  SiNginx,
  SiGithubactions,
  SiPrometheus,
  SiMongodb,
  SiPostgresql,
  SiRedis,
  SiElasticsearch,
  SiGraphql,
  SiReact,
  SiNextdotjs,
} from 'react-icons/si'
import { Cloud } from 'lucide-react'
import type { IconType } from 'react-icons'
import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { SectionHeading } from '../section-heading'
import { Spotlight } from '../spotlight'

type Skill = {
  name: string
  Icon: IconType | typeof Cloud
}

const skills: Skill[] = [
  { name: 'AWS', Icon: Cloud },
  { name: 'Kubernetes', Icon: SiKubernetes },
  { name: 'Terraform', Icon: SiTerraform },
  { name: 'Docker', Icon: SiDocker },
  { name: 'NGINX', Icon: SiNginx },
  { name: 'GitHub Actions', Icon: SiGithubactions },
  { name: 'Prometheus', Icon: SiPrometheus },
  { name: 'Kafka', Icon: SiApachekafka },
  { name: 'PostgreSQL', Icon: SiPostgresql },
  { name: 'Redis', Icon: SiRedis },
  { name: 'MongoDB', Icon: SiMongodb },
  { name: 'Elasticsearch', Icon: SiElasticsearch },
  { name: 'Node.js', Icon: SiNodedotjs },
  { name: 'TypeScript', Icon: SiTypescript },
  { name: 'JavaScript', Icon: SiJavascript },
  { name: 'Go', Icon: SiGo },
  { name: 'React', Icon: SiReact },
  { name: 'Next.js', Icon: SiNextdotjs },
  { name: 'React Native', Icon: SiReact },
  { name: 'GraphQL', Icon: SiGraphql },
  { name: 'Solidity', Icon: SiSolidity },
]

export function Skills() {
  const t = useTranslations('sections.skills')
  return (
    <section id="skills" className="scroll-mt-20 pt-12 sm:pt-16">
      <div className="container-x">
        <SectionHeading title={t('title')} accent={t('accent')} />
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-7">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{
                duration: 0.5,
                delay: 0.02 * i,
                ease: [0.2, 0.7, 0.2, 1],
              }}
            >
              <Spotlight className="card group flex aspect-square flex-col items-center justify-center gap-2.5 p-3 transition-colors hover:border-accent/40">
                <skill.Icon
                  className="h-7 w-7 text-ink-muted transition-colors group-hover:text-accent-soft"
                  aria-hidden
                />
                <span className="text-center font-mono text-[10.5px] uppercase tracking-[0.1em] text-ink-subtle transition-colors group-hover:text-ink">
                  {skill.name}
                </span>
              </Spotlight>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
