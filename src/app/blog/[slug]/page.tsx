import { notFound } from "next/navigation";
import { Container } from "@/core/components/common/container";
import { PublicLayout } from "@/core/components/layout/public-layout";
import { ArticleContent } from "@/features/blog/components/article-content";
import { RelatedArticles } from "@/features/blog/components/related-articles";
import { getArticleBySlug, getArticles } from "@/features/blog/services/blog.service";
export default async function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) { const { slug } = await params; const article = await getArticleBySlug(slug); if (!article) notFound(); const articles = await getArticles(); return <PublicLayout><section className="py-20"><Container><ArticleContent article={article} /><RelatedArticles articles={articles.filter((a) => a.slug !== slug)} /></Container></section></PublicLayout>; }
