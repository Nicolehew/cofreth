import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServiceDetailPage from '@/components/pages/ServiceDetailPage';
const data = {
  iconName: 'Cpu',
  title: 'Smart Technology',
  subtitle: 'Intelligent Systems for the Future-Ready Facility',
  heroImage: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=80&fit=crop',
  intro: 'Cofreth integrates world-class technology platforms into facility management operations — from ARCHIBUS-powered TIFM to BIM and cloud-based energy monitoring — enabling data-driven decisions and operational excellence.',
  sections: [
    {
      title: 'Total Infrastructure FM (TIFM) — ARCHIBUS',
      desc: 'Cofreth uses ARCHIBUS, the world\'s leading Integrated Workplace Management System (IWMS), to power our Total Infrastructure Facilities Management (TIFM) platform. ARCHIBUS provides a single system of record for all FM operations — from space management to asset tracking and preventive maintenance.',
      points: ['Integrated asset & maintenance management', 'Space planning & utilisation tracking', 'Work order & helpdesk management', 'Lease & property management', 'Real-time reporting & analytics dashboards'],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80&fit=crop',
    },
    {
      title: 'Building Information Modeling (BIM)',
      desc: 'Building Information Modeling (BIM) creates intelligent digital representations of your facility — enabling better decision-making across the asset lifecycle from design and construction through to operation and renovation. Cofreth leverages BIM to enhance FM planning, maintenance workflows, and capital project management.',
      points: ['As-built BIM model development', 'FM-enabled BIM (COBie data integration)', 'Clash detection & coordination', 'Lifecycle cost analysis', 'Digital twin development'],
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80&fit=crop',
    },
    {
      title: 'Online Cloud-Based Energy Monitoring System',
      desc: 'Our cloud-based energy monitoring platform provides real-time visibility into your energy consumption across all utility types — electricity, water, gas and more. Automated alerts, trend analysis, and benchmarking reports empower facility managers to identify waste and take immediate corrective action.',
      points: ['Real-time utility consumption monitoring', 'Sub-metering & tenant billing', 'Automated anomaly alerts & reports', 'Energy performance benchmarking', 'Integration with BMS & SCADA systems'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80&fit=crop',
    },
  ],
  ctaText: 'Explore Smart FM Technology for Your Facility',
};

import { JsonLd, breadcrumbSchema, serviceSchema } from '@/components/JsonLd';

export const metadata = {
  title: 'Smart FM Technology Malaysia | ARCHIBUS, BIM & IoT | Cofreth',
  description:
    'ARCHIBUS IWMS, BIM & IoT solutions for smart buildings in Malaysia. Technology-driven FM for data centres, hospitals & commercial buildings since 1986.',
  alternates: { canonical: '/services/smart-technology' },
  openGraph: {
    title:       'Smart FM Technology Malaysia | ARCHIBUS, BIM & IoT | Cofreth',
    description: 'ARCHIBUS IWMS, BIM & IoT solutions for smart buildings in Malaysia. Technology-driven FM for data centres, hospitals & commercial buildings.',
    url:         'https://www.cofreth.com.my/services/smart-technology',
  },
};

export default function Page() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([
        { name: 'Home',     url: 'https://www.cofreth.com.my' },
        { name: 'Services', url: 'https://www.cofreth.com.my/services' },
        { name: 'Smart Technology', url: 'https://www.cofreth.com.my/services/smart-technology' },
      ])} />
      <JsonLd data={serviceSchema(
        'Smart FM Technology',
        'ARCHIBUS Total Infrastructure FM System, BIM, IoT and cloud-based energy monitoring for intelligent facility management across Malaysia.',
        'https://www.cofreth.com.my/services/smart-technology',
      )} />
      <Navbar /><main><ServiceDetailPage {...data} /></main><Footer />
    </>
  );
}
