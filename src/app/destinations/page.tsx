import Image from "next/image";
import Link from "next/link";

// Featured destinations data
const destinations = [
  {
    id: 1,
    name: "Bali",
    description: "Experience the perfect blend of beaches, culture, and adventure in the Island of Gods.",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1938&auto=format&fit=crop",
    slug: "bali",
    highlights: ["Beautiful beaches", "Rich cultural heritage", "Luxury resorts", "Adventure activities"]
  },
  {
    id: 2,
    name: "Vietnam",
    description: "Discover the charm of ancient traditions, stunning landscapes, and vibrant cities.",
    image: "https://images.unsplash.com/photo-1583417319070-4a69db38a482?q=80&w=2070&auto=format&fit=crop",
    slug: "vietnam",
    highlights: ["Ha Long Bay", "Ancient temples", "Street food culture", "Scenic landscapes"]
  },
  {
    id: 3,
    name: "Thailand",
    description: "Immerse yourself in a vibrant mix of traditional culture and modern excitement.",
    image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=2059&auto=format&fit=crop",
    slug: "thailand",
    highlights: ["Ancient temples", "Floating markets", "Street food scene", "Island beaches"]
  },
  {
    id: 4,
    name: "Dubai",
    description: "Experience luxury, futuristic architecture, and desert adventures in one destination.",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070&auto=format&fit=crop",
    slug: "dubai",
    highlights: ["Luxury experiences", "Desert safaris", "Burj Khalifa", "Shopping festivals"]
  },
  {
    id: 5,
    name: "Oman",
    description: "Explore the Arabian beauty with stunning deserts, mountains, and pristine beaches.",
    image: "https://images.unsplash.com/photo-1590073844006-33379778ae09?q=80&w=2076&auto=format&fit=crop",
    slug: "oman",
    highlights: ["Desert landscapes", "Historic forts", "Wadis & beaches", "Traditional souks"]
  },
  {
    id: 6,
    name: "Baku",
    description: "Discover the Land of Fire with its unique blend of ancient and modern architecture.",
    image: "https://res.cloudinary.com/dwcislsn6/image/upload/v1763717280/baku-azerbaijan_naunbj.jpg",
    slug: "baku",
    highlights: ["Flame Towers", "Old City", "Caspian Sea", "Modern architecture"]
  },
  {
    id: 7,
    name: "Turkey",
    description: "Experience the crossroads of Europe and Asia with rich history and stunning landscapes.",
    image: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?q=80&w=2071&auto=format&fit=crop",
    slug: "turkey",
    highlights: ["Hot air balloons", "Historic sites", "Turkish cuisine", "Coastal beauty"]
  },
  {
    id: 8,
    name: "Singapore",
    description: "Discover the perfect blend of modern innovation and cultural diversity.",
    image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?q=80&w=2052&auto=format&fit=crop",
    slug: "singapore",
    highlights: ["Marina Bay Sands", "Gardens by the Bay", "Diverse cuisine", "Shopping paradise"]
  },
  {
    id: 9,
    name: "Bhutan",
    description: "Experience the last Himalayan kingdom with pristine nature and Buddhist culture.",
    image: "https://images.unsplash.com/photo-1609137144813-7d9921338f24?q=80&w=2187&auto=format&fit=crop",
    slug: "bhutan",
    highlights: ["Tiger's Nest", "Buddhist monasteries", "Himalayan views", "Gross National Happiness"]
  },
  {
    id: 10,
    name: "Sri Lanka",
    description: "Explore the pearl of the Indian Ocean with diverse wildlife and ancient heritage.",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop",
    slug: "sri-lanka",
    highlights: ["Ancient temples", "Tea plantations", "Wildlife safaris", "Beautiful beaches"]
  },
  {
    id: 11,
    name: "Maldives",
    description: "Indulge in paradise with crystal-clear waters and luxury overwater villas.",
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=2065&auto=format&fit=crop",
    slug: "maldives",
    highlights: ["Overwater villas", "Crystal waters", "Diving & snorkeling", "Luxury resorts"]
  },
  {
    id: 12,
    name: "Goa",
    description: "Enjoy India's beach paradise with vibrant nightlife and Portuguese heritage.",
    image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=2074&auto=format&fit=crop",
    slug: "goa",
    highlights: ["Beach parties", "Portuguese churches", "Water sports", "Seafood cuisine"]
  },
  {
    id: 13,
    name: "Kerala",
    description: "Experience God's Own Country with backwaters, hill stations, and Ayurveda.",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=2048&auto=format&fit=crop",
    slug: "kerala",
    highlights: ["Backwater cruises", "Hill stations", "Ayurvedic treatments", "Tea gardens"]
  },
  {
    id: 14,
    name: "Rajasthan",
    description: "Discover the land of kings with majestic forts, palaces, and desert landscapes.",
    image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=2070&auto=format&fit=crop",
    slug: "rajasthan",
    highlights: ["Royal palaces", "Desert safaris", "Cultural heritage", "Traditional cuisine"]
  },
  {
    id: 15,
    name: "Kashmir",
    description: "Experience paradise on earth with stunning valleys, lakes, and snow-capped mountains.",
    image: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?q=80&w=2070&auto=format&fit=crop",
    slug: "kashmir",
    highlights: ["Dal Lake", "Houseboats", "Gulmarg skiing", "Mughal gardens"]
  },
  {
    id: 16,
    name: "Andaman",
    description: "Explore pristine islands with turquoise waters, coral reefs, and tropical beaches.",
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=2070&auto=format&fit=crop",
    slug: "andaman",
    highlights: ["Radhanagar Beach", "Scuba diving", "Cellular Jail", "Island hopping"]
  }
];

