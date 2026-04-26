'use client';
import Link from 'next/link';
import { ArrowRight, MapPin, Clock, ChevronDown, ChevronUp, Briefcase, Users, TrendingUp, Heart, Shield, Zap } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useState } from 'react';

const openings = [
  {
    id: 1,
    title: 'Facility Manager',
    department: 'Facilities Management',
    location: 'Kuala Lumpur',
    type: 'Full-time',
    level: 'Senior',
    color: '#6BBD45',
    desc: 'Lead end-to-end FM operations for a high-profile commercial or institutional portfolio. You will oversee multi-disciplinary teams, manage client relationships, ensure regulatory compliance and drive continuous improvement across all facility services.',
    responsibilities: [
      'Manage day-to-day FM operations across assigned properties',
      'Lead and develop a team of technicians and supervisors',
      'Maintain client relationships and attend regular review meetings',
      'Oversee PPM (Planned Preventive Maintenance) scheduling and execution',
      'Monitor SLAs, KPIs and produce monthly performance reports',
      'Manage FM budget, procurement and vendor management',
      'Ensure compliance with OSH, fire, and statutory regulations',
    ],
    requirements: [
      'Degree in Facilities Management, Engineering or related field',
      'Minimum 7 years in FM with at least 3 years in a managerial role',
      'Experience managing Grade A commercial or government buildings',
      'Strong knowledge of MEP systems, soft services and statutory compliance',
      'Excellent communication and stakeholder management skills',
      'Relevant certifications (e.g. CFM, BIFM) an advantage',
    ],
  },
  {
    id: 2,
    title: 'Mechanical & Electrical (M&E) Engineer',
    department: 'Engineering & Technical',
    location: 'Kuala Lumpur / Selangor',
    type: 'Full-time',
    level: 'Mid-level',
    color: '#3b82f6',
    desc: 'Join our technical team to execute, maintain and troubleshoot complex MEP systems across our managed portfolio. You will work closely with the FM team to ensure all mechanical and electrical systems operate at peak performance.',
    responsibilities: [
      'Carry out planned and corrective maintenance on M&E systems',
      'Troubleshoot HVAC, electrical, plumbing and fire protection systems',
      'Prepare and review technical reports and maintenance logs',
      'Coordinate with contractors and vendors for major works',
      'Support energy efficiency initiatives and system optimisation',
      'Ensure all works comply with Suruhanjaya Tenaga and BOMBA requirements',
    ],
    requirements: [
      'Degree or Diploma in Mechanical or Electrical Engineering',
      'Minimum 3–5 years hands-on M&E experience in building services',
      'Knowledge of HVAC, LV/HV systems, BAS and fire systems',
      'Possess valid Chargeman or Electrical Wireman license is an advantage',
      'Able to work independently and manage urgent call-outs',
    ],
  },
  {
    id: 3,
    title: 'Energy Auditor / ESCO Engineer',
    department: 'Energy Services',
    location: 'Kuala Lumpur',
    type: 'Full-time',
    level: 'Mid-level',
    color: '#f59e0b',
    desc: 'Be part of Cofreth\'s ESCO (Energy Services Company) team delivering energy audits, conservation programmes and guaranteed savings projects for major clients across Malaysia. Play a direct role in Malaysia\'s sustainability journey.',
    responsibilities: [
      'Conduct Level 1, 2 and 3 energy audits on commercial and industrial facilities',
      'Analyse energy consumption data and identify ECMs (Energy Conservation Measures)',
      'Prepare detailed energy audit reports with investment-grade analysis',
      'Design and implement CEEP© energy conservation programmes',
      'Monitor and verify energy savings post-implementation (M&V)',
      'Support clients in achieving ISO 50001 and GBI certification',
      'Present findings and recommendations to clients and senior management',
    ],
    requirements: [
      'Degree in Electrical, Mechanical or Energy Engineering',
      'Minimum 3 years experience in energy auditing or ESCO projects',
      'Certified Energy Manager (CEM) or equivalent preferred',
      'Proficient in energy modelling tools and data analysis',
      'Strong report writing and presentation skills',
      'Knowledge of ASHRAE standards and Malaysian energy regulations',
    ],
  },
  {
    id: 4,
    title: 'Building Technician (Electrical)',
    department: 'Engineering & Technical',
    location: 'Cyberjaya / Putrajaya',
    type: 'Full-time',
    level: 'Entry–Mid',
    color: '#8b5cf6',
    desc: 'Hands-on role maintaining and servicing electrical systems across our managed buildings. You will be part of a skilled technical team ensuring all electrical equipment operates safely and reliably around the clock.',
    responsibilities: [
      'Carry out routine maintenance and inspections on electrical systems',
      'Respond promptly to breakdown and emergency call-outs',
      'Maintain accurate maintenance records and logbooks',
      'Assist engineers in major maintenance tasks and projects',
      'Ensure all works comply with safety procedures and OSH standards',
    ],
    requirements: [
      'Certificate or Diploma in Electrical Engineering or equivalent',
      'Minimum 2 years working experience in building maintenance',
      'Possess valid Electrical Wireman (A4) licence or above',
      'Willing to work on rotating shifts and standby duties',
      'Good attitude, diligent and safety-conscious',
    ],
  },
  {
    id: 5,
    title: 'Project Manager — FM & Engineering',
    department: 'Project Management',
    location: 'Kuala Lumpur',
    type: 'Full-time',
    level: 'Senior',
    color: '#ef4444',
    desc: 'Lead the delivery of FM, engineering and ESCO projects from inception to handover. You will coordinate multi-disciplinary teams, manage stakeholders and ensure projects are delivered on time, within budget and to the highest standard.',
    responsibilities: [
      'Manage end-to-end project lifecycle for FM and M&E projects',
      'Develop project plans, schedules, budgets and resource plans',
      'Lead and coordinate internal teams and sub-contractors',
      'Monitor project progress and report to senior management',
      'Manage project risk, change orders and claims',
      'Ensure quality assurance and compliance throughout project delivery',
      'Conduct project close-out and lessons-learned reviews',
    ],
    requirements: [
      'Degree in Engineering, Construction Management or related field',
      'Minimum 8 years of project management experience in FM or M&E',
      'PMP or Prince2 certification strongly preferred',
      'Proven track record managing multi-million RM projects',
      'Strong leadership, communication and negotiation skills',
      'Experience with government and GLC projects an advantage',
    ],
  },
  {
    id: 6,
    title: 'Business Development Executive',
    department: 'Sales & Business Development',
    location: 'Kuala Lumpur',
    type: 'Full-time',
    level: 'Mid-level',
    color: '#06b6d4',
    desc: 'Drive Cofreth\'s growth by identifying new business opportunities, developing client relationships and winning new contracts across FM, Energy Services and Green Building sectors. A key commercial role with significant earning potential.',
    responsibilities: [
      'Prospect and develop new client relationships in target sectors',
      'Prepare and present compelling proposals and tender submissions',
      'Develop in-depth knowledge of Cofreth\'s full service portfolio',
      'Attend industry events, exhibitions and networking forums',
      'Collaborate with technical teams to develop competitive bids',
      'Manage sales pipeline and report regularly to management',
      'Negotiate and close contracts in line with company targets',
    ],
    requirements: [
      'Degree in Business, Engineering, Property or related field',
      'Minimum 4 years B2B sales experience, preferably in FM or real estate',
      'Established network in property, government or corporate sectors',
      'Excellent communication, proposal writing and presentation skills',
      'Self-motivated, results-driven and able to work independently',
      'Fluent in English and Bahasa Malaysia; Mandarin an advantage',
    ],
  },
];

