import React from 'react';
import { Database, FolderOpen, Cloud, Share2 } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    title: "SQL Engine",
    description: "Instantly generate PostgreSQL or MySQL DDL scripts from your visual diagrams with mathematical precision.",
    icon: Database,
  },
  {
    title: "Asset Manager",
    description: "Organize assets into projects with a comprehensive trash and recovery system for enterprise scale.",
    icon: FolderOpen,
  },
  {
    title: "Cloud Sync",
    description: "Real-time sync using Supabase with asset storage on Cloudflare R2 for blazing-fast persistence.",
    icon: Cloud,
  },
  {
    title: "Team Export",
    description: "Export high-quality PDFs and Images for seamless team collaboration across global organizations.",
    icon: Share2,
  }
];

export const Features = () => {
  return (
    <section id="features" className="py-24 border-t border-[#18181B] bg-[#050505]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-xl">
            <h2 className="text-3xl font-black uppercase tracking-tighter mb-4">Advanced Infrastructure</h2>
            <p className="text-[#71717A] text-sm font-medium leading-relaxed italic">
              Engineered for consistency and speed in complex database design workflows.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div className="h-[1px] w-40 bg-gradient-to-r from-transparent to-[#27272A]" />
            <span className="text-[10px] text-primary font-black uppercase tracking-widest">Enterprise Ready</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border border-[#18181B] bg-[#0A0A0B] divide-x divide-[#18181B] group">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="p-8 hover:bg-primary/5 transition-all duration-500 cursor-default relative overflow-hidden"
              whileHover={{ y: -2 }}
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-primary opacity-0 group-hover:opacity-10 transition-opacity" />
              <div className="mb-6 text-primary">
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-sm font-black mb-4 uppercase tracking-tight text-white group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-[11px] font-medium text-[#71717A] leading-relaxed group-hover:text-white/70 transition-colors">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
