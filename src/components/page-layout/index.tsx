import React from 'react';
import styles from './styles.module.css';

type PageLayoutProps = {
  children: React.ReactNode;
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
