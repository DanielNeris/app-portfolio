'use client'

import { NextIntlClientProvider } from 'next-intl'
import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react'

import en from '@/messages/en.json'
import ptBr from '@/messages/pt-br.json'
import es from '@/messages/es.json'
import ar from '@/messages/ar.json'

const messagesByLocale = {
  en,
  'pt-br': ptBr,
  es,
  ar,
} as const

export type Locale = keyof typeof messagesByLocale

const rtlLocales: Locale[] = ['ar']

const LocaleContext = createContext<{
  locale: Locale
  setLocale: (l: Locale) => void
}>({ locale: 'en', setLocale: () => {} })

export const useLocale = () => useContext(LocaleContext)

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('en')

  useEffect(() => {
    const saved = localStorage.getItem('locale') as Locale | null
    if (saved && saved in messagesByLocale) {
      setLocaleState(saved)
    }
  }, [])

  useEffect(() => {
    document.documentElement.lang = locale
    document.documentElement.dir = rtlLocales.includes(locale) ? 'rtl' : 'ltr'
  }, [locale])

  const setLocale = (l: Locale) => {
    setLocaleState(l)
    localStorage.setItem('locale', l)
  }

  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
      <NextIntlClientProvider
        locale={locale}
        messages={messagesByLocale[locale]}
        timeZone="Asia/Dubai"
        now={new Date()}
      >
        {children}
      </NextIntlClientProvider>
    </LocaleContext.Provider>
  )
}
