import { Database, Search, Menu } from 'lucide-react';

const GithubIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.28 1.15-.28 2.35 0 3.5-.73 1.02-1.08 2.25-1 3.5 0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const XIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#050505]/80 backdrop-blur-md border-b border-[#18181B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="p-1 rounded bg-[#111111] border border-[#27272A]">
              <Database className="w-5 h-5 text-primary" />
            </div>
            <span className="text-sm font-bold tracking-tight uppercase">ERD Builder <span className="text-primary">Pro</span></span>
          </div>

          {/* Navigation Links */}
          <div className="hidden lg:flex items-center gap-6">
            <a href="#pillars" className="text-xs font-semibold text-[#71717A] hover:text-white transition-colors">Workspace</a>
            <a href="#features" className="text-xs font-semibold text-[#71717A] hover:text-white transition-colors">Plugins</a>
            <a href="#tech" className="text-xs font-semibold text-[#71717A] hover:text-white transition-colors">Insights</a>
            <div className="h-4 w-px bg-[#18181B]" />
            <a href="#" className="text-xs font-semibold text-[#71717A] hover:text-white transition-colors flex items-center gap-1">
              Consulting <span className="bg-primary/10 text-primary text-[10px] px-1 rounded">NEW</span>
            </a>
          </div>

          {/* Search & Meta */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="flex items-center gap-1.5 px-3 py-1 bg-[#111111] border border-[#27272A] rounded-md text-[#71717A] hover:border-primary/40 transition-colors cursor-pointer group">
              <Search className="w-3.5 h-3.5 group-hover:text-primary transition-colors" />
              <span className="text-[11px]">Search...</span>
              <kbd className="text-[9px] bg-[#18181B] px-1 rounded ml-4">⌘ K</kbd>
            </div>
            
            <div className="flex items-center gap-1 text-[#71717A] border-l border-[#18181B] pl-4">
              <div className="flex items-center gap-0.5 mr-2">
                <span className="text-[11px] font-bold">30.2K+</span>
                <span className="text-[10px]">GitHub stars</span>
              </div>
              <a href="#" className="p-1 box-hover"><GithubIcon className="w-4 h-4" /></a>
              <a href="#" className="p-1 box-hover"><XIcon className="w-4 h-4" /></a>
            </div>
          </div>

          <div className="lg:hidden text-[#71717A]">
            <Menu className="w-6 h-6" />
          </div>
        </div>
      </div>
    </nav>
  );
};
