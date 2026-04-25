'use client';
import Link from 'next/link';
import { Award, Star, ArrowRight, Trophy, CheckCircle } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const frostSullivan = [
  {
    year: '2017',
    title: 'Malaysia Excellence Award',
    category: 'Facility Management Services — Company of the Year',
    body: 'Frost & Sullivan',
    note: '5th consecutive recognition — cementing Cofreth as Malaysia\'s undisputed FM leader.',
    highlight: true,
  },
  {
    year: '2016',
    title: 'Malaysia Excellence Award',
    category: 'Facility Management Services — Company of the Year',
    body: 'Frost & Sullivan',
    note: '4th consecutive win, recognising sustained leadership and operational excellence.',
    highlight: false,
  },
  {
    year: '2015',
    title: 'Malaysia Excellence Award',
    category: 'Facility Management Services — Company of the Year',
    body: 'Frost & Sullivan',
    note: 'Third recognition, affirming Cofreth\'s position at the forefront of Malaysian FM.',
    highlight: false,
  },
  {
    year: '2010',
    title: 'Malaysia Excellence Award',
    category: 'Facility Management Services — Company of the Year',
    body: 'Frost & Sullivan',
    note: 'Second win confirming Cofreth\'s track record of excellence through the decade.',
    highlight: false,
  },
  {
    year: '2007',
    title: 'Malaysia Excellence Award',
    category: 'Facility Management Services — Company of the Year',
    body: 'Frost & Sullivan',
    note: 'Inaugural recognition — the first of five consecutive Malaysia Excellence Awards.',
    highlight: false,
  },
];

const otherAwards = [
  {
    icon: '🏆',
    title: 'National Energy Award (NEA) — Champion',
    year: '2021',
    body: 'Ministry of Natural Resources, Environment and Climate Change',
    desc: 'Cofreth was crowned NEA Champion 2021, Malaysia\'s highest national honour for energy efficiency and conservation excellence. This award recognises organisations that have achieved outstanding results in energy management and consumption reduction.',
    color: '#f59e0b',
  },
  {
    icon: '🌟',
    title: 'ASEAN Energy Award',
    year: 'Multiple Years',
    body: 'ASEAN Centre for Energy (ACE)',
    desc: 'Regional recognition from the ASEAN Centre for Energy for outstanding energy efficiency initiatives and energy management programmes across Southeast Asia — positioning Cofreth as a regional leader in sustainable energy services.',
    color: '#6BBD45',
  },
  {
    icon: '🎖️',
    title: 'BrandLaureate SMEs Best Brands Award',
    year: 'Multiple Years',
    body: 'Asia Pacific Brands Foundation',
    desc: 'The BrandLaureate award recognises exceptional brand-building excellence among Malaysian SMEs. Cofreth\'s recognition reflects the strength of its brand identity, market leadership and commitment to quality service delivery.',
    color: '#8b5cf6',
  },
  {
    icon: '⭐',
    title: 'SME Icons Award',
    year: 'Multiple Years',
    body: 'SME Corporation Malaysia',
    desc: 'Recognised as one of Malaysia\'s iconic SMEs, Cofreth exemplifies the growth, resilience and innovation that defines Malaysia\'s most distinguished small-to-medium enterprises — acknowledged for sustained business performance and industry leadership.',
    color: '#3b82f6',
  },
];

const isoList = [
  { code: 'ISO 9001:2015', label: 'Quality Management System', icon: '✓', desc: 'Internationally recognised standard for quality management — ensuring consistent, customer-focused service delivery across all Cofreth operations.' },
  { code: 'ISO 14001:2015', label: 'Environmental Management System', icon: '🌿', desc: 'Demonstrates Cofreth\'s commitment to reducing environmental impact and continually improving its environmental performance.' },
  { code: 'ISO 45001:2018', label: 'Occupational Health & Safety', icon: '🛡️', desc: 'The world\'s leading international standard for occupational health and safety management, protecting Cofreth\'s workforce and stakeholders.' },
  { code: 'ISO 50001:2018', label: 'Energy Management System', icon: '⚡', desc: 'Confirms Cofreth\'s systematic approach to monitoring, measuring and improving energy performance — backed by data and continuously verified.' },
  { code: 'ISO 41001:2018', label: 'Facility Management System', icon: '🏢', desc: 'The international standard for Facility Management systems — Cofreth is among the first in Malaysia to achieve this landmark certification, setting a new industry benchmark.' },
];

