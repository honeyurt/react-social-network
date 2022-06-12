import { Dispatch } from 'redux';
import { instance } from '../../api/api';
import { AuthAction, AuthActionTypes } from '../../types/auth';

export const setAuth = (
  userId: number | null,
  login: string | null,
  email: string | null,
  isAuth: boolean,
  error?: string,
  captcha?: string,
) => ({
  type: AuthActionTypes.AUTH,
  payload: { userId, login, email, isAuth, error, captcha },
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
  (email: string, password: string, rememberMe: boolean, captcha: string) =>
  async (dispatch: Dispatch<AuthAction | any>) => {
    try {
      const response = await instance.post('auth/login', {
        email,
        password,
        rememberMe,
        captcha,
      });
      const errorText = response.data.messages[0];

      if (response.data.resultCode === 0) dispatch(getAuth());
      if (response.data.resultCode === 1) dispatch(setAuth(null, null, null, false, errorText));
      if (response.data.resultCode === 10) dispatch(getCaptcha(errorText));
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

const getCaptcha = (errorText: string) => async (dispatch: Dispatch<AuthAction>) => {
  const response = await instance.get('/security/get-captcha-url');
  const captchaUrl = response.data.url;
  dispatch(setAuth(null, null, null, false, errorText, captchaUrl));
};
