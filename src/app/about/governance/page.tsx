import { AboutPageHero } from '@/components/about/AboutPageHero';

export const metadata = {
  title: 'Corporate Governance — Accountability & Transparency',
  description:
    'Cofreth corporate governance framework: RBA compliance, anti-bribery and corruption policy, transparent financial reporting and responsible procurement. Accountability at every level.',
  alternates: { canonical: '/about/governance' },
  openGraph: { title: 'Corporate Governance | Cofreth Malaysia', url: 'https://www.cofreth.com.my/about/governance' },
};

const rbaElements = [
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

const pillars = [
  { icon: '🏛️', title: 'Accountability',  color: '#6BBD45', desc: 'Clear ownership of decisions and outcomes at every level of the organisation.' },
  { icon: '🔍', title: 'Transparency',    color: '#3b82f6', desc: 'Open and honest communication with all stakeholders — clients, partners and regulators.' },
  { icon: '⚖️', title: 'Integrity',       color: '#f59e0b', desc: 'Zero tolerance for bribery, corruption or unethical business practices.' },
  { icon: '🌱', title: 'Sustainability',  color: '#10b981', desc: 'Business decisions consider long-term environmental and social impact.' },
];

export default function GovernancePage() {
  return (
    <>
      <AboutPageHero
        section="Corporate Governance"
        title="Responsible Business Conduct"
        subtitle="Cofreth holds itself to the highest standards of corporate governance — from anti-corruption policy to transparent financial reporting."
      />

      {/* Section 1 — RBA + Commitments — dark green */}
      <div className="py-16 px-6 lg:px-10 xl:px-14" style={{ background: 'linear-gradient(135deg, #0F2419 0%, #1B3A2D 100%)' }}>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="rounded-2xl p-8 border border-white/10 bg-white/5">
            <div className="text-5xl mb-5">🤝</div>
            <h3 className="font-black text-white text-xl mb-3">Responsible Business Alliance</h3>
            <p className="text-gray-300 text-base leading-relaxed">
              Cofreth is fully committed and complies with the Responsible Business Alliance (RBA) as part of our code of business conduct — ensuring ethical practices across our entire supply chain and operations.
            </p>
            <p className="text-[#6BBD45] text-base font-semibold mt-4 leading-relaxed italic">
              "As a responsible FM service provider, we are fully committed and comply to Responsible Business Alliance as part of our code of business conducts."
            </p>
          </div>
          <div className="rounded-2xl p-8 border border-white/10 bg-white/5">
            <div className="text-5xl mb-5">📜</div>
            <h3 className="font-black text-white text-xl mb-5">Governance Commitments</h3>
            <ul className="space-y-4">
              {[
                'Anti-bribery and anti-corruption policy',
                'Transparent financial reporting',
                'Fair treatment of employees and contractors',
                'Responsible procurement practices',
                'Data privacy and information security',
              ].map(item => (
                <li key={item} className="flex items-start gap-3 text-gray-300 text-base">
                  <span className="text-[#6BBD45] font-black text-lg shrink-0 leading-tight">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Section 2 — RBA E1–E12 Elements — white */}
      <div className="py-16 px-6 lg:px-10 xl:px-14 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="mb-10">
            <span className="text-xs font-black uppercase tracking-[0.2em] text-[#6BBD45]">RBA Code of Conduct</span>
            <h3 className="font-black text-[#1B3A2D] text-3xl mt-2 mb-2">12 Elements of Compliance</h3>
            <p className="text-gray-500 text-base max-w-2xl">
              Cofreth adheres to all 12 elements of the Responsible Business Alliance Code of Conduct — covering labour, health & safety, environment and ethics.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {rbaElements.map((el) => (
              <div
                key={el.code}
                className="rounded-xl p-5 text-white flex flex-col justify-between min-h-[140px] hover:scale-[1.03] transition-transform duration-200 cursor-default"
                style={{ background: el.color }}
              >
                <span className="text-2xl font-black tracking-tight">{el.code}</span>
                <span className="text-sm font-bold leading-snug mt-3">{el.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Section 2b — Policy Documents — white */}
      <div className="py-16 px-6 lg:px-10 xl:px-14 bg-white border-t border-gray-100">
        <div className="max-w-5xl mx-auto">
          <div className="mb-8">
            <span className="text-xs font-black uppercase tracking-[0.2em] text-[#6BBD45]">Policy Documents</span>
            <h3 className="font-black text-[#1B3A2D] text-3xl mt-2">Our Governance Policies</h3>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {[
              {
                icon: '📣',
                title: 'Whistleblowing Policy',
                desc: 'Report unethical conduct with full protection under the Whistleblower Protection Act 2010. Contact: Ms Nor Niza Md Ajib, Chief Audit Executive — nor-niza.md-ajib@cofreth.com.my, Tel: 03-8023 8878.',
                pdf: '/documents/Whistleblowing_Policy.pdf',
              },
              {
                icon: '🚫',
                title: 'Anti-Bribery & Corruption Policy',
                desc: 'Zero-tolerance policy aligned with MACCA Act 2009. Covers gifts, facilitation payments, conflicts of interest and third-party due diligence across all operations (Issue 2, effective 1 Oct 2022).',
                pdf: '/documents/Anti_Bribery_Corruption_Policy.pdf',
              },
              {
                icon: '📋',
                title: 'Standard of Business Conduct',
                desc: 'Cofreth\'s code of conduct governing legal compliance, conflicts of interest, information security, EHS standards, fair labour and disciplinary practices for all staff and partners.',
                pdf: '/documents/Standard_of_Business_Conduct.pdf',
              },
              {
                icon: '🔒',
                title: 'Personal Data Protection Policy',
                desc: 'How Cofreth collects, uses, protects and provides access to personal data for customers and prospective customers in compliance with the Malaysian Personal Data Protection Act.',
                pdf: '/documents/Personal_Data_Protection_Policy.pdf',
              },
            ].map(p => (
              <div key={p.title} className="bg-white border border-gray-100 rounded-2xl p-6 hover:border-[#6BBD45]/40 hover:shadow-md transition-all">
                <div className="text-3xl mb-4">{p.icon}</div>
                <h4 className="font-black text-[#1B3A2D] text-lg mb-3">{p.title}</h4>
                <p className="text-gray-500 text-base leading-relaxed mb-5">{p.desc}</p>
                <a href={p.pdf} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[#6BBD45] font-semibold text-sm hover:underline">
                  View Policy →
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Section 3 — Four Pillars — gray */}
      <div className="py-16 px-6 lg:px-10 xl:px-14 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-xs font-black uppercase tracking-[0.2em] text-[#6BBD45]">Our Pillars</span>
            <h3 className="font-black text-[#1B3A2D] text-3xl mt-2">Four Pillars of Governance</h3>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {pillars.map(p => (
              <div key={p.title} className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
                <div className="text-4xl mb-4">{p.icon}</div>
                <div className="w-8 h-1 rounded-full mb-3 group-hover:w-12 transition-all duration-300" style={{ background: p.color }} />
                <h4 className="font-black text-[#1B3A2D] text-lg mb-2">{p.title}</h4>
                <p className="text-gray-500 leading-relaxed text-base">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Section 4 — CTA — green */}
      <div className="py-14 px-6 lg:px-10 xl:px-14 bg-[#6BBD45]">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="font-black text-white text-3xl mb-3">Committed to Ethical Business</h3>
          <p className="text-white/85 text-base leading-relaxed">
            Our governance framework underpins every client relationship, procurement decision, and operational process — ensuring Cofreth remains a trusted partner for the long term.
          </p>
        </div>
      </div>
    </>
  );
}
