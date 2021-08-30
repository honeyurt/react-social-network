import { combineReducers } from 'redux';
import { usersReducer } from './users';
import { profileReducer } from './profile';
import { authReducer } from './auth';

export const rootReducer = combineReducers({
  users: usersReducer,
  profile: profileReducer,
  auth: authReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
