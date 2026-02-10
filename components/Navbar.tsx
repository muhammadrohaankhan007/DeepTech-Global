'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const MDiv = motion.div as any;

const navLinks = [
  { name: 'HOME', href: '#hero' },
  { name: 'ABOUT', href: '#about' },
  { name: 'SUMMIT 2026', href: '#summit-2026' },
  { name: 'CORE', href: '#core' },
  { name: 'WHY JOIN', href: '#architects-of-change' },
  { name: 'CONTACT', href: '#contact' },
];

const BrandLogo = () => (
  <div className="flex items-center gap-[10px] h-[32px] select-none group">
    {/* Geometric Twisted Pentagon with Mobius Loop Look */}
    <svg 
      width="32" 
      height="32" 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className="drop-shadow-[0_0_10px_rgba(0,210,255,0.4)] transition-transform duration-500 group-hover:scale-105"
    >
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00D2FF" />
          <stop offset="100%" stopColor="#0052D4" />
        </linearGradient>
      </defs>
      
      {/* Outer Pentagon Shell */}
      <path 
        d="M50 5L95 38L78 92H22L5 38L50 5Z" 
        fill="url(#logoGradient)" 
      />
      
      {/* Mobius Ribbon Effects (3D Facets) */}
      <path 
        d="M50 5L95 38L50 50L5 38Z" 
        fill="white" 
        fillOpacity="0.15" 
      />
      <path 
        d="M95 38L78 92L50 50Z" 
        fill="black" 
        fillOpacity="0.1" 
      />
      <path 
        d="M22 92L5 38L50 50Z" 
        fill="black" 
        fillOpacity="0.15" 
      />
      
      {/* Hollow Core Pentagon (Inner Void) */}
      <path 
        d="M50 28L78 48L67 80H33L22 48L50 28Z" 
        fill="#050505" 
      />
    </svg>

    {/* Typography: DEEP (Bold 700) + Tech (Light 300) */}
    <div className="flex items-center font-montserrat text-white leading-none">
      <span className="text-[21px] font-[700] tracking-[-0.01em] uppercase">DEEP</span>
      <span className="text-[21px] font-[300] tracking-[-0.01em]">Tech</span>
    </div>
  </div>
);

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const scrollPos = window.scrollY + 250;
      const sections = navLinks.map(link => link.href.substring(1));
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPos >= offsetTop && scrollPos < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setIsMobileMenuOpen(false);
    if (href.startsWith('#')) {
      e.preventDefault();
      const sectionId = href.substring(1);
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        window.history.pushState(null, '', href);
      }
    }
  };

  return (
    <header className={`fixed top-0 left-0 z-[100] w-full px-[24px] py-6 transition-all duration-500 ${scrolled ? 'bg-black/95 backdrop-blur-[10px] border-b border-white/5' : 'bg-transparent'}`}>
      <nav className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="#hero" onClick={(e) => handleClick(e, '#hero')} className="flex items-center flex-shrink-0 outline-none hover:opacity-80 transition-opacity">
          <BrandLogo />
        </a>
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleClick(e, link.href)}
              className={`px-6 py-4 text-[10px] font-bold tracking-[0.45em] uppercase transition-all duration-300 rounded-full
                ${activeSection === link.href.substring(1) 
                  ? 'text-brand-slate bg-white/10' 
                  : 'text-white/30 hover:text-white hover:bg-white/[0.05]'
                }`}
            >
              {link.name}
            </a>
          ))}
        </div>
        <button className="lg:hidden p-4 text-white/30 hover:text-white transition-colors" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Toggle Navigation">
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>
      <AnimatePresence>
        {isMobileMenuOpen && (
          <MDiv
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            className="absolute top-24 left-6 right-6 bg-black/98 backdrop-blur-3xl border border-white/10 rounded-[2.5rem] p-12 flex flex-col items-center gap-10 lg:hidden shadow-2xl"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className={`text-[14px] font-medium tracking-[0.3em] uppercase ${activeSection === link.href.substring(1) ? 'text-brand-slate' : 'text-white/40'}`}
              >
                {link.name}
              </a>
            ))}
          </MDiv>
        )}
      </AnimatePresence>
    </header>
  );
};