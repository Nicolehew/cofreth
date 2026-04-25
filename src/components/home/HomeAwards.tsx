'use client';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const awards = [
  {
    year: '2022',
    body: 'National Energy Award (NEA)',
    title: 'Champion — Energy Performance Contracting',
    color: '#6BBD45',
  },
  {
    year: '2018',
    body: 'ASEAN Energy Awards',
    title: 'ASEAN Regional Recognition — Singapore',
    color: '#5aa838',
  },
  {
    year: '2018',
    body: 'National Energy & Green Technology Award',
    title: 'MESTECC — Sustainable Energy Leadership',
    color: '#4a9230',
  },
  {
    year: '2018',
    body: 'SME ICON',
    title: 'Malaysian Service Providers Confederation',
    color: '#6BBD45',
  },
  {
    year: '2007–2017',
    body: 'Frost & Sullivan Malaysia',
    title: 'Excellence Award — 5× Recipient',
    color: '#5aa838',
  },
];

export default function HomeAwards() {
  const header = useScrollReveal();
  const strip = useScrollReveal(0.05);

  return (
    <section className="py-24 overflow-hidden" style={{ background: 'linear-gradient(135deg, #060d08 0%, #0e2218 50%, #060d08 100%)' }}>
      {/* Subtle grid */}
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(107,189,69,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(107,189,69,0.04) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

      <div className="max-w-7xl mx-auto px-6">
        <div ref={header.ref} className="text-center mb-14 transition-all duration-700"
          style={{ opacity: header.visible ? 1 : 0, transform: header.visible ? 'none' : 'translateY(30px)' }}>
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-10 h-px bg-[#6BBD45]" />
            <span className="text-[#6BBD45] text-sm font-bold tracking-widest uppercase">Recognition</span>
            <div className="w-10 h-px bg-[#6BBD45]" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4 leading-tight">
            Industry-Recognised<br /><span className="text-[#6BBD45]">Excellence</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">Over 38 years of award-winning performance — from national energy champions to ASEAN regional recognition.</p>
        </div>

        <div ref={strip.ref} className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 transition-all duration-700"
          style={{ opacity: strip.visible ? 1 : 0, transform: strip.visible ? 'none' : 'translateY(40px)' }}>
          {awards.map((a, i) => (
            <div key={i}
              className="group relative rounded-2xl p-5 border border-white/8 hover:border-[#6BBD45]/50 transition-all duration-300 hover:-translate-y-2 cursor-default"
              style={{
                background: 'rgba(255,255,255,0.03)',
                backdropFilter: 'blur(8px)',
                transitionDelay: `${i * 60}ms`,
              }}>
              <div className="text-xs font-black text-[#6BBD45] tracking-widest mb-3 uppercase">{a.year}</div>
              <div className="text-[10px] text-gray-500 font-semibold uppercase tracking-widest mb-2">{a.body}</div>
              <div className="text-white font-bold leading-snug text-sm">{a.title}</div>
              {/* Accent bar */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 rounded-b-2xl bg-[#6BBD45] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        {/* ISO certifications strip */}
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {['ISO 9001:2015 — Quality', 'ISO 14001:2015 — Environment', 'ISO 45001:2018 — Safety', 'ISO 50001:2011 — Energy'].map(cert => (
            <span key={cert} className="text-xs text-gray-400 border border-white/10 px-4 py-2 rounded-full font-medium hover:border-[#6BBD45]/40 hover:text-[#6BBD45] transition-colors cursor-default">
              {cert}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
