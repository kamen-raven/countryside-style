import React from 'react';
import styles from './ContactsMainBlock.module.scss';
import { ContactsMainBlockInterface } from './ContactsMainBlock.interface';

import { BackgroundSVGPattern } from '~shared/index.ts';
import { AddressElement, PhoneNumber } from '~entities/index.ts';
import AttentionDisclaimerIcon from '~svg/icons/attentionDisclaimer.svg';
import MailIcon from '~svg/contacts/email.svg';

import useReactMarkdown from '~hooks/useReactMarkdown.tsx';
import Link from 'next/link';

const ContactsMainBlock: React.FC<ContactsMainBlockInterface> = ({ generalContactsData }) => {

  const mkdStyles = {
    p: styles.workTime,
    strong: styles.workTime_spanAccent
  };

  return (
    <section className={styles.wrapper}>
      <BackgroundSVGPattern positionX='right' />
      <div className={styles.container}>

        <h1 className={styles.title}>
          Контакты
        </h1>

        <div className={styles.disclaimerContainer}>
          <AttentionDisclaimerIcon className={styles.disclaimerIcon} />
          <p className={styles.disclaimerText}>
            <span className={styles.disclaimerText_spanAccent}>
              Вам не обязательно ехать к нам в офис, <br />
            </span>
            мы готовы встретиться с Вами в любом удобном для вас месте
          </p>
        </div>

        <div className={styles.addressContainer}>
          <AddressElement addressInfoData={generalContactsData} />
        </div>

        <div className={styles.contactsContainer}>
          <>{/* <p className="workingTime"></p> */}
            {useReactMarkdown(generalContactsData.workingHours, mkdStyles)}
          </>

          <>
            <PhoneNumber className={styles.phoneNumber} colorText={'green'} />
          </>

          <>
            <div className={styles.emailContainer}>
              <div className={styles.emailIcon}>
                <MailIcon />
              </div>
              <Link className={styles.email} href={`mailto:${generalContactsData.email}`}>
                {generalContactsData.email}
              </Link>
            </div>
          </>
        </div>

      </div>
    </section>
  );
};

export { ContactsMainBlock };
