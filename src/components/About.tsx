'use client';

import { CheckCircle } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const strengths = [
  'Strong technical knowledge & engineering expertise',
  'Proven energy efficiency programs with measurable ROI',
  'Industry-leading staff training & development',
  'Global expertise from strategic partners',
  'Robust management structure for customer peace of mind',
  'Continuously improved processes & systems',
];

const certs = [
  { code: 'ISO 9001', year: '2015', label: 'Quality Management' },
  { code: 'ISO 14001', year: '2015', label: 'Environmental Management' },
  { code: 'ISO 45001', year: '2018', label: 'Occupational Health & Safety' },
  { code: 'ISO 50001', year: '2011', label: 'Energy Management' },
];

export default function About() {
  const heading = useScrollReveal();
  const left = useScrollReveal(0.1);
  const right = useScrollReveal(0.1);

  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section label */}
        <div
          ref={heading.ref}
          className="flex items-center gap-3 mb-4 transition-all duration-700"
          style={{ opacity: heading.visible ? 1 : 0, transform: heading.visible ? 'none' : 'translateY(20px)' }}
        >
          <div className="w-8 h-0.5 bg-[#6BBD45]" />
          <span className="text-[#6BBD45] text-sm font-semibold tracking-widest uppercase">Who We Are</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div
            ref={left.ref}
            className="transition-all duration-700 delay-100"
            style={{ opacity: left.visible ? 1 : 0, transform: left.visible ? 'none' : 'translateX(-40px)' }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#1B3A2D] leading-tight mb-6">
              Malaysia's Trusted Total Solutions Provider
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              We are a Malaysian company established since <strong>1986</strong> and one of the most
              experienced Total Solutions Providers for Facilities Management and Energy Services in Malaysia.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Our organisation continues serving clients through professional workforce and resources,
              continuously improved processes and systems, while leveraging global expertise and experience
              of our strategic partners to deliver smart solutions and technical capabilities across diverse
              service portfolios.
            </p>
            <ul className="space-y-3 mb-10">
              {strengths.map((s, i) => (
                <li
                  key={s}
                  className="flex items-start gap-3 text-gray-700 transition-all duration-500"
                  style={{
                    opacity: left.visible ? 1 : 0,
                    transform: left.visible ? 'none' : 'translateX(-20px)',
                    transitionDelay: `${200 + i * 80}ms`,
                  }}
                >
                  <CheckCircle size={18} className="text-[#6BBD45] mt-0.5 shrink-0" />
                  <span className="text-sm">{s}</span>
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              className="inline-block bg-[#1B3A2D] hover:bg-[#6BBD45] text-white font-semibold px-8 py-4 rounded-full transition-colors duration-200 text-sm"
            >
              Talk To Our Experts
            </a>
          </div>

          {/* Right */}
          <div
            ref={right.ref}
            className="space-y-6 transition-all duration-700 delay-200"
            style={{ opacity: right.visible ? 1 : 0, transform: right.visible ? 'none' : 'translateX(40px)' }}
          >
            <div className="bg-[#1B3A2D] rounded-2xl p-8 text-white">
              <p className="text-[#6BBD45] font-semibold text-sm tracking-wider uppercase mb-4">Our Promise</p>
              <blockquote className="text-2xl font-bold leading-snug">
                "Assets need <span className="text-[#6BBD45]">Tender Loving Care</span> — We LOWER Your Total Cost of Ownership."
              </blockquote>
            </div>

            <div>
              <p className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-4">Certifications</p>
              <div className="grid grid-cols-2 gap-4">
                {certs.map((c, i) => (
                  <div
                    key={c.code}
                    className="border border-gray-100 rounded-xl p-5 hover:border-[#6BBD45] hover:shadow-md transition-all duration-200"
                    style={{
                      opacity: right.visible ? 1 : 0,
                      transform: right.visible ? 'none' : 'translateY(20px)',
                      transition: `all 0.5s ease ${300 + i * 100}ms`,
                    }}
                  >
                    <div className="text-[#6BBD45] font-bold text-lg">{c.code}</div>
                    <div className="text-xs text-gray-400">{c.year}</div>
                    <div className="text-sm text-gray-600 mt-1">{c.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-5 flex items-center gap-4">
              <div className="w-10 h-10 bg-[#6BBD45] rounded-full flex items-center justify-center text-white font-bold text-xs">M</div>
              <div>
                <div className="text-sm font-semibold text-gray-700">Cofreth (M) Sdn Bhd</div>
                <div className="text-xs text-gray-400">Reg. No. 198601002912 (152066-P)</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