export default function DestinationsPage() {
  return (
    <div>
      {/* Hero section */}
      <section className="relative bg-gray-900 text-white py-16 md:py-24">
        <div className="absolute inset-0 overflow-hidden">
          <Image 
            src="https://images.unsplash.com/photo-1488085061387-422e29b40080?q=80&w=2031&auto=format&fit=crop" 
            alt="World destinations"
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Global Destinations
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Explore our comprehensive selection of destinations where we offer exceptional B2B travel services and packages for your clients.
            </p>
          </div>
        </div>
      </section>

      {/* Destinations grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4">Featured Destinations</h2>
            <p className="text-gray-600">
              Browse our most popular destinations with comprehensive ground handling services and exclusive B2B rates.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((destination) => (
              <div 
                key={destination.id}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="relative h-64 w-full overflow-hidden">
                  <Image 
                    src={destination.image} 
                    alt={destination.name}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">
                    {destination.name}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {destination.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Highlights:</h4>
                    <div className="flex flex-wrap gap-2">
                      {destination.highlights.map((highlight, index) => (
                        <span 
                          key={index} 
                          className="bg-blue-50 text-blue-600 text-xs px-2 py-1 rounded-full"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <Link 
                    href={`https://wa.me/916364375670?text=I'm%20interested%20in%20the%20${encodeURIComponent(destination.name)}%20package`} 
                    className="btn-primary inline-flex items-center text-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Enquire Now
                    <svg 
                      className="w-4 h-4 ml-2" 
                      fill="currentColor" 
                      viewBox="0 0 24 24" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.25.625 4.359 1.712 6.159l-1.121 3.354 3.47-1.108A11.985 11.985 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.999 0-3.859-.615-5.391-1.666l-.386-.255-4.015 1.281 1.308-3.905-.279-.446A9.95 9.95 0 012 12c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10z"/>
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner with us CTA */}
      <section className="bg-blue-50 py-12 md:py-16">
        <div className="container-custom">
          <div className="bg-[#f4f7f0] rounded-lg shadow-md p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Partner with Delta DMC?</h2>
                <p className="text-gray-600 mb-6">
                  As our B2B partner, you'll receive exclusive rates, priority support, and customized packages for these destinations and many more.
                </p>
                <Link href="/contact" className="btn-primary inline-flex items-center">
                  Become a Partner
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                  </svg>
                </Link>
              </div>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h4 className="font-medium">Exclusive B2B Rates</h4>
                    <p className="text-gray-600 text-sm">Special pricing unavailable to the general public</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h4 className="font-medium">Customized Itineraries</h4>
                    <p className="text-gray-600 text-sm">Tailored packages to meet your clients' specific needs</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h4 className="font-medium">24/7 Support</h4>
                    <p className="text-gray-600 text-sm">Dedicated support team available around the clock</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 