"use client";

import AnimatedButton from "@/components/animation/AnimatedButton";
import AnimatedSection from "@/components/animation/AnimatedSection";
import Image from "next/image";

export default function CallToAction() {
  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="container-custom">
        <AnimatedSection className="mt-10 relative">
          <div className="bg-blue-500 rounded-2xl overflow-hidden shadow-xl">
            <div className="md:flex flex-row-reverse">
              <div className="md:w-1/2 p-8 md:p-12 flex items-center">
                <div className="text-white">
                  <span className="text-blue-100 font-semibold mb-2 block">PARTNER WITH US</span>
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
                    Ready to Enhance Your Travel Agency Offerings?
                  </h3>
                  <p className="mb-6 text-blue-100">
                    Partner with Delta DMC today and provide your clients with exceptional travel experiences while growing your business.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <AnimatedButton 
                      href="/contact" 
                      variant="secondary"
                      size="lg"
                    >
                      Contact Our B2B Team
                    </AnimatedButton>
                    <AnimatedButton 
                      href="/destinations" 
                      variant="outline"
                      size="lg"
                      className="border-white/30 hover:border-white"
                    >
                      Explore Our Destinations
                    </AnimatedButton>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 relative min-h-[300px] md:min-h-0">
                <Image
                  src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=2070"
                  alt="Luxury travel experience"
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

