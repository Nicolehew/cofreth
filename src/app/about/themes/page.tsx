import { Award } from 'lucide-react';
import Link from 'next/link';
import { AboutPageHero } from '@/components/about/AboutPageHero';

export const metadata = {
  title: 'Corporate Themes — Cofreth\'s Annual Strategic Vision',
  description:
    "Cofreth's corporate themes from 2005 to 2020 — from 'Delivering High Performance' to 'Connect The Possibles' — reflecting the company's evolving culture and strategic direction.",
  alternates: { canonical: '/about/themes' },
  openGraph: { title: 'Corporate Themes | Cofreth Malaysia', url: 'https://www.cofreth.com.my/about/themes' },
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
      <AboutPageHero
        section="Corporate Themes"
        title="Our Evolving Vision"
        subtitle="Each year, Cofreth adopts a corporate theme that reflects its strategic focus — guiding the organisation's culture and direction."
      />

      <div className="py-12 px-6 lg:px-10 xl:px-14 bg-white">
        <div className="max-w-3xl">
          <div className="space-y-3 mb-12">
            {themes.map(t => (
              <div key={t.years}
                className={`flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-8 rounded-xl px-6 py-4 border transition-all ${
                  t.highlight
                    ? 'bg-[#1B3A2D] border-[#6BBD45]/30'
                    : 'bg-white border-gray-100 hover:border-[#6BBD45]/20'
                }`}
              >
                <span className={`font-black uppercase tracking-widest shrink-0 w-20 ${t.highlight ? 'text-[#6BBD45]' : 'text-gray-400'}`} style={{ fontSize: '11px' }}>
                  {t.years}
                </span>
                <span className={`font-semibold italic ${t.highlight ? 'text-white' : 'text-[#1B3A2D]'}`} style={{ fontSize: '15px' }}>
                  &ldquo;{t.theme}&rdquo;
                </span>
              </div>
            ))}
          </div>

          {/* Awards CTA */}
          <div className="bg-[#1B3A2D] rounded-2xl p-10 text-center text-white">
            <Award size={36} className="text-[#6BBD45] mx-auto mb-4" />
            <h3 className="font-black mb-3" style={{ fontSize: '20px' }}>Frost &amp; Sullivan Malaysia Excellence Award</h3>
            <p className="text-gray-300 max-w-md mx-auto mb-6" style={{ fontSize: '14px' }}>
              Recognised five times — affirming our leadership in facilities management and energy services.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-6">
              {['2007','2010','2015','2016','2017'].map(yr => (
                <span key={yr} className="bg-[#6BBD45]/20 border border-[#6BBD45]/40 text-[#6BBD45] px-4 py-1.5 rounded-full font-bold" style={{ fontSize: '13px' }}>{yr}</span>
              ))}
            </div>
            <Link href="/contact"
              className="inline-flex items-center gap-2 bg-[#6BBD45] hover:bg-[#5aa838] text-white font-semibold px-8 py-3 rounded-full transition-all" style={{ fontSize: '14px' }}>
              Partner with an Award-Winning FM →
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
