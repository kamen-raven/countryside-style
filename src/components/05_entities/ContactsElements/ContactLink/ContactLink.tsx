import React from 'react';
import styles from './ContactLink.module.scss';
import { ContactLinkInterface } from './ContactLink.interface.ts';

import TelegramIcon from '~svg/contacts/Telegram2.svg';
import WhatsappIcon from '~svg/contacts/WhatsApp2.svg';
import VkontakteIcon from '~svg/contacts/VK.svg';


const ContactLink: React.FC<ContactLinkInterface> = ({ messenger, colorSchema, linkInfoData }) => {

const testItem = linkInfoData[0];

  const setLinkType = {
    text: {
      telegram: 'Telegram',
      whatsapp: 'WhatsApp'
    },
    icon: {
      telegram: <TelegramIcon/>,
      whatsapp: <WhatsappIcon/>
    }
  };

  const setLinkStyle = {
    color: '',
    white: '',
    transparent: ''
  };


  return (
    <div className = {styles.contactItem}>
    <a className={`${styles.contactItem__link}`}
      href={testItem.contacts[messenger]}>
      {setLinkType.text[messenger]}
      <span className={styles.contactItem__icon}>
        {setLinkType.icon[messenger]}
      </span>
    </a>
    </div>

  );
};

export { ContactLink };
