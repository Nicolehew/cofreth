'use client';
import Link from 'next/link';
import { ArrowRight, ExternalLink, Building2, Zap, Cpu, Globe } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const partners = [
  {
    id: 1,
    name: 'Best Energy Saving Solutions',
    short: 'BESS',
    tagline: 'Energy-Efficient Products & Equipment',
    icon: Zap,
    color: '#f59e0b',
    bgColor: 'rgba(245,158,11,0.08)',
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80&fit=crop',
    desc: 'Best Energy Saving Solutions (BESS) is Cofreth\'s strategic partner for sourcing and supplying energy-efficient products, systems and equipment. Working hand-in-hand with Cofreth\'s ESCO operations, BESS ensures that every energy conservation measure (ECM) is backed by the highest quality, proven technology.',
    capabilities: [
      'Energy-efficient HVAC systems & components',
      'LED lighting & smart controls',
      'Variable Speed Drives (VSDs) & motor systems',
      'Building energy monitoring hardware',
      'Renewable energy equipment sourcing',
      'Energy storage solutions',
    ],
    synergy: 'Cofreth designs and manages the energy programmes; BESS supplies the technology — a seamless end-to-end solution for clients seeking guaranteed energy savings.',
  },
  {
    id: 2,
    name: 'GIS-BIM Associates',
    short: 'GIS-BIM',
    tagline: 'Geospatial & Building Information Modelling',
    icon: Globe,
    color: '#6BBD45',
    bgColor: 'rgba(107,189,69,0.08)',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80&fit=crop',
    desc: 'GIS-BIM Associates brings cutting-edge geospatial intelligence and Building Information Modelling (BIM) expertise to the Cofreth group. This partnership enables Cofreth to offer sophisticated digital twin solutions, spatial data analysis, and model-based facility management for complex built environments.',
    capabilities: [
      'Building Information Modelling (BIM) implementation',
      'Digital twin creation for facilities',
      'GIS spatial data integration & mapping',
      'As-built documentation & 3D modelling',
      'Infrastructure asset mapping & management',
      'BIM-enabled FM operations (BIM-FM)',
    ],
    synergy: 'By embedding GIS and BIM into FM delivery, Cofreth clients gain real-time spatial visibility of their assets — enabling smarter maintenance decisions and true lifecycle cost management.',
  },
  {
    id: 3,
    name: 'Archibus / ASCHT',
    short: 'ARCHIBUS',
    tagline: 'Integrated Workplace Management System (IWMS)',
    icon: Cpu,
    color: '#3b82f6',
    bgColor: 'rgba(59,130,246,0.08)',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80&fit=crop',
    desc: 'Through its partnership with ASCHT, an authorised Archibus reseller and implementation partner, Cofreth delivers world-class Integrated Workplace Management System (IWMS) solutions. Archibus is the global gold standard for FM software — trusted by major corporations, government agencies and institutions worldwide.',
    capabilities: [
      'Archibus IWMS implementation & customisation',
      'Space & occupancy management',
      'Move management & space planning',
      'Asset & maintenance management (CMMS)',
      'Real estate portfolio management',
      'Environmental & sustainability reporting',
    ],
    synergy: 'Cofreth combines its deep FM expertise with Archibus technology to deliver intelligent, data-driven facility management — reducing operational costs and elevating the client experience.',
  },
];

const groupFacts = [
  { value: '3', label: 'Strategic Partners' },
  { value: '38+', label: 'Combined FM Years' },
  { value: '360°', label: 'FM Solution Coverage' },
  { value: 'ASEAN', label: 'Regional Reach' },
];

