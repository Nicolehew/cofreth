export const metadata = {
  title: 'Our Processes | Cofreth (M) Sdn Bhd',
  description: 'Cofreth service delivery processes — independently certified to 5 ISO standards covering quality, safety, environment and energy.',
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
            <span className="text-[#6BBD45] text-xs font-bold tracking-widest uppercase">Our Processes</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black mb-4 leading-tight">
            Certified<br /><span className="text-[#6BBD45]">Service Delivery</span>
          </h1>
          <p className="text-gray-300 text-base leading-relaxed">
            Our service delivery processes are independently certified to five ISO standards — guaranteeing consistent quality, safety, environmental responsibility and energy performance across every engagement.
          </p>
        </div>
      </div>

      {/* ISO Certs */}
      <div className="py-14 px-6 lg:px-10 xl:px-14 bg-white dark:bg-[#0d1117]">
        <div className="grid sm:grid-cols-2 gap-5 mb-12">
          {certs.map(p => (
            <div key={p.code} className="group bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 hover:border-[#6BBD45]/30 rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-4" style={{ background: p.color + '18' }}>{p.icon}</div>
              <div className="font-black text-[#1B3A2D] dark:text-white text-base mb-1 group-hover:text-[#6BBD45] transition-colors">{p.code}</div>
              <div className="text-gray-600 dark:text-gray-300 text-sm font-semibold mb-3">{p.label}</div>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">{p.desc}</p>
              <a href={p.pdf} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[#6BBD45] text-sm font-semibold hover:underline">
                View Certificate →
              </a>
            </div>
          ))}
        </div>

        {/* PDCA */}
        <div className="bg-gradient-to-r from-[#0F2419] to-[#1B3A2D] rounded-2xl p-8 text-white">
          <p className="text-xs font-bold text-[#6BBD45] uppercase tracking-widest text-center mb-8">PDCA — Our Service Delivery Cycle</p>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              { icon: '🔍', title: 'Plan',       desc: 'Define objectives, identify risks and plan the FM or energy solution tailored to your facility.' },
              { icon: '⚙️', title: 'Do',         desc: 'Execute with certified engineers and technicians following ISO-compliant procedures and SOPs.' },
              { icon: '📊', title: 'Check & Act', desc: 'Monitor KPIs, conduct audits and continuously improve — the PDCA cycle drives all we do.' },
            ].map(s => (
              <div key={s.title}>
                <div className="text-4xl mb-3">{s.icon}</div>
                <div className="font-black text-[#6BBD45] mb-2">{s.title}</div>
                <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* SIRIM note */}
        <p className="text-center text-gray-400 dark:text-gray-500 text-xs mt-8">
          All ISO certifications independently audited and certified by <strong>SIRIM QAS International</strong> · Valid 2023–2026
        </p>
      </div>
    </>
  );
}
