import React from 'react';
import styles from './styles.module.css';

type ButtonProps = {
  children: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  disabled?: boolean;
  type?: 'submit' | 'reset' | 'button';
};

export const Button = ({ children, onClick, disabled, type }: ButtonProps) => {
  return (
    <button className={styles.button} onClick={onClick} disabled={disabled} type={type}>
      {children}
    </button>
  );
};
