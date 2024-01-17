import React from 'react';
import styles from './ContactInfoElement.module.scss';
import { ContactInfoElementInterface } from './ContactInfoElement.interface.ts';

import TelegramIcon from '~svg/contacts/Telegram2.svg';
import WhatsappIcon from '~svg/contacts/WhatsApp2.svg';
import { PhoneNumber } from '~entities/index.ts';



const ContactInfoElement: React.FC<ContactInfoElementInterface> = ({ employeeItem, children, containerColor }) => {




  return (
    <address className={styles.addressContainer} >
      {employeeItem.contacts.phone &&
        <PhoneNumber className={styles.phoneNumber}
          employeeItem={employeeItem}
          colorText={'white'} />
      }



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
