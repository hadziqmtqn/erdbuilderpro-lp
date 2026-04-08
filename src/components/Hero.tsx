import React from 'react';
import { ChevronRight, Play } from 'lucide-react';
import { motion } from 'framer-motion';

export const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-primary/20 to-transparent blur-3xl opacity-50 -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
            Design, Document, and Visualize Your <br />
            <span className="text-gradient">Database Architecture</span> Like a Pro.
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-400 mb-10 leading-relaxed">
            The all-in-one visual workspace for developers. Build complex ERDs, 
            interactive flowcharts, and technical documentation—all synced to the cloud.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-primary hover:bg-primary/90 text-lg font-bold transition-all shadow-xl shadow-primary/30 flex items-center justify-center gap-2">
              Start Building for Free <ChevronRight className="w-5 h-5" />
            </button>
            <button className="w-full sm:w-auto px-8 py-4 rounded-full glass hover:glass-hover text-lg font-bold transition-all flex items-center justify-center gap-2">
              View Demo <Play className="w-5 h-5 fill-current" />
            </button>
          </div>
        </motion.div>

        {/* UI Mockup Placeholder / Illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative max-w-5xl mx-auto"
        >
          <div className="glass rounded-2xl p-2 md:p-4 shadow-2xl relative overflow-hidden bg-black/40 border border-white/10 group">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-secondary/10 pointer-events-none" />
            
            {/* Minimal App Frame Header */}
            <div className="h-8 border-b border-white/5 flex items-center px-4 gap-2 mb-4">
              <div className="w-2 h-2 rounded-full bg-red-400/50" />
              <div className="w-2 h-2 rounded-full bg-yellow-400/50" />
              <div className="w-2 h-2 rounded-full bg-green-400/50" />
            </div>

            {/* Mockup Content Layout */}
            <div className="grid grid-cols-12 gap-4 aspect-[16/9]">
              {/* Sidebar */}
              <div className="col-span-3 h-full border-r border-white/5 p-4 flex flex-col gap-4">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="h-4 bg-white/5 rounded-md w-full animate-pulse" />
                ))}
              </div>
              
              {/* ERD Canvas Area */}
              <div className="col-span-6 h-full p-4 relative">
                {/* ERD Table "Box" */}
                <div className="absolute top-1/4 left-1/4 w-32 h-24 glass rounded-lg border border-primary/40 p-2 shadow-lg shadow-primary/20">
                  <div className="h-2 bg-primary/40 rounded w-3/4 mb-4" />
                  <div className="space-y-2">
                    <div className="h-1 bg-white/10 rounded w-full" />
                    <div className="h-1 bg-white/10 rounded w-5/6" />
                  </div>
                </div>

                {/* Database Connection Link */}
                <div className="absolute top-1/2 left-[40%] w-24 h-1 border-t-2 border-dashed border-primary/30 rotate-12" />

                <div className="absolute bottom-1/4 right-1/4 w-36 h-28 glass rounded-lg border border-secondary/40 p-2 shadow-lg shadow-secondary/20">
                  <div className="h-2 bg-secondary/40 rounded w-3/4 mb-4" />
                  <div className="space-y-2">
                    <div className="h-1 bg-white/10 rounded w-full" />
                    <div className="h-1 bg-white/10 rounded w-full" />
                  </div>
                </div>
              </div>

              {/* Documentation Panel */}
              <div className="col-span-3 h-full border-l border-white/5 p-4 overflow-hidden">
                <div className="h-4 bg-secondary/20 rounded w-full mb-6" />
                <div className="space-y-4">
                  <div className="h-2 bg-white/5 rounded w-full" />
                  <div className="h-2 bg-white/5 rounded w-5/6" />
                  <div className="h-2 bg-white/5 rounded w-4/6" />
                  <div className="mt-8 h-20 bg-white/5 rounded-md" />
                </div>
              </div>
            </div>
            
            {/* Interactive "Click" Effect */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-primary/20 blur-[80px] rounded-full pointer-events-none group-hover:scale-150 transition-transform duration-1000" />
          </div>

          {/* Floating Accents */}
          <div className="absolute -top-10 -right-10 w-24 h-24 bg-secondary/30 blur-2xl rounded-full" />
          <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-primary/30 blur-2xl rounded-full" />
        </motion.div>
      </div>
    </section>
  );
};
