import { Dispatch } from 'redux';
import { ChatActionTypes, ChatMessagesType, ChatStatusType } from '../../types/chat';
import { ChatAPI } from '../../API/chatAPI';

const getMessages = (messages: ChatMessagesType[]) => ({
  type: ChatActionTypes.GET_MESSAGES,
  messages,
});

const updateStatus = (status: string) => ({
  type: ChatActionTypes.UPDATE_STATUS,
  status,
});

// ==============================================================================================

let _newMessageHandler: ((messages: ChatMessagesType[]) => void) | null = null;
const newMessageHandlerCreator = (dispatch: Dispatch) => {
  if (_newMessageHandler === null) {
    _newMessageHandler = (messages) => {
      dispatch(getMessages(messages));
    };
  }
  return _newMessageHandler;
};

let _statusChangedHandler: ((status: ChatStatusType) => void) | null = null;
const statusChangedHandlerCreator = (dispatch: Dispatch) => {
  if (_statusChangedHandler === null) {
    _statusChangedHandler = (status) => {
      dispatch(updateStatus(status));
    };
  }
  return _statusChangedHandler;
};

// ==============================================================================================

export const startListening = () => async (dispatch: Dispatch) => {
  ChatAPI.start();
  ChatAPI.subscribe('messages-received', newMessageHandlerCreator(dispatch));
  ChatAPI.subscribe('status-changed', statusChangedHandlerCreator(dispatch));
};

export const stopListening = () => async (dispatch: Dispatch) => {
  ChatAPI.unsubscribe('messages-received', newMessageHandlerCreator(dispatch));
  ChatAPI.unsubscribe('status-changed', statusChangedHandlerCreator(dispatch));
  ChatAPI.stop();
};

export const sendMessage = (message: string) => async () => {
  ChatAPI.sendMessage(message);
};
