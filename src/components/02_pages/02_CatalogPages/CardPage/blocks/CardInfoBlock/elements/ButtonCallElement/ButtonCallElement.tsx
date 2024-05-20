'use client';

import React, { useState } from 'react';
import styles from './ButtonCallElement.module.scss';
import { ButtonCallElementInterface } from './ButtonCallElement.interface';
import { SellerElement } from '../PriceComponent/modules';
import ToggleIcon from '~svg/button/toggle2.svg';

const ButtonCallElement: React.FC<ButtonCallElementInterface> = ({ agentData }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className={`${styles.container}  ${isVisible ? styles.container_open : null}  `}>
      {isVisible &&
        <div className={styles.sellerContainer}>
          <span className={styles.toggleIcon} onClick={() => setIsVisible(!isVisible)}>
            <ToggleIcon />
          </span>


          <SellerElement agentData={agentData} />
        </div>
      }
      {!isVisible &&
        <button className={styles.buttonCall} onClick={() => setIsVisible(!isVisible)}>
          ПОЗВОНИТЬ
        </button>}
    </div>
  );
};

export { ButtonCallElement };
