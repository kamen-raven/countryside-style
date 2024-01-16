import React from 'react';
import styles from './ContactsPage.module.scss';
import { ContactsPageInterface } from './ContactsPage.interface.ts';
import { ContactListBlock, MapBlock, QuestionFormBlock, ContactsMainBlock } from './blocks/index.ts';

const ContactsPage: React.FC<ContactsPageInterface> = ({ generalContactsData, employeesList }) => {




  return (
    <main className={styles.mainContainer}>
      <ContactsMainBlock generalContactsData={generalContactsData} />
      <MapBlock mapInfoData={generalContactsData} />
      <ContactListBlock employeesList={employeesList} />
      <QuestionFormBlock/>
    </main>
  );
};

export { ContactsPage };