function PartnerCard({ partner, i }: { partner: typeof partners[0]; i: number }) {
  const reveal = useScrollReveal(0.05);
  const Icon = partner.icon;
  const isReversed = i % 2 !== 0;

  return (
    <div ref={reveal.ref} className="transition-all duration-700"
      style={{ opacity: reveal.visible ? 1 : 0, transform: reveal.visible ? 'none' : 'translateY(40px)', transitionDelay: `${i * 100}ms` }}>
      <div className={`grid lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl transition-shadow duration-500 ${isReversed ? 'lg:flex-row-reverse' : ''}`}>
        {/* Image panel */}
        <div className={`relative h-64 lg:h-auto ${isReversed ? 'lg:order-2' : ''}`}>
          <img src={partner.image} alt={partner.name} className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(4,12,8,0.3) 0%, rgba(4,12,8,0.75) 100%)' }} />
          <div className="absolute bottom-6 left-6 right-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: partner.color }}>
                <Icon size={20} className="text-white" />
              </div>
              <span className="text-white font-black text-xl">{partner.short}</span>
            </div>
            <p className="text-white/80 text-sm font-medium">{partner.tagline}</p>
          </div>
        </div>

        {/* Content panel */}
        <div className={`bg-white p-8 lg:p-10 flex flex-col justify-center ${isReversed ? 'lg:order-1' : ''}`}>
          <div className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-bold mb-4 self-start" style={{ background: partner.bgColor, color: partner.color }}>
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: partner.color }} />
            Strategic Partner
          </div>
          <h2 className="text-xl md:text-2xl font-black text-[#1B3A2D] mb-3">{partner.name}</h2>
          <p className="text-gray-500 text-sm leading-relaxed mb-5">{partner.desc}</p>

          <div className="mb-5">
            <h4 className="text-xs font-bold text-[#1B3A2D] uppercase tracking-widest mb-3">Key Capabilities</h4>
            <div className="grid grid-cols-1 gap-2">
              {partner.capabilities.map(cap => (
                <div key={cap} className="flex items-start gap-2">
                  <div className="w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5" style={{ background: partner.bgColor }}>
                    <div className="w-1.5 h-1.5 rounded-full" style={{ background: partner.color }} />
                  </div>
                  <span className="text-xs text-gray-600">{cap}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="border-t border-gray-100 pt-4">
            <p className="text-xs text-gray-500 italic leading-relaxed">{partner.synergy}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function GroupPage() {
  const hero = useScrollReveal();
  const facts = useScrollReveal();

  return (
    <>
      {/* Hero */}
      <div className="pt-32 pb-20 text-white relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #060e08 0%, #0F2419 50%, #060e08 100%)' }}>
        <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: 'linear-gradient(#6BBD45 1px, transparent 1px), linear-gradient(90deg, #6BBD45 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="absolute top-1/4 right-1/4 w-80 h-80 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(107,189,69,0.10) 0%, transparent 70%)' }} />

        <div ref={hero.ref} className="max-w-4xl mx-auto px-6 text-center transition-all duration-700"
          style={{ opacity: hero.visible ? 1 : 0, transform: hero.visible ? 'none' : 'translateY(30px)' }}>
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="w-10 h-px bg-[#6BBD45]" />
            <span className="text-[#6BBD45] text-sm font-bold tracking-widest uppercase">Strategic Ecosystem</span>
            <div className="w-10 h-px bg-[#6BBD45]" />
          </div>
          <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
            Group of<br /><span className="text-[#6BBD45]">Companies</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
            Cofreth operates within a powerful network of strategic partners — each bringing specialised expertise that amplifies our ability to deliver total, end-to-end facility management and energy solutions.
          </p>
        </div>
      </div>

      {/* Stats bar */}
      <div style={{ background: 'linear-gradient(90deg, #0a1810, #1B3A2D, #0a1810)', borderTop: '1px solid rgba(107,189,69,0.2)', borderBottom: '1px solid rgba(107,189,69,0.2)' }}>
        <div ref={facts.ref} className="max-w-4xl mx-auto px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center transition-all duration-700"
          style={{ opacity: facts.visible ? 1 : 0, transform: facts.visible ? 'none' : 'translateY(20px)' }}>
          {groupFacts.map(f => (
            <div key={f.label}>
              <div className="text-3xl font-black text-[#6BBD45]">{f.value}</div>
              <div className="text-xs text-gray-400 mt-1 font-medium">{f.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Intro */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-0.5 bg-[#6BBD45]" />
            <span className="text-[#6BBD45] text-sm font-semibold tracking-widest uppercase">Our Network</span>
            <div className="w-8 h-0.5 bg-[#6BBD45]" />
          </div>
          <h2 className="text-2xl md:text-3xl font-black text-[#1B3A2D] mb-5">A Complete FM Ecosystem</h2>
          <p className="text-gray-500 leading-relaxed text-sm">
            No single company can do everything. Cofreth has built a curated network of best-in-class strategic partners, each a specialist in their domain. Together, we form a comprehensive FM ecosystem — from energy-saving technology and BIM modelling to IWMS software — giving clients a truly integrated, one-stop solution.
          </p>
        </div>
      </section>

      {/* Partner cards */}
      <section className="py-10 pb-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 space-y-10">
          {partners.map((p, i) => <PartnerCard key={p.id} partner={p} i={i} />)}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-gradient-to-br from-[#0F2419] to-[#1B3A2D] rounded-3xl p-10 md:p-14 text-white text-center border border-[#6BBD45]/20">
            <Building2 size={40} className="text-[#6BBD45] mx-auto mb-6" />
            <h2 className="text-2xl md:text-3xl font-black mb-4">One Call. A Complete Solution.</h2>
            <p className="text-gray-300 max-w-xl mx-auto mb-8 leading-relaxed text-sm">
              Whether you need FM operations, an energy audit, BIM modelling or IWMS software — the Cofreth group has you covered from day one to the life of your building.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-[#6BBD45] hover:bg-[#5aa838] text-white font-bold px-10 py-4 rounded-full transition-all hover:-translate-y-0.5">
                Talk to Our Team <ArrowRight size={18} />
              </Link>
              <Link href="/services" className="inline-flex items-center justify-center gap-2 border-2 border-white/25 text-white hover:border-[#6BBD45] hover:text-[#6BBD45] font-bold px-10 py-4 rounded-full transition-all hover:-translate-y-0.5">
                Explore Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
