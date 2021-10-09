import { ProfilePhotosType } from './profile';

export type UsersType = {
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
  followingProgress: Array<number>;
  term: string;
  friend: boolean | null;
}

export enum UsersActionTypes {
  FOLLOW = 'FOLLOW',
  UNFOLLOW = 'UNFOLLOW',
  SET_USERS = 'SET_USERS',
  SET_CURRENT_PAGE = 'SET_CURRENT_PAGE',
  SET_USERS_COUNT = 'SET_USERS_COUNT',
  IS_FETCHING = 'IS_FETCHING',
  TOGGLE_FOLLOWING_PROGRESS = 'TOGGLE_FOLLOWING_PROGRESS',
  USERS_FILTER = 'USERS_FILTER',
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

interface ToggleFollowingProgress {
  type: UsersActionTypes.TOGGLE_FOLLOWING_PROGRESS;
  userId: number;
  isFetching: boolean;
}

interface UsersFilter {
  type: UsersActionTypes.USERS_FILTER;
  term: string;
  friend: boolean | null;
}

export type UsersAction =
  | FollowSuccess
  | UnfollowSuccess
  | SetUsers
  | SetCurrentPage
  | SetUsersCount
  | IsFetching
  | ToggleFollowingProgress
  | UsersFilter;
