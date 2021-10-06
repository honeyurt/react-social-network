export interface NewsState {
  items: Array<NewsType> | null;
  message: string;
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
  ERROR = 'ERROR',
}

interface FindNews {
  type: NewsActionTypes.FIND_NEWS;
  payload: Array<NewsType>;
}

interface Error {
  type: NewsActionTypes.ERROR;
  message: string;
}

export type NewsAction = FindNews | Error;
