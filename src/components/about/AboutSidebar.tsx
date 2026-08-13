'use client';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Building2, Trophy, Lightbulb, FileText,
  Settings, Heart, Scale, Globe, Leaf, Flag,
  PanelLeftClose, PanelLeftOpen,
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const NAV_META = [
  { key: 'about',        href: '/about',                icon: Building2 },
  { key: 'firsts',       href: '/about/firsts',         icon: Trophy    },
  { key: 'philosophy',   href: '/about/philosophy',     icon: Lightbulb },
  { key: 'ims',          href: '/about/ims-policy',     icon: FileText  },
  { key: 'processes',    href: '/about/processes',      icon: Settings  },
  { key: 'values',       href: '/about/values',         icon: Heart     },
  { key: 'governance',   href: '/about/governance',     icon: Scale     },
  { key: 'csr',          href: '/about/csr',            icon: Globe     },
  { key: 'sustainability',href: '/about/sustainability', icon: Leaf      },
  { key: 'themes',       href: '/about/themes',         icon: Flag      },
] as const;

export function AboutSidebar({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(true);
  const pathname = usePathname();
  const { t } = useLanguage();
  const nav = t.pages.about.nav;
  const isActive = (href: string) => pathname === href;

  const aboutNavItems = NAV_META.map(m => ({
    href: m.href,
    icon: m.icon,
    label: nav[m.key],
  }));

  return (
    <div className="flex bg-white">

      {/* ── Desktop sidebar ── */}
      <aside
        className="hidden lg:flex flex-col shrink-0 transition-[width] duration-300 ease-in-out sticky top-20 self-start bg-white border-r border-gray-100"
        style={{ width: open ? '240px' : '56px', height: 'calc(100vh - 80px)', overflow: 'hidden' }}
      >
        {/* Header + toggle */}
        <div className={`flex items-center border-b border-gray-100 shrink-0 py-3 ${open ? 'justify-between px-4' : 'justify-center'}`}>
          {open && (
            <span className="text-xs font-black text-gray-400 uppercase tracking-widest leading-none">
              {t.aboutLinks.glance}
            </span>
          )}
          <button
            onClick={() => setOpen(v => !v)}
            aria-label={open ? 'Collapse sidebar' : 'Expand sidebar'}
            className="w-8 h-8 rounded-lg flex items-center justify-center text-gray-400 hover:text-[#1B3A2D] hover:bg-gray-100 transition-all shrink-0"
          >
            {open ? <PanelLeftClose size={16} /> : <PanelLeftOpen size={16} />}
          </button>
        </div>

        {/* Nav links */}
        <nav className="flex-1 py-2 overflow-y-auto overflow-x-hidden bg-white">
          {aboutNavItems.map(item => {
            const Icon = item.icon;
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                title={item.label}
                className={`flex items-center gap-3 py-2.5 border-l-[3px] transition-all duration-200 ${
                  open ? 'px-4' : 'justify-center px-0 border-l-0'
                } ${
                  active
                    ? 'border-[#6BBD45] bg-[#6BBD45]/10 text-[#1B3A2D]'
                    : 'border-transparent text-gray-500 hover:text-[#1B3A2D] hover:bg-gray-50 hover:border-gray-200'
                }`}
              >
                <Icon size={16} className={`shrink-0 ${active ? 'text-[#6BBD45]' : ''}`} />
                {open && (
                  <span className="text-sm font-semibold leading-snug">
                    {item.label}
                  </span>
                )}
              </Link>
            );
          })}
        </nav>
      </aside>

      {/* ── Mobile: horizontal scrollable tab strip ── */}
      <div className="flex flex-col flex-1 min-w-0 bg-white">
        <div className="lg:hidden sticky top-[64px] z-40 bg-white border-b border-gray-200 shadow-sm">
          <div
            className="flex overflow-x-auto gap-1.5 px-3 py-2"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' } as React.CSSProperties}
          >
            {aboutNavItems.map(item => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-xs flex-shrink-0 px-3 py-1.5 rounded-full font-semibold transition-all whitespace-nowrap ${
                    active
                      ? 'bg-[#6BBD45] text-white shadow-sm'
                      : 'text-gray-500 bg-gray-100 hover:bg-gray-200'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>

        {/* Page content — full width */}
        <main className="flex-1 min-w-0 bg-white w-full">
          {children}
        </main>
      </div>
    </div>
  );
}
