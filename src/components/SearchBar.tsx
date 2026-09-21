import { useState, type FormEvent } from 'react'
import { MapPin, Search } from 'lucide-react'

type Props = {
  onSearch?: (query: string) => void
}

export function SearchBar({ onSearch }: Props) {
  const [query, setQuery] = useState('')

  const submit = (e: FormEvent) => {
    e.preventDefault()
    onSearch?.(query.trim())
    document.getElementById('restaurants')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <form
      role="search"
      onSubmit={submit}
      className="group flex h-14 w-full max-w-[560px] items-center overflow-hidden rounded-[3px] bg-white shadow-[0_18px_50px_-20px_rgba(0,0,0,0.6)] ring-1 ring-transparent transition-shadow duration-300 focus-within:ring-gold sm:h-[60px]"
    >
      <label htmlFor="hero-search" className="flex flex-1 items-center gap-3 pl-5">
        <MapPin className="h-5 w-5 shrink-0 text-ink/70" strokeWidth={1.6} aria-hidden />
        <span className="sr-only">Search for restaurants, cuisine or location</span>
        <input
          id="hero-search"
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for restaurants, cuisine or location..."
          autoComplete="off"
          className="w-full min-w-0 bg-transparent py-3 text-[14px] text-ink placeholder:text-ink/45 focus:outline-none sm:text-[15px] [&::-webkit-search-cancel-button]:hidden"
        />
      </label>
      <button
        type="submit"
        aria-label="Search"
        className="grid h-full w-14 shrink-0 place-items-center bg-gold text-ink transition-colors duration-300 hover:bg-gold-light sm:w-[64px]"
      >
        <Search className="h-5 w-5" strokeWidth={1.9} />
      </button>
    </form>
  )
}
