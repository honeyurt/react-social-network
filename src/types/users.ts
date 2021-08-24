import { ProfilePhotosType } from './profile';

type UsersType = {
  id: number;
  name: string;
  status: string;
  photos: ProfilePhotosType;
  followed: boolean;
};

export interface UsersState {
  users: Array<UsersType>;
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
  IS_FETCHING = 'IS_FETCHING',
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

interface IsFetching {
  type: UsersActionTypes.IS_FETCHING;
  isFetching: boolean;
}

export type UsersAction =
  | FollowSuccess
  | UnfollowSuccess
  | SetUsers
  | SetCurrentPage
  | SetUsersCount
  | IsFetching;
