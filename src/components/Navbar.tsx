import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion'
import { Menu, Search, X } from 'lucide-react'
import { navLinks } from '../data/content'
import { Logo } from './Logo'

function focusSearch() {
  document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })
  window.setTimeout(() => document.getElementById('hero-search')?.focus({ preventScroll: true }), 450)
}

export function Navbar() {
  const { scrollY } = useScroll()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('#home')

  // One scroll source drives both the bar style and the active-section highlight.
  useMotionValueEvent(scrollY, 'change', (y) => {
    setScrolled(y > 40)
    const atBottom = y + window.innerHeight >= document.documentElement.scrollHeight - 4
    const probe = atBottom ? Infinity : y + window.innerHeight * 0.4
    let current = navLinks[0].href
    let best = -1
    for (const link of navLinks) {
      const el = document.querySelector<HTMLElement>(link.href)
      if (el && el.offsetTop <= probe && el.offsetTop > best) {
        best = el.offsetTop
        current = link.href
      }
    }
    setActive((prev) => (prev === current ? prev : current))
  })

  // Lock page scroll + close on Escape while the mobile menu is open.
  useEffect(() => {
    if (!open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prev
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,backdrop-filter,border-color,padding] duration-500 ease-out-soft ${
          scrolled
            ? 'border-b border-white/[0.06] bg-ink/95 py-3 backdrop-blur-md'
            : 'border-b border-transparent bg-gradient-to-b from-black/50 to-transparent py-5'
        }`}
      >
        <nav className="container-tw flex items-center justify-between" aria-label="Main">
          <Logo />

          <ul className="hidden items-center gap-9 lg:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`relative py-2 text-[13.5px] font-medium tracking-wide transition-colors duration-300 after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:bg-gold after:transition-transform after:duration-500 after:ease-out-soft hover:text-white ${
                    active === link.href
                      ? 'text-white after:scale-x-100'
                      : 'text-white/75 after:scale-x-0 hover:after:scale-x-100'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2 sm:gap-4">
            <button
              type="button"
              onClick={focusSearch}
              className="grid h-10 w-10 place-items-center rounded-full text-white/85 transition-colors hover:bg-white/10 hover:text-white"
              aria-label="Search restaurants"
            >
              <Search className="h-[19px] w-[19px]" strokeWidth={1.7} />
            </button>
            <a
              href="#contact"
              className="hidden rounded-full border border-gold/80 px-6 py-2.5 text-[13px] font-medium text-white transition-all duration-300 hover:bg-gold hover:text-ink sm:inline-block"
            >
              Sign In
            </a>
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="grid h-10 w-10 place-items-center rounded-full text-white transition-colors hover:bg-white/10 lg:hidden"
              aria-label="Open menu"
              aria-expanded={open}
              aria-controls="mobile-menu"
            >
              <Menu className="h-6 w-6" strokeWidth={1.6} />
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
            className="fixed inset-0 z-[60] flex flex-col bg-ink lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
          >
            <div className="container-tw flex items-center justify-between py-5">
              <Logo />
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="grid h-10 w-10 place-items-center rounded-full text-white hover:bg-white/10"
                aria-label="Close menu"
                autoFocus
              >
                <X className="h-6 w-6" strokeWidth={1.6} />
              </button>
            </div>

            <ul className="container-tw mt-8 flex flex-1 flex-col">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 + i * 0.05, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="border-b border-white/[0.07]"
                >
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="flex items-baseline justify-between py-4 font-serif text-[2rem] text-cream transition-colors hover:text-gold"
                  >
                    {link.label}
                    <span className="font-sans text-xs tracking-[0.3em] text-white/30">0{i + 1}</span>
                  </a>
                </motion.li>
              ))}
            </ul>

            <div className="container-tw pb-10">
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="block rounded-full bg-gold py-4 text-center text-sm font-semibold text-ink"
              >
                Sign In
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
