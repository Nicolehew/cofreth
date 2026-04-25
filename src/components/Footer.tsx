import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Phone, Printer, Mail } from 'lucide-react';

const serviceLinks = [
  { label: 'Facilities Management', href: '/services/facilities-management' },
  { label: 'Energy Services', href: '/services/energy-services' },
  { label: 'Green Expertise', href: '/services/green-expertise' },
  { label: 'Smart Technology', href: '/services/smart-technology' },
];

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Awards & Recognition', href: '/awards' },
  { label: 'Group of Companies', href: '/group' },
  { label: 'Our Services', href: '/services' },
  { label: 'Project Highlights', href: '/projects' },
  { label: 'News & Events', href: '/news' },
  { label: 'Clientele', href: '/clientele' },
  { label: 'Contact', href: '/contact' },
];

const certs = ['ISO 9001:2015', 'ISO 14001:2015', 'ISO 45001:2018', 'ISO 50001:2018', 'ISO 41001:2018'];

export default function Footer() {
  return (
    <footer style={{ background: '#0a1a10' }} className="text-gray-400">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-5 bg-white rounded-xl p-3 inline-block shadow-lg">
              <Image
                src="/logo.png"
                alt="Cofreth Logo"
                width={180}
                height={90}
                className="object-contain"
                unoptimized
              />
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mb-6">
              Malaysia's leading Total Solutions Provider for Facilities Management and Energy Services since 1986.
            </p>
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
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-gray-400 hover:text-[#6BBD45] transition-colors flex items-center gap-2">
                    <span className="w-1 h-1 bg-[#6BBD45] rounded-full" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-5">Services</h4>
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
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-5">Contact</h4>
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
                <Printer size={15} className="text-[#6BBD45] shrink-0" />
                <span className="text-gray-400">+(603) 8025 1252</span>
              </div>
              <div className="flex gap-3 items-center">
                <Mail size={15} className="text-[#6BBD45] shrink-0" />
                <a href="mailto:business@cofreth.com.my" className="text-gray-400 hover:text-[#6BBD45] transition-colors">business@cofreth.com.my</a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600">
          <span>© {new Date().getFullYear()} Cofreth (M) Sdn Bhd (152066-P). All Rights Reserved.</span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-[#6BBD45] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#6BBD45] transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
