import React from 'react';

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

export default Profile;
