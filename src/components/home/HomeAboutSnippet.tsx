'use client';
import Link from 'next/link';
import { Award, Users, Globe, Zap } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const highlights = [
  { icon: Award, value: '38+', label: 'Years of Excellence', desc: 'Established in 1986, one of Malaysia\'s most experienced FM providers.' },
  { icon: Users, value: '500+', label: 'Skilled Workforce', desc: 'Trained professionals across all FM and energy service disciplines.' },
  { icon: Globe, value: '4', label: 'ISO Certifications', desc: 'ISO 9001, 14001, 45001 & 50001 certified for quality and safety.' },
  { icon: Zap, value: '#1', label: 'Energy Pioneer', desc: 'First in Asia to design District Cooling System with Thermal Energy Storage.' },
];

export default function HomeAboutSnippet() {
  const left = useScrollReveal();
  const right = useScrollReveal(0.1);

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div ref={left.ref} className="transition-all duration-700" style={{ opacity: left.visible ? 1 : 0, transform: left.visible ? 'none' : 'translateX(-40px)' }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-0.5 bg-[#6BBD45]" />
              <span className="text-[#6BBD45] text-sm font-semibold tracking-widest uppercase">Who We Are</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1B3A2D] leading-tight mb-6">
              Malaysia's Trusted FM & Energy Solutions Provider
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Cofreth (M) Sdn Bhd is a Malaysian company established since <strong>1986</strong>, and one of the most experienced Total Solutions Providers for Facilities Management and Energy Services in Malaysia.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Our <strong>Mission</strong> is to be recognised as the Leading Provider of Quality Services for Total Facilities Management and All Utilities. Our <strong>Vision</strong> is to become an International Service Provider in Facilities Management & Energy Services.
            </p>
            <Link href="/about" className="inline-flex items-center gap-2 bg-[#1B3A2D] hover:bg-[#6BBD45] text-white font-semibold px-8 py-4 rounded-full transition-colors duration-200 text-sm">
              Learn About Us
            </Link>
          </div>

          <div ref={right.ref} className="grid grid-cols-2 gap-4 transition-all duration-700 delay-100" style={{ opacity: right.visible ? 1 : 0, transform: right.visible ? 'none' : 'translateX(40px)' }}>
            {highlights.map((h, i) => {
              const Icon = h.icon;
              return (
                <div key={h.label} className="p-6 rounded-2xl border border-gray-100 hover:border-[#6BBD45] hover:shadow-lg transition-all duration-300 group"
                  style={{ opacity: right.visible ? 1 : 0, transform: right.visible ? 'none' : 'translateY(20px)', transition: `all 0.5s ease ${i * 100}ms` }}>
                  <div className="w-12 h-12 bg-[#6BBD45]/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#6BBD45] transition-colors">
                    <Icon size={22} className="text-[#6BBD45] group-hover:text-white transition-colors" />
                  </div>
                  <div className="text-2xl font-bold text-[#1B3A2D] mb-1">{h.value}</div>
                  <div className="text-sm font-semibold text-gray-700 mb-2">{h.label}</div>
                  <p className="text-xs text-gray-500 leading-relaxed">{h.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
