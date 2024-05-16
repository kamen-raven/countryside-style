'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import styles from './Navbar.module.scss';
import { NavbarInterface } from './Navbar.interface';

import { BurgerMenuButton, OpenPopupButton } from '~shared/index';
import { useWindowWidthSize } from '~hooks/useWindowWidthSize';

import { PhoneNumber } from '~entities/index';
import { AddressComponent } from '../Footer/components';

const Navbar: React.FC<NavbarInterface> = ({ listItems, generalContactsData }) => {
  const pathname = usePathname();

  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const windowWidth = useWindowWidthSize();

  const deskWidth = windowWidth && windowWidth >= 1024;
  const mobWidth = windowWidth < 1024;


  /* Проверка разрешения экрана и установка закрытого меню в случае десктопа */
  useEffect(() => {
    if (deskWidth) {
      setShowMobileMenu(false);
    }
  }, [deskWidth]);

  /* Навешиваем слушатель на закрытие меню по ESC */
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setShowMobileMenu(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);


  return (
    <nav className={`${styles.navMenu}`}>

      {/* бургер-меню - BUTTON */}
      <div className={`${styles.burgerContainer}
                      ${styles.burgerContainer__container}
                      ${deskWidth ? styles.hidden : styles.visible}
                      ${showMobileMenu ? styles.burgerContainer__container_active : ''}`}>
        <div  onClick={() => setShowMobileMenu(!showMobileMenu)} className={`${styles.burgerContainer} ${styles.burgerContainer__menuLabel}`}>
          МЕНЮ
        </div>
        <BurgerMenuButton className={styles.burgerContainer}
          onClick={() => setShowMobileMenu(!showMobileMenu)}
          buttonStatus={showMobileMenu} />
      </div>


      {/* меню открывающиеся */}
      <div className={`${styles.listContainer}
        ${deskWidth ? styles.visible : styles.hidden}

        ${(showMobileMenu && mobWidth) ? styles.listContainer_mobileShow : ''}`}>




        {/* меню навигации */}
        <ul className={`${styles.list}`}>
          {listItems.map((item) => (
            <li className={`${styles.listItem} ${pathname.startsWith(item.link) ? styles.activeLink : ''}`} key={item.name}>
              <Link className={`${styles.link}`} href={`${item.link}`} onClick={() => setShowMobileMenu(!showMobileMenu)}>
                {item.title}
              </Link>
            </li>
          ))}
        </ul>

        <div className={`${styles.mobileMenuInfo}`}>
          <div className={styles.contactContainer}>
            <PhoneNumber colorText={'white'} className={styles.phoneNumber} />
            <OpenPopupButton className={styles.buttonCall} type={'contactForm'} >
              Обратный звонок
            </OpenPopupButton>
          </div>
          <AddressComponent data={generalContactsData} type={'nav'} />
        </div>

      </div>

    </nav>
  );
};

export { Navbar };
