import HeroSection from "@/components/home/HeroSection";
import FeaturedDestinations from "@/components/home/FeaturedDestinations";
import ServicesSection from "@/components/home/ServicesSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import CallToAction from "@/components/home/CallToAction";
import WhyChooseUs from "@/components/home/WhyChooseUs";

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <FeaturedDestinations />
      <ServicesSection />
      <WhyChooseUs />
      <TestimonialsSection />
      <CallToAction />
    </div>
  );
}
