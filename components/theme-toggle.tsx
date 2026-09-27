'use client'

import { Moon, Sun } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { type MouseEvent, useEffect } from 'react'

type Theme = 'light' | 'dark'

const themeColor: Record<Theme, string> = {
  light: '#f6f5f9',
  dark: '#0a0a0a',
}

const currentTheme = (): Theme =>
  document.documentElement.dataset.theme === 'light' ? 'light' : 'dark'

function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme
  for (const meta of document.querySelectorAll('meta[name="theme-color"]')) {
    meta.setAttribute('content', themeColor[theme])
  }
}

function savedTheme() {
  try {
    return localStorage.getItem('theme')
  } catch {
    return null
  }
}

export function ThemeToggle() {
  const t = useTranslations('ui')

  useEffect(() => {
    applyTheme(currentTheme())

    // Until someone picks a theme, keep following the OS setting live
    const media = matchMedia('(prefers-color-scheme: light)')
    const onChange = () => {
      if (!savedTheme()) applyTheme(media.matches ? 'light' : 'dark')
    }
    media.addEventListener('change', onChange)
    return () => media.removeEventListener('change', onChange)
  }, [])

  const toggle = (event: MouseEvent<HTMLButtonElement>) => {
    const next: Theme = currentTheme() === 'light' ? 'dark' : 'light'
    const commit = () => {
      applyTheme(next)
      try {
        localStorage.setItem('theme', next)
      } catch {}
    }

    const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches
    if (typeof document.startViewTransition !== 'function' || reduceMotion) {
      commit()
      return
    }

    // The new theme grows out of the button as a circle
    const rect = event.currentTarget.getBoundingClientRect()
    const x = rect.left + rect.width / 2
    const y = rect.top + rect.height / 2
    const radius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    )

    document
      .startViewTransition(commit)
      .ready.then(() => {
        document.documentElement.animate(
          {
            clipPath: [
              `circle(0px at ${x}px ${y}px)`,
              `circle(${radius}px at ${x}px ${y}px)`,
            ],
          },
          {
            duration: 500,
            easing: 'cubic-bezier(0.2, 0.7, 0.2, 1)',
            pseudoElement: '::view-transition-new(root)',
          }
        )
      })
      .catch(() => {})
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={t('theme')}
      title={t('theme')}
      className="grid h-[34px] w-[34px] place-items-center rounded-full border border-line bg-bg-raised/80 text-ink-subtle backdrop-blur-md transition-colors hover:text-ink"
    >
      <Sun aria-hidden className="h-3.5 w-3.5 light:hidden" strokeWidth={2.2} />
      <Moon
        aria-hidden
        className="hidden h-3.5 w-3.5 light:block"
        strokeWidth={2.2}
      />
    </button>
  )
}
