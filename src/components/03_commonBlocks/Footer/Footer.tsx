import React from 'react';
import { FooterProps } from './Footer.props';
import styles from './Footer.module.scss';
import { Logo, Navbar } from '~shared/index';
import { menuList } from '~data/constant/navMenu/menuList';
import TelegramIcon from '~svg/contacts/Telegram_footer.svg';
import WhatsappIcon from '~svg/contacts/WhatsApp_footer.svg';
import VkontakteIcon from '~svg/contacts/VK_footer.svg';
import Link from 'next/link';

const Footer = ({ footerGridArea }: FooterProps): JSX.Element => {
  return (
    <footer className={`${footerGridArea} ${styles.footerWrapper}`}>
      <div className={styles.container}>
        <div className = {styles.logoContainer}>
          <Logo color="gray" />
        </div>


        <Navbar listItems={menuList} parentComponent={'footer'}>
          <li className={`${styles.listItem} ${styles.listItem_empty1}`}></li>
          <li className={`${styles.listItem} ${styles.listItem_empty2}`}></li>
          <li className={`${styles.listItem} ${styles.listItem_empty3}`}></li>
        </Navbar>

        <address className={styles.addressContainer}>
          <Link className={styles.phone} href={`tel:${+78126432040}`}>
            8 (812) 643-20-40
          </Link>

          <ul className={styles.contactsList}>
            <li className={`${styles.contactItem}`}>
              <Link className={styles.contactItem__link} href={'/'}>
                <span className={styles.contactItem__icon}>
                  <TelegramIcon />
                </span>
              </Link>
            </li>
            <li className={`${styles.contactItem}`}>
              <Link className={styles.contactItem__link} href={'/'}>
                <span className={styles.contactItem__icon}>
                  <WhatsappIcon />
                </span>
              </Link>
            </li>
            <li className={`${styles.contactItem}`}>
              <Link className={styles.contactItem__link} href={'/'}>
                <span className={styles.contactItem__icon}>
                  <VkontakteIcon />
                </span>
              </Link>
            </li>
          </ul>

          <p className={styles.address}>
            Санкт-Петербург, пр.&nbsp;Просвещения, дом&nbsp;80, к.&nbsp;1, ТЦ&nbsp;«Прометей», 3&nbsp;этаж, офис&nbsp;3.1,
            <br/> агентство недвижимости «Загородный Стиль»
          </p>
        </address>
      </div>
    </footer>
  );
};

export { Footer };
