import React from 'react';
import styles from './Header.module.scss';
import { HeaderProps } from './Header.props';

import { menuList } from '~/utils/constants/menu/menuList';

import { SearchInput, ContactComponent } from './components';
import { Logo, Navbar } from '~/components/06_shared';


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
