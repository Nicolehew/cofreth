'use client';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import { CheckCircle, Award, ArrowRight, Menu, X } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useState, useEffect, useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const NAV_IDS = ['about', 'firsts', 'philosophy', 'ims-policy', 'processes', 'values', 'governance', 'csr', 'sustainability', 'themes'];

const MILESTONE_YEARS = ['1986', '1996', '1997', '1997–2000', '2001', '2003', '2007', '2009', '2010', '2013', '2015', '2016', '2017', '2018', '2021', 'Today'];

const GOVERNANCE_POLICY_ICONS = ['📣', '🚫', '📋', '🔒'];
const GOVERNANCE_POLICY_PDFS = [
  '/documents/Whistleblowing_Policy.pdf',
  '/documents/Anti_Bribery_Corruption_Policy.pdf',
  '/documents/Standard_of_Business_Conduct.pdf',
  '/documents/Personal_Data_Protection_Policy.pdf',
];
const ISO_CODES = [
  { code: 'ISO 45001:2018', icon: '🛡️', color: '#ef4444', pdf: '/documents/ISO_45001-2018_OHS.pdf' },
  { code: 'ISO 9001:2015',  icon: '✓',   color: '#3b82f6', pdf: '/documents/ISO_9001-2015_QMS.pdf' },
  { code: 'ISO 14001:2015', icon: '🌿',  color: '#10b981', pdf: '/documents/ISO_14001-2015_EMS.pdf' },
  { code: 'ISO 50001:2018', icon: '⚡',  color: '#f59e0b', pdf: '/documents/ISO_50001-2018_EnMS.pdf' },
  { code: 'ISO 41001:2018', icon: '🏢',  color: '#8b5cf6', pdf: '/documents/ISO_41001-2018_FMS.pdf' },
];
const VALUE_ICONS = ['👥', '🤝', '🌟', '💡', '🌱', '⚖️'];
const VALUE_COLORS = ['#3b82f6', '#6BBD45', '#f59e0b', '#8b5cf6', '#10b981', '#ef4444'];
const PILLAR_ICONS = ['🌍', '👥', '🏛️'];
const SDG = [{n:1,bg:'#e5243b'},{n:2,bg:'#dda63a'},{n:3,bg:'#4c9f38'},{n:4,bg:'#c5192d'},{n:5,bg:'#ff3a21'},{n:6,bg:'#26bde2'},{n:7,bg:'#fcc30b'},{n:8,bg:'#a21942'},{n:9,bg:'#fd6925'},{n:10,bg:'#dd1367'},{n:11,bg:'#fd9d24'},{n:12,bg:'#bf8b2e'},{n:13,bg:'#3f7e44'},{n:14,bg:'#0a97d9'},{n:15,bg:'#56c02b'},{n:16,bg:'#00689d'},{n:17,bg:'#19486a'}];
const THEMES = [
  { years: '2025',      theme: 'Environmental, Social & Governance (ESG)', highlight: true },
  { years: '2018–2024', theme: 'Connecting The Possible…' },
  { years: '2015–2017', theme: 'We Never Stop: Believing. Synergizing. Delivering' },
  { years: '2012–2014', theme: 'Change, Innovate, Achieve' },
  { years: '2010–2011', theme: 'Right, Fast Actions: Key to Success' },
  { years: '2009',      theme: 'Your Smiles, Our Pride' },
  { years: '2008',      theme: 'Service Excellence, Our Forte' },
  { years: '2007',      theme: 'We Add Value, We Value-Add' },
  { years: '2006',      theme: 'Your Expectations, Our Commitment' },
  { years: '2005',      theme: 'Delivering High Performance' },
];
const PHILOSOPHY_ICONS = ['🏢', '💰', '📋', '🔄', '💻', '⚖️'];
const PDCA_ICONS = ['🔍', '⚙️', '📊'];

