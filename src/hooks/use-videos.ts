import { useState, useContext, useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { VideosStoreContext } from '../stores/videos-store';
import { VIDEOS_ROUTE } from '../pages/routes';

export const useVideos = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { getVideos, videos } = useContext(VideosStoreContext);
  const { search } = useLocation();
  const history = useHistory();

  const getVideosByTitle = (title: string) => {
    setIsLoading(true);
    getVideos(title).finally(() => setIsLoading(false));

    history.push(`${VIDEOS_ROUTE}?title=${title}`);
  };

  useEffect(() => {
    if (!isLoading && Boolean(search) && !Boolean(videos?.items)) {
      history.push(VIDEOS_ROUTE);
    }
  }, [history, isLoading, search, videos]);

  return {
    /**
     * Флаг, показыващий загрузились ли видео
     */
    isLoading,

    /**
     * Флаг, показывающий есть ли query параметры
     */
    hasQuery: Boolean(search),

    /**
     * Список видео
     */
    videos,

    /**
     * Функция для получения видео по названию
     */
    getVideosByTitle,
  };
};
