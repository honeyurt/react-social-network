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
  setFilter,
} from '../../redux/actions/users';
import User from './User/User';
import Paginator from './Paginator/Paginator';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { SearchUsersSchema, IFormInputs } from '../../utils/schemas/searchUsersSchema';

import Layout from '../../UI/Layout/Layout';
import Button from '../../UI/Button/Button';
import UsersPageLoading from '../../UI/UsersPageLoading';
import styles from './Users.module.css';

const Users = () => {
  const dispatch = useDispatch();
  const {
    users,
    totalUsersCount,
    pageSize,
    currentPage,
    isFetching,
    followingProgress,
    term,
    friend,
  } = useSelector((state: RootState) => state.users);

  React.useEffect(() => {
    dispatch(setUsers(currentPage, pageSize, term, friend));
  }, [dispatch, currentPage, pageSize, term, friend]);

  const form = useForm<IFormInputs>({
    mode: 'onChange',
    resolver: yupResolver(SearchUsersSchema),
  });

  const onSubmit = (data: IFormInputs) => {
    dispatch(fetchingPage());
    dispatch(setCurrentPage(1));

    if (data.type === 'Friends') dispatch(setFilter(data.name, true));
    else dispatch(setFilter(data.name, null));
  };

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
      <div className={styles.users__search}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <input type="text" placeholder="name" {...form.register('name')} />
          <select {...form.register('type')}>
            <option value="All">All</option>
            <option value="Friends">Friends</option>
          </select>
          <Button>Find</Button>
        </form>
      </div>
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
        {users.length === 0 && <p className={styles.user__notFound}>Users is not found.</p>}
      </div>
    </Layout>
  );
};

export default Users;
