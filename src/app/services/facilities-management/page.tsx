import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServiceDetailPage from '@/components/pages/ServiceDetailPage';
const data = {
  serviceKey: 'fm' as const,
  iconName: 'Building2',
  heroImage: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1600&q=80&fit=crop',
};

import { JsonLd, breadcrumbSchema, serviceSchema, faqSchema } from '@/components/JsonLd';

const fmFaqs = [
  { q: 'What is Total Facilities Management (TFM)?', a: 'Total Facilities Management (TFM) is a single-contract, fully integrated approach where one provider — Cofreth — is accountable for all building services: MEP maintenance, cleaning, security, energy management, asset management, and helpdesk. It eliminates multi-vendor coordination and delivers consistent building performance under one SLA.' },
  { q: 'Which FM company in Malaysia has ISO 41001 certification?', a: 'Cofreth (M) Sdn Bhd was the first facilities management company in Malaysia to achieve ISO 41001:2018 certification — the international standard for FM management systems.' },
  { q: 'What buildings has Cofreth managed in Malaysia?', a: 'Cofreth has managed KLIA2, the Putrajaya International Convention Centre (PICC), Menara AIA, Menara PJD, PNB 1194, Menara Genesis, and numerous government and commercial towers across Malaysia.' },
  { q: 'How long has Cofreth been providing facilities management in Malaysia?', a: 'Cofreth (M) Sdn Bhd has been providing facilities management and building services in Malaysia since 1986 — over 38 years. The company is a 5× Frost & Sullivan Malaysia FM Service Provider of the Year award winner.' },
];

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
      <JsonLd data={faqSchema(fmFaqs)} />
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
