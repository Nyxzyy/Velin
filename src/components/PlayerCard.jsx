import React, { useState } from 'react';
import { Shield, Sparkles, User, Trophy, Calendar, MapPin, CheckCircle2, Heart } from 'lucide-react';
import { athleteData } from '../data/athleteData';

export default function PlayerCard() {
  const [activeTab, setActiveTab] = useState('about');

  return (
    <section id="profile" className="py-20 relative overflow-hidden">
      
      {/* Background Court Lighting */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-amber-500/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/30 text-blue-400 text-xs font-bold uppercase tracking-wider mb-3">
            <User className="w-3.5 h-3.5" />
            <span>Athlete Profile & Showcase</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            MEET <span className="text-amber-400">VELIN</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base max-w-2xl">
            Theadora Adeline Valerina — dedicated student-athlete from Malang, East Java, representing SMP Kristen Kalam Kudus, Ilufa Dragons Academy, and Hustle.
          </p>
        </div>

        {/* Card Layout: 2 Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: The Official Junior DBL Card Representation */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-sm rounded-3xl p-5 bg-gradient-to-br from-[#0F172A] via-[#090F1E] to-[#050811] border border-amber-400/30 shadow-2xl relative overflow-hidden group">
              
              {/* Card Foil Shine Effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
              
              {/* Card Header */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-blue-600/20 border border-blue-500/30 p-1 flex items-center justify-center">
                    <img src={athleteData.logos.kalamKudus} alt="KK" className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-amber-400 uppercase tracking-widest block">JUNIOR DBL 2026</span>
                    <span className="text-xs font-extrabold text-white">PLAYER CARD</span>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block">OFFICIAL NO.</span>
                  <span className="font-jersey text-3xl font-extrabold text-amber-400 leading-none">02</span>
                </div>
              </div>

              {/* Player Card Portrait with Badge */}
              <div className="relative rounded-2xl overflow-hidden mb-4 bg-gradient-to-b from-blue-900/30 to-slate-900 border border-white/15">
                <img 
                  src={athleteData.media.formalPortrait} 
                  alt="Velin Official Portrait" 
                  className="w-full h-72 object-cover object-top filter brightness-105 contrast-105"
                />

                {/* Sub-badge over image */}
                <div className="absolute bottom-2 left-2 right-2 bg-slate-950/85 backdrop-blur-md p-2.5 rounded-xl border border-white/10 flex items-center justify-between">
                  <div>
                    <h3 className="text-xs font-extrabold text-white uppercase tracking-tight">Theadora Adeline Valerina</h3>
                    <p className="text-[11px] font-bold text-amber-400">"Velin" / "Meme"</p>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <img src={athleteData.logos.dragons} alt="Dragons" className="w-7 h-7 object-contain drop-shadow" />
                  </div>
                </div>
              </div>

              {/* Vitals Grid inside Card */}
              <div className="grid grid-cols-3 gap-2 text-center pt-1 mb-4">
                <div className="p-2.5 rounded-xl bg-white/5 border border-white/5">
                  <span className="text-[10px] font-bold text-slate-400 uppercase block">Height</span>
                  <span className="font-display font-bold text-white text-base">167 cm</span>
                </div>
                <div className="p-2.5 rounded-xl bg-white/5 border border-white/5">
                  <span className="text-[10px] font-bold text-slate-400 uppercase block">Birth Year</span>
                  <span className="font-display font-bold text-white text-base">2012</span>
                </div>
                <div className="p-2.5 rounded-xl bg-white/5 border border-white/5">
                  <span className="text-[10px] font-bold text-slate-400 uppercase block">Position</span>
                  <span className="font-display font-bold text-amber-400 text-base">Guard/Fwd</span>
                </div>
              </div>

              {/* Card Footer Tag */}
              <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400">
                <span className="font-semibold text-slate-300">SMP Kristen Kalam Kudus</span>
                <span className="text-amber-400 font-bold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Official Roster
                </span>
              </div>

            </div>
          </div>

          {/* Right: Interactive Tabs (About Velin & Teams) */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            
            {/* Tabs Control */}
            <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-slate-900/80 border border-white/10 backdrop-blur-md">
              <button
                onClick={() => setActiveTab('about')}
                className={`flex-1 py-2.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${
                  activeTab === 'about'
                    ? 'bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-950 shadow-md shadow-amber-500/20'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <User className="w-4 h-4" />
                <span>About Velin</span>
              </button>

              <button
                onClick={() => setActiveTab('teams')}
                className={`flex-1 py-2.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${
                  activeTab === 'teams'
                    ? 'bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-950 shadow-md shadow-amber-500/20'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Shield className="w-4 h-4" />
                <span>Her Teams & Clubs</span>
              </button>
            </div>

            {/* Tab 1: About Velin & Her Journey */}
            {activeTab === 'about' && (
              <div className="glass-panel p-6 sm:p-8 rounded-3xl space-y-6">
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <h3 className="font-display text-lg font-bold text-white">Her Basketball Journey</h3>
                  <span className="text-xs text-amber-400 font-bold uppercase">Malang, East Java</span>
                </div>

                <p className="text-slate-300 text-sm leading-relaxed">
                  {athleteData.personal.bio}
                </p>

                {/* Highlights Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 space-y-1">
                    <div className="flex items-center gap-2">
                      <Trophy className="w-4 h-4 text-amber-400" />
                      <span className="text-xs font-extrabold text-amber-300 uppercase tracking-wider">NBL Champion (Blitar)</span>
                    </div>
                    <p className="text-xs text-slate-300">
                      Celebrated 1st Place (Juara 1) in the KU-15 Girls division with Ilufa Dragons Squad after an undefeated final run.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-orange-500/10 border border-orange-500/20 space-y-1">
                    <div className="flex items-center gap-2">
                      <Trophy className="w-4 h-4 text-orange-400" />
                      <span className="text-xs font-extrabold text-orange-300 uppercase tracking-wider">LBE Summer League (Jogja)</span>
                    </div>
                    <p className="text-xs text-slate-300">
                      Earned 3rd Place (Juara 3) Bronze Medal competing with Hustle Basketball Team against clubs from across Java.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-blue-500/10 border border-blue-500/20 space-y-1">
                    <div className="flex items-center gap-2">
                      <Shield className="w-4 h-4 text-blue-400" />
                      <span className="text-xs font-extrabold text-blue-300 uppercase tracking-wider">Junior DBL Starter</span>
                    </div>
                    <p className="text-xs text-slate-300">
                      Proudly wears #02 representing SMP Kristen Kalam Kudus Malang on the big stage at GOR Ken Arok.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 space-y-1">
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-cyan-400" />
                      <span className="text-xs font-extrabold text-cyan-300 uppercase tracking-wider">3x3 Tune Up Games (UB)</span>
                    </div>
                    <p className="text-xs text-slate-300">
                      Earned official Certificate of Sport from FISIP Universitas Brawijaya for standing achievement in KU-14 Girls.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-xs text-slate-300 flex items-center gap-3">
                  <Heart className="w-5 h-5 flex-shrink-0 text-rose-400 fill-rose-400/20" />
                  <span>
                    Known for playing with relentless heart, unselfish passing, and complete commitment to her coaches and teammates.
                  </span>
                </div>
              </div>
            )}

            {/* Tab 2: Teams & Programs */}
            {activeTab === 'teams' && (
              <div className="glass-panel p-6 sm:p-8 rounded-3xl space-y-5">
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <h3 className="font-display text-lg font-bold text-white">Teams & Clubs</h3>
                  <span className="text-xs text-slate-400 font-bold uppercase">3 Teams</span>
                </div>

                <div className="space-y-3">
                  {/* SMP Kalam Kudus */}
                  <div className="p-4 rounded-2xl bg-blue-950/30 border border-blue-800/40 flex items-center gap-4">
                    <img src={athleteData.logos.kalamKudus} alt="SMP Kalam Kudus" className="w-12 h-12 object-contain flex-shrink-0" />
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="text-sm font-bold text-white">SMP Kristen Kalam Kudus Malang</h4>
                        <span className="text-xs px-2.5 py-0.5 rounded-full bg-blue-500/20 text-blue-300 font-jersey text-base font-bold">Jersey #02</span>
                      </div>
                      <p className="text-xs text-slate-400 mt-0.5">School Team • Junior DBL East Java Series Player</p>
                    </div>
                  </div>

                  {/* Ilufa Dragons Academy */}
                  <div className="p-4 rounded-2xl bg-amber-950/20 border border-amber-800/40 flex items-center gap-4">
                    <img src={athleteData.logos.dragons} alt="Ilufa Dragons Academy" className="w-12 h-12 object-contain flex-shrink-0" />
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="text-sm font-bold text-white">Ilufa Dragons Basketball Academy</h4>
                        <span className="text-xs px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 font-jersey text-base font-bold">Jersey #28</span>
                      </div>
                      <p className="text-xs text-slate-400 mt-0.5">Club Academy • 2026 Nusantara Basketball League Champions & 3x3 Squad</p>
                    </div>
                  </div>

                  {/* Hustle Basketball Team */}
                  <div className="p-4 rounded-2xl bg-purple-950/20 border border-purple-800/40 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-purple-900/40 border border-purple-700/50 flex items-center justify-center font-display font-extrabold text-purple-300 text-lg flex-shrink-0">
                      HST
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="text-sm font-bold text-white">Hustle Basketball Team</h4>
                        <span className="text-xs px-2.5 py-0.5 rounded-full bg-purple-500/20 text-purple-300 font-jersey text-base font-bold">Jersey #28</span>
                      </div>
                      <p className="text-xs text-slate-400 mt-0.5">Club Team • LBE Summer League 2026 (Yogyakarta) 3rd Place Finish</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
