import React from 'react';
import styles from './styles.module.css';

type PageLayoutProps = {
  /**
   * Контент
   */
  children: React.ReactNode;

  /**
   * Заголовок страницы
   */
  title: string;
};

export const PageLayout = ({ children, title }: PageLayoutProps) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>{title}</div>
      <div>{children}</div>
    </div>
  );
};
