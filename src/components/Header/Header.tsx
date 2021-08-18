import React from 'react';
import { Link } from 'react-router-dom';

import logoHeader from '../../assets/img/header-logo.png';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__logo}>
        <Link to="/">
          <img src={logoHeader} alt="Logo" />
        </Link>
      </div>
    </header>
  );
};

export default Header;
