'use client';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, MapPin, ArrowRight } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useState } from 'react';
import news, { type NewsArticle } from '@/data/news';

const categories = ['All', 'Awards', 'Energy', 'Projects', 'Events'];

function FeaturedCard({ item }: { item: NewsArticle }) {
  const reveal = useScrollReveal();
  return (
    <div ref={reveal.ref} className="transition-all duration-700" style={{ opacity: reveal.visible ? 1 : 0, transform: reveal.visible ? 'none' : 'translateY(30px)' }}>
      <Link href={`/news/${item.slug}`} className="grid lg:grid-cols-2 rounded-3xl overflow-hidden shadow-xl border border-gray-100 group block hover:shadow-2xl transition-shadow duration-300">
        <div className="relative h-72 lg:h-auto overflow-hidden">
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(8,20,14,0.7) 0%, transparent 60%)' }} />
          <span className="absolute top-5 left-5 bg-[#6BBD45] text-white font-bold px-3 py-1.5 rounded-full tracking-widest uppercase" style={{ fontSize: '12px' }}>{item.category}</span>
        </div>
        <div className="bg-white p-8 lg:p-10 flex flex-col justify-center">
          <div className="flex items-center gap-4 text-gray-400 mb-4" style={{ fontSize: '13px' }}>
            <span className="flex items-center gap-1.5"><Calendar size={14} /> {item.date}</span>
            <span className="flex items-center gap-1.5"><MapPin size={14} /> {item.location}</span>
          </div>
          <h2 className="font-bold text-[#1B3A2D] mb-4 leading-snug group-hover:text-[#6BBD45] transition-colors" style={{ fontSize: '22px' }}>{item.title}</h2>
          <p className="text-gray-500 leading-relaxed mb-6" style={{ fontSize: '15px' }}>{item.excerpt}</p>
          <span className="inline-flex items-center gap-2 text-[#6BBD45] font-semibold group-hover:gap-3 transition-all" style={{ fontSize: '14px' }}>
            Read full article <ArrowRight size={15} />
          </span>
        </div>
      </Link>
    </div>
  );
}

