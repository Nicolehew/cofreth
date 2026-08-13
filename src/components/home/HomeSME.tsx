'use client';
import Link from 'next/link';
import { ArrowRight, TrendingDown, Shield, Clock, BarChart2, CheckCircle, PhoneCall } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useLanguage } from '@/contexts/LanguageContext';

const PAIN_META = [
  { icon: TrendingDown, color: '#6BBD45' },
  { icon: Shield,       color: '#3b82f6' },
  { icon: Clock,        color: '#f59e0b' },
  { icon: BarChart2,    color: '#8b5cf6' },
];

const SECTOR_EMOJIS = ['🏢', '🏭', '🏫', '🏥', '💻', '✈️', '🏨', '🕌'];

function PainCard({ title, desc, proof, color, Icon, i }: { title: string; desc: string; proof: string; color: string; Icon: React.ElementType; i: number }) {
  const reveal = useScrollReveal(0.05);
  return (
    <div ref={reveal.ref} className="transition-all duration-700"
      style={{ opacity: reveal.visible ? 1 : 0, transform: reveal.visible ? 'none' : 'translateY(28px)', transitionDelay: `${i * 80}ms` }}>
      <div className="bg-white rounded-3xl p-7 h-full border border-gray-100 hover:border-[#6BBD45]/30 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
        <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 transition-colors duration-300" style={{ background: color + '15' }}>
          <Icon size={22} style={{ color }} />
        </div>
        <h3 className="font-black text-[#1B3A2D] text-lg mb-3 leading-snug group-hover:text-[#6BBD45] transition-colors">{title}</h3>
        <p className="text-gray-500 text-base leading-relaxed mb-4">{desc}</p>
        <div className="flex items-center gap-2 pt-3 border-t border-gray-100">
          <CheckCircle size={13} className="text-[#6BBD45] shrink-0" />
          <span className="text-xs text-gray-400 font-medium">{proof}</span>
        </div>
      </div>
    </div>
  );
}

export default function HomeSME() {
  const header = useScrollReveal(0.05);
  const sectors = useScrollReveal(0.05);
  const cta = useScrollReveal(0.05);
  const { t } = useLanguage();
  const p = t.pages.home.sme;

  return (
    <section className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div ref={header.ref} className="text-center mb-14 transition-all duration-700"
          style={{ opacity: header.visible ? 1 : 0, transform: header.visible ? 'none' : 'translateY(24px)' }}>
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-0.5 bg-[#6BBD45]" />
            <span className="text-[#6BBD45] text-sm font-bold tracking-widest uppercase">{p.eyebrow}</span>
            <div className="w-8 h-0.5 bg-[#6BBD45]" />
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-[#1B3A2D] mb-4 leading-tight">
            {p.title1}<br className="hidden sm:block" /> {p.title2}
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">{p.subtitle}</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {p.items.map((item, i) => (
            <PainCard key={i} title={item.title} desc={item.desc} proof={item.proof} color={PAIN_META[i].color} Icon={PAIN_META[i].icon} i={i} />
          ))}
        </div>

        <div ref={sectors.ref} className="transition-all duration-700 mb-14"
          style={{ opacity: sectors.visible ? 1 : 0, transform: sectors.visible ? 'none' : 'translateY(24px)' }}>
          <p className="text-center text-xs font-bold tracking-widest text-gray-400 uppercase mb-5">{p.sectorsLabel}</p>
          <div className="flex flex-wrap justify-center gap-3">
            {p.sectors.map((label, i) => (
              <div key={i} className="flex items-center gap-2 bg-white border border-gray-200 hover:border-[#6BBD45]/40 rounded-full px-4 py-2 text-sm font-semibold text-[#1B3A2D] hover:text-[#6BBD45] transition-all duration-200 cursor-default shadow-sm">
                <span>{SECTOR_EMOJIS[i]}</span>
                {label}
              </div>
            ))}
          </div>
        </div>

        <div ref={cta.ref} className="transition-all duration-700"
          style={{ opacity: cta.visible ? 1 : 0, transform: cta.visible ? 'none' : 'translateY(24px)' }}>
          <div className="bg-[#1B3A2D] rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <PhoneCall size={16} className="text-[#6BBD45]" />
                <span className="text-[#6BBD45] text-sm font-bold tracking-wider uppercase">{p.ctaEyebrow}</span>
              </div>
              <h3 className="text-white font-black text-2xl md:text-3xl mb-2">{p.ctaTitle}</h3>
              <p className="text-gray-400 text-base max-w-md leading-relaxed">{p.ctaBody}</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0 w-full md:w-auto">
              <Link href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-[#6BBD45] hover:bg-[#5aa838] text-white font-bold px-6 py-3.5 rounded-full transition-all hover:-translate-y-0.5 shadow-lg shadow-[#6BBD45]/25 text-sm">
                {p.ctaBtn1} <ArrowRight size={16} />
              </Link>
              <a href="tel:+60380238878"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/20 hover:border-[#6BBD45] text-white hover:text-[#6BBD45] font-bold px-6 py-3.5 rounded-full transition-all text-sm">
                +(603) 8023 8878
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
