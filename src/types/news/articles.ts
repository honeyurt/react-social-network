import { ArticlesSource } from './articles-source';

export type Articles = {
  source: ArticlesSource;
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
};
