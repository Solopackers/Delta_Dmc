import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div>
      {/* Hero section */}
      <section className="relative bg-blue-600 text-white py-16 md:py-24">
        <div className="absolute inset-0 overflow-hidden">
          <Image 
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop" 
            alt="Delta DMC Team"
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About Delta DMC
            </h1>
            <p className="text-xl text-white/90 mb-4">
              Your trusted B2B partner for exceptional travel experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Our story section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Our Story</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Founded in 2010, Delta DMC was established with a clear mission: to provide travel agencies with exceptional destination management services that enable them to deliver unforgettable experiences to their clients.
                </p>
                <p>
                  What began as a small operation covering just three destinations has now grown into a global network serving travel agencies across more than 20 countries. Our growth has been built on a foundation of reliability, expertise, and personalized service.
                </p>
                <p>
                  As a B2B-focused DMC, we understand the unique challenges and opportunities that travel agencies face. We work as an extension of your team, providing seamless support and innovative solutions that help you exceed your clients' expectations.
                </p>
              </div>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
              <Image 
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop" 
                alt="Delta DMC history"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why choose us section */}
      <section className="py-16 bg-[#f4f7f0]">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Why Choose Delta DMC</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We differentiate ourselves through our commitment to excellence, industry expertise, and focus on your business growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">B2B Expertise</h3>
              <p className="text-gray-600">
                We exclusively serve travel agencies, allowing us to specialize in the unique needs of B2B partnerships and develop services specifically tailored to help you grow your business.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Local Connections</h3>
              <p className="text-gray-600">
                Our team consists of local experts who provide insider knowledge and access to unique experiences, ensuring your clients receive authentic and memorable travel experiences.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Quality Assurance</h3>
              <p className="text-gray-600">
                Every service we provide undergoes rigorous quality checks. We personally inspected all accommodations, tested all activities, and regularly reviewed our suppliers to ensure consistent excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <p className="text-white/80 max-w-3xl mx-auto">
              The core principles that guide everything we do at Delta DMC.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Partnership</h3>
              <p className="text-white/80">
                We view ourselves as an extension of your team, committed to your success and growth as a travel agency.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Excellence</h3>
              <p className="text-white/80">
                We strive for excellence in every service we provide, never compromising on quality or attention to detail.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Innovation</h3>
              <p className="text-white/80">
                We continuously seek innovative solutions and unique experiences to help you stand out in a competitive market.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Reliability</h3>
              <p className="text-white/80">
                You can count on us to deliver on our promises consistently, providing peace of mind for you and your clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="bg-[#f4f7f0] rounded-lg p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">Ready to Partner with Delta DMC?</h2>
            <p className="text-gray-600 max-w-3xl mx-auto mb-8">
              Join our network of travel agency partners and provide your clients with exceptional travel experiences while growing your business.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn-primary">
                Contact Us
              </Link>
              <Link href="/" className="btn-secondary">
                Learn About Our Partner Program
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 