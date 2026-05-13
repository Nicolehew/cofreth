import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProjectsPage from '@/components/pages/ProjectsPage';

export const metadata = {
  title: 'Project Highlights — Landmark FM & Energy Projects Malaysia',
  description:
    'Cofreth project portfolio: KLIA2, Putrajaya ICC, KL Eco City, data centres, hospitals, universities and more. 38+ years of landmark facilities management and energy projects across Malaysia.',
  alternates: { canonical: '/projects' },
  openGraph: {
    title:       'Project Highlights | Cofreth Malaysia',
    description: 'Landmark FM & energy projects — airports, data centres, hospitals and iconic buildings across Malaysia.',
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
