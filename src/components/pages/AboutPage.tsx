'use client';
import Link from 'next/link';
import { CheckCircle, Award, ArrowRight } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useState, useEffect, useRef } from 'react';

const values = [
  { icon: '🎯', title: 'Professionalism', desc: 'Highest standards of conduct, expertise and service delivery in everything we do.' },
  { icon: '🤝', title: 'Team Spirit', desc: 'Collaboration across departments and with clients is central to our philosophy.' },
  { icon: '🌱', title: 'Respect for Environment', desc: 'Committed to sustainable practices aligned with UN Sustainable Development Goals.' },
  { icon: '💡', title: 'Value Creation', desc: 'Every engagement is designed to create measurable, lasting value for clients.' },
  { icon: '🌐', title: 'Partnership', desc: 'We build long-term relationships with clients and strategic global partners.' },
  { icon: '⚖️', title: 'Good Ethics', desc: 'Integrity and transparency guide every decision and client interaction.' },
];

const milestones = [
  { year: '1986', event: 'Cofreth (M) Sdn Bhd incorporated in Malaysia (Reg. No. 198601002912 | 152066-P)', color: '#6BBD45' },
  { year: '1996', event: 'First FM company in Malaysia to achieve ISO 9002:1994 accreditation; First to provide a Comprehensive FM Contract', color: '#5aa838' },
  { year: '1997', event: 'First to provide 15-year O&M services for the Ministry of Works Malaysia HQ', color: '#4a9230' },
  { year: '1997–2000', event: 'First in Asia (outside Japan) to design & build a District Cooling System with 6.6km underground chilled water reticulation', color: '#6BBD45' },
  { year: '2001', event: 'First ESCO to offer Capped & Guaranteed Energy Efficiency Performance (CEEP) contracts', color: '#5aa838' },
  { year: '2003', event: 'First FM company to provide full services to the Putrajaya International Convention Centre (PICC)', color: '#4a9230' },
  { year: '2007', event: 'Frost & Sullivan Customer Service Leadership Award (Integrated FM Services Market) · First to introduce Balanced Scorecard for FM Performance Measurement', color: '#6BBD45' },
  { year: '2009', event: 'First company appointed to formulate Malaysia\'s National Energy Efficiency Master Plan', color: '#5aa838' },
  { year: '2010', event: 'Frost & Sullivan Malaysia Green Excellence Award — Facilities Management Company of the Year', color: '#4a9230' },
  { year: '2013', event: 'First FM company to implement BIM (Building Information Modelling) for a cancer hospital in Malaysia', color: '#6BBD45' },
  { year: '2015', event: 'Frost & Sullivan Customer Service Leadership Award — Integrated Facilities Management', color: '#5aa838' },
  { year: '2016', event: 'Frost & Sullivan Competitive Strategy Innovation & Leadership Award — Facilities Management', color: '#4a9230' },
  { year: '2017', event: 'BrandLaureate SMEs BestBrands Award — Industrial Facilities Management category', color: '#6BBD45' },
  { year: '2018', event: 'First ESCO to win 1st Prize at inaugural National Energy Awards (NEA) of Malaysia · SME Icons Award · ASEAN Energy Award 1st Runner Up', color: '#5aa838' },
  { year: '2021', event: 'NEA 2021 Energy Performance Contracting (EPC) Champion Award — jointly with Besi Apac', color: '#4a9230' },
  { year: 'Today', event: '5× ISO certified ESCO with 38+ years of excellence, serving airports, data centres, universities and landmark buildings across Malaysia', color: '#6BBD45' },
];

const certs = [
  { code: 'ISO 9001:2015', label: 'Quality Management System', icon: '✓' },
  { code: 'ISO 14001:2015', label: 'Environmental Management System', icon: '🌿' },
  { code: 'ISO 45001:2018', label: 'Occupational Health & Safety', icon: '🛡️' },
  { code: 'ISO 50001:2018', label: 'Energy Management System', icon: '⚡' },
  { code: 'ISO 41001:2018', label: 'Facility Management System', icon: '🏢' },
];

