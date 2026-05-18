'use client'

import { useEffect, useRef, useState } from 'react'

type Props = {
  to: number
  prefix?: string
  suffix?: string
  duration?: number
  className?: string
  format?: (n: number) => string
}

export function CountUp({
  to,
  prefix = '',
  suffix = '',
  duration = 1400,
  className,
  format,
}: Props) {
  const ref = useRef<HTMLSpanElement | null>(null)
  const [value, setValue] = useState(0)
  const startedRef = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      entries => {
        for (const entry of entries) {
          if (entry.isIntersecting && !startedRef.current) {
            startedRef.current = true
            const start = performance.now()
            const tick = (now: number) => {
              const t = Math.min(1, (now - start) / duration)
              const eased = 1 - Math.pow(1 - t, 3)
              setValue(Math.round(to * eased))
              if (t < 1) requestAnimationFrame(tick)
            }
            requestAnimationFrame(tick)
          }
        }
      },
      { threshold: 0.4 },
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [to, duration])

  const display = format ? format(value) : value.toLocaleString('en-US')
  return (
    <span ref={ref} className={`tabular ${className ?? ''}`}>
      {prefix}
      {display}
      {suffix}
    </span>
  )
}
