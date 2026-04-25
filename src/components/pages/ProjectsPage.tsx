'use client';
import Link from 'next/link';
import { MapPin, ArrowRight, Building2, Zap, Leaf, Cpu } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useState } from 'react';

const filterTabs = ['All', 'Facilities Management', 'Energy & Cooling', 'Green Building', 'Technology'];

const projects = [
  {
    id: 1,
    name: 'KLIA2 — Kuala Lumpur International Airport 2',
    type: 'Energy & Cooling',
    location: 'Sepang, Selangor',
    scope: 'District Cooling Plant — first-of-its-kind thermal energy storage system for Malaysia\'s second international airport. Centralised chilled water distribution serving millions of passengers annually.',
    highlights: ['District Cooling System', 'Thermal Energy Storage', 'ESCO-guaranteed savings'],
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80&fit=crop',
    featured: true,
    icon: Zap,
  },
  {
    id: 2,
    name: 'CX5, Cyberjaya — Largest Datacentre in South East Asia',
    type: 'Facilities Management',
    location: 'Cyberjaya, Selangor',
    scope: 'Total Facilities Management for CX5, the largest data centre in Southeast Asia. Mission-critical FM operations including MEP maintenance, power systems, precision cooling and 24/7 uptime assurance.',
    highlights: ['Mission-critical FM', 'Precision cooling systems', '24/7 operations', 'Largest DC in SEA'],
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80&fit=crop',
    featured: true,
    icon: Building2,
  },
  {
    id: 3,
    name: 'Putrajaya International Convention Centre (PICC)',
    type: 'Facilities Management',
    location: 'Putrajaya, Malaysia',
    scope: 'Total Facility Management for Malaysia\'s flagship international convention centre, covering MEP maintenance, soft services, and event support operations for this iconic national landmark.',
    highlights: ['Total FM', 'National landmark', 'Event operations', 'MEP maintenance'],
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80&fit=crop',
    featured: false,
    icon: Building2,
  },
  {
    id: 4,
    name: 'KL Eco City',
    type: 'Green Building',
    location: 'Kuala Lumpur',
    scope: 'Green building commissioning and FM services for KL Eco City — a landmark sustainable mixed-use development integrating GBI-rated office, retail and residential spaces in the heart of KL.',
    highlights: ['GBI green certification', 'Sustainable FM', 'Mixed-use development'],
    image: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=800&q=80&fit=crop',
    featured: false,
    icon: Leaf,
  },
  {
    id: 5,
    name: 'Menara AIA Capsquare',
    type: 'Facilities Management',
    location: 'Kuala Lumpur',
    scope: 'Comprehensive O&M services for one of KL\'s premium Grade A office towers, delivering high-standard facility operations for AIA\'s flagship Malaysia headquarters.',
    highlights: ['Grade A office FM', 'MEP operations', 'Tenant services'],
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80&fit=crop',
    featured: false,
    icon: Building2,
  },
  {
    id: 6,
    name: 'PNB 1194 (MAS Office Tower & Hotel)',
    type: 'Facilities Management',
    location: 'Kuala Lumpur',
    scope: 'Integrated FM for this dual-tower development comprising the Malaysia Airlines office headquarters and a premium hotel — a complex, high-profile asset requiring round-the-clock FM excellence.',
    highlights: ['Dual-tower FM', 'Office + hospitality', '24/7 operations'],
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80&fit=crop',
    featured: false,
    icon: Building2,
  },
  {
    id: 7,
    name: '1st GBI-Rated Office Tower in Malaysia',
    type: 'Green Building',
    location: 'Malaysia',
    scope: 'Historic green building commissioning project — Cofreth played a pivotal role as commissioning agent for Malaysia\'s very first Green Building Index (GBI)-rated office tower, setting the benchmark for sustainable built environments in the country.',
    highlights: ['Malaysia\'s 1st GBI office tower', 'Commissioning agent', 'National milestone'],
    image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=80&fit=crop',
    featured: false,
    icon: Leaf,
  },
  {
    id: 8,
    name: '1st Green-Certified Data Centre in Malaysia',
    type: 'Green Building',
    location: 'Malaysia',
    scope: 'Cofreth was engaged as green building commissioning specialist for Malaysia\'s first data centre to achieve green certification — a landmark achievement in sustainable technology infrastructure.',
    highlights: ['Malaysia\'s 1st green DC', 'Green commissioning', 'Technology sector'],
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80&fit=crop',
    featured: false,
    icon: Leaf,
  },
  {
    id: 9,
    name: 'Al-Bukhary International University',
    type: 'Facilities Management',
    location: 'Malaysia',
    scope: 'Total Facilities Management for this distinguished international university campus, covering all academic, residential and support facilities to ensure a world-class learning environment.',
    highlights: ['Campus FM', 'Total FM', 'International university'],
    image: 'https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80&fit=crop',
    featured: false,
    icon: Building2,
  },
  {
    id: 10,
    name: 'Cyberjaya Mosque',
    type: 'Facilities Management',
    location: 'Cyberjaya, Selangor',
    scope: 'Facilities management and maintenance for Cyberjaya\'s landmark mosque — a community icon requiring sensitive, high-quality FM that respects the significance and heritage of the facility.',
    highlights: ['Landmark facility', 'Sensitive FM', 'Community icon'],
    image: 'https://images.unsplash.com/photo-1613977257592-4a9f3a75b8a8?w=800&q=80&fit=crop',
    featured: false,
    icon: Building2,
  },
  {
    id: 11,
    name: 'Menara PJD',
    type: 'Facilities Management',
    location: 'Kuala Lumpur',
    scope: 'Operation & Maintenance services for Menara PJD, delivering MEP maintenance, planned preventive maintenance programmes and responsive corrective maintenance for this premium commercial tower.',
    highlights: ['Premium O&M', 'PPM programmes', 'MEP systems'],
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80&fit=crop',
    featured: false,
    icon: Building2,
  },
  {
    id: 12,
    name: 'British American Tobacco (BAT)',
    type: 'Energy & Cooling',
    location: 'Malaysia',
    scope: 'Energy audit and CEEP© energy efficiency programme implementation for BAT\'s Malaysian operations, delivering verified energy cost savings and improved environmental performance across manufacturing facilities.',
    highlights: ['Energy audit', 'CEEP©', 'Industrial sector', 'Verified savings'],
    image: 'https://images.unsplash.com/photo-1565043666747-69f6646db940?w=800&q=80&fit=crop',
    featured: false,
    icon: Zap,
  },
  {
    id: 13,
    name: 'Menara Genesis',
    type: 'Facilities Management',
    location: 'Kuala Lumpur',
    scope: 'Integrated FM services for Menara Genesis — comprehensive O&M covering all building systems, ensuring optimal performance, regulatory compliance and a superior occupant experience.',
    highlights: ['Integrated FM', 'Building systems', 'Compliance management'],
    image: 'https://images.unsplash.com/photo-1555212697-194d092e3b8f?w=800&q=80&fit=crop',
    featured: false,
    icon: Building2,
  },
  {
    id: 14,
    name: 'KLIA2 District Cooling Plant',
    type: 'Energy & Cooling',
    location: 'Sepang, Selangor',
    scope: 'Design, implementation and O&M of the district cooling plant serving KLIA2 — incorporating Thermal Energy Storage to shift cooling load to off-peak hours, generating significant energy cost savings for the airport.',
    highlights: ['DCS design & O&M', 'Thermal Energy Storage', 'Asia-first application'],
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80&fit=crop',
    featured: false,
    icon: Zap,
  },
];

