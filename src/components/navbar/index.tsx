import React from 'react';
import { observer } from 'mobx-react';
import { useDialogs } from '../../hooks/use-dialogs';
import { NavLink } from 'react-router-dom';
import { NAVBAR_LINKS } from './navbar-links';
import styles from './styles.module.css';

export const Navbar = observer(() => {
  const { newMessagesCount } = useDialogs();
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
});
