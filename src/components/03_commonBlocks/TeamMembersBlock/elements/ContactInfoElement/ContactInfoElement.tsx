import React from 'react';
import styles from './ContactInfoElement.module.scss';
import { ContactInfoElementInterface } from './ContactInfoElement.interface.ts';

import { ContactLink, PhoneNumber } from '~entities/index.ts';
import { OpenPopupButton } from '~shared/index.ts';



const ContactInfoElement: React.FC<ContactInfoElementInterface> = ({ employeeItem, children }) => {




  return (
    <address className={`${styles.addressContainer} ${employeeItem.phone_number !== '' ? styles.addressContainer_margin : ''}`} >
      <div className={styles.contactsContainer}>
        {employeeItem.phone_number &&
          <PhoneNumber className={styles.phoneNumber}
            employeeItem={employeeItem}
            colorText={'white'} />
        }

        <div className={styles.contactsList}>
          {employeeItem.telegram_link &&
            <ContactLink linkInfoData={employeeItem} messenger={'telegram'} colorSchema={'white'} />
          }
          {employeeItem.whatsapp_link &&
            <ContactLink linkInfoData={employeeItem} messenger={'whatsapp'} colorSchema={'white'} />
          }
        </div>
      </div>

      {children}

      {employeeItem.phone_number &&
        <OpenPopupButton className={styles.buttonCall}
        type={'contactForm'}>
          Оставить заявку
        </OpenPopupButton>
      }
    </address>
  );
};

export { ContactInfoElement };
