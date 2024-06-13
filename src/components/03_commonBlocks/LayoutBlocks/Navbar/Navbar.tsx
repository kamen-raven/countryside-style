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
import LogoIcon from '~svg/logo/logo.svg';



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




  // для отображения кнопки заголовка-логотипа
  const scrollPX = 92;
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > scrollPX;
      setIsVisible(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  /*   const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth' // Плавная прокрутка
      });
    };

   */

  return (
    <nav className={`${styles.navMenu}`}>

      {/* бургер-меню - BUTTON */}
      <div className={`${styles.burgerContainer}
                      ${styles.burgerContainer__container}
                      ${deskWidth ? styles.hidden : styles.visible}
                      ${showMobileMenu ? styles.burgerContainer__container_active : ''}`}>


        <Link href={'/'}
              onClick={() => setShowMobileMenu(false)}
              className={`${styles.burgerContainer}
                          ${styles.burgerContainer__menuLabel}
                          ${isVisible ? styles.burgerContainer__menuLabel_show : ''}
                          ${(showMobileMenu && isVisible) ? styles.burgerContainer__menuLabel_opened : ''}`} >
          <LogoIcon />
          Загородный стиль
        </Link>



        <div className={styles.burgerContainer__buttonContainer}
          onClick={() => setShowMobileMenu(!showMobileMenu)}>
          <BurgerMenuButton className={styles.burgerContainer}
            buttonStatus={showMobileMenu} />
        </div>
      </div>


      {/* меню открывающиеся */}
      <div className={`${styles.listContainer}
        ${deskWidth ? styles.visible : styles.hidden}

        ${(showMobileMenu && mobWidth) ? styles.listContainer_mobileShow : ''}`}>




        {/* меню навигации */}
        <ul className={`${styles.list}`}>
          {listItems.map((item) => (
            <li className={`${styles.listItem} ${pathname.startsWith(item.link) ? styles.activeLink : ''}`} key={item.name}>
              <Link className={`${styles.link}`} href={`${item.link}`} onClick={() => setShowMobileMenu(false)}>
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
