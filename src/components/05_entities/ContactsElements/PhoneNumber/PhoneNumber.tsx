import React from 'react';
import styles from './PhoneNumber.module.scss';
import { PhoneNumberInterface } from './PhoneNumber.interface.ts';
import CallIcon from '~svg/contacts/Phone.svg';
import generalContactsData from '~data/constant/generalContacts/generalContactsData.ts';
import formatPhoneNumber from '~helpers/formatPhoneNumber.ts';

const PhoneNumber: React.FC<PhoneNumberInterface> = ({ employeeItem, colorText = 'gray', className }) => {

  let data;
  if (employeeItem == undefined) {
    data = generalContactsData;
  } else {
    data = employeeItem;
  }


  const colorSchema = {
    white: {
      link: styles.callLink_white,
      icon: styles.callIcon_white,
    },
    gray: {
      link: styles.callLink_gray,
      icon: styles.callIcon_gray,
    },
    green: {
      link: styles.callLink_green,
      icon: styles.callIcon_green,
    },
    black: {
      link: styles.callLink_black,
      icon: styles.callIcon_black,
    },
  };


  return (
    <a className={`${styles.callLink} ${colorSchema[colorText].link} ${className}`}
      href={`tel:${data.contacts.phone}`}>
      <span className={`${styles.callIcon} ${colorSchema[colorText].icon}`}>
        <CallIcon />
      </span>
      {formatPhoneNumber(data.contacts.phone)}
    </a>
  );
};

export { PhoneNumber };
