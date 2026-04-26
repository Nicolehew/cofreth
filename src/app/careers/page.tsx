import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CareersPage from '@/components/pages/CareersPage';

export const metadata = {
  title: 'Careers | Cofreth (M) Sdn Bhd',
  description: 'Join Malaysia\'s leading Facilities Management and Energy Services company. Explore career opportunities at Cofreth.',
};

export default function Careers() {
  return (<><Navbar /><main><CareersPage /></main><Footer /></>);
}
