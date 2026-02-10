'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const MDiv = motion.div as any;
const MRect = motion.rect as any;
const MPath = motion.path as any;
const MCircle = motion.circle as any;
const MSvg = motion.svg as any;

const teamLeads = [
  { 
    name: "Muhammad Sohaib", 
    role: "Partnership & Outreach Team Lead",
    id: "sohaib",
    expertise: ["Strategic Scaling", "VC Networking", "Node Expansion"]
  },
  { 
    name: "Muhammad Rohaan", 
    role: "Operations & Management Team Lead",
    id: "rohaan",
    expertise: ["Flux Management", "Process Logic", "Systems Architecture"]
  },
  { 
    name: "Areesha", 
    role: "Content & Design Team Lead",
    id: "areesha",
    expertise: ["Visual Engineering", "Narrative Design", "Brand Synthesis"]
  },
  { 
    name: "Hunzala Najam", 
    role: "Media & Marketing Team Lead",
    id: "hunzala",
    expertise: ["Signal Tuning", "Audience Analysis", "Kinetic Growth"]
  }
];

const CircuitryBackground = () => (
  <div className="absolute inset-0 z-0 pointer-events-none opacity-10 overflow-hidden">
    <svg width="100%" height="100%" className="absolute inset-0">
      <defs>
        <pattern id="circuitry-pattern" width="100" height="100" patternUnits="userSpaceOnUse">
          <path d="M10 10 H90 V90 H10 Z" fill="none" stroke="rgba(0, 85, 255, 0.4)" strokeWidth="0.5" />
          <circle cx="10" cy="10" r="1.5" fill="#00F2FF" />
          <circle cx="90" cy="10" r="1.5" fill="#00F2FF" />
          <circle cx="90" cy="90" r="1.5" fill="#00F2FF" />
          <circle cx="10" cy="90" r="1.5" fill="#00F2FF" />
          <path d="M50 10 V90 M10 50 H90" stroke="rgba(0, 242, 255, 0.2)" strokeWidth="0.5" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#circuitry-pattern)" />
      <MRect
        width="100%"
        height="2"
        fill="rgba(0, 242, 255, 0.3)"
        animate={{ top: ["0%", "100%", "0%"] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute"
      />
    </svg>
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,85,255,0.05)_0%,transparent_70%)]" />
  </div>
);

