import React from 'react';
import styles from './ContactLink.module.scss';
import { ContactLinkInterface } from './ContactLink.interface.ts';

import TelegramIcon from '~svg/contacts/Telegram2.svg';
import WhatsappIcon from '~svg/contacts/WhatsApp2.svg';
/* import VkontakteIcon from '~svg/contacts/VK.svg'; */
import GeneralContactsData from '~data/GeneralContacts/GeneralContactsData.ts';


const ContactLink: React.FC<ContactLinkInterface> = ({ messenger, colorSchema, linkInfoData }) => {

  let data;
  if (linkInfoData) {
    data = linkInfoData;
  } else {
    data = GeneralContactsData;
  }


  const setLinkType = {
    text: {
      telegram: 'Telegram',
      whatsapp: 'WhatsApp'
    },
    icon: {
      telegram: <TelegramIcon />,
      whatsapp: <WhatsappIcon />

    }
  };

  const setLinkStyle = {
    color: '',
    white: '',
    transparent: ''
  };


  return (

    <div className={styles.contactItem}>
      <a className={`${styles.contactItem__link}`}
        href={data.contacts[messenger]}>
        {setLinkType.text[messenger]}
        <span className={styles.contactItem__icon}>
          {setLinkType.icon[messenger]}
        </span>
      </a>
    </div>

  );
};

export { ContactLink };
