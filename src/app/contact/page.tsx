import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactPage from '@/components/pages/ContactPage';
import { JsonLd, COFRETH_ORG } from '@/components/JsonLd';

export const metadata = {
  title: 'Contact Cofreth | FM & Energy Services Malaysia',
  description:
    'Contact Cofreth in Subang Jaya, Selangor. Tel: +603-8023-8878. Enquiries for FM, energy & green building services welcome. Mon–Fri 8:30am–5:30pm.',
  alternates: { canonical: '/contact' },
  openGraph: {
    title:       'Contact Cofreth | FM & Energy Services Malaysia',
    description: 'Contact Cofreth in Subang Jaya, Selangor. Tel: +603-8023-8878. FM, energy & green building enquiries welcome.',
    url:         'https://www.cofreth.com.my/contact',
  },
};

const contactSchema = {
  '@context': 'https://schema.org',
  '@type':    'ContactPage',
  name:       'Contact Cofreth (M) Sdn Bhd',
  url:        'https://www.cofreth.com.my/contact',
  mainEntity: {
    ...COFRETH_ORG,
    openingHoursSpecification: {
      '@type':    'OpeningHoursSpecification',
      dayOfWeek:  ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens:      '08:30',
      closes:     '17:30',
    },
  },
};

export default function Page() {
  return (
    <>
      <JsonLd data={contactSchema} />
      <Navbar />
      <main><ContactPage /></main>
      <Footer />
    </>
  );
}
