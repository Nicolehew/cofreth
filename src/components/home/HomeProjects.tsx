'use client';
import Link from 'next/link';
import { MapPin, ArrowRight } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const featured = [
  {
    name: 'KLIA2 District Cooling Plant',
    location: 'Sepang, Selangor',
    type: 'Energy & Cooling',
    note: 'First DCS with Thermal Energy Storage in Asia',
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80&fit=crop',
    wide: true,
  },
  {
    name: 'CX5 — Largest Datacentre in South East Asia',
    location: 'Cyberjaya',
    type: 'Facilities Management',
    note: 'Mission-critical 24/7 total FM',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80&fit=crop',
    wide: false,
  },
  {
    name: 'Malaysia\'s 1st GBI-Rated Office Tower',
    location: 'Malaysia',
    type: 'Green Building',
    note: 'Pioneering green certification milestone',
    image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=80&fit=crop',
    wide: false,
  },
  {
    name: 'KL Eco City',
    location: 'Kuala Lumpur',
    type: 'Green Building',
    note: 'GBI-certified mixed-use sustainable FM',
    image: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=800&q=80&fit=crop',
    wide: false,
  },
  {
    name: 'Putrajaya International Convention Centre',
    location: 'Putrajaya',
    type: 'Facilities Management',
    note: 'Malaysia\'s flagship national landmark',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80&fit=crop',
    wide: false,
  },
];

function ProjectTile({ p, delay }: { p: typeof featured[0]; delay: number }) {
  const reveal = useScrollReveal(0.1);
  return (
    <div ref={reveal.ref} className="transition-all duration-700"
      style={{ opacity: reveal.visible ? 1 : 0, transform: reveal.visible ? 'none' : 'translateY(40px)', transitionDelay: `${delay}ms` }}>
      <div className="group relative rounded-2xl overflow-hidden cursor-default" style={{ minHeight: p.wide ? 320 : 240 }}>
        <img src={p.image} alt={p.name}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-108" />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(4,10,6,0.95) 0%, rgba(4,10,6,0.50) 55%, transparent 100%)' }} />
        <div className="absolute inset-0 p-5 flex flex-col justify-end">
          <span className="text-[10px] font-bold text-[#6BBD45] tracking-widest uppercase mb-1">{p.type}</span>
          <h3 className="text-white font-bold leading-snug mb-1">{p.name}</h3>
          <div className="flex items-center gap-1 text-gray-400 text-xs mb-2">
            <MapPin size={11} /> {p.location}
          </div>
          <p className="text-gray-300 text-xs">{p.note}</p>
        </div>
        {/* Hover border */}
        <div className="absolute inset-0 rounded-2xl border-2 border-[#6BBD45] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      </div>
    </div>
  );
}

export default function HomeProjects() {
  const header = useScrollReveal();

  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={header.ref} className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-12 transition-all duration-700"
          style={{ opacity: header.visible ? 1 : 0, transform: header.visible ? 'none' : 'translateY(30px)' }}>
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-px bg-[#6BBD45]" />
              <span className="text-[#6BBD45] text-sm font-bold tracking-widest uppercase">Project Highlights</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-[#1B3A2D] leading-tight">
              14+ Landmark<br />Projects Delivered
            </h2>
          </div>
          <Link href="/projects"
            className="inline-flex items-center gap-2 border-2 border-[#1B3A2D] text-[#1B3A2D] hover:bg-[#1B3A2D] hover:text-white font-bold px-7 py-3.5 rounded-full transition-all duration-200 shrink-0">
            View All Projects <ArrowRight size={16} />
          </Link>
        </div>

        {/* Asymmetric photo grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {/* Large tile spanning 2 cols */}
          <div className="col-span-2 md:col-span-1 row-span-2">
            <div style={{ height: '100%', minHeight: 320 }}>
              <ProjectTile p={featured[0]} delay={0} />
            </div>
          </div>
          {/* 4 smaller tiles */}
          {featured.slice(1).map((p, i) => (
            <ProjectTile key={p.name} p={p} delay={(i + 1) * 80} />
          ))}
        </div>
      </div>
    </section>
  );
}
