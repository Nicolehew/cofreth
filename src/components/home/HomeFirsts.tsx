'use client';
import Link from 'next/link';
import { ArrowRight, Trophy } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useLanguage } from '@/contexts/LanguageContext';

const FIRST_YEARS = ['1996', '1997', '1997', '1997–2000', '2001', '2003', '2007', '2009', '2013', '2018'];

function FirstCard({ item, year, i }: { item: { badge: string; title: string; desc: string }; year: string; i: number }) {
  const reveal = useScrollReveal(0.05);
  return (
    <div ref={reveal.ref} className="transition-all duration-700"
      style={{ opacity: reveal.visible ? 1 : 0, transform: reveal.visible ? 'none' : 'translateY(28px)', transitionDelay: `${(i % 3) * 80}ms` }}>
      <div className="group bg-white border border-gray-100 hover:border-[#6BBD45]/40 rounded-2xl p-6 h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
        <div className="flex items-start justify-between gap-3 mb-3">
          <span className="inline-block bg-[#6BBD45]/10 text-[#6BBD45] text-xs font-bold px-3 py-1 rounded-full">{item.badge}</span>
          <span className="text-xs font-bold text-gray-400 shrink-0 mt-0.5">{year}</span>
        </div>
        <h3 className="font-black text-[#1B3A2D] text-xl mb-2 leading-snug group-hover:text-[#6BBD45] transition-colors">{item.title}</h3>
        <p className="text-gray-500 text-base leading-relaxed">{item.desc}</p>
      </div>
    </div>
  );
}

export default function HomeFirsts() {
  const header = useScrollReveal(0.05);
  const { t } = useLanguage();
  const p = t.pages.home.firsts;

  return (
    <section className="py-20 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div ref={header.ref} className="text-center mb-14 transition-all duration-700"
          style={{ opacity: header.visible ? 1 : 0, transform: header.visible ? 'none' : 'translateY(24px)' }}>
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-0.5 bg-[#6BBD45]" />
            <span className="text-[#6BBD45] text-sm font-bold tracking-widest uppercase">{p.eyebrow}</span>
            <div className="w-8 h-0.5 bg-[#6BBD45]" />
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-[#1B3A2D] mb-4 leading-tight">
            {p.title1} <span className="text-[#6BBD45]">{p.titleAccent}</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">{p.subtitle}</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {p.items.map((f, i) => <FirstCard key={i} item={f} year={FIRST_YEARS[i]} i={i} />)}
        </div>

        <div className="text-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-3 bg-gradient-to-r from-[#0F2419] to-[#1B3A2D] rounded-2xl px-6 py-5 text-white max-w-full">
            <Trophy size={20} className="text-[#6BBD45] shrink-0" />
            <span className="font-semibold text-sm">{p.ctaBadge}</span>
            <Link href="/about" className="flex items-center gap-1 text-[#6BBD45] hover:text-white text-sm font-bold transition-colors">
              {p.ctaLink} <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
