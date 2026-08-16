'use client';
import { AboutPageHero } from './AboutPageHero';
import { useLanguage } from '@/contexts/LanguageContext';

const ISO_SYSTEMS = [
  { code: 'ISO 9001:2015',  icon: '✓',  color: '#3b82f6', label: 'Quality Management System' },
  { code: 'ISO 14001:2015', icon: '🌿', color: '#10b981', label: 'Environmental Management System' },
  { code: 'ISO 45001:2018', icon: '🛡️', color: '#ef4444', label: 'Occupational Health & Safety System' },
  { code: 'ISO 50001:2018', icon: '⚡', color: '#f59e0b', label: 'Energy Management System' },
  { code: 'ISO 41001:2018', icon: '🏢', color: '#8b5cf6', label: 'Facility Management System' },
];

export default function IMSContent() {
  const { t } = useLanguage();
  const im = t.pages.about.imsSection;
  return (
    <>
      <AboutPageHero section={im.eyebrow} title={im.title} subtitle={im.subtitle} />
      <div className="py-12 px-6 lg:px-10 xl:px-14 bg-white">
        <div className="bg-white border border-gray-100 rounded-2xl p-8 mb-8">
          <p className="text-gray-600 leading-relaxed mb-4 text-lg">{im.body}</p>
          <p className="text-gray-600 leading-relaxed text-lg">{im.principleBody}</p>
        </div>

        <div className="bg-[#6BBD45]/8 border border-[#6BBD45]/30 rounded-2xl p-8 mb-8">
          <h2 className="text-[#1B3A2D] font-black uppercase tracking-widest mb-6 text-sm">{im.commitmentsLabel}</h2>
          <ol className="space-y-4">
            {im.commitments.map((item, i) => (
              <li key={i} className="text-base flex items-start gap-4 text-gray-700">
                <span className="w-7 h-7 rounded-full bg-[#6BBD45] text-white font-bold flex items-center justify-center shrink-0 mt-0.5 text-xs">
                  {i + 1}
                </span>
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ol>
          <div className="mt-8 pt-6 border-t border-[#6BBD45]/20 flex flex-wrap items-center gap-6">
            <div>
              <p className="text-base text-[#1B3A2D] font-bold">Ir. ONG CHING LOON</p>
              <p className="text-gray-500 text-sm">{t.common.managingDirector}</p>
            </div>
            <p className="text-gray-500 text-sm">Revision 4 · Effective 1 August 2024</p>
            <a href="/documents/IMS_Policy_Revision_4.pdf" target="_blank" rel="noopener noreferrer"
              className="text-base ml-auto bg-[#6BBD45] hover:bg-[#5aa838] text-white font-semibold px-5 py-2 rounded-full transition-all">
              {t.common.downloadPdf}
            </a>
          </div>
        </div>

        <h3 className="text-base font-black text-[#1B3A2D] mb-4">{im.systemsTitle}</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {ISO_SYSTEMS.map((s, i) => (
            <div key={s.code} className="flex items-center gap-4 bg-white border border-gray-100 rounded-xl p-4 hover:border-[#6BBD45]/30 transition-colors">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center text-lg shrink-0" style={{ background: s.color + '18' }}>{s.icon}</div>
              <div>
                <div className="text-base font-black text-[#1B3A2D]">{s.code}</div>
                <div className="text-gray-500 mt-0.5 text-sm">{s.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
