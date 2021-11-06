import { ChatMessagesType, ChatStatusType, EventNamesTypes } from '../types/chat';

type MessagesReceivedType = (messages: ChatMessagesType[]) => void;
type StatusChangedType = (status: ChatStatusType) => void;

const subscribers = {
  'messages-received': [] as MessagesReceivedType[],
  'status-changed': [] as StatusChangedType[],
};

let socket: WebSocket | null = null;

const createSocket = () => {
  cleanUp();
  socket = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx');
  socket.addEventListener('message', messageHandler);
  socket.addEventListener('error', errorHandler);
  socket.addEventListener('open', openHandler);
  socket.addEventListener('close', closeHandler);
};

const openHandler = () => {
  subscribers['status-changed'].forEach((status) => status('ready'));
};

const closeHandler = () => {
  subscribers['status-changed'].forEach((status) => status('pending'));
  setTimeout(openHandler, 3000);
};

const messageHandler = (event: MessageEvent) => {
  const messages = JSON.parse(event.data);
  subscribers['messages-received'].forEach((sub) => sub(messages));
};

const errorHandler = () => {
  subscribers['status-changed'].forEach((status) => status('error'));
};

const cleanUp = () => {
  socket?.removeEventListener('message', messageHandler);
  socket?.removeEventListener('error', errorHandler);
  socket?.removeEventListener('open', openHandler);
  socket?.removeEventListener('close', closeHandler);
  socket?.close();
};

export const ChatAPI = {
  start() {
    createSocket();
  },

  stop() {
    subscribers['messages-received'] = [];
    subscribers['status-changed'] = [];
    cleanUp();
  },

  sendMessage(message: string) {
    socket?.send(message);
  },

  subscribe(eventName: EventNamesTypes, callback: MessagesReceivedType | StatusChangedType) {
    // @ts-ignore
    subscribers[eventName].push(callback);
  },

  unsubscribe(eventName: EventNamesTypes, callback: MessagesReceivedType | StatusChangedType) {
    // @ts-ignore
    subscribers[eventName] = subscribers[eventName].filter((sub) => sub !== callback);
  },
};
