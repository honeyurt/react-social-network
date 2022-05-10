import { useLocation, useHistory } from 'react-router-dom';
import { useState, useContext, useEffect } from 'react';
import { NewsStoreContext } from '../stores/news-store';
import { NEWS_ROUTE } from '../pages/routes';

export const useNews = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { getNews, news, errorMessage } = useContext(NewsStoreContext);
  const { search } = useLocation();
  const history = useHistory();

  const getNewsByCategory = (category: string) => {
    setIsLoading(true);
    getNews(category).finally(() => setIsLoading(false));

    history.push(`${NEWS_ROUTE}?category=${category}`);
  };

  useEffect(() => {
    if (!isLoading && Boolean(search) && !news.length) {
      history.push(NEWS_ROUTE);
    }
  }, [history, isLoading, search, news.length]);

  return {
    /**
     * Флаг, показыващий загрузились ли новости
     */
    isLoading,

    /**
     * Флаг, показывающий есть ли query параметры
     */
    hasQuery: Boolean(search),

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
