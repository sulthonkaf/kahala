import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpenText, Mail, Sparkles } from "lucide-react";
import { Container } from "@/core/components/common/container";
import { PublicLayout } from "@/core/components/layout/public-layout";
import { formatDate } from "@/core/lib/date";
import { ArticleList } from "@/features/blog/components/article-list";
import { getArticles } from "@/features/blog/services/blog.service";

const topics = ["Healthy Guide", "Corporate", "Sweet Control", "Lifestyle", "Brand Experience"];

export default async function BlogPage() {
  const articles = await getArticles();
  const featured = articles.find((article) => article.isFeatured) ?? articles[0];
  const regularArticles = articles.filter((article) => article.id !== featured.id);

  return (
    <PublicLayout>
      <section className="overflow-hidden py-16 sm:py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div data-gsap-hero>
              <p className="inline-flex items-center gap-2 rounded-full bg-green-50 px-4 py-2 text-sm font-black text-green-800">
                <BookOpenText className="h-4 w-4" />
                Healthy Guide
              </p>
              <h1 className="mt-5 max-w-3xl text-3xl font-black leading-tight tracking-tight text-zinc-950 sm:text-5xl lg:text-6xl">
                Editorial sehat untuk snack, lifestyle, dan corporate wellness.
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-600">
                Baca panduan singkat tentang memilih fruit bowl, membuat sweet craving lebih mindful, dan menyiapkan
                snack kantor yang rapi serta mudah dipesan.
              </p>
              <div className="mt-8 flex flex-wrap gap-2">
                {topics.map((topic) => (
                  <span key={topic} className="rounded-full bg-white px-4 py-2 text-sm font-black text-zinc-700 shadow-sm">
                    {topic}
                  </span>
                ))}
              </div>
            </div>

            <Link
              href={`/blog/${featured.slug}`}
              className="group overflow-hidden rounded-[2.5rem] border border-green-950/10 bg-white shadow-2xl shadow-green-950/10"
              data-gsap="fade-up"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-green-50">
                {featured.coverImage ? (
                  <Image
                    src={featured.coverImage}
                    alt={featured.title}
                    fill
                    sizes="(min-width: 1024px) 52vw, 100vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                    priority
                  />
                ) : null}
                <div className="absolute inset-0 bg-gradient-to-t from-green-950/58 via-green-950/5 to-transparent" />
                <div className="absolute left-5 top-5 rounded-full bg-white/90 px-4 py-2 text-sm font-black text-green-800 backdrop-blur">
                  Featured guide
                </div>
              </div>
              <div className="p-6 sm:p-8">
                <p className="text-xs font-black uppercase tracking-[0.22em] text-orange-600">
                  {featured.category} - {formatDate(featured.publishedAt)}
                </p>
                <h2 className="mt-3 text-3xl font-black tracking-tight text-zinc-950 group-hover:text-green-800">
                  {featured.title}
                </h2>
                <p className="mt-3 text-sm leading-7 text-zinc-600">{featured.excerpt}</p>
                <p className="mt-6 inline-flex items-center gap-2 text-sm font-black text-orange-600">
                  Read featured article
                  <ArrowRight className="h-4 w-4" />
                </p>
              </div>
            </Link>
          </div>

          <div className="mt-16 grid gap-8 lg:grid-cols-[1fr_320px] lg:items-start">
            <div>
              <div className="mb-6 flex items-end justify-between gap-4">
                <div>
                  <p className="text-sm font-black uppercase tracking-[0.22em] text-green-700">Latest articles</p>
                  <h2 className="mt-2 text-3xl font-black tracking-tight text-zinc-950">Panduan terbaru</h2>
                </div>
              </div>
              <ArticleList articles={regularArticles} />
            </div>

            <aside className="grid gap-5">
              <div className="rounded-[2rem] bg-green-800 p-7 text-white shadow-2xl shadow-green-950/15" data-gsap="fade-up">
                <Sparkles className="h-9 w-9 text-yellow-300" />
                <h2 className="mt-5 text-2xl font-black tracking-tight">For smarter snacking.</h2>
                <p className="mt-3 text-sm leading-7 text-green-50/85">
                  Artikel dibuat untuk membantu pelanggan memilih menu dengan lebih yakin, bukan menggantikan konsultasi
                  kebutuhan order.
                </p>
              </div>
              <div className="rounded-[2rem] border border-green-100 bg-white p-7 shadow-sm" data-gsap="fade-up">
                <Mail className="h-8 w-8 text-orange-500" />
                <h2 className="mt-5 text-2xl font-black tracking-tight text-zinc-950">Healthy update</h2>
                <p className="mt-3 text-sm leading-7 text-zinc-600">
                  Newsletter UI siap disambungkan saat backend CRM atau email marketing sudah tersedia.
                </p>
                <div className="mt-5 rounded-full border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm text-zinc-400">
                  email@domain.com
                </div>
                <button className="mt-3 h-11 w-full rounded-full bg-orange-500 px-5 text-sm font-black text-white" type="button">
                  Subscribe
                </button>
              </div>
            </aside>
          </div>
        </Container>
      </section>
    </PublicLayout>
  );
}
