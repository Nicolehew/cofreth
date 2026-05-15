'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Building2, Zap, Leaf, Cpu, Play } from 'lucide-react';

/**
 * Each slide has its own YouTube background video (no-copyright cinematic footage).
 * To swap a video: replace the `ytId` with any YouTube video ID.
 * Videos are muted + looped + autoplay via YouTube embed params.
 */
const slides = [
  {
    ytId:   'ToF4c00sccE', // Workers & construction site — buildings + people
    lines:  ['Built Environment', 'Adds'],
    accent: 'CONFIDENCE',
    sub:    'Over 38 years of trusted facility management excellence across Malaysia.',
  },
  {
    ytId:   'O9F4rXp1Ogc', // Construction & building stock footage — HD no copyright
    lines:  ['Total Facility', 'Management'],
    accent: 'Solutions',
    sub:    'Comprehensive, technology-driven FM services for every sector.',
  },
  {
    ytId:   'Yvx6hMAk8fc', // Facilities Management Building Operations & Maintenance
    lines:  ['We LOWER Your', 'Total Cost of'],
    accent: 'Ownership',
    sub:    'Guaranteed, measurable savings through science-based energy programs.',
  },
  {
    ytId:   'uUALysiJ49U', // Facility Management — The Hidden Force Behind Every Building
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

      {/* ── Static fallback (always present under videos) ── */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 'url(/projects/klia2.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center 30%',
          zIndex: 0,
        }}
      />

      {/* ── All 4 video backgrounds rendered simultaneously → smooth crossfade ── */}
      {slides.map((s, i) => (
        <div
          key={s.ytId}
          className="absolute inset-0 overflow-hidden"
          style={{
            opacity: i === index ? 1 : 0,
            transition: 'opacity 1.8s ease-in-out',
            zIndex: 1,
          }}
        >
          <iframe
            src={`https://www.youtube.com/embed/${s.ytId}?autoplay=1&mute=1&loop=1&playlist=${s.ytId}&controls=0&rel=0&playsinline=1&modestbranding=1&iv_load_policy=3&showinfo=0&disablekb=1`}
            allow="autoplay; encrypted-media"
            className="absolute border-0 pointer-events-none"
            title={`Slide ${i + 1} background`}
            style={{
              top: '50%', left: '50%',
              width: '177.78vh',
              height: '56.25vw',
              minWidth: '100%',
              minHeight: '100%',
              transform: 'translate(-50%, -50%)',
            }}
          />
        </div>
      ))}

      {/* ── Overlays for text legibility ── */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'linear-gradient(to right, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.25) 52%, rgba(0,0,0,0.08) 100%)',
        zIndex: 2,
      }} />
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'linear-gradient(to top, rgba(0,0,0,0.60) 0%, transparent 42%)',
        zIndex: 2,
      }} />

      {/* ── Main content — bottom-left pinned ── */}
      <div className="relative flex-1 flex flex-col justify-end px-8 md:px-14 pb-32 md:pb-36" style={{ zIndex: 2 }}>
        <div className="max-w-4xl">

          {/* Eyebrow badge */}
          <FadeIn delay={0.1} className="mb-5">
            <span className="inline-flex items-center gap-2 text-[#6BBD45] font-bold tracking-widest uppercase"
              style={{ fontSize: '13px' }}>
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
              className="text-white/80 leading-relaxed max-w-md"
              style={{
                fontSize: '17px',
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
                className="bg-white text-[#1B3A2D] hover:bg-[#6BBD45] hover:text-white font-bold px-7 py-3.5 rounded-full transition-all duration-200 shadow-lg"
                style={{ fontSize: '15px' }}>
                Discover Our Services
              </Link>
              <button
                onClick={() => setVideoOpen(true)}
                className="inline-flex items-center gap-2 border-2 border-white/40 hover:border-[#6BBD45] text-white hover:text-[#6BBD45] font-bold px-6 py-3.5 rounded-full transition-all duration-200"
                style={{ fontSize: '15px' }}
              >
                <Play size={14} fill="currentColor" /> Watch
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom feature strip ── */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-white/10"
        style={{ background: 'rgba(0,0,0,0.55)', backdropFilter: 'blur(12px)', zIndex: 3 }}>
        <div className="flex">
          {services.map((svc, i) => {
            const Icon = svc.icon;
            return (
              <Link key={svc.label} href={svc.href}
                className="group flex-1 flex items-center justify-center gap-3 px-5 py-4 hover:bg-white/10 transition-colors duration-200"
                style={{ borderRight: i < services.length - 1 ? '1px solid rgba(255,255,255,0.12)' : 'none' }}>
                <Icon size={18} className="text-[#6BBD45] shrink-0 group-hover:scale-110 transition-transform" />
                <span className="text-white font-semibold" style={{ fontSize: '13px' }}>{svc.label}</span>
              </Link>
            );
          })}
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
      `}</style>
    </section>
  );
}
