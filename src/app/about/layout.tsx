import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { AboutSidebar } from '@/components/about/AboutSidebar';

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <div className="pt-20">
        <AboutSidebar>
          {children}
        </AboutSidebar>
      </div>
      <Footer />
    </>
  );
}
