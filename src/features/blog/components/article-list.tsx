import type { Article } from "../types/article.type";
import { ArticleCard } from "./article-card";
export function ArticleList({ articles }: { articles: Article[] }) { return <div className="grid gap-5 md:grid-cols-2">{articles.map((a) => <ArticleCard key={a.id} article={a} />)}</div>; }
