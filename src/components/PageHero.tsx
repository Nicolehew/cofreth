'use client';
import { useScrollReveal } from '@/hooks/useScrollReveal';

interface Stat { num: string; label: string }

interface PageHeroProps {
  eyebrow: string;
  eyebrowSub?: string;
  title: React.ReactNode;
  subtitle: string;
  stats?: Stat[];
  ytId?: string; // unique YouTube video ID per page
}

/**
 * PageHero — shared header for every inner page.
 * LIGHT MODE  → green-50 background with animated dot grid (clean, bright)
 * DARK MODE   → YouTube video background with dark overlay (cinematic)
 * Stats strip is always center-aligned.
 */
export default function PageHero({
  eyebrow,
  eyebrowSub,
  title,
  subtitle,
  stats,
  ytId = 'vCI2kmFJD_w',
}: PageHeroProps) {
  const reveal = useScrollReveal();

  return (
    <div className="relative overflow-hidden border-b border-gray-100 dark:border-white/10 pt-24 md:pt-32">

      {/* ── LIGHT MODE background ── */}
      <div className="block dark:hidden absolute inset-0 bg-green-50">
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.08]"
          style={{
            backgroundImage: 'radial-gradient(#6BBD45 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />
      </div>

      {/* ── DARK MODE: YouTube video background ── */}
      <div className="hidden dark:block absolute inset-0 overflow-hidden bg-[#060e08]">
        {/* Static fallback while video loads */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'url(/projects/klia2.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.3,
          }}
        />
        {/* YouTube iframe — covers full viewport regardless of aspect ratio */}
        <iframe
          src={`https://www.youtube.com/embed/${ytId}?autoplay=1&mute=1&loop=1&playlist=${ytId}&controls=0&rel=0&playsinline=1&modestbranding=1&iv_load_policy=3&showinfo=0&disablekb=1`}
          allow="autoplay; encrypted-media"
          className="absolute border-0 pointer-events-none"
          title="Page background video"
          style={{
            top: '50%', left: '50%',
            width: '177.78vh',
            height: '56.25vw',
            minWidth: '100%',
            minHeight: '100%',
            transform: 'translate(-50%, -50%)',
            zIndex: 1,
          }}
        />
        {/* Dark overlay for text legibility */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to right, rgba(4,10,6,0.82) 0%, rgba(8,20,14,0.60) 55%, rgba(4,10,6,0.75) 100%)',
            zIndex: 2,
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to top, rgba(4,10,6,0.70) 0%, transparent 50%)',
            zIndex: 2,
          }}
        />
        {/* Animated dot grid */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(#6BBD45 1px, transparent 1px)',
            backgroundSize: '28px 28px',
            opacity: 0.055,
            zIndex: 3,
            animation: 'dotDrift 20s linear infinite',
          }}
        />
      </div>

      {/* Green left accent bar */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#6BBD45]" style={{ zIndex: 10 }} />

      {/* ── Content ── */}
      <div
        ref={reveal.ref}
        className="relative max-w-6xl mx-auto px-6 md:px-12 transition-all duration-700"
        style={{ opacity: reveal.visible ? 1 : 0, transform: reveal.visible ? 'none' : 'translateY(24px)', zIndex: 5 }}
      >
        {/* Eyebrow */}
        <div className="flex items-center gap-2 mb-5">
          <span
            className="bg-[#6BBD45]/15 dark:bg-[#6BBD45]/20 border border-[#6BBD45]/30 dark:border-[#6BBD45]/40 text-[#6BBD45] font-bold px-3 py-1 rounded-full uppercase tracking-widest"
            style={{ fontSize: '11px' }}
          >
            {eyebrow}
          </span>
          {eyebrowSub && (
            <>
              <span className="text-gray-300 dark:text-white/30" style={{ fontSize: '11px' }}>·</span>
              <span className="text-gray-500 dark:text-white/50 font-medium" style={{ fontSize: '12px' }}>{eyebrowSub}</span>
            </>
          )}
        </div>

        {/* Heading */}
        <h1
          className="font-black text-[#1B3A2D] dark:text-white leading-none mb-5"
          style={{ fontSize: 'clamp(2.4rem, 5.5vw, 4.2rem)', letterSpacing: '-0.02em' }}
        >
          {title}
        </h1>

        {/* Subtitle */}
        <p
          className="text-gray-500 dark:text-white/65 max-w-xl leading-relaxed mb-10"
          style={{ fontSize: '16px' }}
        >
          {subtitle}
        </p>

        {/* Stats strip — center-aligned in each cell */}
        {stats && stats.length > 0 && (
          <div className="flex flex-wrap border-t border-gray-100 dark:border-white/10">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className="flex-1 min-w-[110px] py-5 px-4 border-r border-gray-100 dark:border-white/10 last:border-r-0 text-center"
                style={{
                  animation: 'statPop 0.5s cubic-bezier(0.16,1,0.3,1) both',
                  animationDelay: `${0.15 + i * 0.08}s`,
                }}
              >
                <div
                  className="font-black text-[#1B3A2D] dark:text-white mb-0.5"
                  style={{ fontSize: '22px' }}
                >
                  {s.num}
                </div>
                <div
                  className="text-gray-400 dark:text-white/45 font-medium"
                  style={{ fontSize: '12px' }}
                >
                  {s.label}
                </div>
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
