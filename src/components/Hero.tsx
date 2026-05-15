'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Building2, Zap, Leaf, Cpu, Play } from 'lucide-react';

const slides = [
  {
    lines:  ['Built Environment', 'Adds'],
    accent: 'CONFIDENCE',
    sub:    'Over 38 years of trusted facility management excellence across Malaysia.',
  },
  {
    lines:  ['Total Facility', 'Management'],
    accent: 'Solutions',
    sub:    'Comprehensive, technology-driven FM services for every sector.',
  },
  {
    lines:  ['We LOWER Your', 'Total Cost of'],
    accent: 'Ownership',
    sub:    'Guaranteed, measurable savings through science-based energy programs.',
  },
  {
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
  const [index, setIndex]       = useState(0);
  const [videoOpen, setVideoOpen] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval>>(null);

  const startTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => setIndex(i => (i + 1) % slides.length), 6000);
  };

  useEffect(() => {
    startTimer();
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, []);

  const goTo = (i: number) => { setIndex(i); startTimer(); };
  const slide = slides[index];

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">

      {/* ── Background image with Ken Burns zoom ── */}
      <div
        key={index}
        className="absolute inset-0"
        style={{
          backgroundImage: 'url(/projects/klia2.jpg)',
          backgroundSize:  'cover',
          backgroundPosition: 'center 30%',
          animation: 'kenBurns 7s ease-out forwards',
          zIndex: 0,
        }}
      />

      {/* Centre vignette — keeps photo bright, only darkens edges + bottom */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 80% 80% at 50% 40%, rgba(0,0,0,0.08) 0%, rgba(0,0,0,0.55) 100%)',
        zIndex: 1,
      }} />
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'linear-gradient(to top, rgba(0,0,0,0.70) 0%, transparent 42%)',
        zIndex: 1,
      }} />

      {/* ── Main content — centred ── */}
      <div className="relative flex-1 flex flex-col justify-center items-center px-8 md:px-14 pb-24 pt-8 text-center" style={{ zIndex: 2 }}>
        <div className="max-w-5xl w-full">

          {/* Eyebrow badge */}
          <FadeIn delay={0.1} className="mb-5 flex justify-center">
            <span className="inline-flex items-center gap-2 text-[#6BBD45] font-bold tracking-widest uppercase"
              style={{ fontSize: '13px' }}>
              <span className="w-2 h-2 bg-[#6BBD45] rounded-full animate-pulse" />
              Total Solutions Provider · Est. 1986
            </span>
          </FadeIn>

          {/* Heading — word-by-word per line, centred */}
          <h1 key={`h-${index}`} className="font-black text-white leading-[0.95] mb-6"
            style={{ fontSize: 'clamp(3.2rem, 7.5vw, 6.5rem)', letterSpacing: '-0.02em' }}>
            {slide.lines.map((line, li) => (
              <span key={li} className="block text-center">
                <AnimWords text={line} delay={li * 0.18} />
              </span>
            ))}
            <span className="block text-center">
              <AnimWords
                text={slide.accent}
                delay={slide.lines.length * 0.18}
                className="text-[#6BBD45]"
              />
            </span>
          </h1>

          {/* Subtitle + CTA — stacked centred */}
          <div key={`s-${index}`} className="flex flex-col items-center gap-6">
            <p
              className="text-white/80 leading-relaxed max-w-lg"
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
              className="flex gap-3"
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
      <div className="absolute bottom-0 left-0 right-0 border-t border-white/10" style={{ background: 'rgba(0,0,0,0.55)', backdropFilter: 'blur(12px)', zIndex: 3 }}>
        <div className="flex">
          {services.map((svc, i) => {
            const Icon = svc.icon;
            return (
              <Link key={svc.label} href={svc.href}
                className="group flex-1 flex items-center gap-3 px-5 py-4 hover:bg-white/10 transition-colors duration-200"
                style={{ borderRight: i < services.length - 1 ? '1px solid rgba(255,255,255,0.12)' : 'none' }}>
                <Icon size={18} className="text-[#6BBD45] shrink-0 group-hover:scale-110 transition-transform" />
                <span className="text-white font-semibold" style={{ fontSize: '13px' }}>{svc.label}</span>
              </Link>
            );
          })}
        </div>
      </div>

      {/* ── Slide dots — bottom-right ── */}
      <div className="absolute right-8 md:right-14 bottom-20 flex gap-2" style={{ zIndex: 4 }}>
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className="rounded-full transition-all duration-400"
            style={{
              width: i === index ? 28 : 8,
              height: 4,
              background: i === index ? '#6BBD45' : 'rgba(255,255,255,0.35)',
            }}
          />
        ))}
      </div>

      {/* ── Video modal ── */}
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
        @keyframes kenBurns {
          from { transform: scale(1.0);   }
          to   { transform: scale(1.06);  }
        }
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
