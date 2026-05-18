'use client';
import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { X, Shield, CheckCircle, Leaf, Zap, Building2, ArrowRight, Eye, RefreshCw } from 'lucide-react';

const certs = [
  {
    code:  'ISO 45001:2018',
    label: 'Occupational Health & Safety',
    icon:  Shield,
    color: '#ef4444',
    bg:    '#fef2f2',
    darkBg:'rgba(239,68,68,0.12)',
    desc:  'Systematic hazard identification and OHS risk control across all site operations — ensuring every Cofreth-managed facility is a safe working environment.',
    detail: 'Covers risk assessments, incident investigation, emergency preparedness, and legal compliance across all FM contracts.',
    pdf:   'https://www.cofreth.com.my/images/ISO_45001-2018(OHS)(2023-2026).pdf',
    valid:  '2023–2026',
  },
  {
    code:  'ISO 9001:2015',
    label: 'Quality Management',
    icon:  CheckCircle,
    color: '#3b82f6',
    bg:    '#eff6ff',
    darkBg:'rgba(59,130,246,0.12)',
    desc:  'Consistent, high-quality service delivery backed by documented procedures, regular audits and continuous improvement across every service line.',
    detail: 'Customer-focused QMS covering service planning, delivery, performance monitoring and corrective actions.',
    pdf:   'https://www.cofreth.com.my/images/ISO_9001-2015_(QMS)(2023-2026).pdf',
    valid:  '2023–2026',
  },
  {
    code:  'ISO 14001:2015',
    label: 'Environmental Management',
    icon:  Leaf,
    color: '#10b981',
    bg:    '#f0fdf4',
    darkBg:'rgba(16,185,129,0.12)',
    desc:  'Minimising environmental impact through responsible operational practices, waste management, and continuous environmental performance monitoring.',
    detail: 'Lifecycle-based environmental planning covering energy, water, waste and emissions across all managed assets.',
    pdf:   'https://www.cofreth.com.my/images/ISO_14001-2015(EMS)(2023-2026).pdf',
    valid:  '2023–2026',
  },
  {
    code:  'ISO 50001:2018',
    label: 'Energy Management',
    icon:  Zap,
    color: '#f59e0b',
    bg:    '#fffbeb',
    darkBg:'rgba(245,158,11,0.12)',
    desc:  'Structured energy monitoring, targeting and optimisation — reducing client energy consumption and costs through data-driven performance management.',
    detail: 'Energy reviews, performance indicators, baselines and action plans aligned with Cofreth\'s ESCO and CoPC models.',
    pdf:   'https://www.cofreth.com.my/images/ISO_50001-2018(EnMS)(2023-2026).pdf',
    valid:  '2023–2026',
  },
  {
    code:  'ISO 41001:2018',
    label: 'Facility Management',
    icon:  Building2,
    color: '#8b5cf6',
    bg:    '#f5f3ff',
    darkBg:'rgba(139,92,246,0.12)',
    desc:  'The global standard for FM systems — defining how organisations structure and deliver facility management to achieve organisational objectives.',
    detail: 'Strategic FM framework covering leadership, planning, support, operations and performance evaluation.',
    pdf:   null,
    valid:  '2023–2026',
  },
];

const pdcaSteps = [
  { icon: '🔍', letter: 'P', word: 'Plan',   color: '#6BBD45', desc: 'Define objectives, identify hazards and risks, then plan the FM or energy solution tailored to your specific facility and operational needs.' },
  { icon: '⚙️', letter: 'D', word: 'Do',     color: '#3b82f6', desc: 'Execute with certified engineers and technicians following ISO-compliant procedures, SOPs and method statements.' },
  { icon: '📊', letter: 'C', word: 'Check',  color: '#f59e0b', desc: 'Monitor KPIs, measure energy performance, conduct internal audits and third-party surveillance to verify outcomes.' },
  { icon: '🔄', letter: 'A', word: 'Act',    color: '#ef4444', desc: 'Take corrective and preventive actions, update procedures and feed lessons learned back into the next planning cycle.' },
];

