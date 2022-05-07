import React from 'react';
import { useHistory } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { setLogout } from '../../redux/actions/auth';
import { RootState } from '../../redux/reducers';
import { Link } from 'react-router-dom';
import { LogoutIcon } from './icons/logout-icon';
import Logo from './images/header-logo.png';
import styles from './styles.module.css';

export const Header = () => {
  const dispatch = useDispatch();
  const { isAuth, login } = useSelector((state: RootState) => state.auth);
  const history = useHistory();

  const onLogoutHandler = () => {
    dispatch(setLogout());
  };

  const onLoginHandler = () => {
    history.push('/login');
  };

  return (
    <header className={styles.header}>
      <Link to="/" className={styles.link}>
        <img src={Logo} alt="Logo" className={styles.image} />
      </Link>
      {isAuth ? (
        <div className={styles.headerLink}>
          <div className={styles.greeting}>Hello, {login}</div>
          <LogoutIcon onClick={onLogoutHandler} />
        </div>
      ) : (
        <div className={styles.headerLink} onClick={onLoginHandler}>
          Login
        </div>
      )}
    </header>
  );
};
