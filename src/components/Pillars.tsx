import React from 'react';
import { Layout, GitBranch, PenTool, FileText } from 'lucide-react';
import { motion } from 'framer-motion';

const pillars = [
  {
    title: "Visual ERD Builder",
    description: "High-performance drag-and-drop workspace powered by XYFlow (React Flow v12).",
    icon: Layout,
    color: "from-blue-500/20 to-indigo-500/20",
    border: "border-blue-500/40",
  },
  {
    title: "Interactive Flowcharts",
    description: "Map out logic, decision points, and system architectures with smart connectors.",
    icon: GitBranch,
    color: "from-cyan-500/20 to-teal-500/20",
    border: "border-cyan-500/40",
  },
  {
    title: "Excalidraw Whiteboarding",
    description: "Free-hand sketching and architectural brainstorming integrated directly.",
    icon: PenTool,
    color: "from-purple-500/20 to-pink-500/20",
    border: "border-purple-500/40",
  },
  {
    title: "Rich Text Documentation",
    description: "Professional-grade documentation powered by TipTap, supporting markdown and task lists.",
    icon: FileText,
    color: "from-orange-500/20 to-red-500/20",
    border: "border-orange-500/40",
  }
];

export const Pillars = () => {
  return (
    <section id="pillars" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Four Modes. One Unified Workspace.</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Whether you're mapping data relations or sketching initial concepts, 
            ERD Builder Pro has a mode for every stage of your design.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className={`p-8 rounded-3xl glass border-t border-l ${pillar.border} bg-gradient-to-br ${pillar.color} h-full group transition-all duration-300 shadow-2xl`}
            >
              <div className="flex items-start gap-6">
                <div className={`p-4 rounded-2xl bg-white/5 border border-white/10 group-hover:bg-primary group-hover:border-primary transition-all duration-500`}>
                  <pillar.icon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{pillar.title}</h3>
                  <p className="text-gray-400 group-hover:text-gray-300 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
