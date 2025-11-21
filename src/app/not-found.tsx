import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-6 py-12">
      <div className="text-center max-w-xl">
        <h1 className="text-6xl font-bold text-blue-600 mb-6">404</h1>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Page Not Found</h2>
        <p className="text-gray-600 mb-8">
          We're sorry, but the page you are looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link 
            href="/" 
            className="btn-primary"
          >
            Return Home
          </Link>
          <Link 
            href="/contact" 
            className="btn-secondary"
          >
            Contact Us
          </Link>
        </div>
        
        <div className="mt-12">
          <h3 className="text-lg font-semibold mb-4 text-gray-900">You might be interested in:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link 
              href="/destinations" 
              className="p-4 border border-gray-200 rounded-lg hover:border-blue-600 hover:bg-blue-50 transition-colors text-left"
            >
              <h4 className="font-medium text-gray-900">Our Destinations</h4>
              <p className="text-sm text-gray-600">Explore our range of global destinations</p>
            </Link>
            <Link 
              href="/services" 
              className="p-4 border border-gray-200 rounded-lg hover:border-blue-600 hover:bg-blue-50 transition-colors text-left"
            >
              <h4 className="font-medium text-gray-900">B2B Services</h4>
              <p className="text-sm text-gray-600">Discover our comprehensive B2B services</p>
            </Link>
            <Link 
              href="/about" 
              className="p-4 border border-gray-200 rounded-lg hover:border-blue-600 hover:bg-blue-50 transition-colors text-left"
            >
              <h4 className="font-medium text-gray-900">About Us</h4>
              <p className="text-sm text-gray-600">Learn more about Delta DMC</p>
            </Link>
            <Link 
              href="/contact" 
              className="p-4 border border-gray-200 rounded-lg hover:border-blue-600 hover:bg-blue-50 transition-colors text-left"
            >
              <h4 className="font-medium text-gray-900">Contact Us</h4>
              <p className="text-sm text-gray-600">Get in touch with our B2B team</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 