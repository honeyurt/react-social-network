import React from 'react';
import { NavLink } from 'react-router-dom';

import {
  AccountCircle,
  Mail,
  Settings,
  MusicNote,
  Announcement,
  People,
} from '@material-ui/icons/';

import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <section className={styles.navbar}>
      <ul className={styles.navbar__items}>
        <li>
          <NavLink
            to="/profile"
            activeClassName={styles.navbar__active}
            className={styles.navbar__item}>
            <div className={styles.navbar__img}>
              <AccountCircle style={{ color: '#5181b8' }} />
            </div>
            <div className={styles.navbar__text}>My profile</div>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/news"
            activeClassName={styles.navbar__active}
            className={styles.navbar__item}>
            <div className={styles.navbar__img}>
              <Announcement style={{ color: '#5181b8' }} />
            </div>
            <div className={styles.navbar__text}>News</div>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/messages"
            activeClassName={styles.navbar__active}
            className={styles.navbar__item}>
            <div className={styles.navbar__img}>
              <Mail style={{ color: '#5181b8' }} />
            </div>
            <div className={styles.navbar__text}>Messenger</div>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/users"
            activeClassName={styles.navbar__active}
            className={styles.navbar__item}>
            <div className={styles.navbar__img}>
              <People style={{ color: '#5181b8' }} />
            </div>
            <div className={styles.navbar__text}>Users</div>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/music"
            activeClassName={styles.navbar__active}
            className={styles.navbar__item}>
            <div className={styles.navbar__img}>
              <MusicNote style={{ color: '#5181b8' }} />
            </div>
            <div className={styles.navbar__text}>Music</div>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/settings"
            activeClassName={styles.navbar__active}
            className={styles.navbar__item}>
            <div className={styles.navbar__img}>
              <Settings style={{ color: '#5181b8' }} />
            </div>
            <div className={styles.navbar__text}>Settings</div>
          </NavLink>
        </li>
      </ul>
    </section>
  );
};

export default Navbar;
