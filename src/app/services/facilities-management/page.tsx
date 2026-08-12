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
  title: 'Facilities Management Malaysia | Total FM & O&M | Cofreth',
  description:
    "Total FM, O&M, Technical Due Diligence & FM Consultancy in Malaysia. ISO certified, 38+ years experience. Malaysia's most trusted FM service provider.",
  alternates: { canonical: '/services/facilities-management' },
  openGraph: {
    title:       'Facilities Management Malaysia | Total FM & O&M | Cofreth',
    description: "Total FM, O&M, Technical Due Diligence & FM Consultancy in Malaysia. ISO certified, 38+ years experience.",
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
