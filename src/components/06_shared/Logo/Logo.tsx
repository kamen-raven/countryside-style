import React from 'react';
import Link from 'next/link';

import { LogoProps } from './Logo.props';
import styles from './Logo.module.scss';

import LogoIcon from '~svg/logo/logo.svg';


const Logo = ({ color, className }: LogoProps): JSX.Element => {
  const logoColor = {
    gray: styles.logo_gray
  };

  const setLogoColor = color ? logoColor[color] : '';

    return (
      <>
        <Link className = {`${styles.logo} ${className} ${setLogoColor}`} href={'/'}>
          <LogoIcon/>
        </Link>
      </>
    );
};

export { Logo };
