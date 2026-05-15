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
    <div className="relative overflow-hidden bg-green-50 dark:bg-[#0d1117] border-b border-gray-100 dark:border-gray-800 pt-24 md:pt-32">
      {/* Dot grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.08] dark:opacity-[0.05]"
        style={{ backgroundImage: 'radial-gradient(#6BBD45 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
      {/* Green left accent bar */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#6BBD45]" />

      <div ref={reveal.ref} className="max-w-6xl mx-auto px-6 md:px-12 transition-all duration-700"
        style={{ opacity: reveal.visible ? 1 : 0, transform: reveal.visible ? 'none' : 'translateY(24px)' }}>

        {/* Eyebrow */}
        <div className="flex items-center gap-2 mb-5">
          <span className="bg-[#6BBD45]/10 dark:bg-[#6BBD45]/20 text-[#6BBD45] font-bold px-3 py-1 rounded-full uppercase tracking-widest"
            style={{ fontSize: '11px' }}>
            {eyebrow}
          </span>
          {eyebrowSub && (
            <>
              <span className="text-gray-300 dark:text-gray-700" style={{ fontSize: '11px' }}>·</span>
              <span className="text-gray-400 dark:text-gray-500 font-medium" style={{ fontSize: '12px' }}>{eyebrowSub}</span>
            </>
          )}
        </div>

        {/* Heading */}
        <h1 className="font-black text-[#1B3A2D] dark:text-white leading-none mb-5"
          style={{ fontSize: 'clamp(2.4rem, 5.5vw, 4.2rem)', letterSpacing: '-0.02em' }}>
          {title}
        </h1>

        {/* Subtitle */}
        <p className="text-gray-500 dark:text-gray-400 max-w-xl leading-relaxed mb-10" style={{ fontSize: '16px' }}>
          {subtitle}
        </p>

        {/* Stats strip */}
        {stats && stats.length > 0 && (
          <div className="flex flex-wrap border-t border-gray-100 dark:border-gray-800">
            {stats.map((s, i) => (
              <div key={s.label}
                className="flex-1 min-w-[110px] py-5 pr-8 border-r border-gray-100 dark:border-gray-800 last:border-r-0">
                <div className="font-black text-[#1B3A2D] dark:text-white mb-0.5" style={{ fontSize: '22px' }}>{s.num}</div>
                <div className="text-gray-400 dark:text-gray-500 font-medium" style={{ fontSize: '12px' }}>{s.label}</div>
              </div>
            ))}
          </div>
        )}

        {/* No-stats bottom padding */}
        {(!stats || stats.length === 0) && <div className="pb-10" />}
      </div>
    </div>
  );
}
