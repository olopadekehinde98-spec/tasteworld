import { useRef, useState } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { Expand } from 'lucide-react'
import { gallery, type GalleryImage } from '../data/content'
import { useMediaQuery } from '../hooks/useMediaQuery'
import { img, srcSet } from '../lib/image'
import { Lightbox } from './Lightbox'
import { SectionHeader } from './SectionHeader'

const span: Record<GalleryImage['size'], string> = {
  large: 'col-span-2 row-span-2',
  tall: 'row-span-2',
  wide: 'col-span-2',
  regular: '',
}

const widths: Record<GalleryImage['size'], number[]> = {
  large: [640, 960, 1280],
  wide: [640, 960, 1280],
  tall: [400, 640, 800],
  regular: [400, 640],
}

const sizes: Record<GalleryImage['size'], string> = {
  large: '(min-width: 768px) 50vw, 100vw',
  wide: '(min-width: 768px) 50vw, 100vw',
  tall: '(min-width: 768px) 25vw, 50vw',
  regular: '(min-width: 768px) 25vw, 50vw',
}

type ItemProps = { item: GalleryImage; index: number; onOpen: () => void }

function GalleryItem({ item, index, onOpen }: ItemProps) {
  const ref = useRef<HTMLButtonElement>(null)
  const reduce = useReducedMotion()
  const desktop = useMediaQuery('(min-width: 480px)')
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['-7%', '7%'])
  const parallax = item.parallax && desktop && !reduce

  return (
    <motion.button
      ref={ref}
      type="button"
      onClick={onOpen}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -6% 0px' }}
      transition={{ duration: 0.8, delay: (index % 4) * 0.06, ease: [0.22, 1, 0.36, 1] }}
      className={`group relative block cursor-zoom-in overflow-hidden rounded-[3px] bg-smoke text-left ${span[item.size]}`}
      aria-label={`View image: ${item.caption}`}
    >
      {/* Selected tiles get a gentle inner parallax (image drifts inside its frame). */}
      <motion.div className="absolute inset-0" style={parallax ? { y, scale: 1.16 } : undefined}>
        <img
          src={img(item.image, widths[item.size][1])}
          srcSet={srcSet(item.image, widths[item.size])}
          sizes={sizes[item.size]}
          alt={item.alt}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out-soft group-hover:scale-[1.06]"
        />
      </motion.div>
      <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/50" />
      <div className="absolute inset-0 hidden flex-col items-center justify-center gap-3 opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-focus-visible:opacity-100 [@media(hover:hover)]:flex">
        <span className="grid h-12 w-12 translate-y-2 place-items-center rounded-full border border-white/60 text-white transition-transform duration-500 ease-out-soft group-hover:translate-y-0">
          <Expand className="h-5 w-5" strokeWidth={1.5} aria-hidden />
        </span>
        <span className="translate-y-2 px-3 text-center font-serif text-[1.05rem] text-white transition-transform delay-75 duration-500 ease-out-soft group-hover:translate-y-0">
          {item.caption}
        </span>
      </div>

      {/* Touch devices: the caption and the tap affordance are always visible. */}
      <div className="absolute inset-x-0 bottom-0 flex items-end gap-2 bg-gradient-to-t from-black/80 to-transparent p-3 [@media(hover:hover)]:hidden">
        <Expand className="h-4 w-4 shrink-0 text-white/90" strokeWidth={1.5} aria-hidden />
        <span className="font-serif text-[0.95rem] leading-tight text-white">{item.caption}</span>
      </div>
    </motion.button>
  )
}

export function Gallery() {
  const [active, setActive] = useState<number | null>(null)

  return (
    <section id="gallery" className="bg-ink py-20 md:py-28">
      <div className="container-tw">
        <SectionHeader eyebrow="Gallery" title="Moments at the Table" linkLabel="Follow @tasteworld" href="#contact" />
        <div className="grid auto-rows-[150px] grid-flow-dense grid-cols-2 gap-2.5 sm:auto-rows-[200px] sm:gap-3 md:grid-cols-4 lg:auto-rows-[230px]">
          {gallery.map((item, i) => (
            <GalleryItem key={item.image} item={item} index={i} onOpen={() => setActive(i)} />
          ))}
        </div>
      </div>
      <Lightbox images={gallery} index={active} onClose={() => setActive(null)} onChange={setActive} />
    </section>
  )
}
