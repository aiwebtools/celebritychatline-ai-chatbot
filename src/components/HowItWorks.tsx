
import React from 'react';
import { Users, Phone, MessageCircle, Sparkles } from 'lucide-react';

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-dark-lighter relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-neon-cyan/5 rounded-full filter blur-3xl"></div>
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-neon-magenta/5 rounded-full filter blur-3xl"></div>
      
      <div className="section-container">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-heading">How It Works</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Connect with your favorite celebrities through our advanced AI technology in just a few simple steps.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Step 
            number={1} 
            title="Choose a Celebrity" 
            description="Select from our extensive list of celebrities, characters, and public figures." 
            icon={<Users className="h-6 w-6 text-neon-cyan" />} 
            delay={0.1}
          />
          <Step 
            number={2} 
            title="Start the Call" 
            description="Our system connects you to a lifelike AI powered by advanced language technology." 
            icon={<Phone className="h-6 w-6 text-neon-magenta" />} 
            delay={0.2}
          />
          <Step 
            number={3} 
            title="Engage in Conversation" 
            description="Chat just like you would in a real conversation with responses that match their style." 
            icon={<MessageCircle className="h-6 w-6 text-neon-yellow" />} 
            delay={0.3}
          />
          <Step 
            number={4} 
            title="Experience the Magic" 
            description="Enjoy a personalized interaction with uncanny resemblance to the real personality." 
            icon={<Sparkles className="h-6 w-6 text-neon-blue" />} 
            delay={0.4}
          />
        </div>
      </div>
    </section>
  );
};

interface StepProps {
  number: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  delay: number;
}

const Step: React.FC<StepProps> = ({ number, title, description, icon, delay }) => {
  return (
    <div 
      className="glass-panel p-6 rounded-xl hover-float"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="flex items-center gap-4 mb-4">
        <div className="bg-gradient-to-br from-dark-medium to-dark-light h-12 w-12 rounded-full flex items-center justify-center">
          {icon}
        </div>
        <span className="flex items-center justify-center h-8 w-8 rounded-full text-sm font-bold bg-white/10 text-white">
          {number}
        </span>
      </div>
      <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

export default HowItWorks;
