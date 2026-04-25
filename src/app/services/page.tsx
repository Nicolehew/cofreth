import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServicesOverviewPage from '@/components/pages/ServicesOverviewPage';

export const metadata = { title: 'Our Services | Cofreth (M) Sdn Bhd', description: 'Comprehensive Facilities Management, Energy Services, Green Expertise and Smart Technology solutions.' };

export default function Services() {
  return (<><Navbar /><main><ServicesOverviewPage /></main><Footer /></>);
}
