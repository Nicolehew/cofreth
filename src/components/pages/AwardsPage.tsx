'use client';
import Link from 'next/link';
import { ArrowRight, Award } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

/* ── Exact data from cofreth.com.my/awards.php ── */
const frostSullivan = [
  {
    year: '2007',
    image: '/awards/fs-2007.png',
    title: 'Frost & Sullivan Malaysia Excellence Award',
    category: 'Customer Service Leadership Award',
    detail: 'Integrated Facilities Management Service Market',
    body: 'Frost & Sullivan',
  },
  {
    year: '2010',
    image: '/awards/fs-2010.png',
    title: 'Frost & Sullivan Malaysia Green Excellence Award',
    category: 'Facilities Management Company of the Year',
    detail: 'Malaysia Green Excellence Awards',
    body: 'Frost & Sullivan',
  },
  {
    year: '2015',
    image: '/awards/fs-2015.png',
    title: 'Frost & Sullivan Malaysia Excellence Award',
    category: 'Customer Service Leadership Award',
    detail: 'Integrated Facilities Management',
    body: 'Frost & Sullivan',
  },
  {
    year: '2016',
    image: '/awards/fs-2016.png',
    title: 'Frost & Sullivan Malaysia Excellence Award',
    category: 'Competitive Strategy Innovation & Leadership Award',
    detail: 'Facilities Management',
    body: 'Frost & Sullivan',
  },
];

const otherAwards = [
  {
    image: '/awards/brandlaureate.png',
    title: 'BrandLaureate SMEs BestBrands Award',
    year: '2016 – 2017',
    body: 'Asia Pacific Brands Foundation',
    category: 'Industrial Facilities Management',
    desc: 'Cofreth was honoured with the prestigious BrandLaureate SMEs BestBrands Award in the Industrial Facilities Management category — recognising exceptional brand excellence and market leadership among Malaysian SMEs.',
    landscape: false,
  },
  {
    image: '/awards/sme-icons.jpg',
    title: 'SME Icons Award',
    year: '2018',
    body: 'Malaysian Service Providers Confederation',
    category: 'Recognition of Leaders in Service Sectors',
    desc: 'Recognised as one of Malaysia\'s SME Icons — an honour bestowed by the Malaysian Service Providers Confederation to organisations that exemplify leadership, resilience and excellence in service delivery.',
    landscape: true,
  },
  {
    image: '/awards/nea-2018.jpeg',
    title: 'National Energy Award (NEA) — Winner',
    year: '2018',
    body: 'Ministry of Energy, Science, Technology, Environment & Climate Change',
    category: 'Category 1 – Energy Efficiency (Energy Management in Small & Medium Building)',
    desc: 'Cofreth (M) Sdn Bhd HQ was crowned Winner at Malaysia\'s National Energy Awards 2018 — the nation\'s most prestigious energy honour, recognising outstanding energy efficiency and management practices.',
    landscape: false,
  },
];

const isoList = [
  { code: 'ISO 9001:2015',  label: 'Quality Management System',        icon: '✓' },
  { code: 'ISO 14001:2015', label: 'Environmental Management System',   icon: '🌿' },
  { code: 'ISO 45001:2018', label: 'Occupational Health & Safety',      icon: '🛡️' },
  { code: 'ISO 50001:2018', label: 'Energy Management System',          icon: '⚡' },
  { code: 'ISO 41001:2018', label: 'Facility Management System',        icon: '🏢' },
];

function FSCard({ award, i }: { award: typeof frostSullivan[0]; i: number }) {
  const reveal = useScrollReveal(0.05);
  return (
    <div ref={reveal.ref}
      className="transition-all duration-700 group"
      style={{ opacity: reveal.visible ? 1 : 0, transform: reveal.visible ? 'none' : 'translateY(30px)', transitionDelay: `${i * 100}ms` }}>
      <div className="bg-white border border-gray-100 rounded-3xl overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-400 h-full flex flex-col">
        {/* Award photo */}
        <div className="relative h-56 overflow-hidden bg-gray-900">
          <img
            src={award.image}
            alt={`${award.title} ${award.year}`}
            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          {/* Year badge */}
          <div className="absolute top-4 left-4 bg-[#6BBD45] text-white font-black text-lg px-4 py-1.5 rounded-full shadow-lg">
            {award.year}
          </div>
        </div>
        {/* Content */}
        <div className="p-6 flex flex-col flex-1">
          <p className="text-xs font-bold text-[#6BBD45] tracking-widest uppercase mb-2">{award.body}</p>
          <h3 className="font-black text-[#1B3A2D] text-base leading-snug mb-1">{award.title}</h3>
          <p className="text-sm font-semibold text-gray-700 mb-1">{award.category}</p>
          <p className="text-xs text-gray-400 mt-auto pt-3 border-t border-gray-100">{award.detail}</p>
        </div>
      </div>
    </div>
  );
}

