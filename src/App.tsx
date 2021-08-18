import React from 'react';

import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';

import styles from './App.module.css';

const App = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <Navbar />
      <div className={styles.content}></div>
    </div>
  );
};

export default App;
