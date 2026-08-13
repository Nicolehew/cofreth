import CSRContent from '@/components/about/CSRContent';

export const metadata = {
  title: 'CSR — Community, Environment & Sustainable Development',
  description:
    "Cofreth CSR: annual 'Save a Life' blood donation drives, Green Finger Day (170 trees planted), orphanage support and alignment with all 17 UN Sustainable Development Goals.",
  alternates: { canonical: '/about/csr' },
  openGraph: { title: 'Corporate Social Responsibility | Cofreth Malaysia', url: 'https://www.cofreth.com.my/about/csr' },
};

export default function CSRPage() {
  return <CSRContent />;
}
