'use client';
import Link from 'next/link';
import { CheckCircle, Award, ArrowRight, Menu, X } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useState, useEffect, useRef } from 'react';

/* ── Nav sections ── */
const navItems = [
  { id: 'about',      label: 'About Cofreth' },
  { id: 'firsts',     label: 'Our Many Firsts' },
  { id: 'philosophy', label: 'Our Philosophy' },
  { id: 'ims-policy', label: 'Our IMS Policy' },
  { id: 'processes',  label: 'Our Processes' },
  { id: 'values',     label: 'Our Value & Ethics' },
  { id: 'governance', label: 'Corporate Governance' },
  { id: 'csr',        label: 'Corporate Social Responsibility' },
  { id: 'themes',     label: 'Corporate Themes' },
];

const milestones = [
  { year: '1986',     event: 'Cofreth (M) Sdn Bhd incorporated in Malaysia (Reg. No. 198601002912 | 152066-P)' },
  { year: '1996',     event: 'First FM company in Malaysia to achieve ISO 9002:1994 accreditation; First to provide a Comprehensive FM Contract' },
  { year: '1997',     event: 'First to provide 15-year O&M services for the Ministry of Works Malaysia HQ' },
  { year: '1997–2000',event: 'First in Asia (outside Japan) to design & build a District Cooling System with 6.6km underground chilled water reticulation' },
  { year: '2001',     event: 'First ESCO to offer Capped & Guaranteed Energy Efficiency Performance (CEEP) contracts' },
  { year: '2003',     event: 'First FM company to provide full services to the Putrajaya International Convention Centre (PICC)' },
  { year: '2007',     event: 'Frost & Sullivan Customer Service Leadership Award · First to introduce Balanced Scorecard for FM Performance Measurement' },
  { year: '2009',     event: "First company appointed to formulate Malaysia's National Energy Efficiency Master Plan" },
  { year: '2010',     event: 'Frost & Sullivan Malaysia Green Excellence Award — Facilities Management Company of the Year' },
  { year: '2013',     event: 'First FM company to implement BIM for a cancer hospital in Malaysia' },
  { year: '2015',     event: 'Frost & Sullivan Customer Service Leadership Award — Integrated Facilities Management' },
  { year: '2016',     event: 'Frost & Sullivan Competitive Strategy Innovation & Leadership Award — Facilities Management' },
  { year: '2017',     event: 'BrandLaureate SMEs BestBrands Award — Industrial Facilities Management category' },
  { year: '2018',     event: 'First ESCO to win 1st Prize at inaugural National Energy Awards (NEA) · SME Icons Award · ASEAN Energy Award 1st Runner Up' },
  { year: '2021',     event: 'NEA 2021 Energy Performance Contracting (EPC) Champion Award — jointly with Besi Apac' },
  { year: 'Today',    event: '5× ISO certified ESCO with 38+ years of excellence, serving airports, data centres, universities and landmark buildings across Malaysia' },
];

/* ── Counter ── */
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

/* ── Sidebar nav ── */
function SidebarNav({ active, onSelect }: { active: string; onSelect: (id: string) => void }) {
  return (
    <nav className="py-6">
      {navItems.map(item => (
        <button
          key={item.id}
          onClick={() => onSelect(item.id)}
          className={`w-full text-left px-5 py-3.5 text-sm font-semibold transition-all duration-200 border-l-4 ${
            active === item.id
              ? 'border-[#6BBD45] bg-[#6BBD45]/10 text-[#1B3A2D]'
              : 'border-transparent text-gray-500 hover:text-[#1B3A2D] hover:bg-gray-50 hover:border-gray-200'
          }`}
        >
          {item.label}
        </button>
      ))}
    </nav>
  );
}

