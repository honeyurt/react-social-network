import axios from 'axios';
import { NewsResponse } from '../types/news/news-response';

const API_URL = 'https://newsapi.org/v2/top-headlines?';
const API_KEY = process.env.REACT_APP_NEWS_ALI_KEY;

interface IApiNews {
  /**
   * Получение списка новостей по категории
   */
  getNewsByCategory(category: string): Promise<NewsResponse>;
}

class ApiNews implements IApiNews {
  getNewsByCategory(category: string): Promise<NewsResponse> {
    return axios.get(`${API_URL}country=us&category=${category}&apiKey=${API_KEY}`);
  }
}

const apiNews = new ApiNews();

export { apiNews };
