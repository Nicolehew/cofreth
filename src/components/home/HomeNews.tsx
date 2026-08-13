'use client';
import Link from 'next/link';
import { Calendar, MapPin, ArrowRight } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useLanguage } from '@/contexts/LanguageContext';

const NEWS_IMAGES = [
  'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80&fit=crop',
  'https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=800&q=80&fit=crop',
  'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80&fit=crop',
];

function NewsItem({ item, image, index }: { item: { category: string; date: string; location: string; title: string; excerpt: string }; image: string; index: number }) {
  const reveal = useScrollReveal(0.1);
  return (
    <div ref={reveal.ref} className="transition-all duration-700"
      style={{ opacity: reveal.visible ? 1 : 0, transform: reveal.visible ? 'none' : 'translateY(40px)', transitionDelay: `${index * 100}ms` }}>
      <div className="group flex flex-col h-full bg-white border border-gray-100 hover:border-[#6BBD45]/30 rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-400 hover:-translate-y-2">
        <div className="relative h-52 overflow-hidden">
          <img src={image} alt={item.title}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <span className="absolute top-4 left-4 bg-[#6BBD45] text-white text-xs font-bold px-3 py-1.5 rounded-full tracking-widest uppercase">{item.category}</span>
        </div>
        <div className="p-6 flex flex-col flex-1">
          <div className="flex items-center gap-3 text-xs text-gray-400 mb-3">
            <span className="flex items-center gap-1"><Calendar size={12} /> {item.date}</span>
            <span className="flex items-center gap-1"><MapPin size={12} /> {item.location}</span>
          </div>
          <h3 className="font-black text-[#1B3A2D] text-xl leading-snug mb-3 group-hover:text-[#6BBD45] transition-colors">{item.title}</h3>
          <p className="text-gray-500 text-base leading-relaxed flex-1">{item.excerpt}</p>
        </div>
      </div>
    </div>
  );
}

export default function HomeNews() {
  const header = useScrollReveal();
  const { t } = useLanguage();
  const p = t.pages.home.news;

  return (
    <section className="py-16 lg:py-20 xl:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={header.ref} className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-12 transition-all duration-700"
          style={{ opacity: header.visible ? 1 : 0, transform: header.visible ? 'none' : 'translateY(30px)' }}>
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-px bg-[#6BBD45]" />
              <span className="text-[#6BBD45] text-sm font-bold tracking-widest uppercase">{p.eyebrow}</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-[#1B3A2D] leading-tight">{p.title}</h2>
          </div>
          <Link href="/news" className="inline-flex items-center gap-2 border-2 border-[#1B3A2D] text-[#1B3A2D] hover:bg-[#1B3A2D] hover:text-white font-bold px-7 py-3.5 rounded-full transition-all duration-200 shrink-0">
            {p.viewAll} <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {p.items.map((item, i) => <NewsItem key={i} item={item} image={NEWS_IMAGES[i]} index={i} />)}
        </div>
      </div>
    </section>
  );
}
