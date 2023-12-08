import React from 'react';
import { ArrowsButtonProps } from './ArrowsButton.props';
import styles from './ArrowsButton.module.scss';

import ArrowIcon from '~svg/button/arrow.svg';

const ArrowsButton = ({ className,  ...props }: ArrowsButtonProps): JSX.Element => {
  return (
    <div className={`${styles.arrows} ${className}`} {...props}>
      <button className={`${styles.arrow} ${styles.arrow_left}`}>
        <ArrowIcon />
      </button>
      <button className={`${styles.arrow} ${styles.arrow_right}`}>
        <ArrowIcon />
      </button>
    </div>
  );
};

export { ArrowsButton };
