import React, { useState } from 'react';
import { FileText, Download, ExternalLink, Award, Eye, Layers, Sparkles, BookOpen } from 'lucide-react';
import { athleteData } from '../data/athleteData';

export default function PortfolioPdfViewer() {
  const [activeDocKey, setActiveDocKey] = useState('2026');
  const [showEmbed, setShowEmbed] = useState(false);

  const documents = {
    '2026': {
      id: '2026',
      title: 'Velin Portofolio 2026.pdf',
      badge: 'Current Edition • 11 Pages • 15.6 MB',
      tabLabel: '2026 Season Portfolio (11 Pages)',
      subtext: 'NBL Champion, LBE Summer League Jogja, 3x3 UB & Junior DBL',
      file: athleteData.media.portfolioPdf2026,
      downloadName: 'Theadora_Adeline_Valerina_Velin_Portofolio_2026.pdf',
      summary: "Comprehensive 11-page official portfolio documenting Velin's 2026 championship run in Blitar, national summer league in Yogyakarta, 3x3 standing achievement at UB, and Junior DBL starter roster.",
      stats: [
        { label: 'Documented Events', value: '4 Major Tournaments' },
        { label: 'Top Achievements', value: 'Juara 1 & Juara 3' },
        { label: 'Key Teams', value: 'Kalam Kudus & Hustle' },
      ],
      pages: [
        { page: 1, title: 'Official Cover & Dossier Identity', detail: 'Theadora Adeline Valerina / Velin profile in Kalam Kudus colors.' },
        { page: 2, title: '3x3 Tune Up Games (FISIP UB)', detail: 'Certificate of Sport & match reports vs Metal Scuba and Fighter.' },
        { page: 3, title: 'Nusantara Basketball League (Part 1)', detail: 'Tournament opener in Blitar vs Juniors & Perbaspa.' },
        { page: 4, title: 'Nusantara Basketball League (Part 2)', detail: 'Semi-final & Grand Final matches vs Nextgen & Jethree.' },
        { page: 5, title: 'Awarding Champions — JUARA 1', detail: 'Gold medal ceremony, championship trophy, and Piagam Penghargaan.' },
        { page: 6, title: 'KU-15 Scrimmage Games', detail: 'Unggul Sports Center match records vs Greyhound and Fighter.' },
        { page: 7, title: 'LBE Summer League Yogyakarta (Part 1)', detail: 'Match 1 vs Favorita Garut & Match 2 vs Rising Star Jogja.' },
        { page: 8, title: 'LBE Summer League Yogyakarta (Part 2)', detail: 'Match 3 vs Galaxy Stars Bogor & Match 4 vs SSS Jogjakarta.' },
        { page: 9, title: 'LBE Summer League Awards — JUARA 3', detail: 'Third Place Bronze Medal, Certificate of Achievement & Participation.' },
        { page: 10, title: 'Junior DBL 2026 Kalam Kudus', detail: 'Official Junior DBL Player Card #2 and team roster.' },
        { page: 11, title: 'Junior DBL Main Stage Matches', detail: 'GOR Ken Arok clashes against SMPN 3 Malang & SMP Charis.' },
      ]
    },
    '2425': {
      id: '2425',
      title: 'Portofolio Velin 24-25.pdf',
      badge: 'Career Foundation • 18 Pages • 33.1 MB',
      tabLabel: '2024–2025 Career Portfolio (18 Pages)',
      subtext: 'Cleo Nextgen Surabaya, Perbasi Cup, Rookie Fun & H7 Tournaments',
      file: athleteData.media.portfolioPdf2425,
      downloadName: 'Theadora_Adeline_Valerina_Portofolio_Velin_24-25.pdf',
      summary: "Detailed 18-page career record capturing Velin's early competitive progression with Ilufa Dragons across East Java — including podium finishes in Surabaya, Malang, and Madiun.",
      stats: [
        { label: 'Documented Events', value: '6 Championships' },
        { label: 'Top Achievements', value: '5 Podium Finishes' },
        { label: 'Key Academy', value: 'Ilufa Dragons Malang' },
      ],
      pages: [
        { page: 1, title: 'Official Cover — Velin Portfolio', detail: 'Theadora Adeline Valerina / Velin portfolio cover (2024–2025).' },
        { page: 2, title: 'Rookie Basketball KU-15 (Dec 2024)', detail: 'Dragons vs IM (Indonesia Muda) tournament match.' },
        { page: 3, title: 'Rookie Basketball KU-15 Runner Up', detail: 'Dragons vs Survivor — 2nd Winner / Juara 2 finish.' },
        { page: 4, title: 'Rookie Basketball KU-15 (May 2025)', detail: 'Dragons vs Fighter clash at Unggul Sports Center.' },
        { page: 5, title: 'Rookie Basketball In-Game Action', detail: 'Court highlights and game play against Fighter.' },
        { page: 6, title: 'Rookie KU-15 3rd Winner Awarding', detail: 'Juara 3 trophy presentation, certificate, and team podium.' },
        { page: 7, title: 'Rookie Basketball KU-13 Group Stage', detail: 'Dragons vs IM (Indonesia Muda) KU-13 bracket.' },
        { page: 8, title: 'Rookie Basketball KU-13 Playoff', detail: 'Dragons vs HBA (Highfive Basketball Academy).' },
        { page: 9, title: 'Rookie Basketball Ceremonial Award', detail: 'Future Team ceremonial award & recognition.' },
        { page: 10, title: 'Rookie Fun Basketball Team Record', detail: 'Team presentation and squad roster documentation.' },
        { page: 11, title: 'Dempo Cup XX — Langsep Challenge', detail: 'Dempo Cup match records and team participation (Oct 2025).' },
        { page: 12, title: 'Frateran Competition (FRACO 2025)', detail: 'FRACO tournament and Perbasi Cup Kota Malang preparation.' },
        { page: 13, title: 'Perbasi Cup Kota Malang — JUARA 3', detail: 'Dragons vs Human (KU-14 Putri) and 3rd place medal ceremony.' },
        { page: 14, title: 'Tridharma Winter Cup Madiun', detail: 'Matches vs Indocourt Kediri & Sahabat Ponorogo — Juara 4 Finalist.' },
        { page: 15, title: 'H7 Tournament (Hindra Jaya)', detail: 'Matches vs Mahameru Surabaya, H7 Malang, and Sabertooth Surabaya.' },
        { page: 16, title: 'H7 Tournament Juara 3 Awarding', detail: 'Third place trophy, medals, and celebration photo.' },
        { page: 17, title: 'Cleo Nextgen Student League Surabaya', detail: 'Matches vs Line Spartan, Blitz Jakarta, Merpati Bali, and Cougar Jakarta.' },
        { page: 18, title: 'Cleo Nextgen Awarding Night — JUARA 3', detail: 'Ciputra World Surabaya 3rd place trophy & certificate ceremony.' },
      ]
    }
  };

  const currentDoc = documents[activeDocKey];

  return (
    <section id="portfolio-pdf" className="py-20 relative overflow-hidden bg-[#070A13]">
      
      {/* Background Court Circles */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-amber-500/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-blue-600/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-400 text-xs font-bold uppercase tracking-wider mb-3">
            <FileText className="w-3.5 h-3.5" />
            <span>Official Athlete Documentation</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            OFFICIAL <span className="text-amber-400">PORTFOLIO DOSSIERS</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base max-w-2xl">
            Browse and download Velin's official verified player portfolios containing match scorecards, competition certifications, and game records.
          </p>

          {/* Document Switcher Tabs */}
          <div className="mt-8 flex flex-col sm:flex-row items-center gap-3 p-1.5 rounded-2xl bg-slate-900/80 border border-white/10 backdrop-blur-md max-w-2xl w-full">
            <button
              onClick={() => setActiveDocKey('2026')}
              className={`flex-1 w-full sm:w-auto px-5 py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${
                activeDocKey === '2026'
                  ? 'bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-950 shadow-lg shadow-amber-500/20'
                  : 'text-slate-300 hover:text-white hover:bg-white/5'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>2026 Portfolio (11 Pages)</span>
            </button>

            <button
              onClick={() => setActiveDocKey('2425')}
              className={`flex-1 w-full sm:w-auto px-5 py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${
                activeDocKey === '2425'
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/20'
                  : 'text-slate-300 hover:text-white hover:bg-white/5'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>2024–2025 Portfolio (18 Pages)</span>
            </button>
          </div>
        </div>

        {/* Main Document Showcase Banner */}
        <div className="rounded-3xl p-6 sm:p-10 bg-gradient-to-br from-[#0F172A] via-[#0D1527] to-[#070D1B] border border-amber-400/30 shadow-2xl relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Info Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <span className={`px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider ${
                  activeDocKey === '2026' ? 'bg-amber-400 text-slate-950' : 'bg-blue-500 text-white'
                }`}>
                  PDF PORTFOLIO
                </span>
                <span className="text-xs font-bold text-slate-400">
                  {currentDoc.badge}
                </span>
              </div>

              <div>
                <h3 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                  {currentDoc.title}
                </h3>
                <p className="text-slate-300 text-sm sm:text-base mt-2 leading-relaxed">
                  {currentDoc.summary}
                </p>
              </div>

              {/* Quick Stat Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {currentDoc.stats.map((st, i) => (
                  <div key={i} className="p-3 rounded-2xl bg-white/5 border border-white/5">
                    <span className="text-[10px] font-bold text-slate-400 uppercase block">{st.label}</span>
                    <span className="text-sm font-bold text-white">{st.value}</span>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href={currentDoc.file}
                  download={currentDoc.downloadName}
                  className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-300 text-slate-950 font-display text-xs font-extrabold uppercase tracking-wider shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Full PDF ({currentDoc.badge.split('•')[2]?.trim() || 'Direct'})</span>
                </a>

                <button
                  onClick={() => setShowEmbed(!showEmbed)}
                  className="px-6 py-3.5 rounded-2xl bg-white/10 hover:bg-white/15 text-white border border-white/15 font-display text-xs font-extrabold uppercase tracking-wider transition-all flex items-center gap-2"
                >
                  <Eye className="w-4 h-4 text-amber-400" />
                  <span>{showEmbed ? 'Hide In-Page Viewer' : 'Preview Document'}</span>
                </button>

                <a
                  href={currentDoc.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-3.5 rounded-2xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 font-display text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-1.5"
                >
                  <span>Open Tab</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Right: Interactive Page Index Breakdown */}
            <div className="lg:col-span-5 bg-slate-950/70 p-5 rounded-2xl border border-white/10 backdrop-blur-md">
              <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-3">
                <span className="text-xs font-extrabold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-amber-400" />
                  <span>Document Page Index</span>
                </span>
                <span className="text-[10px] font-bold text-amber-400 uppercase">
                  {currentDoc.pages.length} Pages Total
                </span>
              </div>

              <div className="space-y-2 max-h-[340px] overflow-y-auto pr-1">
                {currentDoc.pages.map((item) => (
                  <div key={item.page} className="p-2.5 rounded-xl bg-white/5 border border-white/5 flex items-start gap-3 hover:bg-white/10 transition-colors">
                    <span className="w-6 h-6 rounded-lg bg-amber-500/20 text-amber-300 text-xs font-jersey font-bold flex items-center justify-center flex-shrink-0">
                      {item.page < 10 ? `0${item.page}` : item.page}
                    </span>
                    <div className="min-w-0">
                      <h5 className="text-xs font-bold text-white truncate">{item.title}</h5>
                      <p className="text-[10px] text-slate-400 truncate">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Embedded PDF Viewer Frame if toggled */}
          {showEmbed && (
            <div className="mt-8 pt-8 border-t border-white/10">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-slate-300">Live In-Page Document Stream:</span>
                  <span className="text-xs text-amber-400 font-bold">{currentDoc.title}</span>
                </div>
                <a
                  href={currentDoc.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-amber-400 hover:underline flex items-center gap-1 font-semibold"
                >
                  <span>Open in separate browser window</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
              <div className="w-full h-[700px] rounded-2xl overflow-hidden border border-white/15 bg-slate-900 shadow-inner">
                <iframe
                  key={currentDoc.id}
                  src={`${currentDoc.file}#toolbar=1&navpanes=1`}
                  title={currentDoc.title}
                  className="w-full h-full border-0"
                />
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
