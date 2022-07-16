import { combineReducers } from 'redux';
import { chatReducer } from './chat';

export const rootReducer = combineReducers({
  chat: chatReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
