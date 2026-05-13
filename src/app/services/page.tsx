import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServicesOverviewPage from '@/components/pages/ServicesOverviewPage';

export const metadata = {
  title: 'Our Services — FM, Energy, Green & Smart Technology',
  description:
    'Four integrated service pillars: Facilities Management, Energy Services, Green Building Expertise and Smart Technology. ISO certified, award-winning delivery across Malaysia since 1986.',
  alternates: { canonical: '/services' },
  openGraph: {
    title: 'Our Services | Cofreth Malaysia',
    description: 'FM, Energy Services, Green Expertise and Smart Technology — integrated, ISO-certified delivery across Malaysia.',
    url: 'https://www.cofreth.com.my/services',
  },
};

export default function Services() {
  return (<><Navbar /><main><ServicesOverviewPage /></main><Footer /></>);
}
