# app-portfolio

Source code of my personal portfolio, live at [danielneris.com](https://danielneris.com).

A single-page site built with Next.js 15 (App Router), TypeScript and Tailwind CSS, exported as static HTML and served by Netlify.

## Features

- Sections for hero, about, projects, experience, stack, studies, certifications, languages and contact
- i18n with next-intl in 4 locales: English (default), Portuguese (pt-BR), Spanish and Arabic
- Automatic right-to-left layout for Arabic, with a sans fallback for mono text (Geist Mono has no Arabic glyphs)
- Dark theme by default and a light theme that follows the system preference
- Card spotlight effect, animated section index, reveal animations (Framer Motion) and a live local time chip
- SEO metadata, Open Graph and Twitter cards, multi-platform favicons and a downloadable CV

## Stack

| Area      | Tools                                      |
| --------- | ------------------------------------------ |
| Framework | Next.js 15, React 19, TypeScript           |
| Styling   | Tailwind CSS, Geist fonts                  |
| i18n      | next-intl                                  |
| Motion    | Framer Motion                              |
| Icons     | lucide-react, react-icons                  |
| Quality   | Biome (lint and format)                    |
| Deploy    | Static export (`out/`) on Netlify, Node 22 |

## Getting started

Requires Node.js 22 and pnpm.

```bash
pnpm install
pnpm dev      # http://localhost:3000
pnpm build    # static export to out/
pnpm lint     # biome check
pnpm format   # biome format --write
```

## Project structure

```
app/                  layout, page, providers, global styles and icons
components/           shared UI (spotlight, reveal, section index, theme toggle, language switcher)
components/sections/  one component per page section
lib/data.ts           typed content: projects, experience, stack, education, languages
messages/             translations (en, pt-br, es, ar)
public/               avatar, logo and CV
```

Content that does not change between languages lives in `lib/data.ts`. Text lives in `messages/*.json`, keyed by the same ids, so adding a project means one entry in `data.ts` and one in each locale file.

## Deploy

`netlify.toml` runs `pnpm build` and publishes `out/`. `next.config.mjs` sets `output: 'export'` with unoptimized images, so the site has no server at runtime.
