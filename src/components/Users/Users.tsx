import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../redux/reducers';
import {
  setUsers,
  setCurrentPage,
  fetchingPage,
  setFollow,
  setUnfollow,
  toggleFollowingProgress,
} from '../../redux/actions/users';
import User from './User/User';
import Paginator from './Paginator/Paginator';

import Layout from '../../UI/Layout/Layout';
import UsersPageLoading from '../../UI/UsersPageLoading';
import styles from './Users.module.css';

const Users = () => {
  const dispatch = useDispatch();
  const { users, totalUsersCount, pageSize, currentPage, isFetching, followingProgress } =
    useSelector((state: RootState) => state.users);

  React.useEffect(() => {
    dispatch(setUsers(currentPage));
  }, [dispatch, currentPage]);

  const onPageClickHandler = (currentPage = 1) => {
    dispatch(fetchingPage());
    dispatch(setCurrentPage(currentPage));
  };

  const followHandler = (userId: number) => {
    dispatch(setFollow(userId));
    dispatch(toggleFollowingProgress(userId, true));
  };

  const unfollowHandler = (userId: number) => {
    dispatch(setUnfollow(userId));
    dispatch(toggleFollowingProgress(userId, true));
  };

  return (
    <Layout>
      <h2>Users</h2>
      <Paginator
        pageSize={pageSize}
        totalUsersCount={totalUsersCount}
        currentPage={currentPage}
        onPageClickHandler={onPageClickHandler}
      />
      <div className={styles.users}>
        {!isFetching
          ? users.map((user) => (
              <User
                key={user.id}
                user={user}
                followingProgress={followingProgress}
                follow={followHandler}
                unfollow={unfollowHandler}
              />
            ))
          : Array(10)
              .fill(0)
              .map((_, index) => (
                <div className={styles.user__item} key={index}>
                  <UsersPageLoading />
                </div>
              ))}
      </div>
    </Layout>
  );
};

export default Users;
