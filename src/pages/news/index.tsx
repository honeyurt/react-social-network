import React from 'react';
import { useNews } from '../../hooks/use-news';
import { withAuthRedirect } from '../../hoc/with-auth-redirect';
import { NewsList } from './components/news-list';
import { PageLayout } from '../../components/page-layout';
import Button from '../../UI/Button/Button';
import styles from './styles.module.css';

const CATEGORIES = ['Business', 'Science', 'Sports', 'Technology'];

const NewsPage = () => {
  const { isLoading, getNewsByCategory, news, errorMessage, hasQuery } = useNews();

  // TODO: add spinner ?
  if (isLoading) {
    return <div>loading</div>;
  }

  return (
    <PageLayout title="News">
      <div className={styles.buttons}>
        {CATEGORIES.map((category) => (
          <Button key={category} onClick={() => getNewsByCategory(category)}>
            {category}
          </Button>
        ))}
      </div>
      {hasQuery && <NewsList news={news} errorMessage={errorMessage} />}
    </PageLayout>
  );
};

export const NewsPageView = withAuthRedirect(NewsPage);
