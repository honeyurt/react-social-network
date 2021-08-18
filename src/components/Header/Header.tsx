import React from 'react';

import logoHeader from '../../assets/img/header-logo.png';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__logo}>
        <img src={logoHeader} alt="Logo" />
      </div>
    </header>
  );
};

export default Header;
