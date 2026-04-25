import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AwardsPage from '@/components/pages/AwardsPage';

export const metadata = { title: 'Awards & Recognition | Cofreth (M) Sdn Bhd' };

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <AwardsPage />
      </main>
      <Footer />
    </>
  );
}
