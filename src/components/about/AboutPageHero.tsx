import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface Props {
  section: string;
  title: React.ReactNode;
  subtitle?: string;
}

export function AboutPageHero({ section, title, subtitle }: Props) {
  return (
    <div className="bg-white border-b border-gray-100 px-6 lg:px-12 pt-12 pb-12 text-center">
      {/* Breadcrumb — centred */}
      <nav className="flex items-center justify-center gap-1.5 mb-8" style={{ fontSize: '12px' }}>
        <Link href="/" className="text-gray-400 hover:text-[#6BBD45] transition-colors">Home</Link>
        <ChevronRight size={12} className="text-gray-300" />
        <Link href="/about" className="text-gray-400 hover:text-[#6BBD45] transition-colors">About</Link>
        <ChevronRight size={12} className="text-gray-300" />
        <span className="text-[#6BBD45] font-semibold">{section}</span>
      </nav>

      {/* Eyebrow — flanking lines, same as Awards page */}
      <div className="flex items-center justify-center gap-3 mb-5">
        <div className="w-8 h-0.5 bg-[#6BBD45]" />
        <span className="text-[#6BBD45] text-xs font-bold tracking-widest uppercase">{section}</span>
        <div className="w-8 h-0.5 bg-[#6BBD45]" />
      </div>

      {/* Heading */}
      <h1
        className="font-black text-[#1B3A2D] leading-tight mb-4 mx-auto"
        style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', maxWidth: '700px' }}
      >
        {title}
      </h1>

      {subtitle && (
        <p className="text-gray-500 leading-relaxed mx-auto" style={{ fontSize: '15px', maxWidth: '600px' }}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