function NewsCard({ item, index }: { item: NewsArticle; index: number }) {
  const reveal = useScrollReveal(0.1);
  return (
    <div ref={reveal.ref} className="transition-all duration-700"
      style={{ opacity: reveal.visible ? 1 : 0, transform: reveal.visible ? 'none' : 'translateY(40px)', transitionDelay: `${index * 70}ms` }}>
      <Link href={`/news/${item.slug}`}
        className="group bg-white border border-gray-100 hover:border-[#6BBD45]/30 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col h-full block">
        <div className="relative h-48 overflow-hidden">
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <span className="absolute top-4 left-4 bg-[#6BBD45] text-white font-bold px-3 py-1 rounded-full tracking-wider uppercase" style={{ fontSize: '11px' }}>{item.category}</span>
        </div>
        <div className="p-6 flex flex-col flex-1">
          <div className="flex items-center gap-3 text-gray-400 mb-3" style={{ fontSize: '12px' }}>
            <span className="flex items-center gap-1"><Calendar size={12} /> {item.date}</span>
            <span className="flex items-center gap-1"><MapPin size={12} /> {item.location}</span>
          </div>
          <h3 className="font-bold text-[#1B3A2D] mb-3 leading-snug group-hover:text-[#6BBD45] transition-colors flex-1" style={{ fontSize: '15px' }}>{item.title}</h3>
          <p className="text-gray-500 leading-relaxed mb-4 line-clamp-2" style={{ fontSize: '13px' }}>{item.excerpt}</p>
          <span className="inline-flex items-center gap-1.5 text-[#6BBD45] font-semibold group-hover:gap-2.5 transition-all" style={{ fontSize: '13px' }}>
            Read more <ArrowRight size={13} />
          </span>
        </div>
      </Link>
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
      {/* Hero — background photo */}
      <div className="relative overflow-hidden border-b border-white/10 pt-24 md:pt-32">
        {/* Background image */}
        <div className="absolute inset-0">
          <div className="absolute inset-0" style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1920&q=90)',
            backgroundSize: 'cover', backgroundPosition: 'center',
          }} />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(10,24,16,0.88) 0%, rgba(10,24,16,0.65) 55%, rgba(10,24,16,0.72) 100%)' }} />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(10,24,16,0.75) 0%, transparent 55%)' }} />
          <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#6BBD45 1px, transparent 1px)', backgroundSize: '28px 28px', opacity: 0.04 }} />
        </div>
        {/* Green left accent bar */}
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#6BBD45]" style={{ zIndex: 10 }} />

        <div ref={hero.ref} className="relative max-w-6xl mx-auto px-6 md:px-12 transition-all duration-700"
          style={{ opacity: hero.visible ? 1 : 0, transform: hero.visible ? 'none' : 'translateY(24px)', zIndex: 5 }}>

          {/* Eyebrow */}
          <div className="flex items-center gap-2 mb-5">
            <span className="bg-[#6BBD45]/20 border border-[#6BBD45]/40 text-[#6BBD45] font-bold px-3 py-1 rounded-full uppercase tracking-widest" style={{ fontSize: '11px' }}>
              News &amp; Events
            </span>
            <span className="text-white/30" style={{ fontSize: '11px' }}>·</span>
            <span className="text-white/55 font-medium" style={{ fontSize: '12px' }}>Est. 1986 · Malaysia's FM Pioneer</span>
          </div>

          {/* Main heading */}
          <h1 className="font-black text-white leading-none mb-5"
            style={{ fontSize: 'clamp(2.6rem, 6vw, 4.5rem)', letterSpacing: '-0.02em' }}>
            Latest<br />
            <span className="text-[#6BBD45]">News</span> &amp;<br />
            Updates
          </h1>

          <p className="text-white/70 max-w-xl leading-relaxed mb-10" style={{ fontSize: '16px' }}>
            Stay updated with Cofreth's latest achievements, industry insights, project milestones and corporate announcements from Malaysia's leading FM and energy services company.
          </p>

          {/* Stats strip */}
          <div className="flex flex-wrap gap-0 border-t border-white/15">
            {[
              { num: '38+', label: 'Years in Business' },
              { num: '5×',  label: 'Frost & Sullivan' },
              { num: 'NEA', label: 'Award Winner' },
              { num: '5',   label: 'ISO Certifications' },
            ].map((s) => (
              <div key={s.label} className="flex-1 min-w-[110px] py-5 px-4 border-r border-white/15 last:border-r-0 text-center">
                <div className="font-black text-white mb-0.5" style={{ fontSize: '22px' }}>{s.num}</div>
                <div className="text-white/50 font-medium" style={{ fontSize: '12px' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Featured article */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-8">
            <span className="w-1 h-6 bg-[#6BBD45] rounded-full" />
            <h2 className="font-bold text-[#1B3A2D]" style={{ fontSize: '18px' }}>Featured Story</h2>
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
              <h2 className="font-bold text-[#1B3A2D]" style={{ fontSize: '18px' }}>All News & Events</h2>
            </div>
            <div className="flex gap-2 flex-wrap">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className="px-4 py-2 rounded-full font-semibold transition-all duration-200"
                  style={{
                    fontSize: '13px',
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
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-10">
            <span className="w-1 h-6 bg-[#6BBD45] rounded-full" />
            <h2 className="font-bold text-[#1B3A2D]" style={{ fontSize: '18px' }}>Frost & Sullivan Malaysia Excellence Award</h2>
          </div>
          <div className="grid sm:grid-cols-5 gap-4">
            {['2007', '2010', '2015', '2016', '2017'].map((yr, i) => (
              <div key={yr} className="group bg-white border border-gray-100 hover:border-[#6BBD45] rounded-2xl p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg cursor-default">
                <div className="font-black text-[#6BBD45] mb-1" style={{ fontSize: '30px' }}>{yr}</div>
                <div className="text-gray-400 font-medium" style={{ fontSize: '12px' }}>Malaysia Excellence Award #{i + 1}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
