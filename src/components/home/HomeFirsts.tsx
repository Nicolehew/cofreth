'use client';
import Link from 'next/link';
import { ArrowRight, Trophy } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const firsts = [
  { year: '1996', badge: '🏆 1st in Malaysia', title: 'ISO-Certified FM Company', desc: 'First Facilities Management company in Malaysia to achieve ISO 9002:1994 accreditation — setting the quality benchmark for the entire industry.' },
  { year: '1997', badge: '🥇 1st in Malaysia', title: 'Comprehensive FM Contract', desc: 'First to provide a Comprehensive Facilities Management Contract — introducing the single-source FM model that is now industry standard.' },
  { year: '1997', badge: '⏱ 15-Year Contract', title: 'Ministry of Works HQ O&M', desc: 'First to provide 15-year Operation & Maintenance services for the Ministry of Works Malaysia headquarters — the longest FM contract at the time.' },
  { year: '1997–2000', badge: '🌏 1st in Asia', title: 'District Cooling System with TES', desc: 'First in Asia (outside Japan) to design, build and operate a District Cooling System with 6.6km underground chilled water reticulation for a university campus.' },
  { year: '2001', badge: '⚡ 1st ESCO', title: 'Guaranteed Energy Savings (CEEP)', desc: 'First Energy Services Company in Malaysia to offer Capped and Guaranteed Energy Efficiency Performance (CEEP) contracts — guaranteed savings or your money back.' },
  { year: '2003', badge: '🏛 1st FM Provider', title: 'Putrajaya Convention Centre', desc: 'First FM company to provide full facility management services to the Putrajaya International Convention Centre (PICC) — one of Malaysia\'s most prestigious venues.' },
  { year: '2007', badge: '📊 1st in FM', title: 'Balanced Scorecard for FM', desc: 'First company to introduce the Balanced Scorecard performance measurement methodology into the Facilities Management industry in Malaysia.' },
  { year: '2009', badge: '🇲🇾 National First', title: 'National Energy Efficiency Master Plan', desc: 'First company appointed to formulate the National Energy Efficiency Master Plan for Malaysia — shaping the nation\'s energy policy.' },
  { year: '2013', badge: '🏗 BIM Pioneer', title: 'BIM for Cancer Hospital', desc: 'First FM company to implement Building Information Modelling (BIM) for a cancer hospital in Malaysia — revolutionising asset management in healthcare.' },
  { year: '2018', badge: '🥇 NEA Winner', title: 'National Energy Award 1st Prize', desc: 'First ESCO to win 1st Prize at the inaugural National Energy Awards (NEA) of Malaysia — the nation\'s most prestigious energy management honour.' },
];

function FirstCard({ item, i }: { item: typeof firsts[0]; i: number }) {
  const reveal = useScrollReveal(0.05);
  return (
    <div ref={reveal.ref} className="transition-all duration-700"
      style={{ opacity: reveal.visible ? 1 : 0, transform: reveal.visible ? 'none' : 'translateY(28px)', transitionDelay: `${(i % 3) * 80}ms` }}>
      <div className="group bg-white border border-gray-100 hover:border-[#6BBD45]/40 rounded-2xl p-6 h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
        <div className="flex items-start justify-between gap-3 mb-3">
          <span className="inline-block bg-[#6BBD45]/10 text-[#6BBD45] text-xs font-bold px-3 py-1 rounded-full">{item.badge}</span>
          <span className="text-xs font-bold text-gray-400 shrink-0 mt-0.5">{item.year}</span>
        </div>
        <h3 className="font-black text-[#1B3A2D] text-sm mb-2 leading-snug group-hover:text-[#6BBD45] transition-colors">{item.title}</h3>
        <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
      </div>
    </div>
  );
}

export default function HomeFirsts() {
  const header = useScrollReveal(0.05);

  return (
    <section className="py-20 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div ref={header.ref} className="text-center mb-14 transition-all duration-700"
          style={{ opacity: header.visible ? 1 : 0, transform: header.visible ? 'none' : 'translateY(24px)' }}>
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-0.5 bg-[#6BBD45]" />
            <span className="text-[#6BBD45] text-sm font-bold tracking-widest uppercase">Industry Firsts</span>
            <div className="w-8 h-0.5 bg-[#6BBD45]" />
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-[#1B3A2D] mb-4 leading-tight">
            Our Many <span className="text-[#6BBD45]">Firsts</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            For nearly four decades, Cofreth has led Malaysia's FM and energy industry —
            pioneering new standards, new technologies and new ways to serve clients better.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {firsts.map((f, i) => <FirstCard key={f.year + f.title} item={f} i={i} />)}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-[#0F2419] to-[#1B3A2D] rounded-2xl px-8 py-5 text-white">
            <Trophy size={20} className="text-[#6BBD45]" />
            <span className="font-semibold text-sm">10 industry firsts across 38 years</span>
            <Link href="/about" className="flex items-center gap-1 text-[#6BBD45] hover:text-white text-sm font-bold transition-colors ml-2">
              Our Full Story <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
