import Link from "next/link";
import type { Article } from "../types/article.type";
import { formatDate } from "@/core/lib/date";
export function ArticleCard({ article }: { article: Article }) { return <Link href={`/blog/${article.slug}`} className="block rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"><p className="text-xs font-black uppercase tracking-wider text-emerald-700">{article.category}</p><h3 className="mt-3 text-xl font-black text-zinc-950">{article.title}</h3><p className="mt-2 text-sm leading-7 text-zinc-600">{article.excerpt}</p><p className="mt-5 text-xs font-bold text-zinc-400">{formatDate(article.publishedAt)} · {article.readTime}</p></Link>; }
