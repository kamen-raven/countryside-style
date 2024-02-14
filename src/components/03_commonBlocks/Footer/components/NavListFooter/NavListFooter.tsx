import React from 'react';
import Link from 'next/link';
import styles from './NavListFooter.module.scss';

import { NavListFooterInterface } from './NavListFooter.interface';

const NavListFooter: React.FC<NavListFooterInterface> = ({ listItems }) => {


  return (
    <>
      <ul className={`${styles.list}`}>
        {listItems.map((item) => (
          <li className={styles.listItem} key={item.name}>
            <Link className={`${styles.link}`} href={`${item.link}`}>
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
