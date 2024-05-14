import React from 'react';
import styles from './BurgerMenuButton.module.scss';
import { BurgerMenuButtonInterface } from './BurgerMenuButton.interface';



const BurgerMenuButton: React.FC<BurgerMenuButtonInterface> = ({ onClick, buttonStatus, className }) => {






  return (
    <button onClick={onClick}
      className={`${className} ${styles.button} ${buttonStatus ?  styles.button_opened : ''}`}>
      <span></span>
      <span></span>
      <span></span>
    </button>
  );
};

export { BurgerMenuButton };
