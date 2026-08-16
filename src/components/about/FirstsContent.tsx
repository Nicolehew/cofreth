'use client';
import { AboutPageHero } from './AboutPageHero';
import { useLanguage } from '@/contexts/LanguageContext';

const MILESTONE_YEARS = ['1986','1996','1997','1997–2000','2001','2003','2007','2009','2010','2013','2015','2016','2017','2018','2021','Today'];

export default function FirstsContent() {
  const { t } = useLanguage();
  const fs = t.pages.about.firstsSection;
  return (
    <>
      <AboutPageHero section={fs.eyebrow} title={fs.title} subtitle={fs.subtitle} />
      <div className="py-12 px-6 lg:px-10 xl:px-14 bg-white">
        <div className="relative">
          <div className="absolute left-[18px] top-0 bottom-0 w-0.5 bg-gray-200" />
          <div className="space-y-4">
            {MILESTONE_YEARS.map((year, i) => (
              <div key={year + i} className="flex gap-4">
                <div className="shrink-0 relative">
                  <div className="w-9 h-9 rounded-full bg-[#6BBD45] flex items-center justify-center z-10 shadow shadow-[#6BBD45]/30">
                    <span className="text-white font-black text-xs">✓</span>
                  </div>
                </div>
                <div className="pb-4 flex-1">
                  <div className="bg-white border border-gray-100 rounded-xl p-4 hover:border-[#6BBD45]/30 hover:shadow-sm transition-all group">
                    <span className="font-black text-[#6BBD45] tracking-widest uppercase block mb-1 text-xs">{year}</span>
                    <p className="text-base text-gray-700 font-medium leading-relaxed group-hover:text-[#1B3A2D] transition-colors">{fs.milestones[i]}</p>
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
