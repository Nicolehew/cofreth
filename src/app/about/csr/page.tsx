export const metadata = {
  title: 'Corporate Social Responsibility | Cofreth (M) Sdn Bhd',
  description: "Cofreth's CSR initiatives — blood donation drives, Green Finger Day, orphanage support and UN Sustainable Development Goals alignment.",
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
            <span className="text-[#6BBD45] text-xs font-bold tracking-widest uppercase">Corporate Social Responsibility</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black mb-4 leading-tight">
            Giving Back to<br /><span className="text-[#6BBD45]">the Community</span>
          </h1>
          <p className="text-gray-300 text-base leading-relaxed">
            Beyond business, Cofreth is committed to making a positive impact — supporting life-saving initiatives, environmental causes and the wellbeing of underserved communities.
          </p>
        </div>
      </div>

      {/* CSR initiatives */}
      <div className="py-14 px-6 lg:px-10 xl:px-14 bg-white dark:bg-[#0d1117]">
        <div className="grid sm:grid-cols-3 gap-5 mb-12">
          {[
            { icon: '🩺', title: '"Save a Life" Campaign', desc: 'Cofreth organises annual blood donation drives and "Save a Life" campaigns — encouraging staff and the public to support critical healthcare needs.' },
            { icon: '🌳', title: 'Green Finger Day',       desc: "170 trees planted and river clean-up activities as part of our environmental commitment to Malaysia's green cover and biodiversity." },
            { icon: '🏠', title: 'Orphanage & Community Support', desc: "Regular visits and donations to Rumah Amal Kasih Bestari and other orphanages — providing essential support, meals and activities." },
          ].map(item => (
            <div key={item.title} className="bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 rounded-2xl p-6 hover:border-[#6BBD45]/30 hover:shadow-lg transition-all duration-300">
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="font-black text-[#1B3A2D] dark:text-white text-base mb-3">{item.title}</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* UN SDGs */}
        <div className="bg-gray-50 dark:bg-white/5 rounded-2xl border border-gray-100 dark:border-white/10 p-6">
          <h3 className="font-black text-[#1B3A2D] dark:text-white mb-2 text-lg">Sustainable Development</h3>
          <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-6">
            Cofreth&#39;s activities take into account the objectives of sustainable development from ecological, economical and social dimensions — aligned to the UN Sustainable Development Goals.
          </p>
          <div className="grid grid-cols-6 sm:grid-cols-9 gap-2">
            {sdgs.map(g => (
              <div key={g.n}
                className="aspect-square rounded-xl flex items-center justify-center text-white font-black text-sm hover:scale-110 transition-transform cursor-default"
                style={{ background: g.bg }}
              >
                {g.n}
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-400 mt-4 text-center">UN Sustainable Development Goals 1–17</p>
        </div>
      </div>
    </>
  );
}
