import React from 'react';
import { Database, FolderOpen, Cloud, Share2 } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    title: "Smart SQL Export",
    description: "Instantly generate PostgreSQL or MySQL DDL scripts from your visual diagrams.",
    icon: Database,
    color: "text-blue-400",
  },
  {
    title: "Global Project Management",
    description: "Organize assets into projects with a comprehensive trash and recovery system.",
    icon: FolderOpen,
    color: "text-cyan-400",
  },
  {
    title: "Cloud-Hybrid Persistence",
    description: "Real-time sync using Supabase with asset storage on Cloudflare R2.",
    icon: Cloud,
    color: "text-indigo-400",
  },
  {
    title: "Universal Document Sharing",
    description: "Export high-quality PDFs and Images for seamless team collaboration.",
    icon: Share2,
    color: "text-teal-400",
  }
];

export const Features = () => {
  return (
    <section id="features" className="py-24 bg-black/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 italic">Advanced Capabilities</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Built for enterprise-grade database design workflows.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="p-8 rounded-2xl glass hover:glass-hover transition-all duration-300 border border-white/5"
            >
              <feature.icon className={`w-10 h-10 mb-6 ${feature.color}`} />
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
