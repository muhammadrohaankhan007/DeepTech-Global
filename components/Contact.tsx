'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, Satellite, CheckCircle } from 'lucide-react';

const MDiv = motion.div as any;
const MA = motion.a as any;
const MForm = motion.form as any;
const MButton = motion.button as any;

const BinaryStream = () => {
  const [columns, setColumns] = useState<string[]>([]);
  useEffect(() => {
    const cols = Array.from({ length: 15 }, () => 
      Array.from({ length: 20 }, () => (Math.random() > 0.5 ? '1' : '0')).join('\n')
    );
    setColumns(cols);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none opacity-[0.05] overflow-hidden flex justify-around">
      {columns.map((col, i) => (
        <MDiv
          key={i}
          initial={{ y: '-100%' }}
          animate={{ y: '100%' }}
          transition={{
            duration: 10 + Math.random() * 20,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 5
          }}
          className="text-[10px] font-mono text-brand-cyan whitespace-pre leading-none"
        >
          {col}
        </MDiv>
      ))}
    </div>
  );
};

const CommunityNexus = () => {
  const buttons = [
    {
      text: 'JOIN THE WHATSAPP COMMUNITY',
      link: 'https://chat.whatsapp.com/BmJvYTspZAs3QBn5rfNPXG',
      color: '#25D366',
      icon: (
        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      )
    },
    {
      text: 'VIEW RECENT LAUNCH',
      link: 'https://www.linkedin.com/posts/deeptech-global_deeptech-innovation-launch-activity-7427026224297947136-csDh?utm_source=share&utm_medium=member_android&rcm=ACoAAGJ13UwBSGsekm2rVG3XKEdsIpkYEd5sZO0',
      color: '#7DA0CA',
      icon: (
        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      )
    }
  ];

  return (
    <div className="mt-32 w-full flex flex-col items-center gap-10">
      <div className="flex flex-col items-center gap-2">
        <span className="text-[12px] font-sans font-bold text-white/30 tracking-[0.6em] uppercase">Connectivity Hub</span>
        <h3 className="text-3xl font-sans font-light text-white tracking-[0.3rem] uppercase leading-tight silver-gradient-text">COMMUNITY NEXUS</h3>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center gap-6 w-full max-w-4xl">
        {buttons.map((btn, idx) => (
          <MA
            key={idx}
            href={btn.link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ 
              scale: 1.05,
              boxShadow: '0 0 15px rgba(125, 160, 202, 0.4)'
            }}
            className="group relative flex items-center justify-center gap-4 w-full md:w-auto md:min-w-[340px] px-10 py-6 bg-white/[0.03] backdrop-blur-xl border-2 rounded-2xl transition-all duration-500 overflow-hidden"
            style={{ 
              borderColor: `${btn.color}40`,
            }}
          >
            <div className="absolute inset-0 transition-opacity duration-500 opacity-0 group-hover:opacity-10 pointer-events-none" style={{ backgroundColor: btn.color }} />
            <span style={{ color: btn.color }} className="drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]">{btn.icon}</span>
            <span className="text-[14px] font-sans font-semibold tracking-[0.15rem] text-white/90 uppercase whitespace-nowrap">{btn.text}</span>
          </MA>
        ))}
      </div>
    </div>
  );
};

