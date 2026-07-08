import { AboutPageHero } from '@/components/about/AboutPageHero';

export const metadata = {
  title: 'CSR — Community, Environment & Sustainable Development',
  description:
    "Cofreth CSR: annual 'Save a Life' blood donation drives, Green Finger Day (170 trees planted), orphanage support and alignment with all 17 UN Sustainable Development Goals.",
  alternates: { canonical: '/about/csr' },
  openGraph: { title: 'Corporate Social Responsibility | Cofreth Malaysia', url: 'https://www.cofreth.com.my/about/csr' },
};

const initiatives = [
  {
    icon: '🩺',
    title: '"Save a Life" Campaign',
    stat: '500+',
    statLabel: 'units donated',
    desc: 'Annual blood donation drives and "Save a Life" campaigns — encouraging staff and the public to support critical healthcare needs across Malaysia.',
    color: '#ef4444',
  },
  {
    icon: '🌳',
    title: 'Green Finger Day',
    stat: '170',
    statLabel: 'trees planted',
    desc: "River clean-up activities and tree planting as part of our environmental commitment to Malaysia's green cover and biodiversity preservation.",
    color: '#6BBD45',
  },
  {
    icon: '🏠',
    title: 'Community Support',
    stat: '10+',
    statLabel: 'orphanages supported',
    desc: "Regular visits and donations to Rumah Amal Kasih Bestari and other orphanages — providing essential support, meals and meaningful activities.",
    color: '#f59e0b',
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

export default function CSRPage() {
  return (
    <>
      <AboutPageHero
        section="Corporate Social Responsibility"
        title="Giving Back to the Community"
        subtitle="Beyond business, Cofreth is committed to making a positive impact — supporting life-saving initiatives, environmental causes and the wellbeing of underserved communities."
      />

      {/* Section 0 — CSR Policy — light green */}
      <div className="py-10 px-6 lg:px-10 xl:px-14 bg-[#f8fdf5] border-b border-[#6BBD45]/20">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col lg:flex-row items-start gap-8">
            <div className="flex-1">
              <span className="text-xs font-black uppercase tracking-[0.2em] text-[#6BBD45]">CSR Policy · Section 13 · Issue 2</span>
              <h3 className="font-black text-[#1B3A2D] text-2xl mt-2 mb-4">Our CSR Commitment</h3>
              <p className="text-gray-600 text-base leading-relaxed mb-5">
                Cofreth (M) Sdn Bhd is committed to operating in an economically, socially and environmentally responsible manner while recognising the interests of its stakeholders. Our CSR policy covers two dimensions: <strong>Compliance</strong> — our commitment to legality and community values; and <strong>Proactiveness</strong> — every initiative to promote human rights, help communities and protect our natural environment.
              </p>
              <div className="grid sm:grid-cols-2 gap-3 mb-5">
                {[
                  'Legal Responsibilities — Full compliance with Malaysian laws and regulations',
                  'Economic Responsibilities — Ethical governance and sustainable procurement',
                  'Social & Cultural — Equitable treatment and education partnerships',
                  'Environment, Health & Safety — Zero accidents goal and environmental stewardship',
                ].map(item => (
                  <div key={item} className="flex items-start gap-2">
                    <span className="text-[#6BBD45] mt-0.5 shrink-0 font-bold">✓</span>
                    <span className="text-sm text-gray-600">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="shrink-0">
              <a href="/documents/CSR_Policy.pdf" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#1B3A2D] hover:bg-[#6BBD45] text-white font-semibold px-6 py-3 rounded-full transition-all text-sm whitespace-nowrap">
                Download CSR Policy →
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Section 1 — Initiatives — white */}
      <div className="py-16 px-6 lg:px-10 xl:px-14 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="mb-10">
            <span className="text-xs font-black uppercase tracking-[0.2em] text-[#6BBD45]">What We Do</span>
            <h3 className="font-black text-[#1B3A2D] text-3xl mt-2">Our Community Initiatives</h3>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {initiatives.map(item => (
              <div key={item.title} className="group rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                {/* Coloured top bar */}
                <div className="h-2" style={{ background: item.color }} />
                <div className="p-7">
                  <div className="text-5xl mb-4">{item.icon}</div>
                  {/* Stat */}
                  <div className="flex items-baseline gap-1.5 mb-4">
                    <span className="text-4xl font-black" style={{ color: item.color }}>{item.stat}</span>
                    <span className="text-sm font-semibold text-gray-400">{item.statLabel}</span>
                  </div>
                  <h3 className="font-black text-[#1B3A2D] text-xl mb-3 group-hover:text-[#6BBD45] transition-colors">{item.title}</h3>
                  <p className="text-gray-500 text-base leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Section 2 — SDG Goals — dark green */}
      <div className="py-16 px-6 lg:px-10 xl:px-14" style={{ background: 'linear-gradient(135deg, #0F2419 0%, #1B3A2D 100%)' }}>
        <div className="max-w-5xl mx-auto">
          <div className="mb-10">
            <span className="text-xs font-black uppercase tracking-[0.2em] text-[#6BBD45]">UN SDGs</span>
            <h3 className="font-black text-white text-3xl mt-2 mb-3">Sustainable Development Goals</h3>
            <p className="text-gray-300 text-base max-w-2xl leading-relaxed">
              Cofreth's activities take into account the objectives of sustainable development from ecological, economical and social dimensions — aligned to all 17 UN Sustainable Development Goals.
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

      {/* Section 3 — Impact quote — green */}
      <div className="py-14 px-6 lg:px-10 xl:px-14 bg-[#6BBD45]">
        <div className="max-w-3xl mx-auto text-center">
          <div className="text-5xl mb-5">🌍</div>
          <h3 className="font-black text-white text-3xl mb-4">Business with Purpose</h3>
          <p className="text-white/90 text-base leading-relaxed">
            Cofreth believes that sustainable business success and positive social impact go hand in hand. Every project we undertake reflects our commitment to people, planet and prosperity.
          </p>
        </div>
      </div>
    </>
  );
}
