'use client';
import { AboutPageHero } from './AboutPageHero';
import { useLanguage } from '@/contexts/LanguageContext';

const GOVERNANCE_POLICY_ICONS = ['📣', '🚫', '📋', '🔒'];
const GOVERNANCE_POLICY_PDFS = [
  '/documents/Whistleblowing_Policy.pdf',
  '/documents/Anti_Bribery_Corruption_Policy.pdf',
  '/documents/Standard_of_Business_Conduct.pdf',
  '/documents/Personal_Data_Protection_Policy.pdf',
];

const RBA_ELEMENTS = [
  { code: 'E1',  title: 'Company Commitment',                          color: '#e07b54' },
  { code: 'E2',  title: 'Management Accountability & Responsibility',  color: '#f0a04b' },
  { code: 'E3',  title: 'Legal & Customer Requirements',               color: '#5baa5b' },
  { code: 'E4',  title: 'Risk Assessment & Risk Management',           color: '#b23a3a' },
  { code: 'E5',  title: 'Improvement Objectives',                      color: '#e07b54' },
  { code: 'E6',  title: 'Training',                                    color: '#5b9bd5' },
  { code: 'E7',  title: 'Communication',                               color: '#8b6fc7' },
  { code: 'E8',  title: 'Worker Feedback, Participation & Grievance',  color: '#4a9b6f' },
  { code: 'E9',  title: 'Audit & Assessment',                          color: '#4a6fa5' },
  { code: 'E10', title: 'Corrective Action Process',                   color: '#8a9ba8' },
  { code: 'E11', title: 'Documentation & Records',                     color: '#a8b84b' },
  { code: 'E12', title: 'Supplier Responsibility',                     color: '#4a9b6f' },
];

export default function GovernanceContent() {
  const { t } = useLanguage();
  const gv = t.pages.about.governanceSection;
  return (
    <>
      <AboutPageHero section={gv.eyebrow} title={gv.title} subtitle={gv.subtitle} />

      {/* RBA + Commitments */}
      <div className="py-16 px-6 lg:px-10 xl:px-14" style={{ background: 'linear-gradient(135deg, #0F2419 0%, #1B3A2D 100%)' }}>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="rounded-2xl p-8 border border-white/10 bg-white/5">
            <div className="text-5xl mb-5">🤝</div>
            <h3 className="font-black text-white text-xl mb-3">{gv.rbaTitle}</h3>
            <p className="text-gray-300 text-base leading-relaxed">{gv.rbaDesc}</p>
          </div>
          <div className="rounded-2xl p-8 border border-white/10 bg-white/5">
            <div className="text-5xl mb-5">📜</div>
            <h3 className="font-black text-white text-xl mb-5">{gv.commitmentsTitle}</h3>
            <ul className="space-y-4">
              {gv.commitments.map(item => (
                <li key={item} className="flex items-start gap-3 text-gray-300 text-base">
                  <span className="text-[#6BBD45] font-black text-lg shrink-0 leading-tight">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* RBA E1–E12 Elements */}
      <div className="py-16 px-6 lg:px-10 xl:px-14 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="mb-10">
            <span className="text-xs font-black uppercase tracking-[0.2em] text-[#6BBD45]">{gv.rbaCodeLabel}</span>
            <h3 className="font-black text-[#1B3A2D] text-3xl mt-2 mb-2">{gv.rbaElementsTitle}</h3>
            <p className="text-gray-500 text-base max-w-2xl">
              {gv.rbaElementsDesc}
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {RBA_ELEMENTS.map(el => (
              <div key={el.code} className="rounded-xl p-5 text-white flex flex-col justify-between min-h-[140px] hover:scale-[1.03] transition-transform duration-200 cursor-default" style={{ background: el.color }}>
                <span className="text-2xl font-black tracking-tight">{el.code}</span>
                <span className="text-sm font-bold leading-snug mt-3">{el.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Policy Documents */}
      <div className="py-16 px-6 lg:px-10 xl:px-14 bg-white border-t border-gray-100">
        <div className="max-w-5xl mx-auto">
          <div className="mb-8">
            <span className="text-xs font-black uppercase tracking-[0.2em] text-[#6BBD45]">{gv.policyDocsTitle}</span>
            <h3 className="font-black text-[#1B3A2D] text-3xl mt-2">{gv.policyListTitle}</h3>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {gv.policies.map((pol, i) => (
              <div key={pol.title} className="bg-white border border-gray-100 rounded-2xl p-6 hover:border-[#6BBD45]/40 hover:shadow-md transition-all">
                <div className="text-3xl mb-4">{GOVERNANCE_POLICY_ICONS[i]}</div>
                <h4 className="font-black text-[#1B3A2D] text-lg mb-3">{pol.title}</h4>
                <p className="text-gray-500 text-base leading-relaxed mb-5">{pol.desc}</p>
                <a href={GOVERNANCE_POLICY_PDFS[i]} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[#6BBD45] font-semibold text-sm hover:underline">
                  {t.common.viewPolicy} →
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-14 px-6 lg:px-10 xl:px-14 bg-[#6BBD45]">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="font-black text-white text-3xl mb-3">{gv.ctaTitle}</h3>
          <p className="text-white/85 text-base leading-relaxed">
            {gv.ctaBody}
          </p>
        </div>
      </div>
    </>
  );
}
