import { combineReducers } from 'redux';
import { usersReducer } from './users';
import { profileReducer } from './profile';
import { authReducer } from './auth';
import { initReducer } from './init';
import { dialogsReducer } from './dialogs';
import { chatReducer } from './chat';

export const rootReducer = combineReducers({
  users: usersReducer,
  profile: profileReducer,
  auth: authReducer,
  init: initReducer,
  dialogs: dialogsReducer,
  chat: chatReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
