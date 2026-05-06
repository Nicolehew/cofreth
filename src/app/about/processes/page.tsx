import { AboutPageHero } from '@/components/about/AboutPageHero';

export const metadata = {
  title: 'Our Processes | Cofreth (M) Sdn Bhd',
  description: 'Cofreth service delivery — independently certified to 5 ISO standards.',
};

const certs = [
  { code: 'ISO 45001:2018', label: 'Occupational Health & Safety', icon: '🛡️', color: '#ef4444', desc: 'Systematic hazard identification and OHS risk control across all site operations.', pdf: 'https://www.cofreth.com.my/images/ISO_45001-2018(OHS)(2023-2026).pdf' },
  { code: 'ISO 9001:2015',  label: 'Quality Management',           icon: '✓',  color: '#3b82f6', desc: 'Consistent, high-quality service delivery backed by documented procedures and audits.', pdf: 'https://www.cofreth.com.my/images/ISO_9001-2015_(QMS)(2023-2026).pdf' },
  { code: 'ISO 14001:2015', label: 'Environmental Management',     icon: '🌿', color: '#10b981', desc: 'Minimising environmental impact through responsible practices and continuous monitoring.', pdf: 'https://www.cofreth.com.my/images/ISO_14001-2015(EMS)(2023-2026).pdf' },
  { code: 'ISO 50001:2018', label: 'Energy Management',            icon: '⚡', color: '#f59e0b', desc: 'Structured energy monitoring and optimisation to reduce consumption and costs.', pdf: 'https://www.cofreth.com.my/images/ISO_50001-2018(EnMS)(2023-2026).pdf' },
];

export default function ProcessesPage() {
  return (
    <>
      <AboutPageHero
        section="Our Processes"
        title="Certified Service Delivery"
        subtitle="Our service delivery processes are independently certified to five ISO standards — guaranteeing consistent quality, safety, environmental responsibility and energy performance."
      />

      <div className="py-12 px-6 lg:px-10 xl:px-14 bg-gray-50 dark:bg-[#0d1117]">
        <div className="max-w-4xl">
          <div className="grid sm:grid-cols-2 gap-5 mb-10">
            {certs.map(p => (
              <div key={p.code} className="group bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 hover:border-[#6BBD45]/40 rounded-2xl p-6 hover:shadow-md transition-all duration-300">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-4" style={{ background: p.color + '18' }}>{p.icon}</div>
                <div className="font-black text-[#1B3A2D] dark:text-white mb-1 group-hover:text-[#6BBD45] transition-colors" style={{ fontSize: '15px' }}>{p.code}</div>
                <div className="text-gray-600 dark:text-gray-300 font-semibold mb-3" style={{ fontSize: '13px' }}>{p.label}</div>
                <p className="text-gray-400 leading-relaxed mb-4" style={{ fontSize: '13px' }}>{p.desc}</p>
                <a href={p.pdf} target="_blank" rel="noopener noreferrer"
                  className="text-[#6BBD45] font-semibold hover:underline" style={{ fontSize: '13px' }}>
                  View Certificate →
                </a>
              </div>
            ))}
          </div>

          {/* PDCA */}
          <div className="bg-[#0F2419] rounded-2xl p-8 text-white">
            <p className="font-bold text-[#6BBD45] uppercase tracking-widest text-center mb-8" style={{ fontSize: '12px' }}>PDCA — Our Service Delivery Cycle</p>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              {[
                { icon: '🔍', title: 'Plan',        desc: 'Define objectives, identify risks and plan the FM or energy solution tailored to your facility.' },
                { icon: '⚙️', title: 'Do',          desc: 'Execute with certified engineers and technicians following ISO-compliant procedures and SOPs.' },
                { icon: '📊', title: 'Check & Act', desc: 'Monitor KPIs, conduct audits and continuously improve — the PDCA cycle drives all we do.' },
              ].map(s => (
                <div key={s.title}>
                  <div className="text-4xl mb-3">{s.icon}</div>
                  <div className="font-black text-[#6BBD45] mb-2" style={{ fontSize: '15px' }}>{s.title}</div>
                  <p className="text-gray-400 leading-relaxed" style={{ fontSize: '13px' }}>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <p className="text-center text-gray-400 mt-6" style={{ fontSize: '12px' }}>
            All ISO certifications independently audited and certified by <strong>SIRIM QAS International</strong> · Valid 2023–2026
          </p>
        </div>
      </div>
    </>
  );
}
