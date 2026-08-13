import ThemesContent from '@/components/about/ThemesContent';

export const metadata = {
  title: "Corporate Themes — Cofreth's Annual Strategic Vision",
  description:
    "Cofreth's corporate themes from 2005 to 2020 — from 'Delivering High Performance' to 'Connect The Possibles' — reflecting the company's evolving culture and strategic direction.",
  alternates: { canonical: '/about/themes' },
  openGraph: { title: 'Corporate Themes | Cofreth Malaysia', url: 'https://www.cofreth.com.my/about/themes' },
};

export default function ThemesPage() {
  return <ThemesContent />;
}
