'use client';
import Link from 'next/link';
import { MapPin, ArrowRight } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useLanguage } from '@/contexts/LanguageContext';

const PROJECT_META = [
  { location: 'Sepang, Selangor', image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80&fit=crop', wide: true },
  { location: 'Cyberjaya',        image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80&fit=crop', wide: false },
  { location: 'Malaysia',         image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=80&fit=crop', wide: false },
  { location: 'Kuala Lumpur',     image: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=800&q=80&fit=crop', wide: false },
  { location: 'Putrajaya',        image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80&fit=crop', wide: false },
];

function ProjectTile({ name, type, note, location, image, wide, delay }: { name: string; type: string; note: string; location: string; image: string; wide: boolean; delay: number }) {
  const reveal = useScrollReveal(0.1);
  return (
    <div ref={reveal.ref} className="transition-all duration-700"
      style={{ opacity: reveal.visible ? 1 : 0, transform: reveal.visible ? 'none' : 'translateY(40px)', transitionDelay: `${delay}ms` }}>
      <div className="group relative rounded-2xl overflow-hidden cursor-default" style={{ minHeight: wide ? 320 : 240 }}>
        <img src={image} alt={name}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(4,10,6,0.95) 0%, rgba(4,10,6,0.50) 55%, transparent 100%)' }} />
        <div className="absolute inset-0 p-5 flex flex-col justify-end">
          <span className="text-[10px] font-bold text-[#6BBD45] tracking-widest uppercase mb-1">{type}</span>
          <h3 className="text-white font-bold leading-snug mb-1">{name}</h3>
          <div className="flex items-center gap-1 text-gray-400 text-xs mb-2"><MapPin size={11} /> {location}</div>
          <p className="text-gray-300 text-xs">{note}</p>
        </div>
        <div className="absolute inset-0 rounded-2xl border-2 border-[#6BBD45] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      </div>
    </div>
  );
}

export default function HomeProjects() {
  const header = useScrollReveal();
  const { t } = useLanguage();
  const p = t.pages.home.projects;

  return (
    <section className="py-16 lg:py-20 xl:py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={header.ref} className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-12 transition-all duration-700"
          style={{ opacity: header.visible ? 1 : 0, transform: header.visible ? 'none' : 'translateY(30px)' }}>
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-px bg-[#6BBD45]" />
              <span className="text-[#6BBD45] text-sm font-bold tracking-widest uppercase">{p.eyebrow}</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-[#1B3A2D] leading-tight">
              {p.title1}<br />{p.title2}
            </h2>
          </div>
          <Link href="/projects"
            className="inline-flex items-center gap-2 border-2 border-[#1B3A2D] text-[#1B3A2D] hover:bg-[#1B3A2D] hover:text-white font-bold px-7 py-3.5 rounded-full transition-all duration-200 shrink-0">
            {p.viewAll} <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div className="col-span-2 md:col-span-1 row-span-2">
            <div style={{ height: '100%', minHeight: 320 }}>
              <ProjectTile {...p.items[0]} location={PROJECT_META[0].location} image={PROJECT_META[0].image} wide={true} delay={0} />
            </div>
          </div>
          {p.items.slice(1).map((item, i) => (
            <ProjectTile key={i} {...item} location={PROJECT_META[i + 1].location} image={PROJECT_META[i + 1].image} wide={false} delay={(i + 1) * 80} />
          ))}
        </div>
      </div>
    </section>
  );
}
