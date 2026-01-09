import React from 'react';
import Hero from '../components/landing/Hero';
import Services from '../components/landing/Services';
import BookingForm from '../components/landing/BookingForm';
import Contact from '../components/landing/Contact';

export default function Home() {
  const scrollToBooking = () => {
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      <Hero onBookNow={scrollToBooking} />
      <Services />
      <BookingForm />
      <Contact />
      
      {/* Footer */}
      <footer className="bg-green-800 text-white py-12 px-6">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <h3 className="text-2xl font-bold">Elite Triple A Cleaning Services</h3>
          <p className="text-green-100">
            Professional cleaning services in Calgary, AB
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-green-100 text-sm">
            <a href="tel:587-226-0109" className="hover:text-white transition-colors">
              587-226-0109
            </a>
            <span>•</span>
            <a href="mailto:elitetripleacleanserv@gmail.com" className="hover:text-white transition-colors">
              elitetripleacleanserv@gmail.com
            </a>
            <span>•</span>
            <a 
              href="https://www.facebook.com/profile.php?id=61578088535914" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Facebook
            </a>
            <span>•</span>
            <a 
              href="https://www.instagram.com/elitetriplea" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Instagram
            </a>
          </div>
          <p className="text-green-200 text-sm pt-8">
            © {new Date().getFullYear()} Elite Triple A Cleaning Services. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}