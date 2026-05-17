export type Article = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  publishedAt: string;
  readTime: string;
  coverImage?: string;
  author?: string;
  tags?: string[];
  isFeatured?: boolean;
};