export const Contact: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitted(true);
    setLoading(false);
  };

  return (
    <section id="contact" className="relative py-40 px-6 md:px-24 bg-black overflow-hidden border-t border-white/5">
      <BinaryStream />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <MDiv initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-10">
            <div className="space-y-6">
              <span className="text-[12px] font-sans font-bold text-brand-slate tracking-[0.8em] uppercase block">Uplink_Node_01</span>
              <h2 className="text-6xl md:text-8xl font-impact text-white tracking-tighter uppercase italic leading-[0.85]">
                LET'S BUILD THE <br /> <span className="blue-neon-glow">FUTURE</span>
              </h2>
            </div>
            <p className="text-slate-400 text-[18px] font-sans font-[300] leading-relaxed max-w-xl">
              Have a scientific breakthrough or a deeptech venture? Reach out to our architects for guidance and ecosystem access.
            </p>
            <div className="flex items-center gap-8 opacity-40">
              <div className="flex flex-col gap-1">
                <span className="text-[12px] font-sans font-bold uppercase tracking-widest text-brand-slate">Protocol</span>
                <span className="text-sm font-bold text-white uppercase">Encrypted_TLS</span>
              </div>
              <div className="w-px h-10 bg-white/20" />
              <div className="flex flex-col gap-1">
                <span className="text-[12px] font-sans font-bold uppercase tracking-widest text-brand-slate">Status</span>
                <span className="text-sm font-bold text-white uppercase">Ready_For_Uplink</span>
              </div>
            </div>
          </MDiv>
          <MDiv initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="relative">
            <div className="absolute inset-0 bg-brand-cyan/20 blur-[80px] rounded-full opacity-30 pointer-events-none" />
            <div className="relative glass-card bg-black/60 p-10 md:p-14 rounded-[3rem] border-[2px] border-brand-cyan/30 shadow-[0_0_40px_rgba(0,242,255,0.15)] backdrop-blur-3xl overflow-hidden">
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <MForm key="contact-form" onSubmit={handleSubmit} className="space-y-8" initial={{ opacity: 1 }} exit={{ opacity: 0, y: 20 }}>
                    <div className="space-y-6">
                      <div className="group relative">
                        <label className="text-[12px] font-sans font-bold text-brand-slate tracking-[0.4em] uppercase mb-2 block ml-2">IDENTITY</label>
                        <input type="text" name="name" required placeholder="YOUR NAME / ENTITY" className="w-full bg-white/[0.03] border border-white/10 px-8 py-5 rounded-2xl text-[11px] tracking-widest text-white focus:outline-none focus:border-brand-cyan focus:bg-white/[0.05] transition-all placeholder:text-white/20 uppercase font-sans" />
                      </div>
                      <div className="group relative">
                        <label className="text-[12px] font-sans font-bold text-brand-slate tracking-[0.4em] uppercase mb-2 block ml-2">UPLINK</label>
                        <input type="email" name="email" required placeholder="COMMUNICATION@NODE.COM" className="w-full bg-white/[0.03] border border-white/10 px-8 py-5 rounded-2xl text-[11px] tracking-widest text-white focus:outline-none focus:border-brand-cyan focus:bg-white/[0.05] transition-all placeholder:text-white/20 uppercase font-sans" />
                      </div>
                      <div className="group relative">
                        <label className="text-[12px] font-sans font-bold text-brand-slate tracking-[0.4em] uppercase mb-2 block ml-2">INTEL</label>
                        <textarea name="message" required placeholder="MISSION PARAMETERS / MESSAGE DETAILS" rows={4} className="w-full bg-white/[0.03] border border-white/10 px-8 py-5 rounded-2xl text-[11px] tracking-widest text-white focus:outline-none focus:border-brand-cyan focus:bg-white/[0.05] transition-all placeholder:text-white/20 uppercase resize-none font-sans"></textarea>
                      </div>
                    </div>
                    <MButton type="submit" disabled={loading} whileHover={{ scale: [1, 1.02, 1], transition: { repeat: Infinity, duration: 1.2 } }} className="w-full flex items-center justify-center gap-4 py-6 bg-gradient-to-r from-brand-cyan to-brand-blue text-white font-bold text-[12px] tracking-[0.4em] uppercase rounded-2xl hover:shadow-[0_0_30px_rgba(0,242,255,0.4)] transition-all disabled:opacity-50 font-sans">
                      {loading ? <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" /> : <>SUBMIT UPLINK <Zap size={18} className="fill-current" /></>}
                    </MButton>
                  </MForm>
                ) : (
                  <MDiv key="success-message" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="flex flex-col items-center text-center space-y-8 py-10">
                    <div className="relative">
                      <div className="absolute inset-0 bg-brand-cyan/20 blur-2xl rounded-full" />
                      <CheckCircle size={80} className="text-brand-cyan relative z-10" strokeWidth={1} />
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-3xl font-impact text-white uppercase italic tracking-tight blue-neon-glow">SIGNAL RECEIVED</h3>
                      <p className="text-slate-400 text-[18px] font-sans font-light tracking-wide max-w-xs mx-auto">Your data has been synchronized. Our architects will connect shortly.</p>
                    </div>
                    <button onClick={() => setIsSubmitted(false)} className="text-[10px] font-black text-white/30 hover:text-white tracking-[0.4em] uppercase transition-colors">SEND ANOTHER UPLINK</button>
                  </MDiv>
                )}
              </AnimatePresence>
              <div className="absolute bottom-4 right-8 opacity-10 pointer-events-none"><Satellite size={64} className="text-brand-cyan" strokeWidth={1} /></div>
            </div>
          </MDiv>
        </div>
        <CommunityNexus />
      </div>
    </section>
  );
};