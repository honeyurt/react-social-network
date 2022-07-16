import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { observer } from 'mobx-react';
import { useDialogs } from '../../hooks/use-dialogs';
import { Circles } from 'react-loader-spinner';
import { MessageForm } from '../message-form';
import { ArrowIcon } from './arrow-icon';
import { DIALOGS_ROUTE } from '../../pages/routes';
import styles from './styles.module.css';

type MessagesProps = {
  userId: string;
};

export const Messages = observer(({ userId }: MessagesProps) => {
  const [loading, setLoading] = useState(true);
  const { messages, getMessagesByUserId, deleteMessage } = useDialogs();
  const history = useHistory();

  const handleDelete = (messageId: string) => {
    if (window.confirm('Are you sure you want to delete this message?')) {
      deleteMessage(messageId);
    }
  };

  const goToDialogs = () => {
    history.push(DIALOGS_ROUTE);
  };

  useEffect(() => {
    getMessagesByUserId(userId).finally(() => setLoading(false));
  }, [getMessagesByUserId, userId]);

  if (loading) {
    return <Circles wrapperClass={styles.loader} color="#3498db" width={60} height={60} />;
  }

  return (
    <div className={styles.wrapper}>
      <ArrowIcon onClick={goToDialogs} />
      <div className={styles.content}>
        {messages?.map(({ senderName, body, addedAt, viewed, id }) => (
          <div className={styles.messagesItem} key={id}>
            <p className={styles.itemSender}>{senderName}:</p>
            <p className={styles.itemMessage} onDoubleClick={() => handleDelete(id)}>
              {body}
            </p>
            <p className={styles.itemDate}>{new Date(addedAt).toLocaleDateString()}</p>
            <nav className={viewed ? '' : styles.itemNotViewed}></nav>
          </div>
        ))}
      </div>
      <MessageForm userId={userId} />
    </div>
  );
});
