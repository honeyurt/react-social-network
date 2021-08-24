import { combineReducers } from 'redux';
import { usersReducer } from './users';
import { profileReducer } from './profile';

export const rootReducer = combineReducers({
  users: usersReducer,
  profile: profileReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
