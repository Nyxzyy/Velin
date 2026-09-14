import React, { useState } from 'react';
import { Calendar, MapPin, Trophy, Shield, ChevronRight, Layers } from 'lucide-react';
import { athleteData } from '../data/athleteData';

export default function MatchTimeline() {
  const [filter, setFilter] = useState('All');

  const filterOptions = [
    { label: 'All Games (30+)', value: 'All' },
    { label: '2026 Season', value: '2026' },
    { label: '2025 Season', value: '2025' },
    { label: '2024 Season', value: '2024' },
    { label: 'Junior DBL', value: 'DBL' },
    { label: '🏆 Podiums & Wins', value: 'Podiums' }
  ];

  const filteredMatches = athleteData.matches.filter(m => {
    if (filter === 'All') return true;
    if (filter === '2026') return m.year === '2026';
    if (filter === '2025') return m.year === '2025';
    if (filter === '2024') return m.year === '2024';
    if (filter === 'DBL') return m.event.includes('Junior DBL');
    if (filter === 'Podiums') {
      return m.badge.includes('JUARA') || m.badge.includes('VICTORY') || m.badge.includes('RUNNER UP');
    }
    return true;
  });

  return (
    <section id="matches" className="py-20 relative overflow-hidden bg-[#070B14]">
      
      {/* Background Court Rings */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-blue-600/10 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-amber-500/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-400/30 text-indigo-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Calendar className="w-3.5 h-3.5" />
            <span>Complete Career Match History</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            COMPETITIVE <span className="text-amber-400">TIMELINE</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base max-w-2xl">
            A comprehensive record of competitive matches, tournament stages, and inter-city tournaments played across Malang, Surabaya, Blitar, Madiun, and Yogyakarta from 2024 to 2026.
          </p>

          {/* Filter Pills */}
          <div className="mt-8 flex flex-wrap justify-center gap-2 p-1.5 rounded-2xl bg-slate-900/80 border border-white/10 backdrop-blur-md">
            {filterOptions.map((opt) => (
              <button
                key={opt.value}
                onClick={() => setFilter(opt.value)}
                className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                  filter === opt.value
                    ? 'bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-950 shadow-md shadow-amber-500/20'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>

          <div className="mt-3 text-[11px] font-semibold text-slate-500 flex items-center gap-1.5">
            <Layers className="w-3 h-3 text-amber-400" />
            <span>Showing {filteredMatches.length} Recorded Matches</span>
          </div>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredMatches.map((match) => {
            const isChampionMatch = match.badge.includes('JUARA 1') || match.badge.includes('VICTORY');
            const isPodiumMatch = match.badge.includes('JUARA 3') || match.badge.includes('RUNNER UP');
            const isDBL = match.event.includes('Junior DBL');

            return (
              <div
                key={match.id}
                className={`p-6 rounded-3xl border transition-all duration-300 hover:scale-[1.01] flex flex-col justify-between ${
                  isChampionMatch
                    ? 'bg-gradient-to-br from-amber-950/20 via-[#0F172A] to-[#090F1E] border-amber-400/30 hover:border-amber-400/60 shadow-lg shadow-amber-500/5'
                    : isPodiumMatch
                    ? 'bg-gradient-to-br from-orange-950/20 via-[#0F172A] to-[#090F1E] border-orange-400/30 hover:border-orange-400/60'
                    : isDBL
                    ? 'bg-gradient-to-br from-blue-950/20 via-[#0F172A] to-[#090F1E] border-blue-400/30 hover:border-blue-400/60'
                    : 'bg-white/5 border-white/10 hover:border-white/20'
                }`}
              >
                <div>
                  {/* Top Badge & Date */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-bold text-slate-400 flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      <span>{match.date}</span>
                    </span>
                    <span className={`text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full border ${
                      isChampionMatch 
                        ? 'bg-amber-400/20 text-amber-300 border-amber-400/40' 
                        : isPodiumMatch
                        ? 'bg-orange-400/20 text-orange-300 border-orange-400/40'
                        : isDBL 
                        ? 'bg-blue-400/20 text-blue-300 border-blue-400/40' 
                        : 'bg-white/10 text-slate-300 border-white/10'
                    }`}>
                      {match.badge}
                    </span>
                  </div>

                  {/* Tournament Event */}
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-amber-400 block mb-1">
                    {match.event}
                  </span>

                  {/* Opponent Matchup */}
                  <div className="my-3 space-y-1">
                    <div className="flex items-center justify-between text-sm font-extrabold text-white">
                      <span>{match.team}</span>
                      <span className="text-xs font-bold text-slate-500">VS</span>
                    </div>
                    <div className="text-sm font-bold text-slate-300">
                      {match.opponent}
                    </div>
                  </div>
                </div>

                {/* Venue Footer */}
                <div className="pt-4 mt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    <span>{match.venue}</span>
                  </span>
                  <span className="text-[10px] uppercase font-bold text-slate-400 px-2 py-0.5 rounded bg-white/5">
                    {match.year}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
