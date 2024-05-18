import React from 'react';
import styles from './BurgerMenuButton.module.scss';
import { BurgerMenuButtonInterface } from './BurgerMenuButton.interface';



const BurgerMenuButton: React.FC<BurgerMenuButtonInterface> = ({ buttonStatus, className }) => {






  return (
    <button
      className={`${className} ${styles.button} ${buttonStatus ?  styles.button_opened : ''}`}>
      <span></span>
      <span></span>
      <span></span>
    </button>
  );
};

export { BurgerMenuButton };
