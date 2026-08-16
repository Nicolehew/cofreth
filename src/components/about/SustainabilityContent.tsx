'use client';
import { AboutPageHero } from './AboutPageHero';
import { useLanguage } from '@/contexts/LanguageContext';

const PILLAR_ICONS = ['🌍', '👥', '🏛️'];
const SDG_COLORS = [
  '#e5243b','#dda63a','#4c9f38','#c5192d','#ff3a21',
  '#26bde2','#fcc30b','#a21942','#fd6925','#dd1367',
  '#fd9d24','#bf8b2e','#3f7e44','#0a97d9','#56c02b',
  '#00689d','#19486a',
];

export default function SustainabilityContent() {
  const { t } = useLanguage();
  const su = t.pages.about.sustainabilitySection;
  return (
    <>
      <AboutPageHero section={su.eyebrow} title={su.title} subtitle={su.subtitle} />

      {/* ESG Policy */}
      <div className="py-16 px-6 lg:px-10 xl:px-14" style={{ background: 'linear-gradient(135deg, #0F2419 0%, #1B3A2D 100%)' }}>
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6 mb-10">
            <div>
              <span className="text-xs font-black uppercase tracking-[0.2em] text-[#6BBD45]">{su.esgLabel}</span>
              <h3 className="font-black text-white text-3xl mt-2 mb-3">{su.esgTitle}</h3>
              <p className="text-gray-300 text-base leading-relaxed max-w-2xl">{su.esgBody}</p>
              <p className="text-gray-400 text-sm mt-3">Signed by <strong className="text-white">Ir. ONG CHING LOON</strong>, Managing Director</p>
            </div>
            <a href="/documents/ESG_Policy.pdf" target="_blank" rel="noopener noreferrer"
              className="shrink-0 border border-[#6BBD45]/40 text-[#6BBD45] hover:bg-[#6BBD45] hover:text-white font-semibold px-6 py-3 rounded-full transition-all whitespace-nowrap text-sm self-start">
              {t.common.downloadPdf} →
            </a>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {su.pillars.map((pillar, i) => (
              <div key={pillar.title} className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <div className="text-3xl mb-3">{PILLAR_ICONS[i]}</div>
                <h4 className="font-black text-white text-lg mb-4">{pillar.title}</h4>
                <ul className="space-y-2.5">
                  {pillar.items.map(item => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-300">
                      <span className="text-[#6BBD45] mt-0.5 shrink-0 font-bold">✓</span>{item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* SDG Goals */}
      <div className="py-16 px-6 lg:px-10 xl:px-14 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="mb-10">
            <span className="text-xs font-black uppercase tracking-[0.2em] text-[#6BBD45]">UN SDGs</span>
            <h3 className="font-black text-[#1B3A2D] text-3xl mt-2 mb-3">{su.sdgTitle}</h3>
            <p className="text-gray-500 text-base max-w-2xl leading-relaxed">{su.sdgBody}</p>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-3">
            {SDG_COLORS.map((bg, i) => (
              <div key={i + 1} className="rounded-xl p-4 text-white flex items-center justify-center hover:scale-105 hover:shadow-lg transition-all duration-200 cursor-default aspect-square" style={{ background: bg }}>
                <span className="text-2xl font-black">{i + 1}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-14 px-6 lg:px-10 xl:px-14 bg-[#6BBD45]">
        <div className="max-w-3xl mx-auto text-center">
          <div className="text-5xl mb-5">🌱</div>
          <h3 className="font-black text-white text-3xl mb-4">{su.ctaTitle}</h3>
          <p className="text-white/90 text-base leading-relaxed">
            {su.ctaBody}
          </p>
        </div>
      </div>
    </>
  );
}
