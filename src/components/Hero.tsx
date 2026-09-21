import { useRef } from 'react'
import { motion, type Variants } from 'framer-motion'
import { heroImage, popularTags } from '../data/content'
import { useParallax } from '../hooks/useParallax'
import { img, srcSet } from '../lib/image'
import { SearchBar } from './SearchBar'

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.25 } },
}

const item: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
}

export function Hero() {
  const ref = useRef<HTMLElement>(null)
  const y = useParallax(ref, { distance: 35, mode: 'exit' })

  return (
    <section
      id="home"
      ref={ref}
      className="relative isolate flex min-h-[600px] max-sm:landscape:min-h-[520px] items-center overflow-hidden bg-ink h-[92svh] md:h-[88vh] md:max-h-[980px]"
    >
      {/* Background layer — moves slower than the page. */}
      <motion.div className="absolute inset-0 -z-10 will-change-transform" style={{ y }}>
        <motion.img
          src={img(heroImage.id, 1920)}
          srcSet={srcSet(heroImage.id, [640, 1024, 1440, 1920, 2400])}
          sizes="100vw"
          alt={heroImage.alt}
          fetchPriority="high"
          decoding="async"
          className="h-full w-full object-cover object-[65%_50%]"
          initial={{ scale: 1.12, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
        />
      </motion.div>

      {/* Readability overlays: directional on desktop, fuller on mobile. */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/90 via-black/60 to-black/10 max-md:from-black/80 max-md:via-black/65 max-md:to-black/45" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-black/60 to-transparent" />

      <div className="container-tw relative pt-24 md:pt-16">
        <motion.div variants={container} initial="hidden" animate="show" className="max-w-[600px]">
          <motion.p variants={item} className="eyebrow mb-6 flex items-center gap-4">
            <span className="h-px w-10 bg-gold" aria-hidden />
            Restaurant discovery
          </motion.p>

          <motion.h1
            variants={item}
            className="font-serif text-[3.1rem] leading-[1.02] font-medium tracking-[-0.02em] text-white sm:text-[4.25rem] lg:text-[5.25rem]"
          >
            Good Food
            <span className="block font-semibold text-gold italic">Great Moments</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-[440px] text-[16px] leading-relaxed text-white/80 sm:text-[17px]"
          >
            Discover amazing restaurants, delicious cuisine and unforgettable dining experiences.
          </motion.p>

          <motion.div variants={item} className="mt-9">
            <SearchBar />
          </motion.div>

          <motion.div variants={item} className="mt-6 flex flex-wrap items-center gap-x-1 gap-y-2 text-[13px]">
            <span className="mr-2 font-semibold text-white">Popular:</span>
            {popularTags.map((tag, i) => (
              <span key={tag} className="flex items-center">
                <a
                  href="#cuisines"
                  className="rounded-full px-2.5 py-1 text-white/75 transition-colors duration-300 hover:bg-white/10 hover:text-gold"
                >
                  {tag}
                </a>
                {i < popularTags.length - 1 && <span className="text-white/25" aria-hidden>|</span>}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Hand-written accent — desktop only, kept deliberately quiet. */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0, rotate: -14, y: 10 }}
        animate={{ opacity: 1, rotate: -10, y: 0 }}
        transition={{ delay: 1.1, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="pointer-events-none absolute top-[24%] left-[54%] hidden font-script text-[2rem] leading-[1.05] text-white/90 xl:block"
      >
        Food
        <br />
        Brings People
        <br />
        Together
        <svg viewBox="0 0 120 12" className="mt-1 h-3 w-28 text-gold" fill="none">
          <path d="M2 9c30-6 70-8 116-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </motion.div>

      {/* Scroll cue */}
      <motion.a
        href="#about"
        aria-label="Scroll to content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 text-[10px] tracking-[0.35em] text-white/50 uppercase md:flex"
      >
        Scroll
        <span className="relative h-10 w-px overflow-hidden bg-white/20">
          <span className="absolute inset-x-0 top-0 h-1/2 animate-[scrollcue_2.2s_ease-in-out_infinite] bg-gold" />
        </span>
      </motion.a>
    </section>
  )
}
