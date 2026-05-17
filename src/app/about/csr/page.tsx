import { AboutPageHero } from '@/components/about/AboutPageHero';

export const metadata = {
  title: 'CSR — Community, Environment & Sustainable Development',
  description:
    "Cofreth CSR: annual 'Save a Life' blood donation drives, Green Finger Day (170 trees planted), orphanage support and alignment with all 17 UN Sustainable Development Goals.",
  alternates: { canonical: '/about/csr' },
  openGraph: { title: 'Corporate Social Responsibility | Cofreth Malaysia', url: 'https://www.cofreth.com.my/about/csr' },
};

const sdgs = [
  { n: 1,  bg: '#e5243b' }, { n: 2,  bg: '#dda63a' }, { n: 3,  bg: '#4c9f38' },
  { n: 4,  bg: '#c5192d' }, { n: 5,  bg: '#ff3a21' }, { n: 6,  bg: '#26bde2' },
  { n: 7,  bg: '#fcc30b' }, { n: 8,  bg: '#a21942' }, { n: 9,  bg: '#fd6925' },
  { n: 10, bg: '#dd1367' }, { n: 11, bg: '#fd9d24' }, { n: 12, bg: '#bf8b2e' },
  { n: 13, bg: '#3f7e44' }, { n: 14, bg: '#0a97d9' }, { n: 15, bg: '#56c02b' },
  { n: 16, bg: '#00689d' }, { n: 17, bg: '#19486a' },
];

export default function CSRPage() {
  return (
    <>
      <AboutPageHero
        section="Corporate Social Responsibility"
        title="Giving Back to the Community"
        subtitle="Beyond business, Cofreth is committed to making a positive impact — supporting life-saving initiatives, environmental causes and the wellbeing of underserved communities."
      />

      <div className="py-12 px-6 lg:px-10 xl:px-14 bg-white">
        <div>
          <div className="grid sm:grid-cols-3 gap-5 mb-10">
            {[
              { icon: '🩺', title: '"Save a Life" Campaign', desc: 'Annual blood donation drives and "Save a Life" campaigns — encouraging staff and the public to support critical healthcare needs.' },
              { icon: '🌳', title: 'Green Finger Day',        desc: "170 trees planted and river clean-up activities as part of our environmental commitment to Malaysia's green cover and biodiversity." },
              { icon: '🏠', title: 'Community Support',       desc: "Regular visits and donations to Rumah Amal Kasih Bestari and other orphanages — providing essential support, meals and activities." },
            ].map(item => (
              <div key={item.title} className="bg-white border border-gray-100 rounded-2xl p-6 hover:border-[#6BBD45]/40 hover:shadow-md transition-all duration-300">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-black text-[#1B3A2D] mb-3" style={{ fontSize: '15px' }}>{item.title}</h3>
                <p className="text-gray-500 leading-relaxed" style={{ fontSize: '13px' }}>{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-white border border-gray-100 rounded-2xl p-8">
            <h3 className="font-black text-[#1B3A2D] mb-2" style={{ fontSize: '18px' }}>Sustainable Development</h3>
            <p className="text-gray-500 leading-relaxed mb-6" style={{ fontSize: '14px' }}>
              Cofreth&#39;s activities take into account the objectives of sustainable development from ecological, economical and social dimensions — aligned to the UN Sustainable Development Goals.
            </p>
            <div className="grid grid-cols-6 sm:grid-cols-9 gap-2">
              {sdgs.map(g => (
                <div key={g.n}
                  className="aspect-square rounded-xl flex items-center justify-center text-white font-black hover:scale-110 transition-transform cursor-default"
                  style={{ background: g.bg, fontSize: '13px' }}
                >
                  {g.n}
                </div>
              ))}
            </div>
            <p className="text-gray-400 mt-4 text-center" style={{ fontSize: '12px' }}>UN Sustainable Development Goals 1–17</p>
          </div>
        </div>
      </div>
    </>
  );
}
