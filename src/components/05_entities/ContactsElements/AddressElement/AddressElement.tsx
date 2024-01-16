import React from 'react';
import styles from './AddressElement.module.scss';

import TelegramIcon from '~svg/contacts/Telegram.svg';
import WhatsappIcon from '~svg/contacts/WhatsApp.svg';
import VkontakteIcon from '~svg/contacts/VK.svg';

import { AddressElementInterface } from './AddressElement.interface';

const AddressElement: React.FC<AddressElementInterface> = ({ addressInfoData }) => {
  return (
    <address className={styles.innerBlock}>
      <p className={styles.description}>
        Агентство недвижимости «Загородный Стиль»
      </p>
      <p className={styles.address}>
        {addressInfoData.address}
      </p>
      <ul className={styles.contactsList}>
        <li className={`${styles.contactItem} ${styles.contactItem__telegram}`}>
          <a className={styles.contactItem__link}
            href={addressInfoData.contacts.telegram}>
            Telegram
            <span className={styles.contactItem__icon}>
              <TelegramIcon />
            </span>
          </a>
        </li>
        <li className={`${styles.contactItem} ${styles.contactItem__whatsapp}`}>
          <a className={styles.contactItem__link}
            href={addressInfoData.contacts.whatsapp}>
            WhatsApp
            <span className={styles.contactItem__icon}>
              <WhatsappIcon />
            </span>
          </a>
        </li>
        <li className={`${styles.contactItem} ${styles.contactItem__vkontakte}`}>
          <a className={styles.contactItem__link}
            href={addressInfoData.vkontakte}>
            Все свежие объекты смотри в нашей группе ВК
            <span className={styles.contactItem__icon}>
              <VkontakteIcon />
            </span>
          </a>
        </li>
      </ul>
    </address>
  );
};

export { AddressElement };
