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

export type UsersAction = FollowSuccess | UnfollowSuccess | SetUsers;
