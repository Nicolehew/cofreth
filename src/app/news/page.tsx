import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import NewsPage from '@/components/pages/NewsPage';

export const metadata = { title: 'News & Events | Cofreth (M) Sdn Bhd' };
export default function Page() {
  return (
    <>
      <Navbar />
      <main><NewsPage /></main>
      <Footer />
    </>
  );
}
