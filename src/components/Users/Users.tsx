import React from 'react';
import { Link } from 'react-router-dom';
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
import UsersPageLoading from '../../UI/UsersPageLoading';

import styles from './Users.module.css';

import userWithoutPhoto from '../../assets/img/userWithoutPhoto.png';

const Users = () => {
  const dispatch = useDispatch();
  const { users, totalUsersCount, pageSize, currentPage, isFetching, followingProgress } =
    useSelector((state: RootState) => state.users);

  const pagesCount = Math.ceil(totalUsersCount / pageSize) / 100; // Divided by 100 because we get 1k+ pages and i don't know how to adaptive this now
  const pages: number[] = [];

  for (let i = 1; i < pagesCount; i++) {
    pages.push(i);
  }

  React.useEffect(() => {
    dispatch(setUsers(currentPage));
  }, [dispatch, currentPage]);

  const onPageClickHandler = (currentPage = 1) => {
    dispatch(fetchingPage());
    dispatch(setCurrentPage(currentPage));
  };

  const onFollowHandler = (userId: number) => {
    dispatch(setFollow(userId));
    dispatch(toggleFollowingProgress(userId, true));
  };

  const onUnfollowHandler = (userId: number) => {
    dispatch(setUnfollow(userId));
    dispatch(toggleFollowingProgress(userId, true));
  };

  return (
    <>
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
      <div className={styles.users}>
        {!isFetching
          ? users.map((user) => (
              <div key={user.id} className={styles.user__item}>
                <div className={styles.user__left}>
                  <Link to={`/profile/${user.id}`}>
                    <img
                      src={user.photos.small ? user.photos.small : userWithoutPhoto}
                      alt="UserPhoto"
                    />
                  </Link>
                  {user.followed ? (
                    <button
                      disabled={followingProgress.some((id) => id === user.id)}
                      onClick={onUnfollowHandler.bind(null, user.id)}>
                      Unfollow
                    </button>
                  ) : (
                    <button
                      disabled={followingProgress.some((id) => id === user.id)}
                      onClick={onFollowHandler.bind(null, user.id)}>
                      Follow
                    </button>
                  )}
                </div>
                <div className={styles.user__right}>
                  <nav>{user.name}</nav>
                  <p>{user.status ? user.status : 'No status.'}</p>
                </div>
              </div>
            ))
          : Array(10)
              .fill(0)
              .map((_, index) => (
                <div className={styles.user__item} key={index}>
                  <UsersPageLoading />
                </div>
              ))}
      </div>
    </>
  );
};

export default Users;
