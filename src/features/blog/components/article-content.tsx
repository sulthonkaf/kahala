import type { Article } from "../types/article.type";
import Image from "next/image";
import { formatDate } from "@/core/lib/date";

export function ArticleContent({ article }: { article: Article }) {
  const paragraphs = article.content.split("\n\n");

  return (
    <article className="mx-auto max-w-4xl">
      <div className="text-center">
        <p className="text-sm font-black uppercase tracking-[0.22em] text-green-700">{article.category}</p>
        <h1 className="mx-auto mt-4 max-w-[18rem] break-words text-3xl font-black tracking-tight text-zinc-950 sm:max-w-4xl sm:text-5xl lg:text-6xl">
          {article.title}
        </h1>
        <p className="mx-auto mt-5 max-w-[18rem] text-lg leading-8 text-zinc-600 sm:max-w-2xl">{article.excerpt}</p>
        <p className="mt-5 text-sm font-bold text-zinc-400">
          {article.author ?? "Kahala Editorial"} - {formatDate(article.publishedAt)} - {article.readTime}
        </p>
      </div>
      {article.coverImage ? (
        <div className="relative mx-auto mt-10 aspect-[16/9] max-w-[18rem] overflow-hidden rounded-[2rem] bg-green-50 shadow-2xl shadow-green-950/10 sm:max-w-4xl">
          <Image src={article.coverImage} alt={article.title} fill sizes="(min-width: 1024px) 896px, 100vw" className="object-cover" priority />
        </div>
      ) : null}
      <div className="mx-auto mt-10 max-w-[18rem] space-y-6 sm:max-w-3xl">
        {paragraphs.map((paragraph) => (
          <p key={paragraph} className="text-lg leading-9 text-zinc-700">
            {paragraph}
          </p>
        ))}
      </div>
      {article.tags?.length ? (
        <div className="mx-auto mt-10 flex max-w-[18rem] flex-wrap gap-2 sm:max-w-3xl">
          {article.tags.map((tag) => (
            <span key={tag} className="rounded-full bg-green-50 px-3 py-1 text-xs font-black text-green-800">
              {tag}
            </span>
          ))}
        </div>
      ) : null}
    </article>
  );
}
