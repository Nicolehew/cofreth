export const metadata = {
  title: 'Corporate Governance | Cofreth (M) Sdn Bhd',
  description: 'Cofreth corporate governance — responsible business conduct, RBA compliance, anti-bribery policy and transparent operations.',
};

export default function GovernancePage() {
  return (
    <>
      {/* Hero */}
      <div className="py-14 md:py-20 px-6 lg:px-10 xl:px-14 text-white relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #060e08 0%, #0F2419 50%, #060e08 100%)' }}>
        <div className="absolute inset-0 opacity-[0.06]" style={{
          backgroundImage: 'linear-gradient(#6BBD45 1px, transparent 1px), linear-gradient(90deg, #6BBD45 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }} />
        <div className="relative max-w-3xl">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-0.5 bg-[#6BBD45]" />
            <span className="text-[#6BBD45] text-xs font-bold tracking-widest uppercase">Corporate Governance</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black mb-4 leading-tight">
            Responsible<br /><span className="text-[#6BBD45]">Business Conduct</span>
          </h1>
          <p className="text-gray-300 text-base leading-relaxed">
            Cofreth holds itself to the highest standards of corporate governance — from anti-corruption policy to transparent financial reporting.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="py-14 px-6 lg:px-10 xl:px-14 bg-white dark:bg-[#0d1117]">
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          <div className="bg-gradient-to-br from-[#0F2419] to-[#1B3A2D] rounded-2xl p-8 text-white">
            <div className="text-4xl mb-4">🤝</div>
            <h3 className="font-black text-[#6BBD45] mb-3 text-lg">Responsible Business Alliance</h3>
            <p className="text-gray-300 text-sm leading-relaxed">Cofreth is fully committed and complies with the Responsible Business Alliance (RBA) as part of our code of business conduct — ensuring ethical practices across our entire supply chain and operations.</p>
          </div>
          <div className="bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 rounded-2xl p-8">
            <div className="text-4xl mb-4">📜</div>
            <h3 className="font-black text-[#1B3A2D] dark:text-white mb-4 text-lg">Governance Commitments</h3>
            <ul className="space-y-3">
              {[
                'Anti-bribery and anti-corruption policy',
                'Transparent financial reporting',
                'Fair treatment of employees and contractors',
                'Responsible procurement practices',
                'Data privacy and information security',
              ].map(item => (
                <li key={item} className="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-300">
                  <span className="text-[#6BBD45] mt-0.5 shrink-0 font-bold">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Pillars */}
        <h3 className="font-black text-[#1B3A2D] dark:text-white text-lg mb-5">Governance Pillars</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { icon: '🏛️', title: 'Accountability',  desc: 'Clear ownership of decisions and outcomes at every level of the organisation.' },
            { icon: '🔍', title: 'Transparency',    desc: 'Open and honest communication with all stakeholders — clients, partners and regulators.' },
            { icon: '⚖️', title: 'Integrity',       desc: 'Zero tolerance for bribery, corruption or unethical business practices.' },
            { icon: '🌱', title: 'Sustainability',  desc: 'Business decisions consider long-term environmental and social impact.' },
          ].map(p => (
            <div key={p.title} className="bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 rounded-2xl p-5 hover:border-[#6BBD45]/30 hover:shadow-md transition-all">
              <div className="text-3xl mb-3">{p.icon}</div>
              <h4 className="font-black text-[#1B3A2D] dark:text-white text-sm mb-2">{p.title}</h4>
              <p className="text-gray-500 dark:text-gray-400 text-xs leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
