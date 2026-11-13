import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { JsonLd, breadcrumbSchema, faqSchema, COFRETH_ORG } from '@/components/JsonLd';
import { CheckCircle, Award, Shield, Zap, Building2, Star } from 'lucide-react';

export const metadata = {
  title: "Why Cofreth | Malaysia's Leading FM & Energy Company Since 1986",
  description:
    "38 years. 5 ISO certifications. 5× Frost & Sullivan Award winner. NEA Champion 2021. First ISO 41001 FM company in Malaysia. Discover why Cofreth is the benchmark for facilities management and energy performance contracting.",
  alternates: { canonical: '/why-cofreth' },
  openGraph: {
    title:       "Why Cofreth | Malaysia's Leading FM & Energy Company",
    description: "First ISO 41001 FM company in Malaysia. 5× Frost & Sullivan. NEA Champion 2021. KLIA2, PICC, PNB 1194 and 30+ major clients managed since 1986.",
    url:         'https://www.cofreth.com.my/why-cofreth',
  },
};

const whyFaqs = [
  { q: 'Who is the best facilities management company in Malaysia?', a: 'Cofreth (M) Sdn Bhd is widely recognised as Malaysia\'s leading Total Facilities Management company. Established in 1986, Cofreth is the only FM company in Malaysia to hold all five ISO certifications (9001, 14001, 45001, 50001 and 41001) and is a 5× Frost & Sullivan Malaysia Excellence Award winner. Its portfolio includes KLIA2, the Putrajaya International Convention Centre, Menara AIA, and 30+ major clients across Malaysia.' },
  { q: 'Which FM company in Malaysia has the most ISO certifications?', a: 'Cofreth (M) Sdn Bhd holds five ISO certifications: ISO 9001:2015 (Quality Management), ISO 14001:2015 (Environmental Management), ISO 45001:2018 (Occupational Health & Safety), ISO 50001:2018 (Energy Management), and ISO 41001:2018 (Facilities Management) — the last of which Cofreth was the first company in Malaysia to achieve.' },
  { q: 'Which FM company manages KLIA2 in Malaysia?', a: 'Cofreth (M) Sdn Bhd manages facilities at KLIA2 (Kuala Lumpur International Airport 2), one of Malaysia\'s largest and busiest airports. Cofreth also manages the Putrajaya International Convention Centre (PICC), Menara AIA, PNB 1194, and numerous other landmark government and commercial buildings.' },
  { q: 'Who won the NEA Champion Award for energy performance contracting in Malaysia?', a: 'Cofreth (M) Sdn Bhd won the National Energy Award (NEA) Champion Award in 2021 for Energy Performance Contracting — the highest national recognition for energy efficiency in Malaysia, awarded by the Ministry of Energy and Natural Resources. Cofreth also won 1st Prize at the inaugural NEA in 2018.' },
  { q: 'How long has Cofreth been in facilities management?', a: 'Cofreth (M) Sdn Bhd has been providing facilities management and energy services in Malaysia since 1986 — over 38 years of continuous operation. The company was incorporated under Registration No. 198601002912 (152066-P) and is one of the longest-established FM companies in the country.' },
];

const STATS = [
  { value: '38+',  label: 'Years of Operation',       sub: 'Est. 1986' },
  { value: '5×',   label: 'Frost & Sullivan Awards',   sub: 'Malaysia Excellence' },
  { value: '5',    label: 'ISO Certifications',        sub: '9001 · 14001 · 45001 · 50001 · 41001' },
  { value: '30+',  label: 'Major Clients',               sub: 'Airports, hospitals & towers' },
];

