import { AboutPageHero } from '@/components/about/AboutPageHero';

export const metadata = {
  title: 'Our Many Firsts — FM Industry Milestones in Malaysia',
  description:
    "Cofreth's industry firsts: first ISO-certified FM in Malaysia (1996), first ESCO CEEP contract (2001), first DCS in Asia (1997–2000), NEA 1st Prize 2018. A trail of pioneering achievements since 1986.",
  alternates: { canonical: '/about/firsts' },
  openGraph: { title: 'Our Many Firsts | Cofreth Malaysia', url: 'https://www.cofreth.com.my/about/firsts' },
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
      <AboutPageHero
        section="Our Many Firsts"
        title="Industry-Leading Milestones"
        subtitle="From Malaysia's first ISO-certified FM company to the first ESCO to win the National Energy Awards — Cofreth has led the industry at every turn since 1986."
      />

      <div className="py-12 px-6 lg:px-10 xl:px-14 bg-white">
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[18px] top-0 bottom-0 w-0.5 bg-gray-200" />
          <div className="space-y-4">
            {milestones.map((m, i) => (
              <div key={m.year + i} className="flex gap-4">
                <div className="shrink-0 relative">
                  <div className="w-9 h-9 rounded-full bg-[#6BBD45] flex items-center justify-center z-10 shadow shadow-[#6BBD45]/30">
                    <span className="text-white font-black text-xs">✓</span>
                  </div>
                </div>
                <div className="pb-4 flex-1">
                  <div className="bg-white border border-gray-100 rounded-xl p-4 hover:border-[#6BBD45]/30 hover:shadow-sm transition-all group">
                    <span className="font-black text-[#6BBD45] tracking-widest uppercase block mb-1 text-xs">{m.year}</span>
                    <p className="text-gray-700 font-medium leading-relaxed group-hover:text-[#1B3A2D] transition-colors" className="text-base">{m.event}</p>
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
