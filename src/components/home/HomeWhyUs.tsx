'use client';
import { CheckCircle2, Shield, Lightbulb, Leaf, Wrench, BarChart3, Globe, Clock } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const reasons = [
  { icon: Clock, title: '38+ Years Experience', desc: 'Founded in 1986, one of Malaysia\'s most experienced Total FM providers with a proven track record.' },
  { icon: Shield, title: 'Quadruple ISO Certified', desc: 'Certified under ISO 9001, 14001, 45001 and 50001 — quality, environment, safety and energy.' },
  { icon: Lightbulb, title: 'Energy Innovation Leader', desc: 'First in Asia to design District Cooling System with Thermal Energy Storage (1997–2000).' },
  { icon: Leaf, title: 'Registered ESCO', desc: 'Accredited by Malaysia Green Technology Corporation and MAESCO for energy services.' },
  { icon: Wrench, title: 'Total FM Solutions', desc: 'End-to-end capabilities from hard services to soft services, energy and smart technology.' },
  { icon: BarChart3, title: 'Guaranteed Savings', desc: 'Our Energy Performance Contracting (CoPC) guarantees measurable cost and energy reductions.' },
  { icon: Globe, title: 'Global Expertise', desc: 'Leverage strategic partnerships for international best practices in FM and energy management.' },
  { icon: CheckCircle2, title: 'Award-Winning', desc: 'Multiple Frost & Sullivan Malaysia Excellence Awards (2007, 2010, 2015, 2016, 2017).' },
];

export default function HomeWhyUs() {
  const header = useScrollReveal();
  const grid = useScrollReveal(0.05);

  return (
    <section className="py-24 overflow-hidden" style={{ background: 'linear-gradient(135deg, #0F2419 0%, #1B3A2D 100%)' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div ref={header.ref} className="text-center mb-14 transition-all duration-700" style={{ opacity: header.visible ? 1 : 0, transform: header.visible ? 'none' : 'translateY(30px)' }}>
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-0.5 bg-[#6BBD45]" />
            <span className="text-[#6BBD45] text-sm font-semibold tracking-widest uppercase">Why Choose Us</span>
            <div className="w-8 h-0.5 bg-[#6BBD45]" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">The Cofreth Advantage</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Decades of expertise, cutting-edge technology, and a commitment to excellence set us apart as Malaysia's premier FM and energy solutions provider.</p>
        </div>

        <div ref={grid.ref} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {reasons.map((r, i) => {
            const Icon = r.icon;
            return (
              <div key={r.title} className="group p-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-[#6BBD45]/10 hover:border-[#6BBD45]/40 transition-all duration-300 cursor-default"
                style={{ opacity: grid.visible ? 1 : 0, transform: grid.visible ? 'none' : 'translateY(30px)', transition: `all 0.5s ease ${i * 60}ms` }}>
                <div className="w-12 h-12 bg-[#6BBD45]/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#6BBD45] transition-colors">
                  <Icon size={22} className="text-[#6BBD45] group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-white font-bold text-sm mb-2">{r.title}</h3>
                <p className="text-gray-400 text-xs leading-relaxed">{r.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
