import React from 'react';
import styles from './styles.module.css';

type IconWrapperProps = {
  children: React.ReactNode;
};

export const IconWrapper = ({ children }: IconWrapperProps) => (
  <div className={styles.wrapper}>{children}</div>
);
