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
    bg: 'from-[#1B3A2D] to-[#0F2419]',
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=75&fit=crop&auto=format',
  },
  {
    icon: Zap,
    title: 'Energy Services',
    href: '/services/energy-services',
    desc: 'Energy audits, efficiency programs, performance contracting, and district cooling solutions that guarantee measurable savings.',
    tags: ['Energy Audit', 'CEEP©', 'CoPC'],
    bg: 'from-[#2a5a40] to-[#1B3A2D]',
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=75&fit=crop&auto=format',
  },
  {
    icon: Leaf,
    title: 'Green Expertise',
    href: '/services/green-expertise',
    desc: 'Green building commissioning, accredited professional services, renewable energy, and solar thermal solutions.',
    tags: ['Green Building', 'Solar', 'Cogeneration'],
    bg: 'from-[#1B3A2D] to-[#0F2419]',
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=75&fit=crop&auto=format',
  },
  {
    icon: Cpu,
    title: 'Smart Technology',
    href: '/services/smart-technology',
    desc: 'ARCHIBUS-powered TIFM, BIM, and cloud-based energy monitoring platforms for intelligent facility operations.',
    tags: ['ARCHIBUS', 'BIM', 'IoT Monitoring'],
    bg: 'from-[#2a5a40] to-[#1B3A2D]',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=75&fit=crop&auto=format',
  },
];

export default function HomeServices() {
  const header = useScrollReveal();
  const grid = useScrollReveal(0.05);

  return (
    <section id="services" className="py-28 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={header.ref} className="text-center mb-16 transition-all duration-700"
          style={{ opacity: header.visible ? 1 : 0, transform: header.visible ? 'none' : 'translateY(30px)' }}>
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="w-10 h-0.5 bg-[#6BBD45]" />
            <span className="text-[#6BBD45] text-sm font-bold tracking-widest uppercase">Our Services</span>
            <div className="w-10 h-0.5 bg-[#6BBD45]" />
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-[#1B3A2D] mb-5 leading-tight">Comprehensive Solutions<br />for Every Facility</h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">From maintenance to energy innovation — integrated solutions that enhance performance, reduce costs, and support sustainability.</p>
        </div>

        <div ref={grid.ref} className="grid md:grid-cols-2 gap-7">
          {services.map((svc, i) => {
            const Icon = svc.icon;
            return (
              <Link key={svc.title} href={svc.href}
                className="group block rounded-3xl overflow-hidden transition-all duration-400 hover:shadow-2xl hover:-translate-y-2"
                style={{ opacity: grid.visible ? 1 : 0, transform: grid.visible ? 'none' : 'translateY(40px)', transition: `all 0.55s ease ${i * 110}ms` }}>
                {/* Photo + gradient overlay */}
                <div className="relative h-full" style={{ minHeight: 340 }}>
                  <img
                    src={svc.image}
                    alt={svc.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${svc.bg} opacity-88 group-hover:opacity-82 transition-opacity duration-300`} />
                  <div className="relative p-9 h-full flex flex-col text-white">
                    <div className="flex items-start justify-between mb-7">
                      <div className="w-16 h-16 bg-[#6BBD45]/25 rounded-2xl flex items-center justify-center group-hover:bg-[#6BBD45] transition-colors duration-300 border border-[#6BBD45]/30">
                        <Icon size={30} className="text-[#6BBD45] group-hover:text-white transition-colors" />
                      </div>
                      <ArrowRight size={22} className="text-white/30 group-hover:text-[#6BBD45] group-hover:rotate-[-45deg] transition-all duration-300 mt-1" />
                    </div>
                    <h3 className="text-3xl font-black mb-4">{svc.title}</h3>
                    <p className="text-gray-300 text-base leading-relaxed mb-7 flex-1">{svc.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {svc.tags.map(t => (
                        <span key={t} className="text-sm bg-white/12 group-hover:bg-[#6BBD45]/25 border border-white/20 px-4 py-1.5 rounded-full transition-colors font-medium">{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Link href="/services" className="inline-flex items-center gap-2 border-2 border-[#1B3A2D] text-[#1B3A2D] hover:bg-[#1B3A2D] hover:text-white font-bold px-10 py-4 rounded-full transition-all duration-200 text-lg hover:-translate-y-0.5">
            View All Services <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
