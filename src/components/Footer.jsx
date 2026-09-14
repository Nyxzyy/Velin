import React from 'react';
import { ArrowUp, Heart, Trophy, Shield } from 'lucide-react';
import { athleteData } from '../data/athleteData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#050811] border-t border-white/10 pt-16 pb-12 overflow-hidden">
      
      {/* Background ambient light */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-amber-500/10 blur-[90px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Column */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 to-yellow-400 p-[2px]">
                <div className="w-full h-full bg-[#0B1120] rounded-[10px] flex items-center justify-center font-jersey text-2xl text-amber-400 font-bold">
                  28
                </div>
              </div>
              <div>
                <h3 className="font-display text-lg font-extrabold text-white">THEADORA ADELINE VALERINA</h3>
                <p className="text-xs text-amber-400 font-semibold tracking-wider uppercase">VELIN • GUARD / FORWARD</p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 max-w-md leading-relaxed">
              Official basketball portfolio and showcase. Representing SMP Kristen Kalam Kudus Malang (#02), Ilufa Dragons Basketball Academy (#28), and Hustle Basketball Team.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/5 border border-white/10">
                <img src={athleteData.logos.kalamKudus} alt="KK Logo" className="w-5 h-5 object-contain" />
                <span className="text-xs font-semibold text-slate-300">SMP Kalam Kudus</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/5 border border-white/10">
                <img src={athleteData.logos.dragons} alt="Ilufa Dragons" className="w-5 h-5 object-contain" />
                <span className="text-xs font-semibold text-slate-300">Ilufa Dragons Academy</span>
              </div>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-xs font-extrabold uppercase tracking-wider text-slate-300">Navigation</span>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#profile" className="hover:text-amber-400 transition-colors">Player Profile & Vitals</a></li>
              <li><a href="#trophies" className="hover:text-amber-400 transition-colors">Trophy Cabinet & 2026 Honors</a></li>
              <li><a href="#film-room" className="hover:text-cyan-400 transition-colors">The Film Room (Game Tape)</a></li>
              <li><a href="#matches" className="hover:text-amber-400 transition-colors">2026 Competitive Timeline</a></li>
              <li><a href="#gallery" className="hover:text-purple-400 transition-colors">Photo & Game Gallery</a></li>
              <li><a href="#portfolio-pdf" className="hover:text-amber-400 transition-colors">Official PDF Dossier</a></li>
            </ul>
          </div>

          {/* Player Creed / Quote */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-xs font-extrabold uppercase tracking-wider text-slate-300">Player Creed</span>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/5 space-y-2">
              <p className="text-xs italic text-slate-300 leading-relaxed">
                "Hard work on the court, precision in every shot, and full trust in the team."
              </p>
              <span className="text-[10px] font-bold text-amber-400 uppercase block">— Velin #28</span>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 Theadora Adeline Valerina (Velin). All rights reserved.</p>
          
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-xs font-bold text-slate-400 hover:text-amber-400 transition-colors py-1 px-3 rounded-lg bg-white/5 hover:bg-white/10"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
