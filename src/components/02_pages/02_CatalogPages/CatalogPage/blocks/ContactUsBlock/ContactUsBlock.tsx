import React from 'react';
import Image from 'next/image';

import styles from './ContactUsBlock.module.scss';
import { ContactUsBlockInterface } from './ContactUsBlock.interface.ts';
import { HalfScreenTemplate } from '~entities/index.ts';

import Person4 from '~img/Team/Person4.jpg';
import { Button } from '~shared/index.ts';
import CallIcon from '~svg/contacts/Phone.svg';
import TelegramIcon from '~svg/contacts/Telegram2.svg';
import WhatsappIcon from '~svg/contacts/WhatsApp2.svg';
import Link from 'next/link';



const ContactUsBlock: React.FC<ContactUsBlockInterface> = () => {
  return (
    <section className={styles.wrapper}>
      <HalfScreenTemplate conditionColor={'gray'} conditionTemplate={'textFirst'}>
        <div className={styles.imageContainer}>
          <Image className={styles.image}
            src={Person4}
            alt={''} />
        </div>
        <div className={styles.infoContainer}>
          <h3 className={styles.title}>
            Ответим на все вопросы
          </h3>
          <p className={styles.schedule}>
            Ежедневно с 9.00 до 21.00 без обеда и выходных.
          </p>


          <address className={styles.addressContainer} >


            <Link className={styles.callLink} href={`tel:${+78126432040}`}>
              <span className={styles.callIcon}>
                <CallIcon />
              </span>
              8&nbsp;(812)&nbsp;643-20-40
            </Link>


            <ul className={styles.contactsList}>
              <li className={`${styles.contactItem}`}>
                <Link className={styles.contactItem__link} href={'/'}>
                  Telegram
                  <span className={styles.contactItem__icon}>
                    <TelegramIcon />
                  </span>
                </Link>
              </li>
              <li className={`${styles.contactItem}`}>
                <Link className={styles.contactItem__link} href={'/'}>
                  WhatsApp
                  <span className={styles.contactItem__icon}>
                    <WhatsappIcon />
                  </span>
                </Link>
              </li>
            </ul>



            <Button className={styles.buttonCall} appearance={"dark"}>
              Заказать обратный звонок
            </Button>
          </address>
        </div>
      </HalfScreenTemplate>
    </section>
  );
};

export { ContactUsBlock };
