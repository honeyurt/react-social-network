import React from 'react';

import Button from '../../../UI/Button/Button';
import styles from './Paginator.module.css';

interface Props {
  totalUsersCount: number;
  pageSize: number;
  currentPage: number;
  onPageClickHandler: (page: number) => void;
  portionSize?: number;
}

const Paginator: React.FC<Props> = ({
  pageSize = 10,
  totalUsersCount,
  currentPage,
  onPageClickHandler,
  portionSize = 10,
}) => {
  const pagesCount = Math.ceil(totalUsersCount / pageSize);
  const pages: number[] = [];

  for (let i = 1; i < pagesCount; i++) {
    pages.push(i);
  }

  const portionCount = Math.ceil(pagesCount / portionSize);
  const [portionNumber, setPortionNumber] = React.useState<number>(1);

  const leftNumber = (portionNumber - 1) * portionSize + 1;
  const rightNumber = portionNumber * portionSize;

  React.useEffect(() => {
    setPortionNumber(Math.ceil(currentPage / portionSize));
  }, [currentPage, portionSize]);

  return (
    <div className={styles.pagination}>
      {portionNumber > 1 && (
        <Button onClick={() => setPortionNumber(portionNumber - 1)}>{'<<<'}</Button>
      )}

      {pages
        .filter((page) => page >= leftNumber && page <= rightNumber)
        .map((page) => (
          <span
            key={page}
            className={currentPage === page ? styles.selected : styles.notSelected}
            onClick={onPageClickHandler.bind(null, page)}>
            {page}
          </span>
        ))}
      {portionCount > portionNumber && (
        <Button onClick={() => setPortionNumber(portionNumber + 1)}>{'>>>'}</Button>
      )}
    </div>
  );
};

export default Paginator;
