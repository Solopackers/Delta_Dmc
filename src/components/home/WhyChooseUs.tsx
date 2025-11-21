"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { 
  FaHandHoldingHeart, 
  FaLaptop, 
  FaBullhorn, 
  FaChartLine, 
  FaCode, 
  FaDatabase
} from "react-icons/fa";
import AnimatedSection from "@/components/animation/AnimatedSection";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const FeatureCard = ({ icon, title, description, delay }: FeatureCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
    >
      <div className="flex items-start">
        <div className="bg-blue-50 p-3 rounded-full text-blue-600 mr-4">
          {icon}
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2 text-gray-900">{title}</h3>
          <p className="text-gray-600 text-sm">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default function WhyChooseUs() {
  const features = [
    {
      icon: <FaHandHoldingHeart size={24} />,
      title: "Hand-Holding Support",
      description: "We go beyond being just a supplier. Our dedicated team provides continuous support throughout your partnership journey."
    },
    {
      icon: <FaLaptop size={24} />,
      title: "Digital Media Presence",
      description: "We help you establish and enhance your online presence with professional content creation and social media strategies."
    },
    {
      icon: <FaBullhorn size={24} />,
      title: "Branding & Marketing",
      description: "Our marketing experts help position your brand effectively in the competitive travel industry landscape."
    },
    {
      icon: <FaChartLine size={24} />,
      title: "Advertising Support",
      description: "Get assistance with planning and executing targeted advertising campaigns to reach your ideal customers."
    },
    {
      icon: <FaCode size={24} />,
      title: "Website Development",
      description: "Our tech team can develop or enhance your website with modern, responsive designs optimized for the travel industry."
    },
    {
      icon: <FaDatabase size={24} />,
      title: "CRM Setup & Integration",
      description: "We provide complete CRM solutions to help you manage customer relationships and streamline your operations."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <AnimatedSection className="text-center mb-12">
          <span className="text-blue-700 font-semibold mb-2 block">WHY CHOOSE US</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            More Than Just Tour Packages
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We don't just offer destinations - we provide a complete business growth solution for travel agencies and B2B partners.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={0.1 * index}
            />
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          viewport={{ once: true }}
          className="mt-16 bg-blue-600 rounded-xl overflow-hidden shadow-xl"
        >
          <div className="md:flex">
            <div className="md:w-1/2 p-8 md:p-12 flex items-center">
              <div className="text-white">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  Your Success Is Our Success
                </h3>
                <p className="mb-6 text-blue-100">
                  At Delta DMC, we believe in true partnerships. When you grow, we grow together. Our comprehensive support services are designed to help you succeed in every aspect of your travel business.
                </p>
                <div className="space-y-3">
                  {[
                    "Dedicated account manager for each partner",
                    "Regular training and resource sharing",
                    "Performance tracking and optimization",
                    "Continuous business development support"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center">
                      <svg className="w-5 h-5 mr-2 text-blue-300" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="md:w-1/2 relative min-h-[300px] md:min-h-0">
              <Image
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070"
                alt="Business growth partnership"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 