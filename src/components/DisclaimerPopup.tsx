
import React, { useState, useEffect } from 'react';
import { Check, Info } from 'lucide-react';

const DisclaimerPopup: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already seen the disclaimer
    const hasSeenDisclaimer = localStorage.getItem('hasSeenDisclaimer');
    
    if (!hasSeenDisclaimer) {
      // Show popup with a slight delay for better UX
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 800);
      
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAgree = () => {
    // Store in localStorage so the popup doesn't show again
    localStorage.setItem('hasSeenDisclaimer', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-md transform animate-slide-up">
        <div className="glass-panel rounded-2xl overflow-hidden shadow-xl border border-neon-cyan/30">
          <div className="relative bg-gradient-to-br from-dark-medium to-dark-light p-6 sm:p-8">
            {/* Decorative elements */}
            <div className="absolute -top-12 -right-12 w-24 h-24 bg-neon-cyan/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-12 -left-12 w-24 h-24 bg-neon-magenta/20 rounded-full blur-xl"></div>
            
            <div className="relative">
              <div className="flex items-center gap-2 mb-5">
                <Info className="h-6 w-6 text-neon-cyan" />
                <h2 className="text-2xl sm:text-3xl font-bold gradient-heading">Disclaimer</h2>
              </div>
              
              <div className="space-y-3 mb-6 text-gray-200 text-sm sm:text-base">
                <p className="font-medium text-neon-cyan">
                  This is an AI SIMULATION and does not represent actual conversations with real celebrities.
                </p>
                <p>
                  Celebrity Chat AI uses advanced language models to simulate conversations with celebrity personalities for entertainment purposes only.
                </p>
                <p>
                  By clicking "I AGREE" below, you acknowledge that these are AI-generated interactions and not actual communications with the real individuals being portrayed.
                </p>
              </div>
              
              <button 
                onClick={handleAgree}
                className="w-full py-3 px-6 bg-gradient-to-r from-neon-cyan to-neon-blue rounded-lg text-black font-bold text-lg 
                           transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,255,255,0.5)] hover:scale-105 active:scale-95
                           flex items-center justify-center gap-2"
              >
                <Check className="h-5 w-5" />
                <span className="tracking-wider">I AGREE</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisclaimerPopup;
