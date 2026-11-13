import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServiceDetailPage from '@/components/pages/ServiceDetailPage';
const data = {
  serviceKey: 'energy' as const,
  iconName: 'Zap',
  heroImage: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1600&q=80&fit=crop',
};

import { JsonLd, breadcrumbSchema, serviceSchema, faqSchema } from '@/components/JsonLd';

const energyFaqs = [
  { q: 'What is Energy Performance Contracting (EPC) in Malaysia?', a: 'Energy Performance Contracting (EPC) is a model where an ESCO like Cofreth implements energy efficiency upgrades and guarantees the resulting savings. The client pays from actual energy savings achieved — no upfront capital required. If the savings target is not met, Cofreth covers the shortfall.' },
  { q: 'What is Cofreth\'s CoPC® energy model?', a: 'CoPC® (Capped & Guaranteed Energy Efficiency Performance Contract) is Cofreth\'s proprietary EPC model. It guarantees minimum energy savings, caps the client\'s energy spend at a defined ceiling, and transfers performance risk entirely to Cofreth — the most client-protective EPC structure in Malaysia.' },
  { q: 'Which ESCO won the NEA Champion Award in Malaysia?', a: 'Cofreth (M) Sdn Bhd won the National Energy Award (NEA) Champion Award in 2021 for Energy Performance Contracting — the highest national recognition for energy efficiency in Malaysia, awarded by the Ministry of Energy and Natural Resources.' },
  { q: 'What energy savings can a building expect from an EPC project?', a: 'Most Cofreth EPC projects deliver 20–40% energy savings. Measures typically include chiller replacement, LED lighting, BMS upgrades, and variable speed drives. All savings are contractually guaranteed under the CoPC® model.' },
];

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
      <JsonLd data={faqSchema(energyFaqs)} />
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
