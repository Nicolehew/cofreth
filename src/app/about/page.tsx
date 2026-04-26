import { CheckCircle } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'About Cofreth | Cofreth (M) Sdn Bhd',
  description: "Malaysia's FM Pioneer since 1986 — ISO certified, ESCO registered, 5× Frost & Sullivan award winner.",
};

export default function AboutPage() {
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
            <span className="text-[#6BBD45] text-xs font-bold tracking-widest uppercase">Cofreth At A Glance</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black mb-4 leading-tight">
            38 Years of<br /><span className="text-[#6BBD45]">FM Excellence</span>
          </h1>
          <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-3">
            Since 1986, Cofreth has been Malaysia&#39;s pioneer in integrated facilities management, energy services, and sustainable built environment solutions.
          </p>
          <p className="text-gray-500 text-xs">
            Reg. No. 198601002912 (152066-P) · No. 39, Jalan USJ Sentral 3, USJ Sentral, 47600 Subang Jaya, Selangor
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mt-10">
          {[['38+','Years of Excellence'],['30+','Major Clients'],['5×','ISO Certifications'],['5×','Frost & Sullivan']].map(([v,l]) => (
            <div key={l} className="bg-white/5 border border-white/10 rounded-2xl py-4 px-3 text-center">
              <div className="text-2xl font-black text-[#6BBD45]">{v}</div>
              <div className="text-xs text-gray-400 mt-1">{l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Body */}
      <div className="py-14 px-6 lg:px-10 xl:px-14 bg-white dark:bg-[#0d1117]">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-0.5 bg-[#6BBD45]" />
          <span className="text-[#6BBD45] text-xs font-bold tracking-widest uppercase">About Cofreth</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-black text-[#1B3A2D] dark:text-white mb-6">
          Malaysia&#39;s FM Pioneer Since 1986
        </h2>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div className="space-y-4 text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
            <p>Cofreth (M) Sdn Bhd was established in <strong className="text-[#1B3A2D] dark:text-white">1986</strong> as a Malaysian company specialising in Facilities Management, Operations and Maintenance of MEP Systems, Engineering Due Diligence, Energy Audit, Energy Efficiency, Energy Performance Contracting, Green Commissioning, and District Cooling System design.</p>
            <p>We are a registered <strong className="text-[#1B3A2D] dark:text-white">Energy Service Company (ESCO)</strong> with Malaysia Green Technology Corporation and MAESCO, and utilise the <strong className="text-[#1B3A2D] dark:text-white">ARCHIBUS Total Infrastructure Facilities Management System (TIFM)</strong> for smart, data-driven facility management.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {[
                'First ISO-certified FM company in Malaysia (1996)',
                'First DCS with TES in Asia (1997–2000)',
                'Registered ESCO — CEEP guaranteed savings',
                '5× Frost & Sullivan Malaysia Excellence Awards',
                'NEA 2018 1st Prize & NEA 2021 EPC Champion',
                'ARCHIBUS TIFM smart FM technology platform',
              ].map(pt => (
                <div key={pt} className="flex items-start gap-2">
                  <CheckCircle size={14} className="text-[#6BBD45] mt-0.5 shrink-0" />
                  <span className="text-xs text-gray-600 dark:text-gray-400">{pt}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: '🏢', label: 'Mission', desc: 'To Be Recognised as the Leading Provider of Quality Services for Total Facilities Management and All Utilities.' },
              { icon: '🌐', label: 'Vision', desc: 'To Be An International Service Provider in Facilities Management & Energy Services.' },
              { icon: '✅', label: 'Quality', desc: 'ISO 9001 · ISO 14001 · ISO 45001 · ISO 50001 · ISO 41001 — all independently certified by SIRIM QAS.' },
              { icon: '⚡', label: 'ESCO', desc: 'Registered with Malaysia Green Technology Corp & MAESCO. Guaranteed energy savings via CEEP contracts.' },
            ].map(c => (
              <div key={c.label} className="bg-gray-50 dark:bg-white/5 rounded-2xl p-4 border border-gray-100 dark:border-white/10 hover:border-[#6BBD45]/30 transition-colors">
                <div className="text-2xl mb-2">{c.icon}</div>
                <div className="font-black text-[#1B3A2D] dark:text-white text-xs mb-1">{c.label}</div>
                <p className="text-gray-500 dark:text-gray-400 text-xs leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 pt-10 border-t border-gray-100 dark:border-gray-800">
          <p className="text-xs font-black text-gray-400 uppercase tracking-widest mb-5">Explore more</p>
          <div className="flex flex-wrap gap-3">
            {[
              { label: 'Our Many Firsts', href: '/about/firsts' },
              { label: 'Our Philosophy', href: '/about/philosophy' },
              { label: 'IMS Policy', href: '/about/ims-policy' },
              { label: 'Our Processes', href: '/about/processes' },
              { label: 'Value & Ethics', href: '/about/values' },
            ].map(l => (
              <Link key={l.href} href={l.href}
                className="px-4 py-2 rounded-full border border-[#6BBD45]/30 text-[#6BBD45] text-xs font-semibold hover:bg-[#6BBD45] hover:text-white transition-all">
                {l.label} →
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
