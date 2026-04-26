'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { ChevronDown, Building2, Zap, Leaf, Cpu, ArrowRight, CheckCircle } from 'lucide-react';

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

const trustBadges = [
  '5× ISO Certified',
  'Registered ESCO',
  '5× Frost & Sullivan Award',
  'Est. 1986',
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

  useEffect(() => {
    const t = setInterval(() => setIndex(i => (i + 1) % slides.length), 5500);
    return () => clearInterval(t);
  }, []);

  const slide = slides[index];

  return (
    <section id="home" className="relative min-h-screen flex flex-col overflow-hidden">

      {/* Background photo — shows through clearly */}
      <div className="absolute inset-0" style={{
        backgroundImage: 'url(/projects/klia2.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center 30%',
        zIndex: 0,
      }} />

      {/* Clean white overlay — bright, professional */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'linear-gradient(160deg, rgba(255,255,255,0.92) 0%, rgba(240,252,240,0.88) 45%, rgba(255,255,255,0.94) 100%)',
        zIndex: 2,
      }} />

      {/* Subtle green tint stripe */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-[#6BBD45]" style={{ zIndex: 3 }} />

      {/* Scene indicator — desktop only */}
      <div className="absolute left-6 top-1/2 -translate-y-1/2 hidden md:flex flex-col gap-2.5" style={{ zIndex: 4 }}>
        {slides.map((_, i) => (
          <button key={i} onClick={() => setIndex(i)}
            className="w-1.5 rounded-full transition-all duration-500"
            style={{ height: i === index ? 36 : 10, background: i === index ? '#6BBD45' : 'rgba(27,58,45,0.2)' }} />
        ))}
      </div>

      {/* ─── Main content ─── */}
      <div className="relative flex-1 flex flex-col items-center justify-center px-4 sm:px-6 pt-24 sm:pt-28 pb-36 sm:pb-40" style={{ zIndex: 3 }}>

        {/* Badge */}
        <div className="inline-flex items-center gap-2 sm:gap-2.5 bg-[#6BBD45] text-white text-xs sm:text-sm font-bold tracking-widest uppercase px-4 sm:px-6 py-2 sm:py-2.5 rounded-full mb-6 sm:mb-8 shadow-lg shadow-[#6BBD45]/25">
          <span className="w-2 h-2 bg-white rounded-full animate-pulse shrink-0" />
          Total Solutions Provider · Est. 1986
        </div>

        {/* Headline */}
        <h1 key={index}
          className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-[#1B3A2D] text-center leading-[1.1] mb-4 sm:mb-6 max-w-5xl tracking-tight px-2"
          style={{ animation: 'fadeSlideUp 0.65s ease forwards' }}>
          {slide.headline}{' '}
          <span className="text-[#6BBD45]">{slide.highlight}</span>
        </h1>

        <p key={`sub-${index}`}
          className="text-[#1B3A2D]/70 text-base sm:text-xl md:text-2xl max-w-2xl text-center mb-6 sm:mb-10 leading-relaxed font-medium px-2"
          style={{ animation: 'fadeSlideUp 0.65s ease 0.12s forwards', opacity: 0 }}>
          {slide.sub}
        </p>

        {/* Trust badges row */}
        <div className="flex flex-wrap justify-center gap-2 mb-6 sm:mb-8">
          {trustBadges.map(b => (
            <span key={b} className="inline-flex items-center gap-1.5 bg-white border border-[#6BBD45]/30 text-[#1B3A2D] text-xs font-semibold px-3 py-1.5 rounded-full shadow-sm">
              <CheckCircle size={11} className="text-[#6BBD45]" />
              {b}
            </span>
          ))}
        </div>

        {/* Service pills */}
        <div className="hidden sm:flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-10">
          {services.map((svc, i) => {
            const Icon = svc.icon;
            return (
              <Link key={svc.label} href={svc.href}
                onMouseEnter={() => setActive(i)}
                onMouseLeave={() => setActive(null)}
                className="flex items-center gap-2 sm:gap-2.5 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full border text-sm font-semibold transition-all duration-250 shadow-sm"
                style={{
                  background: active === i ? '#6BBD45' : 'rgba(255,255,255,0.95)',
                  borderColor: active === i ? '#6BBD45' : 'rgba(107,189,69,0.4)',
                  color: active === i ? '#fff' : '#1B3A2D',
                  transform: active === i ? 'translateY(-2px) scale(1.04)' : 'none',
                  boxShadow: active === i ? '0 6px 20px rgba(107,189,69,0.3)' : '0 1px 4px rgba(0,0,0,0.06)',
                }}>
                <Icon size={15} />
                {svc.label}
                <ArrowRight size={12} style={{ opacity: active === i ? 1 : 0, transition: 'opacity 0.2s' }} />
              </Link>
            );
          })}
        </div>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-10 sm:mb-14 w-full sm:w-auto px-4 sm:px-0">
          <Link href="/services"
            className="bg-[#6BBD45] hover:bg-[#5aa838] text-white font-bold px-8 sm:px-10 py-3.5 sm:py-4 rounded-full text-base sm:text-lg text-center shadow-lg shadow-[#6BBD45]/30 transition-all hover:-translate-y-0.5">
            Discover Our Services
          </Link>
          <Link href="/contact"
            className="border-2 border-[#1B3A2D] text-[#1B3A2D] hover:bg-[#1B3A2D] hover:text-white font-bold px-8 sm:px-10 py-3.5 sm:py-4 rounded-full text-base sm:text-lg transition-all duration-200 text-center">
            Get In Touch
          </Link>
        </div>

        {/* Slide dots */}
        <div className="flex gap-2.5 justify-center">
          {slides.map((_, i) => (
            <button key={i} onClick={() => setIndex(i)}
              className="h-1.5 rounded-full transition-all duration-300"
              style={{ background: i === index ? '#6BBD45' : 'rgba(27,58,45,0.25)', width: i === index ? 36 : 14 }} />
          ))}
        </div>
      </div>

      {/* ─── Stats bar ─── */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-[#6BBD45]/20" style={{ background: 'rgba(15,36,25,0.95)', zIndex: 3, backdropFilter: 'blur(12px)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-6 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 text-center">
          {[
            { value: 38, suffix: '+', label: 'Years Experience' },
            { value: 30, suffix: '+', label: 'Major Clients' },
            { value: 5,  suffix: '',  label: 'ISO Certifications' },
            { value: 5,  suffix: 'x', label: 'Frost & Sullivan Awards' },
          ].map(stat => (
            <div key={stat.label} className="text-white group cursor-default">
              <div className="text-2xl sm:text-4xl font-black text-[#6BBD45] group-hover:scale-110 transition-transform duration-200 inline-block">
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-xs sm:text-sm text-gray-300 mt-0.5 sm:mt-1 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-28 right-8 hidden md:flex flex-col items-center gap-1" style={{ zIndex: 3 }}>
        <span className="text-[10px] tracking-widest text-[#1B3A2D]/30 rotate-90 mb-2">SCROLL</span>
        <ChevronDown size={14} className="text-[#1B3A2D]/30 animate-bounce" />
      </div>

      <style jsx>{`
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
