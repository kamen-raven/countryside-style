import React from 'react';
import styles from './ContactsPage.module.scss';
import { ContactsPageInterface } from './ContactsPage.interface.ts';
import { ContactListBlock, MapBlock, ContactsTitleBlock } from './blocks/index.ts';
import { QuestionFormBlock } from '~common/index.ts';

const ContactsPage: React.FC<ContactsPageInterface> = ({ generalContactsData, employeesList }) => {




  return (
    <main className={styles.mainContainer}>
      <ContactsTitleBlock generalContactsData={generalContactsData} />
      <MapBlock mapInfoData={generalContactsData} />
      <ContactListBlock employeesList={employeesList} />
      <QuestionFormBlock contentType={'image'}
          direction={'formFirst'}/>
    </main>
  );
};

export { ContactsPage };
