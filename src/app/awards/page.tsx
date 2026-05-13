import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AwardsPage from '@/components/pages/AwardsPage';

export const metadata = {
  title: 'Awards & Recognition — Frost & Sullivan, NEA & More',
  description:
    'Cofreth awards: 5× Frost & Sullivan Malaysia Excellence Award (2007–2017), National Energy Awards 1st Prize 2018, NEA EPC Champion 2021, ASEAN Energy Award and more. Malaysia\'s most decorated FM company.',
  alternates: { canonical: '/awards' },
  openGraph: {
    title:       'Awards & Recognition | Cofreth Malaysia',
    description: '5× Frost & Sullivan winner, NEA 1st Prize 2018, ASEAN Energy Award — Malaysia\'s most awarded FM company.',
    url:         'https://www.cofreth.com.my/awards',
  },
};

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
