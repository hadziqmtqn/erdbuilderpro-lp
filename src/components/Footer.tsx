import { Database, Heart } from 'lucide-react';

const XIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const GithubIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.28 1.15-.28 2.35 0 3.5-.73 1.02-1.08 2.25-1 3.5 0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export const Footer = () => {
  return (
    <footer className="py-20 border-t border-[#18181B] bg-[#0A0A0B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-16 mb-20">
          <div className="max-w-xs">
            <div className="flex items-center gap-2 mb-6">
              <div className="p-1 rounded bg-[#111111] border border-[#27272A]">
                <Database className="w-5 h-5 text-primary" />
              </div>
              <span className="text-sm font-bold tracking-tight uppercase text-white">ERD Builder <span className="text-primary">Pro</span></span>
            </div>
            <p className="text-[#71717A] text-xs font-medium leading-relaxed mb-8">
              A cohesive set of well-considered building blocks for high-performance database architects and modern engineering teams.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="p-2 bg-[#111111] border border-[#27272A] rounded-md text-[#71717A] hover:border-primary/40 hover:text-primary transition-all"><XIcon className="w-4 h-4" /></a>
              <a href="#" className="p-2 bg-[#111111] border border-[#27272A] rounded-md text-[#71717A] hover:border-primary/40 hover:text-primary transition-all"><GithubIcon className="w-4 h-4" /></a>
              <a href="#" className="p-2 bg-[#111111] border border-[#27272A] rounded-md text-[#71717A] hover:border-primary/40 hover:text-primary transition-all"><LinkedinIcon className="w-4 h-4" /></a>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-12 lg:gap-24">
            <div className="flex flex-col gap-6">
              <span className="text-[10px] uppercase font-black tracking-widest text-[#71717A]">Product</span>
              <div className="flex flex-col gap-4">
                <a href="#" className="text-xs font-bold text-[#71717A] hover:text-white transition-colors">Workspace</a>
                <a href="#" className="text-xs font-bold text-[#71717A] hover:text-white transition-colors">Plugins</a>
                <a href="#" className="text-xs font-bold text-[#71717A] hover:text-white transition-colors">Insights</a>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <span className="text-[10px] uppercase font-black tracking-widest text-[#71717A]">Engineering</span>
              <div className="flex flex-col gap-4">
                <a href="#" className="text-xs font-bold text-[#71717A] hover:text-white transition-colors">Vite Plugin</a>
                <a href="#" className="text-xs font-bold text-[#71717A] hover:text-white transition-colors">Supabase Core</a>
                <a href="#" className="text-xs font-bold text-[#71717A] hover:text-white transition-colors">R2 Storage</a>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <span className="text-[10px] uppercase font-black tracking-widest text-[#71717A]">Resources</span>
              <div className="flex flex-col gap-4">
                <a href="#" className="text-xs font-bold text-[#71717A] hover:text-white transition-colors">Documentation</a>
                <a href="#" className="text-xs font-bold text-[#71717A] hover:text-white transition-colors">Changelog</a>
                <a href="#" className="text-xs font-bold text-[#71717A] hover:text-white transition-colors">Consulting</a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="pt-10 border-t border-[#18181B] flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-bold text-[#71717A] uppercase tracking-tighter">© 2026 ERD Builder Pro.</span>
            <div className="h-3 w-px bg-[#18181B] hidden md:block" />
            <span className="text-[10px] font-bold text-primary uppercase tracking-tighter flex items-center gap-1">Built with mathematical precision <Heart className="w-3 h-3 text-primary fill-current" /></span>
          </div>
          <div className="flex gap-8 text-[10px] font-bold text-[#71717A] uppercase tracking-tighter">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
