import { combineReducers } from 'redux';
import { usersReducer } from './users';
import { profileReducer } from './profile';
import { authReducer } from './auth';
import { initReducer } from './init';
import { videoReducer } from './video';

export const rootReducer = combineReducers({
  users: usersReducer,
  profile: profileReducer,
  auth: authReducer,
  init: initReducer,
  video: videoReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
