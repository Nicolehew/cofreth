import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServiceDetailPage from '@/components/pages/ServiceDetailPage';
const data = {
  serviceKey: 'smart' as const,
  iconName: 'Cpu',
  heroImage: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=80&fit=crop',
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
