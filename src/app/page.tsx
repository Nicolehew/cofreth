import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import HomeAboutSnippet from '@/components/home/HomeAboutSnippet';
import HomeSME from '@/components/home/HomeSME';
import HomeVideo from '@/components/home/HomeVideo';
import HomeFirsts from '@/components/home/HomeFirsts';
import HomeServices from '@/components/home/HomeServices';
import HomeWhyUs from '@/components/home/HomeWhyUs';
import HomeAwards from '@/components/home/HomeAwards';
import HomeProjects from '@/components/home/HomeProjects';
import HomeNews from '@/components/home/HomeNews';
import HomeClientele from '@/components/home/HomeClientele';
import HomeCTA from '@/components/home/HomeCTA';

export const metadata = {
  title: 'Cofreth (M) Sdn Bhd — Total FM & Energy Services Malaysia',
  description: 'Malaysia\'s leading Facilities Management and Energy Services company since 1986. ISO 9001, 14001, 45001, 50001 & 41001 certified. 5× Frost & Sullivan Award winner. Serving airports, data centres, universities and landmark buildings.',
};

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <HomeAboutSnippet />
        <HomeSME />
        <HomeVideo />
        <HomeFirsts />
        <HomeServices />
        <HomeWhyUs />
        <HomeAwards />
        <HomeProjects />
        <HomeNews />
        <HomeClientele />
        <HomeCTA />
      </main>
      <Footer />
    </>
  );
}
