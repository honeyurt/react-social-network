import React, { useState } from 'react';
import { useDialogs } from '../../hooks/use-dialogs';
import { Button } from '../button';
import styles from './styles.module.css';

type MessageFormProps = {
  userId: string;
};

export const MessageForm = ({ userId }: MessageFormProps) => {
  const [message, setMessage] = useState('');
  const { sendMessage } = useDialogs();

  const handleSendMessage = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (Boolean(message.trim().length)) {
      sendMessage(userId, message);
      setMessage('');
    }
  };

  return (
    <div className={styles.messagesForm}>
      <form>
        <input
          onChange={(e) => setMessage(e.target.value)}
          type="text"
          value={message}
          placeholder="Write a message"
        />
        <Button onClick={(e) => handleSendMessage(e)} type="submit">
          Send
        </Button>
      </form>
    </div>
  );
};
