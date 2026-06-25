import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProjectsPage from '@/components/pages/ProjectsPage';

export const metadata = {
  title: 'Project Portfolio | Cofreth FM & Energy Malaysia',
  description:
    '38+ years of landmark projects — KLIA2, Putrajaya ICC, KL Eco City, data centres, hospitals & universities. Malaysia\'s most experienced FM & energy company.',
  alternates: { canonical: '/projects' },
  openGraph: {
    title:       'Project Portfolio | Cofreth FM & Energy Malaysia',
    description: 'Landmark projects — KLIA2, Putrajaya ICC, KL Eco City, data centres, hospitals & universities across Malaysia.',
    url:         'https://www.cofreth.com.my/projects',
  },
};
export default function Page() {
  return (
    <>
      <Navbar />
      <main><ProjectsPage /></main>
      <Footer />
    </>
  );
}
