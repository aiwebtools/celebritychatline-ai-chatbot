
import React from 'react';
import { Phone } from 'lucide-react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  withTagline?: boolean;
}

const Logo: React.FC<LogoProps> = ({ size = 'md', withTagline = false }) => {
  const sizeClasses = {
    sm: 'text-lg md:text-xl',
    md: 'text-xl md:text-2xl',
    lg: 'text-2xl md:text-3xl'
  };
  
  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center gap-2">
        <div className="relative">
          <div className="absolute inset-0 blur-md opacity-70 bg-neon-magenta rounded-full scale-110"></div>
          <div className="relative bg-gradient-to-br from-neon-cyan to-neon-magenta rounded-full p-2 flex items-center justify-center">
            <Phone className="text-black h-5 w-5" />
          </div>
        </div>
        <div className={`font-bold tracking-tight ${sizeClasses[size]}`}>
          <span className="text-white">Celebrity</span>
          <span className="text-neon-cyan">Chatline</span>
          <span className="text-neon-magenta">GPT</span>
        </div>
      </div>
      
      {withTagline && (
        <div className="text-xs text-muted-foreground mt-1">
          Presented by <a href="https://www.aiwebtools.ai" className="hover:text-neon-cyan transition-colors">AiWebTools.Ai</a>
        </div>
      )}
    </div>
  );
};

export default Logo;
