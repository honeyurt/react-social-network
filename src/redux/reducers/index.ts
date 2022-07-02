import { combineReducers } from 'redux';
import { usersReducer } from './users';
import { profileReducer } from './profile';
import { dialogsReducer } from './dialogs';
import { chatReducer } from './chat';

export const rootReducer = combineReducers({
  users: usersReducer,
  profile: profileReducer,
  dialogs: dialogsReducer,
  chat: chatReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
