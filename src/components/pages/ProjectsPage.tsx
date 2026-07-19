'use client';
import Link from 'next/link';
import Image from 'next/image';
import PageHero from '@/components/PageHero';
import { MapPin, ArrowRight, Building2, Zap, Leaf, Cpu, X, Download } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useState } from 'react';

const filterTabs = ['All', 'Facilities Management', 'Energy & Cooling', 'Green Building', 'Technology'];

const projects = [
  {
    id: 1,
    name: 'Technology Integration Project',
    type: 'Technology',
    location: 'Malaysia',
    scope: 'Smart building technology integration project combining three key systems: Energy Storage System (ESS) for optimal power management, Building Energy Management System (BEMS) for real-time monitoring and control, and Solar Panel installation for renewable energy generation — delivering intelligent, sustainable energy management across the facility.',
    highlights: ['Energy Storage System (ESS)', 'Building Energy Management System (BEMS)', 'Solar Panel Integration'],
    image: '/projects/technology-project.jpg',
    featured: false,
    icon: Cpu,
    pptx: '/documents/Technology_Project.pptx',
  },
  {
    id: 2,
    name: 'KLIA2 — Green Building Consultancy',
    type: 'Green Building',
    location: 'Sepang, Selangor',
    scope: 'Green Building Consultancy for KLIA2, Kuala Lumpur International Airport 2 — Cofreth provided expert green building consultancy services for Malaysia\'s second international airport, supporting the facility\'s sustainability targets and building performance certification.',
    highlights: ['Green Building Consultancy', 'Airport sector', 'Sustainability', 'GBI compliance'],
    image: '/projects/klia2-green-building.jpg',
    featured: false,
    icon: Leaf,
    pptx: '/documents/KLIA2_Green_Building_Consultancy.pptx',
  },
  {
    id: 3,
    name: 'Putrajaya International Convention Centre (PICC)',
    type: 'Facilities Management',
    location: 'Putrajaya, Malaysia',
    scope: 'Total Facility Management for Malaysia\'s flagship international convention centre, covering MEP maintenance, soft services, and event support operations for this iconic national landmark.',
    highlights: ['Total FM', 'National landmark', 'Event operations', 'MEP maintenance'],
    image: '/projects/picc.jpg',
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
    image: '/projects/kl-eco-city.jpg',
    featured: false,
    icon: Leaf,
  },
  {
    id: 5,
    name: 'Menara AIA Capsquare — Green Building Consultancy',
    type: 'Green Building',
    location: 'Kuala Lumpur',
    scope: 'Green Building Consultancy for Menara AIA Capsquare — Cofreth provided expert green building consultancy services for one of KL\'s premium Grade A office towers, supporting GBI certification and sustainable building performance.',
    highlights: ['Green Building Consultancy', 'GBI certification', 'Grade A office tower', 'Sustainability'],
    image: '/projects/menara-aia-green.jpg',
    featured: false,
    icon: Leaf,
    pptx: '/documents/Menara_AIA_Capsquare.pptx',
  },
  {
    id: 6,
    name: 'PNB 1194 — Green Building Consultancy',
    type: 'Green Building',
    location: 'Kuala Lumpur',
    scope: 'Green Building Consultancy for PNB 1194 (MAS Office Tower & Hotel) — Cofreth delivered green building consultancy services for this dual-tower development comprising the Malaysia Airlines headquarters and premium hotel, supporting its sustainability and GBI certification targets.',
    highlights: ['Green Building Consultancy', 'GBI certification', 'MAS HQ tower', 'Dual-tower development'],
    image: '/projects/pnb-1194-green.jpg',
    featured: false,
    icon: Leaf,
    pptx: '/documents/PNB_1194_Green_Building_Consultancy.pptx',
  },
  {
    id: 7,
    name: '1st GBI-Rated Office Tower in Malaysia',
    type: 'Green Building',
    location: 'Malaysia',
    scope: 'Historic green building commissioning project — Cofreth played a pivotal role as commissioning agent for Malaysia\'s very first Green Building Index (GBI)-rated office tower, setting the benchmark for sustainable built environments in the country.',
    highlights: ['Malaysia\'s 1st GBI office tower', 'Commissioning agent', 'National milestone'],
    image: '/projects/gbi-office-tower.jpg',
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
    image: '/projects/data-centre-green.jpg',
    featured: false,
    icon: Leaf,
    pptx: '/documents/Data_Centre.pptx',
  },
  {
    id: 9,
    name: 'Al-Bukhary International University',
    type: 'Facilities Management',
    location: 'Malaysia',
    scope: 'Total Facilities Management for this distinguished international university campus, covering all academic, residential and support facilities to ensure a world-class learning environment.',
    highlights: ['Campus FM', 'Total FM', 'International university'],
    image: '/projects/al-bukhary-university.jpg',
    featured: false,
    icon: Building2,
  },
  {
    id: 10,
    name: 'Cyberjaya Mosque — GBI Facilitator',
    type: 'Green Building',
    location: 'Cyberjaya, Selangor',
    scope: 'GBI Facilitator for Cyberjaya Mosque — Cofreth served as the Green Building Index (GBI) Facilitator for this landmark mosque, guiding the facility through the GBI certification process and ensuring it meets Malaysia\'s sustainability and green building standards.',
    highlights: ['GBI Facilitator', 'Green certification', 'Landmark mosque', 'Sustainability'],
    image: '/projects/cyberjaya-mosque-gbi.jpg',
    featured: false,
    icon: Leaf,
    pptx: '/documents/Cyberjaya_Mosque_GBI_Facilitator.pptx',
  },
  {
    id: 11,
    name: 'Menara PJD',
    type: 'Facilities Management',
    location: 'Kuala Lumpur',
    scope: 'Operation & Maintenance services for Menara PJD, delivering MEP maintenance, planned preventive maintenance programmes and responsive corrective maintenance for this premium commercial tower.',
    highlights: ['Premium O&M', 'PPM programmes', 'MEP systems'],
    image: '/projects/menara-pjd.jpg',
    featured: false,
    icon: Building2,
  },
  {
    id: 12,
    name: 'British American Tobacco (BAT)',
    type: 'Facilities Management',
    location: 'Malaysia',
    scope: 'Comprehensive Facilities Maintenance for British American Tobacco\'s Malaysian facilities — delivering end-to-end MEP maintenance, planned preventive maintenance programmes and responsive corrective maintenance across BAT\'s manufacturing and office operations.',
    highlights: ['Comprehensive FM', 'MEP maintenance', 'PPM programmes', 'Industrial sector'],
    image: '/projects/bat-guoco-tower.jpg',
    featured: false,
    icon: Leaf,
    pptx: '/documents/BAT_GBI_Facilitator.pptx',
  },
  {
    id: 13,
    name: 'Menara Genesis',
    type: 'Facilities Management',
    location: 'Kuala Lumpur',
    scope: 'Integrated FM services for Menara Genesis — comprehensive O&M covering all building systems, ensuring optimal performance, regulatory compliance and a superior occupant experience.',
    highlights: ['Integrated FM', 'Building systems', 'Compliance management'],
    image: '/projects/menara-genesis.jpg',
    featured: false,
    icon: Building2,
  },
  {
    id: 14,
    name: 'Energy Audit Projects',
    type: 'Energy & Cooling',
    location: 'Malaysia',
    scope: 'Comprehensive energy audits conducted for major commercial clients including Genting Highland Hotels & Casino and One Utama Shopping Centre — identifying energy inefficiencies, benchmarking consumption, and delivering actionable recommendations for measurable cost reduction.',
    highlights: ['Genting Highland Hotels & Casino', 'One Utama Shopping Centre', 'Energy audits', 'Cost reduction'],
    image: '/projects/energy-audit-project.jpg',
    featured: false,
    icon: Zap,
    pptx: '/documents/Energy_Audit_Projects.pptx',
  },
  {
    id: 15,
    name: 'Energy Performance Contracting (EPC)',
    type: 'Energy & Cooling',
    location: 'Malaysia',
    scope: 'National Energy Awards 2021 Special Award winner for Energy Performance Contracting — recognising Cofreth\'s guaranteed EPC engagement with Besi Apac Sdn Bhd. Cofreth assumes the full performance risk, delivering verified, measurable energy savings guaranteed by contract.',
    highlights: ['NEA 2021 Special Award', 'EPC contracts', 'Guaranteed savings', 'Besi Apac Sdn Bhd'],
    image: '/projects/epc-project.jpg',
    featured: false,
    icon: Zap,
    pptx: '/documents/EPC_Project.pptx',
  },
  {
    id: 16,
    name: 'KLIA2 District Cooling Plant',
    type: 'Energy & Cooling',
    location: 'Sepang, Selangor',
    scope: 'Design, implementation and O&M of the district cooling plant serving KLIA2 — incorporating Thermal Energy Storage to shift cooling load to off-peak hours, generating significant energy cost savings for the airport.',
    highlights: ['DCS design & O&M', 'Thermal Energy Storage', 'Asia-first application'],
    image: '/projects/klia2-dcs.jpg',
    featured: false,
    icon: Zap,
  },
];

