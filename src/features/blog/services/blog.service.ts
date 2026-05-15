import type { Article } from "../types/article.type";
export const ARTICLES: Article[] = [
  { id: "1", slug: "cara-memilih-snack-sehat", title: "Cara Memilih Snack Sehat untuk Rutinitas Padat", excerpt: "Panduan praktis memilih snack yang lebih mindful tanpa mengorbankan rasa.", category: "Healthy Guide", publishedAt: "2026-05-01", readTime: "4 min", content: "Snack sehat yang baik tidak harus rumit. Fokus pada bahan, porsi, rasa, dan konsistensi kebiasaan harian." },
  { id: "2", slug: "ide-snack-untuk-meeting", title: "Ide Snack untuk Meeting dan Corporate Event", excerpt: "Pilihan snack yang rapi, praktis, dan tetap terlihat premium untuk acara kantor.", category: "Corporate", publishedAt: "2026-05-05", readTime: "3 min", content: "Untuk meeting, pilih snack yang mudah dibagikan, tidak messy, dan punya visual yang menarik." },
];
export async function getArticles() { return ARTICLES; }
export async function getArticleBySlug(slug: string) { return ARTICLES.find((a) => a.slug === slug) ?? null; }
