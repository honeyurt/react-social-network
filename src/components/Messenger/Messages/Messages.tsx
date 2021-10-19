import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteMessage } from '../../../redux/actions/dialogs';

import styles from './Messages.module.css';

interface Props {
  senderName: string;
  body: string;
  addedAt: Date;
  isViewed: boolean;
  id: string;
}

const Messages: React.FC<Props> = ({ senderName, body, addedAt, isViewed, id }) => {
  const dispatch = useDispatch();
  const onDeleteMessageHandler = (messageId: string) => {
    if (window.confirm('Are you sure you want to delete this message?'))
      dispatch(deleteMessage(messageId));
  };

  return (
    <>
      <div className={styles.messages__item}>
        <p className={styles.item__sender}>{senderName}:</p>
        <p className={styles.item__message} onDoubleClick={onDeleteMessageHandler.bind(null, id)}>
          {body}
        </p>
        <p className={styles.item__date}>{new Date(addedAt).toLocaleDateString()}</p>
        <nav className={isViewed ? '' : styles.item__notViewed}></nav>
      </div>
    </>
  );
};

export default Messages;
