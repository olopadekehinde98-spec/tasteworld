# TasteWorld

Premium restaurant-discovery landing page — React 19 + TypeScript + Vite, Tailwind CSS v4, Framer Motion, Lucide icons.

**Live:** https://tasteworld.vercel.app

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in dist/
```

## Structure

- `src/components/` — one component per section: `Navbar`, `Hero`, `SearchBar`, `Benefits`, `FoodCategories`, `RestaurantCard`, `FeaturedRestaurants`, `ParallaxSection`, `Stats`, `Gallery` (+ `Lightbox`), `Footer`, plus small shared pieces (`Reveal`, `SectionHeader`, `Logo`, `Icons`).
- `src/data/content.ts` — all copy, restaurants, categories and gallery entries (edit content here, not in components).
- `src/hooks/` — `useParallax` (scroll-linked translate, auto-disabled on touch/small screens and for reduced-motion users), `useCountUp`, `useMediaQuery`.
- `src/lib/image.ts` — Unsplash CDN URL + `srcset` helpers.
- Design tokens (colors, fonts) live in the `@theme` block of `src/index.css`.

Images are served from the Unsplash CDN; swap the photo ids in `content.ts` for the client's own photography before launch.
