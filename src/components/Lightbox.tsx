import { useCallback, useEffect, useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import type { GalleryImage } from '../data/content'
import { img } from '../lib/image'

type Props = {
  images: GalleryImage[]
  index: number | null
  onClose: () => void
  onChange: (index: number) => void
}

export function Lightbox({ images, index, onClose, onChange }: Props) {
  const open = index !== null
  const closeRef = useRef<HTMLButtonElement>(null)
  const touchX = useRef<number | null>(null)

  const step = useCallback(
    (dir: 1 | -1) => {
      if (index === null) return
      onChange((index + dir + images.length) % images.length)
    },
    [index, images.length, onChange],
  )

  // Scroll lock + focus handling while open.
  useEffect(() => {
    if (!open) return
    const prevFocus = document.activeElement as HTMLElement | null
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()
    return () => {
      document.body.style.overflow = prevOverflow
      prevFocus?.focus?.()
    }
  }, [open])

  // Keyboard navigation.
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') step(1)
      if (e.key === 'ArrowLeft') step(-1)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, onClose, step])

  const current = index !== null ? images[index] : null

  return (
    <AnimatePresence>
      {current && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label="Image viewer"
          className="fixed inset-0 z-[70] flex items-center justify-center bg-black/95 p-4 sm:p-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={onClose}
          onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
          onTouchEnd={(e) => {
            if (touchX.current === null) return
            const dx = e.changedTouches[0].clientX - touchX.current
            if (Math.abs(dx) > 50) step(dx < 0 ? 1 : -1)
            touchX.current = null
          }}
        >
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Close image viewer"
            className="absolute top-4 right-4 z-10 grid h-11 w-11 place-items-center rounded-full text-white/80 transition-colors hover:bg-white/10 hover:text-white sm:top-6 sm:right-6"
          >
            <X className="h-6 w-6" strokeWidth={1.5} />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              step(-1)
            }}
            aria-label="Previous image"
            className="absolute left-6 z-10 hidden h-12 w-12 place-items-center rounded-full border border-white/15 text-white/80 transition-colors hover:border-gold hover:text-gold md:grid"
          >
            <ChevronLeft className="h-6 w-6" strokeWidth={1.5} />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              step(1)
            }}
            aria-label="Next image"
            className="absolute right-6 z-10 hidden h-12 w-12 place-items-center rounded-full border border-white/15 text-white/80 transition-colors hover:border-gold hover:text-gold md:grid"
          >
            <ChevronRight className="h-6 w-6" strokeWidth={1.5} />
          </button>

          <figure className="flex max-h-full w-full max-w-5xl flex-col items-center md:px-16" onClick={(e) => e.stopPropagation()}>
            <AnimatePresence mode="wait" initial={false}>
              <motion.img
                key={current.image}
                src={img(current.image, 1600)}
                alt={current.alt}
                className="max-h-[76vh] w-auto max-w-full rounded-[2px] object-contain"
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              />
            </AnimatePresence>
            <figcaption className="mt-5 flex w-full items-center justify-between gap-4 text-sm">
              <span className="font-serif text-lg text-white">{current.caption}</span>
              <span className="flex items-center gap-4">
                <span className="flex gap-1 md:hidden">
                  <button type="button" onClick={() => step(-1)} aria-label="Previous image" className="grid h-10 w-10 place-items-center text-white/80">
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button type="button" onClick={() => step(1)} aria-label="Next image" className="grid h-10 w-10 place-items-center text-white/80">
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </span>
                <span className="tracking-widest text-white/45 tabular-nums">
                  {String((index ?? 0) + 1).padStart(2, '0')} / {String(images.length).padStart(2, '0')}
                </span>
              </span>
            </figcaption>
          </figure>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
