import React from 'react';
import Link from 'next/link';
import styles from './Navbar.module.scss';

import { NavbarInterface } from './Navbar.interface';

const Navbar: React.FC<NavbarInterface> = ({ listItems }) => {

  return (
    <nav className={`${styles.navMenu}`}>
      <ul className={`${styles.list}`}>
        {listItems.map((item) => (
          <li className={styles.listItem} key={item.name}>
            <Link className={`${styles.link}`} href={`${item.link}`}>
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export { Navbar };
