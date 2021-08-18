import React from 'react';

import { AccountCircle, Mail, Settings, MusicNote, Announcement } from '@material-ui/icons/';

import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <section className={styles.navbar}>
      <ul className={styles.navbar__items}>
        <li className={styles.navbar__item}>
          <div className={styles.navbar__img}>
            <AccountCircle style={{ color: '#5181b8' }} />
          </div>
          <div className={styles.navbar__text}>My profile</div>
        </li>
        <li className={styles.navbar__item}>
          <div className={styles.navbar__img}>
            <Announcement style={{ color: '#5181b8' }} />
          </div>
          <div className={styles.navbar__text}>News</div>
        </li>
        <li className={styles.navbar__item}>
          <div className={styles.navbar__img}>
            <Mail style={{ color: '#5181b8' }} />
          </div>
          <div className={styles.navbar__text}>Messenger</div>
        </li>
        <li className={styles.navbar__item}>
          <div className={styles.navbar__img}>
            <MusicNote style={{ color: '#5181b8' }} />
          </div>
          <div className={styles.navbar__text}>Music</div>
        </li>
        <li className={styles.navbar__item}>
          <div className={styles.navbar__img}>
            <Settings style={{ color: '#5181b8' }} />
          </div>
          <div className={styles.navbar__text}>Settings</div>
        </li>
      </ul>
    </section>
  );
};

export default Navbar;
