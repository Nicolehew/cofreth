import ProcessesContent from '@/components/about/ProcessesContent';

export const metadata = {
  title: 'Our Processes — ISO Certified FM & Energy Delivery',
  description:
    'Cofreth service processes are certified to ISO 45001, 9001, 14001, 50001 & 41001 by SIRIM QAS. PDCA-driven delivery for Facilities Management and Energy Performance Contracting across Malaysia.',
  alternates: { canonical: '/about/processes' },
  openGraph: { title: 'Our Processes | Cofreth Malaysia', url: 'https://www.cofreth.com.my/about/processes' },
};

export default function ProcessesPage() {
  return <ProcessesContent />;
}
