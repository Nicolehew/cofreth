import { AboutPageHero } from '@/components/about/AboutPageHero';

export const metadata = {
  title: 'Corporate Governance — Accountability & Transparency',
  description:
    'Cofreth corporate governance framework: RBA compliance, anti-bribery and corruption policy, transparent financial reporting and responsible procurement. Accountability at every level.',
  alternates: { canonical: '/about/governance' },
  openGraph: { title: 'Corporate Governance | Cofreth Malaysia', url: 'https://www.cofreth.com.my/about/governance' },
};

export default function GovernancePage() {
  return (
    <>
      <AboutPageHero
        section="Corporate Governance"
        title="Responsible Business Conduct"
        subtitle="Cofreth holds itself to the highest standards of corporate governance — from anti-corruption policy to transparent financial reporting."
      />

      <div className="py-12 px-6 lg:px-10 xl:px-14 bg-white">
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            <div className="bg-[#6BBD45]/10 border border-[#6BBD45]/30 rounded-2xl p-8">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="font-black text-[#1B3A2D] mb-3" style={{ fontSize: '16px' }}>Responsible Business Alliance</h3>
              <p className="text-gray-600 leading-relaxed" style={{ fontSize: '14px' }}>Cofreth is fully committed and complies with the Responsible Business Alliance (RBA) as part of our code of business conduct — ensuring ethical practices across our entire supply chain and operations.</p>
            </div>
            <div className="bg-white border border-gray-100 rounded-2xl p-8">
              <div className="text-4xl mb-4">📜</div>
              <h3 className="font-black text-[#1B3A2D] mb-4" style={{ fontSize: '16px' }}>Governance Commitments</h3>
              <ul className="space-y-3">
                {[
                  'Anti-bribery and anti-corruption policy',
                  'Transparent financial reporting',
                  'Fair treatment of employees and contractors',
                  'Responsible procurement practices',
                  'Data privacy and information security',
                ].map(item => (
                  <li key={item} className="flex items-start gap-3 text-gray-600" style={{ fontSize: '14px' }}>
                    <span className="text-[#6BBD45] font-bold shrink-0">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <h3 className="font-black text-[#1B3A2D] mb-5" style={{ fontSize: '16px' }}>Governance Pillars</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: '🏛️', title: 'Accountability',  desc: 'Clear ownership of decisions and outcomes at every level of the organisation.' },
              { icon: '🔍', title: 'Transparency',    desc: 'Open and honest communication with all stakeholders — clients, partners and regulators.' },
              { icon: '⚖️', title: 'Integrity',       desc: 'Zero tolerance for bribery, corruption or unethical business practices.' },
              { icon: '🌱', title: 'Sustainability',  desc: 'Business decisions consider long-term environmental and social impact.' },
            ].map(p => (
              <div key={p.title} className="bg-white border border-gray-100 rounded-2xl p-5 hover:border-[#6BBD45]/30 hover:shadow-sm transition-all">
                <div className="text-3xl mb-3">{p.icon}</div>
                <h4 className="font-black text-[#1B3A2D] mb-2" style={{ fontSize: '14px' }}>{p.title}</h4>
                <p className="text-gray-500 leading-relaxed" style={{ fontSize: '12px' }}>{p.desc}</p>
              </div>
            ))}
          </div>
      </div>
    </>
  );
}
