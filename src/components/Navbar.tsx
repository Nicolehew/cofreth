'use client';
import { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown, Building2, Zap, Leaf, Cpu, Info, Award, Users } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const services = [
  { label: 'Facilities Management', href: '/services/facilities-management', icon: Building2, desc: 'Total FM, O&M, consultancy' },
  { label: 'Energy Services',       href: '/services/energy-services',       icon: Zap,       desc: 'Audits, ESCO, CoPC' },
  { label: 'Green Expertise',       href: '/services/green-expertise',       icon: Leaf,      desc: 'GBI, renewables, solar' },
  { label: 'Smart Technology',      href: '/services/smart-technology',      icon: Cpu,       desc: 'ARCHIBUS, BIM, IoT' },
];

const aboutLinks = [
  { label: 'About Us',           href: '/about',   icon: Info,  desc: 'Our story, mission & values' },
  { label: 'Awards & Recognition', href: '/awards', icon: Award, desc: 'Frost & Sullivan, NEA & more' },
  { label: 'Group of Companies', href: '/group',   icon: Users, desc: 'Our strategic partners' },
];

const navLinks = [
  { label: 'Home',      href: '/' },
  { label: 'About',     href: '/about', hasAboutDropdown: true },
  { label: 'Services',  href: '/services', hasDropdown: true },
  { label: 'Projects',  href: '/projects' },
  { label: 'News',      href: '/news' },
  { label: 'Clientele', href: '/clientele' },
  { label: 'Contact',   href: '/contact' },
];

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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const isActive = (href: string) => href === '/' ? pathname === '/' : pathname.startsWith(href);
  const showDark = scrolled || !isHome;

  const openDropdown = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setServicesOpen(true);
  };
  const closeDropdown = () => {
    closeTimer.current = setTimeout(() => setServicesOpen(false), 300);
  };
  const openAbout = () => {
    if (closeAboutTimer.current) clearTimeout(closeAboutTimer.current);
    setAboutOpen(true);
  };
  const closeAbout = () => {
    closeAboutTimer.current = setTimeout(() => setAboutOpen(false), 300);
  };

  const linkCls = (href: string) =>
    `text-base font-semibold transition-colors duration-200 pb-1 border-b-2 whitespace-nowrap ${
      isActive(href)
        ? 'border-[#6BBD45] text-[#6BBD45]'
        : showDark
          ? 'border-transparent text-gray-700 hover:text-[#6BBD45]'
          : 'border-transparent text-white hover:text-[#6BBD45]'
    }`;

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${showDark ? 'bg-white/95 backdrop-blur-md shadow-lg py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link href="/">
          <Image src="/logo.png" alt="Cofreth Logo" width={170} height={85} className="object-contain" unoptimized />
        </Link>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <li key={link.href} className="relative">
              {link.hasAboutDropdown ? (
                <div onMouseEnter={openAbout} onMouseLeave={closeAbout}>
                  <Link href={link.href} className={`${linkCls(link.href)} flex items-center gap-1`}>
                    {link.label}
                    <ChevronDown size={15} className={`transition-transform duration-200 ${aboutOpen ? 'rotate-180' : ''}`} />
                  </Link>
                  <div onMouseEnter={openAbout} onMouseLeave={closeAbout}
                    className="absolute top-full left-1/2 -translate-x-1/2 w-72 z-50 pt-3"
                    style={{ pointerEvents: aboutOpen ? 'auto' : 'none' }}>
                    <div className="rounded-2xl shadow-2xl border border-gray-100 overflow-hidden transition-all duration-200"
                      style={{ opacity: aboutOpen ? 1 : 0, transform: aboutOpen ? 'translateY(0)' : 'translateY(-8px)', background: 'white' }}>
                      <div className="p-2">
                        {aboutLinks.map((s) => {
                          const Icon = s.icon;
                          return (
                            <Link key={s.href} href={s.href} onClick={() => setAboutOpen(false)}
                              className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-[#6BBD45]/8 group transition-colors">
                              <div className="w-9 h-9 rounded-lg bg-[#6BBD45]/10 group-hover:bg-[#6BBD45] flex items-center justify-center shrink-0 transition-colors">
                                <Icon size={17} className="text-[#6BBD45] group-hover:text-white transition-colors" />
                              </div>
                              <div>
                                <div className="text-sm font-semibold text-gray-800 group-hover:text-[#6BBD45] transition-colors">{s.label}</div>
                                <div className="text-xs text-gray-400">{s.desc}</div>
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              ) : link.hasDropdown ? (
                <div onMouseEnter={openDropdown} onMouseLeave={closeDropdown}>
                  <Link href={link.href} className={`${linkCls(link.href)} flex items-center gap-1`}>
                    {link.label}
                    <ChevronDown size={15} className={`transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`} />
                  </Link>

                  {/* Dropdown — starts flush at top-full so no hover gap exists */}
                  <div
                    onMouseEnter={openDropdown}
                    onMouseLeave={closeDropdown}
                    className="absolute top-full left-1/2 -translate-x-1/2 w-80 z-50 pt-3"
                    style={{ pointerEvents: servicesOpen ? 'auto' : 'none' }}
                  >
                  <div
                    className="rounded-2xl shadow-2xl border border-gray-100 overflow-hidden transition-all duration-200"
                    style={{
                      opacity: servicesOpen ? 1 : 0,
                      transform: servicesOpen ? 'translateY(0)' : 'translateY(-8px)',
                      background: 'white',
                    }}
                  >
                    <div className="p-2">
                      {services.map((s) => {
                        const Icon = s.icon;
                        return (
                          <Link key={s.href} href={s.href}
                            onClick={() => setServicesOpen(false)}
                            className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-[#6BBD45]/8 group transition-colors">
                            <div className="w-9 h-9 rounded-lg bg-[#6BBD45]/10 group-hover:bg-[#6BBD45] flex items-center justify-center shrink-0 transition-colors">
                              <Icon size={17} className="text-[#6BBD45] group-hover:text-white transition-colors" />
                            </div>
                            <div>
                              <div className="text-sm font-semibold text-gray-800 group-hover:text-[#6BBD45] transition-colors">{s.label}</div>
                              <div className="text-xs text-gray-400">{s.desc}</div>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                    <div className="px-4 py-3 bg-gray-50 border-t border-gray-100">
                      <Link href="/services" onClick={() => setServicesOpen(false)}
                        className="text-xs font-semibold text-[#6BBD45] hover:text-[#5aa838] transition-colors">
                        View All Services →
                      </Link>
                    </div>
                  </div>
                  </div>
                </div>
              ) : (
                <Link href={link.href} className={linkCls(link.href)}>
                  {link.label}
                </Link>
              )}
            </li>
          ))}
          <li>
            <Link href="/contact" className="btn-glow bg-[#6BBD45] text-white px-6 py-2.5 rounded-full text-base font-semibold hover:bg-[#5aa838] transition-colors">
              Get In Touch
            </Link>
          </li>
        </ul>

        <button className={`lg:hidden ${showDark ? 'text-gray-800' : 'text-white'}`} onClick={() => setOpen(!open)}>
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-white border-t shadow-xl">
          <ul className="flex flex-col">
            {navLinks.map((link) => (
              <li key={link.href}>
                {link.hasAboutDropdown ? (
                  <>
                    <button
                      onClick={() => setMobileAboutOpen(v => !v)}
                      className="flex items-center justify-between w-full px-6 py-4 text-gray-700 hover:text-[#6BBD45] hover:bg-gray-50 text-base font-semibold border-b border-gray-100">
                      {link.label}
                      <ChevronDown size={16} className={`transition-transform ${mobileAboutOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {mobileAboutOpen && (
                      <div className="bg-gray-50">
                        {aboutLinks.map((s) => {
                          const Icon = s.icon;
                          return (
                            <Link key={s.href} href={s.href} onClick={() => setOpen(false)}
                              className="flex items-center gap-3 px-8 py-3 text-sm text-gray-600 hover:text-[#6BBD45] border-b border-gray-100">
                              <Icon size={15} className="text-[#6BBD45]" />
                              {s.label}
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </>
                ) : link.hasDropdown ? (
                  <>
                    <button
                      onClick={() => setMobileServicesOpen(v => !v)}
                      className="flex items-center justify-between w-full px-6 py-4 text-gray-700 hover:text-[#6BBD45] hover:bg-gray-50 text-base font-semibold border-b border-gray-100">
                      {link.label}
                      <ChevronDown size={16} className={`transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {mobileServicesOpen && (
                      <div className="bg-gray-50">
                        {services.map((s) => {
                          const Icon = s.icon;
                          return (
                            <Link key={s.href} href={s.href} onClick={() => setOpen(false)}
                              className="flex items-center gap-3 px-8 py-3 text-sm text-gray-600 hover:text-[#6BBD45] border-b border-gray-100">
                              <Icon size={15} className="text-[#6BBD45]" />
                              {s.label}
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </>
                ) : (
                  <Link href={link.href} onClick={() => setOpen(false)}
                    className="block px-6 py-4 text-gray-700 hover:text-[#6BBD45] hover:bg-gray-50 text-base font-semibold border-b border-gray-100">
                    {link.label}
                  </Link>
                )}
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
