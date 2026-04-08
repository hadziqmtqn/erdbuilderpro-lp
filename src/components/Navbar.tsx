import React from 'react';
import { Database, Menu, X } from 'lucide-react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <Database className="w-8 h-8 text-primary" />
            <span className="text-xl font-bold tracking-tight">
              ERD Builder <span className="text-secondary">Pro</span>
            </span>
          </div>
          
          <div className="hidden md:block">
            <div className="flex items-center gap-8">
              <a href="#features" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Features</a>
              <a href="#pillars" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Workspace</a>
              <a href="#tech" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Architecture</a>
              <button className="px-5 py-2 rounded-full bg-primary hover:bg-primary/90 text-sm font-semibold transition-all shadow-lg shadow-primary/20">
                Start Building
              </button>
            </div>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300 hover:text-white">
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden glass border-t border-white/10 animate-in fade-in slide-in-from-top-4">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#features" className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white">Features</a>
            <a href="#pillars" className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white">Workspace</a>
            <a href="#tech" className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white">Architecture</a>
            <button className="w-full mt-4 bg-primary text-white px-3 py-2 rounded-md font-bold">
              Start Building
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};
