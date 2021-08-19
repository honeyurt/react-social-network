import { UsersState, UsersAction, UsersActionTypes } from '../../types/users';

const initialState: UsersState = {
  users: [],
  pageSize: 10,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: true,
  usersFollowing: [],
};

export const usersReducer = (state = initialState, action: UsersAction): UsersState => {
  switch (action.type) {
    case UsersActionTypes.FOLLOW:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userId) {
            return {
              ...user,
              followed: true,
            };
          }
          return user;
        }),
      };
    case UsersActionTypes.UNFOLLOW:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userId) {
            return {
              ...user,
              followed: false,
            };
          }
          return user;
        }),
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
    default:
      return state;
  }
};
