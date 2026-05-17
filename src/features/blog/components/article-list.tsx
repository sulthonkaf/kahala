import type { Article } from "../types/article.type";
import { ArticleCard } from "./article-card";
export function ArticleList({ articles }: { articles: Article[] }) { return <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">{articles.map((a) => <ArticleCard key={a.id} article={a} />)}</div>; }
