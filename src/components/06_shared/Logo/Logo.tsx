import React from 'react';
import Link from 'next/link';

import { LogoInterface } from './Logo.interface';
import styles from './Logo.module.scss';

//import LogoIcon from '~svg/logo/logo.svg';
import LogoIcon from '~svg/logo/logo.svg';

const Logo: React.FC<LogoInterface> = ({ color }) => {

  return (
    <>
      <Link className={`${styles.logo}  ${color === 'gray' ? styles.logo_gray : null}`} href={'/'}>
        <LogoIcon />
        <p className={`${styles.name}  ${color === 'gray' ? styles.name_gray : null}`}>
          ЗАГОРОДНЫЙ СТИЛЬ
          <br />
          <span className={styles.span}>агентство недвижимости</span>
        </p>
      </Link>
    </>
  );
};

export { Logo };
