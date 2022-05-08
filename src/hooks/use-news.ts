import { useState, useContext } from 'react';
import { NewsStoreContext } from '../stores/news-store';

export const useNews = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { getNews, news, errorMessage } = useContext(NewsStoreContext);

  const getNewsByCategory = (category: string) => {
    setIsLoading(true);
    getNews(category).finally(() => setIsLoading(false));
  };

  return {
    /**
     * Флаг, показыващий загрузились ли новости
     */
    isLoading,

    /**
     * Массив новостей
     */
    news,

    /**
     * Функция для получения новостей
     */
    getNewsByCategory,

    /**
     * Текст ошибки если есть
     */
    errorMessage,
  };
};
