import Link from "next/link";
import Image from "next/image";
import type { Article } from "../types/article.type";
import { formatDate } from "@/core/lib/date";

export function ArticleCard({ article }: { article: Article }) {
  return (
    <Link
      href={`/blog/${article.slug}`}
      className="group block overflow-hidden rounded-[2rem] border border-green-950/10 bg-white shadow-sm transition hover:-translate-y-1 hover:border-orange-200 hover:shadow-2xl hover:shadow-green-950/10"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-green-50">
        {article.coverImage ? (
          <Image
            src={article.coverImage}
            alt={article.title}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition duration-700 group-hover:scale-105"
          />
        ) : null}
        <div className="absolute inset-0 bg-gradient-to-t from-green-950/45 via-transparent to-transparent" />
        <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-black text-green-800 backdrop-blur">
          {article.category}
        </span>
      </div>
      <div className="p-6">
        <p className="text-xs font-bold uppercase tracking-wider text-zinc-400">
          {formatDate(article.publishedAt)} - {article.readTime}
        </p>
        <h3 className="mt-3 text-xl font-black tracking-tight text-zinc-950 group-hover:text-green-800">{article.title}</h3>
        <p className="mt-3 text-sm leading-7 text-zinc-600">{article.excerpt}</p>
        <p className="mt-5 text-sm font-black text-orange-600">Read guide</p>
      </div>
    </Link>
  );
}
