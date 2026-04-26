export const metadata = {
  title: 'Our Many Firsts | Cofreth (M) Sdn Bhd',
  description: "Cofreth's industry-leading milestones — first ISO-certified FM company in Malaysia, first ESCO, first DCS in Asia and more.",
};

const milestones = [
  { year: '1986',      event: 'Cofreth (M) Sdn Bhd incorporated in Malaysia (Reg. No. 198601002912 | 152066-P)' },
  { year: '1996',      event: 'First FM company in Malaysia to achieve ISO 9002:1994 accreditation; First to provide a Comprehensive FM Contract' },
  { year: '1997',      event: 'First to provide 15-year O&M services for the Ministry of Works Malaysia HQ' },
  { year: '1997–2000', event: 'First in Asia (outside Japan) to design & build a District Cooling System with 6.6 km underground chilled water reticulation' },
  { year: '2001',      event: 'First ESCO to offer Capped & Guaranteed Energy Efficiency Performance (CEEP) contracts' },
  { year: '2003',      event: 'First FM company to provide full services to the Putrajaya International Convention Centre (PICC)' },
  { year: '2007',      event: 'Frost & Sullivan Customer Service Leadership Award · First to introduce Balanced Scorecard for FM Performance Measurement' },
  { year: '2009',      event: "First company appointed to formulate Malaysia's National Energy Efficiency Master Plan" },
  { year: '2010',      event: 'Frost & Sullivan Malaysia Green Excellence Award — Facilities Management Company of the Year' },
  { year: '2013',      event: 'First FM company to implement BIM for a cancer hospital in Malaysia' },
  { year: '2015',      event: 'Frost & Sullivan Customer Service Leadership Award — Integrated Facilities Management' },
  { year: '2016',      event: 'Frost & Sullivan Competitive Strategy Innovation & Leadership Award — Facilities Management' },
  { year: '2017',      event: 'BrandLaureate SMEs BestBrands Award — Industrial Facilities Management category' },
  { year: '2018',      event: 'First ESCO to win 1st Prize at inaugural National Energy Awards (NEA) · SME Icons Award · ASEAN Energy Award 1st Runner Up' },
  { year: '2021',      event: 'NEA 2021 Energy Performance Contracting (EPC) Champion Award — jointly with Besi Apac' },
  { year: 'Today',     event: '5× ISO certified ESCO with 38+ years of excellence, serving airports, data centres, universities and landmark buildings across Malaysia' },
];

export default function FirstsPage() {
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
            <span className="text-[#6BBD45] text-xs font-bold tracking-widest uppercase">Our Many Firsts</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black mb-4 leading-tight">
            Industry-Leading<br /><span className="text-[#6BBD45]">Milestones</span>
          </h1>
          <p className="text-gray-300 text-base leading-relaxed">
            From Malaysia&apos;s first ISO-certified FM company to the first ESCO to win the National Energy Awards — Cofreth has led the industry at every turn since 1986.
          </p>
        </div>
      </div>

      {/* Timeline */}
      <div className="py-14 px-6 lg:px-10 xl:px-14 bg-white dark:bg-[#0d1117]">
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[18px] top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700" />
          <div className="space-y-5">
            {milestones.map((m, i) => (
              <div key={m.year + i} className="flex gap-4">
                <div className="relative flex flex-col items-center shrink-0">
                  <div className="w-9 h-9 rounded-full bg-[#6BBD45] flex items-center justify-center z-10 shadow-md shadow-[#6BBD45]/30">
                    <span className="text-white text-xs font-black">✓</span>
                  </div>
                </div>
                <div className="pb-5 flex-1">
                  <div className="bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 rounded-2xl p-4 hover:border-[#6BBD45]/30 hover:shadow-md transition-all duration-300 group">
                    <span className="text-xs font-black text-[#6BBD45] tracking-widest uppercase block mb-1">{m.year}</span>
                    <p className="text-sm text-gray-700 dark:text-gray-300 font-medium leading-relaxed group-hover:text-[#1B3A2D] dark:group-hover:text-white transition-colors">{m.event}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
