import { useRef } from 'react'
import { useInView } from 'framer-motion'
import { ChefHat, MapPin, Users, UtensilsCrossed, type LucideIcon } from 'lucide-react'
import { stats } from '../data/content'
import { useCountUp } from '../hooks/useCountUp'

const icons: LucideIcon[] = [UtensilsCrossed, ChefHat, MapPin, Users]

function Stat({ value, suffix, label, icon: Icon, start }: { value: number; suffix: string; label: string; icon: LucideIcon; start: boolean }) {
  const n = useCountUp(value, start)
  return (
    <div className="flex items-center gap-4 py-8 sm:justify-center sm:gap-5 lg:py-2">
      <Icon className="h-10 w-10 shrink-0 text-cream/90 sm:h-11 sm:w-11" strokeWidth={1} aria-hidden />
      <div>
        <p className="font-serif text-[2rem] leading-none font-medium text-white tabular-nums sm:text-[2.2rem]">
          <span aria-hidden>
            {n}
            <span className="text-gold">{suffix}</span>
          </span>
          <span className="sr-only">
            {value}
            {suffix}
          </span>
        </p>
        <p className="mt-2 text-[13px] tracking-wide text-white/60">{label}</p>
      </div>
    </div>
  )
}

export function Stats() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '0px 0px -15% 0px' })

  return (
    <section aria-label="TasteWorld in numbers" className="border-t border-white/[0.06] bg-charcoal">
      <div
        ref={ref}
        className="container-tw grid grid-cols-2 divide-white/[0.08] py-6 max-lg:[&>*:nth-child(-n+2)]:border-b max-lg:[&>*]:border-white/[0.08] lg:grid-cols-4 lg:divide-x lg:py-14"
      >
        {stats.map((s, i) => (
          <Stat key={s.label} {...s} icon={icons[i]} start={inView} />
        ))}
      </div>
    </section>
  )
}
