import React from 'react';
import styles from './Header.module.scss';
import { HeaderInterface } from './Header.interface';

import { menuList } from '~data/constant/navMenu/menuList';

import { HeaderSearchInput, ContactComponent } from './elements';
import { Logo, Navbar } from '~shared/index';

const Header: React.FC<HeaderInterface> = ({ headerGridArea }) => {
  return (
    <header className={`${headerGridArea} ${styles.header}`}>
      <div className={styles.inner}>
        <Logo />
        <HeaderSearchInput />
        <ContactComponent />
      </div>
      <nav className = {`${styles.navMenu}`}>
        <Navbar listItems={menuList} parentComponent={'header'} />
      </nav>
    </header>
  );
};

export { Header };
