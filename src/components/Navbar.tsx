'use client';
import { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown, Building2, Zap, Leaf, Cpu, Info, Award, Users } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageSwitcher from '@/components/LanguageSwitcher';

const DROPDOWN_W = 288; // w-72
const DROPDOWN_GUTTER = 12;

/**
 * Panel is positioned in viewport coordinates and clamped to stay on screen.
 * Anchoring it to the trigger (the old `right: 0`) pushed it off the left edge
 * on narrower laptops, because the centred nav sits close to the viewport edge.
 */
function Dropdown({
  isOpen, onEnter, onLeave, items, footer, triggerRef,
}: {
  isOpen: boolean;
  onEnter: () => void;
  onLeave: () => void;
  items: { label: string; href: string; icon: React.ElementType; desc: string }[];
  footer?: React.ReactNode;
  triggerRef: React.RefObject<HTMLElement | null>;
}) {
  const [box, setBox] = useState<{ left: number; top: number; width: number } | null>(null);

  useEffect(() => {
    const place = () => {
      const trigger = triggerRef.current;
      if (!trigger) return;
      const t = trigger.getBoundingClientRect();
      const width = Math.min(DROPDOWN_W, window.innerWidth - DROPDOWN_GUTTER * 2);
      const centred = t.left + t.width / 2 - width / 2;
      const maxLeft = window.innerWidth - width - DROPDOWN_GUTTER;
      setBox({
        left: Math.max(DROPDOWN_GUTTER, Math.min(centred, maxLeft)),
        top: t.bottom,
        width,
      });
    };
    place();
    window.addEventListener('resize', place);
    return () => window.removeEventListener('resize', place);
  }, [triggerRef, isOpen]);

  return (
    <div
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      className="fixed z-[300] pt-2"
      style={{
        pointerEvents: isOpen ? 'auto' : 'none',
        left: box ? box.left : 0,
        top: box ? box.top : 0,
        width: box ? box.width : DROPDOWN_W,
        visibility: box ? 'visible' : 'hidden',
      }}
    >
      <div
        className="rounded-2xl shadow-2xl border overflow-hidden transition-all duration-200 dark-dropdown"
        style={{
          opacity: isOpen ? 1 : 0,
          transform: isOpen ? 'translateY(0)' : 'translateY(-8px)',
          borderColor: 'rgba(107,189,69,0.15)',
        }}
      >
        <div className="p-2 nav-dropdown-bg">
          {items.map((s) => {
            const Icon = s.icon;
            return (
              <Link key={s.href} href={s.href}
                className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-[#6BBD45]/10 group transition-colors">
                <div className="w-9 h-9 rounded-lg bg-[#6BBD45]/10 group-hover:bg-[#6BBD45] flex items-center justify-center shrink-0 transition-colors">
                  <Icon size={17} className="text-[#6BBD45] group-hover:text-white transition-colors" />
                </div>
                <div>
                  <div className="text-sm font-semibold nav-dropdown-text group-hover:text-[#6BBD45] transition-colors">{s.label}</div>
                  <div className="text-xs text-gray-400">{s.desc}</div>
                </div>
              </Link>
            );
          })}
        </div>
        {footer && (
          <div className="px-4 py-3 nav-dropdown-footer border-t border-[#6BBD45]/10">
            {footer}
          </div>
        )}
      </div>
    </div>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const closeAboutTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const aboutTriggerRef = useRef<HTMLAnchorElement | null>(null);
  const servicesTriggerRef = useRef<HTMLAnchorElement | null>(null);
  const pathname = usePathname();
  const isHome = pathname === '/';
  const { t } = useLanguage();

  const aboutLinks = [
    { label: t.aboutLinks.glance,  href: '/about',   icon: Info,  desc: t.aboutLinks.glanceDesc },
    { label: t.aboutLinks.group,   href: '/group',   icon: Users, desc: t.aboutLinks.groupDesc  },
    { label: t.aboutLinks.awards,  href: '/awards',  icon: Award, desc: t.aboutLinks.awardsDesc },
  ];

  const services = [
    { label: t.serviceLinks.fm,     href: '/services/facilities-management', icon: Building2, desc: t.serviceLinks.fmDesc     },
    { label: t.serviceLinks.energy, href: '/services/energy-services',       icon: Zap,       desc: t.serviceLinks.energyDesc },
    { label: t.serviceLinks.green,  href: '/services/green-expertise',       icon: Leaf,      desc: t.serviceLinks.greenDesc  },
    { label: t.serviceLinks.smart,  href: '/services/smart-technology',      icon: Cpu,       desc: t.serviceLinks.smartDesc  },
  ];

  const navLinks = [
    { label: t.nav.home,      href: '/' },
    { label: t.nav.about,     href: '/about',    hasAboutDropdown: true },
    { label: t.nav.services,  href: '/services', hasDropdown: true },
    { label: t.nav.projects,  href: '/projects' },
    { label: t.nav.news,      href: '/news' },
    { label: t.nav.insights,  href: '/insights' },
    { label: t.nav.clientele, href: '/clientele' },
    { label: t.nav.careers,   href: '/careers' },
    { label: t.nav.contact,   href: '/contact' },
  ];
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => { setOpen(false); }, [pathname]);

  const isActive = (href: string) => href === '/' ? pathname === '/' : pathname.startsWith(href);
  const showDark = scrolled || !isHome;

  const openDropdown  = () => { if (closeTimer.current)      clearTimeout(closeTimer.current);      setServicesOpen(true); };
  const closeDropdown = () => { closeTimer.current      = setTimeout(() => setServicesOpen(false), 300); };
  const openAbout     = () => { if (closeAboutTimer.current) clearTimeout(closeAboutTimer.current); setAboutOpen(true);    };
  const closeAbout    = () => { closeAboutTimer.current = setTimeout(() => setAboutOpen(false),    300); };

  const linkBase = `text-sm font-semibold transition-colors duration-200 whitespace-nowrap shrink-0 px-2.5 py-1 rounded-md`;
  const linkCls = (href: string) =>
    `${linkBase} ${
      isActive(href)
        ? 'text-[#6BBD45] bg-white/8'
        : 'text-white/85 hover:text-white hover:bg-white/10'
    }`;

  const navBg = showDark
    ? 'bg-[#1B3A2D]/97 backdrop-blur-md shadow-lg shadow-black/20'
    : 'bg-[#1B3A2D]/85 backdrop-blur-sm';

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[200] transition-all duration-300 ${navBg}`}>
      {/* 3-col grid: logo left | nav centre | controls right */}
      <div className="nav-grid w-full px-4 sm:px-6 h-[100px] grid items-center">

        {/* LEFT — Logo */}
        <Link href="/" className="shrink-0 flex items-center">
          <Image
            src="/logo-hero.png"
            alt="Cofreth Logo"
            width={180}
            height={72}
            className="object-contain w-[140px] xl:w-[170px] h-auto max-w-full"
            unoptimized
          />
        </Link>

        {/* CENTRE — nav perfectly centered */}
        <ul className="nav-desk nav-links items-center justify-center gap-0.5">
          {navLinks.map((link) => (
            <li key={link.href} className="relative">
              {link.hasAboutDropdown ? (
                <div onMouseEnter={openAbout} onMouseLeave={closeAbout}>
                  <Link ref={aboutTriggerRef} href={link.href} className={`${linkCls(link.href)} flex items-center gap-1`}>
                    {link.label}
                    <ChevronDown size={13} className={`shrink-0 transition-transform duration-200 ${aboutOpen ? 'rotate-180' : ''}`} />
                  </Link>
                  <Dropdown isOpen={aboutOpen} onEnter={openAbout} onLeave={closeAbout} items={aboutLinks} triggerRef={aboutTriggerRef} />
                </div>
              ) : link.hasDropdown ? (
                <div onMouseEnter={openDropdown} onMouseLeave={closeDropdown}>
                  <Link ref={servicesTriggerRef} href={link.href} className={`${linkCls(link.href)} flex items-center gap-1`}>
                    {link.label}
                    <ChevronDown size={13} className={`shrink-0 transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`} />
                  </Link>
                  <Dropdown
                    isOpen={servicesOpen}
                    onEnter={openDropdown}
                    onLeave={closeDropdown}
                    items={services}
                    triggerRef={servicesTriggerRef}
                    footer={
                      <Link href="/services" onClick={() => setServicesOpen(false)}
                        className="text-xs font-semibold text-[#6BBD45] hover:text-[#5aa838] transition-colors">
                        {t.common.viewAllServices} →
                      </Link>
                    }
                  />
                </div>
              ) : (
                <Link href={link.href} className={linkCls(link.href)}>
                  {link.label}
                </Link>
              )}
            </li>
          ))}
        </ul>

        {/* RIGHT — desktop controls + mobile hamburger */}
        <div className="nav-controls flex items-center justify-end gap-2">
          <div className="nav-desk-i">
            <LanguageSwitcher />
          </div>
          <Link href="/contact"
            className="nav-cta btn-glow bg-[#6BBD45] hover:bg-[#5aa838] text-white text-sm font-bold px-4 py-2 rounded-full transition-all duration-200 whitespace-nowrap">
            {t.nav.getInTouch}
          </Link>

          <button className="nav-mob w-9 h-9 items-center justify-center text-white"
            onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      </div>{/* end grid */}

      {/* Mobile menu — only rendered below 900px (open state controlled by hamburger) */}
      {open && (
        <div className="border-t shadow-xl nav-mobile-bg max-h-[85vh] overflow-y-auto">
          <ul className="flex flex-col">

            {/* Language switcher — mobile */}
            <li><LanguageSwitcher mobile /></li>

            {/* Home — first */}
            <li>
              <Link href="/" onClick={() => setOpen(false)}
                className="block px-5 py-4 nav-mobile-text hover:text-[#6BBD45] hover:bg-[#6BBD45]/5 text-base font-semibold border-b nav-mobile-border">
                {t.nav.home}
              </Link>
            </li>

            {/* About dropdown */}
            <li>
              <button
                onClick={() => setMobileAboutOpen(v => !v)}
                className="flex items-center justify-between w-full px-5 py-4 nav-mobile-text hover:text-[#6BBD45] hover:bg-[#6BBD45]/5 text-base font-semibold border-b nav-mobile-border">
                {t.nav.about}
                <ChevronDown size={16} className={`transition-transform ${mobileAboutOpen ? 'rotate-180' : ''}`} />
              </button>
              {mobileAboutOpen && (
                <div className="nav-mobile-sub">
                  {aboutLinks.map((s) => {
                    const Icon = s.icon;
                    return (
                      <Link key={s.href} href={s.href} onClick={() => setOpen(false)}
                        className="flex items-center gap-3 px-7 py-3.5 text-sm nav-mobile-sub-text hover:text-[#6BBD45] border-b nav-mobile-border">
                        <Icon size={15} className="text-[#6BBD45] shrink-0" />
                        {s.label}
                      </Link>
                    );
                  })}
                </div>
              )}
            </li>

            {/* Services dropdown */}
            <li>
              <button
                onClick={() => setMobileServicesOpen(v => !v)}
                className="flex items-center justify-between w-full px-5 py-4 nav-mobile-text hover:text-[#6BBD45] hover:bg-[#6BBD45]/5 text-base font-semibold border-b nav-mobile-border">
                {t.nav.services}
                <ChevronDown size={16} className={`transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {mobileServicesOpen && (
                <div className="nav-mobile-sub">
                  {services.map((s) => {
                    const Icon = s.icon;
                    return (
                      <Link key={s.href} href={s.href} onClick={() => setOpen(false)}
                        className="flex items-center gap-3 px-7 py-3.5 text-sm nav-mobile-sub-text hover:text-[#6BBD45] border-b nav-mobile-border">
                        <Icon size={15} className="text-[#6BBD45] shrink-0" />
                        {s.label}
                      </Link>
                    );
                  })}
                </div>
              )}
            </li>

            {/* Other links */}
            {[
              { label: t.nav.projects,  href: '/projects' },
              { label: t.nav.news,      href: '/news' },
              { label: t.nav.clientele, href: '/clientele' },
              { label: t.nav.careers,   href: '/careers' },
              { label: t.nav.contact,   href: '/contact' },
            ].map((link) => (
              <li key={link.href}>
                <Link href={link.href} onClick={() => setOpen(false)}
                  className="block px-5 py-4 nav-mobile-text hover:text-[#6BBD45] hover:bg-[#6BBD45]/5 text-base font-semibold border-b nav-mobile-border">
                  {link.label}
                </Link>
              </li>
            ))}

            <li className="p-4">
              <Link href="/contact" onClick={() => setOpen(false)}
                className="block bg-[#6BBD45] text-white text-center px-5 py-3.5 rounded-full text-base font-bold">
                {t.nav.getInTouch}
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
