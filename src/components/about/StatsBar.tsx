'use client';
import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const statValues = [
  { value: 38, suffix: '+' },
  { value: 30, suffix: '+' },
  { value: 5,  suffix: '×' },
  { value: 5,  suffix: '×' },
];

function AnimatedNumber({ target, suffix, active }: { target: number; suffix: string; active: boolean }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!active) return;
    const duration = 1800;
    const start = performance.now();
    const tick = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCurrent(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [active, target]);

  return (
    <span>
      {current}
      <span className="text-[#6BBD45]">{suffix}</span>
    </span>
  );
}

export default function StatsBar() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  const { t } = useLanguage();

  const stats = [
    { ...statValues[0], label: t.statsBar.stat1Label, desc: t.statsBar.stat1Desc },
    { ...statValues[1], label: t.statsBar.stat2Label, desc: t.statsBar.stat2Desc },
    { ...statValues[2], label: t.statsBar.stat3Label, desc: t.statsBar.stat3Desc },
    { ...statValues[3], label: t.statsBar.stat4Label, desc: t.statsBar.stat4Desc },
  ];

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setActive(true); observer.disconnect(); } },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #0F2419 0%, #1B3A2D 50%, #0F2419 100%)' }}
    >
      <div
        className="absolute inset-0 opacity-20"
        style={{
          background: 'linear-gradient(90deg, transparent 0%, rgba(107,189,69,0.15) 50%, transparent 100%)',
          animation: 'shimmer 4s ease-in-out infinite',
        }}
      />

      <div className="relative max-w-5xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((s, i) => (
          <div
            key={i}
            className="text-center group"
            style={{
              opacity: active ? 1 : 0,
              transform: active ? 'translateY(0)' : 'translateY(20px)',
              transition: `opacity 0.6s ease ${i * 120}ms, transform 0.6s ease ${i * 120}ms`,
            }}
          >
            <div className="text-4xl md:text-5xl font-black text-white mb-1 tabular-nums leading-none">
              <AnimatedNumber target={s.value} suffix={s.suffix} active={active} />
            </div>
            <div className="text-base font-bold text-white/90 mb-0.5">{s.label}</div>
            <div className="text-xs text-[#6BBD45]/80 font-medium">{s.desc}</div>
            <div
              className="mx-auto mt-3 h-0.5 bg-[#6BBD45] rounded-full"
              style={{
                width: active ? '2.5rem' : '0',
                transition: `width 0.8s ease ${i * 120 + 400}ms`,
              }}
            />
          </div>
        ))}
      </div>

      <style>{`
        @keyframes shimmer {
          0%, 100% { transform: translateX(-100%); }
          50%       { transform: translateX(100%);  }
        }
      `}</style>
    </div>
  );
}
