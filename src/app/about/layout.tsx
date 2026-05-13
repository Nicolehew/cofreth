import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { AboutSidebar } from '@/components/about/AboutSidebar';
import { JsonLd, breadcrumbSchema } from '@/components/JsonLd';

// Shared breadcrumb root for all /about/* pages
const aboutBreadcrumb = breadcrumbSchema([
  { name: 'Home',  url: 'https://www.cofreth.com.my' },
  { name: 'About', url: 'https://www.cofreth.com.my/about' },
]);

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={aboutBreadcrumb} />
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
