import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import insights from '@/data/insights';
import { JsonLd, breadcrumbSchema } from '@/components/JsonLd';

export const metadata = {
  title: 'Insights | FM, Energy & Sustainability in Malaysia | Cofreth',
  description:
    'Practical insights on facilities management, energy performance contracting, green buildings, and smart technology from Cofreth — Malaysia\'s leading integrated FM company.',
  alternates: { canonical: '/insights' },
  openGraph: {
    title: 'Insights | FM, Energy & Sustainability in Malaysia | Cofreth',
    description:
      'Expert perspectives on Total FM, energy efficiency, GBI certification, and smart building technology from Cofreth.',
    url: 'https://www.cofreth.com.my/insights',
  },
};

const CATEGORY_COLORS: Record<string, string> = {
  'Facilities Management': 'bg-[#6BBD45]/10 text-[#4a9f2e]',
  'Energy': 'bg-blue-50 text-blue-700',
  'Green Building': 'bg-emerald-50 text-emerald-700',
  'Smart Building': 'bg-purple-50 text-purple-700',
};

export default function InsightsPage() {
  const featured = insights.find(a => a.featured);
  const rest = insights.filter(a => !a.featured);

  return (
    <>
      <JsonLd data={breadcrumbSchema([
        { name: 'Home',     url: 'https://www.cofreth.com.my' },
        { name: 'Insights', url: 'https://www.cofreth.com.my/insights' },
      ])} />
      <Navbar />
      <main>
        {/* ── Hero / page header ── */}
        <section className="bg-gradient-to-br from-[#1B4332] to-[#2d6a4f] text-white py-20 px-6">
          <div className="max-w-5xl mx-auto">
            <p className="text-[#6BBD45] font-semibold text-sm uppercase tracking-widest mb-4">
              Cofreth Insights
            </p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight max-w-2xl">
              Expert Perspectives on the Built Environment
            </h1>
            <p className="mt-4 text-white/70 max-w-xl text-lg">
              Facilities management, energy performance, green buildings, and smart technology — explained by the team that has been doing it for 38 years.
            </p>
          </div>
        </section>

        <div className="max-w-5xl mx-auto px-6 py-16">
          {/* ── Featured article ── */}
          {featured && (
            <div className="mb-16">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#6BBD45] mb-6">
                Featured
              </p>
              <Link href={`/insights/${featured.slug}`} className="group grid md:grid-cols-2 gap-8 bg-white dark:bg-white/5 rounded-2xl overflow-hidden shadow-sm border border-gray-100 dark:border-white/10 hover:shadow-md transition-shadow">
                <div className="relative h-64 md:h-auto min-h-[280px]">
                  <Image
                    src={featured.image}
                    alt={featured.title}
                    fill
                    className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
                  />
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full mb-4 self-start ${CATEGORY_COLORS[featured.category] ?? 'bg-gray-100 text-gray-600'}`}>
                    {featured.category}
                  </span>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-[#6BBD45] transition-colors leading-snug mb-3">
                    {featured.title}
                  </h2>
                  <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed line-clamp-3">
                    {featured.excerpt}
                  </p>
                  <div className="mt-6 flex items-center gap-3 text-xs text-gray-400">
                    <span>{featured.author}</span>
                    <span>·</span>
                    <span>{featured.date}</span>
                  </div>
                </div>
              </Link>
            </div>
          )}

          {/* ── Article grid ── */}
          {rest.length > 0 && (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {rest.map(article => (
                <Link key={article.id} href={`/insights/${article.slug}`} className="group flex flex-col bg-white dark:bg-white/5 rounded-2xl overflow-hidden border border-gray-100 dark:border-white/10 shadow-sm hover:shadow-md transition-shadow">
                  <div className="relative h-48">
                    <Image src={article.image} alt={article.title} fill className="object-cover group-hover:scale-[1.02] transition-transform duration-500" />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full mb-3 self-start ${CATEGORY_COLORS[article.category] ?? 'bg-gray-100 text-gray-600'}`}>
                      {article.category}
                    </span>
                    <h3 className="font-bold text-gray-900 dark:text-white group-hover:text-[#6BBD45] transition-colors leading-snug mb-2">
                      {article.title}
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed line-clamp-3 flex-1">
                      {article.excerpt}
                    </p>
                    <p className="mt-4 text-xs text-gray-400">{article.date}</p>
                  </div>
                </Link>
              ))}
            </div>
          )}

          {/* ── CTA ── */}
          <div className="mt-20 text-center bg-[#1B4332]/5 dark:bg-[#6BBD45]/5 rounded-2xl p-10 border border-[#1B4332]/10 dark:border-[#6BBD45]/10">
            <p className="text-sm font-semibold text-[#6BBD45] uppercase tracking-widest mb-3">Get In Touch</p>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
              Ready to discuss your building?
            </h2>
            <p className="text-gray-500 dark:text-gray-400 mb-6 max-w-lg mx-auto">
              Cofreth's team works with property owners, developers, and government agencies across Malaysia. Let us know what you need.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-[#6BBD45] hover:bg-[#5aa836] text-white font-semibold px-6 py-3 rounded-full transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
