'usr client';
import React from 'react';
import { ArrowsButtonProps } from './ArrowsButton.props';
import styles from './ArrowsButton.module.scss';

import ArrowIcon from '~svg/button/arrow.svg';

const ArrowsButton = ({ position, className, onClick, disabled, type = 'common' }: ArrowsButtonProps): JSX.Element => {

  const setPosition = {
    left: styles.arrow_left,
    right: styles.arrow_right
  };


  return (
    <>
      {type === 'common' ?
        <button className={`${styles.arrow} ${styles.arrowDesign} ${disabled ? styles.disabled : ''} ${setPosition[position]} ${className}`}
          onClick={onClick}
          disabled={disabled}>
          <ArrowIcon />
        </button>
        :
        <button className={`${styles.arrow} ${styles.arrow__inImg} ${disabled ? styles.disabled : ''} ${setPosition[position]} ${className}`}
          onClick={onClick}
          disabled={disabled}>
          <span className={styles.arrowDesign}>
            <ArrowIcon />
          </span>
        </button>
      }
    </>
  );
};

export { ArrowsButton };
