import { UsersType } from './users';

type DialogListItemType = {
  id: string;
  body: string;
  translatedBody: null;
  addedAt: Date;
  senderId: number;
  senderName: string;
  recipientId: number;
  viewed: boolean;
};

type DialogListType = {
  items: Array<DialogListItemType>;
  totalCount: number;
  error: string | null;
};

type DialogsType = {
  id: number;
  userName: string;
  hasNewMessages: boolean;
  lastDialogActivityDate: Date;
  lastUserActivityDate: Date;
  newMessagesCount: number;
};

export interface DialogsState {
  friends: Array<UsersType>;
  dialogs: Array<DialogsType>;
  dialogList: Array<DialogListType> | null;
  newMessagesCount: number;
}

export enum DialogsActionTypes {
  GET_FRIENDS = 'GET_FRIENDS',
  GET_DIALOGS = 'GET_DIALOGS',
  GET_DIALOG_LIST = 'GET_DIALOG_LIST',
  SEND_MESSAGE = 'SEND_MESSAGE',
  GET_NEW_MESSAGES_COUNT = 'GET_NEW_MESSAGES_COUNT',
}

interface GetFriends {
  type: DialogsActionTypes.GET_FRIENDS;
  friends: Array<UsersType>;
}

interface GetDialogs {
  type: DialogsActionTypes.GET_DIALOGS;
  dialogs: Array<DialogsType>;
}

interface GetDialogList {
  type: DialogsActionTypes.GET_DIALOG_LIST;
  items: DialogListType;
}

interface SendMessage {
  type: DialogsActionTypes.SEND_MESSAGE;
}

interface GetNewMessagesCount {
  type: DialogsActionTypes.GET_NEW_MESSAGES_COUNT;
  count: number;
}

export type DialogsAction =
  | GetFriends
  | GetDialogs
  | GetDialogList
  | SendMessage
  | GetNewMessagesCount;
