import { ArrowRight } from 'lucide-react'
import { Reveal } from './Reveal'

type Props = {
  eyebrow: string
  title: string
  linkLabel: string
  href: string
  tone?: 'dark' | 'light'
}

export function SectionHeader({ eyebrow, title, linkLabel, href, tone = 'dark' }: Props) {
  const linkColor = tone === 'dark' ? 'text-white/85 hover:text-gold' : 'text-ink/80 hover:text-gold-dark'
  return (
    <Reveal className="mb-10 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between md:mb-12">
      <div>
        <p className="eyebrow mb-3">{eyebrow}</p>
        <h2 className="section-title">{title}</h2>
      </div>
      <a href={href} className={`link-arrow ${linkColor}`}>
        {linkLabel}
        <ArrowRight className="h-4 w-4" strokeWidth={1.8} />
      </a>
    </Reveal>
  )
}
