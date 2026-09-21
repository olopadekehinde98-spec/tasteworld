export type Category = {
  name: string
  description: string
  image: string
  alt: string
}

export type Restaurant = {
  name: string
  tagline: string
  rating: number
  reviews: number
  location: string
  tags: string[]
  image: string
  alt: string
}

export type GalleryImage = {
  image: string
  alt: string
  caption: string
  /** Grid footprint in the masonry layout. */
  size: 'tall' | 'wide' | 'large' | 'regular'
  parallax?: boolean
}

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Restaurants', href: '#restaurants' },
  { label: 'Cuisines', href: '#cuisines' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export const popularTags = ['American', 'Steakhouse', 'Italian', 'Asian', 'Mexican']

export const heroImage = {
  id: '1558030006-450675393462',
  alt: 'Sliced medium-rare steak glistening on a dark wooden board',
}

export const categories: Category[] = [
  {
    name: 'American',
    description: 'Smokehouse classics, done right',
    image: '1544025162-d76694265947',
    alt: 'Glazed barbecue ribs on a board with sliced tomatoes and fries',
  },
  {
    name: 'South African',
    description: 'Braai fire & Cape spice',
    image: '1555939594-58d7cb561ad1',
    alt: 'Flame-grilled braai skewers with peppers and dipping sauces',
  },
  {
    name: 'Italian',
    description: 'Wood-fired & handmade',
    image: '1513104890138-7c749659a591',
    alt: 'Wood-fired pizza with tomatoes and rosemary on a dark board',
  },
  {
    name: 'Asian',
    description: 'Bold tastes, fresh ingredients',
    image: '1569718212165-3a8278d5f624',
    alt: 'Bowl of ramen with prawns, soft-boiled eggs and chopsticks',
  },
  {
    name: 'Mexican',
    description: 'Street-style & vibrant',
    image: '1599974579688-8dbdd335c77f',
    alt: 'Row of beef tacos topped with fresh cilantro',
  },
  {
    name: 'Desserts',
    description: 'Sweet moments',
    image: '1578985545062-69928b1d9587',
    alt: 'Layered chocolate cake topped with piped ganache',
  },
  {
    name: 'Drinks',
    description: 'Refreshing & crafted',
    image: '1536935338788-846bb9981813',
    alt: 'Crafted cocktail garnished with dried citrus and blackberries',
  },
  {
    name: 'Fast Food',
    description: 'Quick, bold & satisfying',
    image: '1561758033-d89a9ad46330',
    alt: 'Double cheeseburger with golden fries on a wooden board',
  },
]

export const restaurants: Restaurant[] = [
  {
    name: 'American Grill',
    tagline: 'Classic flavors, premium dining',
    rating: 4.9,
    reviews: 412,
    location: 'Manhattan, New York',
    tags: ['Steakhouse', 'American'],
    image: '1517248135467-4c7edcad34c4',
    alt: 'Dark, modern dining room with low lighting and leather chairs',
  },
  {
    name: 'Cape Kitchen',
    tagline: 'South African-inspired cuisine',
    rating: 4.7,
    reviews: 186,
    location: 'Georgetown, Washington DC',
    tags: ['South African', 'Grill'],
    image: '1590846406792-0adc7f938f1d',
    alt: 'Warmly lit restaurant interior with pendant lights and a bar',
  },
  {
    name: 'Urban Italian',
    tagline: 'Authentic Italian favorites',
    rating: 4.8,
    reviews: 298,
    location: 'West Loop, Chicago',
    tags: ['Italian', 'Wine Bar'],
    image: '1552566626-52f8b828add9',
    alt: 'Spacious trattoria with warm red tones and wooden tables',
  },
  {
    name: 'Tokyo Table',
    tagline: 'Modern Asian cuisine',
    rating: 4.7,
    reviews: 243,
    location: 'SoMa, San Francisco',
    tags: ['Asian', 'Sushi'],
    image: '1555396273-367ea4eb4db5',
    alt: 'Airy industrial-style dining hall with wooden tables',
  },
  {
    name: 'Casa Mexicana',
    tagline: 'Bold Mexican flavors',
    rating: 4.6,
    reviews: 205,
    location: 'South Congress, Austin',
    tags: ['Mexican', 'Cantina'],
    image: '1560624052-449f5ddf0c31',
    alt: 'Bright restaurant with arched wooden ceiling and hanging plants',
  },
  {
    name: 'Harbor & Pine',
    tagline: 'Coastal seafood, New England style',
    rating: 4.8,
    reviews: 174,
    location: 'Seaport, Boston',
    tags: ['Seafood', 'American'],
    image: '1559339352-11d035aa65de',
    alt: 'Waterfront terrace restaurant overlooking the sea at dusk',
  },
  {
    name: 'The Grand Table',
    tagline: 'Seasonal tasting menus',
    rating: 4.8,
    reviews: 320,
    location: 'Beverly Hills, Los Angeles',
    tags: ['Fine Dining', 'Continental'],
    image: '1550966871-3ed3cdb5ed0c',
    alt: 'Elegant dining room with white tablecloths and tall windows',
  },
  {
    name: 'Liberty Burger Co.',
    tagline: 'Smash burgers & shakes',
    rating: 4.5,
    reviews: 389,
    location: 'The Gulch, Nashville',
    tags: ['Burgers', 'Casual Dining'],
    image: '1544148103-0773bf10d330',
    alt: 'Casual diner-style restaurant with bar seating and tables',
  },
]

export const promo = {
  background: '1514933651103-005eec06c04b',
  backgroundAlt: 'Moody restaurant bar with shelves of bottles and warm lights',
  plate: '1519708227418-c8fd9a32b7a2',
  plateAlt: 'Seared salmon fillet over greens on a dark plate',
}

export const stats = [
  { value: 500, suffix: '+', label: 'Restaurants' },
  { value: 50, suffix: '+', label: 'Cuisines' },
  { value: 10, suffix: '+', label: 'Locations' },
  { value: 1000, suffix: '+', label: 'Happy Foodies' },
]

export const gallery: GalleryImage[] = [
  {
    image: '1414235077428-338989a2e8c0',
    alt: 'Plated fine-dining course beside wine glasses at a candlelit table',
    caption: 'Candlelit tasting menu',
    size: 'large',
    parallax: true,
  },
  {
    image: '1577219491135-ce391730fb2c',
    alt: 'Chef carefully plating a dish under copper pendant lamps',
    caption: 'The finishing touch',
    size: 'tall',
  },
  {
    image: '1514362545857-3bc16c4c7d1b',
    alt: 'Amber cocktail with a herb garnish on a dark bar top',
    caption: 'Signature cocktails',
    size: 'regular',
  },
  {
    image: '1565958011703-44f9829ba187',
    alt: 'Slice of raspberry sponge cake on a black plate',
    caption: 'Raspberry sponge',
    size: 'regular',
  },
  {
    image: '1559329007-40df8a9345d8',
    alt: 'Overhead view of a busy restaurant floor with diners and waiters',
    caption: 'Evening service',
    size: 'wide',
    parallax: true,
  },
  {
    image: '1533777857889-4be7c70b33f7',
    alt: 'Woman savouring a bite of food at a softly lit restaurant table',
    caption: 'Moments worth savouring',
    size: 'tall',
  },
  {
    image: '1553621042-f6e147245754',
    alt: 'Wooden sushi boat filled with assorted maki rolls',
    caption: 'Omakase selection',
    size: 'regular',
  },
  {
    image: '1579027989536-b7b1f875659b',
    alt: 'Restaurant terrace with umbrellas lit up at night',
    caption: 'Alfresco evenings',
    size: 'regular',
  },
  {
    image: '1551218808-94e220e084d2',
    alt: 'Chef finely chopping fresh herbs on a white board',
    caption: 'Prepared by hand',
    size: 'regular',
  },
  {
    image: '1544510808-91bcbee1df55',
    alt: 'Dessert of fresh figs and berries with cream',
    caption: 'Fig & berry pavlova',
    size: 'tall',
    parallax: true,
  },
  {
    image: '1470337458703-46ad1756a187',
    alt: 'Whisky being poured over a large ice cube',
    caption: 'Poured to order',
    size: 'tall',
  },
  {
    image: '1537047902294-62a40c20a6ae',
    alt: 'Lush dining room with teal banquettes and hanging plants',
    caption: 'Garden dining room',
    size: 'wide',
  },
  {
    image: '1592861956120-e524fc739696',
    alt: 'Friends laughing and sharing plates of food at a long table',
    caption: 'Better together',
    size: 'regular',
  },
  {
    image: '1529193591184-b1d58069ecdd',
    alt: 'Close-up of charred, glazed barbecue ribs',
    caption: 'From the grill',
    size: 'wide',
  },
]
