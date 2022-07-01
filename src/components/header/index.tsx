import React from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { LogoutIcon } from './icons/logout-icon';
import { useAuth } from '../../hooks/use-auth';
import Logo from './images/header-logo.png';
import styles from './styles.module.css';

export const Header = () => {
  const { authData, getLogout } = useAuth();
  const history = useHistory();

  const goToLoginPage = () => history.push('/login');

  return (
    <header className={styles.header}>
      <Link to="/" className={styles.link}>
        <img src={Logo} alt="Logo" className={styles.image} />
      </Link>
      {authData?.login ? (
        <div className={styles.headerLink}>
          <div className={styles.greeting}>Hello, {authData.login}</div>
          <LogoutIcon
            onClick={() => {
              getLogout().then(() => goToLoginPage());
            }}
          />
        </div>
      ) : (
        <div className={styles.headerLink} onClick={goToLoginPage}>
          Login
        </div>
      )}
    </header>
  );
};
