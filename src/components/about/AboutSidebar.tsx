'use client';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Building2, Trophy, Lightbulb, FileText,
  Settings, Heart, Scale, Globe, Flag,
  ChevronLeft, ChevronRight,
} from 'lucide-react';

export const aboutNavItems = [
  { label: 'About Cofreth',          href: '/about',            icon: Building2 },
  { label: 'Our Many Firsts',        href: '/about/firsts',     icon: Trophy    },
  { label: 'Our Philosophy',         href: '/about/philosophy', icon: Lightbulb },
  { label: 'Our IMS Policy',         href: '/about/ims-policy', icon: FileText  },
  { label: 'Our Processes',          href: '/about/processes',  icon: Settings  },
  { label: 'Our Value & Ethics',     href: '/about/values',     icon: Heart     },
  { label: 'Corporate Governance',   href: '/about/governance', icon: Scale     },
  { label: 'Corporate Social Responsibility', href: '/about/csr', icon: Globe   },
  { label: 'Corporate Themes',       href: '/about/themes',     icon: Flag      },
];

export function AboutSidebar({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(true);
  const pathname = usePathname();

  const isActive = (href: string) => pathname === href;

  return (
    <div className="flex">
      {/* ── Desktop sidebar ── */}
      <aside
        className={`hidden lg:flex flex-col shrink-0 transition-[width] duration-300 ease-in-out sticky top-20 self-start h-[calc(100vh-80px)] bg-white dark:bg-[#0d1117] border-r border-gray-100 dark:border-gray-800 overflow-hidden`}
        style={{ width: open ? '256px' : '60px' }}
      >
        {/* Header row */}
        <div className={`flex items-center py-4 border-b border-gray-100 dark:border-gray-800 shrink-0 ${open ? 'justify-between px-5' : 'justify-center px-0'}`}>
          {open && (
            <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest whitespace-nowrap">
              Cofreth At A Glance
            </p>
          )}
          <button
            onClick={() => setOpen(v => !v)}
            aria-label={open ? 'Collapse sidebar' : 'Expand sidebar'}
            className="w-8 h-8 rounded-lg flex items-center justify-center text-gray-400 hover:text-[#1B3A2D] dark:hover:text-[#6BBD45] hover:bg-gray-100 dark:hover:bg-white/10 transition-all shrink-0"
          >
            {open ? <ChevronLeft size={16} /> : <ChevronRight size={16} />}
          </button>
        </div>

        {/* Nav links */}
        <nav className="flex-1 py-3 overflow-y-auto overflow-x-hidden">
          {aboutNavItems.map(item => {
            const Icon = item.icon;
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                title={!open ? item.label : undefined}
                className={`flex items-center gap-3 py-3 transition-all duration-200 border-l-4 ${
                  open ? 'px-5' : 'justify-center px-0 border-l-0'
                } ${
                  active
                    ? 'border-[#6BBD45] bg-[#6BBD45]/10 text-[#1B3A2D] dark:text-[#6BBD45]'
                    : 'border-transparent text-gray-500 hover:text-[#1B3A2D] dark:hover:text-white hover:bg-gray-50 dark:hover:bg-white/5 hover:border-gray-200'
                }`}
              >
                <Icon
                  size={17}
                  className={`shrink-0 ${active ? 'text-[#6BBD45]' : ''}`}
                />
                {open && (
                  <span className="text-sm font-semibold whitespace-nowrap leading-tight">
                    {item.label}
                  </span>
                )}
              </Link>
            );
          })}
        </nav>
      </aside>

      {/* ── Mobile: horizontal scrollable tab strip ── */}
      <div className="flex flex-col flex-1 min-w-0">
        <div className="lg:hidden sticky top-[64px] z-40 bg-white dark:bg-[#0d1117] border-b border-gray-200 dark:border-gray-800 shadow-sm">
          <div className="flex overflow-x-auto gap-1 px-3 py-2 scrollbar-none" style={{ scrollbarWidth: 'none' }}>
            {aboutNavItems.map(item => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex-shrink-0 px-3 py-1.5 rounded-full text-xs font-semibold transition-all whitespace-nowrap ${
                    active
                      ? 'bg-[#6BBD45] text-white shadow-sm shadow-[#6BBD45]/30'
                      : 'text-gray-500 hover:bg-gray-100 dark:hover:bg-white/10'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>

        {/* Page content */}
        <main className="flex-1 min-w-0">
          {children}
        </main>
      </div>
    </div>
  );
}
