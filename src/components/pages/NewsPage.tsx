'use client';
import Link from 'next/link';
import { Calendar, MapPin, ArrowRight, Award, Zap, Building2, Users } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useState } from 'react';

const categories = ['All', 'Awards', 'Energy', 'Projects', 'Events'];

const news = [
  {
    id: 1,
    category: 'Awards',
    icon: Award,
    date: '01 August 2022',
    location: 'Malaysia',
    title: 'NEA 2021 Energy Performance Contracting Champion',
    excerpt: 'Cofreth was bestowed the honour of being awarded Champion for the NEA 2021 Energy Performance Contracting (EPC) special award category — the nation\'s highest recognition of energy efficiency achievement.',
    body: 'Cofreth was bestowed the honour of being awarded Champion for the NEA 2021 Energy Performance Contracting (EPC) special award category. This prestigious recognition was awarded jointly with Besi Apac as facility owner, recognising Cofreth\'s guaranteed energy savings delivery through our CoPC (Cofreth Performance Contracting) model. This award affirms our leadership as a registered ESCO delivering science-backed, result-guaranteed energy solutions.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80&fit=crop',
    featured: true,
  },
  {
    id: 2,
    category: 'Awards',
    icon: Award,
    date: '29 November 2018',
    location: 'Malaysia',
    title: 'SME ICON Recognition — Managing Director Ir. Ong Ching Loon',
    excerpt: 'Cofreth\'s Managing Director Ir. Ong Ching Loon was nominated for the prestigious SME ICON award by the Malaysian Service Providers Confederation, recognising his individual contribution to the industry.',
    body: 'The SME ICON recognition celebrates outstanding Malaysian entrepreneurs who have demonstrated exemplary leadership and innovation in their industries. Ir. Ong Ching Loon\'s nomination by the Malaysian Service Providers Confederation is a testament to his decades of leadership in shaping Malaysia\'s facilities management and energy services landscape.',
    image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&q=80&fit=crop',
    featured: false,
  },
  {
    id: 3,
    category: 'Awards',
    icon: Zap,
    date: '25 October 2018',
    location: 'Singapore',
    title: 'Cofreth Bags ASEAN Energy Award',
    excerpt: 'Cofreth achieved recognition at the ASEAN Energy Awards — the region\'s highest accolade for excellence in energy efficiency, renewable energy and energy management — presented in Singapore.',
    body: 'The ASEAN Energy Awards, launched in 2000 by the ASEAN Centre for Energy, is the region\'s highest recognition of efforts in energy efficiency, renewable energy and energy management. Cofreth\'s recognition at this prestigious platform affirms our standing as a regional leader in sustainable energy solutions, having competed against the best organisations across Southeast Asia.',
    image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=800&q=80&fit=crop',
    featured: false,
  },
  {
    id: 4,
    category: 'Awards',
    icon: Award,
    date: '19 October 2018',
    location: 'Malaysia',
    title: 'Cofreth Wins National Energy & Green Technology Award',
    excerpt: 'Cofreth received recognition at the inaugural National Energy & Green Technology Award, organised by MESTECC, celebrating Malaysia\'s leaders in sustainable energy contributions.',
    body: 'Malaysia\'s Ministry of Energy, Science, Technology, Environment and Climate Change (MESTECC) organised the inaugural National Energy & Green Technology Award to recognise organisations making outstanding contributions to sustainable energy in Malaysia. Cofreth\'s win underscores our commitment to delivering real, measurable environmental and energy outcomes for clients across all sectors.',
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80&fit=crop',
    featured: false,
  },
  {
    id: 5,
    category: 'Projects',
    icon: Building2,
    date: '26 June 2018',
    location: 'Iskandar Puteri, Johor',
    title: 'Medini 9 — FM Services Commencement, Iskandar Puteri',
    excerpt: 'Cofreth commenced full Facilities Management services at Medini 9, a landmark development in Iskandar Puteri, Johor — expanding our presence in Malaysia\'s fastest-growing southern development corridor.',
    body: 'Medini 9 in Iskandar Puteri, Johor, represents one of Malaysia\'s most ambitious mixed-use developments. Cofreth\'s appointment as FM service provider for this flagship project underscores our capability to manage complex, large-scale developments in high-growth corridors outside the Klang Valley. Our Total FM approach covers all hard and soft services across the development.',
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80&fit=crop',
    featured: false,
  },
  {
    id: 6,
    category: 'Events',
    icon: Zap,
    date: '15 August 2017',
    location: 'Malaysia',
    title: 'Smart Facilities Management — The Future of FM',
    excerpt: 'Cofreth hosted a knowledge-sharing forum on Smart Facilities Management, showcasing our ARCHIBUS-powered TIFM platform, BIM capabilities and cloud-based energy monitoring solutions to industry partners.',
    body: 'As facilities management evolves through digital transformation, Cofreth led the conversation on Smart FM in Malaysia. This industry forum brought together FM professionals, property developers and technology partners to explore how ARCHIBUS, BIM, IoT sensors and cloud analytics are reshaping how buildings are managed — smarter, faster, and with greater accountability.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80&fit=crop',
    featured: false,
  },
  {
    id: 7,
    category: 'Events',
    icon: Users,
    date: '21 April 2017',
    location: 'Malaysia',
    title: 'Cofreth Annual Company Dinner 2017',
    excerpt: 'Cofreth celebrated another year of excellence with our Annual Company Dinner, recognising outstanding staff contributions and reinforcing our culture of teamwork, innovation and dedication.',
    body: 'Our Annual Company Dinner brings the entire Cofreth family together to celebrate achievements, recognise individual and team contributions, and reinforce our shared values. The 2017 dinner was a special occasion marking continued growth and the deepening partnerships that define our approach to Total Facilities Management.',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80&fit=crop',
    featured: false,
  },
];

