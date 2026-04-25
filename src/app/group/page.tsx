import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import GroupPage from '@/components/pages/GroupPage';

export const metadata = { title: 'Group of Companies | Cofreth (M) Sdn Bhd' };

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <GroupPage />
      </main>
      <Footer />
    </>
  );
}
