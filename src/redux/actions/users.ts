import { Dispatch } from 'redux';
import { instance } from '../../API/api';
import { UsersAction, UsersActionTypes } from '../../types/users';

export const setUsers =
  (currentPage = 1, pageSize = 10) =>
  async (dispatch: Dispatch<UsersAction>) => {
    try {
      const response = await instance.get(`users?page=${currentPage}&count=${pageSize}`);
      dispatch({
        type: UsersActionTypes.SET_USERS,
        users: response.data.items,
      });
      dispatch({
        type: UsersActionTypes.SET_USERS_COUNT,
        count: response.data.totalCount,
      });
      dispatch({
        type: UsersActionTypes.IS_FETCHING,
        isFetching: false,
      });
    } catch (error: unknown) {
      if (error instanceof Error) console.log(error.message);
    }
  };

export const setCurrentPage = (pageNumber = 1) => ({
  type: UsersActionTypes.SET_CURRENT_PAGE,
  currentPage: pageNumber,
});

export const fetchingPage = () => ({
  type: UsersActionTypes.IS_FETCHING,
  isFetching: true,
});
