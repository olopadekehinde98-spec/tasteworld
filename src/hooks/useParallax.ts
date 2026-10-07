import { useScroll, useTransform, useReducedMotion, type MotionValue } from 'framer-motion'
import type { RefObject } from 'react'

type Options = {
  /** Total travel of the layer, as a percentage of its own height (e.g. 14 → -14%…14%). */
  distance?: number
  /** 'through' tracks the element across the whole viewport; 'exit' starts at page top (for heroes). */
  mode?: 'through' | 'exit'
}

/**
 * Returns a translateY motion value for a background layer so it scrolls slower
 * than the page. Disabled on touch/small screens and for reduced-motion users.
 */
export function useParallax(
  target: RefObject<HTMLElement | null>,
  { distance = 14, mode = 'through' }: Options = {},
): MotionValue<string> | string {
  const reduce = useReducedMotion()
  // Parallax is scroll-driven, so it runs on touch too — only reduced-motion turns it off.
  const enabled = !reduce

  const { scrollYProgress } = useScroll({
    target,
    offset: mode === 'exit' ? ['start start', 'end start'] : ['start end', 'end start'],
  })

  const range = mode === 'exit' ? ['0%', `${distance}%`] : [`-${distance}%`, `${distance}%`]
  const y = useTransform(scrollYProgress, [0, 1], range)

  return enabled ? y : '0%'
}
