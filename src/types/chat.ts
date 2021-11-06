export type ChatMessagesType = {
  message: string;
  photo: string;
  userId: number;
  userName: string;
};

export type ChatStatusType = 'pending' | 'ready' | 'error';

export type EventNamesTypes = 'messages-received' | 'status-changed';

export interface ChatState {
  messages: Array<ChatMessagesType>;
  status: ChatStatusType;
}

export enum ChatActionTypes {
  GET_MESSAGES = 'GET_MESSAGES',
  UPDATE_STATUS = 'UPDATE_STATUS',
}

interface GetMessages {
  type: ChatActionTypes.GET_MESSAGES;
  messages: Array<ChatMessagesType>;
}

interface UpdateStatus {
  type: ChatActionTypes.UPDATE_STATUS;
  status: ChatStatusType;
}

export type ChatAction = GetMessages | UpdateStatus;
