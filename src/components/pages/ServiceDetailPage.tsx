'use client';
import Link from 'next/link';
import { CheckCircle, ArrowLeft, Building2, Zap, Leaf, Cpu, LucideIcon } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useLanguage } from '@/contexts/LanguageContext';

const ICON_MAP: Record<string, LucideIcon> = { Building2, Zap, Leaf, Cpu };

interface SectionData { title: string; desc: string; points: readonly string[]; image?: string; }

function SectionRow({ sec, index }: { sec: SectionData; index: number }) {
  const reveal = useScrollReveal();
  const { t } = useLanguage();
  const isEven = index % 2 === 0;
  return (
    <div ref={reveal.ref} className="transition-all duration-700"
      style={{ opacity: reveal.visible ? 1 : 0, transform: reveal.visible ? 'none' : 'translateY(40px)', transitionDelay: `${index * 60}ms` }}>
      <div className={`grid lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden shadow-sm border border-gray-100 ${isEven ? '' : 'direction-rtl'}`}>
        {/* Image panel */}
        {sec.image && (
          <div className={`relative h-64 lg:h-auto min-h-[280px] ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
            <img src={sec.image} alt={sec.title} className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(15,36,25,0.55) 0%, transparent 70%)' }} />
            <div className="absolute top-5 left-5">
              <span className="bg-[#6BBD45] text-white text-xs font-bold px-3 py-1.5 rounded-full tracking-widest uppercase">
                {String(index + 1).padStart(2, '0')}
              </span>
            </div>
          </div>
        )}

        {/* Content panel */}
        <div className={`bg-white p-8 lg:p-10 flex flex-col justify-center ${sec.image ? (isEven ? 'lg:order-1' : 'lg:order-2') : 'lg:col-span-2'}`}>
          {!sec.image && (
            <div className="w-9 h-9 bg-[#6BBD45] rounded-full flex items-center justify-center text-white text-sm font-bold mb-4 shrink-0">
              {String(index + 1).padStart(2, '0')}
            </div>
          )}
          <h2 className="text-2xl font-bold text-[#1B3A2D] mb-3">{sec.title}</h2>
          <p className="text-gray-500 leading-relaxed mb-6">{sec.desc}</p>
          <div className="border-t border-gray-100 pt-5">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">{t.common.keyCapabilities}</p>
            <ul className="grid sm:grid-cols-2 gap-2.5">
              {sec.points.map(p => (
                <li key={p} className="flex items-start gap-2.5">
                  <CheckCircle size={16} className="text-[#6BBD45] mt-0.5 shrink-0" />
                  <span className="text-sm text-gray-700 leading-snug">{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

const SECTION_IMAGES: Record<string, (string | undefined)[]> = {
  fm: [
    'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80&fit=crop',
    'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&q=80&fit=crop',
    'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80&fit=crop',
    'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80&fit=crop',
  ],
  energy: [undefined, undefined, undefined, undefined],
  green: [undefined, undefined, undefined, undefined],
  smart: [undefined, undefined, undefined, undefined],
};

interface Props {
  serviceKey: 'fm' | 'energy' | 'green' | 'smart';
  iconName: string;
  heroImage: string;
}

export default function ServiceDetailPage({ serviceKey, iconName, heroImage }: Props) {
  const hero = useScrollReveal();
  const { t } = useLanguage();
  const Icon = ICON_MAP[iconName] ?? Building2;
  const sd = t.pages.serviceDetails[serviceKey];
  const images = SECTION_IMAGES[serviceKey] ?? [];

  const sections: SectionData[] = sd.sections.map((s, i) => ({
    title: s.title,
    desc: s.desc,
    points: s.points,
    image: images[i],
  }));

  return (
    <>
      {/* Hero with photo */}
      <div className="relative min-h-[60vh] flex items-end overflow-hidden">
        <img src={heroImage} alt={sd.title} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(8,20,14,0.97) 0%, rgba(10,28,18,0.75) 50%, rgba(8,20,14,0.40) 100%)' }} />
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'linear-gradient(#6BBD45 1px, transparent 1px), linear-gradient(90deg, #6BBD45 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

        <div ref={hero.ref} className="relative w-full max-w-6xl mx-auto px-6 pb-14 pt-36 transition-all duration-700"
          style={{ opacity: hero.visible ? 1 : 0, transform: hero.visible ? 'none' : 'translateY(30px)' }}>
          <Link href="/services" className="inline-flex items-center gap-2 text-[#6BBD45] text-sm mb-8 hover:gap-3 transition-all font-medium">
            <ArrowLeft size={16} /> {t.common.backToServices}
          </Link>
          <div className="flex items-center gap-4 mb-5">
            <div className="w-14 h-14 bg-[#6BBD45] rounded-2xl flex items-center justify-center shadow-lg">
              <Icon size={28} className="text-white" />
            </div>
            <span className="text-[#6BBD45] text-sm font-bold tracking-widest uppercase">{t.common.ourServices}</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-4 leading-tight">{sd.title}</h1>
          <p className="text-xl text-[#6BBD45] font-semibold mb-3">{sd.subtitle}</p>
          <p className="text-gray-300 text-lg max-w-3xl leading-relaxed">{sd.intro}</p>
        </div>
      </div>

      {/* Sections */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 space-y-8">
          {sections.map((sec, i) => (
            <SectionRow key={sec.title} sec={sec} index={i} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="relative rounded-3xl overflow-hidden">
            <img src={heroImage} alt="" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(8,20,14,0.96) 0%, rgba(15,36,25,0.94) 100%)' }} />
            <div className="relative p-14 text-white">
              <div className="w-16 h-16 bg-[#6BBD45] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Icon size={32} className="text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">{sd.ctaText}</h2>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="bg-[#6BBD45] hover:bg-[#5aa838] text-white font-bold px-9 py-4 rounded-full transition-all hover:-translate-y-0.5 shadow-lg">
                  {t.common.contactOurTeam}
                </Link>
                <Link href="/services" className="border-2 border-white/30 hover:border-[#6BBD45] text-white hover:text-[#6BBD45] font-bold px-9 py-4 rounded-full transition-all">
                  {t.common.viewAllServices}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
