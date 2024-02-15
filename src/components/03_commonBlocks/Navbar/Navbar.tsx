'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import styles from './Navbar.module.scss';
import { NavbarInterface } from './Navbar.interface';

const Navbar: React.FC<NavbarInterface> = ({ listItems }) => {
  const pathname = usePathname();


  return (
    <nav className={`${styles.navMenu}`}>
      <ul className={`${styles.list}`}>
        {listItems.map((item) => (
          <li className={`${styles.listItem} ${pathname === item.link ? styles.active : ''}`} key={item.name}>
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
