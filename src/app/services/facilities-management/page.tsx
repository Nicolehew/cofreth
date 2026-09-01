import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServiceDetailPage from '@/components/pages/ServiceDetailPage';
const data = {
  serviceKey: 'fm' as const,
  iconName: 'Building2',
  heroImage: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1600&q=80&fit=crop',
};

import { JsonLd, breadcrumbSchema, serviceSchema } from '@/components/JsonLd';

export const metadata = {
  title: 'Total Facilities Management Malaysia | ISO 41001 Certified | Cofreth',
  description:
    "Malaysia's most trusted Total Facilities Management company. Cofreth delivers integrated FM, MEP maintenance & O&M for airports, hospitals & landmark buildings. ISO 41001 certified. Est. 1986.",
  alternates: { canonical: '/services/facilities-management' },
  openGraph: {
    title:       'Total Facilities Management Malaysia | ISO 41001 Certified | Cofreth',
    description: "Malaysia's most trusted Total FM company — integrated FM, MEP maintenance & O&M for landmark buildings since 1986. ISO 41001 certified.",
    url:         'https://www.cofreth.com.my/services/facilities-management',
  },
};

export default function Page() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([
        { name: 'Home',     url: 'https://www.cofreth.com.my' },
        { name: 'Services', url: 'https://www.cofreth.com.my/services' },
        { name: 'Facilities Management', url: 'https://www.cofreth.com.my/services/facilities-management' },
      ])} />
      <JsonLd data={serviceSchema(
        'Facilities Management',
        'Comprehensive integrated Facilities Management — Total FM, O&M, Technical Due Diligence and FM Consultancy across Malaysia.',
        'https://www.cofreth.com.my/services/facilities-management',
      )} />
      <Navbar /><main><ServiceDetailPage {...data} /></main><Footer />
    </>
  );
}
