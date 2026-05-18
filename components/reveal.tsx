'use client'

import { motion, type MotionProps } from 'framer-motion'
import type { ReactNode } from 'react'

type RevealProps = {
  children: ReactNode
  delay?: number
  y?: number
  className?: string
  as?: 'div' | 'span' | 'li' | 'section' | 'article' | 'header' | 'p'
} & Omit<MotionProps, 'children'>

export function Reveal({
  children,
  delay = 0,
  y = 14,
  className,
  as = 'div',
  ...rest
}: RevealProps) {
  const MotionTag = motion[as] as typeof motion.div
  return (
    <MotionTag
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.2, 0.7, 0.2, 1],
      }}
      className={className}
      {...rest}
    >
      {children}
    </MotionTag>
  )
}

type StaggerProps = {
  children: ReactNode
  className?: string
  delayChildren?: number
  staggerChildren?: number
}

export function Stagger({
  children,
  className,
  delayChildren = 0,
  staggerChildren = 0.08,
}: StaggerProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-80px' }}
      variants={{
        hidden: {},
        show: {
          transition: { staggerChildren, delayChildren },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({
  children,
  className,
  y = 14,
}: {
  children: ReactNode
  className?: string
  y?: number
}) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.7, ease: [0.2, 0.7, 0.2, 1] },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
