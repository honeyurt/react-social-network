import { createContext } from 'react';
import { action, observable, makeObservable, runInAction } from 'mobx';
import { apiUsers } from '../api/users';
import { UserObject, GetUsersRequest, GetUsersResponse } from '../types/users/';

class UsersStore {
  constructor() {
    makeObservable(this, {
      users: observable,
      totalUsersCount: observable.ref,
      currentPage: observable,
      getUsers: action,
      followUser: action,
      unfollowUser: action,
      setCurrentPage: action.bound,
    });
  }

  users: UserObject[] = [];
  totalUsersCount = 0;
  currentPage = 1;

  setCurrentPage = (pageNumber: number) => {
    this.currentPage = pageNumber;
  };

  getUsers = async (body: GetUsersRequest) => {
    let response: GetUsersResponse;

    try {
      response = await apiUsers.getUsers(body);
    } finally {
      runInAction(() => {
        this.users = response.data.items;
        this.totalUsersCount = response.data.totalCount;
      });
    }
  };

  followUser = async (userId: number) => {
    const usersCopy = [...this.users];
    const currentUsersIndex = usersCopy.findIndex(({ id }) => id === userId);

    try {
      await apiUsers.followUser(userId);
    } finally {
      this.users[currentUsersIndex].followed = true;
    }
  };

  unfollowUser = async (userId: number) => {
    const usersCopy = [...this.users];
    const currentUsersIndex = usersCopy.findIndex(({ id }) => id === userId);

    try {
      await apiUsers.unfollowUser(userId);
    } finally {
      this.users[currentUsersIndex].followed = false;
    }
  };
}

const context = createContext(new UsersStore());

export { context as UsersStoreContext };
