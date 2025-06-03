import React from 'react';
import { Phone, Mail, ExternalLink } from 'lucide-react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-lighter pt-12 pb-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <Logo withTagline />
            <p className="text-muted-foreground">
              Top-rated free AI tools for celebrity chat. Experience lifelike conversations with AI-powered celebrity personalities using our advanced AI web tools that accurately mimic speech patterns, knowledge, and character traits.
            </p>
            <div className="text-xs text-muted-foreground">
              <strong>Keywords:</strong> ai tools, free ai tools, ai web tools, celebrity chat ai, chatgpt, gpt-4o, artificial intelligence
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Free AI Tools</h3>
            <ul className="space-y-3">
              <FooterLink href="https://chatgpt.com/g/g-pCTnTEwn4-celebrity-chatline-gpt">Celebrity Chat AI Tool</FooterLink>
              <FooterLink href="#faq">AI Tools FAQ</FooterLink>
              <FooterLink href="#disclaimer">AI Tools Disclaimer</FooterLink>
              <FooterLink href="https://www.aiwebtools.ai">More Free AI Web Tools</FooterLink>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">AI Web Tools Legal</h3>
            <ul className="space-y-3">
              <FooterLink href="https://openai.com/policies/privacy-policy/">Privacy Policy</FooterLink>
              <FooterLink href="https://aiwebtools.ai/terms-of-services">Terms of Service</FooterLink>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact AI Web Tools</h3>
            <ul className="space-y-3">
              <li>
                <a href="tel:+14758008096" className="text-muted-foreground flex items-center hover:text-neon-cyan transition-colors">
                  <Phone className="h-4 w-4 mr-2" />
                  (475) 800-8096
                </a>
              </li>
              <li>
                <a href="mailto:contact@ai-webtools.com" className="text-muted-foreground flex items-center hover:text-neon-cyan transition-colors">
                  <Mail className="h-4 w-4 mr-2" />
                  contact@ai-webtools.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-6 border-t border-white/10">
          <p className="text-sm text-muted-foreground">
            © 2025 <a href="https://www.aiwebtools.ai" className="hover:text-neon-cyan transition-colors" title="AI Web Tools - Free AI Tools Platform">AI WEB TOOLS LLC</a> - Leading provider of free AI tools and AI web tools. All rights reserved.
          </p>
          
          <a 
            href="https://www.aiwebtools.ai" 
            className="mt-4 md:mt-0 flex items-center gap-2 bg-gradient-to-r from-neon-cyan to-neon-magenta text-black font-medium px-4 py-2 rounded-full text-sm hover:opacity-90 transition-opacity"
            title="Explore more free AI tools and AI web tools"
          >
            More Free AI Web Tools
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
};

interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
}

const FooterLink: React.FC<FooterLinkProps> = ({ href, children }) => (
  <li>
    <a 
      href={href} 
      className="text-muted-foreground hover:text-neon-cyan transition-colors"
    >
      {children}
    </a>
  </li>
);

export default Footer;
