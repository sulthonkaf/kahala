import type { Article } from "../types/article.type";
import { ArticleList } from "./article-list";
export function RelatedArticles({ articles }: { articles: Article[] }) { return <section className="mt-16"><h2 className="text-2xl font-black text-zinc-950">Related Articles</h2><div className="mt-6"><ArticleList articles={articles} /></div></section>; }
