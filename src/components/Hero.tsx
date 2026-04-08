import { Database, ChevronRight, Play } from 'lucide-react';
import { motion } from 'framer-motion';

export const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-[#050505]">
      {/* Dynamic Background Pattern */}
      <div className="absolute inset-0 bg-[#050505] -z-20" />
      <div className="absolute inset-0 opacity-[0.03] -z-10" 
           style={{ backgroundImage: 'radial-gradient(#FFFFFF 1px, transparent 1px)', backgroundSize: '16px 16px' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column Text */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter uppercase leading-[0.9]">
                Professional <br />
                <span className="text-primary">Database</span> Tools<br />
                <span className="text-white/40">that you won't outgrow</span>
              </h1>
              
              <p className="max-w-xl text-sm md:text-base text-[#71717A] mb-8 leading-relaxed font-medium">
                A cohesive set of well-considered building blocks that adapt as your application grows in complexity. 
                Designed for high-performance database architects and modern engineering teams.
              </p>
              
              <div className="flex flex-wrap items-center gap-4 mb-12">
                <button className="px-6 py-2.5 rounded-lg bg-primary text-black text-xs font-black uppercase hover:bg-primary/90 transition-all flex items-center gap-2">
                  Get Started <ChevronRight className="w-4 h-4" />
                </button>
                <button className="px-6 py-2.5 rounded-lg bg-[#111111] border border-[#27272A] text-xs font-black uppercase hover:border-[#3F3F46] transition-all flex items-center gap-2">
                  View Demo <Play className="w-4 h-4" />
                </button>
              </div>

              {/* Stats Bar */}
              <div className="flex items-center gap-8 border-t border-[#18181B] pt-8">
                <div>
                  <div className="text-xl font-black text-white">4.2M+</div>
                  <div className="text-[10px] uppercase text-[#71717A] font-bold">Installs</div>
                </div>
                <div>
                  <div className="text-xl font-black text-white">12K+</div>
                  <div className="text-[10px] uppercase text-[#71717A] font-bold">Teams</div>
                </div>
                <div>
                  <div className="text-xl font-black text-white">99.9%</div>
                  <div className="text-[10px] uppercase text-[#71717A] font-bold">Uptime</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column Visual / Large Teaser */}
          <div className="lg:col-span-5 relative">
            <div className="relative p-1 bg-[#111111] border border-[#27272A] rounded-xl shadow-2xl glass corner-accent corner-accent-bottom overflow-hidden">
              <div className="bg-[#050505] rounded-lg aspect-[4/5] p-6 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/20 via-primary to-primary/20" />
                
                {/* Tech Highlights */}
                <div className="space-y-4">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="p-4 bg-[#0A0A0B] border border-[#18181B] rounded-lg flex items-center justify-between group hover:border-primary/40 transition-all cursor-default">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded bg-[#111111] border border-[#27272A] flex items-center justify-center text-primary group-hover:bg-primary/10 transition-colors">
                          <Database className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-[11px] font-bold uppercase text-white/90">Module {i + 1}</div>
                          <div className="text-[10px] text-[#71717A]">Integrated Engine v{8.4 + i}</div>
                        </div>
                      </div>
                      <ChevronRight className="w-4 h-4 text-[#71717A] group-hover:text-primary transition-colors" />
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex items-center justify-center">
                  <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#27272A] to-transparent" />
                </div>
                
                <div className="mt-6 flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary animate-pulse mb-4">
                    <Database className="w-6 h-6" />
                  </div>
                  <div className="text-[10px] font-bold uppercase text-[#71717A] tracking-widest">AEM System Core</div>
                </div>
              </div>
            </div>
            
            {/* Visual Accent */}
            <div className="absolute -z-10 -top-20 -right-20 w-80 h-80 bg-primary/5 blur-[120px] rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
};
