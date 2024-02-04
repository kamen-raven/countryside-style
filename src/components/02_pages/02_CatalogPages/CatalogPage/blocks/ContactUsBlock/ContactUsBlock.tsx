import React from 'react';
import Image from 'next/image';

import styles from './ContactUsBlock.module.scss';
import { ContactUsBlockInterface } from './ContactUsBlock.interface.ts';
import Person4 from '~img/Team/Person4.jpg';
import CallIcon from '~svg/contacts/Phone.svg';
import TelegramIcon from '~svg/contacts/Telegram2.svg';
import WhatsappIcon from '~svg/contacts/WhatsApp2.svg';
import Link from 'next/link';
import useReactMarkdown from '~hooks/useReactMarkdown.tsx';
import formatPhoneNumber from '~helpers/formatPhoneNumber.ts';



const ContactUsBlock: React.FC<ContactUsBlockInterface> = ({ generalContactsData }) => {

  const scheduleStyle = {
    p: styles.schedule,
  };


  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>

        <div className={styles.innerContainer}>

          <div className={styles.titleContainer}>
            <h3 className={styles.title}>
              Ответим на все вопросы
            </h3>
            <>{/*<p className={styles.schedule}>*/}
              {useReactMarkdown(generalContactsData.workingHours, scheduleStyle)}
            </>{/*</p>*/}
          </div>

          <address className={styles.addressContainer} >
            <Link className={styles.callLink} href={`tel:${generalContactsData.contacts.phone}`}>
              <span className={styles.callIcon}>
                <CallIcon />
              </span>
              {formatPhoneNumber(generalContactsData.contacts.phone)}
            </Link>

            <ul className={styles.contactsList}>
              <li className={`${styles.contactItem}`}>
                <Link className={styles.contactItem__link} href={generalContactsData.contacts.telegram}>
                  Telegram
                  <span className={styles.contactItem__icon}>
                    <TelegramIcon />
                  </span>
                </Link>
              </li>
              <li className={`${styles.contactItem}`}>
                <Link className={styles.contactItem__link} href={generalContactsData.contacts.whatsapp}>
                  WhatsApp
                  <span className={styles.contactItem__icon}>
                    <WhatsappIcon />
                  </span>
                </Link>
              </li>
            </ul>
          </address>

          <button className={styles.buttonCall}>
            Заказать обратный звонок
          </button>
        </div>

        <Image className={styles.image}
          src={Person4}
          alt={'Ответим на все ваши вопросы'} />

      </div>
    </section>
  );
};

export { ContactUsBlock };
