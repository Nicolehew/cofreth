import { AboutPageHero } from '@/components/about/AboutPageHero';

export const metadata = {
  title: 'Sustainability — ESG Policy & UN SDGs | Cofreth Malaysia',
  description:
    "Cofreth's Environmental, Social & Governance (ESG) Policy and alignment with all 17 UN Sustainable Development Goals — committed to long-term value for people, planet and prosperity.",
  alternates: { canonical: '/about/sustainability' },
  openGraph: { title: 'Sustainability | Cofreth Malaysia', url: 'https://www.cofreth.com.my/about/sustainability' },
};

const esgPillars = [
  {
    icon: '🌍',
    title: 'Environmental',
    color: '#10b981',
    items: [
      'Energy Management — 3% GHG emission reduction annually',
      'Water Management — responsible use and waste prevention',
      'Waste Management — 3R principles in daily operations',
      'Emission Management — carbon neutrality targets',
    ],
  },
  {
    icon: '👥',
    title: 'Social',
    color: '#3b82f6',
    items: [
      'Community — outreach and volunteer initiatives',
      'Diversity & Inclusion — DEI and respect in the workplace',
      'Safety & Health — risk prevention and safe workplace',
      'Labour Standards — fair pay, no child or forced labour',
    ],
  },
  {
    icon: '🏛️',
    title: 'Governance',
    color: '#8b5cf6',
    items: [
      'Corporate Governance — integrity and professionalism',
      'Sustainability Governance — ESG Committee oversight',
      'Anti-Bribery & Corruption — zero tolerance policy',
      'Data Privacy — personal and corporate data protection',
    ],
  },
];

const sdgs = [
  { n: 1,  bg: '#e5243b', label: 'No Poverty' },
  { n: 2,  bg: '#dda63a', label: 'Zero Hunger' },
  { n: 3,  bg: '#4c9f38', label: 'Good Health' },
  { n: 4,  bg: '#c5192d', label: 'Quality Education' },
  { n: 5,  bg: '#ff3a21', label: 'Gender Equality' },
  { n: 6,  bg: '#26bde2', label: 'Clean Water' },
  { n: 7,  bg: '#fcc30b', label: 'Clean Energy' },
  { n: 8,  bg: '#a21942', label: 'Decent Work' },
  { n: 9,  bg: '#fd6925', label: 'Industry & Innovation' },
  { n: 10, bg: '#dd1367', label: 'Reduced Inequalities' },
  { n: 11, bg: '#fd9d24', label: 'Sustainable Cities' },
  { n: 12, bg: '#bf8b2e', label: 'Responsible Consumption' },
  { n: 13, bg: '#3f7e44', label: 'Climate Action' },
  { n: 14, bg: '#0a97d9', label: 'Life Below Water' },
  { n: 15, bg: '#56c02b', label: 'Life on Land' },
  { n: 16, bg: '#00689d', label: 'Peace & Justice' },
  { n: 17, bg: '#19486a', label: 'Partnerships' },
];

export default function SustainabilityPage() {
  return (
    <>
      <AboutPageHero
        section="Sustainability"
        title="Environmental, Social & Governance"
        subtitle="Cofreth embeds ESG principles into every aspect of our operations — creating long-term value for the environment, our people, and all stakeholders."
      />

      {/* Section 1 — ESG Policy overview — dark green */}
      <div className="py-16 px-6 lg:px-10 xl:px-14" style={{ background: 'linear-gradient(135deg, #0F2419 0%, #1B3A2D 100%)' }}>
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6 mb-10">
            <div>
              <span className="text-xs font-black uppercase tracking-[0.2em] text-[#6BBD45]">ESG Policy — Revision 0 · 1 April 2025</span>
              <h3 className="font-black text-white text-3xl mt-2 mb-3">Our ESG Commitment</h3>
              <p className="text-gray-300 text-base leading-relaxed max-w-2xl">
                Cofreth&apos;s ESG Policy demonstrates our commitment to sustainability, integrity, and transparency in all operations. We aim to create long-term value while driving positive impact for the environment, our employees, customers, and communities. The ESG Committee oversees implementation, performance and annual reporting.
              </p>
              <p className="text-gray-400 text-sm mt-3">Signed by <strong className="text-white">Ir. ONG CHING LOON</strong>, Managing Director</p>
            </div>
            <a href="/documents/ESG_Policy.pdf" target="_blank" rel="noopener noreferrer"
              className="shrink-0 border border-[#6BBD45]/40 text-[#6BBD45] hover:bg-[#6BBD45] hover:text-white font-semibold px-6 py-3 rounded-full transition-all whitespace-nowrap text-sm self-start">
              Download ESG Policy →
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {esgPillars.map(pillar => (
              <div key={pillar.title} className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <div className="text-3xl mb-3">{pillar.icon}</div>
                <h4 className="font-black text-white text-lg mb-4">{pillar.title}</h4>
                <ul className="space-y-2.5">
                  {pillar.items.map(item => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-300">
                      <span className="text-[#6BBD45] mt-0.5 shrink-0 font-bold">✓</span>{item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Section 2 — SDG Goals — white */}
      <div className="py-16 px-6 lg:px-10 xl:px-14 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="mb-10">
            <span className="text-xs font-black uppercase tracking-[0.2em] text-[#6BBD45]">UN SDGs</span>
            <h3 className="font-black text-[#1B3A2D] text-3xl mt-2 mb-3">Sustainable Development Goals</h3>
            <p className="text-gray-500 text-base max-w-2xl leading-relaxed">
              Cofreth&apos;s activities take into account the objectives of sustainable development from ecological, economical and social dimensions — aligned to all 17 UN Sustainable Development Goals.
            </p>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-3">
            {sdgs.map(g => (
              <div
                key={g.n}
                className="rounded-xl p-4 text-white flex flex-col justify-between hover:scale-105 hover:shadow-lg transition-all duration-200 cursor-default aspect-square"
                style={{ background: g.bg }}
              >
                <span className="text-2xl font-black leading-none">{g.n}</span>
                <span className="text-xs font-bold leading-tight mt-2 opacity-90">{g.label}</span>
              </div>
            ))}
          </div>
          <p className="text-gray-400 text-sm text-center mt-6">Aligned to all 17 UN Sustainable Development Goals</p>
        </div>
      </div>

      {/* Section 3 — CTA — green */}
      <div className="py-14 px-6 lg:px-10 xl:px-14 bg-[#6BBD45]">
        <div className="max-w-3xl mx-auto text-center">
          <div className="text-5xl mb-5">🌱</div>
          <h3 className="font-black text-white text-3xl mb-4">Building a Sustainable Future</h3>
          <p className="text-white/90 text-base leading-relaxed">
            From energy performance contracting to green building commissioning — every Cofreth service contributes to a more sustainable built environment for Malaysia and beyond.
          </p>
        </div>
      </div>
    </>
  );
}
