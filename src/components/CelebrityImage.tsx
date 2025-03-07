
import React, { useEffect, useRef } from 'react';

const CelebrityImage: React.FC = () => {
  const imageRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-blur-in');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (imageRef.current) {
      observer.observe(imageRef.current);
    }
    
    return () => {
      if (imageRef.current) {
        observer.unobserve(imageRef.current);
      }
    };
  }, []);

  return (
    <div className="relative px-4 sm:px-6 mx-auto max-w-3xl opacity-0" ref={imageRef}>
      {/* Cyberpunk style glow effects */}
      <div className="absolute -inset-1 bg-gradient-to-r from-neon-cyan via-neon-magenta to-neon-blue opacity-30 blur-xl rounded-2xl"></div>
      <div className="absolute -inset-3 bg-gradient-to-r from-neon-cyan via-neon-magenta to-neon-blue opacity-10 blur-2xl rounded-2xl animate-pulse-glow"></div>
      
      <a 
        href="https://chatgpt.com/g/g-pCTnTEwn4-celebrity-chatline-gpt" 
        className="block relative rounded-2xl overflow-hidden border border-white/10"
      >
        <img 
          src="https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-split-screen-image-of-snoop-dogg-talking-on-.png/:/cr=t:0%25,l:0.11%25,w:99.78%25,h:100%25/rs=w:1200,cg:true" 
          alt="Celebrity Chatline GPT in action - Snoop Dogg text chat example" 
          className="w-full h-auto object-cover rounded-2xl shadow-xl"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent opacity-60"></div>
        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
          <p className="text-white text-sm sm:text-base md:text-lg font-medium text-shadow">
            Experience lifelike AI-simulated text conversations with your favorite celebrities
          </p>
          <p className="text-neon-cyan text-xs sm:text-sm mt-1 text-shadow font-medium">
            100% AI simulation • Not real celebrities
          </p>
        </div>
      </a>
    </div>
  );
};

export default CelebrityImage;
