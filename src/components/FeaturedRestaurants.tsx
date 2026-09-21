import { restaurants } from '../data/content'
import { RestaurantCard } from './RestaurantCard'
import { SectionHeader } from './SectionHeader'

export function FeaturedRestaurants() {
  return (
    <section id="restaurants" className="bg-cream py-20 text-ink md:py-24">
      <div className="container-tw">
        <SectionHeader
          eyebrow="Featured"
          title="Popular Restaurants"
          linkLabel="View All Restaurants"
          href="#restaurants"
          tone="light"
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {restaurants.map((r, i) => (
            <RestaurantCard key={r.name} restaurant={r} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
