import React from 'react';
import { Circles } from 'react-loader-spinner';
import styles from './styles.module.css';

export const Spinner = () => (
  <Circles wrapperClass={styles.loader} color="#3498db" width={60} height={60} />
);