function FeaturedCard({ item }: { item: typeof news[0] }) {
  const [expanded, setExpanded] = useState(false);
  const reveal = useScrollReveal();
  return (
    <div ref={reveal.ref} className="transition-all duration-700" style={{ opacity: reveal.visible ? 1 : 0, transform: reveal.visible ? 'none' : 'translateY(30px)' }}>
      <div className="grid lg:grid-cols-2 rounded-3xl overflow-hidden shadow-xl border border-gray-100 group">
        <div className="relative h-72 lg:h-auto overflow-hidden">
          <img src={item.image} alt={item.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(8,20,14,0.7) 0%, transparent 60%)' }} />
          <span className="absolute top-5 left-5 bg-[#6BBD45] text-white text-xs font-bold px-3 py-1.5 rounded-full tracking-widest uppercase">{item.category}</span>
        </div>
        <div className="bg-white p-8 lg:p-10 flex flex-col justify-center">
          <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
            <span className="flex items-center gap-1.5"><Calendar size={14} /> {item.date}</span>
            <span className="flex items-center gap-1.5"><MapPin size={14} /> {item.location}</span>
          </div>
          <h2 className="text-2xl font-bold text-[#1B3A2D] mb-4 leading-snug">{item.title}</h2>
          <p className="text-gray-500 leading-relaxed mb-6">{expanded ? item.body : item.excerpt}</p>
          <button
            onClick={() => setExpanded(e => !e)}
            className="inline-flex items-center gap-2 text-[#6BBD45] font-semibold text-sm hover:gap-3 transition-all"
          >
            {expanded ? 'Show less' : 'Read more'} <ArrowRight size={15} className={`transition-transform ${expanded ? 'rotate-90' : ''}`} />
          </button>
        </div>
      </div>
    </div>
  );
}

