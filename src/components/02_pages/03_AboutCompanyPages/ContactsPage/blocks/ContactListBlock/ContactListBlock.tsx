import React from 'react';
import styles from './ContactListBlock.module.scss';
import { ContactListBlockInterface } from './ContactListBlock.interface.ts';

import { ContactItemElement } from './elements/index.ts';

const ContactListBlock: React.FC<ContactListBlockInterface> = ({ employeesList }) => {


  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>

        {employeesList.map((item) => {
          return (
            (item.contacts.phone || item.contacts.telegram || item.contacts.whatsapp) && // проверяем на наличие телефона в базе и не выводим сотрудника без номера телефона
            <ContactItemElement key={item._id} employeeInfo={item} />
          );
        })}

      </div>
    </div>
  );
};

export { ContactListBlock };
