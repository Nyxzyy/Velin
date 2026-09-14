import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Trophy, Play, ArrowDown, Sparkles, Shield, Flame, Target } from 'lucide-react';
import { athleteData } from '../data/athleteData';

export default function Hero() {
  const heroRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);
  const statsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.from('.hero-badge', {
        y: -30,
        opacity: 0,
        duration: 0.8,
        delay: 0.2
      })
      .from('.hero-title-line', {
        y: 60,
        opacity: 0,
        duration: 0.9,
        stagger: 0.15
      }, '-=0.4')
      .from('.hero-subtitle', {
        y: 20,
        opacity: 0,
        duration: 0.7
      }, '-=0.4')
      .from('.hero-cta', {
        scale: 0.9,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1
      }, '-=0.3')
      .from(imageRef.current, {
        scale: 0.88,
        opacity: 0,
        y: 40,
        duration: 1.1,
        ease: 'power2.out'
      }, '-=0.8')
      .from('.hero-stat-card', {
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.08
      }, '-=0.6');
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen pt-28 pb-16 md:pt-36 md:pb-24 flex flex-col justify-center overflow-hidden bg-radial-gradient"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[900px] h-[500px] bg-gradient-to-tr from-amber-500/10 via-cyan-500/10 to-purple-600/10 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-amber-500/10 blur-[100px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full pointer-events-none -z-10" />

      {/* Subtle basketball court keyline graphic */}
      <div className="absolute inset-0 pointer-events-none opacity-5 -z-10 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Athlete Bio & Accolades */}
          <div ref={textRef} className="lg:col-span-7 flex flex-col items-start z-10">
            
            {/* Championship Badge */}
            <div className="hero-badge inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-400 text-xs font-bold tracking-wide uppercase shadow-lg shadow-amber-400/10 mb-6 backdrop-blur-md">
              <Trophy className="w-3.5 h-3.5 text-amber-400" />
              <span>2026 NBL KU-15 Champion & Junior DBL Guard</span>
            </div>

            {/* Main Athlete Name */}
            <div className="space-y-1 mb-4">
              <h2 className="hero-title-line font-jersey text-3xl sm:text-4xl text-amber-400/90 tracking-widest uppercase">
                Theadora Adeline Valerina
              </h2>
              <h1 className="hero-title-line font-display text-5xl sm:text-7xl lg:text-8xl font-extrabold text-white tracking-tight leading-[0.9]">
                VELIN <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 font-jersey tracking-normal">#28</span>
              </h1>
            </div>

            {/* Tagline & Specs */}
            <p className="hero-subtitle text-base sm:text-lg text-slate-300 max-w-xl font-normal leading-relaxed mb-6">
              Official basketball showcase of Theadora Adeline Valerina. Swingman guard and forward representing <strong className="text-white font-semibold">SMP Kristen Kalam Kudus Malang</strong>, <strong className="text-white font-semibold">Ilufa Dragons</strong>, and <strong className="text-white font-semibold">Hustle</strong>.
            </p>

            {/* Team Affiliations Pills */}
            <div className="hero-subtitle flex flex-wrap gap-2.5 items-center mb-8">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900/80 border border-slate-800 backdrop-blur-md">
                <img src={athleteData.logos.kalamKudus} alt="SMP Kalam Kudus" className="w-5 h-5 object-contain" />
                <span className="text-xs font-semibold text-slate-200">SMP Kalam Kudus (#02)</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900/80 border border-slate-800 backdrop-blur-md">
                <img src={athleteData.logos.dragons} alt="Ilufa Dragons Academy" className="w-5 h-5 object-contain" />
                <span className="text-xs font-semibold text-slate-200">Ilufa Dragons (#28)</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-purple-950/40 border border-purple-800/40 backdrop-blur-md">
                <div className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
                <span className="text-xs font-semibold text-purple-200">Hustle Basketball Team</span>
              </div>
            </div>

            {/* Call to Actions */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#film-room"
                className="hero-cta px-6 py-3.5 rounded-2xl bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-300 text-slate-950 font-display text-sm font-bold uppercase tracking-wider shadow-xl shadow-amber-500/25 hover:shadow-amber-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2.5 group"
              >
                <div className="w-6 h-6 rounded-full bg-slate-950/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Play className="w-3.5 h-3.5 fill-current" />
                </div>
                <span>Watch Film Room</span>
              </a>

              <a
                href="#profile"
                className="hero-cta px-6 py-3.5 rounded-2xl bg-white/5 hover:bg-white/10 text-white border border-white/15 backdrop-blur-md font-display text-sm font-bold uppercase tracking-wider hover:border-white/30 transition-all flex items-center gap-2"
              >
                <span>Player Profile</span>
                <ArrowDown className="w-4 h-4 text-slate-400" />
              </a>
            </div>
          </div>

          {/* Right Column: Hero Visual Card with High-Res Athlete Images */}
          <div ref={imageRef} className="lg:col-span-5 relative flex justify-center">
            
            {/* Visual Frame & Card */}
            <div className="relative w-full max-w-md">
              {/* Outer glow aura */}
              <div className="absolute -inset-1 bg-gradient-to-r from-amber-500/30 via-cyan-500/20 to-purple-600/30 rounded-3xl blur-2xl opacity-75 group-hover:opacity-100 transition duration-1000 -z-10" />

              <div className="relative rounded-3xl overflow-hidden border border-white/15 bg-gradient-to-b from-slate-900/90 via-[#0C1427]/95 to-[#080C16] shadow-2xl p-4 backdrop-blur-xl">
                
                {/* Top card header */}
                <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-3">
                  <div className="flex items-center gap-2">
                    <img src={athleteData.logos.kalamKudus} alt="KK" className="w-6 h-6 object-contain" />
                    <span className="text-[11px] font-bold tracking-widest text-slate-400 uppercase">ATHLETE PROFILE</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider">SEASON 2026</span>
                  </div>
                </div>

                {/* Main Photo Showcase */}
                <div className="relative h-[380px] sm:h-[420px] rounded-2xl overflow-hidden group">
                  <img 
                    src={athleteData.media.charisPortrait} 
                    alt="Theadora Adeline Valerina - Velin"
                    className="w-full h-full object-cover object-top filter contrast-105 brightness-95 group-hover:scale-105 transition-transform duration-700 ease-out"
                  />

                  {/* Gradient overlays for depth */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090E1B] via-transparent to-black/20" />

                  {/* Top-Right Jersey Badge */}
                  <div className="absolute top-3 right-3 flex flex-col gap-1 items-end">
                    <div className="bg-amber-500/90 text-black px-3 py-1 rounded-xl backdrop-blur-md shadow-lg font-jersey text-2xl font-bold flex items-center gap-1 border border-amber-300/40">
                      <span>#28</span>
                    </div>
                    <div className="bg-blue-600/90 text-white px-2.5 py-0.5 rounded-lg backdrop-blur-md font-jersey text-sm font-bold flex items-center gap-1 border border-blue-400/40">
                      <span>DBL #02</span>
                    </div>
                  </div>

                  {/* Inset Official Portrait Pill */}
                  <div className="absolute top-3 left-3 flex items-center gap-2 bg-[#090F1E]/90 border border-white/15 p-1.5 rounded-2xl backdrop-blur-md shadow-xl">
                    <img 
                      src={athleteData.media.formalPortrait} 
                      alt="Velin ID Portrait"
                      className="w-11 h-11 rounded-xl object-cover object-top border border-amber-400/50 shadow-inner"
                    />
                    <div className="pr-2">
                      <p className="text-[10px] font-extrabold text-amber-400 uppercase leading-none">THEADORA A.V.</p>
                      <p className="text-[11px] font-bold text-white leading-tight">VELIN</p>
                    </div>
                  </div>

                  {/* Bottom In-Image Meta */}
                  <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-slate-950/80 border border-white/10 backdrop-blur-md">
                    <div className="flex items-center justify-between text-xs">
                      <div>
                        <span className="text-slate-400 text-[10px] uppercase font-bold block">Height & Reach</span>
                        <span className="font-display font-extrabold text-amber-400 text-sm">167 CM</span>
                      </div>
                      <div className="w-[1px] h-6 bg-white/10" />
                      <div>
                        <span className="text-slate-400 text-[10px] uppercase font-bold block">Birth Year</span>
                        <span className="font-display font-extrabold text-white text-sm">2012 (KU-15)</span>
                      </div>
                      <div className="w-[1px] h-6 bg-white/10" />
                      <div>
                        <span className="text-slate-400 text-[10px] uppercase font-bold block">Position</span>
                        <span className="font-display font-extrabold text-cyan-400 text-sm">GUARD / WING</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Footer Ticker */}
                <div className="mt-3 pt-2.5 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                    <span>NBL Champion • Blitar 2026</span>
                  </span>
                  <span className="text-amber-400 font-bold uppercase tracking-wider">Official Showcase</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Quick Stats Row */}
        <div ref={statsRef} className="mt-16 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {athleteData.stats.map((stat, idx) => (
            <div 
              key={idx}
              className="hero-stat-card glass-card p-4 rounded-2xl flex flex-col items-center text-center group hover:border-amber-400/40 transition-all duration-300"
            >
              <span className="text-[11px] uppercase tracking-wider text-slate-400 font-bold mb-1 group-hover:text-slate-200 transition-colors">
                {stat.label}
              </span>
              <div className="flex items-baseline gap-1 my-0.5">
                <span className="font-display text-2xl sm:text-3xl font-extrabold text-white group-hover:text-amber-400 transition-colors">
                  {stat.value}
                </span>
              </div>
              <span className="text-[10px] font-bold text-amber-400/80 uppercase tracking-tight">
                {stat.unit}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
