import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProjectsPage from '@/components/pages/ProjectsPage';

export const metadata = { title: 'Project Highlights | Cofreth (M) Sdn Bhd' };
export default function Page() {
  return (
    <>
      <Navbar />
      <main><ProjectsPage /></main>
      <Footer />
    </>
  );
}
