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
    } catch (error) {
      console.log(error);
    }
  };
