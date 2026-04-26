'use client';
import Link from 'next/link';
import { ArrowRight, ExternalLink, Building2 } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

/* ── Exact partners from cofreth.com.my/group.php ── */
const partners = [
  {
    id: 1,
    name: 'BEST Energy Saving',
    logo: '/partners/best.png',
    website: 'https://bestenergysaving.com/eniscope',
    websiteLabel: 'bestenergysaving.com',
    tagline: 'Energy Monitoring & Saving Solutions',
    color: '#f59e0b',
    desc: 'BEST Energy Saving is Cofreth\'s strategic partner for energy monitoring, measurement and saving solutions. Specialising in the Eniscope real-time energy management platform, BEST enables facilities to monitor energy consumption at the circuit level — delivering granular insight that drives measurable savings. Working hand-in-hand with Cofreth\'s ESCO operations, BEST ensures every energy conservation measure is supported by proven, real-time monitoring technology.',
    capabilities: [
      'Eniscope real-time energy monitoring platform',
      'Circuit-level energy measurement',
      'Energy dashboards & analytics',
      'Carbon footprint tracking',
      'Remote energy management',
      'Demand side management support',
    ],
  },
  {
    id: 2,
    name: 'GIS-BIM',
    logo: '/partners/junesun.png',
    website: 'http://www.gis-bim.com',
    websiteLabel: 'gis-bim.com',
    tagline: 'Building Information Modelling & Intelligent Engineering',
    color: '#6BBD45',
    desc: 'GIS-BIM (宗陞智能工程) is a digital strategy expert specialising in Building Information Modelling (BIM), Project Management Information Systems (PMIS) and Facilities Management technology. The company delivers integrated software solutions for infrastructure clients in engineering and operations maintenance — creating digital twins, smart city simulations and IoT-enabled FM operations that transform how facilities are managed throughout their lifecycle.',
    capabilities: [
      'Building Information Modelling (BIM) implementation',
      'Digital twin creation for facilities',
      'Project Management Information Systems (PMIS)',
      'BIM-enabled FM operations (BIM-FM)',
      'IoT monitoring & building automation',
      '4D cloud-based construction management',
    ],
  },
  {
    id: 3,
    name: 'Archibus ASCHT',
    logo: '/partners/archibus.png',
    website: 'http://www.archibus-ascht.com',
    websiteLabel: 'archibus-ascht.com',
    tagline: 'Integrated Workplace Management System (IWMS)',
    color: '#8b5cf6',
    desc: 'Archibus ASCHT is an authorised Archibus solution partner delivering world-class Integrated Workplace Management System (IWMS) solutions to enterprises, government bodies and institutions. Archibus is the global gold standard for FM and real estate software. Through this partnership, Cofreth is able to offer clients a complete technology-driven FM platform — combining operational expertise with enterprise-grade software to reduce costs and elevate the occupant experience.',
    capabilities: [
      'Archibus IWMS implementation & customisation',
      'Space & occupancy management',
      'Asset & maintenance management (CMMS)',
      'Move management & space planning',
      'Real estate portfolio management',
      'Sustainability & energy reporting',
    ],
  },
  {
    id: 4,
    name: 'C.eXergy International',
    logo: '/partners/cexergy.png',
    website: null,
    websiteLabel: null,
    tagline: 'Cooling & Energy Optimisation',
    color: '#3b82f6',
    desc: 'C.eXergy International is a specialist in cooling system optimisation and energy efficiency for chilled water and HVAC systems. As a strategic partner, C.eXergy contributes advanced engineering expertise in thermal systems — enabling Cofreth to deliver enhanced performance for district cooling, precision cooling for data centres and complex multi-chiller plant optimisation projects across Malaysia and the region.',
    capabilities: [
      'Chilled water system optimisation',
      'Multi-chiller plant performance tuning',
      'District cooling system support',
      'HVAC energy efficiency programmes',
      'Precision cooling for data centres',
      'Thermal energy storage engineering',
    ],
  },
  {
    id: 5,
    name: 'TI FM International',
    logo: '/partners/tifm.png',
    website: null,
    websiteLabel: null,
    tagline: 'International FM Expertise & Networks',
    color: '#ef4444',
    desc: 'TI FM International brings international facilities management expertise and networks to the Cofreth group. As a global FM knowledge and partnership platform, TI FM International connects Cofreth with international best practices, benchmarking standards and cross-border FM opportunities — strengthening our ability to serve multinational clients with internationally aligned FM delivery models.',
    capabilities: [
      'International FM best practices',
      'Global FM benchmarking & standards',
      'Cross-border FM operations support',
      'Multinational client programme management',
      'International FM knowledge networks',
      'Regional ASEAN FM expertise',
    ],
  },
];