const perks = [
  { icon: TrendingUp, title: 'Career Growth',       desc: 'Structured career pathways with mentoring, training and promotion opportunities across all levels.' },
  { icon: Shield,     title: 'Comprehensive Benefits', desc: 'Competitive salary, medical coverage, performance bonuses and annual increment reviews.' },
  { icon: Heart,      title: 'Work-Life Balance',   desc: 'Supportive work environment with respect for personal time and flexible working where possible.' },
  { icon: Zap,        title: 'Meaningful Work',     desc: 'Contribute directly to Malaysia\'s sustainability journey through energy and green building programmes.' },
  { icon: Users,      title: 'Great Team Culture',  desc: '38+ years of camaraderie — a professional yet close-knit team that celebrates wins together.' },
  { icon: Briefcase,  title: 'Diverse Experience',  desc: 'Work across airports, data centres, convention centres, universities and landmark buildings.' },
];

function JobCard({ job, i }: { job: typeof openings[0]; i: number }) {
  const [expanded, setExpanded] = useState(false);
  const reveal = useScrollReveal(0.05);

  return (
    <div ref={reveal.ref} className="transition-all duration-700"
      style={{ opacity: reveal.visible ? 1 : 0, transform: reveal.visible ? 'none' : 'translateY(30px)', transitionDelay: `${i * 60}ms` }}>
      <div className="bg-white border border-gray-100 rounded-3xl overflow-hidden hover:shadow-xl transition-all duration-400 hover:border-[#6BBD45]/30">
        {/* Header */}
        <div className="p-6 md:p-8">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div className="flex-1">
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="text-xs font-bold px-3 py-1 rounded-full"
                  style={{ background: job.color + '18', color: job.color }}>
                  {job.department}
                </span>
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-gray-100 text-gray-600">
                  {job.level}
                </span>
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-gray-100 text-gray-600">
                  {job.type}
                </span>
              </div>
              <h3 className="text-lg md:text-xl font-black text-[#1B3A2D] mb-2">{job.title}</h3>
              <div className="flex items-center gap-4 text-sm text-gray-400">
                <span className="flex items-center gap-1.5"><MapPin size={13} />{job.location}</span>
                <span className="flex items-center gap-1.5"><Clock size={13} />{job.type}</span>
              </div>
            </div>
            <button
              onClick={() => setExpanded(!expanded)}
              className="flex items-center gap-2 text-sm font-bold px-5 py-2.5 rounded-full border-2 transition-all duration-200 shrink-0"
              style={{
                borderColor: expanded ? job.color : '#e5e7eb',
                color: expanded ? job.color : '#6b7280',
                background: expanded ? job.color + '10' : 'transparent',
              }}>
              {expanded ? 'Show Less' : 'View Details'}
              {expanded ? <ChevronUp size={15} /> : <ChevronDown size={15} />}
            </button>
          </div>

          <p className="text-gray-500 text-sm leading-relaxed mt-4">{job.desc}</p>
        </div>

        {/* Expanded content */}
        {expanded && (
          <div className="border-t border-gray-100 px-6 md:px-8 py-6 bg-gray-50">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Responsibilities */}
              <div>
                <h4 className="text-sm font-black text-[#1B3A2D] uppercase tracking-widest mb-4">Key Responsibilities</h4>
                <ul className="space-y-2.5">
                  {job.responsibilities.map((r, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                        style={{ background: job.color + '20' }}>
                        <div className="w-1.5 h-1.5 rounded-full" style={{ background: job.color }} />
                      </div>
                      <span className="text-sm text-gray-600 leading-snug">{r}</span>
                    </li>
                  ))}
                </ul>
              </div>
              {/* Requirements */}
              <div>
                <h4 className="text-sm font-black text-[#1B3A2D] uppercase tracking-widest mb-4">Requirements</h4>
                <ul className="space-y-2.5">
                  {job.requirements.map((r, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                        style={{ background: job.color + '20' }}>
                        <div className="w-1.5 h-1.5 rounded-full" style={{ background: job.color }} />
                      </div>
                      <span className="text-sm text-gray-600 leading-snug">{r}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {/* Apply CTA */}
            <div className="mt-8 pt-6 border-t border-gray-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <p className="text-sm text-gray-500">
                Send your CV to <a href="mailto:careers@cofreth.com.my" className="font-semibold" style={{ color: job.color }}>careers@cofreth.com.my</a> with the position title as the subject.
              </p>
              <a href={`mailto:careers@cofreth.com.my?subject=Application: ${encodeURIComponent(job.title)}`}
                className="inline-flex items-center gap-2 text-white font-bold px-6 py-3 rounded-full transition-all hover:-translate-y-0.5 shrink-0 text-sm"
                style={{ background: job.color }}>
                Apply Now <ArrowRight size={15} />
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

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

export default function CareersPage() {
  const hero = useScrollReveal();
  const [activeFilter, setActiveFilter] = useState('All');

  const departments = ['All', ...Array.from(new Set(openings.map(j => j.department)))];
  const filtered = activeFilter === 'All' ? openings : openings.filter(j => j.department === activeFilter);

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
            {[['38+', 'Years of Growth'], ['6', 'Open Positions'], ['5×', 'Award Winning'], ['ISO', '5 Certifications']].map(([v, l]) => (
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

      {/* ── Open Positions ── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-0.5 bg-[#6BBD45]" />
              <span className="text-[#6BBD45] text-sm font-semibold tracking-widest uppercase">Current Openings</span>
              <div className="w-8 h-0.5 bg-[#6BBD45]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-[#1B3A2D] mb-8">Open Positions</h2>

            {/* Filter tabs */}
            <div className="flex flex-wrap justify-center gap-2">
              {departments.map(d => (
                <button key={d} onClick={() => setActiveFilter(d)}
                  className="px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200"
                  style={{
                    background: activeFilter === d ? '#6BBD45' : '#f3f4f6',
                    color: activeFilter === d ? '#fff' : '#6b7280',
                  }}>
                  {d}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            {filtered.map((job, i) => <JobCard key={job.id} job={job} i={i} />)}
          </div>
        </div>
      </section>

      {/* ── Spontaneous Application ── */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-gradient-to-br from-[#0F2419] to-[#1B3A2D] rounded-3xl p-10 md:p-14 text-white text-center border border-[#6BBD45]/20">
            <div className="w-14 h-14 bg-[#6BBD45]/15 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Briefcase size={28} className="text-[#6BBD45]" />
            </div>
            <h2 className="text-2xl md:text-3xl font-black mb-4">Don't See Your Role?</h2>
            <p className="text-gray-300 max-w-xl mx-auto mb-8 leading-relaxed text-sm">
              We're always on the lookout for talented professionals. Send us a spontaneous application and we'll keep your profile on file for future opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:careers@cofreth.com.my?subject=Spontaneous Application"
                className="inline-flex items-center justify-center gap-2 bg-[#6BBD45] hover:bg-[#5aa838] text-white font-bold px-10 py-4 rounded-full transition-all hover:-translate-y-0.5">
                Send Spontaneous CV <ArrowRight size={18} />
              </a>
              <Link href="/contact"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/25 text-white hover:border-[#6BBD45] hover:text-[#6BBD45] font-bold px-10 py-4 rounded-full transition-all hover:-translate-y-0.5">
                Contact HR Team
              </Link>
            </div>
            <p className="text-gray-500 text-xs mt-6">careers@cofreth.com.my · Cofreth (M) Sdn Bhd, Kuala Lumpur</p>
          </div>
        </div>
      </section>
    </>
  );
}