function OtherCard({ award, i }: { award: typeof otherAwards[0]; i: number }) {
  const reveal = useScrollReveal(0.05);
  return (
    <div ref={reveal.ref}
      className="transition-all duration-700 group"
      style={{ opacity: reveal.visible ? 1 : 0, transform: reveal.visible ? 'none' : 'translateY(30px)', transitionDelay: `${i * 120}ms` }}>
      <div className="bg-white border border-gray-100 rounded-3xl overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-400 h-full flex flex-col">
        {/* Award photo */}
        <div className={`relative overflow-hidden bg-gray-900 ${award.landscape ? 'h-52' : 'h-64'}`}>
          <img
            src={award.image}
            alt={award.title}
            className={`w-full h-full transition-transform duration-700 group-hover:scale-105 ${
              award.landscape ? 'object-cover object-center' : 'object-contain object-center bg-white'
            }`}
          />
          {award.landscape && <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />}
          <div className="absolute top-4 left-4 bg-white/90 backdrop-blur text-[#1B3A2D] font-black text-sm px-3 py-1 rounded-full shadow">
            {award.year}
          </div>
        </div>
        {/* Content */}
        <div className="p-6 flex flex-col flex-1">
          <p className="text-xs font-bold text-[#6BBD45] tracking-widest uppercase mb-2">{award.body}</p>
          <h3 className="font-black text-[#1B3A2D] text-base leading-snug mb-2">{award.title}</h3>
          <p className="text-xs font-semibold text-gray-500 bg-gray-50 rounded-lg px-3 py-1.5 inline-self-start mb-3">{award.category}</p>
          <p className="text-sm text-gray-500 leading-relaxed flex-1">{award.desc}</p>
        </div>
      </div>
    </div>
  );
}

function ISOCard({ cert, i }: { cert: typeof isoList[0]; i: number }) {
  const reveal = useScrollReveal(0.05);
  return (
    <div ref={reveal.ref}
      className="transition-all duration-700"
      style={{ opacity: reveal.visible ? 1 : 0, transform: reveal.visible ? 'none' : 'translateY(30px)', transitionDelay: `${i * 80}ms` }}>
      <div className="group bg-white/5 border border-white/10 hover:border-[#6BBD45]/50 hover:bg-white/10 rounded-2xl p-6 text-center transition-all duration-300 hover:-translate-y-1 h-full">
        <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300 inline-block">{cert.icon}</div>
        <div className="text-[#6BBD45] font-bold text-sm mb-1">{cert.code}</div>
        <div className="text-white font-semibold text-xs leading-relaxed">{cert.label}</div>
      </div>
    </div>
  );
}

