'use client';
import { AboutPageHero } from './AboutPageHero';
import { useLanguage } from '@/contexts/LanguageContext';

const VALUE_ICONS  = ['👥', '🤝', '🌟', '💡', '🌱', '⚖️'];
const VALUE_COLORS = ['#3b82f6', '#6BBD45', '#f59e0b', '#8b5cf6', '#10b981', '#ef4444'];

export default function ValuesContent() {
  const { t } = useLanguage();
  const vs = t.pages.about.valuesSection;
  const gv = t.pages.about.governanceSection;
  return (
    <>
      <AboutPageHero section={vs.eyebrow} title={vs.title} subtitle={vs.subtitle} />
      <div className="py-12 px-6 lg:px-10 xl:px-14 bg-white">
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5 mb-10">
          {vs.values.map((v, i) => (
            <div key={v.title} className="group bg-white border border-gray-100 hover:border-[#6BBD45]/40 rounded-2xl p-6 hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform" style={{ background: VALUE_COLORS[i] + '18' }}>{VALUE_ICONS[i]}</div>
              <h3 className="font-black text-[#1B3A2D] mb-3 group-hover:text-[#6BBD45] transition-colors text-lg">{v.title}</h3>
              <p className="text-base text-gray-500 leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-[#6BBD45]/10 border border-[#6BBD45]/30 rounded-2xl p-8 mb-6">
          <div className="flex items-start gap-5">
            <div className="text-4xl shrink-0">🤝</div>
            <div>
              <h3 className="text-base font-black text-[#1B3A2D] mb-2">{gv.rbaTitle}</h3>
              <p className="text-base text-gray-600 leading-relaxed">{gv.rbaDesc}</p>
            </div>
          </div>
        </div>

        <div className="bg-[#1B3A2D] rounded-2xl p-8 text-white flex flex-col sm:flex-row items-start sm:items-center gap-6">
          <div className="flex-1">
            <h3 className="font-black text-[#6BBD45] text-lg mb-2">{vs.charterTitle}</h3>
            <p className="text-gray-300 text-base leading-relaxed">{vs.charterDesc}</p>
          </div>
          <a href="/documents/Ethics_Core_Values_Charter.pdf" target="_blank" rel="noopener noreferrer"
            className="shrink-0 border border-[#6BBD45]/40 text-[#6BBD45] hover:bg-[#6BBD45] hover:text-white font-semibold px-6 py-3 rounded-full transition-all whitespace-nowrap text-sm">
            {t.common.downloadCharter} →
          </a>
        </div>
      </div>
    </>
  );
}
