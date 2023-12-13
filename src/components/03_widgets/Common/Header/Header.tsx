import React from 'react';
import styles from './Header.module.scss';
import { HeaderProps } from './Header.props';

import { menuList } from '~/utils/constants/menu/menuList';

import { SearchInput, ContactBlock, Navbar } from './components';
import { Logo } from '~/components/06_shared';


const Header = ({ headerGridArea }: HeaderProps): JSX.Element => {
  return (
    <header className={`${headerGridArea} ${styles.header}`}>
      <div className={styles.inner}>
        <Logo />
        <SearchInput />
        <ContactBlock />
      </div>
      <nav className = {`${styles.navMenu}`}>
        <Navbar listItems={menuList} />
      </nav>
    </header>
  );
};

export { Header };
