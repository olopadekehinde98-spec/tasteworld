import { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { promo } from '../data/content'
import { useMediaQuery } from '../hooks/useMediaQuery'
import { useParallax } from '../hooks/useParallax'
import { img, srcSet } from '../lib/image'
import { Reveal } from './Reveal'

export function ParallaxSection() {
  const ref = useRef<HTMLElement>(null)
  const bgY = useParallax(ref, { distance: 12 })

  // The plate drifts a touch faster than the page and slowly turns — foreground depth.
  const reduce = useReducedMotion()
  const desktop = useMediaQuery('(min-width: 480px)')
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const plateY = useTransform(scrollYProgress, [0, 1], [60, -60])
  const plateRotate = useTransform(scrollYProgress, [0, 1], [-10, 10])
  const animatePlate = desktop && !reduce

  return (
    <section ref={ref} aria-label="A taste for every occasion" className="relative isolate overflow-hidden bg-ink">
      {/* Oversized background layer so the parallax travel never exposes an edge. */}
      <motion.div className="absolute inset-x-0 -top-[16%] -bottom-[16%] -z-10 will-change-transform" style={{ y: bgY }}>
        <img
          src={img(promo.background, 1920)}
          srcSet={srcSet(promo.background, [768, 1280, 1920])}
          sizes="100vw"
          alt=""
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover opacity-45 blur-[2px]"
        />
      </motion.div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink via-ink/85 to-ink/40" />

      <div className="container-tw grid items-center gap-12 py-20 md:grid-cols-[1fr_1.1fr] md:py-24 lg:min-h-[560px]">
        <Reveal className="relative z-10 max-w-[440px]">
          <p className="eyebrow mb-5">Every occasion</p>
          <h2 className="font-serif text-[2.6rem] leading-[1.06] font-medium tracking-[-0.015em] text-white sm:text-[3.25rem] lg:text-[3.6rem]">
            A Taste for
            <br />
            Every Occasion
          </h2>
          <p className="mt-6 text-[16px] leading-relaxed text-white/75">
            Whether it's a romantic dinner, a family outing, or a business lunch, find the perfect spot.
          </p>
          <a
            href="#restaurants"
            className="group mt-9 inline-flex items-center gap-3 rounded-full bg-gold px-8 py-4 text-[14px] font-semibold text-ink transition-all duration-300 hover:bg-gold-light hover:shadow-[0_12px_30px_-10px_rgba(207,167,90,0.6)]"
          >
            Explore Now
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={2} />
          </a>
        </Reveal>

        <div className="relative mx-auto w-full max-w-[480px] md:mr-10 lg:mr-24">
          <motion.div
            style={animatePlate ? { y: plateY, rotate: plateRotate } : undefined}
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '0px 0px -10% 0px' }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="relative aspect-square will-change-transform"
          >
            <div className="absolute -inset-3 rounded-full border border-gold/25" aria-hidden />
            <img
              src={img(promo.plate, 900, 900)}
              srcSet={srcSet(promo.plate, [480, 720, 1000], 1)}
              sizes="(min-width: 768px) 520px, 90vw"
              alt={promo.plateAlt}
              loading="lazy"
              decoding="async"
              className="h-full w-full rounded-full object-cover shadow-[0_40px_80px_-30px_rgba(0,0,0,0.9)]"
            />
          </motion.div>

          <Reveal
            delay={0.4}
            y={12}
            aria-hidden
            className="pointer-events-none absolute -right-1 -bottom-6 font-script text-[1.8rem] leading-[1.05] text-gold-light/90 sm:text-[2.1rem] md:-right-10 lg:-right-32 lg:bottom-10"
          >
            <span className="block -rotate-[9deg]">
              Good Food
              <br />
              <span className="pl-5">Good Mood</span>
              <svg viewBox="0 0 120 12" className="mt-1 ml-4 h-3 w-24" fill="none">
                <path d="M2 9c30-6 70-8 116-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </span>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
