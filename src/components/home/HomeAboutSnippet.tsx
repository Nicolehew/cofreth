'use client';
import React from 'react';
import Link from 'next/link';
import { Award, Users, Globe, Zap } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useLanguage } from '@/contexts/LanguageContext';

export default function HomeAboutSnippet() {
  const left = useScrollReveal();
  const right = useScrollReveal(0.1);
  const { t } = useLanguage();

  const highlights: { icon: React.ElementType; value: string; label: string; desc?: string; descNode?: React.ReactNode }[] = [
    { icon: Award, value: '38+', label: t.about.stat1Label, desc: t.about.stat1Desc },
    { icon: Users, value: '100+', label: t.about.stat2Label, desc: t.about.stat2Desc },
    { icon: Globe, value: '5',   label: t.about.stat3Label, desc: t.about.stat3Desc },
    {
      icon: Zap, value: '#1', label: t.about.stat4Label,
      descNode: <>First ESCO to develop the <strong className="text-gray-700">National Energy Efficiency Master Plan (NEEMP) &amp; Action Plan (NEEAP)</strong> in <strong className="text-gray-700">Malaysia</strong>.</>,
    },
  ];

  return (
    <section className="py-16 lg:py-20 xl:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div ref={left.ref} className="transition-all duration-700" style={{ opacity: left.visible ? 1 : 0, transform: left.visible ? 'none' : 'translateX(-40px)' }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-0.5 bg-[#6BBD45]" />
              <span className="text-[#6BBD45] text-sm font-semibold tracking-widest uppercase">{t.about.sectionLabel}</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1B3A2D] leading-tight mb-6">
              {t.about.headline}
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">{t.about.body1}</p>
            <p className="text-gray-600 leading-relaxed mb-8">{t.about.body2}</p>
            <Link href="/about" className="inline-flex items-center gap-2 bg-[#1B3A2D] hover:bg-[#6BBD45] text-white font-semibold px-8 py-4 rounded-full transition-colors duration-200 text-sm">
              {t.about.cta}
            </Link>
          </div>

          <div ref={right.ref} className="grid grid-cols-2 gap-4 transition-all duration-700 delay-100" style={{ opacity: right.visible ? 1 : 0, transform: right.visible ? 'none' : 'translateX(40px)' }}>
            {highlights.map((h, i) => {
              const Icon = h.icon;
              return (
                <div key={h.label} className="p-4 sm:p-6 rounded-2xl border border-gray-100 hover:border-[#6BBD45] hover:shadow-lg transition-all duration-300 group"
                  style={{ opacity: right.visible ? 1 : 0, transform: right.visible ? 'none' : 'translateY(20px)', transition: `all 0.5s ease ${i * 100}ms` }}>
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#6BBD45]/10 rounded-xl flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-[#6BBD45] transition-colors">
                    <Icon size={18} className="text-[#6BBD45] group-hover:text-white transition-colors sm:hidden" />
                    <Icon size={22} className="text-[#6BBD45] group-hover:text-white transition-colors hidden sm:block" />
                  </div>
                  <div className="text-2xl sm:text-3xl font-black text-[#1B3A2D] mb-1">{h.value}</div>
                  <div className="text-sm sm:text-base font-bold text-gray-700 mb-2">{h.label}</div>
                  <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">{h.descNode ?? h.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
