'use client';
import { AboutPageHero } from './AboutPageHero';
import { useLanguage } from '@/contexts/LanguageContext';

const PHILOSOPHY_ICONS = ['🏢', '💰', '📋', '🔄', '💻', '⚖️'];

export default function PhilosophyContent() {
  const { t } = useLanguage();
  const ph = t.pages.about.philosophySection;
  return (
    <>
      <AboutPageHero section={ph.eyebrow} title={ph.title} subtitle={ph.subtitle} />
      <div className="py-12 px-6 lg:px-10 xl:px-14 bg-white">
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5">
          {ph.principles.map((p, i) => (
            <div key={p.n} className="group bg-white border border-gray-100 hover:border-[#6BBD45]/40 rounded-2xl p-6 hover:shadow-md transition-all duration-300">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-3xl">{PHILOSOPHY_ICONS[i]}</span>
                <span className="font-black text-[#6BBD45] tracking-widest text-xs">{p.n}</span>
              </div>
              <h3 className="font-black text-[#1B3A2D] mb-3 group-hover:text-[#6BBD45] transition-colors text-lg">{p.title}</h3>
              <p className="text-base text-gray-500 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
