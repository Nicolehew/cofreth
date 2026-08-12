'use client';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import { ArrowRight, Mail, Briefcase, Users, TrendingUp, Heart, Shield, Zap, Building2, Leaf, Cpu, HardHat, BarChart2 } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useLanguage } from '@/contexts/LanguageContext';

const perkIcons = [TrendingUp, Shield, Heart, Zap, Users, Briefcase];
const areaColors = ['#6BBD45', '#f59e0b', '#10b981', '#3b82f6', '#8b5cf6', '#ef4444'];
const areaIcons = [Building2, Zap, Leaf, Cpu, HardHat, BarChart2];

function PerkCard({ title, desc, i }: { title: string; desc: string; i: number }) {
  const reveal = useScrollReveal(0.05);
  const Icon = perkIcons[i];
  return (
    <div ref={reveal.ref} className="transition-all duration-700"
      style={{ opacity: reveal.visible ? 1 : 0, transform: reveal.visible ? 'none' : 'translateY(30px)', transitionDelay: `${i * 80}ms` }}>
      <div className="group bg-white/8 border border-white/10 hover:border-[#6BBD45]/50 hover:bg-white/14 rounded-2xl p-8 h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
        <div className="w-16 h-16 rounded-2xl bg-[#6BBD45] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300" style={{ boxShadow: '0 4px 14px rgba(107,189,69,0.35)' }}>
          <Icon size={28} className="text-white" />
        </div>
        <h3 className="font-black text-white mb-3 text-xl">{title}</h3>
        <p className="text-white/70 leading-relaxed text-base">{desc}</p>
      </div>
    </div>
  );
}

function AreaCard({ title, desc, i }: { title: string; desc: string; i: number }) {
  const reveal = useScrollReveal(0.05);
  const Icon = areaIcons[i];
  const color = areaColors[i];
  return (
    <div ref={reveal.ref} className="transition-all duration-700"
      style={{ opacity: reveal.visible ? 1 : 0, transform: reveal.visible ? 'none' : 'translateY(30px)', transitionDelay: `${i * 70}ms` }}>
      <a href={`mailto:careers@cofreth.com.my?subject=Talent Pool: ${encodeURIComponent(title)}`}
        className="group flex items-start gap-5 bg-white border border-gray-200 hover:border-[#6BBD45]/50 rounded-2xl p-7 h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer shadow-sm">
        <div className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300"
          style={{ background: color + '18' }}>
          <Icon size={26} style={{ color }} />
        </div>
        <div className="flex-1">
          <h3 className="font-black text-[#1B3A2D] group-hover:text-[#6BBD45] transition-colors mb-2 text-xl">{title}</h3>
          <p className="text-gray-500 leading-relaxed text-base">{desc}</p>
        </div>
        <ArrowRight size={18} className="text-gray-300 group-hover:text-[#6BBD45] transition-all duration-200 shrink-0 mt-1 group-hover:translate-x-1" />
      </a>
    </div>
  );
}

