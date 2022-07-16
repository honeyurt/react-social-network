import React from 'react';
import { observer } from 'mobx-react';
import { Link } from 'react-router-dom';
import { UserObject } from '../../types/users/';
import { Button } from '../button';
import UserPhoto from '../../assets/images/user-photo.jpg';
import styles from './styles.module.css';

type UsersItemProps = {
  user: UserObject;
  follow: (userId: number) => void;
  unfollow: (userId: number) => void;
};

export const UserItem = observer(({ user, follow, unfollow }: UsersItemProps) => (
  <div key={user.id} className={styles.userItem}>
    <div className={styles.userLeft}>
      <Link to={`/profile/${user.id}`}>
        <img src={user.photos.small || UserPhoto} alt="UserPhoto" />
      </Link>
      {user.followed ? (
        <Button onClick={() => unfollow(user.id)}>Unfollow</Button>
      ) : (
        <Button onClick={() => follow(user.id)}>Follow</Button>
      )}
    </div>
    <div className={styles.userRight}>
      <nav>{user.name}</nav>
      <p>{user.status ? user.status : 'No status.'}</p>
    </div>
  </div>
));
