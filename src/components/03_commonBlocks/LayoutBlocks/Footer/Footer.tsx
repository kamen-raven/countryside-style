import React from 'react';
import { FooterInterface } from './Footer.interface';
import styles from './Footer.module.scss';
import { Logo } from '~shared/index';



import { AddressComponent, NavListFooter } from './components';
import Link from 'next/link';
import formatPhoneNumber from '~helpers/formatters/formatPhoneNumber';


const Footer: React.FC<FooterInterface> = ({ listItems, generalContactsData }) => {
  return (
    <footer className={`${styles.footerWrapper}`}>
      <div className={styles.container}>
        <div className={styles.logoContainer}>
          <Logo color="gray" />
        </div>
        <Link className={styles.phone} href={`tel:${generalContactsData.contacts.phone}`}>
            {formatPhoneNumber(generalContactsData.contacts.phone)}
          </Link>


        <NavListFooter listItems={listItems} />
        <AddressComponent data={generalContactsData} />
      </div>
    </footer>
  );
};

export { Footer };
