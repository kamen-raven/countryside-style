import React from 'react';
import styles from './ContactLink.module.scss';
import { ContactLinkInterface } from './ContactLink.interface.ts';

import TelegramIcon from '~svg/contacts/Telegram2.svg';
import WhatsappIcon from '~svg/contacts/WhatsApp2.svg';
/* import VkontakteIcon from '~svg/contacts/VK.svg'; */
import generalContactsData from '~data/constant/generalContacts/generalContactsData.ts';
import Link from 'next/link';


const ContactLink: React.FC<ContactLinkInterface> = ({ messenger, colorSchema, linkInfoData }) => {

  let data;
  if (linkInfoData) {
    data = linkInfoData;
  } else {
    data = generalContactsData;
  }



  const setLinkStyle = {
    colored: {
      border: styles.itemBorder_colored,
      fontColor: styles.itemLink_colored,
      backgroundColor: styles.itemIcon_colored,
      svgFill: ''
    },
    white: {
      border: styles.itemBorder_white,
      fontColor: styles.itemLink_white,
      backgroundColor: styles.itemIcon_white,
      svgFill: ''
    },
    transparent: {
      border: styles.itemBorder_transparent,
      fontColor: styles.itemLink_transparent,
      backgroundColor: {
        telegram: styles.itemIcon_transparent_telegram,
        whatsapp: styles.itemIcon_transparent_whatsapp
      },
      svgFill: styles.svgFill_transparent
    },
  };

  const setBackgroundColor = (
    colorSchema == 'transparent' ?
      setLinkStyle[colorSchema].backgroundColor[messenger]
      :
      setLinkStyle[colorSchema].backgroundColor);


  const setLinkType = {
    text: {
      telegram: 'Telegram',
      whatsapp: 'WhatsApp'
    },
    icon: {
      telegram: <TelegramIcon className={`${setLinkStyle[colorSchema].svgFill} `} />,
      whatsapp: <WhatsappIcon className={`${setLinkStyle[colorSchema].svgFill} `} />
    },
    data: {
      telegram: data.telegram_link,
      whatsapp: data.whatsapp_link,
    }
  };

  return (

    <div className={`${styles.itemBorder} ${setLinkStyle[colorSchema].border}`}>
      <Link className={`${styles.itemLink} ${setLinkStyle[colorSchema].fontColor}`}
        href={setLinkType.data[messenger] && setLinkType.data[messenger]}
        target='_blank'
        rel='noopener noreferrer'>
        {setLinkType.text[messenger]}
        <span className={`${styles.itemIcon} ${setBackgroundColor}`}>
          {setLinkType.icon[messenger]}
        </span>
      </Link>
    </div>

  );
};

export { ContactLink };