function AwardCard({ award, i }: { award: typeof frostSullivan[0]; i: number }) {
  const reveal = useScrollReveal(0.05);
  return (
    <div ref={reveal.ref}
      className="relative transition-all duration-700"
      style={{ opacity: reveal.visible ? 1 : 0, transform: reveal.visible ? 'none' : 'translateY(30px)', transitionDelay: `${i * 80}ms` }}>
      <div className={`rounded-2xl p-6 border h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
        award.highlight
          ? 'bg-gradient-to-br from-[#1B3A2D] to-[#0F2419] border-[#6BBD45]/40 text-white'
          : 'bg-white border-gray-100 hover:border-[#6BBD45]/30'
      }`}>
        {award.highlight && (
          <div className="absolute -top-3 left-6">
            <span className="bg-[#6BBD45] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest">Milestone Award</span>
          </div>
        )}
        <div className="flex items-start justify-between gap-3 mb-4">
          <span className={`text-4xl font-black ${award.highlight ? 'text-[#6BBD45]' : 'text-[#6BBD45]'}`}>{award.year}</span>
          <Trophy size={22} className={award.highlight ? 'text-[#6BBD45]' : 'text-gray-300'} />
        </div>
        <div className={`text-xs font-bold tracking-widest uppercase mb-1 ${award.highlight ? 'text-[#6BBD45]/70' : 'text-gray-400'}`}>{award.body}</div>
        <h3 className={`font-bold text-base mb-1 ${award.highlight ? 'text-white' : 'text-[#1B3A2D]'}`}>{award.title}</h3>
        <p className={`text-xs mb-3 ${award.highlight ? 'text-gray-400' : 'text-gray-500'}`}>{award.category}</p>
        <p className={`text-xs leading-relaxed border-t pt-3 ${award.highlight ? 'text-gray-400 border-white/10' : 'text-gray-500 border-gray-100'}`}>{award.note}</p>
      </div>
    </div>
  );
}

function OtherAwardCard({ award, i }: { award: typeof otherAwards[0]; i: number }) {
  const reveal = useScrollReveal(0.05);
  return (
    <div ref={reveal.ref}
      className="transition-all duration-700"
      style={{ opacity: reveal.visible ? 1 : 0, transform: reveal.visible ? 'none' : 'translateY(30px)', transitionDelay: `${i * 90}ms` }}>
      <div className="bg-white border border-gray-100 hover:border-[#6BBD45]/30 rounded-2xl p-7 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full">
        <div className="flex items-start gap-4 mb-4">
          <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl shrink-0" style={{ background: award.color + '18' }}>
            {award.icon}
          </div>
          <div>
            <span className="text-xs font-bold tracking-widest uppercase text-gray-400">{award.year}</span>
            <h3 className="font-bold text-[#1B3A2D] text-base leading-snug mt-0.5">{award.title}</h3>
          </div>
        </div>
        <p className="text-xs text-[#6BBD45] font-semibold mb-3">{award.body}</p>
        <p className="text-sm text-gray-500 leading-relaxed">{award.desc}</p>
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
      <div className="group bg-white/5 border border-white/10 hover:border-[#6BBD45]/50 hover:bg-white/10 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 h-full">
        <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300 inline-block">{cert.icon}</div>
        <div className="text-[#6BBD45] font-bold text-sm mb-1">{cert.code}</div>
        <div className="text-white font-semibold text-sm mb-2">{cert.label}</div>
        <p className="text-gray-400 text-xs leading-relaxed">{cert.desc}</p>
      </div>
    </div>
  );
}

