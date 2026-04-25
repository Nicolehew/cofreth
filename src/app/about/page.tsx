import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AboutPage from '@/components/pages/AboutPage';

export const metadata = { title: 'About Us | Cofreth (M) Sdn Bhd', description: 'Learn about Cofreth — Malaysia\'s leading Total FM and Energy Services provider since 1986.' };

export default function About() {
  return (<><Navbar /><main><AboutPage /></main><Footer /></>);
}
