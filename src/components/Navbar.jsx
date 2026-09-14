import React, { useState, useEffect } from 'react';
import { Trophy, Film, Calendar, Image as ImageIcon, FileText, User, ArrowUpRight, Menu, X } from 'lucide-react';
import { athleteData } from '../data/athleteData';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Profile', href: '#profile', icon: User },
    { name: 'Honors', href: '#trophies', icon: Trophy },
    { name: 'Film Room', href: '#film-room', icon: Film },
    { name: 'Matches', href: '#matches', icon: Calendar },
    { name: 'Gallery', href: '#gallery', icon: ImageIcon },
    { name: 'Portfolio PDF', href: '#portfolio-pdf', icon: FileText },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'py-3 bg-[#080D1A]/85 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-black/40' 
        : 'py-5 bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo & Name */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 to-yellow-400 p-[2px] shadow-lg shadow-amber-500/20 group-hover:shadow-amber-500/40 transition-all duration-300">
              <div className="w-full h-full bg-[#0B1120] rounded-[10px] flex items-center justify-center font-jersey text-2xl text-amber-400 tracking-wider font-bold">
                28
              </div>
            </div>
            <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-blue-600 text-[10px] font-bold text-white flex items-center justify-center border border-white/20">
              2
            </span>
          </div>

          <div>
            <div className="flex items-center gap-2">
              <span className="font-display text-lg tracking-tight font-extrabold text-white group-hover:text-amber-400 transition-colors">
                VELIN
              </span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-amber-400/10 text-amber-400 font-medium border border-amber-400/20">
                G/F
              </span>
            </div>
            <p className="text-[11px] text-slate-400 -mt-0.5 hidden sm:block">
              Theadora Adeline Valerina
            </p>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 backdrop-blur-md">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-1.5 rounded-full text-xs font-semibold text-slate-300 hover:text-white hover:bg-white/10 transition-all duration-200 flex items-center gap-1.5 group"
              >
                <Icon className="w-3.5 h-3.5 text-slate-400 group-hover:text-amber-400 transition-colors" />
                <span>{link.name}</span>
              </a>
            );
          })}
        </nav>

        {/* Action Button */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={athleteData.media.portfolioPdf}
            download="Theadora_Adeline_Valerina_Velin_Portofolio_2026.pdf"
            className="px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-950 hover:from-amber-400 hover:to-yellow-300 transition-all shadow-md shadow-amber-500/25 flex items-center gap-1.5 hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>PDF Dossier</span>
            <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:text-white focus:outline-none"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-3 px-4 pt-2 pb-6 bg-[#0B1120]/95 backdrop-blur-2xl border-b border-white/10">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
                >
                  <Icon className="w-4 h-4 text-amber-400" />
                  <span>{link.name}</span>
                </a>
              );
            })}
            <div className="pt-2">
              <a
                href={athleteData.media.portfolioPdf}
                download="Theadora_Adeline_Valerina_Velin_Portofolio_2026.pdf"
                className="w-full text-center px-4 py-3 rounded-xl text-sm font-bold uppercase tracking-wider bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-950 flex items-center justify-center gap-2"
              >
                <span>Download PDF Dossier (11 Pages)</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
