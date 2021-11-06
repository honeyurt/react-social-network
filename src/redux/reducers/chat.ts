import { ChatState, ChatAction, ChatActionTypes } from '../../types/chat';

const initialState: ChatState = {
  messages: [],
  status: 'pending',
};

export const chatReducer = (state = initialState, action: ChatAction): ChatState => {
  switch (action.type) {
    case ChatActionTypes.GET_MESSAGES:
      if ([...state.messages].length === [...action.messages].length) return state;

      return {
        ...state,
        messages: [...state.messages, ...action.messages],
      };
    case ChatActionTypes.UPDATE_STATUS:
      return {
        ...state,
        status: action.status,
      };
    default:
      return state;
  }
};
