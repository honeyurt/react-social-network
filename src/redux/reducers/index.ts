import { combineReducers } from 'redux';
import { dialogsReducer } from './dialogs';
import { chatReducer } from './chat';

export const rootReducer = combineReducers({
  dialogs: dialogsReducer,
  chat: chatReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
