'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Building2, Zap, Leaf, Cpu, Play } from 'lucide-react';

/**
 * Each slide has a high-resolution Unsplash building/FM photo.
 * No iframes, no YouTube controls, no autoplay issues.
 * Subtle Ken Burns (zoom) CSS animation creates the motion effect.
 */
const slides = [
  {
    bg: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=1920&q=90',
    lines:  ['Built Environment', 'Adds'],
    accent: 'CONFIDENCE',
    sub:    'Over 38 years of trusted facility management excellence across Malaysia.',
  },
  {
    bg: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1920&q=90',
    lines:  ['Total Facility', 'Management'],
    accent: 'Solutions',
    sub:    'Comprehensive, technology-driven FM services for every sector.',
  },
  {
    bg: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1920&q=90',
    lines:  ['We LOWER Your', 'Total Cost of'],
    accent: 'Ownership',
    sub:    'Guaranteed, measurable savings through science-based energy programs.',
  },
  {
    bg: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1920&q=90',
    lines:  ['Green Building', 'Is Our'],
    accent: 'Business',
    sub:    'GBI accredited, ESCO registered, future-ready sustainable FM.',
  },
];

const services = [
  { icon: Building2, label: 'Facilities Management', href: '/services/facilities-management' },
  { icon: Zap,       label: 'Energy Services',       href: '/services/energy-services' },
  { icon: Leaf,      label: 'Green Expertise',       href: '/services/green-expertise' },
  { icon: Cpu,       label: 'Smart Technology',      href: '/services/smart-technology' },
];

/* ── Word-by-word animated text ── */
function AnimWords({ text, delay = 0, className = '' }: { text: string; delay?: number; className?: string }) {
  return (
    <span className={className} aria-label={text}>
      {text.split(' ').map((word, i) => (
        <span key={i} className="inline-block overflow-hidden leading-none mr-[0.22em] last:mr-0">
          <span
            className="inline-block"
            style={{
              animation: 'wordUp 0.7s cubic-bezier(0.16,1,0.3,1) forwards',
              animationDelay: `${delay + i * 0.09}s`,
              opacity: 0,
            }}
          >
            {word}
          </span>
        </span>
      ))}
    </span>
  );
}

/* ── Fade-in line ── */
function FadeIn({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <span
      className={`block ${className}`}
      style={{ animation: 'fadeUp 0.7s ease forwards', animationDelay: `${delay}s`, opacity: 0 }}
    >
      {children}
    </span>
  );
}

