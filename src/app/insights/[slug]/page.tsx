import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import insights from '@/data/insights';
import { JsonLd, breadcrumbSchema } from '@/components/JsonLd';
import { ArrowLeft } from 'lucide-react';

export function generateStaticParams() {
  return insights.map(a => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = insights.find(a => a.slug === slug);
  if (!article) return {};
  return {
    title: `${article.title} | Cofreth Insights`,
    description: article.excerpt,
    alternates: { canonical: `/insights/${slug}` },
    openGraph: {
      title: article.title,
      description: article.excerpt,
      url: `https://www.cofreth.com.my/insights/${slug}`,
      images: [{ url: article.image }],
    },
  };
}

export default async function InsightDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = insights.find(a => a.slug === slug);
  if (!article) notFound();

  const paragraphs = article.body
    .split('\n\n')
    .filter(Boolean)
    .flatMap(block =>
      /^\d+\./.test(block.trim())
        ? block.split('\n').filter(Boolean)
        : [block]
    );

  return (
    <>
      <JsonLd data={breadcrumbSchema([
        { name: 'Home',     url: 'https://www.cofreth.com.my' },
        { name: 'Insights', url: 'https://www.cofreth.com.my/insights' },
        { name: article.title, url: `https://www.cofreth.com.my/insights/${slug}` },
      ])} />
      <Navbar />
      <main>
        {/* ── Hero ── */}
        <section className="relative h-[380px] md:h-[460px] overflow-hidden bg-[#1B4332]">
          <Image
            src={article.image}
            alt={article.title}
            fill
            priority
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1B4332]/90 via-[#1B4332]/40 to-transparent" />
          <div className="relative z-10 max-w-3xl mx-auto px-6 h-full flex flex-col justify-end pb-12">
            <Link href="/insights" className="inline-flex items-center gap-1.5 text-white/70 hover:text-white text-sm mb-6 transition-colors">
              <ArrowLeft size={14} /> Back to Insights
            </Link>
            <span className="inline-block bg-[#6BBD45] text-white text-xs font-semibold px-3 py-1 rounded-full mb-4 self-start">
              {article.category}
            </span>
            <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight">
              {article.title}
            </h1>
            <div className="flex items-center gap-3 mt-4 text-white/60 text-sm">
              <span>{article.author}</span>
              <span>·</span>
              <span>{article.date}</span>
            </div>
          </div>
        </section>

        {/* ── Body ── */}
        <div className="max-w-3xl mx-auto px-6 py-14">
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-10 text-justify font-medium border-l-4 border-[#6BBD45] pl-5">
            {article.excerpt}
          </p>

          <article className="prose prose-gray dark:prose-invert max-w-none">
            {paragraphs.map((para, i) =>
              /^\d+\./.test(para.trim()) ? (
                <p
                  key={i}
                  className={`text-gray-700 dark:text-gray-200 leading-relaxed pl-4 border-l-2 border-[#6BBD45]/40 text-base ${
                    paragraphs[i + 1] && !/^\d+\./.test(paragraphs[i + 1].trim())
                      ? 'mb-6'
                      : 'mb-2'
                  }`}
                >
                  {para}
                </p>
              ) : para.startsWith('**') && para.endsWith('**') ? (
                <h2
                  key={i}
                  className="text-xl font-bold text-gray-900 dark:text-white mt-10 mb-4"
                >
                  {para.replace(/\*\*/g, '')}
                </h2>
              ) : (
                <p
                  key={i}
                  className="text-gray-600 dark:text-gray-300 leading-relaxed mb-5 text-base text-justify"
                >
                  {para}
                </p>
              )
            )}
          </article>

          {/* ── Tags ── */}
          <div className="flex flex-wrap gap-2 mt-12">
            {article.tags.map(tag => (
              <span key={tag} className="text-xs bg-gray-100 dark:bg-white/10 text-gray-600 dark:text-gray-300 px-3 py-1 rounded-full">
                {tag}
              </span>
            ))}
          </div>

          {/* ── CTA ── */}
          <div className="mt-14 bg-gradient-to-br from-[#1B4332] to-[#2d6a4f] rounded-2xl p-8 text-white">
            <p className="text-[#6BBD45] font-semibold text-sm uppercase tracking-widest mb-2">Speak to Our Team</p>
            <h3 className="text-xl font-bold mb-2">Is your building ready for Total FM?</h3>
            <p className="text-white/70 mb-6 text-sm">
              Cofreth works with airports, hospitals, government buildings, and commercial towers across Malaysia. We would be glad to scope a programme for your asset.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-[#6BBD45] hover:bg-[#5aa836] text-white font-semibold px-5 py-2.5 rounded-full transition-colors text-sm">
              Get In Touch
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
