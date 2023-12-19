import React from 'react';
import { ContactsBlockProps } from './ContactsBlock.props';
import styles from './ContactsBlock.module.scss';
import Image from 'next/image';

import TelegramIcon from '~svg/contacts/Telegram.svg';
import WhatsappIcon from '~svg/contacts/WhatsApp.svg';
import VkontakteIcon from '~svg/contacts/VK.svg';
import { RequestFormComponent } from '~entities/index';


const ContactsBlock: React.FC<ContactsBlockProps> = ({ }) => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.containerInfo}>
        <h2 className={styles.title}>
          Контакты
        </h2>
        <address className={styles.innerBlock}>
          <p className={styles.description}>
            Агентство недвижимости «Загородный Стиль»
          </p>
          <p className={styles.address}>
            Санкт-Петербург, пр. Просвещения, дом 80, к. 1, ТЦ «Прометей», 3 этаж, офис 3.1
          </p>
          <ul className={styles.contactsList}>
            <li className={`${styles.contactItem} ${styles.contactItem__telegram}`}>
              <a className={styles.contactItem__link} href={'/'}>
                Telegram
                <span className={styles.contactItem__icon}>
                  <TelegramIcon />
                </span>
              </a>
            </li>
            <li className={`${styles.contactItem} ${styles.contactItem__whatsapp}`}>
              <a className={styles.contactItem__link} href={'/'}>
                WhatsApp
                <span className={styles.contactItem__icon}>
                  <WhatsappIcon />
                </span>
              </a>
            </li>
            <li className={`${styles.contactItem} ${styles.contactItem__vkontakte}`}>
              <a className={styles.contactItem__link} href={'/'}>
                Все свежие объекты смотри в нашей группе ВК
                <span className={styles.contactItem__icon}>
                  <VkontakteIcon />
                </span>
              </a>
            </li>
          </ul>
        </address>
      </div>

      <div className={styles.containerForm}>
        <div className={styles.wrapperInner}>
          <iframe className={styles.yandexMap} src="https://yandex.ru/map-widget/v1/?um=constructor%3A82d4640cfff3946c64d9620d25ce191b0ca06b56eea9ee8a0ad636757cd19e55&amp;source=constructor" ></iframe>
        </div>
        <div className={styles.wrapperForm}>
          <RequestFormComponent />
        </div>
      </div>

    </section>
  );
};

export { ContactsBlock };
