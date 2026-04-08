import React from 'react';
import { Zap, Shield, Layout, Server } from 'lucide-react';

const techs = [
  { 
    name: "React 19 + Vite 6", 
    desc: "Blazing-fast performance and ultra-smooth UI interactions.",
    icon: Zap,
    color: "text-amber-400"
  },
  { 
    name: "Supabase Auth", 
    desc: "Enterprise-grade security and robust session management.",
    icon: Shield,
    color: "text-amber-400"
  },
  { 
    name: "XYFlow v12", 
    desc: "High-performance diagramming engine built for scale.",
    icon: Layout,
    color: "text-amber-400"
  },
  { 
    name: "Cloudflare R2", 
    desc: "Distributed asset storage and real-time synchronization.",
    icon: Server,
    color: "text-amber-400"
  }
];

export const TechStack = () => {
  return (
    <section id="tech" className="py-24 border-t border-[#18181B] bg-[#050505]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block px-2 py-0.5 bg-primary/10 border border-primary/20 text-[10px] font-black uppercase tracking-widest text-primary mb-6">
              Performance First
            </div>
            <h2 className="text-4xl font-black mb-6 uppercase tracking-tight">Engineered for <br /> mathematical precision.</h2>
            <p className="text-[#71717A] text-sm font-medium mb-8 leading-relaxed max-w-md">
              We've picked the most reliable, modern technologies to ensure your architecture 
              work remains stable, fast, and secure. Built with a focus on consistency.
            </p>
            <div className="flex flex-wrap gap-2">
              {['PostgreSQL', 'TypeScript', 'Node.js', 'Vercel'].map(tag => (
                <span key={tag} className="px-3 py-1 bg-[#111111] border border-[#27272A] rounded text-[10px] font-bold text-[#71717A] uppercase">{tag}</span>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {techs.map((tech, i) => (
              <div key={i} className="p-6 bg-[#0A0A0B] border border-[#18181B] rounded-lg relative group overflow-hidden hover:border-primary/40 transition-all">
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className={`p-2 rounded bg-[#111111] border border-[#27272A] mb-4 inline-block ${tech.color}`}>
                  <tech.icon className="w-5 h-5" />
                </div>
                <h4 className="font-black text-sm uppercase text-white mb-2">{tech.name}</h4>
                <p className="text-[#71717A] text-[11px] font-medium leading-relaxed">{tech.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
