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
    <footer className="py-20 border-t border-white/5 bg-black/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="flex items-center gap-2">
              <Database className="w-6 h-6 text-primary" />
              <span className="text-xl font-bold tracking-tight">ERD Builder <span className="text-secondary">Pro</span></span>
            </div>
            <p className="text-gray-400 text-center md:text-left max-w-xs">
              The professional visual workspace for modern database architects.
            </p>
          </div>
          
          <div className="flex items-center gap-8">
            <a href="#" className="text-gray-400 hover:text-white transition-colors"><XIcon className="w-5 h-5" /></a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors"><GithubIcon className="w-5 h-5" /></a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors"><LinkedinIcon className="w-5 h-5" /></a>
          </div>

          <div className="flex flex-col items-center md:items-end gap-2">
            <button className="px-6 py-2 rounded-full bg-primary hover:bg-primary/90 font-bold transition-all shadow-lg shadow-primary/20">
              Get Started Now
            </button>
            <span className="text-sm text-gray-500 mt-4 flex items-center gap-1">
              Built for Architects & Developers <Heart className="w-4 h-4 text-red-500 fill-current" />
            </span>
          </div>
        </div>
        
        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600 gap-4">
          <p>© 2026 ERD Builder Pro. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-gray-400">Terms of Service</a>
            <a href="#" className="hover:text-gray-400">Privacy Policy</a>
            <a href="#" className="hover:text-gray-400">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
