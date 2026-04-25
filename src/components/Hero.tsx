'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { ChevronDown, Building2, Zap, Leaf, Cpu, ArrowRight } from 'lucide-react';

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

  useEffect(() => {
    const t = setInterval(() => setIndex(i => (i + 1) % slides.length), 5500);
    return () => clearInterval(t);
  }, []);

  const slide = slides[index];

  return (
    <section id="home" className="relative min-h-screen flex flex-col overflow-hidden">

      {/* Fallback background image shown while/if video fails */}
      <div className="absolute inset-0" style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1600&q=80&fit=crop)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        zIndex: 0,
      }} />

      {/* Video overlaid on fallback */}
      <video
        autoPlay muted loop playsInline
        poster="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1600&q=80&fit=crop"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ zIndex: 1, animation: 'kenburns 22s ease-in-out infinite alternate' }}
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>

      {/* Deep gradient overlay — charcoal-dark with subtle green tint */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'linear-gradient(135deg, rgba(8,14,22,0.93) 0%, rgba(12,32,22,0.87) 50%, rgba(8,14,22,0.95) 100%)',
        zIndex: 2,
      }} />

      {/* Tech grid */}
      <div className="absolute inset-0 tech-grid pointer-events-none" style={{ zIndex: 2 }} />

      {/* Glowing orb accents */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(107,189,69,0.08) 0%, transparent 70%)', zIndex: 2 }} />
      <div className="absolute bottom-1/3 left-1/5 w-64 h-64 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(107,189,69,0.06) 0%, transparent 70%)', zIndex: 2 }} />

      {/* Decorative rings */}
      <div className="absolute top-24 right-16 w-72 h-72 rounded-full border border-[#6BBD45]/15 animate-pulse pointer-events-none" style={{ zIndex: 2 }} />
      <div className="absolute top-32 right-24 w-48 h-48 rounded-full border border-[#6BBD45]/08 pointer-events-none" style={{ zIndex: 2 }} />
      <div className="absolute bottom-40 left-8 w-56 h-56 rounded-full border border-[#6BBD45]/12 animate-pulse pointer-events-none" style={{ zIndex: 2, animationDelay: '1.5s' }} />

      {/* Scene indicator */}
      <div className="absolute left-6 top-1/2 -translate-y-1/2 flex flex-col gap-2.5" style={{ zIndex: 4 }}>
        {slides.map((_, i) => (
          <button key={i} onClick={() => setIndex(i)}
            className="w-1.5 rounded-full transition-all duration-500"
            style={{ height: i === index ? 36 : 10, background: i === index ? '#6BBD45' : 'rgba(255,255,255,0.25)' }} />
        ))}
      </div>

      {/* ─── Main content ─── */}
      <div className="relative flex-1 flex flex-col items-center justify-center px-6 pt-28 pb-40" style={{ zIndex: 3 }}>

        {/* Badge */}
        <div className="inline-flex items-center gap-2.5 bg-[#6BBD45]/15 border border-[#6BBD45]/35 text-[#6BBD45] text-sm font-bold tracking-widest uppercase px-6 py-2.5 rounded-full mb-10">
          <span className="w-2 h-2 bg-[#6BBD45] rounded-full animate-pulse" />
          Total Solutions Provider · Est. 1986
        </div>

        {/* Headline */}
        <h1 key={index}
          className="text-5xl md:text-7xl lg:text-8xl font-black text-white text-center leading-[1.08] mb-7 max-w-5xl tracking-tight"
          style={{ animation: 'fadeSlideUp 0.65s ease forwards' }}>
          {slide.headline}{' '}
          <span style={{ color: '#6BBD45', textShadow: '0 0 40px rgba(107,189,69,0.4)' }}>{slide.highlight}</span>
        </h1>

        <p key={`sub-${index}`}
          className="text-gray-300 text-xl md:text-2xl max-w-2xl text-center mb-12 leading-relaxed font-light"
          style={{ animation: 'fadeSlideUp 0.65s ease 0.12s forwards', opacity: 0 }}>
          {slide.sub}
        </p>

        {/* Service pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {services.map((svc, i) => {
            const Icon = svc.icon;
            return (
              <Link key={svc.label} href={svc.href}
                onMouseEnter={() => setActive(i)}
                onMouseLeave={() => setActive(null)}
                className="flex items-center gap-2.5 px-5 py-3 rounded-full border text-base font-semibold transition-all duration-250"
                style={{
                  background: active === i ? '#6BBD45' : 'rgba(107,189,69,0.12)',
                  borderColor: active === i ? '#6BBD45' : 'rgba(107,189,69,0.35)',
                  color: active === i ? '#fff' : '#bbf7d0',
                  transform: active === i ? 'translateY(-3px) scale(1.05)' : 'none',
                  boxShadow: active === i ? '0 8px 24px rgba(107,189,69,0.35)' : 'none',
                }}>
                <Icon size={16} />
                {svc.label}
                <ArrowRight size={13} style={{ opacity: active === i ? 1 : 0, transition: 'opacity 0.2s' }} />
              </Link>
            );
          })}
        </div>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-5 mb-14">
          <Link href="/services"
            className="btn-glow bg-[#6BBD45] hover:bg-[#5aa838] text-white font-bold px-10 py-4 rounded-full text-lg text-center">
            Discover Our Services
          </Link>
          <Link href="/contact"
            className="border-2 border-white/30 hover:border-[#6BBD45] text-white hover:text-[#6BBD45] font-bold px-10 py-4 rounded-full text-lg transition-all duration-200 hover:-translate-y-0.5 text-center">
            Get In Touch
          </Link>
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
      <div className="absolute bottom-0 left-0 right-0 glass border-t border-white/10" style={{ zIndex: 3 }}>
        <div className="max-w-7xl mx-auto px-6 py-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { value: 38, suffix: '+', label: 'Years Experience' },
            { value: 30, suffix: '+', label: 'Major Clients' },
            { value: 4,  suffix: '',  label: 'ISO Certifications' },
            { value: 5,  suffix: 'x', label: 'Frost & Sullivan Awards' },
          ].map(stat => (
            <div key={stat.label} className="text-white group cursor-default">
              <div className="text-4xl font-black text-[#6BBD45] group-hover:scale-110 transition-transform duration-200 inline-block" style={{ textShadow: '0 0 20px rgba(107,189,69,0.4)' }}>
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-sm text-gray-300 mt-1 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-28 right-8 hidden md:flex flex-col items-center gap-1" style={{ zIndex: 3 }}>
        <span className="text-[10px] tracking-widest text-white/25 rotate-90 mb-2">SCROLL</span>
        <ChevronDown size={14} className="text-white/25 animate-bounce" />
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
