
import React, { useEffect, useRef } from 'react';
import { MessageSquare, Star, Zap, MessageCircle } from 'lucide-react';
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
    <div className="relative pt-20 sm:pt-24 md:pt-32 pb-16 sm:pb-20 md:pb-28 overflow-hidden" ref={heroRef} style={{ opacity: 0 }}>
      {/* Background effects */}
      <div className="absolute top-0 left-0 right-0 h-2/3 bg-gradient-to-b from-neon-cyan/5 to-transparent"></div>
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-neon-magenta/10 rounded-full filter blur-3xl"></div>
      <div className="absolute top-1/2 -left-24 w-80 h-80 bg-neon-blue/10 rounded-full filter blur-3xl"></div>
      
      <div className="section-container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-4 flex justify-center">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-muted text-neon-cyan">
              <Star className="h-3.5 w-3.5 mr-1 text-neon-cyan" />
              #1 Free AI Chat Tool - Powered by GPT-4o
            </span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 gradient-heading">
            Free AI Celebrity Chat Tool - Text Chat With Your Favorite Stars
          </h1>
          
          <h2 className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-6 sm:mb-8">
            Experience lifelike text conversations with AI-powered celebrity personalities using our free AI tools. 
            Our ChatGPT-based interface mimics their unique style, knowledge, and character through advanced AI simulation.
          </h2>
          
          <p className="text-sm sm:text-base text-neon-cyan mb-6 sm:mb-8 font-medium">
            Top-Rated Free AI Web Tool • Powered by GPT-4o Technology • 100% AI Simulation • Not Real Celebrity Conversations
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://chatgpt.com/g/g-pCTnTEwn4-celebrity-chatline-gpt" 
              className="bg-gradient-to-r from-neon-cyan to-neon-magenta text-black font-medium px-8 py-3 rounded-full text-lg shadow-lg shadow-neon-cyan/20 hover:shadow-neon-cyan/30 hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2"
              aria-label="Start using free AI celebrity chat tool"
            >
              <MessageSquare className="h-5 w-5" /> 
              Try Free AI Tool Now
            </a>
            <a 
              href="#how-it-works" 
              className="glass-panel px-8 py-3 rounded-full text-lg font-medium text-white hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2"
              aria-label="Learn how our AI tools work"
            >
              <Zap className="h-5 w-5 text-neon-yellow" /> 
              How AI Tools Work
            </a>
          </div>
          
          <div className="mt-8 sm:mt-12 flex flex-wrap justify-center gap-3">
            <FeatureBadge icon={<MessageSquare className="h-4 w-4" />} text="Free AI Chat Tool" />
            <FeatureBadge icon={<Zap className="h-4 w-4" />} text="AI Web Tools" />
            <FeatureBadge icon={<Star className="h-4 w-4" />} text="GPT-4o AI Technology" />
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
