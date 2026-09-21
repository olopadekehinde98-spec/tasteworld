import { useState } from 'react'
import { motion } from 'framer-motion'
import { Heart, MapPin, Star, StarHalf } from 'lucide-react'
import type { Restaurant } from '../data/content'
import { img, srcSet } from '../lib/image'

function Stars({ rating }: { rating: number }) {
  const full = Math.floor(rating)
  const half = rating - full >= 0.5
  return (
    <span className="flex items-center gap-0.5 text-gold" aria-hidden>
      {Array.from({ length: 5 }, (_, i) => {
        if (i < full) return <Star key={i} className="h-3.5 w-3.5 fill-current" strokeWidth={1.2} />
        if (i === full && half)
          return (
            <span key={i} className="relative h-3.5 w-3.5">
              <Star className="absolute inset-0 h-3.5 w-3.5" strokeWidth={1.2} />
              <StarHalf className="absolute inset-0 h-3.5 w-3.5 fill-current" strokeWidth={1.2} />
            </span>
          )
        return <Star key={i} className="h-3.5 w-3.5" strokeWidth={1.2} />
      })}
    </span>
  )
}

type Props = { restaurant: Restaurant; index?: number }

export function RestaurantCard({ restaurant, index = 0 }: Props) {
  const [saved, setSaved] = useState(false)
  const { name, tagline, rating, reviews, location, tags, image, alt } = restaurant

  return (
    <motion.article
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -8% 0px' }}
      transition={{ duration: 0.8, delay: (index % 4) * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="group relative flex flex-col overflow-hidden rounded-[4px] border border-ink/10 bg-white transition-[transform,box-shadow,border-color] duration-500 ease-out-soft hover:-translate-y-1.5 hover:border-ink/5 hover:shadow-[0_24px_48px_-24px_rgba(20,16,10,0.35)]"
    >
      <div className="relative aspect-[16/11] overflow-hidden bg-sand">
        <img
          src={img(image, 640, 440)}
          srcSet={srcSet(image, [400, 640, 900], 11 / 16)}
          sizes="(min-width: 1024px) 290px, (min-width: 640px) 45vw, 92vw"
          alt={alt}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out-soft group-hover:scale-[1.07]"
        />
        <button
          type="button"
          onClick={() => setSaved((s) => !s)}
          aria-pressed={saved}
          aria-label={saved ? `Remove ${name} from favourites` : `Save ${name} to favourites`}
          className="absolute top-3 right-3 z-10 grid h-9 w-9 place-items-center rounded-full bg-black/35 text-white backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-black/55"
        >
          <motion.span
            key={String(saved)}
            initial={{ scale: 0.6 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 500, damping: 15 }}
            className="grid place-items-center"
          >
            <Heart className={`h-[18px] w-[18px] ${saved ? 'fill-gold text-gold' : ''}`} strokeWidth={1.8} />
          </motion.span>
        </button>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-serif text-[1.2rem] leading-snug font-semibold text-ink">
          <a href="#restaurants" className="after:absolute after:inset-0 after:content-[''] focus:outline-none">
            {name}
          </a>
        </h3>
        <p className="mt-1 text-[13px] text-ink/55 italic">{tagline}</p>

        <div className="mt-3 flex items-center gap-2 text-[12px] text-ink/55">
          <Stars rating={rating} />
          <span>
            <span className="sr-only">Rated </span>
            {rating.toFixed(1)} <span className="text-ink/40">({reviews} reviews)</span>
          </span>
        </div>

        <p className="mt-2.5 flex items-center gap-2 text-[13px] text-ink/70">
          <MapPin className="h-4 w-4 shrink-0 text-ink/60" strokeWidth={1.6} aria-hidden />
          {location}
        </p>

        <ul className="mt-4 flex flex-wrap gap-2 border-t border-ink/[0.07] pt-4">
          {tags.map((tag) => (
            <li key={tag} className="rounded-[3px] border border-ink/12 px-2.5 py-1 text-[11.5px] text-ink/65">
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </motion.article>
  )
}
