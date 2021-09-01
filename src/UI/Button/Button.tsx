import React from 'react';

import styles from './Button.module.css';

interface Props {
  children?: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void | undefined;
  disabled?: boolean | undefined;
  type?: 'submit' | 'reset' | 'button';
  form?: string;
}

const Button: React.FC<Props> = ({ children, onClick, disabled, type, form }) => {
  return (
    <button className={styles.button} onClick={onClick} disabled={disabled} type={type} form={form}>
      {children}
    </button>
  );
};

export default Button;
