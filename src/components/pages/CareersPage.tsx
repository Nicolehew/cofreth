'use client';
import Link from 'next/link';
import { ArrowRight, Mail, Briefcase, Users, TrendingUp, Heart, Shield, Zap, Building2, Leaf, Cpu, HardHat, BarChart2 } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

/* ── Why work at Cofreth ── */
const perks = [
  { icon: TrendingUp, title: 'Career Growth',          desc: 'Structured career pathways with mentoring, training and promotion opportunities across all levels.' },
  { icon: Shield,     title: 'Comprehensive Benefits', desc: 'Competitive salary, medical coverage, performance bonuses and annual increment reviews.' },
  { icon: Heart,      title: 'Work-Life Balance',      desc: 'Supportive environment that respects personal time with flexible working where possible.' },
  { icon: Zap,        title: 'Meaningful Work',        desc: "Contribute directly to Malaysia's sustainability journey through energy and green building programmes." },
  { icon: Users,      title: 'Great Team Culture',     desc: '38+ years of camaraderie — a professional yet close-knit team that celebrates wins together.' },
  { icon: Briefcase,  title: 'Diverse Experience',     desc: 'Work across airports, data centres, convention centres, universities and landmark buildings.' },
];

/* ── Talent pool interest areas ── */
const areas = [
  { icon: Building2, title: 'Facilities Management',    desc: 'FM Managers, Building Technicians, M&E Engineers, Supervisors',          color: '#6BBD45' },
  { icon: Zap,       title: 'Energy Services',          desc: 'Energy Auditors, ESCO Engineers, M&V Specialists, Project Managers',      color: '#f59e0b' },
  { icon: Leaf,      title: 'Green Building & Sustainability', desc: 'GBI Consultants, Commissioning Engineers, Green Facilitators',     color: '#10b981' },
  { icon: Cpu,       title: 'Smart Technology & BIM',   desc: 'BAS/IoT Technicians, ARCHIBUS Consultants, BIM Modellers',              color: '#3b82f6' },
  { icon: HardHat,   title: 'Engineering & Technical',  desc: 'Mechanical, Electrical & Civil Engineers, Project Engineers',           color: '#8b5cf6' },
  { icon: BarChart2, title: 'Business & Corporate',     desc: 'Business Development, Finance, HR, Administration, IT',                 color: '#ef4444' },
];

