'use client'

import { useRef, type ReactNode } from 'react'

type Props = {
  children: ReactNode
  className?: string
  as?: 'div' | 'a' | 'article' | 'section' | 'li'
  href?: string
  target?: string
  rel?: string
}

export function Spotlight({
  children,
  className = '',
  as: Tag = 'div',
  ...rest
}: Props) {
  const ref = useRef<HTMLElement | null>(null)

  const handleMove = (e: React.MouseEvent) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    el.style.setProperty('--mx', `${e.clientX - rect.left}px`)
    el.style.setProperty('--my', `${e.clientY - rect.top}px`)
  }

  return (
    // biome-ignore lint/suspicious/noExplicitAny: dynamic element typing
    <Tag
      ref={ref as any}
      onMouseMove={handleMove}
      className={`spotlight ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  )
}
