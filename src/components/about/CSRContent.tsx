'use client';
import { AboutPageHero } from './AboutPageHero';
import { useLanguage } from '@/contexts/LanguageContext';

const INITIATIVE_ICONS   = ['🩺', '🌳', '🏠'];
const INITIATIVE_COLORS  = ['#ef4444', '#6BBD45', '#f59e0b'];
const INITIATIVE_STATS   = [{ stat: '500+', statLabel: 'units donated' }, { stat: '170', statLabel: 'trees planted' }, { stat: '10+', statLabel: 'orphanages supported' }];

const SDG_COLORS = [
  '#e5243b','#dda63a','#4c9f38','#c5192d','#ff3a21',
  '#26bde2','#fcc30b','#a21942','#fd6925','#dd1367',
  '#fd9d24','#bf8b2e','#3f7e44','#0a97d9','#56c02b',
  '#00689d','#19486a',
];

export default function CSRContent() {
  const { t } = useLanguage();
  const cs = t.pages.about.csrSection;
  return (
    <>
      <AboutPageHero section={cs.eyebrow} title={cs.title} subtitle={cs.subtitle} />

      {/* CSR Policy */}
      <div className="py-10 px-6 lg:px-10 xl:px-14 bg-[#f8fdf5] border-b border-[#6BBD45]/20">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col lg:flex-row items-start gap-8">
            <div className="flex-1">
              <span className="text-xs font-black uppercase tracking-[0.2em] text-[#6BBD45]">CSR Policy · Section 13 · Issue 2</span>
              <h3 className="font-black text-[#1B3A2D] text-2xl mt-2 mb-4">{cs.policyTitle}</h3>
              <p className="text-gray-600 text-base leading-relaxed mb-5">{cs.policyBody}</p>
              <div className="grid sm:grid-cols-2 gap-3 mb-5">
                {cs.dimensions.map(item => (
                  <div key={item} className="flex items-start gap-2">
                    <span className="text-[#6BBD45] mt-0.5 shrink-0 font-bold">✓</span>
                    <span className="text-sm text-gray-600">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="shrink-0">
              <a href="/documents/CSR_Policy.pdf" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#1B3A2D] hover:bg-[#6BBD45] text-white font-semibold px-6 py-3 rounded-full transition-all text-sm whitespace-nowrap">
                {t.common.downloadPdf} →
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Initiatives */}
      <div className="py-16 px-6 lg:px-10 xl:px-14 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="mb-10">
            <span className="text-xs font-black uppercase tracking-[0.2em] text-[#6BBD45]">{cs.initiativesEyebrow}</span>
            <h3 className="font-black text-[#1B3A2D] text-3xl mt-2">{cs.initiativesTitle}</h3>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {cs.initiatives.map((item, i) => (
              <div key={item.title} className="group rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="h-2" style={{ background: INITIATIVE_COLORS[i] }} />
                <div className="p-7">
                  <div className="text-5xl mb-4">{INITIATIVE_ICONS[i]}</div>
                  <div className="flex items-baseline gap-1.5 mb-4">
                    <span className="text-4xl font-black" style={{ color: INITIATIVE_COLORS[i] }}>{INITIATIVE_STATS[i].stat}</span>
                    <span className="text-sm font-semibold text-gray-400">{INITIATIVE_STATS[i].statLabel}</span>
                  </div>
                  <h3 className="font-black text-[#1B3A2D] text-xl mb-3 group-hover:text-[#6BBD45] transition-colors">{item.title}</h3>
                  <p className="text-gray-500 text-base leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* SDG Goals */}
      <div className="py-16 px-6 lg:px-10 xl:px-14" style={{ background: 'linear-gradient(135deg, #0F2419 0%, #1B3A2D 100%)' }}>
        <div className="max-w-5xl mx-auto">
          <div className="mb-10">
            <span className="text-xs font-black uppercase tracking-[0.2em] text-[#6BBD45]">UN SDGs</span>
            <h3 className="font-black text-white text-3xl mt-2 mb-3">{cs.sdgTitle}</h3>
            <p className="text-gray-300 text-base max-w-2xl leading-relaxed">
              {cs.sdgBody}
            </p>
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
          <div className="text-5xl mb-5">🌍</div>
          <h3 className="font-black text-white text-3xl mb-4">{cs.ctaTitle}</h3>
          <p className="text-white/90 text-base leading-relaxed">
            {cs.ctaBody}
          </p>
        </div>
      </div>
    </>
  );
}
