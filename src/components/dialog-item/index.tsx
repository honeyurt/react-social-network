import React from 'react';
import { format } from 'date-fns';
import { useHistory } from 'react-router-dom';
import { DialogObject } from '../../types/dialogs/';
import UserPhoto from '../../assets/images/user-photo.jpg';
import styles from './styles.module.css';

type DialogItemProps = {
  dialog: DialogObject;
};

export const DialogItem = ({ dialog }: DialogItemProps) => {
  const {
    id,
    photos: { small },
    hasNewMessages,
    userName,
    lastUserActivityDate,
  } = dialog;
  const history = useHistory();

  return (
    <div className={styles.dialogItem} onClick={() => history.push(`/dialogs/${id}/messages`)}>
      <div className={styles.wrapper}>
        <div>
          <img
            src={small || UserPhoto}
            alt="ProfilePhoto"
            className={hasNewMessages ? styles.imageActive : ''}
          />
          <p>{userName}</p>
        </div>
        <p>Last active - {format(new Date(lastUserActivityDate), 'PPp')}</p>
      </div>
    </div>
  );
};