function FeaturedProject({ project }: { project: typeof projects[0] }) {
  const reveal = useScrollReveal();
  const Icon = project.icon;
  return (
    <div ref={reveal.ref} className="transition-all duration-700" style={{ opacity: reveal.visible ? 1 : 0, transform: reveal.visible ? 'none' : 'translateY(30px)' }}>
      <div className="group relative rounded-3xl overflow-hidden shadow-2xl" style={{ minHeight: 480 }}>
        <img src={project.image} alt={project.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(4,12,8,0.97) 0%, rgba(4,12,8,0.70) 50%, rgba(4,12,8,0.20) 100%)' }} />
        <div className="absolute inset-0 p-8 lg:p-12 flex flex-col justify-end">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-[#6BBD45] text-white text-xs font-bold px-3 py-1.5 rounded-full tracking-widest uppercase">{project.type}</span>
            <span className="text-white/60 text-sm flex items-center gap-1.5"><MapPin size={13} />{project.location}</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-black text-white mb-3 leading-tight">{project.name}</h2>
          <p className="text-gray-300 text-sm leading-relaxed mb-5 max-w-2xl">{project.scope}</p>
          <div className="flex flex-wrap gap-2">
            {project.highlights.map(h => (
              <span key={h} className="text-xs bg-white/10 border border-white/20 text-white px-3 py-1.5 rounded-full font-medium">{h}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const reveal = useScrollReveal(0.1);
  const Icon = project.icon;
  return (
    <div ref={reveal.ref} className="transition-all duration-700"
      style={{ opacity: reveal.visible ? 1 : 0, transform: reveal.visible ? 'none' : 'translateY(40px)', transitionDelay: `${index * 60}ms` }}>
      <div className="group bg-white border border-gray-100 hover:border-[#6BBD45]/40 rounded-3xl overflow-hidden hover:shadow-xl transition-all duration-400 hover:-translate-y-2 flex flex-col h-full">
        <div className="relative h-52 overflow-hidden">
          <img src={project.image} alt={project.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-108" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <span className="absolute top-4 left-4 bg-white/15 backdrop-blur-sm border border-white/25 text-white text-xs font-bold px-3 py-1.5 rounded-full tracking-wider">{project.type}</span>
          <div className="absolute bottom-4 right-4 w-9 h-9 bg-[#6BBD45] rounded-xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Icon size={16} className="text-white" />
          </div>
        </div>
        <div className="p-6 flex flex-col flex-1">
          <div className="flex items-center gap-1.5 text-xs text-gray-400 mb-3">
            <MapPin size={12} /> {project.location}
          </div>
          <h3 className="font-bold text-[#1B3A2D] mb-3 leading-snug group-hover:text-[#6BBD45] transition-colors">{project.name}</h3>
          <p className="text-gray-500 text-sm leading-relaxed flex-1 mb-4">{project.scope.slice(0, 130)}…</p>
          <div className="flex flex-wrap gap-1.5 pt-3 border-t border-gray-100">
            {project.highlights.slice(0, 3).map(h => (
              <span key={h} className="text-xs bg-[#6BBD45]/8 text-[#1B3A2D] px-2.5 py-1 rounded-full font-medium border border-[#6BBD45]/15">{h}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ProjectsPage() {
  const hero = useScrollReveal();
  const [activeFilter, setActiveFilter] = useState('All');

  const featured = projects.filter(p => p.featured);
  const rest = projects.filter(p => !p.featured && (activeFilter === 'All' || p.type === activeFilter));

  return (
    <>
      {/* Hero */}
      <div className="pt-32 pb-20 text-white relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #060e08 0%, #0F2419 50%, #060e08 100%)' }}>
        <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: 'linear-gradient(#6BBD45 1px, transparent 1px), linear-gradient(90deg, #6BBD45 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="absolute top-10 left-1/3 w-96 h-96 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(107,189,69,0.10) 0%, transparent 70%)' }} />

        <div ref={hero.ref} className="max-w-5xl mx-auto px-6 text-center transition-all duration-700"
          style={{ opacity: hero.visible ? 1 : 0, transform: hero.visible ? 'none' : 'translateY(30px)' }}>
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="w-10 h-px bg-[#6BBD45]" />
            <span className="text-[#6BBD45] text-sm font-bold tracking-widest uppercase">Project Highlights</span>
            <div className="w-10 h-px bg-[#6BBD45]" />
          </div>
          <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
            Our Track Record in<br /><span className="text-[#6BBD45]">FM & Energy Services</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed mb-10">
            From Malaysia's largest data centre to the nation's first GBI-rated office tower — 38 years of landmark projects across every sector.
          </p>
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 max-w-2xl mx-auto">
            {[['14+','Notable Projects'],['38+','Years Experience'],['Malaysia','Pioneer FM'],['ASEAN','Award Winner']].map(([v,l]) => (
              <div key={l} className="bg-white/5 border border-white/10 rounded-2xl py-4 px-3">
                <div className="text-xl font-black text-[#6BBD45]">{v}</div>
                <div className="text-xs text-gray-400 font-medium mt-0.5">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Flagship projects */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-8">
            <span className="w-1 h-6 bg-[#6BBD45] rounded-full" />
            <h2 className="text-lg font-bold text-[#1B3A2D]">Flagship Projects</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {featured.map(p => <FeaturedProject key={p.id} project={p} />)}
          </div>
        </div>
      </section>

      {/* Filtered grid */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between flex-wrap gap-4 mb-10">
            <div className="flex items-center gap-3">
              <span className="w-1 h-6 bg-[#6BBD45] rounded-full" />
              <h2 className="text-lg font-bold text-[#1B3A2D]">All Projects</h2>
            </div>
            <div className="flex gap-2 flex-wrap">
              {filterTabs.map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveFilter(tab)}
                  className="px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200"
                  style={{
                    background: activeFilter === tab ? '#6BBD45' : '#f3f4f6',
                    color: activeFilter === tab ? '#fff' : '#6b7280',
                    transform: activeFilter === tab ? 'scale(1.05)' : 'none',
                  }}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((project, i) => <ProjectCard key={project.id} project={project} index={i} />)}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="bg-gradient-to-br from-[#0a1810] to-[#1B3A2D] rounded-3xl p-12 text-white border border-[#6BBD45]/20">
            <h2 className="text-2xl md:text-3xl font-black mb-4">Ready to Be Our Next Success Story?</h2>
            <p className="text-gray-300 mb-8 leading-relaxed max-w-xl mx-auto">From airports to data centres to green-certified towers — Cofreth has the expertise and track record to deliver for your facility.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-[#6BBD45] hover:bg-[#5aa838] text-white font-bold px-10 py-4 rounded-full transition-all hover:-translate-y-0.5 shadow-lg text-lg">
              Start a Conversation <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
