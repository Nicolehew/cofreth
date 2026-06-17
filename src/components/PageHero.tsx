'use client';
import { useScrollReveal } from '@/hooks/useScrollReveal';

interface Stat { num: string; label: string }

interface PageHeroProps {
  eyebrow: string;
  eyebrowSub?: string;
  title: React.ReactNode;
  subtitle: string;
  stats?: Stat[];
  bgImage?: string; // relevant background photo for this page
  ytId?: string;   // kept for backward-compat, ignored
}

/**
 * PageHero — shared header for every inner page.
 * Always shows a full-bleed background photo with dark overlay.
 * Text is always white (readable on any photo).
 * Stats strip is center-aligned.
 */
export default function PageHero({
  eyebrow,
  eyebrowSub,
  title,
  subtitle,
  stats,
  bgImage = '/projects/klia2.jpg',
}: PageHeroProps) {
  const reveal = useScrollReveal();

  return (
    <div className="relative overflow-hidden border-b border-white/10 pt-[120px] md:pt-[140px]">

      {/* ── Full-bleed background photo ── */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${bgImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        {/* Dark overlay for legibility */}
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(10,24,16,0.88) 0%, rgba(10,24,16,0.65) 55%, rgba(10,24,16,0.72) 100%)' }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(10,24,16,0.75) 0%, transparent 55%)' }} />
        {/* Subtle dot grid */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(#6BBD45 1px, transparent 1px)',
            backgroundSize: '28px 28px',
            opacity: 0.04,
            animation: 'dotDrift 20s linear infinite',
          }}
        />
      </div>

      {/* Green left accent bar */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#6BBD45]" style={{ zIndex: 10 }} />

      {/* ── Content ── */}
      <div
        ref={reveal.ref}
        className="relative max-w-6xl mx-auto px-6 md:px-12 transition-all duration-700 text-center"
        style={{ opacity: reveal.visible ? 1 : 0, transform: reveal.visible ? 'none' : 'translateY(24px)', zIndex: 5 }}
      >
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-2 mb-5">
          <span
            className="bg-[#6BBD45]/20 border border-[#6BBD45]/40 text-[#6BBD45] font-bold px-3 py-1 rounded-full uppercase tracking-widest text-xs"
          >
            {eyebrow}
          </span>
          {eyebrowSub && (
            <span className="hidden sm:contents">
              <span className="text-white/30 text-xs">·</span>
              <span className="text-white/55 font-medium text-xs">{eyebrowSub}</span>
            </span>
          )}
        </div>

        {/* Heading */}
        <h1
          className="font-black text-white leading-none mb-5 mx-auto"
          style={{ fontSize: 'clamp(2.4rem, 5.5vw, 4.2rem)', letterSpacing: '-0.02em' }}
        >
          {title}
        </h1>

        {/* Subtitle */}
        <p
          className="text-white/70 max-w-2xl leading-relaxed mb-10 mx-auto text-base"
        >
          {subtitle}
        </p>

        {/* Stats strip — center-aligned in each cell */}
        {stats && stats.length > 0 && (
          <div className="flex flex-wrap border-t border-white/15">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className="flex-1 min-w-[110px] py-5 px-4 border-r border-white/15 last:border-r-0 text-center"
                style={{
                  animation: 'statPop 0.5s cubic-bezier(0.16,1,0.3,1) both',
                  animationDelay: `${0.15 + i * 0.08}s`,
                }}
              >
                <div className="font-black text-white mb-0.5 text-2xl">{s.num}</div>
                <div className="text-white/50 font-medium text-xs">{s.label}</div>
              </div>
            ))}
          </div>
        )}

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
