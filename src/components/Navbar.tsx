'use client';
import { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown, Building2, Zap, Leaf, Cpu, Info, Award, Users, Sun, Moon, Briefcase } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from '@/components/ThemeProvider';

const services = [
  { label: 'Facilities Management', href: '/services/facilities-management', icon: Building2, desc: 'Total FM, O&M, consultancy' },
  { label: 'Energy Services',       href: '/services/energy-services',       icon: Zap,       desc: 'Audits, ESCO, CoPC' },
  { label: 'Green Expertise',       href: '/services/green-expertise',       icon: Leaf,      desc: 'GBI, renewables, solar' },
  { label: 'Smart Technology',      href: '/services/smart-technology',      icon: Cpu,       desc: 'ARCHIBUS, BIM, IoT' },
];

const aboutLinks = [
  { label: 'About Us',             href: '/about',    icon: Info,      desc: 'Our story, mission & values' },
  { label: 'Awards & Recognition', href: '/awards',   icon: Award,     desc: 'Frost & Sullivan, NEA & more' },
  { label: 'Group of Companies',   href: '/group',    icon: Users,     desc: 'Our strategic partners' },
  { label: 'Careers',              href: '/careers',  icon: Briefcase, desc: 'Join the Cofreth team' },
];

const navLinks = [
  { label: 'Home',      href: '/' },
  { label: 'About',     href: '/about',    hasAboutDropdown: true },
  { label: 'Services',  href: '/services', hasDropdown: true },
  { label: 'Projects',  href: '/projects' },
  { label: 'News',      href: '/news' },
  { label: 'Clientele', href: '/clientele' },
  { label: 'Contact',   href: '/contact' },
];