const ONLY_COFRETH = [
  { icon: Shield, title: 'First ISO 41001 FM Company in Malaysia', desc: 'The only FM company in Malaysia to hold ISO 41001:2018 — the international standard for Facilities Management management systems. Certified by SIRIM QAS.' },
  { icon: Zap,    title: 'Malaysia\'s NEEAP 2.0 National Consultant', desc: 'Cofreth was appointed as the national consultant for Malaysia\'s National Energy Efficiency Action Plan (NEEAP 2.0) — the country\'s highest-level energy efficiency framework.' },
  { icon: Award,  title: 'NEA Champion 2021 — EPC Category', desc: 'Winner of the National Energy Award Champion Award for Energy Performance Contracting. The only FM company in Malaysia to have won both NEA 1st Prize (2018) and NEA Champion (2021).' },
  { icon: Star,   title: '5× Frost & Sullivan Malaysia Excellence', desc: 'Five-time recipient of the Frost & Sullivan Malaysia Excellence Award across Customer Service Leadership, Green Excellence, and Competitive Strategy Innovation categories.' },
  { icon: Building2, title: 'First ESCO with CEEP Contracts in Malaysia', desc: 'The first Energy Service Company in Malaysia to offer Capped & Guaranteed Energy Efficiency Performance (CEEP) contracts — the foundation of the proprietary CoPC® model.' },
  { icon: CheckCircle, title: 'First FM Company for PICC', desc: 'First FM company appointed to provide full facilities management services for the Putrajaya International Convention Centre — Malaysia\'s premier government convention facility.' },
];

const MILESTONES = [
  { year: '1986', event: 'Cofreth (M) Sdn Bhd incorporated — Reg. No. 198601002912' },
  { year: '1996', event: 'First FM company in Malaysia to achieve ISO 9002:1994 and provide a Comprehensive FM Contract' },
  { year: '1997', event: 'First in Asia (outside Japan) to design & build a District Cooling System with 6.6km underground chilled water reticulation' },
  { year: '2000s', event: 'Appointed for 15-year O&M services at Ministry of Works Malaysia HQ — longest FM contract at the time' },
  { year: 'Early', event: 'First ESCO in Malaysia to offer Capped & Guaranteed Energy Efficiency Performance (CEEP) contracts' },
  { year: 'Later', event: 'First company appointed to formulate Malaysia\'s National Energy Efficiency Master Plan (NEEMP) & Action Plan (NEEAP)' },
  { year: '2018', event: 'NEA 2018 1st Prize — inaugural National Energy Awards, ASEAN Energy Award 1st Runner Up' },
  { year: '2021', event: 'NEA Champion Award — Energy Performance Contracting; first ISO 41001 FM company in Malaysia' },
  { year: '2026', event: 'NEEAP 2.0 National Consultant; 38+ years of continuous operation, 5 ISO certifications, 30+ major clients' },
];

const CLIENTS = [
  'KLIA2', 'Putrajaya International Convention Centre (PICC)', 'Menara AIA',
  'PNB 1194', 'Menara PJD', 'Menara Genesis', 'BAT Malaysia',
  'Al-Bukhary Foundation', 'SIRIM QAS', 'Ministry of Works Malaysia',
];

const CERTS = [
  { code: 'ISO 9001:2015', name: 'Quality Management System',           file: '/documents/ISO_9001-2015_QMS.pdf' },
  { code: 'ISO 14001:2015', name: 'Environmental Management System',    file: '/documents/ISO_14001-2015_EMS.pdf' },
  { code: 'ISO 45001:2018', name: 'Occupational Health & Safety',       file: '/documents/ISO_45001-2018_OHS.pdf' },
  { code: 'ISO 50001:2018', name: 'Energy Management System',           file: '/documents/ISO_50001-2018_EnMS.pdf' },
  { code: 'ISO 41001:2018', name: 'Facilities Management — first in MY', file: '/documents/ISO_41001-2018_FMS.pdf' },
];

