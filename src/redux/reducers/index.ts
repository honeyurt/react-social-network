import { combineReducers } from 'redux';
import { usersReducer } from './users';
import { profileReducer } from './profile';
import { authReducer } from './auth';
import { initReducer } from './init';
import { videoReducer } from './video';
import { newsReducers } from './news';

export const rootReducer = combineReducers({
  users: usersReducer,
  profile: profileReducer,
  auth: authReducer,
  init: initReducer,
  video: videoReducer,
  news: newsReducers,
});

export type RootState = ReturnType<typeof rootReducer>;
