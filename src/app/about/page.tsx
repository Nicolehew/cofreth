import { CheckCircle } from 'lucide-react';
import Link from 'next/link';
import { AboutPageHero } from '@/components/about/AboutPageHero';

export const metadata = {
  title: 'About Cofreth — Malaysia\'s FM Pioneer Since 1986',
  description:
    "Cofreth (M) Sdn Bhd — established 1986, Malaysia's first ISO-certified FM company, registered ESCO, 5× Frost & Sullivan Award winner. Serving airports, data centres, universities and government buildings.",
  alternates: { canonical: '/about' },
  openGraph: {
    title:       'About Cofreth | Malaysia\'s FM Pioneer Since 1986',
    description: 'Established 1986. First ISO-certified FM company in Malaysia. Registered ESCO. 5× Frost & Sullivan Award.',
    url:         'https://www.cofreth.com.my/about',
  },
};

export default function AboutPage() {
  return (
    <>
      <AboutPageHero
        section="About Cofreth"
        title={<>Malaysia&apos;s FM Pioneer<br />Since 1986</>}
        subtitle="Established in 1986, Cofreth is Malaysia's leading integrated facilities management, energy services and sustainable built environment solutions provider."
      />

      {/* Stats bar */}
      <div className="bg-[#6BBD45] px-6 lg:px-10 xl:px-14 py-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[['38+','Years of Excellence'],['30+','Major Clients'],['5×','ISO Certifications'],['5×','Frost & Sullivan']].map(([v,l]) => (
            <div key={l} className="text-center">
              <div className="text-2xl font-black text-white">{v}</div>
              <div className="text-white/70 mt-0.5" style={{ fontSize: '13px' }}>{l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Body */}
      <div className="py-12 px-6 lg:px-10 xl:px-14 bg-white">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div className="space-y-4 text-gray-600 leading-relaxed" style={{ fontSize: '17px' }}>
            <p>Cofreth (M) Sdn Bhd was established in <strong className="text-[#1B3A2D]">1986</strong> as a Malaysian company specialising in Facilities Management, Operations and Maintenance of MEP Systems, Engineering Due Diligence, Energy Audit, Energy Efficiency, Energy Performance Contracting, Green Commissioning, and District Cooling System design.</p>
            <p>We are a registered <strong className="text-[#1B3A2D]">Energy Service Company (ESCO)</strong> with Malaysia Green Technology Corporation and MAESCO, and utilise the <strong className="text-[#1B3A2D]">ARCHIBUS TIFM</strong> for smart, data-driven facility management.</p>
            <div className="grid grid-cols-1 gap-2.5 pt-2">
              {[
                'First ISO-certified FM company in Malaysia (1996)',
                'First DCS with TES in Asia outside Japan (1997–2000)',
                'Registered ESCO — CEEP guaranteed savings',
                '5× Frost & Sullivan Malaysia Excellence Awards',
                'NEA 2018 1st Prize & NEA 2021 EPC Champion',
                'ARCHIBUS TIFM smart FM technology platform',
              ].map(pt => (
                <div key={pt} className="flex items-start gap-2.5">
                  <CheckCircle size={15} className="text-[#6BBD45] mt-0.5 shrink-0" />
                  <span className="text-gray-600" style={{ fontSize: '16px' }}>{pt}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: '🎯', label: 'Mission', desc: 'To Be Recognised as the Leading Provider of Quality Services for Total Facilities Management and All Utilities.' },
              { icon: '🌐', label: 'Vision', desc: 'To Be An International Service Provider in Facilities Management & Energy Services.' },
              { icon: '✅', label: 'Quality', desc: 'ISO 9001 · ISO 14001 · ISO 45001 · ISO 50001 · ISO 41001 — all certified by SIRIM QAS.' },
              { icon: '⚡', label: 'ESCO', desc: 'Registered with Malaysia Green Technology Corp & MAESCO. Guaranteed savings via CEEP contracts.' },
            ].map(c => (
              <div key={c.label} className="bg-white rounded-2xl p-5 border border-gray-100 hover:border-[#6BBD45]/40 hover:shadow-md transition-all">
                <div className="text-2xl mb-2">{c.icon}</div>
                <div className="font-black text-[#1B3A2D] mb-1" style={{ fontSize: '15px' }}>{c.label}</div>
                <p className="text-gray-500 leading-relaxed" style={{ fontSize: '13px' }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Quick links */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="font-black text-gray-400 uppercase tracking-widest mb-4" style={{ fontSize: '12px' }}>Explore more</p>
          <div className="flex flex-wrap gap-3">
            {[
              { label: 'Our Many Firsts', href: '/about/firsts' },
              { label: 'Our Philosophy', href: '/about/philosophy' },
              { label: 'IMS Policy', href: '/about/ims-policy' },
              { label: 'Our Processes', href: '/about/processes' },
              { label: 'Value & Ethics', href: '/about/values' },
            ].map(l => (
              <Link key={l.href} href={l.href}
                className="px-4 py-2 rounded-full border border-[#6BBD45]/40 text-[#6BBD45] font-semibold hover:bg-[#6BBD45] hover:text-white transition-all"
                style={{ fontSize: '15px' }}>
                {l.label} →
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
