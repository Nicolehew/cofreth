'use client';
import { useScrollReveal } from '@/hooks/useScrollReveal';

interface Stat { num: string; label: string }

interface PageHeroProps {
  eyebrow: string;
  eyebrowSub?: string;
  title: React.ReactNode;       // pass green <span> inside
  subtitle: string;
  stats?: Stat[];
}

export default function PageHero({ eyebrow, eyebrowSub, title, subtitle, stats }: PageHeroProps) {
  const reveal = useScrollReveal();

  return (
    <div className="relative overflow-hidden border-b border-white/10 pt-24 md:pt-32">

      {/* ── Video background ── */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/hero-video.mp4"
        autoPlay
        muted
        loop
        playsInline
        style={{ zIndex: 0 }}
      />

      {/* Dark overlay — keeps text legible */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'linear-gradient(135deg, rgba(8,20,14,0.88) 0%, rgba(27,58,45,0.78) 60%, rgba(8,20,14,0.88) 100%)',
        zIndex: 1,
      }} />

      {/* Animated dot grid */}
      <div className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#6BBD45 1px, transparent 1px)',
          backgroundSize: '28px 28px',
          opacity: 0.07,
          zIndex: 2,
          animation: 'dotDrift 18s linear infinite',
        }} />

      {/* Green left accent bar */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#6BBD45]" style={{ zIndex: 3 }} />

      {/* ── Content ── */}
      <div
        ref={reveal.ref}
        className="relative max-w-6xl mx-auto px-6 md:px-12 transition-all duration-700"
        style={{ opacity: reveal.visible ? 1 : 0, transform: reveal.visible ? 'none' : 'translateY(24px)', zIndex: 4 }}
      >
        {/* Eyebrow */}
        <div className="flex items-center gap-2 mb-5">
          <span
            className="bg-[#6BBD45]/20 border border-[#6BBD45]/40 text-[#6BBD45] font-bold px-3 py-1 rounded-full uppercase tracking-widest"
            style={{ fontSize: '11px' }}
          >
            {eyebrow}
          </span>
          {eyebrowSub && (
            <>
              <span className="text-white/30" style={{ fontSize: '11px' }}>·</span>
              <span className="text-white/50 font-medium" style={{ fontSize: '12px' }}>{eyebrowSub}</span>
            </>
          )}
        </div>

        {/* Heading */}
        <h1
          className="font-black text-white leading-none mb-5"
          style={{ fontSize: 'clamp(2.4rem, 5.5vw, 4.2rem)', letterSpacing: '-0.02em' }}
        >
          {title}
        </h1>

        {/* Subtitle */}
        <p className="text-white/65 max-w-xl leading-relaxed mb-10" style={{ fontSize: '16px' }}>
          {subtitle}
        </p>

        {/* Stats strip */}
        {stats && stats.length > 0 && (
          <div className="flex flex-wrap border-t border-white/10">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className="flex-1 min-w-[110px] py-5 pr-8 border-r border-white/10 last:border-r-0"
                style={{ animation: 'statPop 0.5s cubic-bezier(0.16,1,0.3,1) both', animationDelay: `${0.15 + i * 0.08}s` }}
              >
                <div className="font-black text-white mb-0.5" style={{ fontSize: '22px' }}>{s.num}</div>
                <div className="text-white/45 font-medium" style={{ fontSize: '12px' }}>{s.label}</div>
              </div>
            ))}
          </div>
        )}

        {/* No-stats bottom padding */}
        {(!stats || stats.length === 0) && <div className="pb-10" />}
      </div>

      <style jsx>{`
        @keyframes dotDrift {
          from { background-position: 0 0; }
          to   { background-position: 56px 56px; }
        }
        @keyframes statPop {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
