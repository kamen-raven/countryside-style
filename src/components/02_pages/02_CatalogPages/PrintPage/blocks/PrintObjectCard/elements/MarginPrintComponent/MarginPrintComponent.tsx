/* 'use client'; */

import React from 'react';
import styles from './MarginPrintComponent.module.scss';

import LogoIcon from '~svg/logo/logo.svg';
import { PhoneNumber } from '~entities/index';
/* import { usePathname } from 'next/navigation'; */


const MarginPrintComponent: React.FC = () => {
  /*   const pathname = usePathname(); */


  return (
    <div className={styles.marginContainer}>

      <div className={styles.phoneContainer}>
        <PhoneNumber
          className={styles.phoneNumber}
          colorText={'black'} />
      </div>
      <div className={styles.labelContainer}>
        www.zagorodst.ru
      </div>


      <div className={styles.logoContainer}>
        <div className={styles.logo} >
          <LogoIcon />
          <p className={styles.name} >
            ЗАГОРОДНЫЙ СТИЛЬ
            <br />
            <span className={styles.span}>агентство недвижимости</span>
          </p>
        </div>
      </div>

    </div>

  );
};

export { MarginPrintComponent };
