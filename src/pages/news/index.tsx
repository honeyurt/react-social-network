import React from 'react';
import { useNews } from '../../hooks/use-news';
import Button from '../../UI/Button/Button';
import { NewsList } from './components/news-list';
import styles from './styles.module.css';

const CATEGORIES = ['Business', 'Science', 'Sports', 'Technology'];

export const NewsPage = () => {
  const { isLoading, getNewsByCategory, news, errorMessage } = useNews();

  // TODO: add spinner ?
  if (isLoading) {
    return <div>loading</div>;
  }

  return (
    // TODO: add new page layout
    <>
      <div className={styles.buttons}>
        {CATEGORIES.map((category) => (
          <Button key={category} onClick={() => getNewsByCategory(category)}>
            {category}
          </Button>
        ))}
      </div>
      <NewsList news={news} errorMessage={errorMessage} />
    </>
  );
};
