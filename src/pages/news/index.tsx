import React from 'react';
import { useNews } from '../../hooks/use-news';
import { withAuthRedirect } from '../../hoc/with-auth-redirect';
import { NewsList } from './news-list';
import { PageLayout } from '../../components/page-layout';
import { Button } from '../../components/button';
import { Spinner } from '../../components/spinner';
import styles from './styles.module.css';

const CATEGORIES = ['Business', 'Science', 'Sports', 'Technology'];

const NewsPageView = () => {
  const { isLoading, getNewsByCategory, news, errorMessage, hasQuery } = useNews();

  return (
    <PageLayout title="News">
      <div className={styles.buttons}>
        {CATEGORIES.map((category) => (
          <Button key={category} onClick={() => getNewsByCategory(category)}>
            {category}
          </Button>
        ))}
      </div>
      {isLoading && <Spinner />}
      {hasQuery && !isLoading && <NewsList news={news} errorMessage={errorMessage} />}
    </PageLayout>
  );
};

export const NewsPage = withAuthRedirect(NewsPageView);
