import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { JsonLd, breadcrumbSchema, COFRETH_ORG } from '@/components/JsonLd';
import news, { getArticleBySlug, getRelatedArticles } from '@/data/news';
import { Calendar, MapPin, Tag, ArrowLeft, ArrowRight } from 'lucide-react';

/* ── SSG: pre-render all known slugs at build time ── */
export function generateStaticParams() {
  return news.map(a => ({ slug: a.slug }));
}

/* ── Per-article metadata ── */
export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};

  return {
    title:       article.title,
    description: article.excerpt,
    alternates:  { canonical: `/news/${slug}` },
    openGraph: {
      type:        'article',
      title:       article.title,
      description: article.excerpt,
      url:         `https://www.cofreth.com.my/news/${slug}`,
      images:      [{ url: article.image, width: 1200, height: 630, alt: article.title }],
      publishedTime: article.isoDate,
      authors:     ['https://www.cofreth.com.my'],
      tags:        article.tags,
    },
  };
}

/* ── Page ── */
export default async function ArticlePage(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const related = getRelatedArticles(article.related);

  /* JSON-LD */
  const articleSchema = {
    '@context':     'https://schema.org',
    '@type':        'NewsArticle',
    headline:       article.title,
    description:    article.excerpt,
    image:          article.image,
    datePublished:  article.isoDate,
    dateModified:   article.isoDate,
    author: {
      '@type': 'Organization',
      name:    'Cofreth (M) Sdn Bhd',
      url:     'https://www.cofreth.com.my',
    },
    publisher:   COFRETH_ORG,
    url:         `https://www.cofreth.com.my/news/${slug}`,
    keywords:    article.tags.join(', '),
    articleSection: article.category,
    inLanguage:  'en-MY',
  };

  const crumbs = breadcrumbSchema([
    { name: 'Home', url: 'https://www.cofreth.com.my' },
    { name: 'News', url: 'https://www.cofreth.com.my/news' },
    { name: article.title, url: `https://www.cofreth.com.my/news/${slug}` },
  ]);

  /* Body paragraphs */
  const paragraphs = article.body.split('\n\n').filter(Boolean);

  return (
    <>
      <JsonLd data={articleSchema} />
      <JsonLd data={crumbs} />
      <Navbar />

      <main className="bg-white dark:bg-[#0d1117] min-h-screen">

        {/* Hero image */}
        <div className="relative h-[420px] md:h-[520px] w-full overflow-hidden">
          <Image
            src={article.image}
            alt={article.title}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(4,12,8,0.92) 0%, rgba(4,12,8,0.40) 60%, transparent 100%)' }} />

          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="absolute top-24 left-0 right-0 px-6 md:px-12">
            <ol className="flex items-center gap-2 text-sm">
              <li><Link href="/" className="text-white/60 hover:text-white transition-colors">Home</Link></li>
              <li className="text-white/30">/</li>
              <li><Link href="/news" className="text-white/60 hover:text-white transition-colors">News</Link></li>
              <li className="text-white/30">/</li>
              <li className="text-white/80 truncate max-w-[200px]">{article.title}</li>
            </ol>
          </nav>

          {/* Category + title overlay */}
          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-12 pb-10">
            <span className="inline-block bg-[#6BBD45] text-white font-bold px-3 py-1 rounded-full mb-4 text-xs">
              {article.category}
            </span>
            <h1 className="text-3xl md:text-5xl font-black text-white leading-tight max-w-4xl" style={{ textShadow: '0 2px 20px rgba(0,0,0,0.5)' }}>
              {article.title}
            </h1>
          </div>
        </div>

        {/* Article body */}
        <div className="max-w-4xl mx-auto px-6 md:px-12 py-12">

          {/* Meta row */}
          <div className="flex flex-wrap items-center gap-5 mb-10 pb-8 border-b border-gray-100 dark:border-gray-800">
            <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-sm">
              <Calendar size={15} className="text-[#6BBD45]" />
              <time dateTime={article.isoDate}>{article.date}</time>
            </div>
            <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-sm">
              <MapPin size={15} className="text-[#6BBD45]" />
              {article.location}
            </div>
            <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-sm">
              <Tag size={15} className="text-[#6BBD45]" />
              {article.tags.slice(0, 3).join(' · ')}
            </div>
          </div>

          {/* Excerpt / lead */}
          <p className="text-[#1B3A2D] dark:text-[#6BBD45] font-semibold leading-relaxed mb-8 text-lg">
            {article.excerpt}
          </p>

          {/* Body paragraphs */}
          <article className="prose prose-gray dark:prose-invert max-w-none">
            {paragraphs.map((para, i) => (
              <p key={i} className="text-gray-600 dark:text-gray-300 leading-relaxed mb-5 text-base">
                {para}
              </p>
            ))}
          </article>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-10 pt-8 border-t border-gray-100 dark:border-gray-800">
            {article.tags.map(tag => (
              <span key={tag} className="px-3 py-1 bg-gray-100 dark:bg-white/10 text-gray-600 dark:text-gray-300 rounded-full text-sm">
                #{tag}
              </span>
            ))}
          </div>

          {/* Back + CTA */}
          <div className="flex items-center justify-between mt-10 pt-8 border-t border-gray-100 dark:border-gray-800">
            <Link href="/news" className="flex items-center gap-2 text-[#6BBD45] font-semibold hover:underline text-sm">
              <ArrowLeft size={16} /> All News
            </Link>
            <Link href="/contact" className="flex items-center gap-2 bg-[#6BBD45] hover:bg-[#5aa838] text-white font-semibold px-6 py-2.5 rounded-full transition-all text-sm">
              Enquire Now <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        {/* Related articles */}
        {related.length > 0 && (
          <section className="bg-gray-50 dark:bg-[#111827] border-t border-gray-100 dark:border-gray-800 py-14">
            <div className="max-w-4xl mx-auto px-6 md:px-12">
              <h2 className="font-black text-[#1B3A2D] dark:text-white mb-8 text-xl">Related Articles</h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {related.map(rel => (
                  <Link key={rel.slug} href={`/news/${rel.slug}`}
                    className="group bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 rounded-2xl overflow-hidden hover:border-[#6BBD45]/40 hover:shadow-md transition-all">
                    <div className="relative h-40 overflow-hidden">
                      <Image src={rel.image} alt={rel.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 640px) 100vw, 50vw" />
                    </div>
                    <div className="p-5">
                      <span className="text-[#6BBD45] font-bold text-xs">{rel.category.toUpperCase()}</span>
                      <h3 className="font-black text-[#1B3A2D] dark:text-white mt-1 mb-2 leading-snug group-hover:text-[#6BBD45] transition-colors text-base">{rel.title}</h3>
                      <p className="text-gray-500 dark:text-gray-400 leading-relaxed line-clamp-2 text-sm">{rel.excerpt}</p>
                      <span className="flex items-center gap-1 text-[#6BBD45] font-semibold mt-3 text-sm">
                        Read more <ArrowRight size={13} />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

      </main>
      <Footer />
    </>
  );
}
