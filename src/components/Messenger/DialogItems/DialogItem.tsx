import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './DialogItem.module.css';
import UserPhoto from '../../../assets/images/user-photo.jpg';

interface Props {
  id: number;
  photo: string | null;
  hasNewMessages: boolean;
  userName: string;
  onClick: (userID: number) => void;
}

const DialogItem: React.FC<Props> = ({ id, photo, hasNewMessages, userName, onClick }) => {
  return (
    <div className={styles.dialog__item}>
      <NavLink
        to={`/dialogs/${id}/messages`}
        activeClassName={styles.item__active}
        onClick={onClick.bind(null, id)}>
        <img
          src={photo || UserPhoto}
          alt="ProfilePhoto"
          className={hasNewMessages ? styles.image__active : ''}
        />
        <p>{userName}</p>
      </NavLink>
    </div>
  );
};

export default DialogItem;