function PerkCard({ perk, i }: { perk: typeof perks[0]; i: number }) {
  const reveal = useScrollReveal(0.05);
  const Icon = perk.icon;
  return (
    <div ref={reveal.ref} className="transition-all duration-700"
      style={{ opacity: reveal.visible ? 1 : 0, transform: reveal.visible ? 'none' : 'translateY(30px)', transitionDelay: `${i * 80}ms` }}>
      <div className="bg-white/5 border border-white/10 hover:border-[#6BBD45]/40 rounded-2xl p-6 h-full transition-all duration-300 hover:-translate-y-1">
        <div className="w-11 h-11 rounded-xl bg-[#6BBD45]/15 flex items-center justify-center mb-4">
          <Icon size={20} className="text-[#6BBD45]" />
        </div>
        <h3 className="font-bold text-white mb-2">{perk.title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed">{perk.desc}</p>
      </div>
    </div>
  );
}

function AreaCard({ area, i }: { area: typeof areas[0]; i: number }) {
  const reveal = useScrollReveal(0.05);
  const Icon = area.icon;
  return (
    <div ref={reveal.ref} className="transition-all duration-700"
      style={{ opacity: reveal.visible ? 1 : 0, transform: reveal.visible ? 'none' : 'translateY(30px)', transitionDelay: `${i * 70}ms` }}>
      <a href={`mailto:careers@cofreth.com.my?subject=Talent Pool: ${encodeURIComponent(area.title)}`}
        className="group flex items-start gap-4 bg-white border border-gray-100 hover:border-[#6BBD45]/40 rounded-2xl p-5 h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer">
        <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300"
          style={{ background: area.color + '18' }}>
          <Icon size={20} style={{ color: area.color }} />
        </div>
        <div className="flex-1">
          <h3 className="font-bold text-[#1B3A2D] group-hover:text-[#6BBD45] transition-colors mb-1">{area.title}</h3>
          <p className="text-gray-400 text-xs leading-relaxed">{area.desc}</p>
        </div>
        <ArrowRight size={15} className="text-gray-300 group-hover:text-[#6BBD45] transition-all duration-200 shrink-0 mt-1 group-hover:translate-x-1" />
      </a>
    </div>
  );
}

export default function CareersPage() {
  const hero   = useScrollReveal();
  const noJobs = useScrollReveal();
  const pool   = useScrollReveal();

  return (
    <>
      {/* ── Hero ── */}
      <div className="pt-32 pb-20 text-white relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #060e08 0%, #0F2419 50%, #060e08 100%)' }}>
        <div className="absolute inset-0 opacity-[0.06]"
          style={{ backgroundImage: 'linear-gradient(#6BBD45 1px, transparent 1px), linear-gradient(90deg, #6BBD45 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(107,189,69,0.10) 0%, transparent 70%)' }} />

        <div ref={hero.ref} className="max-w-4xl mx-auto px-6 text-center transition-all duration-700"
          style={{ opacity: hero.visible ? 1 : 0, transform: hero.visible ? 'none' : 'translateY(30px)' }}>
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="w-10 h-px bg-[#6BBD45]" />
            <span className="text-[#6BBD45] text-sm font-bold tracking-widest uppercase">Join Our Team</span>
            <div className="w-10 h-px bg-[#6BBD45]" />
          </div>
          <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
            Build Your Career<br /><span className="text-[#6BBD45]">With Cofreth</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed mb-10">
            Join Malaysia's leading Facilities Management and Energy Services company. 38 years of excellence — and we're still growing. Be part of a team that shapes the built environment.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
            {[['38+', 'Years of Growth'], ['30+', 'Major Clients'], ['5×', 'Award Winning'], ['ISO', '5 Certifications']].map(([v, l]) => (
              <div key={l} className="bg-white/5 border border-white/10 rounded-2xl py-4 px-3 text-center">
                <div className="text-2xl font-black text-[#6BBD45]">{v}</div>
                <div className="text-xs text-gray-400 mt-1">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Why Cofreth ── */}
      <section className="py-20" style={{ background: 'linear-gradient(135deg, #0a1810 0%, #1B3A2D 100%)' }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-0.5 bg-[#6BBD45]" />
              <span className="text-[#6BBD45] text-sm font-semibold tracking-widest uppercase">Why Join Us</span>
              <div className="w-8 h-0.5 bg-[#6BBD45]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-white">Why Work at Cofreth?</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {perks.map((p, i) => <PerkCard key={p.title} perk={p} i={i} />)}
          </div>
        </div>
      </section>

      {/* ── No Current Openings ── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-6">
          <div ref={noJobs.ref} className="text-center transition-all duration-700"
            style={{ opacity: noJobs.visible ? 1 : 0, transform: noJobs.visible ? 'none' : 'translateY(30px)' }}>
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-0.5 bg-[#6BBD45]" />
              <span className="text-[#6BBD45] text-sm font-semibold tracking-widest uppercase">Current Openings</span>
              <div className="w-8 h-0.5 bg-[#6BBD45]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-[#1B3A2D] mb-6">Open Positions</h2>

            {/* No openings card */}
            <div className="bg-white border-2 border-dashed border-gray-200 rounded-3xl p-12 flex flex-col items-center">
              <div className="w-16 h-16 bg-[#6BBD45]/10 rounded-2xl flex items-center justify-center mb-5">
                <Briefcase size={30} className="text-[#6BBD45]" />
              </div>
              <h3 className="text-xl font-black text-[#1B3A2D] mb-3">No Vacancies at This Time</h3>
              <p className="text-gray-500 text-sm leading-relaxed max-w-md mx-auto mb-6">
                We don't have any advertised openings right now — but we're always interested in connecting with exceptional talent. Register your interest below and we'll reach out when a role that matches your profile becomes available.
              </p>
              <div className="flex items-center gap-2 bg-[#6BBD45]/8 border border-[#6BBD45]/20 rounded-full px-5 py-2.5">
                <span className="w-2 h-2 bg-[#6BBD45] rounded-full animate-pulse" />
                <span className="text-sm font-semibold text-[#1B3A2D]">Check back regularly — we grow fast</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Talent Pool ── */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div ref={pool.ref} className="text-center mb-12 transition-all duration-700"
            style={{ opacity: pool.visible ? 1 : 0, transform: pool.visible ? 'none' : 'translateY(30px)' }}>
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-0.5 bg-[#6BBD45]" />
              <span className="text-[#6BBD45] text-sm font-semibold tracking-widest uppercase">Talent Pool</span>
              <div className="w-8 h-0.5 bg-[#6BBD45]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-[#1B3A2D] mb-4">Register Your Interest</h2>
            <p className="text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">
              Click on any area below to send us your CV. We'll hold it in our talent pool and reach out when a relevant position opens up.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {areas.map((a, i) => <AreaCard key={a.title} area={a} i={i} />)}
          </div>
        </div>
      </section>

      {/* ── Spontaneous Application CTA ── */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-gradient-to-br from-[#0F2419] to-[#1B3A2D] rounded-3xl p-10 md:p-14 text-white text-center border border-[#6BBD45]/20">
            <div className="w-14 h-14 bg-[#6BBD45]/15 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Mail size={28} className="text-[#6BBD45]" />
            </div>
            <h2 className="text-2xl md:text-3xl font-black mb-4">Send Us Your CV Anytime</h2>
            <p className="text-gray-300 max-w-xl mx-auto mb-8 leading-relaxed text-sm">
              Don't wait for a vacancy to be posted. Send us your CV and cover letter — tell us what you're good at and what you're looking for. We review every application personally.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:careers@cofreth.com.my?subject=Spontaneous Application — Cofreth"
                className="inline-flex items-center justify-center gap-2 bg-[#6BBD45] hover:bg-[#5aa838] text-white font-bold px-10 py-4 rounded-full transition-all hover:-translate-y-0.5">
                Email Your CV <ArrowRight size={18} />
              </a>
              <Link href="/contact"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/25 text-white hover:border-[#6BBD45] hover:text-[#6BBD45] font-bold px-10 py-4 rounded-full transition-all hover:-translate-y-0.5">
                Contact HR Team
              </Link>
            </div>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-xs text-gray-500">
              <span>📧 careers@cofreth.com.my</span>
              <span>📍 Kuala Lumpur, Malaysia</span>
              <span>⏱ We respond within 5 business days</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
