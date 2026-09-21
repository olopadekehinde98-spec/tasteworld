import { UtensilsCrossed } from 'lucide-react'

type Props = { className?: string }

export function Logo({ className = '' }: Props) {
  return (
    <a href="#home" className={`group inline-flex items-center gap-2.5 ${className}`} aria-label="TasteWorld home">
      <UtensilsCrossed className="h-6 w-6 text-gold transition-transform duration-500 group-hover:-rotate-12" strokeWidth={1.6} />
      <span className="font-serif text-[1.6rem] leading-none font-semibold tracking-[-0.01em]">
        Taste<span className="text-gold">World</span>
      </span>
    </a>
  )
}