function Dropdown({
  isOpen, onEnter, onLeave, items, footer,
}: {
  isOpen: boolean;
  onEnter: () => void;
  onLeave: () => void;
  items: { label: string; href: string; icon: React.ElementType; desc: string }[];
  footer?: React.ReactNode;
  align?: 'left' | 'right';
}) {
  return (
    <div
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      className="absolute top-full w-72 z-50 pt-2"
      style={{ pointerEvents: isOpen ? 'auto' : 'none', right: 0 }}
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
  const pathname = usePathname();
  const isHome = pathname === '/';
  const { theme, toggle } = useTheme();

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

  const linkBase = `text-sm font-semibold transition-colors duration-200 pb-1 border-b-2 whitespace-nowrap`;
  const linkCls = (href: string) =>
    `${linkBase} ${
      isActive(href)
        ? 'border-[#6BBD45] text-[#6BBD45]'
        : showDark
          ? 'border-transparent text-white/90 hover:text-[#6BBD45]'
          : 'border-transparent text-white/90 hover:text-[#6BBD45]'
    }`;

  const navBg = showDark
    ? 'bg-[#1B3A2D]/97 backdrop-blur-md shadow-lg shadow-black/20 py-2'
    : 'bg-[#1B3A2D]/70 backdrop-blur-sm py-4';

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between gap-4">
        <Link href="/" className="shrink-0">
          <Image
            src="/logo-hero.png"
            alt="Cofreth Logo"
            width={140}
            height={56}
            className="object-contain transition-all duration-300 w-[110px] md:w-[140px] h-auto"
            unoptimized
          />
        </Link>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-5 xl:gap-7">
          {navLinks.map((link) => (
            <li key={link.href} className="relative">
              {link.hasAboutDropdown ? (
                <div onMouseEnter={openAbout} onMouseLeave={closeAbout}>
                  <Link href={link.href} className={`${linkCls(link.href)} flex items-center gap-1`}>
                    {link.label}
                    <ChevronDown size={13} className={`transition-transform duration-200 ${aboutOpen ? 'rotate-180' : ''}`} />
                  </Link>
                  <Dropdown isOpen={aboutOpen} onEnter={openAbout} onLeave={closeAbout} items={aboutLinks} />
                </div>
              ) : link.hasDropdown ? (
                <div onMouseEnter={openDropdown} onMouseLeave={closeDropdown}>
                  <Link href={link.href} className={`${linkCls(link.href)} flex items-center gap-1`}>
                    {link.label}
                    <ChevronDown size={13} className={`transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`} />
                  </Link>
                  <Dropdown
                    isOpen={servicesOpen}
                    onEnter={openDropdown}
                    onLeave={closeDropdown}
                    items={services}
                    footer={
                      <Link href="/services" onClick={() => setServicesOpen(false)}
                        className="text-xs font-semibold text-[#6BBD45] hover:text-[#5aa838] transition-colors">
                        View All Services →
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

        {/* Right controls */}
        <div className="hidden lg:flex items-center gap-3">
          {/* Dark/Light toggle */}
          <button
            onClick={toggle}
            aria-label="Toggle dark mode"
            className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 text-white/70 hover:text-white hover:bg-white/10"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <Link href="/contact" className="btn-glow bg-[#6BBD45] text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-[#5aa838] transition-colors whitespace-nowrap">
            Get In Touch
          </Link>
        </div>

        {/* Mobile: theme toggle + hamburger */}
        <div className="lg:hidden flex items-center gap-2">
          <button
            onClick={toggle}
            aria-label="Toggle dark mode"
            className="w-9 h-9 rounded-full flex items-center justify-center transition-all text-white/70"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            className="w-9 h-9 flex items-center justify-center text-white"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden border-t shadow-xl nav-mobile-bg max-h-[85vh] overflow-y-auto">
          <ul className="flex flex-col">
            {/* About dropdown */}
            <li>
              <button
                onClick={() => setMobileAboutOpen(v => !v)}
                className="flex items-center justify-between w-full px-6 py-4 nav-mobile-text hover:text-[#6BBD45] hover:bg-[#6BBD45]/5 text-base font-semibold border-b nav-mobile-border">
                About
                <ChevronDown size={16} className={`transition-transform ${mobileAboutOpen ? 'rotate-180' : ''}`} />
              </button>
              {mobileAboutOpen && (
                <div className="nav-mobile-sub">
                  {aboutLinks.map((s) => {
                    const Icon = s.icon;
                    return (
                      <Link key={s.href} href={s.href} onClick={() => setOpen(false)}
                        className="flex items-center gap-3 px-8 py-3 text-sm nav-mobile-sub-text hover:text-[#6BBD45] border-b nav-mobile-border">
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
                className="flex items-center justify-between w-full px-6 py-4 nav-mobile-text hover:text-[#6BBD45] hover:bg-[#6BBD45]/5 text-base font-semibold border-b nav-mobile-border">
                Services
                <ChevronDown size={16} className={`transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {mobileServicesOpen && (
                <div className="nav-mobile-sub">
                  {services.map((s) => {
                    const Icon = s.icon;
                    return (
                      <Link key={s.href} href={s.href} onClick={() => setOpen(false)}
                        className="flex items-center gap-3 px-8 py-3 text-sm nav-mobile-sub-text hover:text-[#6BBD45] border-b nav-mobile-border">
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
              { label: 'Home',      href: '/' },
              { label: 'Projects',  href: '/projects' },
              { label: 'News',      href: '/news' },
              { label: 'Clientele', href: '/clientele' },
              { label: 'Contact',   href: '/contact' },
            ].map((link) => (
              <li key={link.href}>
                <Link href={link.href} onClick={() => setOpen(false)}
                  className="block px-6 py-4 nav-mobile-text hover:text-[#6BBD45] hover:bg-[#6BBD45]/5 text-base font-semibold border-b nav-mobile-border">
                  {link.label}
                </Link>
              </li>
            ))}

            <li className="p-4">
              <Link href="/contact" onClick={() => setOpen(false)}
                className="block bg-[#6BBD45] text-white text-center px-5 py-3.5 rounded-full text-base font-semibold">
                Get In Touch
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
