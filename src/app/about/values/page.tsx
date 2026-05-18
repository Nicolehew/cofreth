import { AboutPageHero } from '@/components/about/AboutPageHero';

export const metadata = {
  title: 'Our Value & Ethics — Cofreth\'s 6 Core Principles',
  description:
    'Cofreth\'s six core values: Professionalism, Partnership, Team Spirit, Value Creation, Respect for the Environment and Ethics — aligned with the Responsible Business Alliance (RBA) code of conduct.',
  alternates: { canonical: '/about/values' },
  openGraph: { title: 'Our Value & Ethics | Cofreth Malaysia', url: 'https://www.cofreth.com.my/about/values' },
};

const values = [
  { icon: '👥', title: 'Professionalism',              color: '#3b82f6', desc: 'Highest standards of conduct, expertise and service delivery in everything we do.' },
  { icon: '🤝', title: 'Partnership',                  color: '#6BBD45', desc: 'Building long-term, trust-based relationships with clients, vendors and strategic partners.' },
  { icon: '🌟', title: 'Team Spirit',                  color: '#f59e0b', desc: 'Collaboration and camaraderie — we celebrate wins together and support each other.' },
  { icon: '💡', title: 'Value Creation',               color: '#8b5cf6', desc: 'Every engagement creates measurable, lasting value for clients and stakeholders.' },
  { icon: '🌱', title: 'Respect For The Environment',  color: '#10b981', desc: 'Genuine commitment to sustainability aligned with UN Sustainable Development Goals.' },
  { icon: '⚖️', title: 'Ethics',                      color: '#ef4444', desc: 'Integrity, honesty and transparency — we comply fully with the Responsible Business Alliance.' },
];

export default function ValuesPage() {
  return (
    <>
      <AboutPageHero
        section="Our Value & Ethics"
        title="6 Core Values"
        subtitle="We are committed to these values to foster relations of mutual respect with all colleagues, customers and outside partners."
      />

      <div className="py-12 px-6 lg:px-10 xl:px-14 bg-white">
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5 mb-10">
          {values.map(v => (
            <div key={v.title} className="group bg-white border border-gray-100 hover:border-[#6BBD45]/40 rounded-2xl p-6 hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform" style={{ background: v.color + '18' }}>{v.icon}</div>
              <h3 className="font-black text-[#1B3A2D] mb-3 group-hover:text-[#6BBD45] transition-colors text-lg">{v.title}</h3>
              <p className="text-base text-gray-500 leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-[#6BBD45]/10 border border-[#6BBD45]/30 rounded-2xl p-8">
          <div className="flex items-start gap-5">
            <div className="text-4xl shrink-0">🤝</div>
            <div>
              <h3 className="text-base font-black text-[#1B3A2D] mb-2">Responsible Business Alliance (RBA)</h3>
              <p className="text-base text-gray-600 leading-relaxed">Cofreth is fully committed and complies with the Responsible Business Alliance as part of our code of business conduct — ensuring ethical practices across our entire supply chain and operations, from procurement to project completion.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
