import { Dispatch } from 'redux';
import { instance } from '../../API/api';
import { AuthAction, AuthActionTypes } from '../../types/auth';

export const setAuth = (
  userId: number | null,
  login: string | null,
  email: string | null,
  isAuth: boolean,
) => ({
  type: AuthActionTypes.AUTH,
  payload: { userId, login, email, isAuth },
});

export const getAuth = () => async (dispatch: Dispatch<AuthAction>) => {
  try {
    const response = await instance.get('auth/me');
    const { id, login, email } = response.data.data;
    dispatch(setAuth(id, login, email, true));
  } catch (error: unknown) {
    if (error instanceof Error) console.log(error.message);
  }
};

export const setLogin =
  (email: string, password: string, rememberMe: boolean) => async (dispatch: Dispatch<any>) => {
    try {
      const response = await instance.post('auth/login', {
        email,
        password,
        rememberMe,
      });
      if (response.data.resultCode === 0) dispatch(getAuth());
    } catch (error: unknown) {
      if (error instanceof Error) console.log(error.message);
    }
  };

export const setLogout = () => async (dispatch: Dispatch<AuthAction>) => {
  try {
    const response = await instance.delete('auth/login');
    if (response.data.resultCode === 0) dispatch(setAuth(null, null, null, false));
  } catch (error: unknown) {
    if (error instanceof Error) console.log(error.message);
  }
};
