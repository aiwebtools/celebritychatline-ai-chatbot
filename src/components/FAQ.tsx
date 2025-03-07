
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "Is this an actual phone line to celebrities?",
    answer: "No, Celebrity Chatline GPT is entirely text-based. It's a sophisticated AI chat interface powered by ChatGPT that simulates text conversations with celebrities based on their public personas. There are no actual phone calls or voice interactions - all communication happens through text chat."
  },
  {
    question: "How accurate are the celebrity impersonations?",
    answer: "Our AI technology has been trained to accurately mimic the speech patterns, knowledge base, and personality traits of various celebrities. While it's an AI simulation and not the actual person, users consistently report that the experience feels remarkably authentic and true to the celebrity's public persona."
  },
  {
    question: "Which celebrities are available?",
    answer: "Celebrity Chatline GPT can impersonate a wide range of celebrities, public figures, and characters from entertainment, sports, politics, history, and more. You can request any well-known personality, and the AI will adapt to create an authentic conversation experience based on their public persona."
  },
  {
    question: "Is this connected to the real celebrities?",
    answer: "No, Celebrity Chatline GPT uses advanced AI to create simulated text conversations based on public information about celebrities. These are not connections to the actual individuals but rather AI-generated responses designed to mimic their communication style and knowledge."
  },
  {
    question: "Can I request any celebrity?",
    answer: "Yes! You can request conversations with virtually any well-known celebrity, historical figure, or fictional character. Simply specify who you'd like to chat with when you start using the service."
  },
  {
    question: "Are these conversations private?",
    answer: "Your conversations are subject to OpenAI's privacy policy. We recommend reviewing their terms for complete details on data handling and privacy practices."
  },
  {
    question: "Is there a limit to how much I can chat?",
    answer: "Usage limits follow the standard OpenAI ChatGPT policies. Premium users may have higher usage limits compared to free accounts."
  }
];

const FAQ: React.FC = () => {
  return (
    <section id="faq" className="py-16 md:py-24 bg-dark-lighter relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute -top-64 -right-64 w-96 h-96 bg-neon-cyan/5 rounded-full filter blur-3xl"></div>
      
      <div className="section-container">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-heading">Frequently Asked Questions</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about the Celebrity Chatline GPT text chat experience.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto divide-y divide-white/10">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="py-5">
      <button 
        className="flex justify-between items-center w-full text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg font-medium text-white">{question}</h3>
        <span className="ml-6 flex-shrink-0 text-neon-cyan">
          {isOpen ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
        </span>
      </button>
      
      {isOpen && (
        <div className="mt-3 text-base text-muted-foreground">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

export default FAQ;
