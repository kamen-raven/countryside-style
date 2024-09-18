import React from 'react';
import Link from 'next/link';
import styles from './AddressComponent.module.scss';
import { AddressComponentInterface } from './AddressComponent.interface.ts';

/* import TelegramIcon from '~svg/contacts/Telegram_footer.svg';
import WhatsappIcon from '~svg/contacts/WhatsApp_footer.svg';
import VkontakteIcon from '~svg/contacts/VK_footer.svg'; */
import TelegramIcon from '~svg/contacts/Telegram.svg';
import WhatsappIcon from '~svg/contacts/WhatsApp.svg';
import VkontakteIcon from '~svg/contacts/VK.svg';
import formatPhoneNumber from '~helpers/formatters/formatPhoneNumber.ts';

const AddressComponent: React.FC<AddressComponentInterface> = ({ data, type }) => {

  const setTypeStyle = {
    container: {
      footer: styles.addressContainer_footer,
      nav: styles.addressContainer_nav
    },
    address: {
      footer: styles.address_footer,
      nav: styles.address_nav
    }
  };

  const currentDate = new Date();

  return (
    <address className={`${styles.addressContainer} ${setTypeStyle.container[type]}`}>

      {type === 'footer' ?
        <Link className={styles.phone} href={`tel:${data.contacts.phone}`}>
          {formatPhoneNumber(data.contacts.phone)}
        </Link>
        : null
      }

      <ul className={styles.contactsList}>
      <li className={`${styles.contactItem} ${styles.contactItem__telegram}`}>
          <Link className={styles.contactItem__link}
            href={data.contacts.telegram}
            rel="noopener noreferrer"
            target='_blank'>
            <span className={styles.contactItem__icon}>
              <TelegramIcon />
            </span>
          </Link>
        </li>
        <li className={`${styles.contactItem} ${styles.contactItem__whatsapp}`}>
          <Link className={styles.contactItem__link}
            href={data.contacts.whatsapp}
            rel="noopener noreferrer"
            target='_blank'>
            <span className={styles.contactItem__icon}>
              <WhatsappIcon />
            </span>
          </Link>
        </li>
        <li className={`${styles.contactItem} ${styles.contactItem__vkontakte}`}>
          <Link className={styles.contactItem__link}
            href={data.contacts.vkontakte}
            rel="noopener noreferrer"
            target='_blank'>
            <span className={styles.contactItem__icon}>
              <VkontakteIcon />
            </span>
          </Link>
        </li>
      </ul>

      <p className={`${styles.address} ${setTypeStyle.address[type]}`}>
        {data.address}
        <br />
        {type === 'footer' ? `©\u00a0${currentDate.getFullYear()}\u00a0\u00a0` : ''}Агентство недвижимости «Загородный Стиль»
      </p>
    </address>
  );
};

export { AddressComponent };
