import React from 'react';
import styles from './AddressElement.module.scss';

import TelegramIcon from '~svg/contacts/Telegram2.svg';
import WhatsappIcon from '~svg/contacts/WhatsApp2.svg';
import VkontakteIcon from '~svg/contacts/VK.svg';

import { AddressElementInterface } from './AddressElement.interface';
import Link from 'next/link';

const AddressElement: React.FC<AddressElementInterface> = ({ addressInfoData }) => {
  return (
    <address className={styles.innerBlock}>
      <div className={styles.titleContainer}>
        <h3 className={styles.title}>
          Агентство недвижимости «Загородный Стиль»
        </h3>
        <p className={styles.address}>
          {addressInfoData.address}
        </p>
      </div>
      <ul className={styles.contactsList}>
        <li className={`${styles.contactItem} ${styles.contactItem__telegram}`}>
          <Link className={styles.contactItem__link}
            href={addressInfoData.contacts.telegram}
            target='_blank'
            rel='noopener noreferrer'>
            Telegram
            <span className={styles.contactItem__icon}>
              <TelegramIcon />
            </span>
          </Link>
        </li>
        <li className={`${styles.contactItem} ${styles.contactItem__whatsapp}`}>
          <Link className={styles.contactItem__link}
            href={addressInfoData.contacts.whatsapp}
            target='_blank'
            rel='noopener noreferrer'>
            WhatsApp
            <span className={styles.contactItem__icon}>
              <WhatsappIcon />
            </span>
          </Link>
        </li>
        <li className={`${styles.contactItem} ${styles.contactItem__vkontakte}`}>
          <Link className={styles.contactItem__link}
            href={addressInfoData.contacts.vkontakte}
            target='_blank'
            rel='noopener noreferrer'>
            Все свежие объекты смотри в нашей группе ВК
            <span className={styles.contactItem__icon}>
              <VkontakteIcon />
            </span>
          </Link>
        </li>
      </ul>
    </address>
  );
};

export { AddressElement };
