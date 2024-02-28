import React from 'react';
import styles from './Header.module.scss';

import { ContactComponent } from './components';
import { Logo } from '~shared/index';
import { SimpleSearchInput } from '~features/Forms';


const Header: React.FC = () => {
  return (
    <header className={`${styles.header}`}>
      <div className={styles.inner}>
        <Logo />
        <SimpleSearchInput innerText={'Поиск по сайту'}/>
   {/*      <HeaderSearchInput /> */}
        <ContactComponent />
      </div>
{/*       <nav className = {`${styles.navMenu}`}>
        <Navbar listItems={menuList} />
      </nav> */}
    </header>
  );
};

export { Header };
