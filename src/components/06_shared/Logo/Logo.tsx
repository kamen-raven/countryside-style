import React from 'react';
import Link from 'next/link';

import { LogoInterface } from './Logo.interface';
import styles from './Logo.module.scss';

import LogoIcon from '~svg/logo/logo.svg';

const Logo: React.FC<LogoInterface> = ({ color }) => {
  const logoColor = {
    gray: styles.logo_gray
  };

  const setLogoColor = color ? logoColor[color] : '';

    return (
      <>
        <Link className = {`${styles.logo}  ${setLogoColor}`} href={'/'}>
          <LogoIcon />
        </Link>
      </>
    );
};

export { Logo };
