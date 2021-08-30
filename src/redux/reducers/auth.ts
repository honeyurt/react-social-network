import { AuthState, AuthActionTypes, AuthAction } from '../../types/auth';

const initialState: AuthState = {
  userId: null,
  login: null,
  email: null,
  isAuth: false,
};

export const authReducer = (state = initialState, action: AuthAction): AuthState => {
  switch (action.type) {
    case AuthActionTypes.AUTH:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
