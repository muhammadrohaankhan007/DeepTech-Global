'use client';

import React from 'react';
import { motion } from 'framer-motion';

const MDiv = motion.div as any;

const audiences = [
  { 
    id: 'tech', 
    label: 'PROTOCOL 01',
    title: 'Tech enthusiasts', 
    text: 'Witness hardware prototypes that defy current engineering limits and redefine physical infrastructure.', 
    icon: '⚡', 
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800' 
  },
  { 
    id: 'ai', 
    label: 'PROTOCOL 02',
    title: 'AI enthusiasts', 
    text: 'Explore neural systems designed for national sovereignty and specialized industrial control.', 
    icon: '🧠', 
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800' 
  },
  { 
    id: 'biotech', 
    label: 'PROTOCOL 03',
    title: 'Biotech pioneers', 
    text: 'Syn-bio breakthroughs that will redefine longevity, healthcare, and national food security.', 
    icon: '🧬', 
    image: 'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&q=80&w=800' 
  },
  { 
    id: 'quantum', 
    label: 'PROTOCOL 04',
    title: 'Quantum analysts', 
    text: 'Hardware-level sensing and computation nodes for mission-critical high-frontier tasks.', 
    icon: '💠', 
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=800' 
  },
  { 
    id: 'vc', 
    label: 'PROTOCOL 05',
    title: 'Venture capitalists', 
    text: 'Access the pipeline of Pakistan’s first deeptech unicorns and sovereign industrial assets.', 
    icon: '💰', 
    image: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&q=80&w=800' 
  },
  { 
    id: 'sustainability', 
    label: 'PROTOCOL 06',
    title: 'Climate strategists', 
    text: 'Scalable energy solutions and advanced materials science for a resilient global future.', 
    icon: '🌍', 
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=800' 
  },
];

export const WhyAttend: React.FC = () => {
  return (
    <section id="why-attend" className="py-40 bg-black px-6 md:px-24 overflow-hidden antialiased relative">
      <div className="max-w-7xl mx-auto">
        <MDiv 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24 space-y-4"
        >
          <span className="text-[10px] font-black text-brand-blue tracking-[1em] uppercase block mb-2 font-sans">
            Audience Nodes
          </span>
          <h2 className="text-[2.5rem] md:text-[4rem] font-sans font-[300] text-white tracking-[0.3rem] uppercase leading-tight">
            WHY <span className="text-brand-blue font-[500]">ATTEND?</span>
          </h2>
          <div className="w-24 h-px bg-white/10 mx-auto mt-8" />
        </MDiv>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {audiences.map((audience, idx) => (
            <MDiv
              key={audience.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              whileHover={{ scale: 1.02, y: -8 }}
              className="group relative flex flex-col justify-end min-h-[520px] bg-[#050505] border border-white/10 rounded-[2.5rem] overflow-hidden transition-all duration-500 hover:border-brand-blue/30 shadow-2xl"
            >
              <div className="absolute inset-0 z-0 overflow-hidden">
                <img src={audience.image} alt={audience.title} className="w-full h-full object-cover grayscale brightness-[0.2] group-hover:grayscale-0 group-hover:brightness-50 group-hover:scale-110 transition-all duration-1000" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent z-10" />
              </div>
              
              <div className="relative z-20 p-10 space-y-6 text-left">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-3xl group-hover:bg-brand-blue/20 group-hover:border-brand-blue/40 transition-all duration-500 shadow-xl">
                  {audience.icon}
                </div>
                
                <div className="space-y-6">
                  <div className="space-y-2">
                    <span className="text-[12px] font-sans font-[700] text-brand-slate tracking-[0.15rem] uppercase block">
                      {audience.label}
                    </span>
                    <h3 className="text-[1.6rem] font-sans font-[500] text-white uppercase tracking-tight leading-tight transition-colors">
                      {audience.title}
                    </h3>
                  </div>
                  
                  <p className="text-[18px] font-sans font-[300] leading-[1.6] text-brand-offwhite tracking-wide max-w-[320px] mb-10">
                    {audience.text}
                  </p>
                </div>
              </div>
            </MDiv>
          ))}
        </div>
      </div>
    </section>
  );
};