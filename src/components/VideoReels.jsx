import React, { useState, useRef } from 'react';
import { Play, Pause, Film, Sparkles, Filter, Maximize2, Volume2, VolumeX, CheckCircle } from 'lucide-react';
import { athleteData } from '../data/athleteData';

export default function VideoReels() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentVideo, setCurrentVideo] = useState(athleteData.videos[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const videoPlayerRef = useRef(null);

  const categories = ['All', 'Free Throws', '3-Pointers', 'Drives', 'Mid-Range', 'Assists'];

  const filteredVideos = selectedCategory === 'All' 
    ? athleteData.videos 
    : athleteData.videos.filter(v => v.category === selectedCategory);

  const handleSelectVideo = (video) => {
    setCurrentVideo(video);
    setIsPlaying(true);
    if (videoPlayerRef.current) {
      videoPlayerRef.current.load();
      videoPlayerRef.current.play().catch(() => setIsPlaying(false));
    }
  };

  const togglePlay = () => {
    if (videoPlayerRef.current) {
      if (isPlaying) {
        videoPlayerRef.current.pause();
        setIsPlaying(false);
      } else {
        videoPlayerRef.current.play().catch(() => {});
        setIsPlaying(true);
      }
    }
  };

  const toggleMute = () => {
    if (videoPlayerRef.current) {
      videoPlayerRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section id="film-room" className="py-20 relative overflow-hidden bg-[#090E1B]">
      
      {/* Background Lighting */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-cyan-500/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-amber-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-400/10 border border-cyan-400/30 text-cyan-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Film className="w-3.5 h-3.5" />
            <span>Game Tape & Highlight Reels</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            THE FILM <span className="text-cyan-400">ROOM</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base max-w-2xl">
            Match tape footage highlighting Velin's 3-point accuracy, rim pressure, transition speed, and playmaking vision.
          </p>

          {/* Category Filters */}
          <div className="mt-8 flex flex-wrap justify-center gap-2 p-1.5 rounded-2xl bg-slate-900/80 border border-white/10 backdrop-blur-md">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                  selectedCategory === cat
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-slate-950 shadow-md shadow-cyan-500/20'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Video Cinema Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Active Cinema Screen */}
          <div className="lg:col-span-8 flex flex-col">
            <div className="relative rounded-3xl overflow-hidden bg-black border border-white/15 shadow-2xl group aspect-[16/9] sm:aspect-[16/10] flex items-center justify-center">
              
              <video
                ref={videoPlayerRef}
                src={currentVideo.src}
                className="w-full h-full object-contain bg-black"
                controls
                playsInline
                preload="metadata"
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
              />

              {/* Inset Top Badge */}
              <div className="absolute top-4 left-4 pointer-events-none flex items-center gap-2">
                <span className="px-3 py-1 rounded-xl bg-slate-950/80 backdrop-blur-md border border-white/10 text-xs font-extrabold text-amber-400 uppercase tracking-wider">
                  {currentVideo.badge}
                </span>
                <span className="px-2.5 py-1 rounded-xl bg-slate-900/80 backdrop-blur-md text-[11px] font-bold text-slate-300">
                  {currentVideo.category}
                </span>
              </div>
            </div>

            {/* Video Meta Info */}
            <div className="mt-4 p-5 rounded-2xl bg-white/5 border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className="font-display text-xl font-bold text-white tracking-tight">
                  {currentVideo.title}
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  <strong>Tournament:</strong> {currentVideo.tournament} • <strong>Venue:</strong> {currentVideo.venue}
                </p>
                <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                  {currentVideo.description}
                </p>
              </div>

              <div className="flex-shrink-0 flex items-center gap-2">
                <span className="px-3 py-1.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-bold uppercase tracking-wider">
                  Verified Tape
                </span>
              </div>
            </div>
          </div>

          {/* Playlist Queue */}
          <div className="lg:col-span-4 flex flex-col space-y-3">
            <div className="flex items-center justify-between pb-2 border-b border-white/10">
              <span className="text-xs font-extrabold uppercase tracking-wider text-slate-400">
                Clip Playlist ({filteredVideos.length})
              </span>
              <span className="text-[11px] text-amber-400 font-bold">Auto Switch</span>
            </div>

            <div className="space-y-2.5 max-h-[580px] overflow-y-auto pr-1">
              {filteredVideos.map((video) => {
                const isActive = currentVideo.id === video.id;

                return (
                  <div
                    key={video.id}
                    onClick={() => handleSelectVideo(video)}
                    className={`p-3.5 rounded-2xl cursor-pointer transition-all border flex items-center gap-3.5 group ${
                      isActive
                        ? 'bg-cyan-950/40 border-cyan-400/50 shadow-lg shadow-cyan-500/10'
                        : 'bg-white/5 border-white/5 hover:border-white/20 hover:bg-white/10'
                    }`}
                  >
                    {/* Mini Play Icon Container */}
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-105 ${
                      isActive 
                        ? 'bg-cyan-400 text-slate-950 shadow-md shadow-cyan-400/25' 
                        : 'bg-slate-800 text-slate-300 group-hover:text-white'
                    }`}>
                      <Play className="w-4 h-4 fill-current ml-0.5" />
                    </div>

                    {/* Meta */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-white truncate group-hover:text-cyan-300 transition-colors">
                          {video.title}
                        </span>
                        <span className="text-[10px] font-semibold text-slate-400 ml-1">
                          {video.duration}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-400 truncate mt-0.5">
                        {video.tournament}
                      </p>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-[9px] px-1.5 py-0.5 rounded bg-white/5 text-slate-300 font-medium">
                          {video.category}
                        </span>
                        {isActive && (
                          <span className="text-[9px] text-cyan-400 font-bold uppercase tracking-wider">
                            Now Playing
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
