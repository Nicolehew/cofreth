'use client';
import Link from 'next/link';
import { Award, ArrowRight } from 'lucide-react';
import { AboutPageHero } from './AboutPageHero';
import { useLanguage } from '@/contexts/LanguageContext';

const THEMES = [
  { years: '2025',      highlight: true },
  { years: '2018–2024', highlight: false },
  { years: '2015–2017', highlight: false },
  { years: '2012–2014', highlight: false },
  { years: '2010–2011', highlight: false },
  { years: '2009',      highlight: false },
  { years: '2008',      highlight: false },
  { years: '2007',      highlight: false },
  { years: '2006',      highlight: false },
  { years: '2005',      highlight: false },
];

const THEME_SLOGANS = [
  'Environmental, Social & Governance (ESG)',
  'Connecting The Possible…',
  'We Never Stop: Believing. Synergizing. Delivering',
  'Change, Innovate, Achieve',
  'Right, Fast Actions: Key to Success',
  'Your Smiles, Our Pride',
  'Service Excellence, Our Forte',
  'We Add Value, We Value-Add',
  'Your Expectations, Our Commitment',
  'Delivering High Performance',
];

export default function ThemesContent() {
  const { t } = useLanguage();
  const th = t.pages.about.themesSection;
  return (
    <>
      <AboutPageHero section={th.eyebrow} title={th.title} subtitle={th.subtitle} />
      <div className="py-12 px-6 lg:px-10 xl:px-14 bg-white">
        <div className="space-y-3 mb-12">
          {THEMES.map((item, i) => (
            <div key={item.years}
              className={`flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-8 rounded-xl px-6 py-4 border transition-all ${
                item.highlight
                  ? 'bg-[#6BBD45]/10 border-[#6BBD45]/40'
                  : 'bg-white border-gray-100 hover:border-[#6BBD45]/20'
              }`}
            >
              <span className={`text-xs font-black uppercase tracking-widest shrink-0 w-20 ${item.highlight ? 'text-[#6BBD45]' : 'text-gray-400'}`}>
                {item.years}
              </span>
              <span className={`text-lg font-semibold italic ${item.highlight ? 'text-[#1B3A2D]' : 'text-[#1B3A2D]'}`}>
                &ldquo;{THEME_SLOGANS[i]}&rdquo;
              </span>
            </div>
          ))}
        </div>

        <div className="bg-[#6BBD45] rounded-2xl p-10 text-center">
          <Award size={36} className="text-white mx-auto mb-4" />
          <h3 className="font-black text-white mb-3 text-xl">{th.awardsTitle}</h3>
          <p className="text-base text-white/80 max-w-md mx-auto mb-6">{th.awardsBody}</p>
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            {['2007','2010','2015','2016','2017'].map(yr => (
              <span key={yr} className="text-base bg-white/20 border border-white/40 text-white px-4 py-1.5 rounded-full font-bold">{yr}</span>
            ))}
          </div>
          <Link href="/contact"
            className="text-base inline-flex items-center gap-2 bg-[#1B3A2D] hover:bg-[#0F2419] text-white font-semibold px-8 py-3 rounded-full transition-all">
            {th.awardsBtn} <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </>
  );
}
