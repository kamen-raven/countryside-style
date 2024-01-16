import React from 'react';
import { ContactComponentProps } from './ContactComponent.props';
import styles from './ContactComponent.module.scss';
import { Button } from '~shared/index';
import { PhoneNumber } from '~entities/index';

const ContactComponent = ({ ...props }: ContactComponentProps): JSX.Element => {
  return (
    <address className={styles.container} {...props}>
      <PhoneNumber colorText={'gray'} className={styles.phoneNumber} />
      <Button className={styles.buttonCall} appearance={"colored"}>
        Обратный звонок
      </Button>
    </address>
  );
};

export { ContactComponent };
