'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import styles from './Navbar.module.scss';
import { NavbarInterface } from './Navbar.interface';

import { BurgerMenuButton } from '~shared/index';
import { useWindowWidthSize } from '~hooks/useWindowWidthSize';

const Navbar: React.FC<NavbarInterface> = ({ listItems }) => {
  const pathname = usePathname();

  const [mobileNav, setMobileNav] = useState(false);

  useEffect(() => {
    if (deskWidth) {
      setMobileNav(false);
    }
  }, []);


  const windowWidth = useWindowWidthSize();

  const deskWidth = windowWidth && windowWidth >= 1024;
  const mobWidth = windowWidth < 1024;



  useEffect(() => {
    if (deskWidth) {
      setMobileNav(false);
    }
  }, [deskWidth]);



  return (
    <nav className={`${styles.navMenu}`}>

      {/* бургер-меню */}
      <div className={`${styles.burgerMenu}
                      ${styles.burgerMenu__container}
                      ${deskWidth ? styles.hidden : styles.visible }
                      ${mobileNav ? styles.burgerMenu__container_active : ''}`}>
        <p className={`${styles.burgerMenu} ${styles.burgerMenu__menuLabel}`}>
          МЕНЮ
        </p>
        <BurgerMenuButton className={styles.burgerMenu}
          onClick={() => setMobileNav(!mobileNav)}
          buttonStatus={mobileNav} />
      </div>



      <div className={`${styles.listContainer}
        ${deskWidth ? styles.visible : styles.hidden}
        ${(mobileNav && mobWidth) ? styles.listContainer_mobile : ''}`}>
        <ul className={`${styles.list}`}>
          {listItems.map((item) => (
            <li className={`${styles.listItem} ${pathname.startsWith(item.link) ? styles.activeLink : ''}`} key={item.name}>
              <Link className={`${styles.link}`} href={`${item.link}`}>
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

    </nav>
  );
};

export { Navbar };
