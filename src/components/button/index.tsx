import React from 'react';
import styles from './styles.module.css';

type ButtonProps = {
  /**
   * Контент
   */
  children: React.ReactNode;

  /**
   * CB при клике на кнопку
   */
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;

  /**
   * Флаг для дизейбла кнопки
   */
  disabled?: boolean;

  /**
   * Тип кнопки
   */
  type?: 'submit' | 'reset' | 'button';
};

export const Button = ({ children, onClick, disabled, type }: ButtonProps) => {
  return (
    <button className={styles.button} onClick={onClick} disabled={disabled} type={type}>
      {children}
    </button>
  );
};
