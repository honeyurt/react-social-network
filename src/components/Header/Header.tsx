import React from 'react';
import { useHistory } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { setLogout } from '../../redux/actions/auth';
import { RootState } from '../../redux/reducers';
import { Link } from 'react-router-dom';

import logoHeader from '../../assets/img/header-logo.png';
import styles from './Header.module.css';

const Header: React.FC = (props) => {
  const dispatch = useDispatch();
  const { isAuth } = useSelector((state: RootState) => state.auth);
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
        <p className={styles.header__link} onClick={onLogoutHandler}>
          Logout
        </p>
      ) : (
        <p className={styles.header__link} onClick={onLoginHandler}>
          Login
        </p>
      )}
    </header>
  );
};

export default Header;
