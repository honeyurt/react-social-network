import { useState, useContext, useEffect, useCallback } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { NewsStoreContext } from '../stores/news-store';
import { NEWS_ROUTE } from '../pages/routes';

export const useNews = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { getNews, news, errorMessage } = useContext(NewsStoreContext);
  const { search } = useLocation();
  const history = useHistory();
  const category = search.split('=').slice(1).join('');

  const getNewsByCategory = useCallback(
    (category: string) => {
      setIsLoading(true);
      getNews(category).finally(() => setIsLoading(false));

      history.push(`${NEWS_ROUTE}?category=${category}`);
    },
    [getNews, history],
  );

  useEffect(() => {
    if (!isLoading && Boolean(search) && !news.length) {
      getNewsByCategory(category);
    }
  }, [history, isLoading, search, news.length, getNewsByCategory, category]);

  return {
    isLoading,
    hasQuery: Boolean(search),
    news,
    getNewsByCategory,
    errorMessage,
  };
};