function NewsCard({ item, index }: { item: typeof news[0]; index: number }) {
  const [expanded, setExpanded] = useState(false);
  const reveal = useScrollReveal(0.1);
  return (
    <div ref={reveal.ref} className="transition-all duration-700"
      style={{ opacity: reveal.visible ? 1 : 0, transform: reveal.visible ? 'none' : 'translateY(40px)', transitionDelay: `${index * 70}ms` }}>
      <div className="group bg-white border border-gray-100 hover:border-[#6BBD45]/30 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-400 hover:-translate-y-1.5 flex flex-col h-full">
        <div className="relative h-48 overflow-hidden">
          <img src={item.image} alt={item.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <span className="absolute top-4 left-4 bg-[#6BBD45] text-white text-xs font-bold px-3 py-1 rounded-full tracking-wider uppercase">{item.category}</span>
        </div>
        <div className="p-6 flex flex-col flex-1">
          <div className="flex items-center gap-3 text-xs text-gray-400 mb-3">
            <span className="flex items-center gap-1"><Calendar size={12} /> {item.date}</span>
            <span className="flex items-center gap-1"><MapPin size={12} /> {item.location}</span>
          </div>
          <h3 className="font-bold text-[#1B3A2D] mb-3 leading-snug group-hover:text-[#6BBD45] transition-colors">{item.title}</h3>
          <p className="text-gray-500 text-sm leading-relaxed flex-1">{expanded ? item.body : item.excerpt}</p>
          <button
            onClick={() => setExpanded(e => !e)}
            className="mt-4 inline-flex items-center gap-1.5 text-[#6BBD45] font-semibold text-sm hover:gap-2.5 transition-all"
          >
            {expanded ? 'Show less' : 'Read more'} <ArrowRight size={13} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default function NewsPage() {
  const hero = useScrollReveal();
  const [activeCategory, setActiveCategory] = useState('All');

  const featured = news.find(n => n.featured)!;
  const filtered = news.filter(n => !n.featured && (activeCategory === 'All' || n.category === activeCategory));

  return (
    <>
      {/* Hero */}
      <div className="pt-24 md:pt-32 pb-12 md:pb-20 text-white relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0a1208 0%, #0F2419 50%, #0a1208 100%)' }}>
        <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: 'linear-gradient(#6BBD45 1px, transparent 1px), linear-gradient(90deg, #6BBD45 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        {/* Glowing orbs */}
        <div className="absolute top-10 right-1/4 w-80 h-80 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(107,189,69,0.12) 0%, transparent 70%)' }} />
        <div className="absolute bottom-0 left-1/3 w-64 h-64 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(107,189,69,0.08) 0%, transparent 70%)' }} />

        <div ref={hero.ref} className="max-w-5xl mx-auto px-6 text-center transition-all duration-700"
          style={{ opacity: hero.visible ? 1 : 0, transform: hero.visible ? 'none' : 'translateY(30px)' }}>
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="w-10 h-px bg-[#6BBD45]" />
            <span className="text-[#6BBD45] text-sm font-bold tracking-widest uppercase">News & Events</span>
            <div className="w-10 h-px bg-[#6BBD45]" />
          </div>
          <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
            Awards, Milestones &<br /><span className="text-[#6BBD45]">Industry Recognition</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
            Over 38 years, Cofreth has earned recognition from Malaysia's and ASEAN's most prestigious bodies — from national energy awards to Frost & Sullivan excellence recognitions.
          </p>
        </div>
      </div>

      {/* Featured article */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-8">
            <span className="w-1 h-6 bg-[#6BBD45] rounded-full" />
            <h2 className="text-lg font-bold text-[#1B3A2D]">Featured Story</h2>
          </div>
          <FeaturedCard item={featured} />
        </div>
      </section>

      {/* Category filter + grid */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between flex-wrap gap-4 mb-10">
            <div className="flex items-center gap-3">
              <span className="w-1 h-6 bg-[#6BBD45] rounded-full" />
              <h2 className="text-lg font-bold text-[#1B3A2D]">All News & Events</h2>
            </div>
            <div className="flex gap-2 flex-wrap">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className="px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200"
                  style={{
                    background: activeCategory === cat ? '#6BBD45' : '#f3f4f6',
                    color: activeCategory === cat ? '#fff' : '#6b7280',
                    transform: activeCategory === cat ? 'scale(1.05)' : 'none',
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((item, i) => <NewsCard key={item.id} item={item} index={i} />)}
          </div>
        </div>
      </section>

      {/* Awards timeline strip */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-10">
            <span className="w-1 h-6 bg-[#6BBD45] rounded-full" />
            <h2 className="text-lg font-bold text-[#1B3A2D]">Frost & Sullivan Malaysia Excellence Award</h2>
          </div>
          <div className="grid sm:grid-cols-5 gap-4">
            {['2007', '2010', '2015', '2016', '2017'].map((yr, i) => (
              <div key={yr} className="group bg-white border border-gray-100 hover:border-[#6BBD45] rounded-2xl p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg cursor-default">
                <div className="text-3xl font-black text-[#6BBD45] mb-1">{yr}</div>
                <div className="text-xs text-gray-400 font-medium">Malaysia Excellence Award #{i + 1}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