function Counter({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started.current) {
        started.current = true;
        let s = 0;
        const step = (ts: number) => {
          if (!s) s = ts;
          const p = Math.min((ts - s) / 1600, 1);
          setCount(Math.floor(p * target));
          if (p < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      }
    });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [target]);
  return <span ref={ref}>{count}{suffix}</span>;
}

function MilestoneRow({ m, i }: { m: typeof milestones[0]; i: number }) {
  const reveal = useScrollReveal(0.1);
  const isLeft = i % 2 === 0;
  return (
    <div ref={reveal.ref} className={`flex gap-4 md:gap-0 transition-all duration-700 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}
      style={{ opacity: reveal.visible ? 1 : 0, transform: reveal.visible ? 'none' : `translateX(${isLeft ? -40 : 40}px)`, transitionDelay: `${i * 60}ms` }}>
      {/* Content side */}
      <div className={`flex-1 ${isLeft ? 'md:text-right md:pr-10' : 'md:text-left md:pl-10'}`}>
        <div className={`inline-block bg-white border border-gray-100 shadow-md rounded-2xl p-5 max-w-sm ${isLeft ? 'ml-auto' : 'mr-auto'} hover:shadow-xl hover:border-[#6BBD45]/30 transition-all duration-300 group`}>
          <span className="text-xs font-bold text-[#6BBD45] tracking-widest uppercase block mb-1">{m.year}</span>
          <p className="text-sm text-gray-700 font-medium leading-relaxed">{m.event}</p>
        </div>
      </div>
      {/* Center dot */}
      <div className="hidden md:flex flex-col items-center shrink-0 w-8">
        <div className="w-4 h-4 rounded-full border-2 border-[#6BBD45] bg-white mt-4 shrink-0" style={{ boxShadow: `0 0 0 4px ${m.color}22` }} />
        {i < milestones.length - 1 && <div className="w-0.5 flex-1 bg-gray-200 mt-1" />}
      </div>
      {/* Empty side */}
      <div className="flex-1 hidden md:block" />
    </div>
  );
}

export default function AboutPage() {
  const hero = useScrollReveal();
  const stats = useScrollReveal();
  const story = useScrollReveal();
  const mission = useScrollReveal();
  const vals = useScrollReveal(0.05);
  const certs_ref = useScrollReveal();
  const awards = useScrollReveal();

  return (
    <>
      {/* Hero with video background */}
      <div className="pt-32 pb-0 text-white relative overflow-hidden min-h-[70vh] flex items-center">
        <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover" style={{ zIndex: 0 }}>
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(12,28,18,0.94) 0%, rgba(27,58,45,0.90) 60%, rgba(12,28,18,0.96) 100%)', zIndex: 1 }} />
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'linear-gradient(#6BBD45 1px, transparent 1px), linear-gradient(90deg, #6BBD45 1px, transparent 1px)', backgroundSize: '60px 60px', zIndex: 2 }} />
        <div ref={hero.ref} className="relative max-w-4xl mx-auto px-6 text-center pb-24 transition-all duration-700" style={{ opacity: hero.visible ? 1 : 0, transform: hero.visible ? 'none' : 'translateY(40px)', zIndex: 3 }}>
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-0.5 bg-[#6BBD45]" />
            <span className="text-[#6BBD45] text-sm font-semibold tracking-widest uppercase">About Cofreth</span>
            <div className="w-8 h-0.5 bg-[#6BBD45]" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">38 Years of<br /><span className="text-[#6BBD45]">FM Excellence</span></h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed mb-4">
            Since 1986, Cofreth has been Malaysia's pioneer in integrated facilities management,
            energy services, and sustainable built environment solutions.
          </p>
          <p className="text-gray-500 text-sm mb-8">Reg. No. 198601002912 (152066-P) · No. 39, Jalan USJ Sentral 3, USJ Sentral, 47600 Subang Jaya, Selangor</p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-[#6BBD45] hover:bg-[#5aa838] text-white font-semibold px-8 py-3 rounded-full transition-all text-sm">
            Talk to Our Team <ArrowRight size={16} />
          </Link>
        </div>
      </div>

      {/* Animated stats bar */}
      <div style={{ background: 'linear-gradient(90deg, #0a1810 0%, #1B3A2D 50%, #0a1810 100%)', borderTop: '1px solid rgba(107,189,69,0.2)', borderBottom: '1px solid rgba(107,189,69,0.2)' }}>
        <div ref={stats.ref} className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center transition-all duration-700"
          style={{ opacity: stats.visible ? 1 : 0, transform: stats.visible ? 'none' : 'translateY(20px)' }}>
          {[
            { val: 38, suf: '+', label: 'Years of Excellence' },
            { val: 30, suf: '+', label: 'Major Clients' },
            { val: 5, suf: '', label: 'ISO Certifications' },
            { val: 5, suf: 'x', label: 'Frost & Sullivan Awards' },
          ].map(s => (
            <div key={s.label}>
              <div className="text-4xl md:text-5xl font-bold text-[#6BBD45]"><Counter target={s.val} suffix={s.suf} /></div>
              <div className="text-gray-400 text-sm mt-1 font-medium">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Company story + video */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div ref={story.ref} className="transition-all duration-700" style={{ opacity: story.visible ? 1 : 0, transform: story.visible ? 'none' : 'translateX(-40px)' }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-0.5 bg-[#6BBD45]" />
              <span className="text-[#6BBD45] text-sm font-semibold tracking-widest uppercase">Our Story</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1B3A2D] mb-6">Malaysia's FM Pioneer Since 1986</h2>
            <div className="space-y-4 text-gray-600 text-sm leading-relaxed">
              <p>Cofreth (M) Sdn Bhd was established in <strong className="text-[#1B3A2D]">1986</strong> (Reg. No. 198601002912 | 152066-P) with a clear vision: to be the leading provider of quality services for Total Facilities Management and all utilities across Malaysia.</p>
              <p>We were the <strong className="text-[#1B3A2D]">first FM company in Malaysia</strong> to achieve ISO 9002 accreditation, and the <strong className="text-[#1B3A2D]">first in Asia outside Japan</strong> to design a District Cooling System with 6.6km underground chilled water reticulation.</p>
              <p>Today, as a registered Energy Service Company (ESCO) with <strong className="text-[#1B3A2D]">Malaysia Green Technology Corporation</strong> and <strong className="text-[#1B3A2D]">MAESCO</strong>, we deliver integrated FM, energy, green building, and smart technology solutions — backed by 5 ISO certifications and guaranteed measurable results.</p>
              <p>We use the <strong className="text-[#1B3A2D]">ARCHIBUS Total Infrastructure Facilities Management System (TIFM)</strong> to give clients real-time visibility into costs, energy consumption and maintenance across their entire property portfolio.</p>
            </div>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {['First ISO-certified FM company in Malaysia (1996)', 'First District Cooling System in Asia with TES (1997–2000)', 'Registered ESCO — CEEP guaranteed energy savings', '5× Frost & Sullivan Malaysia Excellence Awards', 'NEA 2018 1st Prize & NEA 2021 EPC Champion', 'ARCHIBUS TIFM smart FM technology platform'].map(pt => (
                <div key={pt} className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-[#6BBD45] mt-0.5 shrink-0" />
                  <span className="text-xs text-gray-600">{pt}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Video panel */}
          <div ref={story.ref} className="relative transition-all duration-700" style={{ opacity: story.visible ? 1 : 0, transform: story.visible ? 'none' : 'translateX(40px)', transitionDelay: '150ms' }}>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-video">
              <video autoPlay muted loop playsInline className="w-full h-full object-cover">
                <source src="/hero-video.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(12,28,18,0.6) 0%, transparent 60%)' }} />
              <div className="absolute bottom-4 left-4 text-white">
                <p className="text-xs text-[#6BBD45] font-semibold uppercase tracking-widest">Cofreth at Work</p>
                <p className="text-sm font-medium">Excellence in Built Environment Management</p>
              </div>
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-6 bg-[#6BBD45] text-white rounded-2xl p-5 shadow-xl">
              <div className="text-3xl font-bold">38+</div>
              <div className="text-xs font-semibold text-white/80">Years of Trust</div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div ref={mission.ref} className="max-w-5xl mx-auto px-6 transition-all duration-700" style={{ opacity: mission.visible ? 1 : 0, transform: mission.visible ? 'none' : 'translateY(30px)' }}>
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-0.5 bg-[#6BBD45]" />
              <span className="text-[#6BBD45] text-sm font-semibold tracking-widest uppercase">Our Direction</span>
              <div className="w-8 h-0.5 bg-[#6BBD45]" />
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-[#1B3A2D] to-[#0F2419] rounded-3xl p-8 text-white group hover:scale-[1.02] transition-transform duration-300">
              <div className="w-12 h-12 bg-[#6BBD45]/20 rounded-xl flex items-center justify-center mb-5">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#6BBD45]">Our Mission</h3>
              <p className="text-gray-300 text-sm leading-relaxed">To Be Recognised as the Leading Provider of Quality Services for Total Facilities Management and All Utilities.</p>
            </div>
            <div className="bg-white border-2 border-[#6BBD45]/20 rounded-3xl p-8 group hover:border-[#6BBD45] hover:scale-[1.02] transition-all duration-300">
              <div className="w-12 h-12 bg-[#6BBD45]/10 rounded-xl flex items-center justify-center mb-5">
                <span className="text-2xl">🌐</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#1B3A2D]">Our Vision</h3>
              <p className="text-gray-600 text-sm leading-relaxed">To Be An International Service Provider in Facilities Management & Energy Services, recognised for innovation, sustainability and guaranteed outcomes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div ref={vals.ref} className="text-center mb-14 transition-all duration-700" style={{ opacity: vals.visible ? 1 : 0, transform: vals.visible ? 'none' : 'translateY(30px)' }}>
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-0.5 bg-[#6BBD45]" />
              <span className="text-[#6BBD45] text-sm font-semibold tracking-widest uppercase">Core Values</span>
              <div className="w-8 h-0.5 bg-[#6BBD45]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1B3A2D]">What Drives Us</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <ValueCard key={v.title} v={v} i={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-0.5 bg-[#6BBD45]" />
              <span className="text-[#6BBD45] text-sm font-semibold tracking-widest uppercase">Our Journey</span>
              <div className="w-8 h-0.5 bg-[#6BBD45]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1B3A2D]">38 Years of Milestones</h2>
          </div>
          <div className="space-y-4">
            {milestones.map((m, i) => <MilestoneRow key={m.year} m={m} i={i} />)}
          </div>
        </div>
      </section>

      {/* ISO Certifications */}
      <section className="py-20 bg-gradient-to-br from-[#0F2419] to-[#1B3A2D]">
        <div className="max-w-6xl mx-auto px-6">
          <div ref={certs_ref.ref} className="text-center mb-14 transition-all duration-700" style={{ opacity: certs_ref.visible ? 1 : 0, transform: certs_ref.visible ? 'none' : 'translateY(30px)' }}>
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-0.5 bg-[#6BBD45]" />
              <span className="text-[#6BBD45] text-sm font-semibold tracking-widest uppercase">Certifications</span>
              <div className="w-8 h-0.5 bg-[#6BBD45]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">5× ISO Certified</h2>
            <p className="text-gray-400 text-sm max-w-xl mx-auto mt-3">Independently verified to the highest international standards across quality, environment, safety, energy and facility management — including the prestigious ISO 41001:2018 Facility Management System.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {certs.map((c, i) => <CertCard key={c.code} c={c} i={i} />)}
          </div>
        </div>
      </section>

      {/* CSR Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-0.5 bg-[#6BBD45]" />
              <span className="text-[#6BBD45] text-sm font-semibold tracking-widest uppercase">Corporate Responsibility</span>
              <div className="w-8 h-0.5 bg-[#6BBD45]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1B3A2D]">Giving Back to the Community</h2>
            <p className="text-gray-500 text-sm max-w-xl mx-auto mt-3 leading-relaxed">
              Beyond business, Cofreth is committed to making a positive impact — supporting life-saving initiatives, environmental causes and the wellbeing of underserved communities across Malaysia.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: '🩺', title: '"Save a Life" Campaign', desc: 'Cofreth organises regular blood donation drives and "Save a Life" health campaigns for staff and the public, promoting awareness of critical healthcare needs and encouraging life-saving participation.' },
              { icon: '🌳', title: 'Tree-Planting Initiatives', desc: 'As part of our commitment to environmental sustainability, Cofreth participates in and sponsors tree-planting programmes — contributing to Malaysia\'s green cover and the fight against climate change.' },
              { icon: '🏠', title: 'Orphanage & Community Support', desc: 'Cofreth regularly organises visits and donations to orphanages, providing essential support, meals and activities for underprivileged children — reflecting our belief that corporate success carries community responsibility.' },
            ].map((item, i) => (
              <div key={item.title} className="bg-gray-50 border border-gray-100 rounded-2xl p-7 hover:border-[#6BBD45]/30 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-bold text-[#1B3A2D] text-base mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <div ref={awards.ref} className="bg-gradient-to-br from-[#1B3A2D] to-[#0F2419] rounded-3xl p-12 text-center text-white transition-all duration-700"
            style={{ opacity: awards.visible ? 1 : 0, transform: awards.visible ? 'none' : 'translateY(30px)' }}>
            <Award size={48} className="text-[#6BBD45] mx-auto mb-6" />
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Frost & Sullivan Malaysia Excellence Award</h2>
            <p className="text-gray-300 text-sm max-w-xl mx-auto mb-6 leading-relaxed">
              Cofreth has been recognised with the prestigious Frost & Sullivan Malaysia Excellence Award five times
              — in 2007, 2010, 2015, 2016 and 2017 — affirming our leadership in the facilities management and energy services industry.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {['2007', '2010', '2015', '2016', '2017'].map(yr => (
                <span key={yr} className="bg-[#6BBD45]/20 border border-[#6BBD45]/40 text-[#6BBD45] px-4 py-1.5 rounded-full text-sm font-bold">{yr}</span>
              ))}
            </div>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-[#6BBD45] hover:bg-[#5aa838] text-white font-semibold px-8 py-3 rounded-full transition-all text-sm">
              Partner with an Award-Winning FM <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function ValueCard({ v, i }: { v: typeof values[0]; i: number }) {
  const reveal = useScrollReveal(0.05);
  return (
    <div ref={reveal.ref} className="group bg-white border border-gray-100 hover:border-[#6BBD45]/40 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-default"
      style={{ opacity: reveal.visible ? 1 : 0, transform: reveal.visible ? 'none' : 'translateY(30px)', transitionDelay: `${i * 60}ms` }}>
      <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300 inline-block">{v.icon}</div>
      <h3 className="font-bold text-[#1B3A2D] mb-2 group-hover:text-[#6BBD45] transition-colors">{v.title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
    </div>
  );
}

function CertCard({ c, i }: { c: typeof certs[0]; i: number }) {
  const reveal = useScrollReveal(0.05);
  return (
    <div ref={reveal.ref} className="group bg-white/5 border border-white/10 hover:border-[#6BBD45]/50 hover:bg-white/10 rounded-2xl p-6 text-center transition-all duration-300 hover:-translate-y-1"
      style={{ opacity: reveal.visible ? 1 : 0, transform: reveal.visible ? 'none' : 'translateY(30px)', transitionDelay: `${i * 80}ms` }}>
      <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300 inline-block">{c.icon}</div>
      <div className="text-[#6BBD45] font-bold text-sm mb-1">{c.code}</div>
      <div className="text-gray-400 text-xs leading-relaxed">{c.label}</div>
    </div>
  );
}
