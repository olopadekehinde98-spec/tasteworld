import { MotionConfig, motion } from 'framer-motion'
import { Benefits } from './components/Benefits'
import { FeaturedRestaurants } from './components/FeaturedRestaurants'
import { FoodCategories } from './components/FoodCategories'
import { Footer } from './components/Footer'
import { Gallery } from './components/Gallery'
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'
import { ParallaxSection } from './components/ParallaxSection'
import { PortfolioBadge } from './components/PortfolioBadge'
import { Stats } from './components/Stats'

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:rounded focus:bg-gold focus:px-4 focus:py-2 focus:text-ink"
      >
        Skip to content
      </a>
      <Navbar />
      <motion.main
        id="main"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <Hero />
        <Benefits />
        <FoodCategories />
        <FeaturedRestaurants />
        <ParallaxSection />
        <Stats />
        <Gallery />
      </motion.main>
      <Footer />
      <PortfolioBadge />
    </MotionConfig>
  )
}
