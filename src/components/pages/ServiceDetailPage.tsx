'use client';
import Link from 'next/link';
import { CheckCircle, ArrowLeft, Building2, Zap, Leaf, Cpu, LucideIcon, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useLanguage } from '@/contexts/LanguageContext';

const ICON_MAP: Record<string, LucideIcon> = { Building2, Zap, Leaf, Cpu };

interface SectionData { title: string; desc: string; points: readonly string[]; image?: string; }

function SectionRow({ sec, index }: { sec: SectionData; index: number }) {
  const reveal = useScrollReveal();
  const { t } = useLanguage();
  const isEven = index % 2 === 0;
  return (
    <div ref={reveal.ref} className="transition-all duration-700"
      style={{ opacity: reveal.visible ? 1 : 0, transform: reveal.visible ? 'none' : 'translateY(40px)', transitionDelay: `${index * 60}ms` }}>
      <div className={`grid lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden shadow-sm border border-gray-100 ${isEven ? '' : 'direction-rtl'}`}>
        {/* Image panel */}
        {sec.image && (
          <div className={`relative h-64 lg:h-auto min-h-[280px] ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
            <img src={sec.image} alt={sec.title} className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(15,36,25,0.55) 0%, transparent 70%)' }} />
            <div className="absolute top-5 left-5">
              <span className="bg-[#6BBD45] text-white text-xs font-bold px-3 py-1.5 rounded-full tracking-widest uppercase">
                {String(index + 1).padStart(2, '0')}
              </span>
            </div>
          </div>
        )}

        {/* Content panel */}
        <div className={`bg-white p-8 lg:p-10 flex flex-col justify-center ${sec.image ? (isEven ? 'lg:order-1' : 'lg:order-2') : 'lg:col-span-2'}`}>
          {!sec.image && (
            <div className="w-9 h-9 bg-[#6BBD45] rounded-full flex items-center justify-center text-white text-sm font-bold mb-4 shrink-0">
              {String(index + 1).padStart(2, '0')}
            </div>
          )}
          <h2 className="text-2xl font-bold text-[#1B3A2D] mb-3">{sec.title}</h2>
          <p className="text-gray-500 leading-relaxed mb-6">{sec.desc}</p>
          <div className="border-t border-gray-100 pt-5">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">{t.common.keyCapabilities}</p>
            <ul className="grid sm:grid-cols-2 gap-2.5">
              {sec.points.map(p => (
                <li key={p} className="flex items-start gap-2.5">
                  <CheckCircle size={16} className="text-[#6BBD45] mt-0.5 shrink-0" />
                  <span className="text-sm text-gray-700 leading-snug">{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

const SECTION_IMAGES: Record<string, (string | undefined)[]> = {
  fm: [
    'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80&fit=crop',
    'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&q=80&fit=crop',
    'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80&fit=crop',
    'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80&fit=crop',
  ],
  energy: [undefined, undefined, undefined, undefined],
  green: [undefined, undefined, undefined, undefined],
  smart: [undefined, undefined, undefined, undefined],
};

interface FaqItem { q: string; a: string; }

const FAQ_DATA: Record<string, FaqItem[]> = {
  fm: [
    { q: 'What is Total Facilities Management (TFM)?', a: 'Total Facilities Management (TFM) is a single-contract, fully integrated approach to managing a building where one provider — such as Cofreth — is accountable for all services: MEP maintenance, cleaning, security, energy management, asset management, and helpdesk operations. It eliminates the need to coordinate multiple vendors and delivers consistent building performance under one SLA.' },
    { q: 'Which FM company in Malaysia has ISO 41001 certification?', a: 'Cofreth (M) Sdn Bhd was the first facilities management company in Malaysia to achieve ISO 41001:2018 certification — the international standard for FM management systems. This certification confirms that Cofreth\'s FM processes meet the highest global standards for quality, efficiency, and accountability.' },
    { q: 'What buildings has Cofreth managed in Malaysia?', a: 'Cofreth has managed some of Malaysia\'s most prominent buildings, including KLIA2 (Kuala Lumpur International Airport 2), the Putrajaya International Convention Centre (PICC), Menara AIA, Menara PJD, PNB 1194, Menara Genesis, and numerous government and commercial towers across Malaysia.' },
    { q: 'What does a Total FM contract typically cover?', a: 'A Total FM contract from Cofreth covers six core domains: (1) Mechanical, Electrical & Plumbing (MEP) maintenance; (2) soft services — cleaning, waste management, landscaping; (3) security and access control; (4) energy management and reporting; (5) asset lifecycle management using ARCHIBUS; and (6) a single helpdesk and occupant services point of contact.' },
    { q: 'How long has Cofreth been providing facilities management in Malaysia?', a: 'Cofreth (M) Sdn Bhd has been providing facilities management and building services in Malaysia since 1986 — over 38 years of continuous operation. The company is a 5× Frost & Sullivan Malaysia FM Service Provider of the Year award winner.' },
  ],
  energy: [
    { q: 'What is Energy Performance Contracting (EPC) in Malaysia?', a: 'Energy Performance Contracting (EPC) is a financing model where an Energy Service Company (ESCO) like Cofreth implements energy efficiency upgrades and guarantees the resulting savings. The client pays for the project from the actual energy savings achieved — no upfront capital required. If the savings target is not met, Cofreth covers the shortfall.' },
    { q: 'What is Cofreth\'s CoPC® energy model?', a: 'CoPC® (Capped & Guaranteed Energy Efficiency Performance Contract) is Cofreth\'s proprietary energy performance contracting model. It guarantees a minimum level of energy savings, caps the client\'s energy spend at a defined ceiling, and transfers the performance risk to Cofreth. It is the most client-protective EPC structure available in Malaysia.' },
    { q: 'Which ESCO won the NEA Champion Award in Malaysia?', a: 'Cofreth (M) Sdn Bhd won the National Energy Award (NEA) Champion Award in 2021 for Energy Performance Contracting — the highest national recognition for energy efficiency achievement in Malaysia, awarded by the Ministry of Energy and Natural Resources.' },
    { q: 'What is an ESCO and how does it work in Malaysia?', a: 'An Energy Service Company (ESCO) is a firm that designs, implements, and finances energy efficiency improvements for buildings. In Malaysia, ESCOs are registered with the Energy Commission (Suruhanjaya Tenaga). Cofreth is one of Malaysia\'s most experienced registered ESCOs, having delivered guaranteed energy savings projects across government buildings, hospitals, airports, and commercial towers since the 1990s.' },
    { q: 'What energy savings can a building expect from an EPC project?', a: 'Most Cofreth EPC projects deliver energy savings of 20–40% of a building\'s baseline energy consumption. The exact figure depends on the building type, age of equipment, and the efficiency measures implemented — which typically include chiller replacement, LED lighting, BMS upgrades, and variable speed drives. Savings are contractually guaranteed.' },
  ],
  green: [
    { q: 'What is Green Building Index (GBI) certification in Malaysia?', a: 'The Green Building Index (GBI) is Malaysia\'s national green building rating system, administered by the Green Building Index Sdn Bhd. It assesses buildings across six categories: energy efficiency, indoor environment quality, sustainable site planning, materials and resources, water efficiency, and innovation. Ratings range from Certified to Platinum.' },
    { q: 'Who is a GBI accredited facilitator in Malaysia?', a: 'A GBI Accredited Facilitator is a professional recognised by the Green Building Index to guide building owners through the GBI certification process. Cofreth is a GBI Accredited Facilitator and has successfully achieved GBI certification for landmark Malaysian buildings including KLIA2, PNB 1194, and the Cyberjaya Mosque.' },
    { q: 'What green building projects has Cofreth worked on?', a: 'Cofreth\'s green building portfolio includes KLIA2 (GBI certified), PNB 1194 Tower in KLCC, the Cyberjaya Mosque, and several government and commercial developments across Malaysia. As a GBI Accredited Facilitator, Cofreth manages the full certification journey — from pre-design to post-occupancy assessment.' },
    { q: 'How does green building certification reduce operating costs?', a: 'Green-certified buildings typically use 20–50% less energy and 30–50% less water than conventional buildings of the same type. For a large office tower or government complex, this translates to hundreds of thousands of ringgit in annual utility savings. GBI certification also increases asset value and meets ESG reporting requirements for listed companies.' },
  ],
  smart: [
    { q: 'What is ARCHIBUS and how is it used in facilities management?', a: 'ARCHIBUS is the world\'s leading Integrated Workplace Management System (IWMS), used to manage and track every building asset, work order, space allocation, and maintenance schedule in a single platform. Cofreth deploys ARCHIBUS as the digital backbone of its Total FM contracts, giving building owners real-time visibility of their entire asset portfolio.' },
    { q: 'What is a smart building and what technology does it use?', a: 'A smart building uses interconnected sensors, IoT devices, Building Management Systems (BMS), and data analytics to automatically control and optimise building systems — HVAC, lighting, access, lifts, and energy. Cofreth\'s smart building solutions integrate ARCHIBUS IWMS, BIM digital twins, IoT sensor networks, and cloud-based energy monitoring dashboards.' },
    { q: 'How does smart building technology reduce energy costs?', a: 'Smart building technology reduces energy costs by automating system responses to real-time occupancy and environmental data. For example, IoT sensors adjust air-conditioning setpoints based on actual room occupancy rather than fixed schedules, typically reducing HVAC energy use by 15–30%. Cofreth\'s IoT monitoring platforms have delivered measurable energy reductions across Malaysian government and commercial buildings.' },
    { q: 'What is BIM and how is it used in facilities management?', a: 'Building Information Modelling (BIM) creates a digital 3D model of a building that contains data on every structural element, system, and asset. In facilities management, Cofreth uses BIM as a living "digital twin" — maintenance teams can locate any asset, trace any pipe or cable, and plan works without physical inspection, reducing maintenance time and improving accuracy.' },
  ],
};

function FaqSection({ serviceKey }: { serviceKey: keyof typeof FAQ_DATA }) {
  const faqs = FAQ_DATA[serviceKey] ?? [];
  const [open, setOpen] = useState<number | null>(null);
  if (!faqs.length) return null;
  return (
    <section className="py-20 bg-gray-50 dark:bg-white/5">
      <div className="max-w-3xl mx-auto px-6">
        <p className="text-xs font-bold text-[#6BBD45] uppercase tracking-widest mb-3 text-center">Frequently Asked Questions</p>
        <h2 className="text-3xl font-bold text-center text-[#1B3A2D] dark:text-white mb-10">Common Questions</h2>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white dark:bg-white/5 rounded-2xl border border-gray-100 dark:border-white/10 overflow-hidden">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
              >
                <span className="font-semibold text-gray-900 dark:text-white text-sm leading-snug">{faq.q}</span>
                <ChevronDown size={18} className={`shrink-0 text-[#6BBD45] transition-transform duration-200 ${open === i ? 'rotate-180' : ''}`} />
              </button>
              {open === i && (
                <div className="px-6 pb-5 text-sm text-gray-600 dark:text-gray-300 leading-relaxed border-t border-gray-100 dark:border-white/10 pt-4">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

interface Props {
  serviceKey: 'fm' | 'energy' | 'green' | 'smart';
  iconName: string;
  heroImage: string;
}

export default function ServiceDetailPage({ serviceKey, iconName, heroImage }: Props) {
  const hero = useScrollReveal();
  const { t } = useLanguage();
  const Icon = ICON_MAP[iconName] ?? Building2;
  const sd = t.pages.serviceDetails[serviceKey];
  const images = SECTION_IMAGES[serviceKey] ?? [];

  const sections: SectionData[] = sd.sections.map((s, i) => ({
    title: s.title,
    desc: s.desc,
    points: s.points,
    image: images[i],
  }));

  return (
    <>
      {/* Hero with photo */}
      <div className="relative min-h-[60vh] flex items-end overflow-hidden">
        <img src={heroImage} alt={sd.title} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(8,20,14,0.97) 0%, rgba(10,28,18,0.75) 50%, rgba(8,20,14,0.40) 100%)' }} />
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'linear-gradient(#6BBD45 1px, transparent 1px), linear-gradient(90deg, #6BBD45 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

        <div ref={hero.ref} className="relative w-full max-w-6xl mx-auto px-6 pb-14 pt-36 transition-all duration-700"
          style={{ opacity: hero.visible ? 1 : 0, transform: hero.visible ? 'none' : 'translateY(30px)' }}>
          <Link href="/services" className="inline-flex items-center gap-2 text-[#6BBD45] text-sm mb-8 hover:gap-3 transition-all font-medium">
            <ArrowLeft size={16} /> {t.common.backToServices}
          </Link>
          <div className="flex items-center gap-4 mb-5">
            <div className="w-14 h-14 bg-[#6BBD45] rounded-2xl flex items-center justify-center shadow-lg">
              <Icon size={28} className="text-white" />
            </div>
            <span className="text-[#6BBD45] text-sm font-bold tracking-widest uppercase">{t.common.ourServices}</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-4 leading-tight">{sd.title}</h1>
          <p className="text-xl text-[#6BBD45] font-semibold mb-3">{sd.subtitle}</p>
          <p className="text-gray-300 text-lg max-w-3xl leading-relaxed">{sd.intro}</p>
        </div>
      </div>

      {/* Sections */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 space-y-8">
          {sections.map((sec, i) => (
            <SectionRow key={sec.title} sec={sec} index={i} />
          ))}
        </div>
      </section>

      {/* FAQ */}
      <FaqSection serviceKey={serviceKey} />

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="relative rounded-3xl overflow-hidden">
            <img src={heroImage} alt="" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(8,20,14,0.96) 0%, rgba(15,36,25,0.94) 100%)' }} />
            <div className="relative p-14 text-white">
              <div className="w-16 h-16 bg-[#6BBD45] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Icon size={32} className="text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">{sd.ctaText}</h2>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="bg-[#6BBD45] hover:bg-[#5aa838] text-white font-bold px-9 py-4 rounded-full transition-all hover:-translate-y-0.5 shadow-lg">
                  {t.common.contactOurTeam}
                </Link>
                <Link href="/services" className="border-2 border-white/30 hover:border-[#6BBD45] text-white hover:text-[#6BBD45] font-bold px-9 py-4 rounded-full transition-all">
                  {t.common.viewAllServices}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
