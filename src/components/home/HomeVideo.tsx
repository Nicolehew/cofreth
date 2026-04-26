'use client';
import { useState } from 'react';
import { Play } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function HomeVideo() {
  const [playing, setPlaying] = useState(false);
  const title = useScrollReveal(0.05);
  const player = useScrollReveal(0.05);

  return (
    <section className="py-20 md:py-28" style={{ background: 'linear-gradient(135deg, #060e08 0%, #0F2419 50%, #060e08 100%)' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Section label */}
        <div ref={title.ref}
          className="text-center mb-12 transition-all duration-700"
          style={{ opacity: title.visible ? 1 : 0, transform: title.visible ? 'none' : 'translateY(24px)' }}>
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-0.5 bg-[#6BBD45]" />
            <span className="text-[#6BBD45] text-sm font-bold tracking-widest uppercase">Who We Are</span>
            <div className="w-8 h-0.5 bg-[#6BBD45]" />
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4 leading-tight">
            See Cofreth in <span className="text-[#6BBD45]">Action</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            38 years of facilities management excellence across Malaysia — from airports to data centres.
            Watch our story unfold.
          </p>
        </div>

        {/* Video player */}
        <div ref={player.ref}
          className="transition-all duration-700"
          style={{ opacity: player.visible ? 1 : 0, transform: player.visible ? 'none' : 'translateY(32px)' }}>
          <div className="relative rounded-3xl overflow-hidden border border-[#6BBD45]/20 shadow-2xl"
            style={{ boxShadow: '0 0 80px rgba(107,189,69,0.12)' }}>
            {!playing ? (
              /* Thumbnail + play button */
              <div className="relative aspect-video bg-[#0a1810] cursor-pointer group" onClick={() => setPlaying(true)}>
                <img
                  src="https://img.youtube.com/vi/g90KM7ntBBc/maxresdefault.jpg"
                  alt="Cofreth Company Video"
                  className="w-full h-full object-cover opacity-70 group-hover:opacity-85 transition-opacity duration-300"
                />
                {/* Green gradient overlay on thumbnail */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#060e08]/80 via-transparent to-[#060e08]/30" />

                {/* Play button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="group-hover:scale-110 transition-transform duration-300 relative">
                    {/* Pulsing rings */}
                    <div className="absolute inset-0 rounded-full bg-[#6BBD45]/20 animate-ping" style={{ animationDuration: '2s' }} />
                    <div className="absolute inset-[-8px] rounded-full border-2 border-[#6BBD45]/30" />
                    {/* Button */}
                    <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-[#6BBD45] flex items-center justify-center shadow-2xl"
                      style={{ boxShadow: '0 0 40px rgba(107,189,69,0.5)' }}>
                      <Play size={32} className="text-white ml-1.5" fill="white" />
                    </div>
                  </div>
                </div>

                {/* Bottom caption */}
                <div className="absolute bottom-0 left-0 right-0 px-6 py-5">
                  <div className="text-white font-bold text-lg md:text-xl leading-tight">Cofreth (M) Sdn Bhd — Corporate Video</div>
                  <div className="text-[#6BBD45] text-sm font-semibold mt-1">Malaysia's Leading FM & Energy Services Company</div>
                </div>
              </div>
            ) : (
              /* Actual YouTube embed */
              <div className="relative aspect-video">
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube.com/embed/g90KM7ntBBc?autoplay=1&rel=0&modestbranding=1"
                  title="Cofreth (M) Sdn Bhd — Corporate Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            )}
          </div>
        </div>

        {/* Stats below video */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
          {[
            ['38+', 'Years of Excellence'],
            ['30+', 'Major Clients'],
            ['5×',  'Frost & Sullivan Awards'],
            ['5×',  'ISO Certified'],
          ].map(([v, l]) => (
            <div key={l} className="text-center border border-white/8 bg-white/3 rounded-2xl py-5 px-3 hover:border-[#6BBD45]/30 transition-colors duration-300">
              <div className="text-2xl md:text-3xl font-black text-[#6BBD45] mb-1">{v}</div>
              <div className="text-xs text-gray-400 font-medium leading-snug">{l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
