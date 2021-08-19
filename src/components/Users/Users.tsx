import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../redux/reducers';
import { setUsers } from '../../redux/actions/users';

import styles from './Users.module.css';

import userWithoutPhoto from '../../assets/img/userWithoutPhoto.png';

const Users = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((state: RootState) => state.users);
  console.log(users);

  React.useEffect(() => {
    dispatch(setUsers());
  }, [dispatch]);

  return (
    <div className={styles.users}>
      {users &&
        users.map((user) => (
          <div key={user.id} className={styles.user__item}>
            <div className={styles.user__left}>
              <img src={user.photos.small ? user.photos.small : userWithoutPhoto} alt="UserPhoto" />
              <button>Follow</button>
            </div>
            <div className={styles.user__right}>
              <nav>{user.name}</nav>
              <p>{user.status ? user.status : 'No status.'}</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Users;
