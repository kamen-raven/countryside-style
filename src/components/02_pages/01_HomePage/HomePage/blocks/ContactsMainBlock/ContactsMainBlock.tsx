import React from 'react';
import { ContactsBlockProps } from './ContactsMainBlock.interface';
import styles from './ContactsMainBlock.module.scss';

import { AddressElement } from '~entities/index';
import { ContactFormLayout } from '~common/QuestionFormBlock/elements';
import { RequestFormComponent } from '~features/Forms';
import Link from 'next/link';


const ContactsMainBlock: React.FC<ContactsBlockProps> = ({ generalContactsData }) => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.containerInfo}>
        <h2 className={styles.title}>
          <Link className={styles.title_link} href={'/contacts'}>
            Контакты
          </Link>
        </h2>
        <AddressElement addressInfoData={generalContactsData} />
      </div>

      <ContactFormLayout contentType='map' mapContent={generalContactsData.mapLink}>
        <RequestFormComponent />
      </ContactFormLayout>
    </section>
  );
};

export { ContactsMainBlock };
