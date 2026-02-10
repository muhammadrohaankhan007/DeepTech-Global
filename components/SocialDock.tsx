'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, MessageCircle, Instagram } from 'lucide-react';

const MAnchor = motion.a as any;

const socialLinks = [
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/posts/deeptech-global_deeptech-innovation-launch-activity-7427026224297947136-csDh?utm_source=share&utm_medium=member_android&rcm=ACoAAGJ13UwBSGsekm2rVG3XKEdsIpkYEd5sZO0',
    icon: Linkedin,
  },
  {
    name: 'WhatsApp',
    href: 'https://chat.whatsapp.com/BmJvYTspZAs3QBn5rfNPXG',
    icon: MessageCircle,
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/global.deeptech/',
    icon: Instagram,
  },
];

export const SocialDock: React.FC = () => {
  return (
    <div className="fixed bottom-12 left-10 z-[150] hidden md:flex flex-col items-center gap-5">
      {socialLinks.map((social) => (
        <MAnchor
          key={social.name}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ 
            scale: 1.1,
            color: '#7DA0CA',
          }}
          className="text-white/30 transition-all duration-300 relative group"
          aria-label={social.name}
        >
          {/* Subtle Glow Effect on Hover */}
          <div className="absolute inset-0 bg-brand-slate/20 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
          
          <social.icon 
            size={20} 
            strokeWidth={1.5} 
            className="relative z-10 drop-shadow-[0_0_8px_rgba(125,160,202,0)] group-hover:drop-shadow-[0_0_8px_rgba(125,160,202,0.6)]" 
          />
        </MAnchor>
      ))}
      
      {/* Decorative Line linking to the bottom corner info */}
      <div className="w-px h-12 bg-gradient-to-b from-white/10 to-transparent mt-2" />
    </div>
  );
};