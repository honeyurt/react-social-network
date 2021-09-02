import { Dispatch } from 'redux';
import { instance } from '../../API/api';
import { AuthAction, AuthActionTypes } from '../../types/auth';

export const setAuth = (
  userId: number | null,
  login: string | null,
  email: string | null,
  isAuth: boolean,
  error?: string,
) => ({
  type: AuthActionTypes.AUTH,
  payload: { userId, login, email, isAuth, error },
});

export const getAuth = () => async (dispatch: Dispatch<AuthAction>) => {
  try {
    const response = await instance.get('auth/me');
    const { id, login, email } = response.data.data;
    if (response.data.resultCode === 0) dispatch(setAuth(id, login, email, true));
  } catch (error: unknown) {
    if (error instanceof Error) console.log(error.message);
  }
};

export const setLogin =
  (email: string, password: string, rememberMe: boolean) =>
  async (dispatch: Dispatch<AuthAction | any>) => {
    try {
      const response = await instance.post('auth/login', {
        email,
        password,
        rememberMe,
      });
      const errorText = response.data.messages[0];

      if (response.data.resultCode === 0) dispatch(getAuth());
      else dispatch(setAuth(null, null, null, false, errorText));
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
