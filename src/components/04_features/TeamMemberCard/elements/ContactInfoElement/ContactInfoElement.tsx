import React from 'react';
import styles from './ContactInfoElement.module.scss';
import { ContactInfoElementInterface } from './ContactInfoElement.interface.ts';

import CallIcon from '~svg/contacts/Phone.svg';
import TelegramIcon from '~svg/contacts/Telegram2.svg';
import WhatsappIcon from '~svg/contacts/WhatsApp2.svg';
import formatPhoneNumber from '~helpers/formatPhoneNumber.ts';



const ContactInfoElement: React.FC<ContactInfoElementInterface> = ({ data, children, containerColor }) => {




  return (
    <address className={styles.addressContainer} >
      <a className={styles.callLink} href={`tel:${data?.contacts.phone}`}>
        <span className={styles.callIcon}>
          <CallIcon />
        </span>
        {data?.contacts.phone &&
          formatPhoneNumber(data.contacts.phone)}
      </a>


      <div className={styles.contactsList}>
        <div className={`${styles.contactItem}`}>
          <a className={styles.contactItem__link} href={'/'}>
            Telegram
            <span className={`${styles.contactItem__icon} ${containerColor}`}>
              <TelegramIcon />
            </span>
          </a>
        </div>
        <div className={`${styles.contactItem}`}>
          <a className={styles.contactItem__link} href={'/'}>
            WhatsApp
            <span className={`${styles.contactItem__icon} ${containerColor}`}>
              <WhatsappIcon />
            </span>
          </a>
        </div>
      </div>


      {children}


      <button className={styles.buttonCall}>
        Оставить заявку
      </button>
    </address>
  );
};

export { ContactInfoElement };
