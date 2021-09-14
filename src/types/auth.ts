export interface AuthState {
  userId: number | null;
  login: string | null;
  email: string | null;
  isAuth: boolean;
  error?: string;
  captcha?: string;
}

export enum AuthActionTypes {
  AUTH = 'AUTH',
}

interface SetAuth {
  type: AuthActionTypes.AUTH;
  payload: AuthState;
}

export type AuthAction = SetAuth;