function PartnerCard({ partner, i }: { partner: typeof partners[0]; i: number }) {
  const reveal = useScrollReveal(0.05);
  const isReversed = i % 2 !== 0;

  return (
    <div ref={reveal.ref} className="transition-all duration-700"
      style={{ opacity: reveal.visible ? 1 : 0, transform: reveal.visible ? 'none' : 'translateY(40px)', transitionDelay: `${i * 80}ms` }}>
      <div className={`grid lg:grid-cols-5 gap-0 rounded-3xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-1`}>

        {/* Logo panel */}
        <div className={`lg:col-span-2 bg-white flex flex-col items-center justify-center p-10 border-b lg:border-b-0 ${isReversed ? 'lg:order-2 lg:border-l border-gray-100' : 'lg:border-r border-gray-100'}`}>
          <img
            src={partner.logo}
            alt={partner.name}
            className="max-h-24 max-w-[200px] object-contain"
          />
          <div className="mt-6 text-center">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full mt-1"
              style={{ background: partner.color + '15', color: partner.color }}>
              <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: partner.color }} />
              Strategic Partner
            </div>
          </div>
          {partner.website && (
            <a href={partner.website} target="_blank" rel="noopener noreferrer"
              className="mt-4 flex items-center gap-1.5 text-xs font-semibold hover:underline transition-all"
              style={{ color: partner.color }}>
              <ExternalLink size={12} />
              {partner.websiteLabel}
            </a>
          )}
        </div>

        {/* Content panel */}
        <div className={`lg:col-span-3 bg-white p-8 lg:p-10 flex flex-col justify-center ${isReversed ? 'lg:order-1' : ''}`}>
          <p className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: partner.color }}>{partner.tagline}</p>
          <h2 className="text-xl md:text-2xl font-black text-[#1B3A2D] mb-3">{partner.name}</h2>
          <p className="text-gray-500 text-sm leading-relaxed mb-5">{partner.desc}</p>

          <div>
            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Key Capabilities</h4>
            <div className="grid sm:grid-cols-2 gap-y-1.5 gap-x-4">
              {partner.capabilities.map(cap => (
                <div key={cap} className="flex items-start gap-2">
                  <div className="w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5" style={{ background: partner.color + '18' }}>
                    <div className="w-1.5 h-1.5 rounded-full" style={{ background: partner.color }} />
                  </div>
                  <span className="text-xs text-gray-600 leading-snug">{cap}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function GroupPage() {
  const hero = useScrollReveal();
  const logos = useScrollReveal();

  return (
    <>
      {/* ── Hero ── */}
      <div className="pt-24 md:pt-32 pb-12 md:pb-20 text-white relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #060e08 0%, #0F2419 50%, #060e08 100%)' }}>
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
          <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed mb-10">
            Cofreth operates within a curated network of specialised strategic partners — each a leader in their domain — forming a complete, end-to-end facility management and energy solutions ecosystem.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
            {[['5', 'Strategic Partners'], ['360°', 'FM Coverage'], ['ASEAN', 'Regional Reach'], ['38+', 'Years Together']].map(([v, l]) => (
              <div key={l} className="bg-white/5 border border-white/10 rounded-2xl py-4 px-3 text-center">
                <div className="text-2xl font-black text-[#6BBD45]">{v}</div>
                <div className="text-xs text-gray-400 mt-1">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Logo bar ── */}
      <div className="py-12 bg-white border-b border-gray-100">
        <div ref={logos.ref} className="max-w-5xl mx-auto px-6 transition-all duration-700"
          style={{ opacity: logos.visible ? 1 : 0, transform: logos.visible ? 'none' : 'translateY(20px)' }}>
          <p className="text-center text-xs font-bold text-gray-400 uppercase tracking-widest mb-8">Our Strategic Partners</p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14">
            {partners.map(p => (
              <div key={p.id} className="group flex items-center justify-center">
                {p.website ? (
                  <a href={p.website} target="_blank" rel="noopener noreferrer" title={p.name}>
                    <img src={p.logo} alt={p.name} className="h-10 max-w-[130px] object-contain opacity-60 group-hover:opacity-100 transition-opacity duration-300 grayscale group-hover:grayscale-0" />
                  </a>
                ) : (
                  <img src={p.logo} alt={p.name} className="h-10 max-w-[130px] object-contain opacity-60 group-hover:opacity-100 transition-opacity duration-300 grayscale group-hover:grayscale-0" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Partner detail cards ── */}
      <section className="py-16 pb-24 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-0.5 bg-[#6BBD45]" />
              <span className="text-[#6BBD45] text-sm font-semibold tracking-widest uppercase">Our Network</span>
              <div className="w-8 h-0.5 bg-[#6BBD45]" />
            </div>
            <h2 className="text-2xl md:text-3xl font-black text-[#1B3A2D]">Meet Our Partners</h2>
          </div>
          <div className="space-y-8">
            {partners.map((p, i) => <PartnerCard key={p.id} partner={p} i={i} />)}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-gradient-to-br from-[#0F2419] to-[#1B3A2D] rounded-3xl p-10 md:p-14 text-white text-center border border-[#6BBD45]/20">
            <Building2 size={40} className="text-[#6BBD45] mx-auto mb-6" />
            <h2 className="text-2xl md:text-3xl font-black mb-4">One Call. A Complete Solution.</h2>
            <p className="text-gray-300 max-w-xl mx-auto mb-8 leading-relaxed text-sm">
              Whether you need FM operations, energy monitoring, BIM modelling or IWMS software — the Cofreth partner network has you covered from day one to the life of your building.
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
