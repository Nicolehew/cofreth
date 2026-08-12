'use client';
import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Phone, Mail } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const serviceHrefs = [
  '/services/facilities-management',
  '/services/energy-services',
  '/services/green-expertise',
  '/services/smart-technology',
];

const quickLinkHrefs = [
  { href: '/',          key: 'home' as const },
  { href: '/about',     key: 'about' as const },
  { href: '/awards',    key: null, label: 'Awards & Recognition' },
  { href: '/group',     key: null, label: 'Group of Companies' },
  { href: '/services',  key: null, label: 'Services' },
  { href: '/projects',  key: null, label: 'Project Highlights' },
  { href: '/news',      key: 'news' as const },
  { href: '/clientele', key: 'clientele' as const },
  { href: '/contact',   key: 'contact' as const },
  { href: 'https://webmail.cofreth.com.my', key: null, label: 'Cofreth Webmail', external: true },
];

const certs = ['ISO 9001:2015', 'ISO 14001:2015', 'ISO 45001:2018', 'ISO 50001:2018', 'ISO 41001:2018'];

export default function Footer() {
  const { t } = useLanguage();

  const serviceLinks = [
    { label: t.serviceLinks.fm,     href: serviceHrefs[0] },
    { label: t.serviceLinks.energy, href: serviceHrefs[1] },
    { label: t.serviceLinks.green,  href: serviceHrefs[2] },
    { label: t.serviceLinks.smart,  href: serviceHrefs[3] },
  ];

  return (
    <footer style={{ background: '#0a1a10' }} className="text-gray-400">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-5">
              <Image src="/logo.png" alt="Cofreth Logo" width={180} height={90} className="object-contain" unoptimized />
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mb-6">{t.footer.tagline}</p>
            <div className="flex flex-col gap-2 text-xs text-gray-500">
              {certs.map((c) => (
                <span key={c} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#6BBD45] rounded-full" />
                  {c}
                </span>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-5">{t.footer.quickLinksTitle}</h4>
            <ul className="space-y-3">
              {quickLinkHrefs.map((l) => {
                const label = l.key ? t.nav[l.key] : l.label!;
                return (
                  <li key={l.href}>
                    <Link href={l.href} {...(l.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                      className="text-sm text-gray-400 hover:text-[#6BBD45] transition-colors flex items-center gap-2">
                      <span className="w-1 h-1 bg-[#6BBD45] rounded-full" />
                      {label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-5">{t.footer.servicesTitle}</h4>
            <ul className="space-y-3">
              {serviceLinks.map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className="text-sm text-gray-400 hover:text-[#6BBD45] transition-colors flex items-center gap-2">
                    <span className="w-1 h-1 bg-[#6BBD45] rounded-full" />
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-5">{t.footer.contactTitle}</h4>
            <div className="space-y-4 text-sm">
              <div className="flex gap-3">
                <MapPin size={15} className="text-[#6BBD45] shrink-0 mt-0.5" />
                <span className="text-gray-400 leading-relaxed">No. 39, Jalan USJ Sentral 3, USJ Sentral, Persiaran Subang 1, 47600 Subang Jaya, Selangor, Malaysia.</span>
              </div>
              <div className="flex gap-3 items-center">
                <Phone size={15} className="text-[#6BBD45] shrink-0" />
                <a href="tel:+60380238878" className="text-gray-400 hover:text-[#6BBD45] transition-colors">+(603) 8023 8878</a>
              </div>
              <div className="flex gap-3 items-center">
                <Mail size={15} className="text-[#6BBD45] shrink-0" />
                <a href="mailto:business@cofreth.com.my" className="text-gray-400 hover:text-[#6BBD45] transition-colors">business@cofreth.com.my</a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600">
          <span>© {new Date().getFullYear()} {t.footer.copyright}</span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-[#6BBD45] transition-colors">{t.footer.privacyPolicy}</a>
            <a href="#" className="hover:text-[#6BBD45] transition-colors">{t.footer.terms}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
