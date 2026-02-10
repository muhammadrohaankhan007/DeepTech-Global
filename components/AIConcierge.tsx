'use client';

import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";

interface Message {
  role: 'user' | 'model';
  text: string;
}

export const AIConcierge: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState<Message[]>([
    { role: 'model', text: 'DEEPTECH_CORE online. How can I assist with your ecosystem exploration?' }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) scrollToBottom();
  }, [chatHistory, isOpen]);

  const handleSend = async () => {
    if (!message.trim() || isLoading) return;
    const userMessage = message.trim();
    setMessage('');
    setChatHistory(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: userMessage,
        config: {
          systemInstruction: "You are DEEPTECH_CORE, the AI architect of Pakistan's First DeepTech Ecosystem. Your role is to guide users through scientific venture building, capital access, and the upcoming Summit. Tone: Precise, high-tech, futuristic, and helpful. Max 2 sentences.",
        },
      });
      setChatHistory(prev => [...prev, { role: 'model', text: response.text || "Synchronizing nodes..." }]);
    } catch (error) {
      setChatHistory(prev => [...prev, { role: 'model', text: "Signal degradation. Retry uplink." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-12 right-12 z-[200]">
      {isOpen ? (
        <div className="w-80 sm:w-[28rem] h-[600px] bg-black/40 backdrop-blur-3xl rounded-[3rem] border border-white/10 shadow-[0_0_60px_rgba(0,85,255,0.2)] flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-6 duration-700">
          <div className="p-10 border-b border-white/10 flex justify-between items-center">
            <div className="flex items-center gap-5">
              <div className="w-12 h-12 rounded-[1.25rem] bg-brand-blue flex items-center justify-center font-black text-sm text-white shadow-[0_0_20px_rgba(0,85,255,0.6)]">DT</div>
              <div>
                <div className="text-[11px] font-black uppercase tracking-[0.4em] text-white">Core Interface</div>
                <div className="text-[9px] font-mono text-brand-blue uppercase animate-pulse">Status: Synchronized</div>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white/30 hover:text-white transition-all p-3 hover:scale-110">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-10 space-y-8 scroll-smooth no-scrollbar">
            {chatHistory.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-6 rounded-[2rem] text-lg font-light leading-relaxed tracking-wide ${msg.role === 'user' ? 'bg-brand-blue text-white shadow-2xl' : 'bg-white/5 text-slate-200 border border-white/10 backdrop-blur-md'}`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex items-center gap-3 px-3">
                <div className="w-2 h-2 rounded-full bg-brand-blue animate-bounce [animation-delay:-0.3s]"></div>
                <div className="w-2 h-2 rounded-full bg-brand-blue animate-bounce [animation-delay:-0.15s]"></div>
                <div className="w-2 h-2 rounded-full bg-brand-blue animate-bounce"></div>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          <div className="p-8 border-t border-white/10 bg-black/20">
            <div className="flex gap-4 p-2 bg-white/5 rounded-[1.5rem] border border-white/10 focus-within:border-brand-blue/60 transition-all duration-500 backdrop-blur-xl">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Initialize core query..."
                className="flex-1 bg-transparent px-5 py-3 text-base font-light focus:outline-none placeholder:text-white/20 text-white"
              />
              <button 
                onClick={handleSend} 
                className="w-12 h-12 bg-brand-blue rounded-xl flex items-center justify-center text-white hover:scale-105 active:scale-95 transition-all shadow-2xl hover:shadow-brand-blue/40"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" /></svg>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="w-20 h-20 rounded-full bg-black/60 backdrop-blur-3xl border border-white/10 flex items-center justify-center text-brand-blue shadow-[0_0_40px_rgba(0,85,255,0.2)] hover:scale-110 hover:shadow-[0_0_60px_rgba(0,85,255,0.4)] transition-all duration-700 group hover:border-brand-blue/50"
        >
          <svg className="w-10 h-10 transition-transform duration-700 group-hover:rotate-[360deg]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
        </button>
      )}
    </div>
  );
};
