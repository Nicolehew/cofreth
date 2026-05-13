import { AboutPageHero } from '@/components/about/AboutPageHero';

export const metadata = {
  title: 'Our Philosophy — How Cofreth Thinks & Works',
  description:
    'Six guiding principles behind Cofreth\'s service delivery: safety and comfort, quality at value, consistent service levels, continuous improvement, technology-driven efficiency and strong corporate values.',
  alternates: { canonical: '/about/philosophy' },
  openGraph: { title: 'Our Philosophy | Cofreth Malaysia', url: 'https://www.cofreth.com.my/about/philosophy' },
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
      <AboutPageHero
        section="Our Philosophy"
        title="How We Think & Work"
        subtitle="Six guiding principles that define every service we deliver — from the smallest maintenance task to the largest energy performance contract."
      />

      <div className="py-12 px-6 lg:px-10 xl:px-14 bg-gray-50 dark:bg-[#0d1117]">
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5 max-w-5xl">
          {principles.map(p => (
            <div key={p.n} className="group bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 hover:border-[#6BBD45]/40 rounded-2xl p-6 hover:shadow-md transition-all duration-300">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-3xl">{p.icon}</span>
                <span className="font-black text-[#6BBD45] tracking-widest" style={{ fontSize: '11px' }}>{p.n}</span>
              </div>
              <h3 className="font-black text-[#1B3A2D] dark:text-white mb-3 group-hover:text-[#6BBD45] transition-colors" style={{ fontSize: '15px' }}>{p.title}</h3>
              <p className="text-gray-500 dark:text-gray-400 leading-relaxed" style={{ fontSize: '13px' }}>{p.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 grid md:grid-cols-2 gap-5 max-w-3xl">
          <div className="bg-[#1B3A2D] rounded-2xl p-8 text-white">
            <div className="text-3xl mb-4">🎯</div>
            <h3 className="font-black text-[#6BBD45] mb-3" style={{ fontSize: '16px' }}>Our Mission</h3>
            <p className="text-gray-300 leading-relaxed" style={{ fontSize: '14px' }}>To Be Recognised as the Leading Provider of Quality Services for Total Facilities Management and All Utilities.</p>
          </div>
          <div className="bg-[#1B3A2D] rounded-2xl p-8 text-white">
            <div className="text-3xl mb-4">🌐</div>
            <h3 className="font-black text-[#6BBD45] mb-3" style={{ fontSize: '16px' }}>Our Vision</h3>
            <p className="text-gray-300 leading-relaxed" style={{ fontSize: '14px' }}>To Be An International Service Provider in Facilities Management & Energy Services.</p>
          </div>
        </div>
      </div>
    </>
  );
}
