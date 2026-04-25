import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ClientelePage from '@/components/pages/ClientelePage';

export const metadata = { title: 'Our Clientele | Cofreth (M) Sdn Bhd' };
export default function Page() {
  return (
    <>
      <Navbar />
      <main><ClientelePage /></main>
      <Footer />
    </>
  );
}
