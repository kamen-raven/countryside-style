import React from 'react';
import styles from './ContactInfoElement.module.scss';
import { ContactInfoElementInterface } from './ContactInfoElement.interface.ts';

import { ContactLink, PhoneNumber } from '~entities/index.ts';
import { OpenPopupButton } from '~shared/index.ts';



const ContactInfoElement: React.FC<ContactInfoElementInterface> = ({ employeeItem, children }) => {




  return (
    <address className={styles.addressContainer} >
      <div className={styles.contactsContainer}>
        {employeeItem.contacts.phone &&
          <PhoneNumber className={styles.phoneNumber}
            employeeItem={employeeItem}
            colorText={'white'} />
        }

        <div className={styles.contactsList}>
          {employeeItem.contacts.telegram &&
            <ContactLink linkInfoData={employeeItem} messenger={'telegram'} colorSchema={'white'} />
          }
          {employeeItem.contacts.whatsapp &&
            <ContactLink linkInfoData={employeeItem} messenger={'whatsapp'} colorSchema={'white'} />
          }
        </div>
      </div>

      {children}

      {employeeItem.contacts.phone &&
        <OpenPopupButton className={styles.buttonCall}
        type={'contactForm'}>
          Оставить заявку
        </OpenPopupButton>
      }
    </address>
  );
};

export { ContactInfoElement };
