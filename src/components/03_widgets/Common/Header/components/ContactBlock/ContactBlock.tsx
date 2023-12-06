import React from 'react';
import { ContactBlockProps } from './ContactBlock.props';
import styles from './ContactBlock.module.scss';
import { Button } from '~/components/06_shared';
import CallIcon from '~svg/contacts/Phone.svg';

const ContactBlock = ({ ...props }: ContactBlockProps): JSX.Element => {
  return (
    <div className={styles.container} {...props}>
      <a className={styles.callLink} href={`tel:${+78126432040}`}>
        <span className={styles.callIcon}>
          <CallIcon />
        </span>
        8 (812) 643-20-40
      </a>
      <Button className={styles.buttonCall} appearance={"colored"}>
        Обратный звонок
      </Button>
    </div>
  );
};

export { ContactBlock };
