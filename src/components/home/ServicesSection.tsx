"use client";

import Link from "next/link";
import Image from "next/image";
import { IconType } from "react-icons";
import { FaHotel, FaPlane, FaCar, FaUtensils, FaMapMarkedAlt, FaUserTie } from "react-icons/fa";
import AnimatedSection from "@/components/animation/AnimatedSection";
import FadeIn from "@/components/animation/FadeIn";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: IconType;
  delay: number;
}

const ServiceCard = ({ title, description, icon: Icon, delay }: ServiceCardProps) => {
  return (
    <FadeIn delay={delay} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-start">
        <div className="bg-blue-100 p-3 rounded-lg text-blue-600 mr-4">
          <Icon size={24} />
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2 text-gray-900">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    </FadeIn>
  );
};

// Service data
const services = [
  {
    title: "Luxury Accommodations",
    description: "Exclusive access to 5-star hotels, private villas, and boutique resorts with preferred partner rates.",
    icon: FaHotel,
  },
  {
    title: "Premium Transportation",
    description: "Chauffeur-driven vehicles, private jets, helicopter transfers, and luxury yacht charters.",
    icon: FaCar,
  },
  {
    title: "Unique Experiences",
    description: "Curated cultural immersions, exclusive access tours, and one-of-a-kind adventures.",
    icon: FaMapMarkedAlt,
  },
  {
    title: "Air & Cruise Bookings",
    description: "First and business class flight arrangements and luxury cruise reservations with VIP perks.",
    icon: FaPlane,
  },
  {
    title: "Fine Dining",
    description: "Reservations at Michelin-starred restaurants and private dining experiences with renowned chefs.",
    icon: FaUtensils,
  },
  {
    title: "Personalized Service",
    description: "Dedicated account managers and 24/7 concierge support for seamless client experiences.",
    icon: FaUserTie,
  },
];

export default function ServicesSection() {
  return (
    <section className="py-0 bg-gray-50">
      <div className="container-custom">
        <AnimatedSection className="text-center mb-12">
          <span className="text-blue-700 font-semibold mb-2 block">OUR SERVICES</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Comprehensive B2B Travel Solutions
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We provide end-to-end destination management services tailored to the needs of travel agencies and tour operators.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              delay={0.1 * index}
            />
          ))}
        </div>

        <AnimatedSection className="mt-10 relative">
          <div className="bg-blue-500 rounded-2xl overflow-hidden shadow-xl">
            <div className="md:flex">
              <div className="md:w-1/2 p-8 md:p-12 flex items-center">
                <div className="text-white">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">
                    Tailored Solutions for Travel Agencies
                  </h3>
                  <p className="mb-6 text-blue-100">
                    We understand that each travel agency has unique needs. Our flexible service model allows you to choose which services to outsource, ensuring a perfect partnership.
                  </p>
                  <ul className="space-y-3 mb-8">
                    {["White-label operations", "Multi-language support", "Custom itineraries", "Competitive pricing"].map((item, idx) => (
                      <li key={idx} className="flex items-center">
                        <svg className="w-5 h-5 mr-2 text-blue-200" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="md:w-1/2 relative min-h-[300px] md:min-h-0">
                <Image
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070"
                  alt="Travel consultants working"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
} 