import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { 
  Trophy, Medal, Award, Sparkles, Calendar, MapPin, 
  ExternalLink, Eye, Maximize2, X, ChevronLeft, ChevronRight, Download, CheckCircle2 
} from 'lucide-react';
import { athleteData } from '../data/athleteData';

export default function Trophies() {
  const [selectedYear, setSelectedYear] = useState('All');
  const [activeModalItem, setActiveModalItem] = useState(null);

  const triggerChampionshipConfetti = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (rect.left + rect.width / 2) / window.innerWidth;
    const y = (rect.top + rect.height / 2) / window.innerHeight;

    confetti({
      particleCount: 80,
      spread: 70,
      origin: { x, y },
      colors: ['#FFB800', '#F59E0B', '#FBBF24', '#ffffff', '#06B6D4']
    });
  };

  // Keyboard navigation for modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!activeModalItem) return;
      if (e.key === 'Escape') setActiveModalItem(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeModalItem]);

  const years = ['All', '2026', '2025', '2024'];

  const filteredTrophies = selectedYear === 'All'
    ? athleteData.trophies
    : athleteData.trophies.filter(t => t.year === selectedYear);

  // Collect items that have medals/certificates
  const certificateItems = athleteData.trophies.filter(
    t => t.image && (t.image.toLowerCase().includes('cert') || t.image.toLowerCase().includes('medal'))
  );

  return (
    <section id="trophies" className="py-20 relative overflow-hidden bg-[#070C18]">
      
      {/* Background Ambience */}
      <div className="absolute top-10 right-1/4 w-96 h-96 bg-amber-500/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-purple-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Trophy className="w-3.5 h-3.5" />
            <span>Championships & Verified Honors</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            THE TROPHY <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-300">CABINET</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base max-w-2xl">
            Major championship trophies, podium finishes, and official medal & certificate documentation captured from 2024 to 2026 across regional and national stages.
          </p>

          {/* Year Filter Pills */}
          <div className="mt-8 flex flex-wrap justify-center gap-2 p-1.5 rounded-2xl bg-slate-900/80 border border-white/10 backdrop-blur-md">
            {years.map((year) => (
              <button
                key={year}
                onClick={() => setSelectedYear(year)}
                className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                  selectedYear === year
                    ? 'bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-950 shadow-md shadow-amber-500/20'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {year === 'All' ? 'All Trophies (10)' : `${year} Season`}
              </button>
            ))}
          </div>
        </div>

        {/* Major Trophies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {filteredTrophies.map((trophy) => {
            const isChampion = trophy.id === 'nbl-2026';
            const hasMedalImage = Boolean(trophy.image);
            
            return (
              <div
                key={trophy.id}
                onClick={isChampion ? triggerChampionshipConfetti : undefined}
                className={`relative rounded-3xl p-6 sm:p-8 transition-all duration-300 group overflow-hidden border flex flex-col justify-between ${
                  isChampion 
                    ? 'bg-gradient-to-br from-amber-950/30 via-[#10182E] to-[#090F1E] border-amber-400/40 hover:border-amber-400 cursor-pointer shadow-xl shadow-amber-500/10 hover:shadow-amber-500/20' 
                    : 'bg-[#0E1528]/80 border-white/10 hover:border-white/20'
                }`}
              >
                {/* Background decorative watermark */}
                <div className="absolute -right-8 -bottom-8 opacity-5 group-hover:opacity-10 transition-opacity pointer-events-none">
                  <Trophy className="w-48 h-48 text-white" />
                </div>

                <div>
                  {/* Top Badge & Highlight */}
                  <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
                    <div className="flex items-center gap-2">
                      <span className={`px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider border ${trophy.badgeColor}`}>
                        {trophy.title}
                      </span>
                      <span className="text-[10px] font-bold text-slate-400 px-2 py-0.5 rounded bg-white/5 border border-white/5">
                        {trophy.year}
                      </span>
                    </div>
                    <span className="text-xs font-bold text-slate-400 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                      <span>{trophy.highlight}</span>
                    </span>
                  </div>

                  {/* Tournament Name & Team */}
                  <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-2 group-hover:text-amber-300 transition-colors">
                    {trophy.tournament}
                  </h3>
                  
                  <p className="text-sm font-semibold text-slate-300 mb-4 flex items-center gap-2 flex-wrap">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                    <span>Team: {trophy.team}</span>
                    <span className="text-xs text-slate-400">({trophy.category})</span>
                  </p>

                  {/* Description */}
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-5">
                    {trophy.description}
                  </p>

                  {/* High-Res Medal/Certificate Visual Preview if Available */}
                  {hasMedalImage && (
                    <div 
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveModalItem(trophy);
                      }}
                      className="mb-5 rounded-2xl overflow-hidden border border-amber-400/25 hover:border-amber-400/70 transition-all cursor-pointer group/thumb bg-[#070D1A] relative shadow-lg"
                    >
                      <div className="aspect-[16/10] w-full flex items-center justify-center bg-slate-950/90 p-2 overflow-hidden">
                        <img 
                          src={trophy.image} 
                          alt={trophy.title} 
                          className="w-full h-full object-contain group-hover/thumb:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="bg-[#0D1527] border-t border-white/10 px-4 py-2.5 flex items-center justify-between">
                        <div className="flex items-center gap-2 min-w-0">
                          <span className="w-5 h-5 rounded-lg bg-amber-400/20 text-amber-400 flex items-center justify-center flex-shrink-0">
                            <Award className="w-3 h-3" />
                          </span>
                          <span className="text-xs font-bold text-slate-200 group-hover/thumb:text-amber-300 transition-colors truncate">
                            {trophy.medal}
                          </span>
                        </div>
                        <span className="text-[11px] px-2.5 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-amber-400 font-bold flex items-center gap-1.5 flex-shrink-0 border border-white/10">
                          <Eye className="w-3 h-3 text-amber-400" />
                          <span>View Photo</span>
                        </span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Meta details footer */}
                <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      <span>{trophy.date}</span>
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      <span>{trophy.location}</span>
                    </span>
                  </div>

                  {isChampion && (
                    <span className="text-amber-400 font-bold flex items-center gap-1 text-[11px] group-hover:scale-105 transition-transform">
                      <span>Click to Celebrate</span> 🎉
                    </span>
                  )}

                  {hasMedalImage && !isChampion && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveModalItem(trophy);
                      }}
                      className="text-amber-400 font-bold hover:underline flex items-center gap-1 text-[11px]"
                    >
                      <span>Inspect Medal</span>
                      <Maximize2 className="w-3 h-3" />
                    </button>
                  )}
                </div>

              </div>
            );
          })}
        </div>

        {/* Dedicated Medals & Certificates Showcase Ribbon */}
        <div className="mt-16 pt-12 border-t border-white/10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/30 text-blue-400 text-xs font-bold uppercase tracking-wider mb-2">
                <Award className="w-3.5 h-3.5" />
                <span>Physical Medals & Official Piagam</span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white">
                VERIFIED MEDALS & <span className="text-amber-400">CERTIFICATES</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                Official physical hardware and signed certificates awarded by Perbasi, UB, and tournament committees. Click to enlarge.
              </p>
            </div>

            <a
              href="#portfolio-pdf"
              className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-bold uppercase tracking-wider text-slate-300 hover:text-white transition-all flex items-center gap-1.5 self-start sm:self-auto"
            >
              <span>View Full PDF Portfolios</span>
              <ExternalLink className="w-3.5 h-3.5 text-amber-400" />
            </a>
          </div>

          {/* Certificate Cards Horizontal Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {certificateItems.map((item) => (
              <div
                key={item.id}
                onClick={() => setActiveModalItem(item)}
                className="group relative rounded-2xl overflow-hidden bg-slate-900 border border-white/10 hover:border-amber-400/50 cursor-pointer shadow-lg transition-all"
              >
                <div className="aspect-[4/3] w-full overflow-hidden bg-slate-950">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>

                <div className="p-4 bg-gradient-to-t from-slate-950 via-[#0B1120] to-transparent">
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded bg-amber-400/20 text-amber-300 border border-amber-400/30">
                      {item.year} • {item.title.split('(')[0]}
                    </span>
                    <span className="text-[10px] text-slate-400 font-semibold">{item.medal}</span>
                  </div>
                  <h4 className="text-sm font-bold text-white group-hover:text-amber-300 transition-colors line-clamp-1">
                    {item.tournament}
                  </h4>
                  <p className="text-[11px] text-slate-400 line-clamp-1 mt-0.5">
                    {item.location} • {item.team}
                  </p>
                </div>

                {/* Hover overlay icon */}
                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-4 h-4 text-white" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certificate Callout Preview */}
        <div className="mt-12 rounded-3xl p-6 sm:p-8 bg-gradient-to-r from-blue-950/40 via-slate-900/60 to-purple-950/40 border border-white/10 backdrop-blur-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-amber-400/10 border border-amber-400/30 flex items-center justify-center flex-shrink-0">
              <Award className="w-7 h-7 text-amber-400" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold text-white">Full Certificate & Piagam Documentation</h4>
              <p className="text-xs sm:text-sm text-slate-400">
                Official certificates signed by Perbasi Kota Malang, Perbasi Kota Blitar, FISIP Universitas Brawijaya, and Cleo Nextgen Cup.
              </p>
            </div>
          </div>

          <a
            href={athleteData.media.portfolioPdf2026}
            download="Theadora_Adeline_Valerina_Velin_Portofolio_2026.pdf"
            className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-display text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 whitespace-nowrap hover:scale-102"
          >
            <span>Download 2026 Portfolio PDF</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

      </div>

      {/* High-Resolution Modal / Lightbox for Medals and Certificates */}
      {activeModalItem && (
        <div 
          onClick={() => setActiveModalItem(null)}
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8"
        >
          {/* Close Button */}
          <button
            onClick={() => setActiveModalItem(null)}
            className="absolute top-5 right-5 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white z-50 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Modal Container */}
          <div 
            onClick={(e) => e.stopPropagation()}
            className="max-w-4xl max-h-[90vh] flex flex-col items-center justify-center relative w-full"
          >
            <div className="max-h-[72vh] w-full flex items-center justify-center overflow-hidden rounded-2xl border border-white/20 bg-slate-950 shadow-2xl p-2">
              <img
                src={activeModalItem.image}
                alt={activeModalItem.title}
                className="max-h-[68vh] max-w-full object-contain rounded-xl"
              />
            </div>
            
            <div className="mt-4 text-center max-w-xl">
              <div className="flex items-center justify-center gap-2 mb-1.5">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-amber-400 text-slate-950">
                  {activeModalItem.title}
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase bg-white/10 text-white">
                  {activeModalItem.year}
                </span>
              </div>
              <h3 className="font-display text-lg sm:text-xl font-bold text-white">
                {activeModalItem.tournament}
              </h3>
              <p className="text-xs text-slate-300 mt-1">
                {activeModalItem.medal} • {activeModalItem.location} • {activeModalItem.team}
              </p>
              <div className="mt-3 flex items-center justify-center gap-3">
                <a
                  href={activeModalItem.image}
                  download
                  className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 transition-colors"
                >
                  <Download className="w-3.5 h-3.5 text-amber-400" />
                  <span>Download High-Res</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
