export interface NewsState {
  items: Array<NewsType> | null;
}

type NewsType = {
  source: ArticlesSource;
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
};

type ArticlesSource = {
  id: string;
  name: string;
};

export enum NewsActionTypes {
  FIND_NEWS = 'FIND_NEWS',
}

interface FindNews {
  type: NewsActionTypes.FIND_NEWS;
  payload: Array<NewsType>;
}

export type NewsAction = FindNews;
