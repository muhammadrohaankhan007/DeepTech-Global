'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mic2, 
  MessageSquare, 
  BookOpen, 
  Globe, 
  Users, 
  DollarSign, 
  Cpu, 
  Zap,
  Dna,
  TrendingUp,
  Briefcase,
  ShieldCheck
} from 'lucide-react';

const MDiv = motion.div as any;

const perks = [
  { label: "Open Mic Sessions", icon: <Mic2 size={16} /> },
  { label: "High-Stakes Debates", icon: <MessageSquare size={16} /> },
  { label: "Strategic Seminars", icon: <BookOpen size={16} /> },
  { label: "Global Webinars", icon: <Globe size={16} /> },
  { label: "In-Person Consultation", icon: <Users size={16} /> },
  { label: "VC Matchmaking", icon: <DollarSign size={16} /> }
];

const people = [
  { label: "DeepTech Engineers", icon: <Cpu size={16} /> },
  { label: "Venture Capitalists", icon: <Zap size={16} /> },
  { label: "Startup Founders", icon: <TrendingUp size={16} /> },
  { label: "Research Scientists", icon: <Dna size={16} /> },
  { label: "Policy Makers", icon: <Briefcase size={16} /> },
  { label: "Medical Innovators", icon: <ShieldCheck size={16} /> }
];

const WarpSpeedBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let stars: any[] = [];
    let animationFrame: number;
    const starCount = 400;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init();
    };

    const init = () => {
      stars = [];
      for (let i = 0; i < starCount; i++) {
        stars.push({
          x: (Math.random() - 0.5) * canvas.width,
          y: (Math.random() - 0.5) * canvas.height,
          z: Math.random() * canvas.width,
          pz: 0
        });
      }
    };

    const animate = () => {
      ctx.fillStyle = 'black';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      ctx.save();
      ctx.translate(canvas.width / 2, canvas.height / 2);
      
      stars.forEach(s => {
        s.z -= 15; // Speed factor
        if (s.z <= 0) {
          s.z = canvas.width;
          s.x = (Math.random() - 0.5) * canvas.width;
          s.y = (Math.random() - 0.5) * canvas.height;
        }

        const sx = (s.x / s.z) * canvas.width;
        const sy = (s.y / s.z) * canvas.height;
        const r = (1 - s.z / canvas.width) * 2;
        
        ctx.beginPath();
        ctx.arc(sx, sy, r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 242, 255, ${1 - s.z / canvas.width})`;
        ctx.fill();

        // Draw streak
        if (s.pz > 0) {
           const psx = (s.x / s.pz) * canvas.width;
           const psy = (s.y / s.pz) * canvas.width;
           ctx.beginPath();
           ctx.moveTo(sx, sy);
           ctx.lineTo(psx, psy);
           ctx.strokeStyle = `rgba(0, 85, 255, ${(1 - s.z / canvas.width) * 0.3})`;
           ctx.lineWidth = r / 2;
           ctx.stroke();
        }
        s.pz = s.z;
      });
      
      ctx.restore();
      animationFrame = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', resize);
    resize();
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 pointer-events-none z-0" 
    />
  );
};

const FloatingGlassIcon: React.FC<{ 
  children: React.ReactNode; 
  className?: string; 
  delay?: number; 
}> = ({ 
  children, 
  className, 
  delay = 0 
}) => (
  <MDiv
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ 
      opacity: [0.1, 0.3, 0.1],
      y: [0, -30, 0],
      rotate: [0, 5, 0],
    }}
    transition={{ 
      duration: 12, 
      repeat: Infinity, 
      delay,
      ease: "easeInOut" 
    }}
    className={`absolute pointer-events-none z-10 ${className}`}
  >
    <div className="p-8 rounded-[2rem] bg-white/[0.02] backdrop-blur-2xl border border-white/5 shadow-2xl">
      {children}
    </div>
  </MDiv>
);

const Tag: React.FC<{ 
  text: string; 
  icon: React.ReactNode; 
}> = ({ text, icon }) => (
  <div className="flex items-center gap-4 px-10 py-5 bg-white/[0.04] backdrop-blur-md border border-white/10 rounded-full whitespace-nowrap group hover:border-brand-blue/40 transition-all duration-300 shadow-xl relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
    <span className="text-brand-cyan transition-all duration-300">
      {icon}
    </span>
    <span className="text-[11px] font-sans font-[700] tracking-[0.2rem] uppercase text-white/50 group-hover:text-white transition-colors">
      {text}
    </span>
  </div>
);

export const WhyJoin: React.FC = () => {
  return (
    <section 
      id="architects-of-change" 
      className="relative py-[180px] bg-black overflow-hidden flex flex-col items-center scroll-mt-[100px]"
    >
      <WarpSpeedBackground />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,85,255,0.08)_0%,rgba(0,0,0,1)_80%)] z-0" />

      {/* Rizz Illustrations */}
      <FloatingGlassIcon className="top-20 left-20" delay={0}>
        <Cpu size={48} className="text-brand-blue opacity-40" strokeWidth={1} />
      </FloatingGlassIcon>
      <FloatingGlassIcon className="bottom-40 right-20" delay={2}>
        <Dna size={48} className="text-brand-cyan opacity-40" strokeWidth={1} />
      </FloatingGlassIcon>

      <div className="relative z-20 max-w-7xl mx-auto px-6 text-center mb-24">
        <MDiv
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <div className="space-y-6">
            <span className="text-[12px] font-sans font-[700] text-brand-slate tracking-[0.8rem] uppercase block mb-2">
              The Collective
            </span>
            <h2 className="text-[2.5rem] md:text-[4rem] font-sans font-[300] text-white tracking-[0.3rem] uppercase leading-tight">
              WHY JOIN THE <br />
              <span className="text-brand-blue font-[500]">ARCHITECTS OF CHANGE?</span>
            </h2>
          </div>

          <div className="max-w-[900px] mx-auto p-12 bg-white/[0.02] backdrop-blur-2xl border border-white/5 rounded-[3rem] shadow-2xl relative">
             <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-blue/30 to-transparent" />
            <p className="text-[#D1D1D1] text-[18px] md:text-[22px] font-sans font-[300] leading-[1.6] tracking-wide italic">
              'Bridging the gap between Pakistan’s technical brilliance and global market reality. 
              We are shattering the silos—<span className="text-white font-[500]">DeepTech 2026</span> is the mainstream nexus where brilliant technical minds meet strategic capital. This is your laboratory for scale.'
            </p>
          </div>
        </MDiv>
      </div>

      {/* Marquee Tracks */}
      <div className="relative w-full space-y-12 overflow-hidden py-10 z-20">
        <div className="flex w-max">
          <MDiv 
            animate={{ x: [0, -1200] }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="flex gap-10 pr-10"
          >
            {[...perks, ...perks].map((p, i) => <Tag key={i} text={p.label} icon={p.icon} />)}
          </MDiv>
        </div>

        <div className="flex w-max">
          <MDiv 
            animate={{ x: [-1200, 0] }}
            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
            className="flex gap-10 pr-10"
          >
            {[...people, ...people].map((p, i) => <Tag key={i} text={p.label} icon={p.icon} />)}
          </MDiv>
        </div>
      </div>

      <div className="relative z-20 w-full flex justify-center mt-20">
        <MDiv 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-4 opacity-20"
        >
          <div className="w-px h-16 bg-gradient-to-b from-brand-slate to-transparent" />
        </MDiv>
      </div>
    </section>
  );
};