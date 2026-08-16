'use client';
import Link from 'next/link';
import { CheckCircle } from 'lucide-react';
import { AboutPageHero } from './AboutPageHero';
import StatsBar from './StatsBar';
import { useLanguage } from '@/contexts/LanguageContext';

export default function AboutMainContent() {
  const { t } = useLanguage();
  const as = t.pages.about.aboutSection;
  const p  = t.pages.about;

  const cards = [
    { icon: '🎯', label: as.missionLabel, desc: as.missionDesc },
    { icon: '🌐', label: as.visionLabel,  desc: as.visionDesc  },
    { icon: '✅', label: as.qualityLabel, desc: as.qualityDesc  },
    { icon: '⚡', label: as.escoLabel,    desc: as.escoDesc     },
  ];

  const quickLinks = [
    { label: p.nav.firsts,      href: '/about/firsts'      },
    { label: p.nav.philosophy,  href: '/about/philosophy'  },
    { label: p.nav.ims,         href: '/about/ims-policy'  },
    { label: p.nav.processes,   href: '/about/processes'   },
    { label: p.nav.values,      href: '/about/values'      },
  ];

  return (
    <>
      <AboutPageHero
        section={as.eyebrow}
        title={as.title}
        subtitle={as.subtitle}
      />
      <StatsBar />

      <div className="py-12 px-6 lg:px-10 xl:px-14 bg-white">
        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="relative rounded-3xl p-10 overflow-hidden text-white" style={{ background: 'linear-gradient(135deg, #0F2419 0%, #1B3A2D 100%)' }}>
            <div className="absolute top-0 right-0 w-48 h-48 rounded-full opacity-10 -translate-y-1/3 translate-x-1/3" style={{ background: '#6BBD45' }} />
            <div className="relative">
              <div className="text-5xl mb-5">🎯</div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-[#6BBD45] mb-3">{as.missionLabel}</p>
              <h3 className="text-2xl font-black text-white leading-snug">{as.missionDesc}</h3>
              <div className="mt-6 w-12 h-1 bg-[#6BBD45] rounded-full" />
            </div>
          </div>
          <div className="relative rounded-3xl p-10 overflow-hidden text-white" style={{ background: 'linear-gradient(135deg, #1a4a30 0%, #0F2419 100%)' }}>
            <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full opacity-10 translate-y-1/3 -translate-x-1/3" style={{ background: '#6BBD45' }} />
            <div className="relative">
              <div className="text-5xl mb-5">🌐</div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-[#6BBD45] mb-3">{as.visionLabel}</p>
              <h3 className="text-2xl font-black text-white leading-snug">{as.visionDesc}</h3>
              <div className="mt-6 w-12 h-1 bg-[#6BBD45] rounded-full" />
            </div>
          </div>
        </div>

        {/* About text + highlights */}
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div className="space-y-4 text-gray-600 leading-relaxed text-lg">
            <p>{as.subtitle}</p>
            <p>{as.escoBody}</p>
            <div className="grid grid-cols-1 gap-2.5 pt-2">
              {as.highlights.map(pt => (
                <div key={pt} className="flex items-start gap-2.5">
                  <CheckCircle size={15} className="text-[#6BBD45] mt-0.5 shrink-0" />
                  <span className="text-base text-gray-600">{pt}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {cards.map(c => (
              <div key={c.label} className="bg-white rounded-2xl p-5 border border-gray-100 hover:border-[#6BBD45]/40 hover:shadow-md transition-all">
                <div className="text-2xl mb-2">{c.icon}</div>
                <div className="text-base font-black text-[#1B3A2D] mb-1">{c.label}</div>
                <p className="text-gray-500 leading-relaxed text-base">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Quick links */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="font-black text-gray-400 uppercase tracking-widest mb-4 text-xs">{p.navLabel}</p>
          <div className="flex flex-wrap gap-3">
            {quickLinks.map(l => (
              <Link key={l.href} href={l.href}
                className="text-base px-4 py-2 rounded-full border border-[#6BBD45]/40 text-[#6BBD45] font-semibold hover:bg-[#6BBD45] hover:text-white transition-all">
                {l.label} →
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
