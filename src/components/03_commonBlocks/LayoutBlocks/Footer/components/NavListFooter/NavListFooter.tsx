'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import styles from './NavListFooter.module.scss';
import { NavListFooterInterface } from './NavListFooter.interface';

const NavListFooter: React.FC<NavListFooterInterface> = ({ listItems }) => {
  const pathname = usePathname();


  return (
    <>
      <ul className={`${styles.list}`}>
        {listItems.map((item) => (
          <li className={styles.listItem} key={item.name}>
            <Link className={`${styles.link} ${pathname === item.link ? styles.active : ''}`} href={item.link}>
              {item.title}
            </Link>
          </li>
        ))}
          <li className={`${styles.listItem} ${styles.listItem_empty1}`}></li>
          <li className={`${styles.listItem} ${styles.listItem_empty2}`}></li>
          <li className={`${styles.listItem} ${styles.listItem_empty3}`}></li>
      </ul>
    </>
  );
};

export { NavListFooter };
