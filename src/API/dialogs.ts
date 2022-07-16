import { instance } from './api';
import {
  GetDialogsResponse,
  DialogWithUserResponse,
  GetNewMessagesCountResponse,
  SendMessageResponse,
} from '../types/dialogs/';

interface IApiDialogs {
  getDialogs(): Promise<GetDialogsResponse>;
  getMessagesByUserId(userId: string): Promise<DialogWithUserResponse>;
  deleteMessage(messageId: string): Promise<void>;
  sendMessage(userId: string, body: string): Promise<SendMessageResponse>;
  getNewMessagesCount(): Promise<GetNewMessagesCountResponse>;
  startMessaging(userId: number): Promise<void>;
}

class ApiDialogs implements IApiDialogs {
  getDialogs(): Promise<GetDialogsResponse> {
    return instance.get('/dialogs');
  }

  getMessagesByUserId(userId: string): Promise<DialogWithUserResponse> {
    return instance.get(`/dialogs/${userId}/messages`);
  }

  deleteMessage(messageId: string): Promise<void> {
    return instance.delete(`/dialogs/messages/${messageId}`);
  }

  sendMessage(userId: string, body: string): Promise<SendMessageResponse> {
    return instance.post(`/dialogs/${userId}/messages`, { body });
  }

  getNewMessagesCount(): Promise<GetNewMessagesCountResponse> {
    return instance.get('/dialogs/messages/new/count');
  }

  startMessaging(userId: number): Promise<void> {
    return instance.put(`/dialogs/${userId}`);
  }
}

const apiDialogs = new ApiDialogs();

export { apiDialogs };
