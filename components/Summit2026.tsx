'use client';

import React from 'react';
import { motion } from 'framer-motion';

const MDiv = motion.div as any;

const schedule = [
  {
    day: "01",
    phase: "Discovery",
    title: "Unveiling Frontiers",
    description: "Unveiling the frontier of Pakistani research. Deep-dive into quantum sensing, sustainable energy, and biotech prototypes.",
    icon: "🔬",
    image: "https://images.unsplash.com/photo-1614728263952-84ea256f9679?auto=format&fit=crop&q=80&w=800"
  },
  {
    day: "02",
    phase: "Strategy",
    title: "Lab to Boardroom",
    description: "Bridging the gap between pure science and venture strategy. Networking with global capital and scale architects.",
    icon: "🏗️",
    image: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&q=80&w=800"
  },
  {
    day: "03",
    phase: "Scale",
    title: "Tomorrow's Unicorns",
    description: "Showcasing the multi-million dollar startups of tomorrow. Investor pitches, ecosystem expansion, and national sovereignty assets.",
    icon: "🚀",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
  }
];

const SummitCard: React.FC<{ item: typeof schedule[0] }> = ({ item }) => {
  return (
    <MDiv
      initial={{ opacity: 0.5, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: false, amount: 0.8 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
      className="flex-shrink-0 w-[85vw] md:w-[400px] h-[550px] scroll-snap-align-center relative group"
    >
      <div className="absolute inset-0 bg-black/40 backdrop-blur-md border border-white/10 rounded-[3rem] overflow-hidden transition-all duration-700 group-hover:border-brand-blue/50 shadow-2xl">
        <div className="absolute inset-0 z-0">
          <img src={item.image} alt={item.title} className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-60 transition-all duration-1000 group-hover:scale-110" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
        </div>
        
        {/* Subtle Day Counter Indicator */}
        <MDiv 
          animate={{ opacity: [0.02, 0.05, 0.02] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 right-0 p-8 text-[12rem] font-sans font-black text-white pointer-events-none select-none"
        >
          {item.day}
        </MDiv>

        <div className="relative z-10 h-full p-10 flex flex-col justify-end gap-6">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-brand-slate/10 flex items-center justify-center text-xl text-brand-slate">
                {item.icon}
              </span>
              <span className="text-[12px] font-sans font-[700] text-brand-slate tracking-[0.1rem] uppercase">
                PHASE {item.day} • {item.phase}
              </span>
            </div>
            <h3 className="text-[1.8rem] font-sans font-[500] text-white uppercase leading-[1.1] tracking-tight">
              {item.title}
            </h3>
          </div>
          <p className="text-[18px] font-sans font-[300] leading-[1.5] text-brand-gray tracking-wide">
            {item.description}
          </p>
        </div>
      </div>
    </MDiv>
  );
};

export const Summit2026: React.FC = () => {
  return (
    <section id="summit-2026" className="relative py-32 bg-black overflow-visible flex flex-col scroll-mt-[100px]">
      {/* Background Atmosphere */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-[20%] left-[-10%] w-[50vw] h-[50vw] bg-brand-blue/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pb-20 text-center overflow-visible">
        <MDiv
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-4 overflow-visible"
        >
          <span className="text-[10px] font-black text-brand-blue tracking-[1.2em] uppercase block">
            Exclusive Roadmap
          </span>
          <h2 className="text-[2.5rem] md:text-[4rem] font-sans font-[300] text-white tracking-[0.3rem] uppercase leading-tight pb-4">
            SUMMIT 2026: THE JOURNEY
          </h2>
          <div className="w-24 h-px bg-white/10 mx-auto" />
        </MDiv>
      </div>

      <div className="w-full relative px-6 md:px-[24px] overflow-visible">
        <div className="flex gap-8 overflow-x-auto no-scrollbar scroll-snap-type-x mandatory pb-12 px-4 overflow-visible">
          {schedule.map((item, idx) => (
            <SummitCard key={idx} item={item} />
          ))}

          {/* Call to Action Final Card */}
          <MDiv 
            initial={{ opacity: 0.5, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.8 }}
            className="flex-shrink-0 w-[85vw] md:w-[450px] h-[550px] scroll-snap-align-center relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/30 via-black to-brand-purple/40 backdrop-blur-3xl border border-white/20 rounded-[3rem] overflow-hidden transition-all duration-700 group-hover:border-brand-purple/70 shadow-[0_0_50px_rgba(168,85,247,0.4)]">
              <div className="absolute inset-0 z-0 opacity-40 group-hover:opacity-70 transition-opacity duration-1000">
                <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-[conic-gradient(from_0deg,transparent_0deg,rgba(0,85,255,0.2)_120deg,transparent_180deg)] animate-spin [animation-duration:8s]" />
              </div>
              <div className="relative z-10 h-full p-10 flex flex-col justify-center items-center text-center gap-10">
                <div className="space-y-4">
                   <span className="text-brand-purple text-[10px] font-black tracking-[0.8em] uppercase block mb-4">The Finale</span>
                   <h3 className="text-[2rem] md:text-[3rem] font-sans font-[300] text-white uppercase tracking-tight leading-tight">
                     READY TO <br/><span className="text-brand-blue font-[500]">ARCHITECT?</span>
                   </h3>
                </div>
                <div className="space-y-8">
                  <p className="text-[#B0B0B0] text-lg font-[300] leading-relaxed max-w-xs mx-auto italic">
                    Secure your credentials to join the most exclusive scientific assembly in the region.
                  </p>
                  <button 
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    className="group relative w-auto min-w-fit px-12 py-4 bg-white text-black rounded-full font-black text-[11px] uppercase tracking-widest transition-all overflow-hidden hover:scale-105 active:scale-95 shadow-[0_0_50px_rgba(255,255,255,0.2)] whitespace-nowrap"
                  >
                    <span className="relative z-10">APPLY NOW</span>
                    <div className="absolute inset-0 bg-brand-blue translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500" />
                    <span className="absolute inset-0 flex items-center justify-center text-white font-black text-[11px] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 whitespace-nowrap">
                      APPLY NOW
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </MDiv>
        </div>
      </div>
    </section>
  );
};