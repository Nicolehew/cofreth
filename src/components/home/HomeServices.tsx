'use client';
import Link from 'next/link';
import { Building2, Zap, Leaf, Cpu, ArrowRight } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const services = [
  {
    icon: Building2,
    title: 'Facilities Management',
    href: '/services/facilities-management',
    desc: 'Total facility management, operation & maintenance, technical due diligence, and FM consultancy for every type of built environment.',
    tags: ['Total FM', 'O&M', 'Consultancy'],
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=900&q=80&fit=crop&auto=format',
  },
  {
    icon: Zap,
    title: 'Energy Services',
    href: '/services/energy-services',
    desc: 'Energy audits, efficiency programs, performance contracting, and district cooling solutions that guarantee measurable savings.',
    tags: ['Energy Audit', 'CEEP©', 'CoPC'],
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=900&q=80&fit=crop&auto=format',
  },
  {
    icon: Leaf,
    title: 'Green Expertise',
    href: '/services/green-expertise',
    desc: 'Green building commissioning, accredited professional services, renewable energy, and solar thermal solutions.',
    tags: ['Green Building', 'Solar', 'Cogeneration'],
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=900&q=80&fit=crop&auto=format',
  },
  {
    icon: Cpu,
    title: 'Smart Technology',
    href: '/services/smart-technology',
    desc: 'ARCHIBUS-powered TIFM, BIM, and cloud-based energy monitoring platforms for intelligent facility operations.',
    tags: ['ARCHIBUS', 'BIM', 'IoT Monitoring'],
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=80&fit=crop&auto=format',
  },
];

export default function HomeServices() {
  const header = useScrollReveal();
  const grid = useScrollReveal(0.05);

  return (
    <section id="services" className="py-28 bg-[#1B3A2D] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div ref={header.ref} className="text-center mb-16 transition-all duration-700"
          style={{ opacity: header.visible ? 1 : 0, transform: header.visible ? 'none' : 'translateY(30px)' }}>
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="w-10 h-0.5 bg-[#6BBD45]" />
            <span className="text-[#6BBD45] text-sm font-bold tracking-widest uppercase">Our Services</span>
            <div className="w-10 h-0.5 bg-[#6BBD45]" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-white mb-5 leading-tight">Comprehensive Solutions<br className="hidden sm:block" /> for Every Facility</h2>
          <p className="text-white/60 max-w-2xl mx-auto text-base md:text-lg">From maintenance to energy innovation — integrated solutions that enhance performance, reduce costs, and support sustainability.</p>
        </div>

        {/* Cards grid */}
        <div ref={grid.ref} className="grid md:grid-cols-2 gap-6">
          {services.map((svc, i) => {
            const Icon = svc.icon;
            return (
              <Link key={svc.title} href={svc.href}
                className="group block bg-white rounded-3xl overflow-hidden border border-gray-200 hover:border-[#6BBD45]/60 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
                style={{
                  opacity: grid.visible ? 1 : 0,
                  transform: grid.visible ? 'none' : 'translateY(40px)',
                  transition: `all 0.55s ease ${i * 110}ms`,
                }}>

                {/* Top image strip */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={svc.image}
                    alt={svc.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Subtle dark overlay for depth */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  {/* Arrow top-right */}
                  <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-[#6BBD45] transition-all duration-300">
                    <ArrowRight size={16} className="text-white group-hover:-rotate-45 transition-transform duration-300" />
                  </div>
                </div>

                {/* Content area */}
                <div className="p-7">
                  {/* Icon */}
                  <div className="w-12 h-12 bg-[#6BBD45] rounded-xl flex items-center justify-center mb-5 -mt-11 relative z-10 group-hover:scale-110 transition-transform duration-300"
                    style={{ boxShadow: '0 4px 14px rgba(107,189,69,0.35)' }}>
                    <Icon size={22} className="text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="font-black text-[#1B3A2D] text-xl mb-3 group-hover:text-[#6BBD45] transition-colors duration-300">{svc.title}</h3>

                  {/* Description */}
                  <p className="text-gray-500 text-base leading-relaxed mb-5">{svc.desc}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {svc.tags.map(t => (
                      <span key={t}
                        className="bg-[#6BBD45]/8 border border-[#6BBD45]/25 text-[#1B3A2D] group-hover:bg-[#6BBD45]/15 px-4 py-1.5 rounded-full font-medium transition-colors text-sm">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link href="/services"
            className="inline-flex items-center gap-2 bg-[#6BBD45] hover:bg-[#5aa838] text-white font-bold px-10 py-4 rounded-full transition-all duration-200 text-lg hover:-translate-y-0.5"
            style={{ boxShadow: '0 8px 32px rgba(107,189,69,0.40)' }}>
            View All Services <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
