import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { categories, type Category } from '../data/content'
import { img, srcSet } from '../lib/image'
import { SectionHeader } from './SectionHeader'

function CategoryCard({ category, index }: { category: Category; index: number }) {
  return (
    <motion.a
      href="#restaurants"
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -8% 0px' }}
      transition={{ duration: 0.8, delay: (index % 4) * 0.07, ease: [0.22, 1, 0.36, 1] }}
      className="group relative block aspect-[3/4] md:aspect-[4/5] cursor-pointer overflow-hidden rounded-[4px] border border-white/10 bg-smoke transition-colors duration-500 hover:border-gold/60"
      aria-label={`${category.name} — ${category.description}`}
    >
      {/* Image reveal: a curtain lifts as the card enters view. */}
      <motion.div
        className="absolute inset-0 z-[2] origin-top bg-smoke"
        initial={{ scaleY: 1 }}
        whileInView={{ scaleY: 0 }}
        viewport={{ once: true, margin: '0px 0px -8% 0px' }}
        transition={{ duration: 0.9, delay: 0.1 + (index % 4) * 0.07, ease: [0.76, 0, 0.24, 1] }}
        aria-hidden
      />
      <img
        src={img(category.image, 600, 800)}
        srcSet={srcSet(category.image, [360, 600, 800], 4 / 3)}
        sizes="(min-width: 1280px) 300px, (min-width: 768px) 25vw, 48vw"
        alt={category.alt}
        loading="lazy"
        decoding="async"
        className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out-soft group-hover:scale-[1.08]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/55 to-black/10 transition-opacity duration-500" />
      <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/25" />

      <span className="absolute top-3 right-3 grid h-8 w-8 translate-y-1 place-items-center rounded-full bg-gold text-ink opacity-0 transition-all duration-500 ease-out-soft group-hover:translate-y-0 group-hover:opacity-100">
        <ArrowUpRight className="h-4 w-4" strokeWidth={2} aria-hidden />
      </span>

      <div className="absolute inset-x-0 bottom-0 px-3 pt-4 pb-5 text-center transition-transform duration-500 ease-out-soft group-hover:-translate-y-2 sm:px-4">
        <h3 className="font-serif text-[1.1rem] leading-tight font-medium text-white sm:text-[1.3rem] xl:text-[1.15rem]">
          {category.name}
        </h3>
        <span className="mx-auto mt-2 block h-px w-6 bg-gold transition-all duration-500 ease-out-soft group-hover:w-12" aria-hidden />
        <p className="mt-2 text-[11.5px] leading-snug text-white/70 sm:text-[12.5px] lg:text-[13px]">{category.description}</p>
      </div>
    </motion.a>
  )
}

export function FoodCategories() {
  return (
    <section id="cuisines" className="bg-ink py-20 md:py-24">
      <div className="container-tw">
        <SectionHeader eyebrow="Explore" title="Our Food Categories" linkLabel="View All Categories" href="#cuisines" />
        <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4 lg:gap-5">
          {categories.map((c, i) => (
            <CategoryCard key={c.name} category={c} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
