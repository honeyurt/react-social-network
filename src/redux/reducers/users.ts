import { UsersState, UsersAction, UsersActionTypes, UsersType } from '../../types/users';
import { updatedObjectInArray } from '../../utils/helper';

const initialState: UsersState = {
  users: [] as Array<UsersType>,
  pageSize: 10,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: true,
  followingProgress: [],
  term: '',
  friend: null,
};

export const usersReducer = (state = initialState, action: UsersAction): UsersState => {
  switch (action.type) {
    case UsersActionTypes.FOLLOW:
      return {
        ...state,
        users: updatedObjectInArray(state.users, action.userId, { followed: true }),
      };
    case UsersActionTypes.UNFOLLOW:
      return {
        ...state,
        users: updatedObjectInArray(state.users, action.userId, { followed: false }),
      };
    case UsersActionTypes.SET_USERS:
      return {
        ...state,
        users: [...action.users],
      };
    case UsersActionTypes.SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage,
      };
    case UsersActionTypes.SET_USERS_COUNT:
      return {
        ...state,
        totalUsersCount: action.count,
      };
    case UsersActionTypes.IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching,
      };
    case UsersActionTypes.TOGGLE_FOLLOWING_PROGRESS:
      return {
        ...state,
        followingProgress: action.isFetching
          ? [...state.followingProgress, action.userId]
          : state.followingProgress.filter((id) => id !== action.userId),
      };
    case UsersActionTypes.USERS_FILTER:
      return {
        ...state,
        term: action.term,
        friend: action.friend,
      };
    default:
      return state;
  }
};
