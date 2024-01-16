import React from 'react';
import styles from './ContactListBlock.module.scss';
import { ContactListBlockInterface } from './ContactListBlock.interface.ts';
import { ContactLink } from '~entities/index.ts';


const ContactListBlock: React.FC<ContactListBlockInterface> = ({ employeesList }) => {
  return (
    <div>
      <ContactLink linkInfoData={employeesList} messenger={'telegram'} colorSchema={'color'} />
    </div>
  );
};

export { ContactListBlock };
