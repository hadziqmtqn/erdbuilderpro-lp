import React from 'react';
import { Zap, Shield, Layout, Server } from 'lucide-react';

const techs = [
  { 
    name: "React 18 + Vite 6", 
    desc: "Blazing-fast performance and ultra-smooth UI interactions.",
    icon: Zap,
    color: "text-yellow-400"
  },
  { 
    name: "Supabase Auth", 
    desc: "Enterprise-grade security and robust session management.",
    icon: Shield,
    color: "text-green-400"
  },
  { 
    name: "XYFlow Ready", 
    desc: "High-performance diagramming engine built for scale.",
    icon: Layout,
    color: "text-pink-400"
  },
  { 
    name: "Cloudflare Persistence", 
    desc: "Distributed asset storage and real-time synchronization.",
    icon: Server,
    color: "text-blue-400"
  }
];

export const TechStack = () => {
  return (
    <section id="tech" className="py-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-extrabold mb-6">Engineered for Performance.</h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              We've picked the most reliable, modern technologies to ensure your architecture 
              work remains stable, fast, and secure—no matter how complex your projects grow.
            </p>
            <div className="flex gap-4">
              <div className="bg-white/5 px-4 py-2 rounded-lg border border-white/10 text-sm font-semibold">React 18</div>
              <div className="bg-white/5 px-4 py-2 rounded-lg border border-white/10 text-sm font-semibold">Vite 6</div>
              <div className="bg-white/5 px-4 py-2 rounded-lg border border-white/10 text-sm font-semibold">Supabase</div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 gap-6">
            {techs.map((tech, i) => (
              <div key={i} className="flex items-center gap-6 p-6 glass rounded-2xl border-l-4 border-l-primary hover:border-l-secondary transition-all">
                <div className={`p-3 rounded-full bg-white/5 ${tech.color}`}>
                  <tech.icon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">{tech.name}</h4>
                  <p className="text-gray-400 text-sm">{tech.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
