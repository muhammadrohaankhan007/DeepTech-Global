'use client';

import React from 'react';
import { motion } from 'framer-motion';

const MDiv = motion.div as any;

interface WhyAttendDetailProps {
  categoryId: string;
}

const detailsData: Record<string, { title: string; fullText: string; image: string; highlight: string }> = {
  tech: {
    title: 'TECH ENTHUSIASTS',
    fullText: 'Explore the next generation of hardware. From robotics to autonomous drones, discover the physical infrastructure being built right here in Pakistan. Join our hardware workshops and see the blueprints of tomorrow.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200',
    highlight: 'HARDWARE REVOLUTION'
  },
  ai: {
    title: 'AI ENTHUSIASTS',
    fullText: 'Neural systems designed for more than just text generation. See AI applied to industrial control, predictive maintenance, and national-level logistics. DeepTech AI is the brain of the ecosystem.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200',
    highlight: 'NEURAL INFRASTRUCTURE'
  },
  biotech: {
    title: 'BIOTECH PIONEERS',
    fullText: 'Pakistan’s biodiversity meets advanced synthetic biology. Discover local research in gene editing, sustainable pharmacology, and next-gen agriculture that ensures food security for millions.',
    image: 'https://images.unsplash.com/photo-1532187863486-abf9d39d9995?q=80&w=1200',
    highlight: 'SYN-BIO FUTURE'
  },
  quantum: {
    title: 'QUANTUM ANALYSTS',
    fullText: 'High-frontier computation and sensing. Learn about the sovereign quantum assets being developed to protect and accelerate our national data infrastructure.',
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=1200',
    highlight: 'QUANTUM SOVEREIGNTY'
  },
  vc: {
    title: 'VENTURE CAPITALISTS',
    fullText: 'The pipeline for the next decade of growth starts here. Connect with founders who aren’t just building apps, but are engineering the foundations of a new economy.',
    image: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?q=80&w=1200',
    highlight: 'UNPRECEDENTED GROWTH'
  },
  sustainability: {
    title: 'CLIMATE STRATEGISTS',
    fullText: 'Deeptech solutions for a heating planet. From carbon capture prototypes to localized renewable energy grids, witness the science of sustainability in action.',
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=1200',
    highlight: 'RESILIENT PLANET'
  }
};

export const WhyAttendDetail: React.FC<WhyAttendDetailProps> = ({ categoryId }) => {
  const data = detailsData[categoryId] || detailsData.tech;

  return (
    <MDiv 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-black pt-32 px-6 md:px-24"
    >
      <div className="max-w-6xl mx-auto">
        <a 
          href="#/" 
          className="group flex items-center gap-4 text-[10px] font-black text-white/40 hover:text-white tracking-[0.5em] uppercase mb-20 transition-all"
        >
          <span className="group-hover:-translate-x-2 transition-transform">←</span> 
          Return to Core Landing
        </a>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-10">
            <div className="space-y-4">
              <span className="text-[10px] font-black text-brand-blue tracking-[1em] uppercase block">
                {data.highlight}
              </span>
              <h1 className="text-6xl md:text-8xl font-impact text-white tracking-tighter uppercase italic leading-[1.1] silver-gradient-text overflow-visible pb-4">
                {data.title}
              </h1>
            </div>
            
            <p className="text-slate-400 text-xl md:text-2xl font-light leading-relaxed tracking-wide font-sans">
              {data.fullText}
            </p>

            <button 
              onClick={() => window.location.hash = '#/'}
              className="group relative w-auto min-w-fit px-12 py-5 bg-white text-black rounded-full font-black text-[11px] uppercase tracking-[0.5em] hover:bg-brand-blue hover:text-white transition-all shadow-[0_0_40px_rgba(255,255,255,0.1)] whitespace-nowrap overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-3">
                DISCOVER DEEPTECH
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
              </span>
            </button>
          </div>

          <div className="relative h-[600px] rounded-[3rem] overflow-hidden border border-white/10 group shadow-2xl">
             <img 
               src={data.image} 
               className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 brightness-50 group-hover:brightness-100 group-hover:scale-105" 
               alt={data.title} 
             />
             <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </MDiv>
  );
};