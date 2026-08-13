'use client';
import { CheckCircle2, Shield, Lightbulb, Leaf, Wrench, BarChart3, Globe, Clock } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useLanguage } from '@/contexts/LanguageContext';

const REASON_META = [
  { icon: Clock,        color: '#6BBD45', num: '01' },
  { icon: Shield,       color: '#3b82f6', num: '02' },
  { icon: Lightbulb,    color: '#f59e0b', num: '03' },
  { icon: Leaf,         color: '#10b981', num: '04' },
  { icon: Wrench,       color: '#8b5cf6', num: '05' },
  { icon: BarChart3,    color: '#ef4444', num: '06' },
  { icon: Globe,        color: '#06b6d4', num: '07' },
  { icon: CheckCircle2, color: '#f97316', num: '08' },
];

function AdvantageCard({ title, desc, color, num, Icon, i }: { title: string; desc: string; color: string; num: string; Icon: React.ElementType; i: number }) {
  const reveal = useScrollReveal(0.05);
  return (
    <div ref={reveal.ref} className="group relative bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-2xl hover:-translate-y-2 transition-all duration-400 overflow-hidden cursor-default"
      style={{ opacity: reveal.visible ? 1 : 0, transform: reveal.visible ? 'translateY(0)' : 'translateY(36px)',
        transition: `opacity 0.6s ease ${i * 70}ms, transform 0.6s ease ${i * 70}ms, box-shadow 0.3s, translate 0.3s` }}>
      <div className="absolute top-0 left-0 right-0 h-0.5 rounded-t-2xl transition-all duration-300 group-hover:h-1" style={{ background: color }} />
      <span className="absolute top-3 right-4 text-6xl font-black opacity-[0.12] select-none pointer-events-none" style={{ color, lineHeight: 1 }}>{num}</span>
      <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110" style={{ background: color + '15' }}>
        <Icon size={22} style={{ color }} />
      </div>
      <h3 className="font-black text-[#1B3A2D] text-xl mb-2">{title}</h3>
      <p className="text-gray-500 text-base leading-relaxed">{desc}</p>
    </div>
  );
}

export default function HomeWhyUs() {
  const header = useScrollReveal();
  const { t } = useLanguage();
  const p = t.pages.home.whyUs;

  return (
    <section className="py-16 lg:py-20 xl:py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={header.ref} className="text-center mb-14 transition-all duration-700"
          style={{ opacity: header.visible ? 1 : 0, transform: header.visible ? 'none' : 'translateY(30px)' }}>
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-0.5 bg-[#6BBD45]" />
            <span className="text-[#6BBD45] text-sm font-semibold tracking-widest uppercase">{p.eyebrow}</span>
            <div className="w-8 h-0.5 bg-[#6BBD45]" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-[#1B3A2D] mb-4">{p.title}</h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-base leading-relaxed">{p.subtitle}</p>
        </div>

        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-5">
          {p.items.map((item, i) => (
            <AdvantageCard key={i} title={item.title} desc={item.desc} color={REASON_META[i].color} num={REASON_META[i].num} Icon={REASON_META[i].icon} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