export default function CareersPage() {
  const noJobs = useScrollReveal();
  const pool   = useScrollReveal();
  const { t } = useLanguage();
  const p = t.pages.careers;

  return (
    <>
      <PageHero
        bgImage="https://images.unsplash.com/photo-1521737604082-14b2d77a0c0b?auto=format&fit=crop&w=1920&q=90"
        eyebrow={p.heroEyebrow}
        eyebrowSub={p.heroEyebrowSub}
        title={<>{p.heroTitle1}<br /><span className="text-[#6BBD45]">{p.heroTitleAccent}</span></>}
        subtitle={p.heroSubtitle}
        stats={[
          { num: '38+', label: 'Years of Growth' },
          { num: '30+', label: 'Major Clients' },
          { num: '5×',  label: 'Award Winning' },
          { num: '5',   label: 'ISO Certifications' },
        ]}
      />

      {/* ── Life at Cofreth — human photos ── */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="w-8 h-0.5 bg-[#6BBD45]" />
              <span className="text-[#6BBD45] text-sm font-semibold tracking-widest uppercase">{p.lifeEyebrow}</span>
              <div className="w-8 h-0.5 bg-[#6BBD45]" />
            </div>
            <h2 className="text-3xl font-black text-[#1B3A2D]">{p.lifeTitle}</h2>
          </div>
          {/* Asymmetric photo grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-3">
            <div className="col-span-2 row-span-2 rounded-2xl overflow-hidden h-72 md:h-auto">
              <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80"
                alt="Engineer inspecting building systems" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="rounded-2xl overflow-hidden h-36">
              <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80"
                alt="Technician at work" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="rounded-2xl overflow-hidden h-36">
              <img src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=600&q=80"
                alt="Team meeting" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="rounded-2xl overflow-hidden h-36">
              <img src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=600&q=80"
                alt="Building engineer" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="rounded-2xl overflow-hidden h-36">
              <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=600&q=80"
                alt="Professionals collaborating" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-3">
            <div className="rounded-2xl overflow-hidden h-40">
              <img src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&w=600&q=80"
                alt="Modern facility" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="rounded-2xl overflow-hidden h-40">
              <img src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=600&q=80"
                alt="Office environment" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="rounded-2xl overflow-hidden h-40">
              <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80"
                alt="Professional workspace" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Why Cofreth ── */}
      <section className="py-24 bg-[#1B3A2D]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-0.5 bg-[#6BBD45]" />
              <span className="text-[#6BBD45] text-sm font-semibold tracking-widest uppercase">{p.whyEyebrow}</span>
              <div className="w-8 h-0.5 bg-[#6BBD45]" />
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-white">{p.whyTitle}</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {p.perks.map((perk, i) => <PerkCard key={i} title={perk.title} desc={perk.desc} i={i} />)}
          </div>
        </div>
      </section>

      {/* ── No Current Openings ── */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <div ref={noJobs.ref} className="text-center transition-all duration-700"
            style={{ opacity: noJobs.visible ? 1 : 0, transform: noJobs.visible ? 'none' : 'translateY(30px)' }}>
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-0.5 bg-[#6BBD45]" />
              <span className="text-[#6BBD45] text-sm font-semibold tracking-widest uppercase">{p.openingsEyebrow}</span>
              <div className="w-8 h-0.5 bg-[#6BBD45]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-[#1B3A2D] mb-6">{p.openingsTitle}</h2>

            {/* No openings card */}
            <div className="bg-white border-2 border-dashed border-gray-200 rounded-3xl p-12 flex flex-col items-center">
              <div className="w-16 h-16 bg-[#6BBD45]/10 rounded-2xl flex items-center justify-center mb-5">
                <Briefcase size={30} className="text-[#6BBD45]" />
              </div>
              <h3 className="text-xl font-black text-[#1B3A2D] mb-3">{p.noJobsTitle}</h3>
              <p className="text-gray-500 text-base leading-relaxed max-w-md mx-auto mb-6">{p.noJobsBody}</p>
              <div className="flex items-center gap-2 bg-[#6BBD45]/8 border border-[#6BBD45]/20 rounded-full px-5 py-2.5">
                <span className="w-2 h-2 bg-[#6BBD45] rounded-full animate-pulse" />
                <span className="text-sm font-semibold text-[#1B3A2D]">{p.noJobsNote}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Talent Pool ── */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <div ref={pool.ref} className="text-center mb-14 transition-all duration-700"
            style={{ opacity: pool.visible ? 1 : 0, transform: pool.visible ? 'none' : 'translateY(30px)' }}>
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-0.5 bg-[#6BBD45]" />
              <span className="text-[#6BBD45] text-sm font-semibold tracking-widest uppercase">{p.poolEyebrow}</span>
              <div className="w-8 h-0.5 bg-[#6BBD45]" />
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-[#1B3A2D] mb-4">{p.poolTitle}</h2>
            <p className="text-gray-600 max-w-xl mx-auto leading-relaxed text-lg">{p.poolBody}</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {p.areas.map((area, i) => <AreaCard key={i} title={area.title} desc={area.desc} i={i} />)}
          </div>
        </div>
      </section>

      {/* ── Spontaneous Application CTA ── */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-gradient-to-br from-[#0F2419] to-[#1B3A2D] rounded-3xl p-10 md:p-14 text-white text-center border border-[#6BBD45]/20">
            <div className="w-14 h-14 bg-[#6BBD45]/15 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Mail size={28} className="text-[#6BBD45]" />
            </div>
            <h2 className="text-2xl md:text-3xl font-black mb-4">{p.cvTitle}</h2>
            <p className="text-gray-300 max-w-xl mx-auto mb-8 leading-relaxed text-base">{p.cvBody}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:careers@cofreth.com.my?subject=Spontaneous Application — Cofreth"
                className="inline-flex items-center justify-center gap-2 bg-[#6BBD45] hover:bg-[#5aa838] text-white font-bold px-10 py-4 rounded-full transition-all hover:-translate-y-0.5">
                {p.cvBtn1} <ArrowRight size={18} />
              </a>
              <Link href="/contact"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/25 text-white hover:border-[#6BBD45] hover:text-[#6BBD45] font-bold px-10 py-4 rounded-full transition-all hover:-translate-y-0.5">
                {p.cvBtn2}
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