export default function AboutPage() {
  const hero = useScrollReveal();
  const stats = useScrollReveal();
  const [active, setActive] = useState('about');
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  /* Scroll spy */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { threshold: 0.2, rootMargin: '-80px 0px -50% 0px' }
    );
    navItems.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
    setMobileNavOpen(false);
  };

  const activeLabel = navItems.find(n => n.id === active)?.label ?? 'About Cofreth';

  return (
    <>
      {/* ── Hero ── */}
      <div className="pt-24 md:pt-32 pb-12 md:pb-20 text-white relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #060e08 0%, #0F2419 50%, #060e08 100%)' }}>
        <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: 'linear-gradient(#6BBD45 1px, transparent 1px), linear-gradient(90deg, #6BBD45 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div ref={hero.ref} className="max-w-4xl mx-auto px-6 text-center transition-all duration-700"
          style={{ opacity: hero.visible ? 1 : 0, transform: hero.visible ? 'none' : 'translateY(30px)' }}>
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="w-10 h-px bg-[#6BBD45]" />
            <span className="text-[#6BBD45] text-sm font-bold tracking-widest uppercase">Cofreth At A Glance</span>
            <div className="w-10 h-px bg-[#6BBD45]" />
          </div>
          <h1 className="text-4xl md:text-6xl font-black mb-5 leading-tight">
            38 Years of<br /><span className="text-[#6BBD45]">FM Excellence</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed mb-3">
            Since 1986, Cofreth has been Malaysia's pioneer in integrated facilities management, energy services, and sustainable built environment solutions.
          </p>
          <p className="text-gray-500 text-xs mb-8">Reg. No. 198601002912 (152066-P) · No. 39, Jalan USJ Sentral 3, USJ Sentral, 47600 Subang Jaya, Selangor</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
            {[['38+','Years of Excellence'],['30+','Major Clients'],['5×','ISO Certifications'],['5×','Frost & Sullivan']].map(([v,l]) => (
              <div key={l} className="bg-white/5 border border-white/10 rounded-2xl py-4 px-3 text-center">
                <div className="text-2xl font-black text-[#6BBD45]">{v}</div>
                <div className="text-xs text-gray-400 mt-1">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Mobile nav bar ── */}
      <div className="lg:hidden sticky top-[56px] z-40 bg-white border-b border-gray-200 shadow-sm">
        <button
          onClick={() => setMobileNavOpen(v => !v)}
          className="w-full flex items-center justify-between px-5 py-3.5 text-sm font-semibold text-[#1B3A2D]"
        >
          <span className="text-[#6BBD45]">≡</span>
          <span className="flex-1 text-center">{activeLabel}</span>
          {mobileNavOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
        {mobileNavOpen && (
          <div className="bg-white border-t border-gray-100 shadow-xl">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`w-full text-left px-6 py-3 text-sm font-semibold border-l-4 transition-all ${
                  active === item.id
                    ? 'border-[#6BBD45] bg-[#6BBD45]/8 text-[#1B3A2D]'
                    : 'border-transparent text-gray-500'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* ── Two-column layout ── */}
      <div className="flex items-start relative">

        {/* Left sidebar — desktop only */}
        <aside className="hidden lg:block w-64 xl:w-72 shrink-0">
          <div className="sticky top-20 bg-white border-r border-gray-100 min-h-screen">
            <div className="px-4 py-5 border-b border-gray-100">
              <p className="text-xs font-black text-gray-400 uppercase tracking-widest">Navigation</p>
            </div>
            <SidebarNav active={active} onSelect={scrollTo} />
          </div>
        </aside>

        {/* Right — main content */}
        <main className="flex-1 min-w-0">

          {/* About Cofreth */}
          <section id="about" className="py-16 px-6 lg:px-10 xl:px-14 bg-white">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-0.5 bg-[#6BBD45]" />
              <span className="text-[#6BBD45] text-xs font-bold tracking-widest uppercase">About Cofreth</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-[#1B3A2D] mb-6">Malaysia's FM Pioneer Since 1986</h2>
            <div className="grid lg:grid-cols-2 gap-10 items-start">
              <div className="space-y-4 text-gray-600 text-sm leading-relaxed">
                <p>Cofreth (M) Sdn Bhd was established in <strong className="text-[#1B3A2D]">1986</strong> as a Malaysian company specialising in Facilities Management, Operations and Maintenance of MEP Systems, Engineering Due Diligence, Energy Audit, Energy Efficiency, Energy Performance Contracting, Green Commissioning, and District Cooling System design.</p>
                <p>We are a registered <strong className="text-[#1B3A2D]">Energy Service Company (ESCO)</strong> with Malaysia Green Technology Corporation and MAESCO, and utilise the <strong className="text-[#1B3A2D]">ARCHIBUS Total Infrastructure Facilities Management System (TIFM)</strong> for smart, data-driven facility management.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {['First ISO-certified FM company in Malaysia (1996)','First DCS with TES in Asia (1997–2000)','Registered ESCO — CEEP guaranteed savings','5× Frost & Sullivan Malaysia Excellence Awards','NEA 2018 1st Prize & NEA 2021 EPC Champion','ARCHIBUS TIFM smart FM technology platform'].map(pt => (
                    <div key={pt} className="flex items-start gap-2">
                      <CheckCircle size={14} className="text-[#6BBD45] mt-0.5 shrink-0" />
                      <span className="text-xs text-gray-600">{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: '🏢', label: 'Mission', desc: 'To Be Recognised as the Leading Provider of Quality Services for Total Facilities Management and All Utilities.' },
                  { icon: '🌐', label: 'Vision', desc: 'To Be An International Service Provider in Facilities Management & Energy Services.' },
                  { icon: '✅', label: 'Quality', desc: 'ISO 9001 · ISO 14001 · ISO 45001 · ISO 50001 · ISO 41001 — all independently certified by SIRIM QAS.' },
                  { icon: '⚡', label: 'ESCO', desc: 'Registered with Malaysia Green Technology Corp & MAESCO. Guaranteed energy savings via CEEP contracts.' },
                ].map(c => (
                  <div key={c.label} className="bg-gray-50 rounded-2xl p-4 border border-gray-100 hover:border-[#6BBD45]/30 transition-colors">
                    <div className="text-2xl mb-2">{c.icon}</div>
                    <div className="font-black text-[#1B3A2D] text-xs mb-1">{c.label}</div>
                    <p className="text-gray-500 text-xs leading-relaxed">{c.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Our Many Firsts */}
          <section id="firsts" className="py-16 px-6 lg:px-10 xl:px-14 bg-gray-50">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-0.5 bg-[#6BBD45]" />
              <span className="text-[#6BBD45] text-xs font-bold tracking-widest uppercase">Our Many Firsts</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-[#1B3A2D] mb-8">Industry-Leading Milestones</h2>
            <div className="relative">
              <div className="absolute left-[18px] top-0 bottom-0 w-0.5 bg-gray-200" />
              <div className="space-y-5">
                {milestones.map((m, i) => (
                  <MilestoneItem key={m.year + i} m={m} i={i} />
                ))}
              </div>
            </div>
          </section>

          {/* Our Philosophy */}
          <section id="philosophy" className="py-16 px-6 lg:px-10 xl:px-14 bg-white">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-0.5 bg-[#6BBD45]" />
              <span className="text-[#6BBD45] text-xs font-bold tracking-widest uppercase">Our Philosophy</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-[#1B3A2D] mb-8">How We Think &amp; Work</h2>
            <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4">
              {[
                { n: '01', icon: '🏢', title: 'Safe, Comfortable & Clean', desc: 'Every facility we manage maintains the highest standards of safety, comfort and cleanliness for all occupants.' },
                { n: '02', icon: '💰', title: 'High Quality at Affordable Price', desc: 'Best-value services without compromising quality — our efficiency enables competitive pricing for every client.' },
                { n: '03', icon: '📋', title: 'Consistent Service Levels', desc: 'High service levels consistently achieved through established procedures, work systems and SOPs.' },
                { n: '04', icon: '🔄', title: 'Continuous Improvement', desc: 'Every audit, every review and every client interaction is an opportunity to do better — it\'s our culture.' },
                { n: '05', icon: '💻', title: 'Technology-Driven Efficiency', desc: 'ARCHIBUS, BAS, BIM and IoT technologies improve efficiency and reduce the total cost of ownership.' },
                { n: '06', icon: '⚖️', title: 'Strong Corporate Values', desc: 'Professionalism, Team Spirit, Partnership, Value Creation, Respect for Environment and Good Ethics.' },
              ].map(p => (
                <div key={p.n} className="group bg-gray-50 border border-gray-100 hover:border-[#6BBD45]/30 hover:bg-white rounded-2xl p-5 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xl">{p.icon}</span>
                    <span className="text-xs font-black text-[#6BBD45] tracking-widest">{p.n}</span>
                  </div>
                  <h3 className="font-black text-[#1B3A2D] text-sm mb-2 group-hover:text-[#6BBD45] transition-colors">{p.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* IMS Policy */}
          <section id="ims-policy" className="py-16 px-6 lg:px-10 xl:px-14 bg-gray-50">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-0.5 bg-[#6BBD45]" />
              <span className="text-[#6BBD45] text-xs font-bold tracking-widest uppercase">Our IMS Policy</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-[#1B3A2D] mb-2">Integrated Policy</h2>
            <p className="text-gray-500 text-sm mb-8 font-semibold">Quality, Safety &amp; Health, Environmental, Energy and Facility</p>
            <div className="bg-gradient-to-br from-[#0F2419] to-[#1B3A2D] rounded-3xl p-8 text-white">
              <p className="text-gray-300 text-sm leading-relaxed mb-6">By integrating quality, occupational safety and health, environmental, energy, and facility management systems into an Integrated Management System (IMS), Cofreth is committed to providing high-performance Facilities Management and Energy Services (FMES) without compromising sustainability in environmental, social and governance aspects for all stakeholders.</p>
              <h3 className="text-[#6BBD45] font-bold text-xs uppercase tracking-widest mb-2">Principle</h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-6">Cofreth demonstrates a strong belief that the bedrock of excellent service delivery rests upon the adoption of a professional and ethical business strategy — revolving around business growth, developing talents, adopting innovative technologies and five well-defined management systems.</p>
              <h3 className="text-[#6BBD45] font-bold text-xs uppercase tracking-widest mb-4">9 Policy Commitments</h3>
              <ol className="space-y-3">
                {['Deliver high quality, best value services and other characteristics and requirements of FMES as agreed with our customers','Comply with relevant statutory, contractual and other requirements under IMS','Eliminate potential hazards, reduce environmental pollution & OHS risk as identified under HIRADC and EAIA Lists','Manage the risks and opportunities identified in the IMS Risk and Opportunity Registers','Optimising building energy performance through procurement of energy-efficient product and services, efficient design and implementation of operational control','Provide necessary information and resources to achieve the established objectives and targets under IMS','Encourage staff and vendors to participate in the development of IMS programmes within the available resources','Instill awareness, develop effective leader, maintain competent and effective workforce through structured trainings','Continually improve IMS through audits, management reviews and other improvement activities'].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                    <span className="w-6 h-6 rounded-full bg-[#6BBD45]/20 border border-[#6BBD45]/40 text-[#6BBD45] text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">{i+1}</span>
                    {item}
                  </li>
                ))}
              </ol>
              <div className="mt-6 pt-4 border-t border-white/10 flex flex-wrap items-center gap-6">
                <div>
                  <p className="text-white font-bold text-sm">Ir. ONG CHING LOON</p>
                  <p className="text-gray-400 text-xs">Managing Director</p>
                </div>
                <p className="text-gray-500 text-xs">Revision 4 · Effective 1 August 2024</p>
                <a href="https://www.cofreth.com.my/images/IMS_Policy-Revision_4.pdf" target="_blank" rel="noopener noreferrer" className="ml-auto border border-[#6BBD45]/40 text-[#6BBD45] hover:bg-[#6BBD45] hover:text-white text-xs font-semibold px-4 py-2 rounded-full transition-all">Download PDF</a>
              </div>
            </div>
          </section>

          {/* Our Processes */}
          <section id="processes" className="py-16 px-6 lg:px-10 xl:px-14 bg-white">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-0.5 bg-[#6BBD45]" />
              <span className="text-[#6BBD45] text-xs font-bold tracking-widest uppercase">Our Processes</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-[#1B3A2D] mb-3">Certified Service Delivery</h2>
            <p className="text-gray-500 text-sm mb-8 max-w-2xl">Our service delivery processes are independently certified to five ISO standards — guaranteeing consistent quality, safety, environmental responsibility and energy performance across every engagement.</p>
            <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-10">
              {[
                { code: 'ISO 45001:2018', label: 'Occupational Health & Safety', icon: '🛡️', color: '#ef4444', desc: 'Systematic hazard identification and OHS risk control across all site operations.', pdf: 'https://www.cofreth.com.my/images/ISO_45001-2018(OHS)(2023-2026).pdf' },
                { code: 'ISO 9001:2015',  label: 'Quality Management', icon: '✓', color: '#3b82f6', desc: 'Consistent, high-quality service delivery backed by documented procedures and audits.', pdf: 'https://www.cofreth.com.my/images/ISO_9001-2015_(QMS)(2023-2026).pdf' },
                { code: 'ISO 14001:2015', label: 'Environmental Management', icon: '🌿', color: '#10b981', desc: 'Minimising environmental impact through responsible practices and continuous monitoring.', pdf: 'https://www.cofreth.com.my/images/ISO_14001-2015(EMS)(2023-2026).pdf' },
                { code: 'ISO 50001:2018', label: 'Energy Management', icon: '⚡', color: '#f59e0b', desc: 'Structured energy monitoring and optimisation to reduce consumption and costs.', pdf: 'https://www.cofreth.com.my/images/ISO_50001-2018(EnMS)(2023-2026).pdf' },
              ].map(p => (
                <div key={p.code} className="group bg-gray-50 border border-gray-100 hover:border-[#6BBD45]/30 rounded-2xl p-5 hover:shadow-lg transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center text-xl mb-3" style={{ background: p.color + '15' }}>{p.icon}</div>
                  <div className="font-black text-[#1B3A2D] text-xs mb-1 group-hover:text-[#6BBD45] transition-colors">{p.code}</div>
                  <div className="text-gray-600 text-xs font-semibold mb-2">{p.label}</div>
                  <p className="text-gray-400 text-xs leading-relaxed mb-3">{p.desc}</p>
                  <a href={p.pdf} target="_blank" rel="noopener noreferrer" className="text-[#6BBD45] text-xs font-semibold hover:underline">View Certificate →</a>
                </div>
              ))}
            </div>
            <div className="bg-gradient-to-r from-[#0F2419] to-[#1B3A2D] rounded-2xl p-6 text-white">
              <p className="text-xs font-bold text-[#6BBD45] uppercase tracking-widest text-center mb-5">PDCA — Our Service Delivery Cycle</p>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                {[{icon:'🔍',title:'Plan',desc:'Define objectives, identify risks and plan the FM or energy solution tailored to your facility.'},{icon:'⚙️',title:'Do',desc:'Execute with certified engineers and technicians following ISO-compliant procedures and SOPs.'},{icon:'📊',title:'Check & Act',desc:'Monitor KPIs, conduct audits and continuously improve — the PDCA cycle drives all we do.'}].map(s => (
                  <div key={s.title}>
                    <div className="text-3xl mb-2">{s.icon}</div>
                    <div className="font-black text-[#6BBD45] mb-1 text-sm">{s.title}</div>
                    <p className="text-gray-400 text-xs leading-relaxed">{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Value & Ethics */}
          <section id="values" className="py-16 px-6 lg:px-10 xl:px-14 bg-gray-50">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-0.5 bg-[#6BBD45]" />
              <span className="text-[#6BBD45] text-xs font-bold tracking-widest uppercase">Our Value &amp; Ethics</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-[#1B3A2D] mb-3">6 Core Values</h2>
            <p className="text-gray-500 text-sm mb-8">We are committed to these values to foster relations of mutual respect with all colleagues, customers and outside partners.</p>
            <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4">
              {[
                { icon: '👥', title: 'Professionalism', color: '#3b82f6', desc: 'Highest standards of conduct, expertise and service delivery in everything we do.' },
                { icon: '🤝', title: 'Partnership', color: '#6BBD45', desc: 'Building long-term, trust-based relationships with clients, vendors and strategic partners.' },
                { icon: '🌟', title: 'Team Spirit', color: '#f59e0b', desc: 'Collaboration and camaraderie — we celebrate wins together and support each other.' },
                { icon: '💡', title: 'Value Creation', color: '#8b5cf6', desc: 'Every engagement creates measurable, lasting value for clients and stakeholders.' },
                { icon: '🌱', title: 'Respect For The Environment', color: '#10b981', desc: 'Genuine commitment to sustainability aligned with UN Sustainable Development Goals.' },
                { icon: '⚖️', title: 'Ethics', color: '#ef4444', desc: 'Integrity, honesty and transparency — we comply fully with the Responsible Business Alliance.' },
              ].map(v => (
                <div key={v.title} className="group bg-white border border-gray-100 hover:border-[#6BBD45]/30 rounded-2xl p-5 hover:shadow-lg transition-all duration-300">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center text-xl mb-3 group-hover:scale-110 transition-transform" style={{ background: v.color + '15' }}>{v.icon}</div>
                  <h3 className="font-black text-[#1B3A2D] text-sm mb-2 group-hover:text-[#6BBD45] transition-colors">{v.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Corporate Governance */}
          <section id="governance" className="py-16 px-6 lg:px-10 xl:px-14 bg-white">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-0.5 bg-[#6BBD45]" />
              <span className="text-[#6BBD45] text-xs font-bold tracking-widest uppercase">Corporate Governance</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-[#1B3A2D] mb-8">Responsible Business Conduct</h2>
            <div className="grid sm:grid-cols-2 gap-5">
              <div className="bg-gradient-to-br from-[#0F2419] to-[#1B3A2D] rounded-2xl p-8 text-white">
                <div className="text-3xl mb-4">🤝</div>
                <h3 className="font-black text-[#6BBD45] mb-3">Responsible Business Alliance</h3>
                <p className="text-gray-300 text-sm leading-relaxed">Cofreth is fully committed and complies with the Responsible Business Alliance (RBA) as part of our code of business conduct — ensuring ethical practices across our entire supply chain and operations.</p>
              </div>
              <div className="bg-gray-50 border border-gray-100 rounded-2xl p-8">
                <div className="text-3xl mb-4">📜</div>
                <h3 className="font-black text-[#1B3A2D] mb-3">Our Governance Commitments</h3>
                <ul className="space-y-2">
                  {['Anti-bribery and anti-corruption policy','Transparent financial reporting','Fair treatment of employees and contractors','Responsible procurement practices','Data privacy and information security'].map(item => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                      <span className="text-[#6BBD45] mt-0.5 shrink-0">✓</span>{item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* CSR */}
          <section id="csr" className="py-16 px-6 lg:px-10 xl:px-14 bg-gray-50">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-0.5 bg-[#6BBD45]" />
              <span className="text-[#6BBD45] text-xs font-bold tracking-widest uppercase">Corporate Social Responsibility</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-[#1B3A2D] mb-3">Giving Back to the Community</h2>
            <p className="text-gray-500 text-sm mb-8">Beyond business, Cofreth is committed to making a positive impact — supporting life-saving initiatives, environmental causes and the wellbeing of underserved communities.</p>
            <div className="grid sm:grid-cols-3 gap-5">
              {[
                { icon: '🩺', title: '"Save a Life" Campaign', desc: 'Cofreth organises annual blood donation drives and "Save a Life" campaigns — encouraging staff and the public to support critical healthcare needs.' },
                { icon: '🌳', title: 'Green Finger Day', desc: '170 trees planted and river clean-up activities as part of our environmental commitment to Malaysia\'s green cover and biodiversity.' },
                { icon: '🏠', title: 'Orphanage & Community Support', desc: 'Regular visits and donations to Rumah Amal Kasih Bestari and other orphanages — providing essential support, meals and activities.' },
              ].map(item => (
                <div key={item.title} className="bg-white border border-gray-100 rounded-2xl p-6 hover:border-[#6BBD45]/30 hover:shadow-lg transition-all duration-300">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="font-black text-[#1B3A2D] text-sm mb-2">{item.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
            {/* Sustainable Development */}
            <div className="mt-10 bg-white rounded-2xl border border-gray-100 p-6">
              <h3 className="font-black text-[#1B3A2D] mb-2">Sustainable Development</h3>
              <p className="text-gray-500 text-xs leading-relaxed mb-5">Cofreth's activities take into account the objectives of sustainable development from ecological, economical and social dimensions — aligned to the UN Sustainable Development Goals.</p>
              <div className="grid grid-cols-6 sm:grid-cols-9 gap-1.5">
                {[{n:1,bg:'#e5243b'},{n:2,bg:'#dda63a'},{n:3,bg:'#4c9f38'},{n:4,bg:'#c5192d'},{n:5,bg:'#ff3a21'},{n:6,bg:'#26bde2'},{n:7,bg:'#fcc30b'},{n:8,bg:'#a21942'},{n:9,bg:'#fd6925'},{n:10,bg:'#dd1367'},{n:11,bg:'#fd9d24'},{n:12,bg:'#bf8b2e'},{n:13,bg:'#3f7e44'},{n:14,bg:'#0a97d9'},{n:15,bg:'#56c02b'},{n:16,bg:'#00689d'},{n:17,bg:'#19486a'}].map(g => (
                  <div key={g.n} className="aspect-square rounded-lg flex items-center justify-center text-white font-black text-sm hover:scale-110 transition-transform cursor-default" style={{ background: g.bg }}>{g.n}</div>
                ))}
              </div>
            </div>
          </section>

          {/* Corporate Themes */}
          <section id="themes" className="py-16 px-6 lg:px-10 xl:px-14 bg-white">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-0.5 bg-[#6BBD45]" />
              <span className="text-[#6BBD45] text-xs font-bold tracking-widest uppercase">Corporate Themes</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-[#1B3A2D] mb-3">Our Evolving Vision</h2>
            <p className="text-gray-500 text-sm mb-8">Each year, Cofreth adopts a corporate theme that reflects its strategic focus — guiding the organisation's culture and direction.</p>
            <div className="space-y-3">
              {[
                { years: '2018–2020', theme: 'Connect The Possibles, Connecting The Impossibles', highlight: true },
                { years: '2015–2017', theme: 'We Never Stop: Believing. Synergizing. Delivering' },
                { years: '2012–2014', theme: 'Change, Innovate, Achieve' },
                { years: '2010–2011', theme: 'Right, Fast Actions: Key to Success' },
                { years: '2009', theme: 'Your Smiles, Our Pride' },
                { years: '2008', theme: 'Service Excellence, Our Forte' },
                { years: '2007', theme: 'We Add Value, We Value-Add' },
                { years: '2006', theme: 'Your Expectations, Our Commitment' },
                { years: '2005', theme: 'Delivering High Performance' },
              ].map(t => (
                <div key={t.years} className={`flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-6 rounded-2xl px-6 py-4 border transition-all ${t.highlight ? 'bg-[#1B3A2D] border-[#6BBD45]/30' : 'bg-gray-50 border-gray-100 hover:border-[#6BBD45]/20'}`}>
                  <span className={`text-xs font-black uppercase tracking-widest shrink-0 ${t.highlight ? 'text-[#6BBD45]' : 'text-gray-400'}`}>{t.years}</span>
                  <span className={`font-semibold text-sm italic ${t.highlight ? 'text-white' : 'text-[#1B3A2D]'}`}>"{t.theme}"</span>
                </div>
              ))}
            </div>

            {/* Awards CTA */}
            <div className="mt-12 bg-gradient-to-br from-[#1B3A2D] to-[#0F2419] rounded-3xl p-10 text-center text-white">
              <Award size={40} className="text-[#6BBD45] mx-auto mb-4" />
              <h3 className="text-2xl font-black mb-3">Frost &amp; Sullivan Malaysia Excellence Award</h3>
              <p className="text-gray-300 text-sm max-w-xl mx-auto mb-5">Recognised five times — 2007, 2010, 2015, 2016 and 2017 — affirming our leadership in facilities management and energy services.</p>
              <div className="flex flex-wrap justify-center gap-3 mb-6">
                {['2007','2010','2015','2016','2017'].map(yr => (
                  <span key={yr} className="bg-[#6BBD45]/20 border border-[#6BBD45]/40 text-[#6BBD45] px-4 py-1.5 rounded-full text-sm font-bold">{yr}</span>
                ))}
              </div>
              <Link href="/contact" className="inline-flex items-center gap-2 bg-[#6BBD45] hover:bg-[#5aa838] text-white font-semibold px-8 py-3 rounded-full transition-all text-sm">
                Partner with an Award-Winning FM <ArrowRight size={16} />
              </Link>
            </div>
          </section>

        </main>
      </div>
    </>
  );
}

function MilestoneItem({ m, i }: { m: typeof milestones[0]; i: number }) {
  const reveal = useScrollReveal(0.1);
  return (
    <div ref={reveal.ref} className="flex gap-4 transition-all duration-500"
      style={{ opacity: reveal.visible ? 1 : 0, transform: reveal.visible ? 'none' : 'translateX(-20px)', transitionDelay: `${i * 40}ms` }}>
      <div className="relative flex flex-col items-center">
        <div className="w-9 h-9 rounded-full bg-[#6BBD45] flex items-center justify-center shrink-0 z-10 shadow-md shadow-[#6BBD45]/30">
          <span className="text-white text-xs font-black">✓</span>
        </div>
      </div>
      <div className="pb-5 flex-1">
        <div className="bg-white border border-gray-100 rounded-2xl p-4 hover:border-[#6BBD45]/30 hover:shadow-md transition-all duration-300 group">
          <span className="text-xs font-black text-[#6BBD45] tracking-widest uppercase block mb-1">{m.year}</span>
          <p className="text-sm text-gray-700 font-medium leading-relaxed group-hover:text-[#1B3A2D] transition-colors">{m.event}</p>
        </div>
      </div>
    </div>
  );
}
