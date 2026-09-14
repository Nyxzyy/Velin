import React, { useEffect } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PlayerCard from './components/PlayerCard';
import Trophies from './components/Trophies';
import VideoReels from './components/VideoReels';
import MatchTimeline from './components/MatchTimeline';
import PhotoGallery from './components/PhotoGallery';
import PortfolioPdfViewer from './components/PortfolioPdfViewer';
import Footer from './components/Footer';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  useEffect(() => {
    // Initialize Lenis smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
    });

    // Synchronize Lenis with GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    const updateTicker = (time) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateTicker);
    gsap.ticker.lagSmoothing(0);

    // Smooth anchor navigation
    const handleAnchorClick = (e) => {
      const target = e.target.closest('a[href^="#"]');
      if (target) {
        const id = target.getAttribute('href');
        if (id && id !== '#') {
          const element = document.querySelector(id);
          if (element) {
            e.preventDefault();
            lenis.scrollTo(element, { offset: -60, duration: 1.2 });
          }
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);

    return () => {
      document.removeEventListener('click', handleAnchorClick);
      gsap.ticker.remove(updateTicker);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#070A13] text-slate-100 flex flex-col selection:bg-amber-400 selection:text-black">
      {/* Top Floating Navbar */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero />
        <PlayerCard />
        <Trophies />
        <VideoReels />
        <MatchTimeline />
        <PhotoGallery />
        <PortfolioPdfViewer />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