export default function AwardsPage() {
  const hero = useScrollReveal();
  const fsTitle = useScrollReveal();
  const otherTitle = useScrollReveal();

  return (
    <>
      {/* ── Hero ── */}
      <div className="pt-24 md:pt-32 pb-12 md:pb-20 text-white relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #060e08 0%, #0F2419 50%, #060e08 100%)' }}>
        <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: 'linear-gradient(#6BBD45 1px, transparent 1px), linear-gradient(90deg, #6BBD45 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(107,189,69,0.12) 0%, transparent 70%)' }} />

        <div ref={hero.ref} className="max-w-4xl mx-auto px-6 text-center transition-all duration-700"
          style={{ opacity: hero.visible ? 1 : 0, transform: hero.visible ? 'none' : 'translateY(30px)' }}>
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="w-10 h-px bg-[#6BBD45]" />
            <span className="text-[#6BBD45] text-sm font-bold tracking-widest uppercase">Recognition & Excellence</span>
            <div className="w-10 h-px bg-[#6BBD45]" />
          </div>
          <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
            Awards &<br /><span className="text-[#6BBD45]">Recognition</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed mb-10">
            Independently verified. Industry recognised. A proud collection of Malaysia's most prestigious awards — earned through decades of uncompromising excellence in facilities management and energy services.
          </p>
          {/* Counts */}
          <div className="grid grid-cols-2 sm:flex sm:flex-wrap justify-center gap-4 sm:gap-6 max-w-sm sm:max-w-none mx-auto">
            {[['4×', 'Frost & Sullivan Awards'], ['NEA', 'Winner 2018'], ['SME Icons', '2018'], ['BrandLaureate', '2016–2017']].map(([v, l]) => (
              <div key={l} className="bg-white/5 border border-white/10 rounded-2xl py-4 px-3 sm:px-5 text-center">
                <div className="text-xl font-black text-[#6BBD45]">{v}</div>
                <div className="text-xs text-gray-400 mt-1">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Frost & Sullivan ── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div ref={fsTitle.ref} className="text-center mb-14 transition-all duration-700"
            style={{ opacity: fsTitle.visible ? 1 : 0, transform: fsTitle.visible ? 'none' : 'translateY(30px)' }}>
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-0.5 bg-[#6BBD45]" />
              <span className="text-[#6BBD45] text-sm font-semibold tracking-widest uppercase">Industry Leadership</span>
              <div className="w-8 h-0.5 bg-[#6BBD45]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-[#1B3A2D] mb-4">
              Frost & Sullivan<br />Malaysia Excellence Awards
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-sm leading-relaxed">
              One of the most prestigious business honours in Asia Pacific, Cofreth has been recognised by Frost & Sullivan
              <strong className="text-[#1B3A2D]"> four times</strong> — in 2007, 2010, 2015 and 2016 — across different
              award categories in the Facilities Management sector.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {frostSullivan.map((a, i) => <FSCard key={a.year} award={a} i={i} />)}
          </div>
        </div>
      </section>

      {/* ── Other Awards ── */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div ref={otherTitle.ref} className="text-center mb-14 transition-all duration-700"
            style={{ opacity: otherTitle.visible ? 1 : 0, transform: otherTitle.visible ? 'none' : 'translateY(30px)' }}>
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-0.5 bg-[#6BBD45]" />
              <span className="text-[#6BBD45] text-sm font-semibold tracking-widest uppercase">National Honours</span>
              <div className="w-8 h-0.5 bg-[#6BBD45]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-[#1B3A2D]">More Awards & Recognition</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherAwards.map((a, i) => <OtherCard key={a.title} award={a} i={i} />)}
          </div>
        </div>
      </section>

      {/* ── ISO Certifications ── */}
      <section className="py-20" style={{ background: 'linear-gradient(135deg, #060e08 0%, #0F2419 60%, #060e08 100%)' }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-0.5 bg-[#6BBD45]" />
              <span className="text-[#6BBD45] text-sm font-semibold tracking-widest uppercase">International Standards</span>
              <div className="w-8 h-0.5 bg-[#6BBD45]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">5× ISO Certified</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-sm leading-relaxed">
              Independently audited and continuously maintained to the highest global standards across quality, environment, safety, energy and facility management.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {isoList.map((c, i) => <ISOCard key={c.code} cert={c} i={i} />)}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <Award size={40} className="text-[#6BBD45] mx-auto mb-5" />
          <h2 className="text-2xl md:text-3xl font-black text-[#1B3A2D] mb-4">Work with an Award-Winning FM Partner</h2>
          <p className="text-gray-500 mb-8 leading-relaxed text-sm max-w-xl mx-auto">
            Our awards reflect the systems, processes and people behind every project. Let us put that proven expertise to work for your facility.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-[#6BBD45] hover:bg-[#5aa838] text-white font-bold px-10 py-4 rounded-full transition-all hover:-translate-y-0.5 shadow-lg">
              Get In Touch <ArrowRight size={18} />
            </Link>
            <Link href="/services" className="inline-flex items-center justify-center gap-2 border-2 border-[#1B3A2D] text-[#1B3A2D] hover:border-[#6BBD45] hover:text-[#6BBD45] font-bold px-10 py-4 rounded-full transition-all hover:-translate-y-0.5">
              Our Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
