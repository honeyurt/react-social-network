import React, { useEffect } from 'react';
import { Button } from '../button';
import styles from './styles.module.css';

type PaginationProps = {
  totalUsersCount: number;
  pageSize?: number;
  handlePageClick: (pageNumber: number) => void;
  portionSize?: number;
  currentPage: number;
};

export const Pagination = ({
  totalUsersCount,
  pageSize = 10,
  handlePageClick,
  portionSize = 10,
  currentPage,
}: PaginationProps) => {
  const pagesCount = Math.ceil(totalUsersCount / pageSize);
  const pages: number[] = [];

  for (let i = 1; i < pagesCount; i++) {
    pages.push(i);
  }

  const portionCount = Math.ceil(pagesCount / portionSize);
  const [portionNumber, setPortionNumber] = React.useState<number>(1);

  const leftNumber = (portionNumber - 1) * portionSize + 1;
  const rightNumber = portionNumber * portionSize;

  useEffect(() => {
    setPortionNumber(Math.ceil(currentPage / portionSize));
  }, [currentPage, portionSize]);

  return (
    <div className={styles.pagination}>
      {portionNumber > 1 && (
        <Button onClick={() => setPortionNumber(portionNumber - 1)}>{'<<<'}</Button>
      )}

      {pages
        .filter((pageNumber) => pageNumber >= leftNumber && pageNumber <= rightNumber)
        .map((pageNumber) => (
          <span
            key={pageNumber}
            className={currentPage === pageNumber ? styles.selected : styles.notSelected}
            onClick={() => handlePageClick(pageNumber)}>
            {pageNumber}
          </span>
        ))}

      {portionCount > portionNumber && (
        <Button onClick={() => setPortionNumber(portionNumber + 1)}>{'>>>'}</Button>
      )}
    </div>
  );
};
