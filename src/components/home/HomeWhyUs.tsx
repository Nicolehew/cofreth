'use client';
import { CheckCircle2, Shield, Lightbulb, Leaf, Wrench, BarChart3, Globe, Clock } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const reasons = [
  { icon: Clock,         title: '38+ Years Experience',      desc: 'Founded in 1986, one of Malaysia\'s most experienced Total FM providers with a proven track record.',               color: '#6BBD45', num: '01' },
  { icon: Shield,        title: '5× ISO Certified',          desc: 'Certified under ISO 9001, 14001, 45001, 50001 and 41001 — quality, environment, safety, energy and FM.',            color: '#3b82f6', num: '02' },
  { icon: Lightbulb,     title: 'Energy Innovation Leader',  desc: 'First in Asia to design District Cooling System with Thermal Energy Storage (1997–2000).',                          color: '#f59e0b', num: '03' },
  { icon: Leaf,          title: 'Registered ESCO',           desc: 'Accredited by Malaysia Green Technology Corporation and MAESCO for energy services.',                               color: '#10b981', num: '04' },
  { icon: Wrench,        title: 'Total FM Solutions',        desc: 'End-to-end capabilities from hard services to soft services, energy and smart technology.',                         color: '#8b5cf6', num: '05' },
  { icon: BarChart3,     title: 'Guaranteed Savings',        desc: 'Our Energy Performance Contracting (CoPC) guarantees measurable cost and energy reductions.',                       color: '#ef4444', num: '06' },
  { icon: Globe,         title: 'Global Expertise',          desc: 'Leverage strategic partnerships for international best practices in FM and energy management.',                     color: '#06b6d4', num: '07' },
  { icon: CheckCircle2,  title: 'Award-Winning',             desc: 'Multiple Frost & Sullivan Malaysia Excellence Awards (2007, 2010, 2015, 2016, 2017) and NEA Champion 2021.',       color: '#f97316', num: '08' },
];

function AdvantageCard({ r, i }: { r: typeof reasons[0]; i: number }) {
  const reveal = useScrollReveal(0.05);
  const Icon = r.icon;
  return (
    <div
      ref={reveal.ref}
      className="group relative bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-2xl hover:-translate-y-2 transition-all duration-400 overflow-hidden cursor-default"
      style={{
        opacity: reveal.visible ? 1 : 0,
        transform: reveal.visible ? 'translateY(0)' : 'translateY(36px)',
        transition: `opacity 0.6s ease ${i * 70}ms, transform 0.6s ease ${i * 70}ms, box-shadow 0.3s, translate 0.3s`,
      }}
    >
      {/* Top colour accent bar */}
      <div className="absolute top-0 left-0 right-0 h-0.5 rounded-t-2xl transition-all duration-300 group-hover:h-1" style={{ background: r.color }} />

      {/* Background number */}
      <span className="absolute top-3 right-4 text-6xl font-black opacity-[0.12] select-none pointer-events-none" style={{ color: r.color, lineHeight: 1 }}>{r.num}</span>

      {/* Icon */}
      <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110" style={{ background: r.color + '15' }}>
        <Icon size={22} style={{ color: r.color }} />
      </div>

      <h3 className="font-black text-[#1B3A2D] text-xl mb-2 group-hover:text-[#1B3A2D]">{r.title}</h3>
      <p className="text-gray-500 text-base leading-relaxed">{r.desc}</p>
    </div>
  );
}

export default function HomeWhyUs() {
  const header = useScrollReveal();

  return (
    <section className="py-16 lg:py-20 xl:py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div ref={header.ref} className="text-center mb-14 transition-all duration-700"
          style={{ opacity: header.visible ? 1 : 0, transform: header.visible ? 'none' : 'translateY(30px)' }}>
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-0.5 bg-[#6BBD45]" />
            <span className="text-[#6BBD45] text-sm font-semibold tracking-widest uppercase">Why Choose Us</span>
            <div className="w-8 h-0.5 bg-[#6BBD45]" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-[#1B3A2D] mb-4">The Cofreth Advantage</h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-base leading-relaxed">
            Decades of expertise, cutting-edge technology, and a commitment to excellence set us apart as Malaysia's premier FM and energy solutions provider.
          </p>
        </div>

        {/* Card grid */}
        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-5">
          {reasons.map((r, i) => <AdvantageCard key={r.title} r={r} i={i} />)}
        </div>
      </div>
    </section>
  );
}
