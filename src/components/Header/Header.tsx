import React from 'react';
import { useHistory } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { setLogout } from '../../redux/actions/auth';
import { RootState } from '../../redux/reducers';
import { Link } from 'react-router-dom';

import logoHeader from '../../assets/img/header-logo.png';
import styles from './Header.module.css';

const Header = () => {
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
      <div className={styles.header__logo}>
        <Link to="/">
          <img src={logoHeader} alt="Logo" />
        </Link>
      </div>
      {isAuth ? (
        <div className={styles.header__link}>
          <nav>Hello, {login}</nav>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            fill-rule="nonzero"
            onClick={onLogoutHandler}>
            <path
              d="M10 2v2h12v16h-12v2h14v-20h-14zm0 7.408l2.963 2.592-2.963 2.592v-1.592h-8v-2h8v-1.592zm-2-4.408v4h-8v6h8v4l8-7-8-7z"
              fill="currentColor"
              fill-rule="nonzero"
            />
          </svg>
        </div>
      ) : (
        <p className={styles.header__link} onClick={onLoginHandler}>
          Login
        </p>
      )}
    </header>
  );
};

export default Header;
