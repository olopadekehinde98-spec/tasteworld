import { ArrowUp, Mail, MapPin, Phone } from 'lucide-react'
import { FacebookIcon, InstagramIcon, TikTokIcon, XIcon, YouTubeIcon } from './Icons'
import { Logo } from './Logo'
import { Reveal } from './Reveal'

const columns = [
  { title: 'Explore', links: [['Restaurants', '#restaurants'], ['Cuisines', '#cuisines'], ['Locations', '#restaurants'], ['Gallery', '#gallery']] },
  { title: 'Company', links: [['About', '#about'], ['Contact', '#contact'], ['Careers', '#contact']] },
  { title: 'Support', links: [['Help Center', '#contact'], ['FAQs', '#contact'], ['Terms', '#contact'], ['Privacy', '#contact']] },
] as const

const socials = [
  { label: 'Instagram', Icon: InstagramIcon },
  { label: 'Facebook', Icon: FacebookIcon },
  { label: 'X (Twitter)', Icon: XIcon },
  { label: 'TikTok', Icon: TikTokIcon },
  { label: 'YouTube', Icon: YouTubeIcon },
]

export function Footer() {
  return (
    <footer id="contact" className="border-t border-white/[0.06] bg-ink pt-20 pb-10 text-white/70">
      <div className="container-tw">
        <Reveal className="grid gap-12 md:grid-cols-[1.4fr_2fr] lg:gap-20">
          <div className="max-w-sm">
            <Logo />
            <p className="mt-6 font-serif text-[1.35rem] leading-snug text-cream italic">
              Discover great food. <br />
              Discover great moments.
            </p>
            <ul className="mt-8 space-y-3 text-[13.5px]">
              <li className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-gold" strokeWidth={1.6} aria-hidden />
                245 Park Avenue, New York, NY 10167
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-gold" strokeWidth={1.6} aria-hidden />
                <a href="mailto:hello@tasteworld.com" className="transition-colors hover:text-gold">hello@tasteworld.com</a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-gold" strokeWidth={1.6} aria-hidden />
                <a href="tel:+12125550147" className="transition-colors hover:text-gold">+1 (212) 555-0147</a>
              </li>
            </ul>
          </div>

          <nav aria-label="Footer" className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            {columns.map((col) => (
              <div key={col.title}>
                <h3 className="eyebrow mb-6 tracking-[0.3em]">{col.title}</h3>
                <ul className="space-y-3.5 text-[14px]">
                  {col.links.map(([label, href]) => (
                    <li key={label}>
                      <a href={href} className="inline-block transition-all duration-300 hover:translate-x-1 hover:text-white">
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </Reveal>

        <div className="mt-16 flex flex-col-reverse items-start gap-8 border-t border-white/[0.08] pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[12.5px] text-white/45">© {new Date().getFullYear()} TasteWorld. All rights reserved.</p>

          <div className="flex items-center gap-2">
            {socials.map(({ label, Icon }) => (
              <a
                key={label}
                href="#contact"
                aria-label={label}
                className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-white/70 transition-all duration-300 hover:-translate-y-0.5 hover:border-gold hover:text-gold"
              >
                <Icon size={17} />
              </a>
            ))}
            <a
              href="#home"
              aria-label="Back to top"
              className="ml-3 grid h-10 w-10 place-items-center rounded-full bg-gold text-ink transition-colors duration-300 hover:bg-gold-light"
            >
              <ArrowUp className="h-4 w-4" strokeWidth={2} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
