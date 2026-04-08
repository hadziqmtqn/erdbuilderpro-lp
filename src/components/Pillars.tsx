import React from 'react';
import { Layout, GitBranch, PenTool, FileText } from 'lucide-react';
import { motion } from 'framer-motion';

const pillars = [
  {
    title: "Visual ERD Builder",
    description: "Browse and filter large datasets with powerful columns, actions, and bulk operations.",
    icon: Layout,
  },
  {
    title: "Interactive Flowcharts",
    description: "Build complex, reactive forms using a set of reusable, state-aware components.",
    icon: GitBranch,
  },
  {
    title: "Infolists",
    description: "Render read-only record views with structured layouts and custom formatting.",
    icon: PenTool,
  },
  {
    title: "Rich Text Documentation",
    description: "Trigger in-app feedback for actions, errors, and system events with minimal setup.",
    icon: FileText,
  }
];

export const Pillars = () => {
  return (
    <section id="pillars" className="py-24 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl font-black mb-4 uppercase tracking-tighter">
            UI components <br />
            <span className="text-[#71717A]">that you won't outgrow</span>
          </h2>
          <p className="max-w-lg text-[#71717A] text-sm font-medium leading-relaxed">
            A cohesive set of well-considered <span className="text-white font-bold">building blocks</span> that adapt as your application grows in complexity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative p-10 bg-[#111111] border border-[#27272A] rounded-sm transition-all duration-300 hover:border-primary/40 corner-accent corner-accent-bottom"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-8 w-16 h-16 rounded-full bg-[#0A0A0B] border border-[#18181B] flex items-center justify-center text-[#71717A] group-hover:text-primary group-hover:border-primary/30 transition-all shadow-inner">
                  <pillar.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-black mb-4 uppercase tracking-tight text-white group-hover:text-primary transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-[11px] font-medium text-[#71717A] leading-relaxed max-w-xs">
                  {pillar.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
