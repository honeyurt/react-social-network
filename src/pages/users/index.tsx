import React, { useState, useEffect } from 'react';
import { observer } from 'mobx-react';
import { withAuthRedirect } from '../../hoc/with-auth-redirect';
import { useUsers } from '../../hooks/user-users';
import { Spinner } from '../../components/spinner';
import { Button } from '../../components/button';
import { UserItem } from '../../components/user-item';
import { PageLayout } from '../../components/page-layout';
import { Pagination } from '../../components/pagination';
import styles from './styles.module.css';

const UsersPageView = observer(() => {
  const [input, setInput] = useState('');
  const [select, setSelect] = useState('All');
  const [loading, setLoading] = useState(true);
  const {
    users,
    getUsers,
    followUser,
    unfollowUser,
    totalUsersCount,
    currentPage,
    setCurrentPage,
  } = useUsers();
  const friend = select === 'Friends' ? true : undefined;

  const handleFind = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    getUsers({ page: 1, count: 10, term: input, friend });
  };

  const handlePageClick = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    getUsers({ page: pageNumber, count: 10, term: input, friend });
  };

  useEffect(() => {
    if (loading) {
      getUsers({ page: currentPage, count: 10, term: '' }).finally(() => setLoading(false));
    }
  }, [currentPage, getUsers, loading]);

  if (loading) {
    return <Spinner />;
  }

  return (
    <PageLayout title="Users">
      <div className={styles.usersSearch}>
        <form>
          <input onChange={(e) => setInput(e.target.value)} type="text" placeholder="name" />
          <select onChange={(e) => setSelect(e.target.value)}>
            <option value="All">All</option>
            <option value="Friends">Friends</option>
          </select>
          <Button onClick={(e) => handleFind(e)}>Find</Button>
        </form>
      </div>
      <Pagination
        currentPage={currentPage}
        totalUsersCount={totalUsersCount}
        handlePageClick={handlePageClick}
      />
      <div className={styles.users}>
        {users?.map((user) => (
          <UserItem key={user.id} user={user} follow={followUser} unfollow={unfollowUser} />
        ))}

        {!Boolean(users.length) && <p className={styles.userNotFound}>Users is not found.</p>}
      </div>
    </PageLayout>
  );
});

export const UsersPage = withAuthRedirect(UsersPageView);
