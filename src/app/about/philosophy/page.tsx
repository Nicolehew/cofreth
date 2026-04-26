export const metadata = {
  title: 'Our Philosophy | Cofreth (M) Sdn Bhd',
  description: 'How Cofreth thinks and works — six guiding principles for safe, consistent, technology-driven facilities management.',
};

const principles = [
  { n: '01', icon: '🏢', title: 'Safe, Comfortable & Clean', desc: 'Every facility we manage maintains the highest standards of safety, comfort and cleanliness for all occupants.' },
  { n: '02', icon: '💰', title: 'High Quality at Affordable Price', desc: "Best-value services without compromising quality — our efficiency enables competitive pricing for every client." },
  { n: '03', icon: '📋', title: 'Consistent Service Levels', desc: 'High service levels consistently achieved through established procedures, work systems and SOPs.' },
  { n: '04', icon: '🔄', title: 'Continuous Improvement', desc: "Every audit, every review and every client interaction is an opportunity to do better — it's our culture." },
  { n: '05', icon: '💻', title: 'Technology-Driven Efficiency', desc: 'ARCHIBUS, BAS, BIM and IoT technologies improve efficiency and reduce the total cost of ownership.' },
  { n: '06', icon: '⚖️', title: 'Strong Corporate Values', desc: 'Professionalism, Team Spirit, Partnership, Value Creation, Respect for Environment and Good Ethics.' },
];

export default function PhilosophyPage() {
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
            <span className="text-[#6BBD45] text-xs font-bold tracking-widest uppercase">Our Philosophy</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black mb-4 leading-tight">
            How We<br /><span className="text-[#6BBD45]">Think & Work</span>
          </h1>
          <p className="text-gray-300 text-base leading-relaxed">
            Six guiding principles that define every service we deliver — from the smallest maintenance task to the largest energy performance contract.
          </p>
        </div>
      </div>

      {/* Principles */}
      <div className="py-14 px-6 lg:px-10 xl:px-14 bg-white dark:bg-[#0d1117]">
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5">
          {principles.map(p => (
            <div key={p.n} className="group bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 hover:border-[#6BBD45]/30 hover:bg-white dark:hover:bg-white/10 rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-3xl">{p.icon}</span>
                <span className="text-xs font-black text-[#6BBD45] tracking-widest">{p.n}</span>
              </div>
              <h3 className="font-black text-[#1B3A2D] dark:text-white text-base mb-3 group-hover:text-[#6BBD45] transition-colors">{p.title}</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>

        {/* Mission & Vision callout */}
        <div className="mt-12 grid md:grid-cols-2 gap-5">
          <div className="bg-gradient-to-br from-[#1B3A2D] to-[#0F2419] rounded-2xl p-8 text-white">
            <div className="text-3xl mb-4">🎯</div>
            <h3 className="font-black text-[#6BBD45] mb-3 text-lg">Our Mission</h3>
            <p className="text-gray-300 text-sm leading-relaxed">To Be Recognised as the Leading Provider of Quality Services for Total Facilities Management and All Utilities.</p>
          </div>
          <div className="bg-gradient-to-br from-[#1B3A2D] to-[#0F2419] rounded-2xl p-8 text-white">
            <div className="text-3xl mb-4">🌐</div>
            <h3 className="font-black text-[#6BBD45] mb-3 text-lg">Our Vision</h3>
            <p className="text-gray-300 text-sm leading-relaxed">To Be An International Service Provider in Facilities Management & Energy Services.</p>
          </div>
        </div>
      </div>
    </>
  );
}
