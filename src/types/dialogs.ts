import { ProfilePhotosType } from './profile';

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
  photos: ProfilePhotosType;
};

export interface DialogsState {
  dialogs: Array<DialogsType>;
  dialogList: Array<DialogListType> | null;
  newMessagesCount: number;
  isLoaded: boolean;
}

export enum DialogsActionTypes {
  GET_DIALOGS = 'GET_DIALOGS',
  GET_DIALOG_LIST = 'GET_DIALOG_LIST',
  SEND_MESSAGE = 'SEND_MESSAGE',
  GET_NEW_MESSAGES_COUNT = 'GET_NEW_MESSAGES_COUNT',
  UPDATE_MESSAGES_COUNTER = 'UPDATE_MESSAGES_COUNT',
  START_MESSAGING = 'START_MESSAGING',
  IS_LOADED = 'IS_LOADED',
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

interface UpdateMessagesCounter {
  type: DialogsActionTypes.UPDATE_MESSAGES_COUNTER;
  counter: number;
}

interface StartMessaging {
  type: DialogsActionTypes.START_MESSAGING;
  id: string;
}

interface IsLoaded {
  type: DialogsActionTypes.IS_LOADED;
}

export type DialogsAction =
  | GetDialogs
  | GetDialogList
  | SendMessage
  | GetNewMessagesCount
  | StartMessaging
  | UpdateMessagesCounter
  | IsLoaded;
