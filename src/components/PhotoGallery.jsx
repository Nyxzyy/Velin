import React, { useState } from 'react';
import { Image as ImageIcon, X, ChevronLeft, ChevronRight, Maximize2, Tag } from 'lucide-react';
import { athleteData } from '../data/athleteData';

export default function PhotoGallery() {
  const [selectedTag, setSelectedTag] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const tags = ['All', 'Action', 'Portrait', 'Awards', 'Teams'];

  const filteredPhotos = selectedTag === 'All'
    ? athleteData.gallery
    : athleteData.gallery.filter(p => p.tag === selectedTag);

  const openLightbox = (index) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const nextPhoto = (e) => {
    e?.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev + 1) % filteredPhotos.length);
    }
  };

  const prevPhoto = (e) => {
    e?.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev - 1 + filteredPhotos.length) % filteredPhotos.length);
    }
  };

  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') setLightboxIndex((prev) => (prev + 1) % filteredPhotos.length);
      if (e.key === 'ArrowLeft') setLightboxIndex((prev) => (prev - 1 + filteredPhotos.length) % filteredPhotos.length);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, filteredPhotos.length]);

  return (
    <section id="gallery" className="py-20 relative overflow-hidden bg-[#080D1A]">
      
      {/* Background Glow */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-purple-600/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-400/30 text-purple-400 text-xs font-bold uppercase tracking-wider mb-3">
            <ImageIcon className="w-3.5 h-3.5" />
            <span>Game Photography & Memorabilia</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            PHOTO <span className="text-purple-400">GALLERY</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base max-w-2xl">
            In-game action captures, official team rosters, award ceremonies, and sparring moments.
          </p>

          {/* Filter Pills */}
          <div className="mt-8 flex flex-wrap justify-center gap-2 p-1.5 rounded-2xl bg-slate-900/80 border border-white/10 backdrop-blur-md">
            {tags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                  selectedTag === tag
                    ? 'bg-gradient-to-r from-purple-500 to-indigo-500 text-white shadow-md shadow-purple-500/20'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPhotos.map((photo, idx) => (
            <div
              key={idx}
              onClick={() => openLightbox(idx)}
              className="group relative rounded-3xl overflow-hidden bg-slate-900 border border-white/10 cursor-pointer shadow-xl hover:border-amber-400/50 transition-all duration-300 aspect-[4/3]"
            >
              <img
                src={photo.src}
                alt={photo.title}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                loading="lazy"
              />

              {/* Gradient Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

              {/* Top Tag */}
              <div className="absolute top-3 right-3">
                <span className="px-2.5 py-1 rounded-xl bg-slate-950/80 backdrop-blur-md text-[10px] font-extrabold uppercase tracking-wider text-amber-400 border border-white/10">
                  {photo.tag}
                </span>
              </div>

              {/* Hover Expand Icon */}
              <div className="absolute top-3 left-3 w-8 h-8 rounded-full bg-slate-950/60 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-4 h-4 text-white" />
              </div>

              {/* Bottom Caption */}
              <div className="absolute bottom-3 left-4 right-4">
                <h4 className="text-sm font-bold text-white tracking-tight group-hover:text-amber-300 transition-colors">
                  {photo.title}
                </h4>
                <p className="text-[11px] text-slate-300 line-clamp-1 mt-0.5">
                  {photo.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div 
          onClick={closeLightbox}
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8"
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-5 right-5 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white z-50 transition-colors"
            aria-label="Close lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Prev Button */}
          <button
            onClick={prevPhoto}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white z-50 transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next Button */}
          <button
            onClick={nextPhoto}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white z-50 transition-colors"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Active Image Box */}
          <div 
            onClick={(e) => e.stopPropagation()}
            className="max-w-5xl max-h-[85vh] flex flex-col items-center justify-center relative"
          >
            <img
              src={filteredPhotos[lightboxIndex].src}
              alt={filteredPhotos[lightboxIndex].title}
              className="max-h-[72vh] max-w-full object-contain rounded-2xl shadow-2xl border border-white/20"
            />
            
            <div className="mt-4 text-center">
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-amber-400 text-slate-950 inline-block mb-1">
                {filteredPhotos[lightboxIndex].tag}
              </span>
              <h3 className="font-display text-lg sm:text-xl font-bold text-white">
                {filteredPhotos[lightboxIndex].title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto mt-1">
                {filteredPhotos[lightboxIndex].subtitle}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
