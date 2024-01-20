import React from 'react';
import styles from './Header.module.scss';
import { HeaderProps } from './Header.props';

import { menuList } from '~data/constant/navMenu/menuList';

import { SearchInput, ContactComponent } from './elements';
import { Logo, Navbar } from '~shared/index';


const Header = ({ headerGridArea }: HeaderProps): JSX.Element => {
  return (
    <header className={`${headerGridArea} ${styles.header}`}>
      <div className={styles.inner}>
        <Logo />
        <SearchInput />
        <ContactComponent />
      </div>
      <nav className = {`${styles.navMenu}`}>
        <Navbar listItems={menuList} parentComponent={'header'} />
      </nav>
    </header>
  );
};

export { Header };
