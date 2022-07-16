import { useContext } from 'react';
import { UsersStoreContext } from '../stores/users-store';

export const useUsers = () => {
  const {
    currentPage,
    users,
    totalUsersCount,
    followUser,
    unfollowUser,
    setCurrentPage,
    getUsers,
  } = useContext(UsersStoreContext);

  return {
    getUsers,
    users,
    totalUsersCount,
    followUser,
    unfollowUser,
    currentPage,
    setCurrentPage,
  };
};