function SectionHeader({ eyebrow, title, subtitle }: { eyebrow: string; title: React.ReactNode; subtitle?: string }) {
  const reveal = useScrollReveal();
  return (
    <div ref={reveal.ref} className="text-center mb-12 transition-all duration-700"
      style={{ opacity: reveal.visible ? 1 : 0, transform: reveal.visible ? 'none' : 'translateY(24px)' }}>
      <div className="flex items-center justify-center gap-3 mb-4">
        <div className="w-8 h-0.5 bg-[#6BBD45]" />
        <span className="text-[#6BBD45] text-xs font-bold tracking-widest uppercase">{eyebrow}</span>
        <div className="w-8 h-0.5 bg-[#6BBD45]" />
      </div>
      <h2 className="text-3xl md:text-4xl font-black text-[#1B3A2D] mb-4 leading-tight">{title}</h2>
      {subtitle && <p className="text-gray-500 text-base leading-relaxed max-w-2xl mx-auto">{subtitle}</p>}
    </div>
  );
}

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

function SidebarNav({ active, onSelect, navItems }: { active: string; onSelect: (id: string) => void; navItems: { id: string; label: string }[] }) {
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
  const [active, setActive] = useState('about');
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const { t } = useLanguage();
  const p = t.pages.about;

  const navItems = [
    { id: 'about',          label: p.nav.about },
    { id: 'firsts',         label: p.nav.firsts },
    { id: 'philosophy',     label: p.nav.philosophy },
    { id: 'ims-policy',     label: p.nav.ims },
    { id: 'processes',      label: p.nav.processes },
    { id: 'values',         label: p.nav.values },
    { id: 'governance',     label: p.nav.governance },
    { id: 'csr',            label: p.nav.csr },
    { id: 'sustainability', label: p.nav.sustainability },
    { id: 'themes',         label: p.nav.themes },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => { entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id); }); },
      { threshold: 0.2, rootMargin: '-80px 0px -50% 0px' }
    );
    NAV_IDS.forEach(id => { const el = document.getElementById(id); if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
    setMobileNavOpen(false);
  };

  const activeLabel = navItems.find(n => n.id === active)?.label ?? p.nav.about;
  const as = p.aboutSection;
  const fs = p.firstsSection;
  const ph = p.philosophySection;
  const im = p.imsSection;
  const pr = p.processesSection;
  const vs = p.valuesSection;
  const gv = p.governanceSection;
  const cs = p.csrSection;
  const su = p.sustainabilitySection;
  const th = p.themesSection;

  return (
    <>
      <PageHero
        bgImage="https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=1920&q=90"
        eyebrow={p.heroEyebrow}
        eyebrowSub={p.heroEyebrowSub}
        title={<>{p.heroTitle1}<br /><span className="text-[#6BBD45]">{p.heroTitleAccent}</span></>}
        subtitle={p.heroSubtitle}
        stats={['38+', '30+', '5×', '5×'].map((num, i) => ({ num, label: p.heroStats[i] }))}
      />

      {/* Mobile nav */}
      <div className="lg:hidden sticky top-[56px] z-40 bg-white border-b border-gray-200 shadow-sm">
        <button onClick={() => setMobileNavOpen(v => !v)}
          className="w-full flex items-center justify-between px-5 py-3.5 text-sm font-semibold text-[#1B3A2D]">
          <span className="text-[#6BBD45]">≡</span>
          <span className="flex-1 text-center">{activeLabel}</span>
          {mobileNavOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
        {mobileNavOpen && (
          <div className="bg-white border-t border-gray-100 shadow-xl">
            {navItems.map(item => (
              <button key={item.id} onClick={() => scrollTo(item.id)}
                className={`w-full text-left px-6 py-3 text-sm font-semibold border-l-4 transition-all ${
                  active === item.id ? 'border-[#6BBD45] bg-[#6BBD45]/8 text-[#1B3A2D]' : 'border-transparent text-gray-500'
                }`}>{item.label}</button>
            ))}
          </div>
        )}
      </div>

      {/* Two-column layout */}
      <div className="flex items-start bg-white w-full">

        {/* Sidebar */}
        <aside className="hidden lg:block w-64 xl:w-72 shrink-0 bg-white">
          <div className="sticky top-20 bg-white border-r border-gray-100 min-h-screen">
            <div className="px-4 py-5 border-b border-gray-100">
              <p className="text-xs font-black text-gray-400 uppercase tracking-widest">{p.navLabel}</p>
            </div>
            <SidebarNav active={active} onSelect={scrollTo} navItems={navItems} />
          </div>
        </aside>

        {/* Main content */}
        <main className="flex-1 min-w-0 bg-white">

          {/* ── About Cofreth ── */}
          <section id="about" className="py-20 px-8 lg:px-12 border-b border-gray-100">
            <div className="w-full">
              <SectionHeader eyebrow={as.eyebrow} title={as.title} subtitle={as.subtitle} />
              <div className="grid lg:grid-cols-2 gap-8 items-start">
                <div className="space-y-4 text-gray-600 text-base leading-relaxed">
                  <p>{as.escoBody}</p>
                  <div className="grid sm:grid-cols-2 gap-3 pt-2">
                    {as.highlights.map(pt => (
                      <div key={pt} className="flex items-start gap-2">
                        <CheckCircle size={14} className="text-[#6BBD45] mt-0.5 shrink-0" />
                        <span className="text-xs text-gray-600">{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: '🏢', label: as.missionLabel, desc: as.missionDesc },
                    { icon: '🌐', label: as.visionLabel,  desc: as.visionDesc },
                    { icon: '✅', label: as.qualityLabel, desc: as.qualityDesc },
                    { icon: '⚡', label: as.escoLabel,    desc: as.escoDesc },
                  ].map(c => (
                    <div key={c.label} className="bg-white rounded-2xl p-4 border border-gray-200 hover:border-[#6BBD45]/40 shadow-sm hover:shadow-md transition-all">
                      <div className="text-2xl mb-2">{c.icon}</div>
                      <div className="font-black text-[#1B3A2D] text-xs mb-1">{c.label}</div>
                      <p className="text-gray-500 text-xs leading-relaxed">{c.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* ── Our Many Firsts ── */}
          <section id="firsts" className="py-20 px-8 lg:px-12 border-b border-gray-100">
            <div className="w-full">
              <SectionHeader eyebrow={fs.eyebrow} title={fs.title} subtitle={fs.subtitle} />
              <div className="relative">
                <div className="absolute left-[18px] top-0 bottom-0 w-0.5 bg-gray-200" />
                <div className="space-y-5">
                  {MILESTONE_YEARS.map((year, i) => <MilestoneItem key={year + i} m={{ year, event: fs.milestones[i] }} i={i} />)}
                </div>
              </div>
            </div>
          </section>

          {/* ── Our Philosophy ── */}
          <section id="philosophy" className="py-20 px-8 lg:px-12 border-b border-gray-100">
            <div className="w-full">
              <SectionHeader eyebrow={ph.eyebrow} title={ph.title} subtitle={ph.subtitle} />
              <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5">
                {ph.principles.map((principle, i) => (
                  <div key={principle.n} className="group bg-white border border-gray-200 hover:border-[#6BBD45]/50 rounded-2xl p-6 hover:shadow-lg shadow-sm transition-all duration-300 text-center">
                    <div className="text-3xl mb-3">{PHILOSOPHY_ICONS[i]}</div>
                    <span className="text-xs font-black text-[#6BBD45] tracking-widest block mb-2">{principle.n}</span>
                    <h3 className="font-black text-[#1B3A2D] text-sm mb-2 group-hover:text-[#6BBD45] transition-colors">{principle.title}</h3>
                    <p className="text-gray-500 text-xs leading-relaxed">{principle.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── IMS Policy ── */}
          <section id="ims-policy" className="py-20 px-8 lg:px-12 border-b border-gray-100">
            <div className="w-full">
              <SectionHeader eyebrow={im.eyebrow} title={im.title} subtitle={im.subtitle} />
              <div className="bg-gradient-to-br from-[#0F2419] to-[#1B3A2D] rounded-3xl p-8 md:p-10 text-white">
                <p className="text-gray-300 text-base leading-relaxed mb-6 text-center max-w-2xl mx-auto">{im.body}</p>
                <div className="border-t border-white/10 pt-6 mb-6">
                  <h3 className="text-[#6BBD45] font-bold text-xs uppercase tracking-widest mb-3 text-center">{im.principleLabel}</h3>
                  <p className="text-gray-300 text-base leading-relaxed text-center max-w-2xl mx-auto">{im.principleBody}</p>
                </div>
                <h3 className="text-[#6BBD45] font-bold text-xs uppercase tracking-widest mb-5 text-center">{im.commitmentsLabel}</h3>
                <ol className="space-y-3 max-w-2xl mx-auto">
                  {im.commitments.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                      <span className="w-6 h-6 rounded-full bg-[#6BBD45]/20 border border-[#6BBD45]/40 text-[#6BBD45] text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">{i+1}</span>
                      {item}
                    </li>
                  ))}
                </ol>
                <div className="mt-8 pt-5 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 text-center">
                  <div>
                    <p className="text-white font-bold text-sm">Ir. ONG CHING LOON</p>
                    <p className="text-gray-400 text-xs">Managing Director</p>
                  </div>
                  <p className="text-gray-500 text-xs">Revision 4 · Effective 1 August 2024</p>
                  <a href="/documents/IMS_Policy_Revision_4.pdf" target="_blank" rel="noopener noreferrer"
                    className="border border-[#6BBD45]/40 text-[#6BBD45] hover:bg-[#6BBD45] hover:text-white text-xs font-semibold px-5 py-2 rounded-full transition-all">
                    {t.common.downloadPdf}
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* ── Our Processes ── */}
          <section id="processes" className="py-20 px-8 lg:px-12 border-b border-gray-100">
            <div className="w-full">
              <SectionHeader eyebrow={pr.eyebrow} title={pr.title} subtitle={pr.subtitle} />
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 mb-10">
                {ISO_CODES.map(iso => (
                  <div key={iso.code} className="group bg-white border border-gray-200 hover:border-[#6BBD45]/40 rounded-2xl p-5 hover:shadow-lg shadow-sm transition-all duration-300 text-center">
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-4 mx-auto" style={{ background: iso.color + '15' }}>{iso.icon}</div>
                    <div className="font-black text-[#1B3A2D] text-xs mb-1 group-hover:text-[#6BBD45] transition-colors">{iso.code}</div>
                    <a href={iso.pdf} target="_blank" rel="noopener noreferrer" className="text-[#6BBD45] text-xs font-semibold hover:underline">{t.common.viewCertificate}</a>
                  </div>
                ))}
              </div>
              <div className="bg-gradient-to-r from-[#0F2419] to-[#1B3A2D] rounded-2xl p-8 text-white">
                <p className="text-xs font-bold text-[#6BBD45] uppercase tracking-widest text-center mb-6">{pr.pdcaLabel}</p>
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  {pr.pdcaItems.map((s, i) => (
                    <div key={s.title}>
                      <div className="text-3xl mb-3">{PDCA_ICONS[i]}</div>
                      <div className="font-black text-[#6BBD45] mb-2">{s.title}</div>
                      <p className="text-gray-400 text-xs leading-relaxed">{s.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* ── Value & Ethics ── */}
          <section id="values" className="py-20 px-8 lg:px-12 border-b border-gray-100">
            <div className="w-full">
              <SectionHeader eyebrow={vs.eyebrow} title={vs.title} subtitle={vs.subtitle} />
              <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5">
                {vs.values.map((v, i) => (
                  <div key={v.title} className="group bg-white border border-gray-200 hover:border-[#6BBD45]/40 rounded-2xl p-6 hover:shadow-lg shadow-sm transition-all duration-300 text-center">
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-4 mx-auto group-hover:scale-110 transition-transform" style={{ background: VALUE_COLORS[i] + '15' }}>{VALUE_ICONS[i]}</div>
                    <h3 className="font-black text-[#1B3A2D] text-sm mb-2 group-hover:text-[#6BBD45] transition-colors">{v.title}</h3>
                    <p className="text-gray-500 text-xs leading-relaxed">{v.desc}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8 bg-[#1B3A2D] rounded-2xl p-8 text-white flex flex-col sm:flex-row items-start sm:items-center gap-6">
                <div className="flex-1">
                  <h3 className="font-black text-[#6BBD45] mb-2">{vs.charterTitle}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{vs.charterDesc}</p>
                </div>
                <a href="/documents/Ethics_Core_Values_Charter.pdf" target="_blank" rel="noopener noreferrer" className="shrink-0 border border-[#6BBD45]/40 text-[#6BBD45] hover:bg-[#6BBD45] hover:text-white text-xs font-semibold px-5 py-2.5 rounded-full transition-all whitespace-nowrap">
                  {t.common.downloadCharter}
                </a>
              </div>
            </div>
          </section>

          {/* ── Corporate Governance ── */}
          <section id="governance" className="py-20 px-8 lg:px-12 border-b border-gray-100">
            <div className="w-full">
              <SectionHeader eyebrow={gv.eyebrow} title={gv.title} subtitle={gv.subtitle} />
              <div className="grid sm:grid-cols-2 gap-6 mb-8">
                <div className="rounded-2xl p-10 text-white" style={{ background: 'linear-gradient(135deg, #0F2419 0%, #1B3A2D 100%)' }}>
                  <div className="text-5xl mb-5">🤝</div>
                  <h3 className="font-black text-[#6BBD45] text-2xl mb-4">{gv.rbaTitle}</h3>
                  <p className="text-gray-300 text-lg leading-relaxed">{gv.rbaDesc}</p>
                </div>
                <div className="rounded-2xl p-10 text-white" style={{ background: 'linear-gradient(135deg, #0F2419 0%, #1B3A2D 100%)' }}>
                  <div className="text-5xl mb-5">📜</div>
                  <h3 className="font-black text-white text-2xl mb-5">{gv.commitmentsTitle}</h3>
                  <ul className="space-y-4">
                    {gv.commitments.map(item => (
                      <li key={item} className="flex items-start gap-3 text-base text-gray-300">
                        <span className="text-[#6BBD45] mt-0.5 shrink-0 font-black text-lg">✓</span>{item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <h3 className="text-xs font-black text-gray-400 uppercase tracking-widest mb-4">{gv.policyDocsTitle}</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {gv.policies.map((pol, i) => (
                  <div key={pol.title} className="bg-white border border-gray-200 rounded-2xl p-5 hover:border-[#6BBD45]/40 hover:shadow-md shadow-sm transition-all">
                    <div className="text-2xl mb-3">{GOVERNANCE_POLICY_ICONS[i]}</div>
                    <h4 className="font-black text-[#1B3A2D] text-sm mb-2">{pol.title}</h4>
                    <p className="text-gray-500 text-xs leading-relaxed mb-4">{pol.desc}</p>
                    <a href={GOVERNANCE_POLICY_PDFS[i]} target="_blank" rel="noopener noreferrer" className="text-[#6BBD45] text-xs font-semibold hover:underline">{t.common.viewPolicy}</a>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── CSR ── */}
          <section id="csr" className="py-20 px-8 lg:px-12 border-b border-gray-100">
            <div className="w-full">
              <SectionHeader eyebrow={cs.eyebrow} title={cs.title} subtitle={cs.subtitle} />
              <div className="bg-[#f8fdf5] border border-[#6BBD45]/30 rounded-2xl p-6 mb-10">
                <h3 className="font-black text-[#1B3A2D] text-xs uppercase tracking-widest mb-3">{cs.policyTitle}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{cs.policyBody}</p>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-5">
                  {cs.dimensions.map(item => (
                    <div key={item} className="flex items-start gap-2">
                      <span className="text-[#6BBD45] mt-0.5 shrink-0 font-bold text-sm">✓</span>
                      <span className="text-xs text-gray-600">{item}</span>
                    </div>
                  ))}
                </div>
                <a href="/documents/CSR_Policy.pdf" target="_blank" rel="noopener noreferrer" className="text-[#6BBD45] text-xs font-semibold hover:underline">{t.common.downloadPdf} →</a>
              </div>
              <div className="grid sm:grid-cols-3 gap-5">
                {cs.initiatives.map((item, i) => (
                  <div key={item.title} className="bg-white border border-gray-200 rounded-2xl p-6 hover:border-[#6BBD45]/30 hover:shadow-lg shadow-sm transition-all duration-300 text-center">
                    <div className="text-4xl mb-4">{['🩺', '🌳', '🏠'][i]}</div>
                    <h3 className="font-black text-[#1B3A2D] text-lg mb-2">{item.title}</h3>
                    <p className="text-gray-500 text-base leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── Sustainability ── */}
          <section id="sustainability" className="py-20 px-8 lg:px-12 border-b border-gray-100">
            <div className="w-full">
              <SectionHeader eyebrow={su.eyebrow} title={su.title} subtitle={su.subtitle} />
              <div className="bg-gradient-to-br from-[#0F2419] to-[#1B3A2D] rounded-3xl p-8 md:p-10 text-white mb-10">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6 mb-8">
                  <div>
                    <h3 className="text-[#6BBD45] font-bold text-xs uppercase tracking-widest mb-2">{su.esgLabel}</h3>
                    <p className="text-gray-300 text-base leading-relaxed max-w-2xl">{su.esgBody}</p>
                  </div>
                  <a href="/documents/ESG_Policy.pdf" target="_blank" rel="noopener noreferrer" className="shrink-0 border border-[#6BBD45]/40 text-[#6BBD45] hover:bg-[#6BBD45] hover:text-white text-xs font-semibold px-5 py-2.5 rounded-full transition-all whitespace-nowrap">
                    {t.common.downloadPdf} →
                  </a>
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                  {su.pillars.map((pillar, i) => (
                    <div key={pillar.title} className="bg-white/5 rounded-2xl p-6">
                      <div className="text-2xl mb-3">{PILLAR_ICONS[i]}</div>
                      <h4 className="font-black text-[#6BBD45] text-sm mb-4">{pillar.title}</h4>
                      <ul className="space-y-2">
                        {pillar.items.map(item => (
                          <li key={item} className="flex items-start gap-2 text-xs text-gray-300">
                            <span className="text-[#6BBD45] mt-0.5 shrink-0">✓</span>{item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8 text-center">
                <h3 className="font-black text-[#1B3A2D] mb-2 text-lg">{su.sdgTitle}</h3>
                <p className="text-gray-500 text-base leading-relaxed mb-6 max-w-xl mx-auto">{su.sdgBody}</p>
                <div className="grid grid-cols-6 sm:grid-cols-9 gap-2 max-w-md mx-auto">
                  {SDG.map(g => (
                    <div key={g.n} className="aspect-square rounded-lg flex items-center justify-center text-white font-black text-sm hover:scale-110 transition-transform cursor-default" style={{ background: g.bg }}>{g.n}</div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* ── Corporate Themes ── */}
          <section id="themes" className="py-20 px-8 lg:px-12">
            <div className="w-full">
              <SectionHeader eyebrow={th.eyebrow} title={th.title} subtitle={th.subtitle} />
              <div className="space-y-3 mb-12">
                {THEMES.map(theme => (
                  <div key={theme.years} className={`flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-6 rounded-2xl px-6 py-4 border transition-all ${theme.highlight ? 'bg-[#1B3A2D] border-[#6BBD45]/30' : 'bg-white border-gray-200 hover:border-[#6BBD45]/30 shadow-sm'}`}>
                    <span className={`text-xs font-black uppercase tracking-widest shrink-0 ${theme.highlight ? 'text-[#6BBD45]' : 'text-gray-400'}`}>{theme.years}</span>
                    <span className={`font-semibold text-sm italic ${theme.highlight ? 'text-white' : 'text-[#1B3A2D]'}`}>"{theme.theme}"</span>
                  </div>
                ))}
              </div>

              {/* Awards CTA */}
              <div className="bg-gradient-to-br from-[#1B3A2D] to-[#0F2419] rounded-3xl p-10 text-center text-white">
                <Award size={40} className="text-[#6BBD45] mx-auto mb-4" />
                <h3 className="text-2xl font-black mb-3">{th.awardsTitle}</h3>
                <p className="text-gray-300 text-sm max-w-xl mx-auto mb-5">{th.awardsBody}</p>
                <div className="flex flex-wrap justify-center gap-3 mb-6">
                  {['2007','2010','2015','2016','2017'].map(yr => (
                    <span key={yr} className="bg-[#6BBD45]/20 border border-[#6BBD45]/40 text-[#6BBD45] px-4 py-1.5 rounded-full text-sm font-bold">{yr}</span>
                  ))}
                </div>
                <Link href="/contact" className="inline-flex items-center gap-2 bg-[#6BBD45] hover:bg-[#5aa838] text-white font-semibold px-8 py-3 rounded-full transition-all text-sm">
                  {th.awardsBtn} <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </section>

        </main>
      </div>
    </>
  );
}

function MilestoneItem({ m, i }: { m: { year: string; event: string }; i: number }) {
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
        <div className="bg-white border border-gray-200 rounded-2xl p-4 hover:border-[#6BBD45]/40 hover:shadow-md transition-all duration-300 group shadow-sm">
          <span className="text-xs font-black text-[#6BBD45] tracking-widest uppercase block mb-1">{m.year}</span>
          <p className="text-base text-gray-700 font-medium leading-relaxed group-hover:text-[#1B3A2D] transition-colors">{m.event}</p>
        </div>
      </div>
    </div>
  );
}
