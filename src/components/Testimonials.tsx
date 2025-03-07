
import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Alex Johnson",
    avatar: "/images/alex-johnson.jpg",
    role: "Entertainment Blogger",
    content: "I was skeptical at first, but wow! The way Celebrity Chatline GPT captured The Rock's motivational style and catchphrases blew me away. I've been using it for content inspiration for my blog, and it's been a game-changer.",
    rating: 5,
    date: "May 12, 2023"
  },
  {
    name: "Maria Garcia",
    avatar: "/images/maria-garcia.jpg",
    role: "Content Creator",
    content: "As someone who creates celebrity-inspired content, this tool is invaluable. The Oprah simulation was spot-on with her inspirational tone and thoughtful insights. I love how it feels like a real conversation rather than just AI responses.",
    rating: 5,
    date: "August 3, 2023"
  },
  {
    name: "James Wilson",
    avatar: "/images/james-wilson.jpg",
    role: "Tech Reviewer",
    content: "I've tested dozens of AI chat tools, and Celebrity Chatline stands out for its authenticity. The Elon Musk simulation captured not just his words but his thought patterns too. There's a clear difference between this and other celebrity AI tools.",
    rating: 4,
    date: "November 19, 2023"
  },
  {
    name: "Sarah Chen",
    avatar: "/images/sarah-chen.jpg",
    role: "Film Student",
    content: "For my film studies class, I needed to understand different actor personas. This tool helped me analyze speech patterns and expressions of several actors. Samuel L. Jackson's simulation was eerily accurate - I could practically hear his voice through the text!",
    rating: 5,
    date: "February 8, 2024"
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
    date: string;
  };
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  // Fallback image URLs in case the specified images don't exist
  const fallbackImages = [
    "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80", 
    "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
    "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80"
  ];
  
  // Use fallback image based on index
  const getImageSrc = (path: string, index: number) => {
    // For simplicity, we'll just use the fallback images
    return fallbackImages[index % fallbackImages.length];
  };
  
  // Get index based on name to ensure consistent image assignment
  const getIndex = () => {
    return testimonials.findIndex(t => t.name === testimonial.name);
  };
  
  return (
    <div className="glass-panel p-6 rounded-xl hover-float">
      <div className="flex gap-4 items-start mb-4">
        <div className="flex-shrink-0 h-12 w-12 rounded-full overflow-hidden">
          <img 
            src={getImageSrc(testimonial.avatar, getIndex())} 
            alt={`${testimonial.name}'s avatar`}
            className="h-full w-full object-cover"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = fallbackImages[getIndex() % fallbackImages.length];
            }}
          />
        </div>
        <div>
          <div className="font-medium text-white">{testimonial.name}</div>
          <div className="text-sm text-muted-foreground">{testimonial.role}</div>
          <div className="text-xs text-muted-foreground/70">{testimonial.date}</div>
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
