import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/reducers';
import { NavLink } from 'react-router-dom';
import { NAVBAR_LINKS } from './navbar-links';
import styles from './styles.module.css';

export const Navbar = () => {
  const { newMessagesCount } = useSelector((state: RootState) => state.dialogs);
  const hasMessages = newMessagesCount > 0;

  const renderMessagesCount = (count: Number) => (count > 9 ? '9+' : count.toString());

  return (
    <section className={styles.navbar}>
      <div className={styles.navbarItems}>
        {NAVBAR_LINKS.map(({ to, title, icon, messenger }) => (
          <NavLink
            to={to}
            activeClassName={styles.navbarActive}
            className={styles.navbarItem}
            key={title}>
            {icon()}
            <div className={styles.title}>{title}</div>
            {messenger && hasMessages && (
              <div className={styles.counter}>{renderMessagesCount(newMessagesCount)}</div>
            )}
          </NavLink>
        ))}
      </div>
    </section>
  );
};
