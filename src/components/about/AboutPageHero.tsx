import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface Props {
  section: string;   // breadcrumb label e.g. "Our Many Firsts"
  title: React.ReactNode;
  subtitle?: string;
}

export function AboutPageHero({ section, title, subtitle }: Props) {
  return (
    <div className="bg-white dark:bg-[#111827] border-b border-gray-100 dark:border-gray-800 px-6 lg:px-10 xl:px-14 pt-10 pb-10">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-1.5 mb-5" style={{ fontSize: '12px' }}>
        <Link href="/" className="text-gray-400 hover:text-[#6BBD45] transition-colors">Home</Link>
        <ChevronRight size={12} className="text-gray-300" />
        <Link href="/about" className="text-gray-400 hover:text-[#6BBD45] transition-colors">About</Link>
        <ChevronRight size={12} className="text-gray-300" />
        <span className="text-[#6BBD45] font-semibold">{section}</span>
      </nav>

      {/* Green accent rule */}
      <div className="w-10 h-1 bg-[#6BBD45] rounded-full mb-5" />

      {/* Heading */}
      <h1 className="font-black text-[#1B3A2D] dark:text-white leading-tight mb-3"
        style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
        {title}
      </h1>

      {subtitle && (
        <p className="text-gray-500 dark:text-gray-400 max-w-2xl leading-relaxed"
          style={{ fontSize: '15px' }}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
