import React from 'react';
import { Link } from 'react-router-dom';
import { UsersType } from '../../../types/users';
import { Button } from '../../button';
import UserPhoto from '../../../assets/images/user-photo.jpg';
import styles from './User.module.css';

interface Props {
  user: UsersType;
  followingProgress: Array<number>;
  follow: (userId: number) => void;
  unfollow: (userId: number) => void;
}

const User: React.FC<Props> = ({ user, followingProgress, follow, unfollow }) => {
  return (
    <div key={user.id} className={styles.user__item}>
      <div className={styles.user__left}>
        <Link to={`/profile/${user.id}`}>
          <img src={user.photos.small || UserPhoto} alt="UserPhoto" />
        </Link>
        {user.followed ? (
          <Button
            disabled={followingProgress.some((id) => id === user.id)}
            onClick={unfollow.bind(null, user.id)}>
            Unfollow
          </Button>
        ) : (
          <Button
            disabled={followingProgress.some((id) => id === user.id)}
            onClick={follow.bind(null, user.id)}>
            Follow
          </Button>
        )}
      </div>
      <div className={styles.user__right}>
        <nav>{user.name}</nav>
        <p>{user.status ? user.status : 'No status.'}</p>
      </div>
    </div>
  );
};

export default User;
