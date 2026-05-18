import { Reveal } from './reveal'

type Props = {
  title: string
  accent?: string
  description?: string
}

export function SectionHeading({ title, accent, description }: Props) {
  return (
    <Reveal as="header" className="mb-6 flex items-baseline gap-3">
      <span
        aria-hidden
        className="h-1 w-1 shrink-0 translate-y-[-3px] rounded-full bg-accent shadow-[0_0_10px_rgba(145,94,255,0.7)]"
      />
      <h2 className="text-lg font-semibold tracking-tight text-ink">
        {title}
        {accent && (
          <span className="serif-italic ml-2 text-accent-soft">{accent}</span>
        )}
      </h2>
      {description && (
        <p className="mt-2 text-sm leading-relaxed text-ink-muted">
          {description}
        </p>
      )}
    </Reveal>
  )
}
