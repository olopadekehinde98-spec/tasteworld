import { motion, type HTMLMotionProps } from 'framer-motion'

type Props = HTMLMotionProps<'div'> & {
  delay?: number
  /** Vertical offset to slide up from, in px. */
  y?: number
}

/** Fade + slide-up when the element scrolls into view (IntersectionObserver-backed). */
export function Reveal({ delay = 0, y = 28, children, ...rest }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -12% 0px' }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      {...rest}
    >
      {children}
    </motion.div>
  )
}