function ProjectModal({ project, onClose }: { project: typeof projects[0]; onClose: () => void }) {
  const Icon = project.icon;
  return (
    <div className="fixed inset-0 z-[500] flex items-center justify-center p-4" style={{ background: 'rgba(0,0,0,0.75)' }} onClick={onClose}>
      <div className="bg-white rounded-3xl overflow-hidden max-w-2xl w-full shadow-2xl" onClick={e => e.stopPropagation()}>
        <div className="relative h-56">
          <Image src={project.image} alt={project.name} fill className="object-cover" sizes="672px" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(4,12,8,0.95) 0%, rgba(4,12,8,0.4) 100%)' }} />
          <button onClick={onClose} className="absolute top-4 right-4 w-9 h-9 bg-white/15 backdrop-blur-sm border border-white/25 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all">
            <X size={16} />
          </button>
          <div className="absolute bottom-4 left-5 right-5">
            <span className="bg-[#6BBD45] text-white text-xs font-bold px-3 py-1.5 rounded-full tracking-widest uppercase mb-2 inline-block">{project.type}</span>
            <h2 className="text-white font-black text-xl leading-tight">{project.name}</h2>
            <p className="text-white/70 text-xs flex items-center gap-1 mt-1"><MapPin size={11} />{project.location}</p>
          </div>
        </div>
        <div className="p-6">
          <p className="text-gray-600 text-base leading-relaxed mb-5">{project.scope}</p>
          <div className="flex flex-wrap gap-2 pb-4 border-b border-gray-100 mb-4">
            {project.highlights.map(h => (
              <span key={h} className="text-xs bg-[#6BBD45]/10 text-[#1B3A2D] px-3 py-1.5 rounded-full font-semibold border border-[#6BBD45]/20">{h}</span>
            ))}
          </div>
          {project.pptx && (
            <a
              href={project.pptx}
              download
              className="inline-flex items-center gap-2 bg-[#1B3A2D] hover:bg-[#6BBD45] text-white font-semibold px-5 py-2.5 rounded-full transition-all text-sm"
            >
              <Download size={14} /> Download Presentation
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ project, index, onSelect }: { project: typeof projects[0]; index: number; onSelect: () => void }) {
  const reveal = useScrollReveal(0.1);
  const Icon = project.icon;
  return (
    <div ref={reveal.ref} className="transition-all duration-700"
      style={{ opacity: reveal.visible ? 1 : 0, transform: reveal.visible ? 'none' : 'translateY(40px)', transitionDelay: `${index * 60}ms` }}>
      <button onClick={onSelect} className="group bg-white border border-gray-100 hover:border-[#6BBD45]/40 rounded-3xl overflow-hidden hover:shadow-xl transition-all duration-400 hover:-translate-y-2 flex flex-col h-full w-full text-left">
        <div className="relative h-52 overflow-hidden">
          <Image src={project.image} alt={project.name} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw" />
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
          <p className="text-gray-500 text-base leading-relaxed flex-1 mb-4">{project.scope.slice(0, 130)}…</p>
          <div className="flex flex-wrap gap-1.5 pt-3 border-t border-gray-100">
            {project.highlights.slice(0, 3).map(h => (
              <span key={h} className="text-xs bg-[#6BBD45]/8 text-[#1B3A2D] px-2.5 py-1 rounded-full font-medium border border-[#6BBD45]/15">{h}</span>
            ))}
          </div>
          <p className="text-[#6BBD45] text-xs font-semibold mt-3">Read more →</p>
        </div>
      </button>
    </div>
  );
}

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selected, setSelected] = useState<typeof projects[0] | null>(null);

  const rest = projects.filter(p => activeFilter === 'All' || p.type === activeFilter);

  return (
    <>
      {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
      <PageHero
        bgImage="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1920&q=90"
        eyebrow="Project Highlights"
        eyebrowSub="38 years of landmark FM & energy projects"
        title={<>Our Track Record in<br /><span className="text-[#6BBD45]">FM &amp; Energy Services</span></>}
        subtitle="From Malaysia's largest data centre to the nation's first GBI-rated office tower — 38 years of landmark projects across every sector."
        stats={[
          { num: '16+',    label: 'Notable Projects' },
          { num: '38+',    label: 'Years Experience' },
          { num: 'MY #1',  label: 'Pioneer FM ESCO' },
          { num: 'ASEAN',  label: 'Award Winner' },
        ]}
      />

      {/* Filtered grid */}
      <section className="py-10 md:py-16 bg-white">
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
            {rest.map((project, i) => <ProjectCard key={project.id} project={project} index={i} onSelect={() => setSelected(project)} />)}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
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
