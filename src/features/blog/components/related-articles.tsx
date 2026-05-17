import type { Article } from "../types/article.type";
import { ArticleList } from "./article-list";
export function RelatedArticles({ articles }: { articles: Article[] }) { return <section className="mt-16"><p className="text-sm font-black uppercase tracking-[0.22em] text-green-700">Keep reading</p><h2 className="mt-2 text-3xl font-black text-zinc-950">Related Articles</h2><div className="mt-6"><ArticleList articles={articles.slice(0, 3)} /></div></section>; }
