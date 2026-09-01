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
  title: 'Energy Performance Contracting Malaysia | Award-Winning ESCO | Cofreth',
  description:
    "Malaysia's leading ESCO for Energy Performance Contracting. Cofreth's CoPC® model guarantees measurable energy savings — you only pay for results delivered. NEA Champion 2021 & ASEAN Award Winner.",
  alternates: { canonical: '/services/energy-services' },
  openGraph: {
    title:       'Energy Performance Contracting Malaysia | Award-Winning ESCO | Cofreth',
    description: "Guaranteed energy savings through Cofreth's CoPC® EPC model. NEA Champion 2021, ASEAN Award Winner & NEEAP 2.0 National Consultant.",
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
