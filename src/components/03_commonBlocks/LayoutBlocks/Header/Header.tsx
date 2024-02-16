import React from 'react';
import styles from './Header.module.scss';

import { HeaderSearchInput, ContactComponent } from './components';
import { Logo } from '~shared/index';


const Header: React.FC = () => {
  return (
    <header className={`${styles.header}`}>
      <div className={styles.inner}>
        <Logo />
        <HeaderSearchInput />
        <ContactComponent />
      </div>
{/*       <nav className = {`${styles.navMenu}`}>
        <Navbar listItems={menuList} />
      </nav> */}
    </header>
  );
};

export { Header };
