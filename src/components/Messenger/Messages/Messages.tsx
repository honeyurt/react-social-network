import React from 'react';

import styles from './Messages.module.css';

interface Props {
  senderName: string;
  body: string;
  addedAt: Date;
  isViewed: boolean;
}

const Messages: React.FC<Props> = ({ senderName, body, addedAt, isViewed }) => {
  return (
    <>
      <div className={styles.messages__item}>
        <p className={styles.item__sender}>{senderName}:</p>
        <p className={styles.item__message}>{body}</p>
        <p className={styles.item__date}>{new Date(addedAt).toLocaleDateString()}</p>
        <nav className={isViewed ? '' : styles.item__notViewed}></nav>
      </div>
    </>
  );
};

export default Messages;
