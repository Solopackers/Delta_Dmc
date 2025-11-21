"use client";

import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "@/components/animation/AnimatedSection";
import StaggeredList from "@/components/animation/StaggeredList";
import AnimatedButton from "@/components/animation/AnimatedButton";

// Destination data
const destinations = [
  {
    id: 1,
    name: "Dubai & UAE",
    description: "Explore the pinnacle of luxury and adventure in the heart of the Middle East.",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070",
    link: "/packages"
  },
  {
    id: 2,
    name: "Bali, Indonesia",
    description: "Experience paradise on earth with pristine beaches and lush tropical landscapes.",
    image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=1973",
    link: "/packages"
  },
  {
    id: 3,
    name: "Thailand",
    description: "Discover vibrant culture, breathtaking beaches, and exquisite cuisine.",
    image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=1973",
    link: "/packages"
  },
  {
    id: 4,
    name: "Vietnam",
    description: "Encounter majestic mountain scenery and world-class hospitality.",
    image: "https://images.unsplash.com/photo-1527004013197-933c4bb611b3?q=80&w=1974",
    link: "/packages"
  }
];

export default function FeaturedDestinations() {
  return (
    <section className="py-5 md:py-10 bg-gray-50">
      <div className="container-custom">
        <AnimatedSection delay={0.2}>
          <div className="text-center mb-12">
            <span className="text-blue-600 font-semibold mb-2 block">DESTINATIONS</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Featured Travel Packages</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Partner with us to offer your clients exclusive access to these premium destinations with bespoke travel packages.
            </p>
          </div>
        </AnimatedSection>

        <StaggeredList staggerDelay={0.1} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((destination) => (
            <div key={destination.id} className="bg-white rounded-xl shadow-md overflow-hidden group hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={destination.image}
                  alt={destination.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{destination.name}</h3>
                <p className="text-gray-600 mb-4">{destination.description}</p>
                <Link href={destination.link} className="text-blue-600 font-medium hover:text-blue-800 transition-colors">
                  View Packages →
                </Link>
              </div>
            </div>
          ))}
        </StaggeredList>

        <AnimatedSection delay={0.4} className="mt-12 text-center">
          <AnimatedButton href="/destinations">
            View All Destinations
          </AnimatedButton>
        </AnimatedSection>
      </div>
    </section>
  );
} 