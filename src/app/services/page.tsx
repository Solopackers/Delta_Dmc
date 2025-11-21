import Image from "next/image";
import Link from "next/link";

const services = [
  {
    id: 1,
    title: "Tour Packages",
    description: "Comprehensive tour packages with accommodation, transportation, activities, and expert guides.",
    longDescription: "Our tour packages are meticulously crafted to provide your clients with exceptional travel experiences. Each package includes carefully selected accommodations, efficient transportation arrangements, engaging activities, and knowledgeable local guides. We handle all the details so you can focus on selling unforgettable experiences to your clients.",
    icon: (
      <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
      </svg>
    ),
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2021&auto=format&fit=crop",
    slug: "tour-packages"
  },
  {
    id: 2,
    title: "Hotel Booking",
    description: "Access to our extensive network of hotels with competitive B2B rates and exclusive partner benefits.",
    longDescription: "Leverage our partnerships with hotels ranging from budget-friendly to ultra-luxury properties across all destinations. Our B2B rates are significantly lower than public rates, allowing you to offer competitive pricing while maintaining healthy margins. Our hotel partnerships also provide your clients with special amenities and priority service.",
    icon: (
      <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
      </svg>
    ),
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop",
    slug: "hotel-booking"
  },
  {
    id: 3,
    title: "Transportation",
    description: "From airport transfers to luxury vehicles, we provide reliable transportation solutions for all needs.",
    longDescription: "Our transportation services cover all your clients' mobility needs, from airport pickups to private tours. We offer a range of vehicles from standard sedans to luxury vans and coaches, all maintained to the highest standards and operated by professional, licensed drivers. Our B2B transportation rates provide excellent value for both individual travelers and groups.",
    icon: (
      <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"></path>
      </svg>
    ),
    image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?q=80&w=2071&auto=format&fit=crop",
    slug: "transportation"
  },
  {
    id: 4,
    title: "Customized Tours",
    description: "Tailor-made itineraries designed specifically for your clients' preferences and requirements.",
    longDescription: "For clients seeking personalized experiences, our customized tour service creates bespoke itineraries that perfectly match their interests, schedule, and budget. Our expert destination specialists work directly with you to understand your clients' needs and design a unique program that exceeds expectations, whether for individual travelers, families, or special interest groups.",
    icon: (
      <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
      </svg>
    ),
    image: "https://images.unsplash.com/photo-1501555088652-021faa106b9b?q=80&w=2073&auto=format&fit=crop",
    slug: "customized-tours"
  },
  {
    id: 5,
    title: "MICE Services",
    description: "Professional management of meetings, incentives, conferences, and events in our destinations.",
    longDescription: "Our dedicated MICE team specializes in organizing seamless corporate events in all our destinations. From venue selection and accommodation to team-building activities and gala dinners, we handle all aspects of corporate events with precision and creativity. Our extensive supplier network allows us to secure competitive rates while ensuring high-quality experiences.",
    icon: (
      <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
      </svg>
    ),
    image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=2012&auto=format&fit=crop",
    slug: "mice-services"
  },
  {
    id: 6,
    title: "24/7 Support",
    description: "Round-the-clock assistance for your clients during their travel with our dedicated support team.",
    longDescription: "We understand that travel doesn't operate on business hours. Our 24/7 support service ensures that your clients always have access to assistance when needed. From flight delays to special requests, our multilingual support team is ready to resolve any issues quickly and efficiently, giving you and your clients peace of mind throughout their journey.",
    icon: (
      <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"></path>
      </svg>
    ),
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2072&auto=format&fit=crop",
    slug: "support"
  }
];

export default function ServicesPage() {
  return (
    <div>
      {/* Hero section */}
      <section className="relative bg-blue-300 text-blue-600 py-16 md:py-24">
        <div className="absolute inset-0 overflow-hidden">
          <Image 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" 
            alt="Professional travel services"
            fill
            className="object-cover opacity-80"
            priority
          />
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              B2B Travel Services
            </h1>
            <p className="text-2xl font-bold text-white/90 mb-8">
              Comprehensive solutions designed specifically for travel agencies to enhance your offerings and grow your business.
            </p>
          </div>
        </div>
      </section>

      {/* Services overview */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Delta DMC provides a full range of destination management services to help travel agencies deliver exceptional experiences to their clients.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-16">
            {services.map((service, index) => (
              <div 
                key={service.id} 
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                  index % 2 !== 0 ? 'lg:grid-flow-dense' : ''
                }`}
              >
                <div className={index % 2 !== 0 ? 'lg:col-start-2' : ''}>
                  <div className="flex items-center mb-4">
                    <div className="mr-4">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-6 text-lg">
                    {service.description}
                  </p>
                  <p className="text-gray-600 mb-8">
                    {service.longDescription}
                  </p>
                 
                </div>
                <div className={index % 2 !== 0 ? 'lg:col-start-1' : ''}>
                  <div className="relative h-64 md:h-80 rounded-lg overflow-hidden shadow-md">
                    <Image 
                      src={service.image} 
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner program CTA */}
      <section className="py-16 bg-[#f4f7f0]">
        <div className="container-custom">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Partner Support Program</h2>
                <p className="text-gray-600 mb-6">
                  Beyond our core services, we offer a comprehensive partner support program to help travel agencies grow their business with:
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-600 mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Marketing materials and destination guides</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-600 mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Product training and destination webinars</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-600 mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Familiarization trips for your team</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-600 mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Dedicated account manager for personalized support</span>
                  </li>
                </ul>
                <Link href="/contact" className="btn-primary inline-flex items-center self-start">
                  Join Our Partner Program
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                  </svg>
                </Link>
              </div>
              <div className="relative">
                <Image 
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop" 
                  alt="Partner support"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 