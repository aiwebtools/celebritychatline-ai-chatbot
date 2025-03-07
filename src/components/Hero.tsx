
import React, { useEffect, useRef } from 'react';
import { Phone, Star, Zap, MessageSquare } from 'lucide-react';
import Logo from './Logo';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (heroRef.current) {
      observer.observe(heroRef.current);
    }
    
    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  return (
    <div className="relative pt-24 pb-20 md:pt-32 md:pb-28 overflow-hidden" ref={heroRef} style={{ opacity: 0 }}>
      {/* Background effects */}
      <div className="absolute top-0 left-0 right-0 h-2/3 bg-gradient-to-b from-neon-cyan/5 to-transparent"></div>
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-neon-magenta/10 rounded-full filter blur-3xl"></div>
      <div className="absolute top-1/2 -left-24 w-80 h-80 bg-neon-blue/10 rounded-full filter blur-3xl"></div>
      
      <div className="section-container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-4 flex justify-center">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-muted text-neon-cyan">
              <Star className="h-3.5 w-3.5 mr-1 text-neon-cyan" />
              Premium Celebrity AI Experience
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 gradient-heading">
            Talk To Your Favorite Celebrities
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Lifelike conversations with AI-powered celebrity personalities. 
            Experience authentic interactions that mimic their unique style, knowledge, and character.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://chatgpt.com/g/g-pCTnTEwn4-celebrity-chatline-gpt" 
              className="bg-gradient-to-r from-neon-cyan to-neon-magenta text-black font-medium px-8 py-3 rounded-full text-lg shadow-lg shadow-neon-cyan/20 hover:shadow-neon-cyan/30 hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Phone className="h-5 w-5" /> 
              Start Chatting Now
            </a>
            <a 
              href="#how-it-works" 
              className="glass-panel px-8 py-3 rounded-full text-lg font-medium text-white hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Zap className="h-5 w-5 text-neon-yellow" /> 
              How It Works
            </a>
          </div>
          
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            <FeatureBadge icon={<MessageSquare className="h-4 w-4" />} text="Authentic Conversations" />
            <FeatureBadge icon={<Zap className="h-4 w-4" />} text="Unlimited Characters" />
            <FeatureBadge icon={<Star className="h-4 w-4" />} text="Personalized Responses" />
          </div>
        </div>
      </div>
    </div>
  );
};

interface FeatureBadgeProps {
  icon: React.ReactNode;
  text: string;
}

const FeatureBadge: React.FC<FeatureBadgeProps> = ({ icon, text }) => (
  <div className="flex items-center gap-1.5 px-3 py-1.5 bg-dark-light rounded-full text-sm text-muted-foreground">
    {icon}
    <span>{text}</span>
  </div>
);

export default Hero;
