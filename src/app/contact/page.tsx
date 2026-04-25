import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactPage from '@/components/pages/ContactPage';

export const metadata = { title: 'Contact Us | Cofreth (M) Sdn Bhd' };
export default function Page() {
  return (
    <>
      <Navbar />
      <main><ContactPage /></main>
      <Footer />
    </>
  );
}
