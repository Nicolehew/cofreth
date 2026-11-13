import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServiceDetailPage from '@/components/pages/ServiceDetailPage';
const data = {
  serviceKey: 'green' as const,
  iconName: 'Leaf',
  heroImage: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1600&q=80&fit=crop',
};

import { JsonLd, breadcrumbSchema, serviceSchema, faqSchema } from '@/components/JsonLd';

const greenFaqs = [
  { q: 'What is Green Building Index (GBI) certification in Malaysia?', a: 'The Green Building Index (GBI) is Malaysia\'s national green building rating system. It assesses buildings across six categories: energy efficiency, indoor environment quality, sustainable site planning, materials and resources, water efficiency, and innovation. Ratings range from Certified to Platinum.' },
  { q: 'Who is a GBI accredited facilitator in Malaysia?', a: 'A GBI Accredited Facilitator guides building owners through GBI certification. Cofreth is a GBI Accredited Facilitator and has achieved GBI certification for KLIA2, PNB 1194, the Cyberjaya Mosque, and several other landmark Malaysian buildings.' },
  { q: 'How does green building certification reduce operating costs?', a: 'Green-certified buildings typically use 20–50% less energy and 30–50% less water than conventional equivalents. For a large tower, this means hundreds of thousands of ringgit saved annually. GBI certification also increases asset value and meets ESG reporting requirements.' },
  { q: 'What green building projects has Cofreth worked on?', a: 'Cofreth\'s green portfolio includes KLIA2, PNB 1194 Tower in KLCC, the Cyberjaya Mosque, and commercial and government developments across Malaysia. As a GBI Accredited Facilitator, Cofreth manages the full certification journey from pre-design to post-occupancy assessment.' },
];

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
      <JsonLd data={faqSchema(greenFaqs)} />
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
