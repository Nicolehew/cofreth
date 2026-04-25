'use client';

import { useState } from 'react';
import { Building2, Zap, Leaf, Cpu, ArrowRight } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const services = [
  {
    icon: Building2,
    title: 'Facilities Management',
    tagline: 'Comprehensive FM Solutions',
    description:
      'End-to-end facility management services designed to optimise your built environment, reduce operational costs, and ensure business continuity.',
    items: ['Total Facility Management', 'Operation & Maintenance', 'Technical Due Diligence', 'FM Consultancy Services'],
    color: '#1B3A2D',
  },
  {
    icon: Zap,
    title: 'Energy Services',
    tagline: 'Smarter Energy Management',
    description:
      'Proven energy efficiency programs and performance contracting models that deliver measurable cost savings and sustainability outcomes.',
    items: ['Energy Audit', 'Cofreth Energy Efficiency Program (CEEP)', 'Cofreth Energy Performance Contracting (CoPC)', 'District Cooling & Thermal Energy Storage', 'Energy Consultancy'],
    color: '#2a5a40',
  },
  {
    icon: Leaf,
    title: 'Green Expertise',
    tagline: 'Sustainable Building Solutions',
    description:
      'Specialist green building services that help you achieve sustainability certifications, reduce carbon footprint, and implement renewable energy solutions.',
    items: ['Green Building Commissioning Agent & Specialist', 'Accredited Professional & Facilitator', 'Renewable Energy & Cogeneration', 'Solar Thermal Solutions'],
    color: '#1B3A2D',
  },
  {
    icon: Cpu,
    title: 'Smart Technology',
    tagline: 'Digital FM Innovation',
    description:
      'Cutting-edge technology platforms that bring intelligence to your facilities — from ARCHIBUS-powered TIFM to cloud-based energy monitoring.',
    items: ['Total Infrastructure FM (TIFM) — ARCHIBUS', 'Building Information Modeling (BIM)', 'Online Cloud-Based Energy Monitoring System'],
    color: '#2a5a40',
  },
];

export default function Services() {
  const [hovered, setHovered] = useState<number | null>(null);
  const header = useScrollReveal();
  const grid = useScrollReveal(0.05);

  return (
    <section id="services" className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div
          ref={header.ref}
          className="text-center mb-16 transition-all duration-700"
          style={{ opacity: header.visible ? 1 : 0, transform: header.visible ? 'none' : 'translateY(30px)' }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-0.5 bg-[#6BBD45]" />
            <span className="text-[#6BBD45] text-sm font-semibold tracking-widest uppercase">Our Services</span>
            <div className="w-8 h-0.5 bg-[#6BBD45]" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1B3A2D] mb-4">Our Valuable FM Services</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            A comprehensive suite of facilities management, energy, and smart technology solutions tailored for every sector.
          </p>
        </div>

        {/* Cards */}
        <div ref={grid.ref} className="grid md:grid-cols-2 gap-6">
          {services.map((svc, i) => {
            const Icon = svc.icon;
            const isHovered = hovered === i;
            return (
              <div
                key={svc.title}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                className="group relative rounded-2xl overflow-hidden cursor-pointer"
                style={{
                  background: isHovered ? `linear-gradient(135deg, ${svc.color} 0%, #0F2419 100%)` : '#ffffff',
                  border: isHovered ? 'none' : '1px solid #e5e7eb',
                  transform: grid.visible ? (isHovered ? 'translateY(-6px)' : 'none') : 'translateY(40px)',
                  opacity: grid.visible ? 1 : 0,
                  boxShadow: isHovered ? '0 20px 60px rgba(27,58,45,0.3)' : 'none',
                  transition: `transform 0.4s ease ${i * 100}ms, opacity 0.5s ease ${i * 100}ms, background 0.3s, box-shadow 0.3s`,
                }}
              >
                <div className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div
                      className="w-14 h-14 rounded-xl flex items-center justify-center"
                      style={{ background: isHovered ? 'rgba(107,189,69,0.2)' : '#f0fdf4', transition: 'background 0.3s' }}
                    >
                      <Icon size={26} color={isHovered ? '#6BBD45' : '#1B3A2D'} style={{ transition: 'color 0.3s' }} />
                    </div>
                    <ArrowRight
                      size={20}
                      style={{
                        color: isHovered ? '#6BBD45' : '#d1d5db',
                        transform: isHovered ? 'rotate(-45deg)' : 'none',
                        transition: 'all 0.3s',
                      }}
                    />
                  </div>
                  <div className="text-xs font-semibold tracking-widest uppercase mb-2 text-[#6BBD45]">{svc.tagline}</div>
                  <h3
                    className="text-2xl font-bold mb-3"
                    style={{ color: isHovered ? '#ffffff' : '#1B3A2D', transition: 'color 0.3s' }}
                  >
                    {svc.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed mb-6"
                    style={{ color: isHovered ? '#d1fae5' : '#6b7280', transition: 'color 0.3s' }}
                  >
                    {svc.description}
                  </p>
                  <ul className="space-y-2">
                    {svc.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2 text-sm"
                        style={{ color: isHovered ? '#ffffff' : '#374151', transition: 'color 0.3s' }}
                      >
                        <span className="w-1.5 h-1.5 rounded-full shrink-0 bg-[#6BBD45]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
