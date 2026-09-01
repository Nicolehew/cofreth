import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServiceDetailPage from '@/components/pages/ServiceDetailPage';
const data = {
  serviceKey: 'green' as const,
  iconName: 'Leaf',
  heroImage: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1600&q=80&fit=crop',
};

import { JsonLd, breadcrumbSchema, serviceSchema } from '@/components/JsonLd';

export const metadata = {
  title: 'Green Building Consultancy & GBI Certification Malaysia | Cofreth',
  description:
    'GBI-accredited green building consultancy in Malaysia. Cofreth helps developers & building owners achieve Green Building Index certification, reduce carbon footprint & meet ESG targets. Portfolio includes KLIA2, PNB 1194 & more.',
  alternates: { canonical: '/services/green-expertise' },
  openGraph: {
    title:       'Green Building Consultancy & GBI Certification Malaysia | Cofreth',
    description: 'GBI-accredited consultancy for green building certification, energy modelling, commissioning & solar PV in Malaysia. Landmark portfolio: KLIA2, PNB 1194, Cyberjaya Mosque.',
    url:         'https://www.cofreth.com.my/services/green-expertise',
  },
};

export default function Page() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([
        { name: 'Home',     url: 'https://www.cofreth.com.my' },
        { name: 'Services', url: 'https://www.cofreth.com.my/services' },
        { name: 'Green Expertise', url: 'https://www.cofreth.com.my/services/green-expertise' },
      ])} />
      <JsonLd data={serviceSchema(
        'Green Building Expertise',
        'GBI accredited green building consultancy, green commissioning, solar PV and renewable energy solutions across Malaysia.',
        'https://www.cofreth.com.my/services/green-expertise',
      )} />
      <Navbar /><main><ServiceDetailPage {...data} /></main><Footer />
    </>
  );
}