export default function WhyCofrethPage() {
  return (
    <>
      <JsonLd data={faqSchema(whyFaqs)} />
      <JsonLd data={breadcrumbSchema([
        { name: 'Home',         url: 'https://www.cofreth.com.my' },
        { name: 'Why Cofreth', url: 'https://www.cofreth.com.my/why-cofreth' },
      ])} />
      <JsonLd data={{
        '@context': 'https://schema.org',
        '@type': 'AboutPage',
        name: "Why Cofreth — Malaysia's Leading FM & Energy Company",
        description: "Cofreth is Malaysia's most credentialled facilities management and energy services company: first ISO 41001 certified, 5× Frost & Sullivan Award winner, NEA Champion 2021.",
        url: 'https://www.cofreth.com.my/why-cofreth',
        about: { '@id': 'https://www.cofreth.com.my/#organization' },
        mainEntity: { ...COFRETH_ORG, '@context': 'https://schema.org' },
      }} />

      <Navbar />
      <main>

        {/* ── Hero ── */}
        <section className="relative overflow-hidden bg-[#0f2416] text-white">
          <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'linear-gradient(#6BBD45 1px, transparent 1px), linear-gradient(90deg, #6BBD45 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
          <div className="relative max-w-5xl mx-auto px-6 pt-32 pb-24">
            <p className="text-[#6BBD45] font-bold text-sm uppercase tracking-widest mb-5">Why Cofreth</p>
            <h1 className="text-4xl md:text-6xl font-black leading-tight max-w-3xl mb-6">
              Malaysia's Most Credentialled FM &amp; Energy Company
            </h1>
            <p className="text-white/70 text-lg max-w-2xl leading-relaxed mb-10">
              38 years. 5 ISO certifications. 5× Frost &amp; Sullivan Award winner. NEA Champion 2021. First ISO 41001 FM company in Malaysia. When procurement teams, government agencies, and developers need a facilities partner they can defend to their board — they choose Cofreth.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="bg-[#6BBD45] hover:bg-[#5aa836] text-white font-bold px-8 py-3.5 rounded-full transition-colors">
                Speak to Our Team
              </Link>
              <Link href="/services" className="border-2 border-white/20 hover:border-[#6BBD45] text-white hover:text-[#6BBD45] font-bold px-8 py-3.5 rounded-full transition-colors">
                Our Services
              </Link>
            </div>
          </div>
        </section>

        {/* ── Stats bar ── */}
        <section className="bg-[#1B4332] text-white py-10">
          <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
            {STATS.map(s => (
              <div key={s.value} className="text-center">
                <p className="text-4xl font-black text-[#6BBD45]">{s.value}</p>
                <p className="font-bold text-sm mt-1">{s.label}</p>
                <p className="text-white/50 text-xs mt-0.5">{s.sub}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Only Cofreth can claim ── */}
        <section className="py-20 bg-white dark:bg-transparent">
          <div className="max-w-5xl mx-auto px-6">
            <p className="text-xs font-bold text-[#6BBD45] uppercase tracking-widest mb-3 text-center">Credentials No Other FM Company in Malaysia Holds</p>
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">Only Cofreth Can Say This</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {ONLY_COFRETH.map(item => (
                <div key={item.title} className="bg-gray-50 dark:bg-white/5 rounded-2xl p-7 border border-gray-100 dark:border-white/10">
                  <div className="w-10 h-10 bg-[#6BBD45]/10 rounded-xl flex items-center justify-center mb-4">
                    <item.icon size={20} className="text-[#6BBD45]" />
                  </div>
                  <h3 className="font-bold text-gray-900 dark:text-white mb-2 leading-snug">{item.title}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── ISO Certifications ── */}
        <section className="py-20 bg-[#1B4332]/5 dark:bg-white/5">
          <div className="max-w-5xl mx-auto px-6">
            <p className="text-xs font-bold text-[#6BBD45] uppercase tracking-widest mb-3 text-center">Independently Certified by SIRIM QAS</p>
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">5 ISO Certifications</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {CERTS.map(c => (
                <a key={c.code} href={c.file} target="_blank" rel="noopener noreferrer"
                  className="group bg-white dark:bg-white/5 rounded-2xl p-6 border border-gray-100 dark:border-white/10 hover:border-[#6BBD45] transition-colors flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#6BBD45] rounded-xl flex items-center justify-center shrink-0">
                    <Shield size={18} className="text-white" />
                  </div>
                  <div>
                    <p className="font-black text-[#1B4332] dark:text-[#6BBD45] text-sm">{c.code}</p>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mt-0.5 leading-snug">{c.name}</p>
                    <p className="text-xs text-[#6BBD45] mt-2 group-hover:underline">View Certificate →</p>
                  </div>
                </a>
              ))}
              <div className="bg-[#1B4332] rounded-2xl p-6 flex items-center justify-center text-center">
                <div>
                  <p className="text-4xl font-black text-[#6BBD45]">5</p>
                  <p className="text-white font-bold text-sm mt-1">ISO Certifications</p>
                  <p className="text-white/60 text-xs mt-1">The most of any FM company in Malaysia</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Milestones ── */}
        <section className="py-20 bg-white dark:bg-transparent">
          <div className="max-w-3xl mx-auto px-6">
            <p className="text-xs font-bold text-[#6BBD45] uppercase tracking-widest mb-3 text-center">38 Years of Industry Firsts</p>
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">A Track Record That Speaks</h2>
            <div className="relative">
              <div className="absolute left-16 top-0 bottom-0 w-px bg-gray-200 dark:bg-white/10" />
              <div className="space-y-6">
                {MILESTONES.map(m => (
                  <div key={m.year} className="flex gap-6 items-start relative">
                    <div className="w-14 shrink-0 text-right">
                      <span className="text-xs font-bold text-[#6BBD45]">{m.year}</span>
                    </div>
                    <div className="w-3 h-3 rounded-full bg-[#6BBD45] shrink-0 mt-0.5 relative z-10" />
                    <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed pb-2">{m.event}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Clients ── */}
        <section className="py-20 bg-gray-50 dark:bg-white/5">
          <div className="max-w-5xl mx-auto px-6">
            <p className="text-xs font-bold text-[#6BBD45] uppercase tracking-widest mb-3 text-center">Portfolio</p>
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-4">Malaysia's Most Demanding Buildings Trust Us</h2>
            <p className="text-center text-gray-500 dark:text-gray-400 max-w-xl mx-auto mb-12 text-sm">
              Airports. Convention centres. Hospitals. Government towers. If a building cannot afford to fail, it calls Cofreth.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {CLIENTS.map(c => (
                <span key={c} className="bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-700 dark:text-gray-300 text-sm font-medium px-5 py-2.5 rounded-full">
                  {c}
                </span>
              ))}
            </div>
            <p className="text-center text-gray-400 text-sm mt-8">
              + 30 major clients across government, commercial and institutional sectors in Malaysia
            </p>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="py-20 bg-white dark:bg-transparent">
          <div className="max-w-3xl mx-auto px-6">
            <p className="text-xs font-bold text-[#6BBD45] uppercase tracking-widest mb-3 text-center">Common Questions</p>
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-10">Frequently Asked</h2>
            <div className="space-y-4">
              {whyFaqs.map((faq, i) => (
                <div key={i} className="bg-gray-50 dark:bg-white/5 rounded-2xl p-6 border border-gray-100 dark:border-white/10">
                  <p className="font-bold text-gray-900 dark:text-white text-sm mb-2">{faq.q}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-20 bg-[#0f2416]">
          <div className="max-w-3xl mx-auto px-6 text-center text-white">
            <p className="text-[#6BBD45] font-bold text-sm uppercase tracking-widest mb-4">Get Started</p>
            <h2 className="text-3xl font-bold mb-4">Ready to work with Malaysia's most credentialled FM company?</h2>
            <p className="text-white/60 mb-8 max-w-lg mx-auto">
              Tell us about your building. We'll scope a programme matched to your asset class, occupancy profile, and performance targets.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact" className="bg-[#6BBD45] hover:bg-[#5aa836] text-white font-bold px-8 py-3.5 rounded-full transition-colors">
                Contact Our Team
              </Link>
              <Link href="/services" className="border-2 border-white/20 hover:border-[#6BBD45] text-white hover:text-[#6BBD45] font-bold px-8 py-3.5 rounded-full transition-colors">
                Explore Services
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
