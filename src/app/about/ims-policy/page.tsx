import { AboutPageHero } from '@/components/about/AboutPageHero';

export const metadata = {
  title: 'IMS Policy — Integrated Quality, Safety & Environmental',
  description:
    'Cofreth\'s Integrated Management System Policy (Revision 4, 2024) — 9 commitments unifying ISO 9001, 14001, 45001, 50001 and 41001 quality, safety, environmental, energy and facility management.',
  alternates: { canonical: '/about/ims-policy' },
  openGraph: { title: 'IMS Policy | Cofreth Malaysia', url: 'https://www.cofreth.com.my/about/ims-policy' },
};

const commitments = [
  'Deliver high quality, best value services and other characteristics and requirements of FMES as agreed with our customers',
  'Comply with relevant statutory, contractual and other requirements under IMS',
  'Eliminate potential hazards, reduce environmental pollution & OHS risk as identified under HIRADC and EAIA Lists',
  'Manage the risks and opportunities identified in the IMS Risk and Opportunity Registers',
  'Optimising building energy performance through procurement of energy-efficient product and services, efficient design and implementation of operational control',
  'Provide necessary information and resources to achieve the established objectives and targets under IMS',
  'Encourage staff and vendors to participate in the development of IMS programmes within the available resources',
  'Instill awareness, develop effective leader, maintain competent and effective workforce through structured trainings',
  'Continually improve IMS through audits, management reviews and other improvement activities',
];

export default function IMSPolicyPage() {
  return (
    <>
      <AboutPageHero
        section="Our IMS Policy"
        title="Integrated Management System"
        subtitle="Quality · Safety & Health · Environmental · Energy · Facility — all unified into a single management framework."
      />

      <div className="py-12 px-6 lg:px-10 xl:px-14 bg-gray-50 dark:bg-[#0d1117]">
        <div className="max-w-4xl">
          {/* Overview */}
          <div className="bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 rounded-2xl p-8 mb-8">
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4" style={{ fontSize: '15px' }}>
              By integrating quality, occupational safety and health, environmental, energy, and facility management systems into an Integrated Management System (IMS), Cofreth is committed to providing high-performance Facilities Management and Energy Services (FMES) without compromising sustainability in environmental, social and governance aspects for all stakeholders.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed" style={{ fontSize: '15px' }}>
              Cofreth demonstrates a strong belief that the bedrock of excellent service delivery rests upon the adoption of a professional and ethical business strategy — revolving around business growth, developing talents, adopting innovative technologies and five well-defined management systems.
            </p>
          </div>

          {/* 9 Commitments */}
          <div className="bg-[#0F2419] rounded-2xl p-8 text-white mb-8">
            <h2 className="text-[#6BBD45] font-black uppercase tracking-widest mb-6" style={{ fontSize: '12px' }}>9 Policy Commitments</h2>
            <ol className="space-y-4">
              {commitments.map((item, i) => (
                <li key={i} className="flex items-start gap-4 text-gray-300" style={{ fontSize: '14px' }}>
                  <span className="w-7 h-7 rounded-full bg-[#6BBD45]/20 border border-[#6BBD45]/40 text-[#6BBD45] font-bold flex items-center justify-center shrink-0 mt-0.5" style={{ fontSize: '11px' }}>
                    {i + 1}
                  </span>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ol>
            <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center gap-6">
              <div>
                <p className="text-white font-bold" style={{ fontSize: '14px' }}>Ir. ONG CHING LOON</p>
                <p className="text-gray-400" style={{ fontSize: '12px' }}>Managing Director</p>
              </div>
              <p className="text-gray-500" style={{ fontSize: '12px' }}>Revision 4 · Effective 1 August 2024</p>
              <a href="https://www.cofreth.com.my/images/IMS_Policy-Revision_4.pdf" target="_blank" rel="noopener noreferrer"
                className="ml-auto border border-[#6BBD45]/40 text-[#6BBD45] hover:bg-[#6BBD45] hover:text-white font-semibold px-5 py-2 rounded-full transition-all" style={{ fontSize: '13px' }}>
                Download PDF
              </a>
            </div>
          </div>

          {/* 5 Systems */}
          <h3 className="font-black text-[#1B3A2D] dark:text-white mb-4" style={{ fontSize: '16px' }}>Five Management Systems</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { code: 'ISO 9001:2015',  label: 'Quality Management System',           icon: '✓',  color: '#3b82f6' },
              { code: 'ISO 14001:2015', label: 'Environmental Management System',      icon: '🌿', color: '#10b981' },
              { code: 'ISO 45001:2018', label: 'Occupational Health & Safety System',  icon: '🛡️', color: '#ef4444' },
              { code: 'ISO 50001:2018', label: 'Energy Management System',             icon: '⚡', color: '#f59e0b' },
              { code: 'ISO 41001:2018', label: 'Facility Management System',           icon: '🏢', color: '#8b5cf6' },
            ].map(s => (
              <div key={s.code} className="flex items-center gap-4 bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 rounded-xl p-4 hover:border-[#6BBD45]/30 transition-colors">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center text-lg shrink-0" style={{ background: s.color + '18' }}>{s.icon}</div>
                <div>
                  <div className="font-black text-[#1B3A2D] dark:text-white" style={{ fontSize: '13px' }}>{s.code}</div>
                  <div className="text-gray-500 dark:text-gray-400 mt-0.5" style={{ fontSize: '12px' }}>{s.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