function PdfModal({ url, title, onClose }: { url: string; title: string; onClose: () => void }) {
  const [attempt, setAttempt] = useState(0);
  const [loading, setLoading] = useState(true);
  const [failed, setFailed] = useState(false);

  // Google Docs viewer wraps the PDF — no browser download toolbar shown
  const viewerUrl = `https://docs.google.com/viewer?url=${encodeURIComponent(url)}&embedded=true`;

  // Auto-retry up to 6 times (Google Docs viewer is slow on first load)
  const retry = useCallback(() => {
    setLoading(true);
    setFailed(false);
    setAttempt(n => n + 1);
  }, []);

  useEffect(() => {
    if (!loading) return;
    // If still "loading" after 12 s, auto-retry (max 6 attempts)
    const t = setTimeout(() => {
      if (attempt < 6) {
        setAttempt(n => n + 1); // remount iframe → fresh request
      } else {
        setLoading(false);
        setFailed(true);
      }
    }, 12000);
    return () => clearTimeout(t);
  }, [attempt, loading]);

  return (
    <div className="fixed inset-0 z-[500] flex flex-col" style={{ background: 'rgba(0,0,0,0.9)' }}>
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-3 bg-white border-b border-gray-100 shrink-0">
        <div className="flex items-center gap-3">
          <Eye size={16} className="text-[#6BBD45]" />
          <span className="text-[#1B3A2D] font-semibold truncate max-w-[60vw] text-sm">{title}</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="bg-[#6BBD45]/15 border border-[#6BBD45]/30 text-[#6BBD45] px-3 py-1 rounded-full font-bold hidden sm:block text-xs">
            VIEW ONLY
          </span>
          <button onClick={onClose}
            className="flex items-center gap-1.5 text-gray-500 hover:text-red-500 transition-colors px-3 py-1.5 rounded-lg hover:bg-gray-100 text-sm">
            <X size={15} /> Close
          </button>
        </div>
      </div>

      {/* Viewer area */}
      <div className="flex-1 overflow-hidden relative bg-[#404040]">
        {/* Loading overlay */}
        {loading && (
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-4 bg-[#404040]">
            <div className="w-12 h-12 border-4 border-[#6BBD45]/30 border-t-[#6BBD45] rounded-full animate-spin" />
            <p className="text-white font-semibold text-base">Loading certificate…</p>
            <p className="text-gray-400 text-xs">Attempt {attempt + 1} of 6</p>
          </div>
        )}

        {/* Failed state */}
        {failed && (
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-5 bg-[#404040]">
            <div className="text-4xl">📄</div>
            <p className="text-white font-bold text-base">Could not load the certificate</p>
            <p className="text-gray-400 text-center max-w-xs text-sm">
              Google's document viewer is temporarily unavailable. Please try again.
            </p>
            <button onClick={retry}
              className="flex items-center gap-2 bg-[#6BBD45] hover:bg-[#5aa838] text-white font-bold px-6 py-3 rounded-full transition-all text-sm">
              <RefreshCw size={16} /> Try Again
            </button>
          </div>
        )}

        {/* Google Docs iframe — no native PDF toolbar = no download button */}
        <iframe
          key={attempt}               /* remount on every retry */
          src={viewerUrl}
          className="w-full h-full border-0"
          title={title}
          onLoad={() => setLoading(false)}
        />
      </div>
    </div>
  );
}

export default function ProcessesContent() {
  const [activePdf, setActivePdf] = useState<{ url: string; title: string } | null>(null);

  return (
    <>
      {activePdf && (
        <PdfModal url={activePdf.url} title={activePdf.title} onClose={() => setActivePdf(null)} />
      )}

      {/* ── ISO Certs ── */}
      <section className="bg-white py-16 px-6 lg:px-10 xl:px-14">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-10">
          <span className="w-1 h-6 bg-[#6BBD45] rounded-full" />
          <span className="font-black text-[#1B3A2D] uppercase tracking-widest text-sm">
            ISO Certifications · SIRIM QAS Audited · Valid 2023–2026
          </span>
        </div>

        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5 mb-6">
          {certs.slice(0, 3).map(c => (
            <CertCard key={c.code} cert={c} onView={() => c.pdf && setActivePdf({ url: c.pdf, title: `${c.code} — ${c.label}` })} />
          ))}
        </div>
        <div className="grid sm:grid-cols-2 gap-5">
          {certs.slice(3).map(c => (
            <CertCard key={c.code} cert={c} onView={() => c.pdf && setActivePdf({ url: c.pdf, title: `${c.code} — ${c.label}` })} />
          ))}
        </div>
      </section>

      {/* ── PDCA Cycle ── */}
      <section className="py-16 px-6 lg:px-10 xl:px-14 bg-white border-t border-gray-100">
        <div className="flex items-center gap-3 mb-12">
          <span className="w-1 h-6 bg-[#6BBD45] rounded-full" />
          <span className="font-black text-[#1B3A2D] uppercase tracking-widest text-sm">
            PDCA — Our Continuous Improvement Engine
          </span>
        </div>

        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {pdcaSteps.map((s, i) => (
            <div key={s.word} className="relative">
              {i < pdcaSteps.length - 1 && (
                <div className="hidden xl:block absolute top-8 left-full w-6 border-t-2 border-dashed border-gray-200 z-10" />
              )}
              <div className="bg-white border border-gray-100 hover:border-[#6BBD45]/40 rounded-2xl p-6 transition-all duration-300 hover:shadow-md h-full">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center font-black text-white mb-5 shrink-0 text-2xl"
                  style={{ background: s.color }}>
                  {s.letter}
                </div>
                <div className="font-black text-[#1B3A2D] mb-2 text-lg">{s.word}</div>
                <p className="text-gray-500 leading-relaxed text-base">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-400 mt-10 text-sm">
          The PDCA cycle governs every Cofreth service contract — from FM maintenance scheduling to energy performance monitoring.
        </p>
      </section>

      {/* ── SIRIM + Stats ── */}
      <section className="bg-white py-16 px-6 lg:px-10 xl:px-14 border-t border-gray-100">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="w-1 h-6 bg-[#6BBD45] rounded-full" />
              <span className="font-black text-[#1B3A2D] uppercase tracking-widest text-sm">
                Certification Body
              </span>
            </div>
            <h2 className="font-black text-[#1B3A2D] leading-tight mb-4" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)' }}>
              Independently Audited by<br /><span className="text-[#6BBD45]">SIRIM QAS International</span>
            </h2>
            <p className="text-gray-500 leading-relaxed mb-6 text-lg">
              All five ISO certifications are independently audited and issued by SIRIM QAS International — Malaysia's premier conformity assessment body and a member of the International Accreditation Forum (IAF).
            </p>
            <div className="flex flex-wrap gap-2">
              {['IAF Member', 'DAkkS Accredited', 'Government Linked', '40+ Years in Quality'].map(b => (
                <span key={b} className="px-3 py-1.5 bg-[#6BBD45]/10 text-[#1B3A2D] rounded-full font-semibold text-sm">{b}</span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { num: '5',    label: 'ISO Standards Certified', sub: 'Simultaneous certifications' },
              { num: '2026', label: 'Certificate Validity',    sub: 'Annual surveillance audits' },
              { num: '38+',  label: 'Years in Operation',      sub: 'Est. 1986' },
              { num: '100%', label: 'Audit Pass Rate',         sub: 'Zero major non-conformances' },
            ].map(s => (
              <div key={s.label} className="bg-white border border-gray-100 rounded-2xl p-5">
                <div className="font-black text-[#6BBD45] mb-1 text-3xl">{s.num}</div>
                <div className="font-bold text-[#1B3A2D] mb-1 text-base">{s.label}</div>
                <div className="text-gray-400 text-xs">{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[#6BBD45] py-14 px-6 lg:px-10 xl:px-14">
          <p className="font-bold text-white/80 uppercase tracking-widest mb-3 text-sm">Work With a Certified FM Partner</p>
          <h2 className="font-black text-white mb-4 leading-tight" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)' }}>
            Five ISO standards. One trusted partner.
          </h2>
          <p className="text-white/80 mb-8 leading-relaxed text-lg">
            Cofreth's multi-ISO certification means your facilities are managed to the highest independently verified standards — across quality, safety, environment and energy.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact"
              className="inline-flex items-center gap-2 bg-[#1B3A2D] hover:bg-[#0F2419] text-white font-bold px-8 py-3.5 rounded-full transition-all text-base">
              Enquire About FM Services <ArrowRight size={16} />
            </Link>
            <Link href="/services/facilities-management"
              className="inline-flex items-center gap-2 border-2 border-white/40 hover:border-white text-white font-semibold px-8 py-3.5 rounded-full transition-all text-base">
              Our FM Services
            </Link>
          </div>
      </section>
    </>
  );
}

function CertCard({ cert, onView }: { cert: typeof certs[0]; onView: () => void }) {
  const Icon = cert.icon;
  return (
    <div className="group bg-white border border-gray-100 hover:border-[#6BBD45]/40 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col">
      {/* Coloured top band */}
      <div className="h-1.5 w-full" style={{ background: cert.color }} />
      <div className="p-6 flex flex-col flex-1">
        {/* Icon + code */}
        <div className="flex items-start justify-between mb-4">
          <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
            style={{ background: `color-mix(in srgb, ${cert.color} 15%, transparent)` }}>
            <Icon size={22} style={{ color: cert.color }} />
          </div>
          <span className="text-gray-400 font-mono font-bold text-xs">
            SIRIM QAS
          </span>
        </div>

        <div className="font-black text-[#1B3A2D] group-hover:text-[#6BBD45] transition-colors mb-1 text-base">
          {cert.code}
        </div>
        <div className="text-base font-semibold mb-3" style={{ color: cert.color }}>
          {cert.label}
        </div>
        <p className="text-gray-500 leading-relaxed mb-2 flex-1 text-base">
          {cert.desc}
        </p>
        <p className="text-gray-400 leading-relaxed mb-5 italic text-sm">
          {cert.detail}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <span className="text-gray-400 text-xs">Valid {cert.valid}</span>
          {cert.pdf ? (
            <button
              onClick={onView}
              className="text-sm flex items-center gap-1.5 font-semibold transition-all hover:gap-2.5"
              style={{ color: cert.color }}
            >
              <Eye size={13} /> View Certificate
            </button>
          ) : (
            <span className="text-gray-400 italic text-sm">
              Available on request
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
