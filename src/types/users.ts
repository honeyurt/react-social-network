export interface UsersState {
  users: any[];
  pageSize: number;
  totalUsersCount: number;
  currentPage: number;
  isFetching: boolean;
  usersFollowing: any[];
}

export enum UsersActionTypes {
  FOLLOW = 'FOLLOW',
  UNFOLLOW = 'UNFOLLOW',
  SET_USERS = 'SET_USERS',
  SET_CURRENT_PAGE = 'SET_CURRENT_PAGE',
  SET_USERS_COUNT = 'SET_USERS_COUNT',
}

interface FollowSuccess {
  type: UsersActionTypes.FOLLOW;
  userId: number;
}

interface UnfollowSuccess {
  type: UsersActionTypes.UNFOLLOW;
  userId: number;
}

interface SetUsers {
  type: UsersActionTypes.SET_USERS;
  users: any[];
}

interface SetCurrentPage {
  type: UsersActionTypes.SET_CURRENT_PAGE;
  currentPage: number;
}

interface SetUsersCount {
  type: UsersActionTypes.SET_USERS_COUNT;
  count: number;
}

export type UsersAction =
  | FollowSuccess
  | UnfollowSuccess
  | SetUsers
  | SetCurrentPage
  | SetUsersCount;
