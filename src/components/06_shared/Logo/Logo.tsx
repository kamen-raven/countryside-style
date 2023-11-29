import React from 'react';
//import { LogoProps } from './LogoProps';
import styles from './Logo.module.scss';
import LogoIcon from '~svg/logo/logo.svg';
import Link from 'next/link';


const Logo = (): JSX.Element => {
    return (
      <>
        <Link className = {styles.logo} href={'/'}>
          <LogoIcon/>
        </Link>
      </>
    );
};

export { Logo };
