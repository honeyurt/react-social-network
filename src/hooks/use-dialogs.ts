import { useContext } from 'react';
import { DialogsStoreContext } from '../stores/dialogs-store';

export const useDialogs = () => {
  const {
    newMessagesCount,
    dialogs,
    messages,
    getNewMessagesCount,
    getDialogs,
    getMessagesByUserId,
    deleteMessage,
    sendMessage,
    startMessaging,
  } = useContext(DialogsStoreContext);

  return {
    getNewMessagesCount,
    getDialogs,
    getMessagesByUserId,
    startMessaging,
    deleteMessage,
    sendMessage,
    dialogs,
    newMessagesCount,
    messages,
  };
};
