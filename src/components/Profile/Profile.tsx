import React from 'react';
import AuthRedirect from '../../hoc/authRedirect';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import Posts from './Posts/Posts';

import styles from './Profile.module.css';

const Profile = () => {
  return (
    <section className={styles.profile}>
      <ProfileInfo />
      <Posts />
    </section>
  );
};

export default AuthRedirect(Profile);
