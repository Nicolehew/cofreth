import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import GroupPage from '@/components/pages/GroupPage';

export const metadata = {
  title: 'Group of Companies | Cofreth Strategic Ecosystem',
  description:
    "Cofreth's strategic partner network — BEST Energy, GIS-BIM, Archibus ASCHT & more. Delivering end-to-end FM & energy solutions across Malaysia.",
  alternates: { canonical: '/group' },
  openGraph: {
    title:       'Group of Companies | Cofreth Strategic Ecosystem',
    description: "Cofreth's strategic partner network delivering end-to-end FM, energy & green building solutions across Malaysia.",
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
