import React from 'react';
import styles from './ContactComponent.module.scss';

import { PhoneNumber } from '~entities/index';

const ContactComponent: React.FC = () => {
  return (
    <address className={styles.container} >
      <PhoneNumber colorText={'gray'} className={styles.phoneNumber} />
      <button className={styles.buttonCall} >
        Обратный звонок
      </button>
    </address>
  );
};

export { ContactComponent };
