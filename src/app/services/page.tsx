import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServicesOverviewPage from '@/components/pages/ServicesOverviewPage';

export const metadata = {
  title: 'FM & Energy Services Malaysia | Cofreth',
  description:
    'Integrated FM, Energy, Green Building & Smart Technology solutions. ISO certified, award-winning delivery across Malaysia since 1986.',
  alternates: { canonical: '/services' },
  openGraph: {
    title: 'FM & Energy Services Malaysia | Cofreth',
    description: 'Integrated FM, Energy, Green Building & Smart Technology solutions. ISO certified, award-winning delivery across Malaysia since 1986.',
    url: 'https://www.cofreth.com.my/services',
  },
};

export default function Services() {
  return (<><Navbar /><main><ServicesOverviewPage /></main><Footer /></>);
}
