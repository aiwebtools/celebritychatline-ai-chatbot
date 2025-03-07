
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import HowItWorks from '../components/HowItWorks';
import CelebrityImage from '../components/CelebrityImage';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import Disclaimer from '../components/Disclaimer';
import Footer from '../components/Footer';

const Index = () => {
  useEffect(() => {
    // Smooth scroll functionality for navigation
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A') {
        const href = target.getAttribute('href');
        if (href && href.startsWith('#')) {
          e.preventDefault();
          const element = document.getElementById(href.substring(1));
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <div className="min-h-screen bg-dark text-white">
      <Navbar />
      
      <main>
        <Hero />
        
        <div className="py-12 md:py-16">
          <CelebrityImage />
        </div>
        
        <HowItWorks />
        <Testimonials />
        <FAQ />
        <Disclaimer />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
