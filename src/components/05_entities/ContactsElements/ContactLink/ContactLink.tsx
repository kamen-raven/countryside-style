import React from 'react';
import styles from './ContactLink.module.scss';
import { ContactLinkInterface } from './ContactLink.interface.ts';

import TelegramIcon from '~svg/contacts/Telegram.svg';
import WhatsappIcon from '~svg/contacts/WhatsApp.svg';
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
      border: {
        telegram: styles.itemBorder_colored,
        whatsapp: styles.itemBorder_colored
      },
      fontColor: styles.itemLink_colored,
      backgroundColor: {
        telegram: styles.itemIcon_colored,
        whatsapp: styles.itemIcon_colored
      },
      svgFill: ''
    },

    white: {
      border: {
        telegram: styles.itemBorder_white_telegram,
        whatsapp: styles.itemBorder_white_whatsapp
      },
      fontColor: styles.itemLink_white,
      backgroundColor: {
        telegram: styles.itemIcon_white_telegram,
        whatsapp: styles.itemIcon_white_whatsapp
      },
      svgFill: ''
    },

    transparent: {
      border: {
        telegram: styles.itemBorder_transparent_telegram,
        whatsapp: styles.itemBorder_transparent_whatsapp
      },
      fontColor: styles.itemLink_transparent,
      backgroundColor: {
        telegram: styles.itemIcon_transparent_telegram,
        whatsapp: styles.itemIcon_transparent_whatsapp
      },
      svgFill: styles.svgFill_transparent
    },
  };

/*   const setBackgroundColor = (
    colorSchema == 'transparent' ?
      setLinkStyle[colorSchema].backgroundColor[messenger]
      :
      setLinkStyle[colorSchema].backgroundColor);
  const setBorderColor = (
    colorSchema == 'transparent' ?
      setLinkStyle[colorSchema].border[messenger]
      :
      setLinkStyle[colorSchema].border);
 */

  const setLinkType = {
    text: {
      telegram: `Telegram\u00A0\u00A0`,
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

    <div className={`${styles.itemBorder} ${setLinkStyle[colorSchema].border[messenger]}`}>
      <Link className={`${styles.itemLink} ${setLinkStyle[colorSchema].fontColor}`}
        href={setLinkType.data[messenger] && setLinkType.data[messenger]}
        target='_blank'
        rel='noopener noreferrer'>
        {setLinkType.text[messenger]}
        <span className={`${styles.itemIcon} ${setLinkStyle[colorSchema].backgroundColor[messenger]}`}>
          {setLinkType.icon[messenger]}
        </span>
      </Link>
    </div>

  );
};

export { ContactLink };
