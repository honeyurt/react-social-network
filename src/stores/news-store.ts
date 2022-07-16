import { AxiosError } from 'axios';
import { action, observable, makeObservable, runInAction } from 'mobx';
import { createContext } from 'react';
import { apiNews } from '../api/news';
import { Articles } from '../types/news';
import { NewsResponse } from '../types/news/news-response';

class NewsStore {
  constructor() {
    makeObservable(this, {
      news: observable,
      errorMessage: observable,
      getNews: action,
    });
  }

  news: Articles[] = [];

  errorMessage = '';

  getNews = async (category: string) => {
    let response: NewsResponse;

    try {
      response = await apiNews.getNewsByCategory(category);
    } catch (err) {
      const error = err as AxiosError;
      if (error.response) {
        this.errorMessage = error.response.data.message;
      }
    } finally {
      runInAction(() => {
        if (response) {
          this.news = response.data.articles;
        }
      });
    }
  };
}

const context = createContext(new NewsStore());

export { context as NewsStoreContext };
