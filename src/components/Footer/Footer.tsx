import React from 'react';

import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <a href="https://github.com/honeyurt">
        Created by Alex Smirnov. Made with <span>❤</span> in Russia.
      </a>
    </footer>
  );
};

export default Footer;
