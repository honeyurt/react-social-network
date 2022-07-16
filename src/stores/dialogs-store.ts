import { action, observable, makeObservable, runInAction } from 'mobx';
import { createContext } from 'react';
import { apiDialogs } from '../api/dialogs';
import {
  GetDialogsResponse,
  DialogObject,
  DialogWithUserObject,
  DialogWithUserResponse,
  GetNewMessagesCountResponse,
  SendMessageResponse,
} from '../types/dialogs/';

class DialogsStore {
  constructor() {
    makeObservable(this, {
      dialogs: observable.ref,
      messages: observable,
      newMessagesCount: observable,
      getDialogs: action,
      getMessagesByUserId: action,
      getNewMessagesCount: action,
      deleteMessage: action,
      sendMessage: action,
      startMessaging: action,
    });
  }

  dialogs: DialogObject[] = [];
  messages: DialogWithUserObject[] = [];
  newMessagesCount = 0;

  getDialogs = async () => {
    let response: GetDialogsResponse;

    try {
      response = await apiDialogs.getDialogs();
    } finally {
      runInAction(() => {
        this.dialogs = response.data;
      });
    }
  };

  getMessagesByUserId = async (userId: string) => {
    let response: DialogWithUserResponse;

    try {
      response = await apiDialogs.getMessagesByUserId(userId);
    } finally {
      runInAction(() => {
        this.messages = response.data.items;
      });
    }
  };

  getNewMessagesCount = async () => {
    let response: GetNewMessagesCountResponse;

    try {
      response = await apiDialogs.getNewMessagesCount();
    } finally {
      runInAction(() => {
        this.newMessagesCount = response.data;
      });
    }
  };

  deleteMessage = async (messageId: string) => {
    const messagesCopy = [...this.messages];
    const filteredMessages = messagesCopy.filter(({ id }) => id !== messageId);

    try {
      await apiDialogs.deleteMessage(messageId);
    } finally {
      runInAction(() => {
        this.messages = filteredMessages;
      });
    }
  };

  sendMessage = async (userId: string, message: string) => {
    let response: SendMessageResponse;

    try {
      response = await apiDialogs.sendMessage(userId, message);
    } finally {
      runInAction(() => {
        if (response) {
          const {
            data: {
              data: { message },
            },
          } = response;
          this.messages = [...this.messages, message];
        }
      });
    }
  };

  startMessaging = (userId: number) => apiDialogs.startMessaging(userId);
}

const context = createContext(new DialogsStore());

export { context as DialogsStoreContext };