export default function Hero() {
  const [index, setIndex]         = useState(0);
  const [videoOpen, setVideoOpen] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval>>(null);

  const startTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => setIndex(i => (i + 1) % slides.length), 8000);
  };

  useEffect(() => {
    startTimer();
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, []);

  const goTo = (i: number) => { setIndex(i); startTimer(); };
  const slide = slides[index];

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-[#060e08]">

      {/* ── All 4 photo backgrounds — smooth crossfade ── */}
      {slides.map((s, i) => (
        <div
          key={s.bg}
          className="absolute inset-0"
          style={{
            opacity: i === index ? 1 : 0,
            transition: 'opacity 1.8s ease-in-out',
            zIndex: 1,
          }}
        >
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${s.bg})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              animation: i === index ? 'kenBurns 12s ease-in-out forwards' : 'none',
            }}
          />
        </div>
      ))}

      {/* ── Overlays: uniform base + directional ── */}
      {/* Full-coverage base overlay — blocks YouTube UI everywhere */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'rgba(0,0,0,0.42)',
        zIndex: 2,
      }} />
      {/* Left-heavy gradient for text legibility */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'linear-gradient(to right, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.10) 55%, rgba(0,0,0,0) 100%)',
        zIndex: 2,
      }} />
      {/* Bottom gradient for strip legibility */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 40%)',
        zIndex: 2,
      }} />

      {/* ── Main content — bottom-left pinned ── */}
      <div className="relative flex-1 flex flex-col justify-end px-8 md:px-14 pb-32 md:pb-36" style={{ zIndex: 2 }}>
        <div className="max-w-4xl">

          {/* Eyebrow badge */}
          <FadeIn delay={0.1} className="mb-5">
            <span className="inline-flex items-center gap-2 text-[#6BBD45] font-bold tracking-widest uppercase text-sm">
              <span className="w-2 h-2 bg-[#6BBD45] rounded-full animate-pulse" />
              Total Solutions Provider · Est. 1986
            </span>
          </FadeIn>

          {/* Heading — word-by-word per line */}
          <h1 key={`h-${index}`} className="font-black text-white leading-[0.95] mb-6"
            style={{ fontSize: 'clamp(3rem, 6.5vw, 5.8rem)', letterSpacing: '-0.02em' }}>
            {slide.lines.map((line, li) => (
              <span key={li} className="block">
                <AnimWords text={line} delay={li * 0.18} />
              </span>
            ))}
            <span className="block">
              <AnimWords
                text={slide.accent}
                delay={slide.lines.length * 0.18}
                className="text-[#6BBD45]"
              />
            </span>
          </h1>

          {/* Subtitle + CTA */}
          <div key={`s-${index}`} className="flex flex-col sm:flex-row sm:items-end gap-6 sm:gap-10">
            <p
              className="text-lg text-white/80 leading-relaxed max-w-md"
              style={{
                animation: 'fadeUp 0.6s ease forwards',
                animationDelay: `${(slide.lines.length + 1) * 0.18 + 0.1}s`,
                opacity: 0,
              }}
            >
              {slide.sub}
            </p>

            <div
              className="flex gap-3 shrink-0"
              style={{
                animation: 'fadeUp 0.6s ease forwards',
                animationDelay: `${(slide.lines.length + 1) * 0.18 + 0.25}s`,
                opacity: 0,
              }}
            >
              <Link href="/services"
                className="bg-white text-[#1B3A2D] hover:bg-[#6BBD45] hover:text-white font-bold px-7 py-3.5 rounded-full transition-all duration-200 shadow-lg text-base">
                Discover Our Services
              </Link>
              <button
                onClick={() => setVideoOpen(true)}
                className="inline-flex items-center gap-2 border-2 border-white/40 hover:border-[#6BBD45] text-white hover:text-[#6BBD45] font-bold px-6 py-3.5 rounded-full transition-all duration-200 text-base"
              >
                <Play size={14} fill="currentColor" /> Watch
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom ticker strip ── */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-[#6BBD45]/30 overflow-hidden"
        style={{ background: 'rgba(14,32,22,0.96)', backdropFilter: 'blur(16px)', zIndex: 3, height: 64 }}>
        {/* fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 pointer-events-none" style={{ background: 'linear-gradient(to right, rgba(14,32,22,1) 0%, transparent 100%)', zIndex: 2 }} />
        <div className="absolute right-0 top-0 bottom-0 w-24 pointer-events-none" style={{ background: 'linear-gradient(to left, rgba(14,32,22,1) 0%, transparent 100%)', zIndex: 2 }} />

        {/* scrolling track — duplicated 3× for seamless loop */}
        <div className="ticker-track flex items-center h-full" style={{ width: 'max-content' }}>
          {[0, 1, 2].map((pass) =>
            services.map((svc) => {
              const Icon = svc.icon;
              return (
                <Link key={`${pass}-${svc.label}`} href={svc.href}
                  className="group flex items-center gap-3 px-10 h-full hover:bg-[#6BBD45]/10 transition-colors duration-300 shrink-0 border-r border-[#6BBD45]/15">
                  {/* glowing icon bubble */}
                  <span className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-110"
                    style={{ background: 'rgba(107,189,69,0.15)', boxShadow: '0 0 0 0 rgba(107,189,69,0.4)' }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow = '0 0 12px 3px rgba(107,189,69,0.35)'; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = '0 0 0 0 rgba(107,189,69,0.4)'; }}>
                    <Icon size={16} className="text-[#6BBD45]" />
                  </span>
                  <span className="text-white/85 font-semibold text-sm whitespace-nowrap group-hover:text-[#6BBD45] transition-colors duration-300">{svc.label}</span>
                </Link>
              );
            })
          )}
        </div>
      </div>

      {/* ── Slide dots ── */}
      <div className="absolute right-8 md:right-14 bottom-20 flex gap-2" style={{ zIndex: 4 }}>
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className="rounded-full transition-all duration-300"
            style={{
              width: i === index ? 28 : 8,
              height: 4,
              background: i === index ? '#6BBD45' : 'rgba(255,255,255,0.35)',
            }}
          />
        ))}
      </div>

      {/* ── Corporate video modal ── */}
      {videoOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm px-4"
          onClick={() => setVideoOpen(false)}>
          <div className="w-full max-w-4xl aspect-video rounded-2xl overflow-hidden shadow-2xl"
            onClick={e => e.stopPropagation()}>
            <iframe className="w-full h-full"
              src="https://www.youtube.com/embed/g90KM7ntBBc?autoplay=1&rel=0"
              title="Cofreth Corporate Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen />
          </div>
          <button onClick={() => setVideoOpen(false)}
            className="absolute top-6 right-6 text-white/60 hover:text-white text-3xl font-light">✕</button>
        </div>
      )}

      <style jsx>{`
        @keyframes wordUp {
          from { transform: translateY(105%); opacity: 0; }
          to   { transform: translateY(0);    opacity: 1; }
        }
        @keyframes fadeUp {
          from { transform: translateY(18px); opacity: 0; }
          to   { transform: translateY(0);    opacity: 1; }
        }
        @keyframes kenBurns {
          from { transform: scale(1.0)   translate(0, 0); }
          to   { transform: scale(1.08)  translate(-1%, -1%); }
        }
        @keyframes ticker {
          from { transform: translateX(0); }
          to   { transform: translateX(-33.333%); }
        }
        .ticker-track {
          animation: ticker 18s linear infinite;
        }
        .ticker-track:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
