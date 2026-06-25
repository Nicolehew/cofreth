import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CareersPage from '@/components/pages/CareersPage';

export const metadata = {
  title: "Careers at Cofreth | Join Malaysia's FM & Energy Leader",
  description:
    'Explore career opportunities in FM, energy & smart technology at Cofreth Malaysia. Based in Subang Jaya, Selangor. Join our award-winning team.',
  alternates: { canonical: '/careers' },
  openGraph: {
    title:       "Careers at Cofreth | Join Malaysia's FM & Energy Leader",
    description: 'Explore career opportunities in FM, energy & smart technology at Cofreth Malaysia. Based in Subang Jaya, Selangor.',
    url:         'https://www.cofreth.com.my/careers',
  },
};

export default function Careers() {
  return (<><Navbar /><main><CareersPage /></main><Footer /></>);
}
