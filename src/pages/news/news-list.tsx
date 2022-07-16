import React from 'react';
import format from 'date-fns/format';
import { Articles } from '../../types/news';
import styles from './styles.module.css';

type NewsListProps = {
  news: Articles[];
  errorMessage?: string;
};

export const NewsList = ({ news, errorMessage }: NewsListProps) => {
  if (errorMessage) {
    return <div className={styles.error}>{errorMessage}</div>;
  }

  return (
    <div className={styles.news}>
      {news.map(({ urlToImage, author, publishedAt, title, description, url }) => (
        <div className={styles.item} key={title}>
          <div className={styles.itemTop}>
            {/* TODO: add image if article doesn't have it */}
            <img src={urlToImage} alt="newsPhoto" className={styles.image} />
            <div className={styles.topDescription}>
              <div className={styles.text}>{author ?? 'Unknown'}</div>
              <div className={styles.text}>{format(new Date(publishedAt), 'PPp')}</div>
            </div>
          </div>
          <div className={styles.itemBottom}>
            <h3>{title}</h3>
            <div className={styles.description}>{description}</div>
            <a href={url} target="_blank" rel="noreferrer" className={styles.link}>
              Read more..
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};
