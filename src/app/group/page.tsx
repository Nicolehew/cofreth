import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import GroupPage from '@/components/pages/GroupPage';

export const metadata = {
  title: 'Group of Companies — Cofreth Strategic Partners',
  description:
    'Cofreth Group of Companies and strategic partners — a network of specialist firms delivering comprehensive facilities management, energy, green building and technology solutions across Malaysia.',
  alternates: { canonical: '/group' },
  openGraph: {
    title:       'Group of Companies | Cofreth Malaysia',
    description: 'Cofreth\'s network of strategic partners delivering FM, energy and green building solutions.',
    url:         'https://www.cofreth.com.my/group',
  },
};

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
