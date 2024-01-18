import React from 'react';
import { FooterProps } from './Footer.props';
import styles from './Footer.module.scss';
import { Logo, Navbar } from '~shared/index';
import { menuList } from '~data/constant/navMenu/menuList';
import TelegramIcon from '~svg/contacts/Telegram_footer.svg';
import WhatsappIcon from '~svg/contacts/WhatsApp_footer.svg';
import VkontakteIcon from '~svg/contacts/VK_footer.svg';

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
          <a className={styles.phone} href={`tel:${+78126432040}`}>
            8 (812) 643-20-40
          </a>

          <ul className={styles.contactsList}>
            <li className={`${styles.contactItem}`}>
              <a className={styles.contactItem__link} href={'/'}>
                <span className={styles.contactItem__icon}>
                  <TelegramIcon />
                </span>
              </a>
            </li>
            <li className={`${styles.contactItem}`}>
              <a className={styles.contactItem__link} href={'/'}>
                <span className={styles.contactItem__icon}>
                  <WhatsappIcon />
                </span>
              </a>
            </li>
            <li className={`${styles.contactItem}`}>
              <a className={styles.contactItem__link} href={'/'}>
                <span className={styles.contactItem__icon}>
                  <VkontakteIcon />
                </span>
              </a>
            </li>
          </ul>

          <p className={styles.address}>
            Санкт-Петербург, пр. Просвещения, дом 80, к. 1, ТЦ «Прометей», 3 этаж, офис 3.1, агентство недвижимости «Загородный Стиль»
          </p>
        </address>
      </div>
    </footer>
  );
};

export { Footer };