const EnergyBeam = ({ height = 150, color = "#00F2FF", className = "" }) => (
  <div className={`relative flex flex-col items-center ${className}`} style={{ height }}>
    <div className="w-px h-full relative overflow-hidden" style={{ backgroundColor: `${color}20` }}>
      <MDiv
        animate={{ top: ["-100%", "100%"] }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        className="absolute left-0 w-full h-24 bg-gradient-to-b from-transparent via-white to-transparent"
        style={{ backgroundImage: `linear-gradient(to bottom, transparent, white, transparent)` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-blue/40 to-transparent" />
    </div>
    <div className="absolute bottom-0 w-3 h-3 rounded-full blur-[4px]" style={{ backgroundColor: color }} />
  </div>
);

const BranchingSystem = ({ activeId }: { activeId: string | null }) => (
  <svg className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-32 pointer-events-none z-0 overflow-visible" preserveAspectRatio="none">
    <defs>
      <linearGradient id="cyan-beam" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="#00F2FF" stopOpacity="0" />
        <stop offset="50%" stopColor="#00F2FF" stopOpacity="0.4" />
        <stop offset="100%" stopColor="#00F2FF" stopOpacity="0" />
      </linearGradient>
      <linearGradient id="purple-beam" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="#9D00FF" stopOpacity="0" />
        <stop offset="50%" stopColor="#9D00FF" stopOpacity="0.8" />
        <stop offset="100%" stopColor="#9D00FF" stopOpacity="0" />
      </linearGradient>
    </defs>

    <MPath
      d="M -500 0 L 500 0"
      stroke={activeId ? "url(#purple-beam)" : "url(#cyan-beam)"}
      strokeWidth="2"
      fill="none"
      className="transition-colors duration-700"
    />

    {[-450, -150, 150, 450].map((x, i) => {
      const isThisLead = teamLeads[i]?.id === activeId;
      return (
        <g key={i}>
          <MPath
            d={`M ${x} 0 L ${x} 120`}
            stroke={isThisLead ? "#9D00FF" : "#00F2FF"}
            strokeWidth={isThisLead ? "4" : "1"}
            strokeOpacity={isThisLead ? "1" : "0.2"}
            fill="none"
            className="transition-all duration-500"
          />
          {isThisLead && (
            <MCircle
              cx={x}
              cy="0"
              r="4"
              fill="#9D00FF"
              animate={{ cy: [0, 120] }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              className="filter blur-[1px] shadow-[0_0_10px_#9D00FF]"
            />
          )}
        </g>
      );
    })}
  </svg>
);

const ApexCard = ({ 
  name, 
  role, 
  photo, 
  isHex = false, 
  initials = "", 
  outgoingBeamHeight = 0 
}: { 
  name: string, 
  role: string, 
  photo: string, 
  isHex?: boolean, 
  initials?: string,
  outgoingBeamHeight?: number
}) => {
  const [imgError, setImgError] = useState(false);

  return (
    <MDiv
      animate={{ y: [0, -15, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      className="flex flex-col items-center gap-6 group relative"
    >
      <div className="relative w-72 h-72 flex items-center justify-center">
        {/* Ambient Glow */}
        <MDiv
          animate={{ opacity: [0.3, 0.7, 0.3], scale: [1, 1.05, 1] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute inset-[-10%] bg-brand-blue/20 blur-[60px] rounded-full group-hover:bg-brand-blue/40 transition-colors"
        />
        
        {/* Hexagonal/Circular Frame with Clip-Path */}
        <div 
          className="absolute inset-0 bg-brand-blue/30 p-[2.5px] transition-all duration-700 group-hover:scale-105 group-hover:bg-brand-blue/60 group-hover:shadow-[0_0_40px_rgba(0,85,255,0.7)]"
          style={{ 
            clipPath: isHex ? 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' : 'none', 
            borderRadius: isHex ? '0' : '50%' 
          }}
        >
          <div 
            className="w-full h-full bg-[#050505] relative overflow-hidden"
            style={{ 
              clipPath: isHex ? 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' : 'none', 
              borderRadius: isHex ? '0' : '50%' 
            }}
          >
            {(!photo || imgError) ? (
              <div className="w-full h-full flex items-center justify-center bg-black">
                <span className="text-5xl font-impact text-brand-blue blue-neon-glow opacity-80 group-hover:opacity-100 transition-opacity">
                  {initials || name.split(' ').map(n => n?.[0] || '').join('')}
                </span>
              </div>
            ) : (
              <img 
                src={photo} 
                alt={name}
                onError={() => setImgError(true)}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 brightness-75 group-hover:brightness-110 transition-all duration-700 group-hover:scale-110"
                style={{ objectPosition: 'center 15%' }}
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/40 via-transparent to-transparent opacity-60 group-hover:opacity-10 transition-opacity pointer-events-none" />
          </div>
        </div>

        {/* Outer Orbit Details */}
        <MSvg
          viewBox="0 0 100 100"
          className="absolute inset-[-20%] w-[140%] h-[140%] pointer-events-none opacity-40 group-hover:opacity-100 transition-opacity"
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          <circle cx="50" cy="50" r="48" fill="none" stroke="#00F2FF" strokeWidth="0.2" strokeDasharray="2 10" />
        </MSvg>

        {/* Energy Beam anchored precisely to the bottom point of the frame */}
        {outgoingBeamHeight > 0 && (
          <div className="absolute top-[100%] left-1/2 -translate-x-1/2 -mt-[2px] z-10 pointer-events-none">
            <EnergyBeam height={outgoingBeamHeight} />
          </div>
        )}
      </div>

      <div className="text-center z-10">
        <h3 className="text-3xl font-impact text-white tracking-tighter uppercase italic silver-gradient-text group-hover:blue-neon-glow transition-all duration-500">
          {name}
        </h3>
        <p className="text-brand-cyan font-mono text-[10px] uppercase tracking-[0.5em] mt-2 opacity-80">
          {role}
        </p>
      </div>
    </MDiv>
  );
};

// Fix: Convert LeadBlade to React.FC to properly handle the 'key' prop and fix types
const LeadBlade: React.FC<{ 
  lead: typeof teamLeads[0]; 
  onHover: (id: string | null) => void; 
}> = ({ lead, onHover }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <MDiv
      onMouseEnter={() => { setIsHovered(true); onHover(lead.id); }}
      onMouseLeave={() => { setIsHovered(false); onHover(null); }}
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 5 + Math.random() * 2, repeat: Infinity, ease: "easeInOut" }}
      className="relative flex flex-col items-center group cursor-pointer z-10"
    >
      <AnimatePresence>
        {isHovered && (
          <MDiv
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 10 }}
            className="absolute -top-24 left-1/2 -translate-x-1/2 w-48 p-4 bg-black/80 backdrop-blur-2xl border border-brand-purple/40 rounded-xl shadow-2xl z-20 pointer-events-none"
          >
            <span className="text-[7px] font-mono text-brand-purple uppercase tracking-[0.4em] mb-2 block border-b border-brand-purple/20 pb-1">TECHNICAL_DOSSIER</span>
            <ul className="space-y-1">
              {lead.expertise.map((exp, i) => (
                <li key={i} className="text-[9px] font-mono text-white/60 uppercase">{`> ${exp}`}</li>
              ))}
            </ul>
          </MDiv>
        )}
      </AnimatePresence>

      <div 
        className={`w-56 h-80 bg-white/[0.03] backdrop-blur-xl border border-white/10 relative overflow-hidden transition-all duration-700 shadow-2xl ${isHovered ? 'border-brand-purple/60 shadow-[0_0_40px_rgba(157,0,255,0.2)]' : 'hover:border-brand-blue/30'}`}
        style={{ clipPath: 'polygon(0% 0%, 100% 10%, 100% 100%, 0% 90%)' }}
      >
        <img 
          src={`https://save-the-placeholder.com/400x400?text=${lead.name.split(' ')[0]}`} 
          alt={lead.name}
          className={`w-full h-full object-cover transition-all duration-1000 ${isHovered ? 'grayscale-0 brightness-110 scale-110' : 'grayscale brightness-75 scale-100'}`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
        
        <div className={`absolute inset-0 transition-opacity duration-700 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
            <div className="absolute top-0 left-0 w-full h-px bg-brand-purple blur-[1px]" />
            <div className="absolute bottom-0 left-0 w-full h-px bg-brand-purple blur-[1px]" />
        </div>
      </div>

      <div className="mt-8 text-center px-4">
        <h4 className={`text-base font-impact uppercase italic tracking-tight transition-all duration-500 ${isHovered ? 'text-brand-purple' : 'text-white'}`}>
          {lead.name}
        </h4>
        <p className="text-[8px] font-mono text-white/40 uppercase tracking-[0.4em] mt-2 group-hover:text-brand-blue/60 transition-colors">
          {lead.role}
        </p>
      </div>
    </MDiv>
  );
};

export const Team: React.FC = () => {
  const [activeLeadId, setActiveLeadId] = useState<string | null>(null);

  // Using the high-resolution, professional portrait of Azhar Rizvi as provided by the user
  const azharRizviSource = "https://i.ibb.co/hL4g6rZ/azhar-rizvi.jpg";

  return (
    <section id="team" className="relative py-48 bg-black overflow-hidden flex flex-col items-center scroll-mt-[100px]">
      <CircuitryBackground />
      
      <div className="relative z-20 max-w-7xl mx-auto px-6 text-center mb-48">
        <MDiv
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <span className="text-[12px] font-black text-brand-blue tracking-[1em] uppercase block mb-4 font-mono">
            Command_Authority
          </span>
          <h2 className="text-7xl md:text-9xl font-impact tracking-tighter uppercase italic silver-gradient-text">
            THE CORE <br /> <span className="blue-neon-glow">LINEAGE</span>
          </h2>
          <p className="text-brand-blue/60 font-mono text-sm tracking-[0.4em] uppercase max-w-2xl mx-auto">
            [ The specialized command architecture driving Pakistan’s DeepTech frontier ]
          </p>
        </MDiv>
      </div>

      <div className="relative w-full max-w-[1400px] flex flex-col items-center">
        
        {/* Level 1: Azhar Rizvi (Director) */}
        <div className="relative z-30 mb-16 flex flex-col items-center">
          <ApexCard 
            name="Azhar Rizvi" 
            role="Director // The Root" 
            photo={azharRizviSource} 
            isHex={true}
            initials="AR"
            outgoingBeamHeight={180}
          />
        </div>

        {/* Level 2: Neha Ahsan (Owner // Nexus) */}
        <div className="relative z-30 mb-40 mt-16 flex flex-col items-center">
          <ApexCard 
            name="Neha Ahsan" 
            role="Owner // The Nexus" 
            photo="https://save-the-placeholder.com/400x400?text=Neha" 
            initials="NA"
          />
          
          <div className="absolute top-full left-1/2 -translate-x-1/2 w-full flex flex-col items-center mt-8">
            <EnergyBeam height={80} color="#00F2FF" />
            <div className="relative w-full h-32 flex justify-center">
              <BranchingSystem activeId={activeLeadId} />
            </div>
          </div>
        </div>

        {/* Level 3: Team Leads (Branches) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-20 w-full max-w-7xl px-8 mt-20 pb-40">
          {teamLeads.map((lead) => (
            <LeadBlade 
              key={lead.id} 
              lead={lead} 
              onHover={setActiveLeadId} 
            />
          ))}
        </div>
      </div>

      <div className="absolute bottom-20 right-20 flex flex-col items-end gap-3 pointer-events-none opacity-20">
        <div className="flex items-center gap-4">
          <span className="text-[10px] font-mono text-white tracking-widest uppercase">Encryption_State: Verified</span>
          <div className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse shadow-[0_0_10px_#00F2FF]" />
        </div>
        <div className="w-64 h-[1px] bg-gradient-to-r from-transparent to-brand-blue" />
        <span className="text-[8px] font-mono text-brand-blue uppercase tracking-[0.8em]">NODE_SYNC_2026_CORE_ARCHITECTURE</span>
      </div>
    </section>
  );
};