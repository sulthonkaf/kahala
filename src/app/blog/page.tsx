import { Container } from "@/core/components/common/container";
import { SectionHeading } from "@/core/components/common/section-heading";
import { PublicLayout } from "@/core/components/layout/public-layout";
import { ArticleList } from "@/features/blog/components/article-list";
import { getArticles } from "@/features/blog/services/blog.service";
export default async function BlogPage() { const articles = await getArticles(); return <PublicLayout><section className="py-20"><Container><SectionHeading eyebrow="Healthy Guide" title="Panduan snack sehat dan lifestyle." description="Artikel singkat untuk membantu pelanggan memilih snack yang lebih mindful." /><div className="mt-12"><ArticleList articles={articles} /></div></Container></section></PublicLayout>; }
