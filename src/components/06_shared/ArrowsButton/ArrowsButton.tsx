'usr client';
import React from 'react';
import { ArrowsButtonProps } from './ArrowsButton.props';
import styles from './ArrowsButton.module.scss';

import ArrowIcon from '~svg/button/arrow.svg';

const ArrowsButton = ({ position, className, onClick, type = 'common' }: ArrowsButtonProps): JSX.Element => {

  const setPosition = {
    left: styles.arrow_left,
    right: styles.arrow_right
  };





  return (
    <>
      {type === 'common' ?
        <button className={`${styles.arrow} ${styles.arrowDesign} ${setPosition[position]} ${className}`}
          onClick={onClick}>
          <ArrowIcon />
        </button>
        :
        <button className={`${styles.arrow} ${styles.arrow__inImg} ${setPosition[position]} ${className}`}
          onClick={onClick}>
          <span className={styles.arrowDesign}>
            <ArrowIcon />
          </span>
        </button>
      }
    </>





    /*     <div className={`${styles.arrows} ${className}`} {...props}>
          <button className={`${styles.arrow} ${styles.arrow_left}`}
                  >
            <ArrowIcon />
          </button>
          <button className={`${styles.arrow} ${styles.arrow_right}`}>
            <ArrowIcon />
          </button>
        </div> */
  );
};

export { ArrowsButton };
