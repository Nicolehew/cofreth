import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import NewsPage from '@/components/pages/NewsPage';

export const metadata = {
  title: 'News & Updates | FM & Energy Insights | Cofreth Malaysia',
  description:
    "Latest news, insights & announcements on FM, energy efficiency and green building from Cofreth — Malaysia's FM & energy services pioneer since 1986.",
  alternates: { canonical: '/news' },
  openGraph: {
    title:       'News & Updates | FM & Energy Insights | Cofreth Malaysia',
    description: "Latest FM & energy news, insights and announcements from Malaysia's FM pioneer since 1986.",
    url:         'https://www.cofreth.com.my/news',
  },
};
export default function Page() {
  return (
    <>
      <Navbar />
      <main><NewsPage /></main>
      <Footer />
    </>
  );
}
