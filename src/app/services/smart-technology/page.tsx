import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServiceDetailPage from '@/components/pages/ServiceDetailPage';
const data = {
  serviceKey: 'smart' as const,
  iconName: 'Cpu',
  heroImage: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=80&fit=crop',
};

import { JsonLd, breadcrumbSchema, serviceSchema, faqSchema } from '@/components/JsonLd';

const smartFaqs = [
  { q: 'What is ARCHIBUS and how is it used in facilities management?', a: 'ARCHIBUS is the world\'s leading Integrated Workplace Management System (IWMS), used to manage building assets, work orders, space allocation, and maintenance schedules in one platform. Cofreth deploys ARCHIBUS as the digital backbone of its Total FM contracts, giving building owners real-time asset portfolio visibility.' },
  { q: 'What is a smart building and what technology does it use?', a: 'A smart building uses IoT sensors, BMS, and data analytics to automatically optimise building systems — HVAC, lighting, access, and energy. Cofreth\'s smart building solutions integrate ARCHIBUS IWMS, BIM digital twins, IoT sensor networks, and cloud-based energy monitoring dashboards.' },
  { q: 'How does smart building technology reduce energy costs?', a: 'Smart building technology automates system responses to real-time occupancy data. IoT sensors adjust air-conditioning based on actual room usage rather than fixed schedules, typically reducing HVAC energy by 15–30%. Cofreth\'s IoT monitoring platforms have delivered measurable energy reductions across Malaysian buildings.' },
  { q: 'What is BIM and how is it used in facilities management?', a: 'Building Information Modelling (BIM) creates a digital 3D model of a building containing data on every element. In FM, Cofreth uses BIM as a living digital twin — maintenance teams can locate any asset, trace any pipe, and plan works without physical inspection, reducing maintenance time and improving accuracy.' },
];

export const metadata = {
  title: 'Smart Building Technology Malaysia | ARCHIBUS, BIM & IoT | Cofreth',
  description:
    'Smart building technology solutions in Malaysia. Cofreth delivers ARCHIBUS TIFM, BIM, IoT monitoring & Building Management Systems for intelligent, data-driven facility operations.',
  alternates: { canonical: '/services/smart-technology' },
  openGraph: {
    title:       'Smart Building Technology Malaysia | ARCHIBUS, BIM & IoT | Cofreth',
    description: 'ARCHIBUS IWMS, BIM digital twins & IoT sensor networks for intelligent facility management in Malaysia. Predictive maintenance, real-time energy monitoring.',
    url:         'https://www.cofreth.com.my/services/smart-technology',
  },
};

export default function Page() {
  return (
    <>
      <JsonLd data={faqSchema(smartFaqs)} />
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
