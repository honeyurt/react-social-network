import React from 'react';

import styles from './Paginator.module.css';

interface Props {
  totalUsersCount: number;
  pageSize: number;
  currentPage: number;
  onPageClickHandler: (page: number) => void;
}

const Paginator: React.FC<Props> = ({
  pageSize = 10,
  totalUsersCount,
  currentPage,
  onPageClickHandler,
}) => {
  const pagesCount = Math.ceil(totalUsersCount / pageSize) / 100; // FIXME
  const pages: number[] = [];

  for (let i = 1; i < pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div className={styles.pagination}>
      {pages.map((page) => (
        <span
          key={page}
          className={currentPage === page ? styles.selected : styles.notSelected}
          onClick={onPageClickHandler.bind(null, page)}>
          {page}
        </span>
      ))}
    </div>
  );
};

export default Paginator;
