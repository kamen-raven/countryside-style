import React from 'react';
import { ContactComponentProps } from './ContactComponent.props';
import styles from './ContactComponent.module.scss';
import { PhoneNumber } from '~entities/index';

const ContactComponent = ({ ...props }: ContactComponentProps): JSX.Element => {
  return (
    <address className={styles.container} {...props}>
      <PhoneNumber colorText={'gray'} className={styles.phoneNumber} />
      <button className={styles.buttonCall} >
        Обратный звонок
      </button>
    </address>
  );
};

export { ContactComponent };
