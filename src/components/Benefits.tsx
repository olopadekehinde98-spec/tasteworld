import { ChefHat, MapPin, Star, UtensilsCrossed, type LucideIcon } from 'lucide-react'
import { Reveal } from './Reveal'

const benefits: { icon: LucideIcon; title: string; text: string }[] = [
  { icon: UtensilsCrossed, title: 'Curated Restaurants', text: 'Only the best dining spots' },
  { icon: ChefHat, title: 'Diverse Cuisines', text: 'Local & international' },
  { icon: MapPin, title: 'Verified Locations', text: 'Trusted and reviewed' },
  { icon: Star, title: 'Amazing Experience', text: 'More than just a meal' },
]

export function Benefits() {
  return (
    <section id="about" aria-label="Why TasteWorld" className="relative z-10 bg-cream text-ink">
      <div className="container-tw grid grid-cols-2 gap-x-6 gap-y-9 py-11 md:py-12 lg:grid-cols-4 lg:gap-0">
        {benefits.map(({ icon: Icon, title, text }, i) => (
          <Reveal
            key={title}
            delay={i * 0.08}
            y={16}
            className="group flex flex-col items-start gap-4 sm:flex-row sm:items-center lg:justify-center lg:border-l lg:border-ink/10 lg:first:border-l-0"
          >
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-ink/10 text-ink transition-colors duration-500 group-hover:border-gold group-hover:text-gold-dark">
              <Icon className="h-[22px] w-[22px]" strokeWidth={1.4} aria-hidden />
            </span>
            <div>
              <h3 className="text-[14.5px] font-semibold tracking-tight">{title}</h3>
              <p className="mt-1 text-[13.5px] text-ink/55">{text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
