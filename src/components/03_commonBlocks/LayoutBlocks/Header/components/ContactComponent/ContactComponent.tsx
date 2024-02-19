import React from 'react';
import styles from './ContactComponent.module.scss';

import { PhoneNumber } from '~entities/index';
import { OpenPopupButton } from '~shared/index';

const ContactComponent: React.FC = () => {
  return (
    <address className={styles.container} >
      <PhoneNumber colorText={'gray'} className={styles.phoneNumber} />
      <OpenPopupButton className={styles.buttonCall} type={'contactForm'} >
        Обратный звонок
      </OpenPopupButton>
    </address>
  );
};

export { ContactComponent };
