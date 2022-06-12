import React from 'react';
import { Header } from '../header';
import { Navbar } from '../navbar';
import { Footer } from '../footer';
import styles from './styles.module.css';

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout = ({ children }: LayoutProps) => (
  <div className={styles.wrapper}>
    <Header />
    <Navbar />
    <div className={styles.content}>{children}</div>
    <Footer />
  </div>
);
