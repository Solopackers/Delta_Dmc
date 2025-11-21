import Image from "next/image";

const testimonials = [
  {
    id: 1,
    quote: "Working with Delta DMC has transformed our tour offerings. Their attention to detail and exceptional service have made them our preferred partner for all destinations they cover.",
    name: "Sarah Johnson",
    title: "CEO, Global Journeys Travel",
    image: "/images/testimonials/testimonial-1.jpg"
  },
  {
    id: 2,
    quote: "The support and flexibility that Delta DMC provides is unmatched. They consistently go above and beyond for our VIP clients, creating unforgettable experiences.",
    name: "Michael Chen",
    title: "Operations Director, Luxury Escapes",
    image: "/images/testimonials/testimonial-2.jpg"
  },
  {
    id: 3,
    quote: "We've been partners with Delta DMC for over 5 years. Their competitive rates, reliable service, and excellent local connections have helped us grow our business significantly.",
    name: "Emma Rodriguez",
    title: "Managing Partner, Discovery Tours",
    image: "/images/testimonials/testimonial-3.jpg"
  }
];

export default function TestimonialSection() {
  return (
    <section className="section-padding bg-gray-900 text-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Partners Say</h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what travel agencies working with Delta DMC have to say about our services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-gray-800 rounded-lg p-8 relative">
              {/* Quote icon */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11 7h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-2a1 1 0 0 0-1 1v1h4v3h-6v-4c0-2.21 1.79-4 4-4Zm7 0h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-2a1 1 0 0 0-1 1v1h4v3h-6v-4c0-2.21 1.79-4 4-4Z" />
                </svg>
              </div>
              
              <p className="text-gray-300 mb-6 italic">"{testimonial.quote}"</p>
              
              <div className="flex items-center">
                <div className="flex-shrink-0 mr-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden">
                    <Image 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-white">{testimonial.name}</h4>
                  <p className="text-gray-400 text-sm">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-blue-600 rounded-lg p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Partner With Us Today</h3>
              <p className="text-white/80 mb-6">
                Join our network of over 500 travel agencies worldwide and offer your clients exceptional travel experiences with confidence.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center">
                  <div className="flex-shrink-0 mr-2">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <p>Competitive B2B rates</p>
                </div>
                <div className="flex items-center">
                  <div className="flex-shrink-0 mr-2">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <p>24/7 Support</p>
                </div>
                <div className="flex items-center">
                  <div className="flex-shrink-0 mr-2">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <p>Quick response time</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg p-6">
              <h4 className="text-blue-600 font-semibold text-lg mb-4">Get In Touch</h4>
              <form>
                <div className="grid grid-cols-1 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 mb-1 text-sm">Agency Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-gray-900"
                      placeholder="Your agency name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-700 mb-1 text-sm">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-gray-900"
                      placeholder="your@email.com"
                    />
                  </div>
                  <button 
                    type="submit" 
                    className="bg-blue-600 text-white font-medium px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
                  >
                    Request Partnership Info
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}