export default function AwardsPage() {
  const hero = useScrollReveal();
  const intro = useScrollReveal();

  return (
    <>
      {/* Hero */}
      <div className="pt-32 pb-20 text-white relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #060e08 0%, #0F2419 50%, #060e08 100%)' }}>
        <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: 'linear-gradient(#6BBD45 1px, transparent 1px), linear-gradient(90deg, #6BBD45 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(107,189,69,0.12) 0%, transparent 70%)' }} />
        <div className="absolute bottom-0 left-1/4 w-64 h-64 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(107,189,69,0.08) 0%, transparent 70%)' }} />

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
            Independently verified. Industry recognised. Over 38 years of awards from Malaysia's most prestigious bodies — a testament to our unwavering commitment to excellence.
          </p>
          {/* Award counts */}
          <div className="flex flex-wrap justify-center gap-6">
            {[['5×', 'Frost & Sullivan Awards'], ['1st', 'NEA Champion 2021'], ['4+', 'Other Industry Awards'], ['5', 'ISO Certifications']].map(([v, l]) => (
              <div key={l} className="bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-center min-w-[120px]">
                <div className="text-2xl font-black text-[#6BBD45]">{v}</div>
                <div className="text-xs text-gray-400 mt-1">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Frost & Sullivan section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div ref={intro.ref} className="text-center mb-14 transition-all duration-700"
            style={{ opacity: intro.visible ? 1 : 0, transform: intro.visible ? 'none' : 'translateY(30px)' }}>
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-0.5 bg-[#6BBD45]" />
              <span className="text-[#6BBD45] text-sm font-semibold tracking-widest uppercase">Industry Leadership</span>
              <div className="w-8 h-0.5 bg-[#6BBD45]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-[#1B3A2D] mb-4">Frost & Sullivan Malaysia<br />Excellence Awards</h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-sm leading-relaxed">
              The Frost & Sullivan Malaysia Excellence Award is one of the most prestigious business honours in the Asia Pacific region. Cofreth has won this award <strong className="text-[#1B3A2D]">five times</strong> in the Facility Management Services — Company of the Year category, an achievement unmatched in the Malaysian FM industry.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {frostSullivan.map((a, i) => <AwardCard key={a.year} award={a} i={i} />)}
          </div>

          {/* Quote strip */}
          <div className="mt-12 bg-gradient-to-r from-[#1B3A2D] to-[#0F2419] rounded-2xl p-8 text-center text-white border border-[#6BBD45]/20">
            <Star size={32} className="text-[#6BBD45] mx-auto mb-4" />
            <blockquote className="text-lg font-medium text-gray-200 max-w-2xl mx-auto leading-relaxed italic">
              "Cofreth has demonstrated consistent best practices and operational excellence, setting the benchmark for the facilities management industry in Malaysia."
            </blockquote>
            <p className="text-[#6BBD45] text-sm font-semibold mt-4">— Frost & Sullivan Malaysia</p>
          </div>
        </div>
      </section>

      {/* Other awards */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-0.5 bg-[#6BBD45]" />
              <span className="text-[#6BBD45] text-sm font-semibold tracking-widest uppercase">National & Regional Honours</span>
              <div className="w-8 h-0.5 bg-[#6BBD45]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-[#1B3A2D]">More Awards & Recognition</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {otherAwards.map((a, i) => <OtherAwardCard key={a.title} award={a} i={i} />)}
          </div>
        </div>
      </section>

      {/* ISO Certifications */}
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
              Cofreth holds five internationally recognised ISO certifications — independently audited and continuously maintained to the highest global standards across quality, environment, safety, energy and facility management.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {isoList.map((c, i) => <ISOCard key={c.code} cert={c} i={i} />)}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <Award size={40} className="text-[#6BBD45] mx-auto mb-5" />
          <h2 className="text-2xl md:text-3xl font-black text-[#1B3A2D] mb-4">Work with an Award-Winning FM Partner</h2>
          <p className="text-gray-500 mb-8 leading-relaxed">
            Our awards and certifications aren't just trophies — they're proof of the systems, processes and people behind every project we deliver.
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
