'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { ChevronDown, Building2, Zap, Leaf, Cpu, ArrowRight, Play } from 'lucide-react';

const slides = [
  { headline: 'Total Facility Management', highlight: 'Solutions', sub: 'Comprehensive, technology-driven FM services for every sector in Malaysia.' },
  { headline: 'Built Environment Adds', highlight: 'CONFIDENCE', sub: 'Over 38 years of trusted facility management excellence across Malaysia.' },
  { headline: 'We LOWER Your', highlight: 'Total Cost of Ownership', sub: 'Science-based energy programs that deliver guaranteed, measurable savings.' },
  { headline: 'Green Building is', highlight: 'Our Business', sub: 'Sustainable FM solutions — GBI accredited, ESCO registered, future-ready.' },
];

const services = [
  { icon: Building2, label: 'Facilities Management', href: '/services/facilities-management' },
  { icon: Zap,       label: 'Energy Services',       href: '/services/energy-services' },
  { icon: Leaf,      label: 'Green Expertise',       href: '/services/green-expertise' },
  { icon: Cpu,       label: 'Smart Technology',      href: '/services/smart-technology' },
];

function AnimatedCounter({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started.current) {
        started.current = true;
        let s = 0;
        const step = (ts: number) => {
          if (!s) s = ts;
          const p = Math.min((ts - s) / 1800, 1);
          setCount(Math.floor(p * target));
          if (p < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      }
    });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [target]);
  return <span ref={ref}>{count}{suffix}</span>;
}

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [active, setActive] = useState<number | null>(null);
  const [videoOpen, setVideoOpen] = useState(false);

  useEffect(() => {
    const t = setInterval(() => setIndex(i => (i + 1) % slides.length), 5500);
    return () => clearInterval(t);
  }, []);

  const slide = slides[index];

  return (
    <section id="home" className="relative min-h-screen flex flex-col overflow-hidden">

      {/* Background — full real photo */}
      <div className="absolute inset-0" style={{
        backgroundImage: 'url(/projects/klia2.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center 30%',
        zIndex: 0,
      }} />

      {/* Dark dramatic overlay — YTL-style deep depth */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'linear-gradient(160deg, rgba(4,10,6,0.87) 0%, rgba(10,30,18,0.78) 45%, rgba(4,10,6,0.90) 100%)',
        zIndex: 2,
      }} />

      {/* Green bottom vignette — grounds the stats bar */}
      <div className="absolute bottom-0 left-0 right-0 h-64 pointer-events-none" style={{
        background: 'linear-gradient(to top, rgba(6,18,10,0.95) 0%, transparent 100%)',
        zIndex: 2,
      }} />

      {/* Subtle green grid texture */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: 'linear-gradient(rgba(107,189,69,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(107,189,69,0.04) 1px, transparent 1px)',
        backgroundSize: '80px 80px',
        zIndex: 2,
      }} />

      {/* Green glow accents */}
      <div className="absolute top-1/3 right-1/4 w-80 h-80 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(107,189,69,0.12) 0%, transparent 70%)', zIndex: 2 }} />
      <div className="absolute bottom-1/3 left-1/5 w-56 h-56 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(107,189,69,0.08) 0%, transparent 70%)', zIndex: 2 }} />

      {/* Decorative rings */}
      <div className="absolute top-24 right-12 w-64 h-64 rounded-full border border-[#6BBD45]/20 animate-pulse pointer-events-none" style={{ zIndex: 2 }} />
      <div className="absolute top-36 right-20 w-40 h-40 rounded-full border border-[#6BBD45]/10 pointer-events-none" style={{ zIndex: 2 }} />

      {/* Scene dots */}
      <div className="absolute left-6 top-1/2 -translate-y-1/2 hidden md:flex flex-col gap-2.5" style={{ zIndex: 4 }}>
        {slides.map((_, i) => (
          <button key={i} onClick={() => setIndex(i)}
            className="w-1.5 rounded-full transition-all duration-500"
            style={{ height: i === index ? 36 : 10, background: i === index ? '#6BBD45' : 'rgba(255,255,255,0.25)' }} />
        ))}
      </div>

      {/* ─── Main content ─── */}
      <div className="relative flex-1 flex flex-col items-center justify-center px-4 sm:px-6 pt-24 sm:pt-28 pb-36 sm:pb-44" style={{ zIndex: 3 }}>

        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-[#6BBD45]/15 border border-[#6BBD45]/40 text-[#6BBD45] text-xs sm:text-sm font-bold tracking-widest uppercase px-5 py-2.5 rounded-full mb-7 sm:mb-10">
          <span className="w-2 h-2 bg-[#6BBD45] rounded-full animate-pulse shrink-0" />
          Total Solutions Provider · Est. 1986
        </div>

        {/* Headline */}
        <h1 key={index}
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-white text-center leading-[1.05] mb-5 sm:mb-7 max-w-5xl tracking-tight px-2"
          style={{ animation: 'fadeSlideUp 0.65s ease forwards', textShadow: '0 2px 40px rgba(0,0,0,0.5)' }}>
          {slide.headline}{' '}
          <span style={{ color: '#6BBD45', textShadow: '0 0 60px rgba(107,189,69,0.5)' }}>{slide.highlight}</span>
        </h1>

        <p key={`sub-${index}`}
          className="text-gray-300 text-base sm:text-xl md:text-2xl max-w-2xl text-center mb-8 sm:mb-12 leading-relaxed font-light px-2"
          style={{ animation: 'fadeSlideUp 0.65s ease 0.12s forwards', opacity: 0 }}>
          {slide.sub}
        </p>

        {/* Service pills */}
        <div className="hidden sm:flex flex-wrap justify-center gap-2 sm:gap-3 mb-9 sm:mb-12">
          {services.map((svc, i) => {
            const Icon = svc.icon;
            return (
              <Link key={svc.label} href={svc.href}
                onMouseEnter={() => setActive(i)}
                onMouseLeave={() => setActive(null)}
                className="flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full border text-sm font-semibold transition-all duration-250"
                style={{
                  background: active === i ? '#6BBD45' : 'rgba(255,255,255,0.08)',
                  borderColor: active === i ? '#6BBD45' : 'rgba(255,255,255,0.2)',
                  color: active === i ? '#fff' : 'rgba(255,255,255,0.85)',
                  transform: active === i ? 'translateY(-2px)' : 'none',
                  boxShadow: active === i ? '0 8px 24px rgba(107,189,69,0.35)' : 'none',
                }}>
                <Icon size={14} />
                {svc.label}
                <ArrowRight size={12} style={{ opacity: active === i ? 1 : 0, transition: 'opacity 0.2s' }} />
              </Link>
            );
          })}
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-10 sm:mb-14 w-full sm:w-auto px-4 sm:px-0">
          <Link href="/services"
            className="bg-[#6BBD45] hover:bg-[#5aa838] text-white font-bold px-8 sm:px-10 py-3.5 sm:py-4 rounded-full text-base sm:text-lg text-center shadow-lg shadow-[#6BBD45]/30 transition-all hover:-translate-y-0.5">
            Discover Our Services
          </Link>
          <button
            onClick={() => setVideoOpen(true)}
            className="inline-flex items-center justify-center gap-2.5 border-2 border-white/30 hover:border-[#6BBD45] text-white hover:text-[#6BBD45] font-bold px-8 sm:px-10 py-3.5 sm:py-4 rounded-full text-base sm:text-lg transition-all duration-200 text-center">
            <Play size={16} fill="currentColor" />
            Watch Our Story
          </button>
        </div>

        {/* Slide dots */}
        <div className="flex gap-2.5 justify-center">
          {slides.map((_, i) => (
            <button key={i} onClick={() => setIndex(i)}
              className="h-1.5 rounded-full transition-all duration-300"
              style={{ background: i === index ? '#6BBD45' : 'rgba(255,255,255,0.3)', width: i === index ? 36 : 14 }} />
          ))}
        </div>
      </div>

      {/* ─── Stats bar ─── */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-[#6BBD45]/20" style={{ background: 'rgba(4,12,8,0.92)', backdropFilter: 'blur(16px)', zIndex: 3 }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-6 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 text-center">
          {[
            { value: 38, suffix: '+', label: 'Years Experience' },
            { value: 30, suffix: '+', label: 'Major Clients' },
            { value: 5,  suffix: '',  label: 'ISO Certifications' },
            { value: 5,  suffix: 'x', label: 'Frost & Sullivan Awards' },
          ].map(stat => (
            <div key={stat.label} className="text-white group cursor-default">
              <div className="text-2xl sm:text-4xl font-black text-[#6BBD45] group-hover:scale-110 transition-transform inline-block">
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-xs sm:text-sm text-gray-400 mt-0.5 sm:mt-1 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-28 right-8 hidden md:flex flex-col items-center gap-1" style={{ zIndex: 3 }}>
        <span className="text-[10px] tracking-widest text-white/25 rotate-90 mb-2">SCROLL</span>
        <ChevronDown size={14} className="text-white/25 animate-bounce" />
      </div>

      {/* Video modal */}
      {videoOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm px-4"
          onClick={() => setVideoOpen(false)}>
          <div className="w-full max-w-4xl aspect-video rounded-2xl overflow-hidden shadow-2xl"
            onClick={e => e.stopPropagation()}>
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/g90KM7ntBBc?autoplay=1&rel=0"
              title="Cofreth Corporate Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <button onClick={() => setVideoOpen(false)}
            className="absolute top-6 right-6 text-white/60 hover:text-white text-3xl font-light transition-colors">
            ✕
          </button>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
