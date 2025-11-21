"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/animation/AnimatedSection";

// Testimonial data
const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    title: "Director of Tours at Luxury Escapes",
    quote: "Delta DMC has transformed how we handle ground operations for our most premium clients. Their attention to detail and flexibility with last-minute changes has made them an invaluable partner.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976",
    rating: 5,
  },
  {
    id: 2,
    name: "Rajesh Kumar",
    title: "CEO of Asia Premier Tours",
    quote: "Working with Delta DMC has increased our client satisfaction rates by over 30%. Their local expertise and exclusive access to unique experiences sets them apart from any other DMC we've worked with.",
    image: "https://res.cloudinary.com/dwcislsn6/image/upload/v1763706945/Screenshot_2025-11-21_115845_xzxrmw.png",
    rating: 5,
  },
  {
    id: 3,
    name: "Ananya Patel",
    title: "Operations Manager at Globe Travelers",
    quote: "After partnering with Delta DMC, we've seen a significant improvement in our service delivery. Their 24/7 support team resolves issues before they even reach our clients.",
    image: "https://res.cloudinary.com/dwcislsn6/image/upload/v1754517070/WhatsApp_Image_2025-08-07_at_03.15.31_ed95eb9f_d58w1b.jpg ",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
      <div className="container-custom">
        <AnimatedSection>
          <div className="text-center mb-12">
            <span className="text-blue-600 font-semibold mb-2 block">TESTIMONIALS</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">What Our Partners Say</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Hear from travel agencies and tour operators who have transformed their business by partnering with Delta DMC.
            </p>
          </div>
        </AnimatedSection>

        <div className="mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <motion.div
                key={testimonial.id}
                className="bg-white rounded-2xl shadow-xl p-8 h-full flex flex-col"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: testimonial.id * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0">
                    <div className="relative w-16 h-16 rounded-full overflow-hidden border-4 border-blue-50">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-blue-600 text-sm">{testimonial.title}</p>
                    <div className="flex mt-2">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-4 h-4 text-yellow-400 fill-current"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex-grow">
                  <p className="text-gray-700 italic text-base">"{testimonial.quote}"</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 