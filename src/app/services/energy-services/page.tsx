import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServiceDetailPage from '@/components/pages/ServiceDetailPage';
const data = {
  serviceKey: 'energy' as const,
  iconName: 'Zap',
  heroImage: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1600&q=80&fit=crop',
};

import { JsonLd, breadcrumbSchema, serviceSchema } from '@/components/JsonLd';

export const metadata = {
  title: 'Energy Services Malaysia | ESCO, Audits & EPC | Cofreth',
  description:
    "Registered ESCO in Malaysia — energy audits, EPC & CEEP contracts. NEA 2022 EPC Champion with proven savings across airports, data centres & offices.",
  alternates: { canonical: '/services/energy-services' },
  openGraph: {
    title:       'Energy Services Malaysia | ESCO, Audits & EPC | Cofreth',
    description: "Registered ESCO — energy audits, EPC & CEEP contracts. NEA 2022 EPC Champion with proven savings across Malaysia.",
    url:         'https://www.cofreth.com.my/services/energy-services',
  },
};

export default function Page() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([
        { name: 'Home',     url: 'https://www.cofreth.com.my' },
        { name: 'Services', url: 'https://www.cofreth.com.my/services' },
        { name: 'Energy Services', url: 'https://www.cofreth.com.my/services/energy-services' },
      ])} />
      <JsonLd data={serviceSchema(
        'Energy Services',
        'Registered ESCO delivering energy audits, Energy Performance Contracting and Capped & Guaranteed Energy Efficiency Performance contracts across Malaysia.',
        'https://www.cofreth.com.my/services/energy-services',
      )} />
      <Navbar /><main><ServiceDetailPage {...data} /></main><Footer />
    </>
  );
}
