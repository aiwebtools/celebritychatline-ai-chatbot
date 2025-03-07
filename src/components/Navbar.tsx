
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-dark-lighter/80 backdrop-blur-lg shadow-md py-2 sm:py-3' 
          : 'bg-transparent py-3 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Logo size="md" />
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavLinks />
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[57px] bg-dark-lighter/95 backdrop-blur-lg z-40 border-t border-white/10 shadow-lg">
          <nav className="flex flex-col space-y-6 p-6 pt-8">
            <NavLinks mobile onClick={() => setIsMobileMenuOpen(false)} />
          </nav>
        </div>
      )}
    </header>
  );
};

interface NavLinksProps {
  mobile?: boolean;
  onClick?: () => void;
}

const NavLinks: React.FC<NavLinksProps> = ({ mobile, onClick }) => {
  const baseClasses = "transition-colors duration-300";
  const linkClasses = mobile
    ? `${baseClasses} text-lg py-2 block w-full text-center`
    : `${baseClasses} hover:text-neon-cyan`;
    
  return (
    <>
      <a 
        href="https://chatgpt.com/g/g-pCTnTEwn4-celebrity-chatline-gpt" 
        className={`${linkClasses} font-medium`}
        onClick={onClick}
      >
        Celebrity Chatline GPT
      </a>
      <a 
        href="#faq" 
        className={linkClasses}
        onClick={onClick}
      >
        FAQ
      </a>
      <a 
        href="#disclaimer" 
        className={linkClasses}
        onClick={onClick}
      >
        Disclaimer
      </a>
      <a 
        href="https://www.aiwebtools.ai" 
        className={linkClasses}
        onClick={onClick}
      >
        More AI Tools
      </a>
      <a 
        href="https://chatgpt.com/g/g-pCTnTEwn4-celebrity-chatline-gpt" 
        className={`${mobile ? 'bg-gradient-to-r from-neon-cyan to-neon-magenta text-black font-medium py-3 px-6 rounded-full text-center block w-full mt-4' : 'bg-gradient-to-r from-neon-cyan to-neon-magenta hover:opacity-90 transition-opacity text-black font-medium py-2 px-5 rounded-full'}`}
        onClick={onClick}
      >
        Try Now
      </a>
    </>
  );
};

export default Navbar;
