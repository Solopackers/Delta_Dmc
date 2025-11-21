import Image from "next/image";
import Link from "next/link";

export default function PackagesPage() {
  return (
    <div>
      {/* Hero section */}
      <section className="relative bg-blue-600 text-white py-16 md:py-24">
        <div className="absolute inset-0 overflow-hidden">
          <Image 
            src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2021&auto=format&fit=crop" 
            alt="Travel Packages"
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Offerings
            </h1>
            <p className="text-xl text-white/90 mb-4">
              Comprehensive travel solutions tailored for your business needs
            </p>
          </div>
        </div>
      </section>

      {/* Main content section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Image */}
            <div className="relative h-[600px] rounded-lg overflow-hidden shadow-xl">
              <Image 
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070&auto=format&fit=crop" 
                alt="Travel Destination"
                fill
                className="object-cover"
              />
            </div>

            {/* Offerings */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">Our Offerings</h2>
              
              <div className="space-y-8">
                {/* Customized Holidays */}
                <div className="border-b border-gray-200 pb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Customized Holidays</h3>
                  <p className="text-gray-600 text-lg">
                    Get Instant Quotes for Holidays in Asia, whether its single country or multi country in a few minutes.
                  </p>
                </div>

                {/* Groups */}
                <div className="border-b border-gray-200 pb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Groups</h3>
                  <p className="text-gray-600 text-lg">
                    We specialise in adhoc groups catering to your needs and travelers.
                  </p>
                </div>

                {/* MICE */}
                <div className="border-b border-gray-200 pb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">MICE</h3>
                  <p className="text-gray-600 text-lg">
                    We have experience in handling Meetings and Incentive Groups up to 5,000 passengers.
                  </p>
                </div>

                {/* Daily Fixed Departures */}
                <div className="pb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Daily Fixed Departures</h3>
                  <p className="text-gray-600 text-lg">
                    Take advantage of our Special Airfares to Thailand, Singapore and other destinations to build your perfect holiday at affordable  prices.
                  </p>
                </div>
              </div>

              {/* CTA Button */}
              <div className="mt-10">
                <Link 
                  href="/contact" 
                  className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors shadow-lg"
                >
                  Get Started Today
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Why Choose Our Packages?</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive solutions that help your business grow
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Quick Response</h3>
              <p className="text-gray-600">
                Get instant quotes and fast confirmations for all your travel needs
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Flexible Options</h3>
              <p className="text-gray-600">
                Customizable packages that adapt to your specific requirements
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Best Prices</h3>
              <p className="text-gray-600">
                Competitive B2B rates that help you maximize your margins
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

