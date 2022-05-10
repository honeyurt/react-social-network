import { action, observable, makeObservable, runInAction } from 'mobx';
import { createContext } from 'react';
import { apiNews } from '../API/news';
import { Articles } from '../types/news/articles';
import { NewsResponse } from '../types/news/news-response';

class NewsStore {
  constructor() {
    makeObservable(this, {
      news: observable,
      errorMessage: observable,
      getNews: action,
    });
  }

  /**
   * Список новостей
   */
  news: Articles[] = [];

  /**
   * Текст ошибки с бэка
   */
  errorMessage = '';

  getNews = async (category: string) => {
    let response: NewsResponse;

    try {
      response = await apiNews.getNewsByCategory(category);
      // TODO: FIXME
    } catch (error: any) {
      this.errorMessage = error.response.data.message;
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
