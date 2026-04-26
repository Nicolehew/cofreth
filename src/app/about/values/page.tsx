export const metadata = {
  title: 'Our Value & Ethics | Cofreth (M) Sdn Bhd',
  description: 'Six core values that guide Cofreth — professionalism, partnership, team spirit, value creation, environmental respect and ethics.',
};

const values = [
  { icon: '👥', title: 'Professionalism',          color: '#3b82f6', desc: 'Highest standards of conduct, expertise and service delivery in everything we do.' },
  { icon: '🤝', title: 'Partnership',              color: '#6BBD45', desc: 'Building long-term, trust-based relationships with clients, vendors and strategic partners.' },
  { icon: '🌟', title: 'Team Spirit',              color: '#f59e0b', desc: 'Collaboration and camaraderie — we celebrate wins together and support each other.' },
  { icon: '💡', title: 'Value Creation',           color: '#8b5cf6', desc: 'Every engagement creates measurable, lasting value for clients and stakeholders.' },
  { icon: '🌱', title: 'Respect For The Environment', color: '#10b981', desc: 'Genuine commitment to sustainability aligned with UN Sustainable Development Goals.' },
  { icon: '⚖️', title: 'Ethics',                  color: '#ef4444', desc: 'Integrity, honesty and transparency — we comply fully with the Responsible Business Alliance.' },
];

export default function ValuesPage() {
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
            <span className="text-[#6BBD45] text-xs font-bold tracking-widest uppercase">Our Value &amp; Ethics</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black mb-4 leading-tight">
            6 Core<br /><span className="text-[#6BBD45]">Values</span>
          </h1>
          <p className="text-gray-300 text-base leading-relaxed">
            We are committed to these values to foster relations of mutual respect with all colleagues, customers and outside partners.
          </p>
        </div>
      </div>

      {/* Values grid */}
      <div className="py-14 px-6 lg:px-10 xl:px-14 bg-white dark:bg-[#0d1117]">
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5">
          {values.map(v => (
            <div key={v.title} className="group bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 hover:border-[#6BBD45]/30 rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform" style={{ background: v.color + '18' }}>{v.icon}</div>
              <h3 className="font-black text-[#1B3A2D] dark:text-white text-base mb-3 group-hover:text-[#6BBD45] transition-colors">{v.title}</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>

        {/* RBA commitment */}
        <div className="mt-12 bg-gradient-to-br from-[#1B3A2D] to-[#0F2419] rounded-2xl p-8 text-white">
          <div className="flex items-start gap-5">
            <div className="text-4xl shrink-0">🤝</div>
            <div>
              <h3 className="font-black text-[#6BBD45] mb-2">Responsible Business Alliance (RBA)</h3>
              <p className="text-gray-300 text-sm leading-relaxed">Cofreth is fully committed and complies with the Responsible Business Alliance as part of our code of business conduct — ensuring ethical practices across our entire supply chain and operations, from procurement to project completion.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
