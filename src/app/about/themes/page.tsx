import { Award } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Corporate Themes | Cofreth (M) Sdn Bhd',
  description: "Cofreth's annual corporate themes from 2005 to present — guiding the organisation's culture and strategic direction each year.",
};

const themes = [
  { years: '2018–2020', theme: 'Connect The Possibles, Connecting The Impossibles', highlight: true },
  { years: '2015–2017', theme: 'We Never Stop: Believing. Synergizing. Delivering' },
  { years: '2012–2014', theme: 'Change, Innovate, Achieve' },
  { years: '2010–2011', theme: 'Right, Fast Actions: Key to Success' },
  { years: '2009',      theme: 'Your Smiles, Our Pride' },
  { years: '2008',      theme: 'Service Excellence, Our Forte' },
  { years: '2007',      theme: 'We Add Value, We Value-Add' },
  { years: '2006',      theme: 'Your Expectations, Our Commitment' },
  { years: '2005',      theme: 'Delivering High Performance' },
];

export default function ThemesPage() {
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
            <span className="text-[#6BBD45] text-xs font-bold tracking-widest uppercase">Corporate Themes</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black mb-4 leading-tight">
            Our Evolving<br /><span className="text-[#6BBD45]">Vision</span>
          </h1>
          <p className="text-gray-300 text-base leading-relaxed">
            Each year, Cofreth adopts a corporate theme that reflects its strategic focus — guiding the organisation&#39;s culture and direction.
          </p>
        </div>
      </div>

      {/* Themes */}
      <div className="py-14 px-6 lg:px-10 xl:px-14 bg-white dark:bg-[#0d1117]">
        <div className="space-y-3 mb-14">
          {themes.map(t => (
            <div key={t.years}
              className={`flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-8 rounded-2xl px-6 py-5 border transition-all ${
                t.highlight
                  ? 'bg-[#1B3A2D] border-[#6BBD45]/30'
                  : 'bg-gray-50 dark:bg-white/5 border-gray-100 dark:border-white/10 hover:border-[#6BBD45]/20'
              }`}
            >
              <span className={`text-xs font-black uppercase tracking-widest shrink-0 w-24 ${t.highlight ? 'text-[#6BBD45]' : 'text-gray-400'}`}>
                {t.years}
              </span>
              <span className={`font-semibold text-sm sm:text-base italic ${t.highlight ? 'text-white' : 'text-[#1B3A2D] dark:text-white'}`}>
                &ldquo;{t.theme}&rdquo;
              </span>
            </div>
          ))}
        </div>

        {/* Awards CTA */}
        <div className="bg-gradient-to-br from-[#1B3A2D] to-[#0F2419] rounded-3xl p-10 text-center text-white">
          <Award size={40} className="text-[#6BBD45] mx-auto mb-4" />
          <h3 className="text-2xl font-black mb-3">Frost &amp; Sullivan Malaysia Excellence Award</h3>
          <p className="text-gray-300 text-sm max-w-xl mx-auto mb-6">
            Recognised five times — 2007, 2010, 2015, 2016 and 2017 — affirming our leadership in facilities management and energy services.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {['2007','2010','2015','2016','2017'].map(yr => (
              <span key={yr} className="bg-[#6BBD45]/20 border border-[#6BBD45]/40 text-[#6BBD45] px-4 py-1.5 rounded-full text-sm font-bold">{yr}</span>
            ))}
          </div>
          <Link href="/contact"
            className="inline-flex items-center gap-2 bg-[#6BBD45] hover:bg-[#5aa838] text-white font-semibold px-8 py-3 rounded-full transition-all text-sm">
            Partner with an Award-Winning FM →
          </Link>
        </div>
      </div>
    </>
  );
}
