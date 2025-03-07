
import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Alex Johnson",
    avatar: "AJ",
    role: "Entertainment Fan",
    content: "I had the most realistic conversation with 'The Rock'! The way it captured his motivational style and humor was incredible. I felt like I was texting with him directly.",
    rating: 5
  },
  {
    name: "Maria Garcia",
    avatar: "MG",
    role: "Content Creator",
    content: "As someone who writes celebrity content, this tool is a game-changer for getting the voice right. The Oprah impression was spot-on with her inspirational tone and thoughtful insights.",
    rating: 5
  },
  {
    name: "James Wilson",
    avatar: "JW",
    role: "Tech Enthusiast",
    content: "I was skeptical at first, but after 'talking' with Elon Musk, I'm impressed by how accurately it captures his unique way of explaining complex topics. Very cool technology!",
    rating: 4
  },
  {
    name: "Sarah Chen",
    avatar: "SC",
    role: "Film Student",
    content: "This is such a fun way to explore different personalities. My conversation with 'Samuel L. Jackson' had me laughing out loud - it nailed his iconic style perfectly!",
    rating: 5
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-1/3 -right-64 w-96 h-96 bg-neon-blue/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-1/3 -left-64 w-96 h-96 bg-neon-magenta/10 rounded-full filter blur-3xl"></div>
      
      <div className="section-container">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-heading">What People Are Saying</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands of satisfied users who have experienced the magic of our Celebrity Chatline GPT.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface TestimonialCardProps {
  testimonial: {
    name: string;
    avatar: string;
    role: string;
    content: string;
    rating: number;
  };
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <div className="glass-panel p-6 rounded-xl hover-float">
      <div className="flex gap-4 items-start mb-4">
        <div className="flex-shrink-0 h-12 w-12 rounded-full bg-gradient-to-br from-neon-cyan to-neon-magenta flex items-center justify-center text-black font-bold">
          {testimonial.avatar}
        </div>
        <div>
          <div className="font-medium text-white">{testimonial.name}</div>
          <div className="text-sm text-muted-foreground">{testimonial.role}</div>
        </div>
      </div>
      
      <p className="mb-4 text-muted-foreground">{testimonial.content}</p>
      
      <div className="flex text-neon-yellow">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            className="h-5 w-5" 
            fill={i < testimonial.rating ? "currentColor" : "none"} 
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
