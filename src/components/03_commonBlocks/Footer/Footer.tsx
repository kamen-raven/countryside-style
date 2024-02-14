import React from 'react';
import { FooterInterface } from './Footer.interface';
import styles from './Footer.module.scss';
import { Logo } from '~shared/index';



import { AddressComponent, NavListFooter } from './components';


const Footer: React.FC<FooterInterface> = ({ listItems, generalContactsData }) => {
  return (
    <footer className={`${styles.footerWrapper}`}>
      <div className={styles.container}>
        <div className={styles.logoContainer}>
          <Logo color="gray" />
        </div>

        <NavListFooter listItems={listItems}/>
        <AddressComponent data={generalContactsData} />
      </div>
    </footer>
  );
};

export { Footer };
