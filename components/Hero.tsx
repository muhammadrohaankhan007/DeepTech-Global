'use client';

import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const MDiv = motion.div as any;
const MCircle = motion.circle as any;

const NeuralTopography = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const draw = () => {
      time += 0.002;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.strokeStyle = '#0C0C0F';
      ctx.lineWidth = 0.5;

      const step = 45;
      const lines = Math.floor(canvas.height / step) + 2;
      
      const latticeCenterX = canvas.width * 0.75;
      const latticeCenterY = canvas.height * 0.5;

      for (let i = 0; i < lines; i++) {
        ctx.beginPath();
        const baseY = i * step;

        for (let x = 0; x <= canvas.width; x += 25) {
          const distToMouse = Math.sqrt(Math.pow(x - mouse.x, 2) + Math.pow(baseY - mouse.y, 2));
          const mouseEffect = Math.max(0, (300 - distToMouse) / 300) * 45;
          
          const dx = x - latticeCenterX;
          const dy = baseY - latticeCenterY;
          const distToLattice = Math.sqrt(dx * dx + dy * dy);
          const pullIntensity = Math.max(0, (500 - distToLattice) / 500);
          const pullEffect = Math.sin(distToLattice * 0.02 - time * 2) * 15 * pullIntensity;
          
          const y = baseY + 
            Math.sin(x * 0.0012 + time + i * 0.4) * 18 + 
            Math.cos(x * 0.0025 - time * 0.6) * 10 - 
            mouseEffect + 
            pullEffect;

          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.stroke();
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    window.addEventListener('resize', resize);
    const handleMouseMove = (e: MouseEvent) => {
      setMouse({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);

    resize();
    draw();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [mouse]);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 z-0 opacity-100 pointer-events-none"
    />
  );
};

const QuantumNeuralLattice = () => {
  return (
    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[45%] h-[70vh] flex items-center justify-center pointer-events-none z-10 overflow-hidden hidden lg:flex">
      <MDiv
        animate={{ 
          y: [-12, 12, -12],
          rotateY: [0, 360],
          rotateX: [10, -10, 10]
        }}
        transition={{ 
          y: { duration: 8, repeat: Infinity, ease: "easeInOut" },
          rotateY: { duration: 60, repeat: Infinity, ease: "linear" },
          rotateX: { duration: 20, repeat: Infinity, ease: "easeInOut" }
        }}
        className="relative w-[500px] h-[500px] flex items-center justify-center will-change-transform"
        style={{ transformStyle: 'preserve-3d', perspective: '1500px' }}
      >
        <svg viewBox="0 0 500 500" className="absolute w-full h-full opacity-60">
          <defs>
            <linearGradient id="chromeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.4" />
              <stop offset="50%" stopColor="#7DA0CA" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#000000" stopOpacity="0.4" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="2.5" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          
          {[...Array(12)].map((_, i) => {
            const angle = (i / 12) * Math.PI * 2;
            const x1 = 250 + Math.cos(angle) * 120;
            const y1 = 250 + Math.sin(angle) * 120;
            const x2 = 250 + Math.cos(angle + Math.PI/3) * 180;
            const y2 = 250 + Math.sin(angle + Math.PI/3) * 180;
            
            return (
              <g key={i}>
                <line 
                  x1={x1} y1={y1} x2={x2} y2={y2} 
                  stroke="url(#chromeGradient)" 
                  strokeWidth="0.5" 
                  strokeDasharray="4 2"
                />
                <line 
                  x1="250" y1="250" x2={x1} y2={y1} 
                  stroke="#7DA0CA" 
                  strokeWidth="0.2" 
                  opacity="0.3"
                />
                <MCircle
                  r="1.5"
                  fill="#FFFFFF"
                  filter="url(#glow)"
                  initial={{ offsetDistance: "0%" }}
                  animate={{ 
                    cx: [x1, x2],
                    cy: [y1, y2],
                    opacity: [0, 1, 0]
                  }}
                  transition={{ 
                    duration: 3, 
                    delay: i * 0.5, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                />
              </g>
            );
          })}
        </svg>

        <div className="absolute w-12 h-12 flex items-center justify-center">
           <MDiv
             animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0.8, 0.3] }}
             transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
             className="w-full h-full bg-white rounded-full blur-[10px] shadow-[0_0_40px_rgba(255,255,255,0.8)]"
           />
           <div className="absolute w-2 h-2 bg-white rounded-full z-20" />
        </div>

        {[...Array(20)].map((_, i) => {
          const distance = 100 + Math.random() * 150;
          const angle = Math.random() * Math.PI * 2;
          const z = (Math.random() - 0.5) * 300;
          
          return (
            <div
              key={i}
              className="absolute w-4 h-4 bg-brand-slate/20 backdrop-blur-md rounded-full border border-white/20 shadow-[0_0_15px_rgba(125,160,202,0.4)]"
              style={{ 
                left: `calc(50% + ${Math.cos(angle) * distance}px)`,
                top: `calc(50% + ${Math.sin(angle) * distance}px)`,
                transform: `translateZ(${z}px)`,
              }}
            >
               <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent" />
            </div>
          );
        })}
      </MDiv>
      
      <div className="absolute w-[600px] h-[600px] bg-brand-slate/5 blur-[150px] rounded-full pointer-events-none" />
    </div>
  );
};

export const Hero: React.FC = () => {
  return (
    <section 
      id="hero" 
      className="relative min-h-[85vh] w-full flex flex-col items-start justify-start bg-black overflow-hidden"
    >
      <NeuralTopography />

      <div className="max-w-7xl mx-auto w-full relative z-20 px-6 md:px-[24px] pt-[120px] pb-40">
        <div className="flex flex-col items-start text-left">
          <MDiv
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
            className="flex flex-col items-start"
          >
            <div className="space-y-6">
              <h1 className="text-[2.75rem] md:text-[3.5rem] lg:text-[4rem] font-sans font-light leading-[1.05] tracking-[0.03em] text-brand-offwhite uppercase">
                FROM <span className="text-brand-slate font-medium">IDEAS</span> TO <br />
                INDUSTRIES.
              </h1>
              
              <p className="max-w-[550px] text-[1.375rem] text-[#D1D1D1] font-normal tracking-wide leading-[1.5] font-sans">
                DeepTech represents the shift from digital convenience to physical breakthrough. 
                Our mission is to catalyze the transition of Pakistan’s complex scientific research into 
                scalable industrial reality. We provide the infrastructure where deep intelligence 
                meets the patient capital required to build the next century.
              </p>
            </div>

            <div className="pt-10">
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="group relative px-16 py-6 bg-transparent border border-brand-slate/30 text-[11px] font-bold tracking-[0.5em] text-brand-slate uppercase transition-all duration-700 hover:border-white hover:text-white rounded-sm overflow-hidden"
              >
                <span className="relative z-10">INITIATE UPLINK</span>
                <div className="absolute inset-0 bg-white/5 translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[0.19, 1, 0.22, 1]" />
              </button>
            </div>
          </MDiv>
        </div>
      </div>

      <QuantumNeuralLattice />

      <div className="absolute bottom-12 left-6 md:left-[24px] hidden md:flex flex-col gap-2 opacity-5 pointer-events-none">
        <div className="flex gap-4 items-center">
          <div className="w-12 h-[0.5px] bg-white" />
          <div className="w-1.5 h-1.5 bg-brand-slate rounded-full" />
        </div>
        <span className="text-[9px] font-mono tracking-[0.6em] uppercase text-brand-gray">Scientific Collective // Nexus.Lattice.Core</span>
      </div>
    </section>
  );
};