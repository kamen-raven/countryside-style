import React from 'react';
import { ContactComponentProps } from './ContactComponent.props';
import styles from './ContactComponent.module.scss';
import { Button } from '~shared/index';
import CallIcon from '~svg/contacts/Phone.svg';

const ContactComponent = ({ ...props }: ContactComponentProps): JSX.Element => {
  return (
    <address className={styles.container} {...props}>
      <a className={styles.callLink} href={`tel:${+78126432040}`}>
        <span className={styles.callIcon}>
          <CallIcon />
        </span>
        8 (812) 643-20-40
      </a>
      <Button className={styles.buttonCall} appearance={"colored"}>
        Обратный звонок
      </Button>
    </address>
  );
};

export { ContactComponent };
