import React from 'react';
import styles from './styles.module.css';

const GITHUB_LINK = 'https://github.com/honeyurt';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <a href={GITHUB_LINK} className={styles.footerLink} target="_blank" rel="noreferrer">
        Created by Alex Smirnov. Made with <span className={styles.heart}>❤</span> in Russia.
      </a>
    </footer>
  );
};
