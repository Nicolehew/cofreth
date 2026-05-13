import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CareersPage from '@/components/pages/CareersPage';

export const metadata = {
  title: 'Careers at Cofreth — Join Malaysia\'s FM Pioneer',
  description:
    'Build your career in facilities management, energy services and smart technology at Cofreth (M) Sdn Bhd — Malaysia\'s FM pioneer since 1986. View current openings in Subang Jaya, Selangor.',
  alternates: { canonical: '/careers' },
  openGraph: {
    title:       'Careers at Cofreth | Malaysia FM & Energy',
    description: 'Join Malaysia\'s leading FM and energy services company. Current openings in Subang Jaya.',
    url:         'https://www.cofreth.com.my/careers',
  },
};

export default function Careers() {
  return (<><Navbar /><main><CareersPage /></main><Footer /></>);
}
