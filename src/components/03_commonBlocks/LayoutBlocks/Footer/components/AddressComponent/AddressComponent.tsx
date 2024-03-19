import React from 'react';
import Link from 'next/link';
import styles from './AddressComponent.module.scss';
import { AddressComponentInterface } from './AddressComponent.interface.ts';

import TelegramIcon from '~svg/contacts/Telegram_footer.svg';
import WhatsappIcon from '~svg/contacts/WhatsApp_footer.svg';
import VkontakteIcon from '~svg/contacts/VK_footer.svg';
import formatPhoneNumber from '~helpers/formatters/formatPhoneNumber.ts';

const AddressComponent: React.FC<AddressComponentInterface> = ({ data }) => {
  return (
    <address className={styles.addressContainer}>
      <Link className={styles.phone} href={`tel:${data.contacts.phone}`}>
        {formatPhoneNumber(data.contacts.phone)}
      </Link>

      <ul className={styles.contactsList}>
        <li className={`${styles.contactItem}`}>
          <Link className={styles.contactItem__link} href={data.contacts.telegram}>
            <span className={styles.contactItem__icon}>
              <TelegramIcon />
            </span>
          </Link>
        </li>
        <li className={`${styles.contactItem}`}>
          <Link className={styles.contactItem__link} href={data.contacts.whatsapp}>
            <span className={styles.contactItem__icon}>
              <WhatsappIcon />
            </span>
          </Link>
        </li>
        <li className={`${styles.contactItem}`}>
          <Link className={styles.contactItem__link} href={data.contacts.vkontakte}>
            <span className={styles.contactItem__icon}>
              <VkontakteIcon />
            </span>
          </Link>
        </li>
      </ul>

      <p className={styles.address}>
        {data.address}
        <br />
        агентство недвижимости «Загородный Стиль»
      </p>
    </address>
  );
};

export { AddressComponent };
