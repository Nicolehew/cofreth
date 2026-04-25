'use client';
import Link from 'next/link';
import { Building2, Zap, Leaf, Cpu, ArrowRight, CheckCircle } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useState } from 'react';

const services = [
  {
    icon: Building2, title: 'Facilities Management', href: '/services/facilities-management',
    color: '#1B3A2D',
    desc: 'Total facility management, operation & maintenance, technical due diligence, and FM consultancy to keep your assets performing at their best.',
    items: ['Total Facility Management', 'Operation & Maintenance', 'Technical Due Diligence', 'FM Consultancy Services'],
    stat: { value: '38+', label: 'Years FM experience' },
  },
  {
    icon: Zap, title: 'Energy Services', href: '/services/energy-services',
    color: '#2d5a1b',
    desc: 'Comprehensive energy audit, efficiency programs, performance contracting and district cooling solutions that guarantee measurable savings.',
    items: ['Energy Audit (ASHRAE Levels 1–3)', 'Cofreth Energy Efficiency Programme (CEEP©)', 'Energy Performance Contracting (CoPC)', 'District Cooling & Thermal Energy Storage', 'Energy Consultancy'],
    stat: { value: 'ESCO', label: 'Registered — guaranteed savings' },
  },
  {
    icon: Leaf, title: 'Green Expertise', href: '/services/green-expertise',
    color: '#3a7a22',
    desc: 'Accredited green building commissioning, renewable energy and solar thermal solutions for a sustainable built environment.',
    items: ['Green Building Commissioning Agent', 'GBI & GreenRE Accredited Professional', 'Renewable Energy & Cogeneration', 'Solar Thermal Solutions'],
    stat: { value: 'GBI', label: 'Accredited professionals' },
  },
  {
    icon: Cpu, title: 'Smart Technology', href: '/services/smart-technology',
    color: '#4a9230',
    desc: 'ARCHIBUS-powered TIFM, Building Information Modeling, and cloud-based energy monitoring for intelligent facility management.',
    items: ['Total Infrastructure FM (TIFM) — ARCHIBUS', 'Building Information Modeling (BIM)', 'Cloud-Based Energy Monitoring', 'Digital Twin Development'],
    stat: { value: 'BIM', label: 'Digital twin & IoT ready' },
  },
];

function ServiceCard({ svc, i }: { svc: typeof services[0]; i: number }) {
  const reveal = useScrollReveal(0.1);
  const [hovered, setHovered] = useState(false);
  const Icon = svc.icon;

  return (
    <div ref={reveal.ref} className="transition-all duration-700"
      style={{ opacity: reveal.visible ? 1 : 0, transform: reveal.visible ? 'none' : 'translateY(50px)', transitionDelay: `${i * 100}ms` }}>
      <div
        className="group relative rounded-3xl overflow-hidden border border-gray-100 hover:border-[#6BBD45]/30 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-default"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Gradient top bar */}
        <div className="h-2 w-full transition-all duration-500"
          style={{ background: hovered ? '#6BBD45' : `linear-gradient(90deg, ${svc.color}, #6BBD45)` }} />

        <div className="p-8">
          <div className="flex items-start justify-between mb-6">
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
              style={{ background: hovered ? '#6BBD45' : '#6BBD4515' }}>
              <Icon size={26} className="transition-colors duration-300" style={{ color: hovered ? '#fff' : '#6BBD45' }} />
            </div>
            <div className="text-right">
              <div className="text-2xl font-black text-[#6BBD45]">{svc.stat.value}</div>
              <div className="text-[10px] text-gray-400 font-medium uppercase tracking-wider">{svc.stat.label}</div>
            </div>
          </div>

          <h2 className="text-xl font-bold text-[#1B3A2D] mb-3 group-hover:text-[#6BBD45] transition-colors">{svc.title}</h2>
          <p className="text-gray-500 text-sm leading-relaxed mb-6">{svc.desc}</p>

          <ul className="space-y-2 mb-8">
            {svc.items.map(item => (
              <li key={item} className="flex items-start gap-2.5">
                <CheckCircle size={14} className="text-[#6BBD45] mt-0.5 shrink-0" />
                <span className="text-sm text-gray-600">{item}</span>
              </li>
            ))}
          </ul>

          <Link href={svc.href}
            className="inline-flex items-center gap-2 bg-[#1B3A2D] group-hover:bg-[#6BBD45] text-white font-semibold px-6 py-3 rounded-full text-sm transition-all duration-300">
            Explore Service <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function ServicesOverviewPage() {
  const hero = useScrollReveal();
  const intro = useScrollReveal();

  return (
    <>
      {/* Hero with video */}
      <div className="pt-32 pb-20 text-white relative overflow-hidden min-h-[60vh] flex items-center">
        <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover" style={{ zIndex: 0 }}>
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(12,28,18,0.93) 0%, rgba(27,58,45,0.88) 60%, rgba(12,28,18,0.95) 100%)', zIndex: 1 }} />
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'linear-gradient(#6BBD45 1px, transparent 1px), linear-gradient(90deg, #6BBD45 1px, transparent 1px)', backgroundSize: '60px 60px', zIndex: 2 }} />
        <div ref={hero.ref} className="relative max-w-4xl mx-auto px-6 text-center transition-all duration-700" style={{ opacity: hero.visible ? 1 : 0, transform: hero.visible ? 'none' : 'translateY(30px)', zIndex: 3 }}>
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-0.5 bg-[#6BBD45]" />
            <span className="text-[#6BBD45] text-sm font-semibold tracking-widest uppercase">Our Services</span>
            <div className="w-8 h-0.5 bg-[#6BBD45]" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Comprehensive Solutions<br /><span className="text-[#6BBD45]">for Every Facility</span></h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">From maintenance to energy innovation — we deliver integrated solutions that enhance performance, reduce costs, and support sustainability.</p>
        </div>
      </div>

      {/* Intro strip */}
      <div ref={intro.ref} className="bg-[#6BBD45] transition-all duration-700" style={{ opacity: intro.visible ? 1 : 0 }}>
        <div className="max-w-6xl mx-auto px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white">
          {['Facilities Management', 'Energy Services', 'Green Expertise', 'Smart Technology'].map((s, i) => (
            <div key={s} className="flex items-center justify-center gap-2 text-sm font-semibold">
              <span className="w-2 h-2 bg-white/60 rounded-full shrink-0" />{s}
            </div>
          ))}
        </div>
      </div>

      {/* Services grid */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((svc, i) => <ServiceCard key={svc.title} svc={svc} i={i} />)}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="bg-gradient-to-br from-[#1B3A2D] to-[#0F2419] rounded-3xl p-12 text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Not sure which service you need?</h2>
            <p className="text-gray-300 text-sm mb-8 max-w-lg mx-auto">Our specialists will assess your facility and recommend the right combination of services to meet your goals and budget.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-[#6BBD45] hover:bg-[#5aa838] text-white font-semibold px-8 py-3 rounded-full transition-all text-sm hover:-translate-y-0.5">
                Schedule a Consultation
              </Link>
              <Link href="/about" className="border border-white/30 hover:border-[#6BBD45] text-white hover:text-[#6BBD45] font-semibold px-8 py-3 rounded-full transition-all text-sm">
                Learn About Cofreth
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
